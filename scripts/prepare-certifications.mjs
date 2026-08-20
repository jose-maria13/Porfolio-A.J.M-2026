import { mkdir, copyFile } from "node:fs/promises";
import { createServer } from "node:http";
import { createReadStream } from "node:fs";
import { dirname, extname, resolve, join } from "node:path";
import { chromium } from "playwright";
import { stat } from "node:fs/promises";

const root = resolve(".");
const srcDir = resolve(root, "imagenes-certificaciones");

const pngCopies = [
  {
    from: "Coderhouse - testing qa.png",
    to: "public/certifications/coderhouse/testing-qa-manual.png",
  },
  {
    from: "certificado publicdad en redes.png",
    to: "public/certifications/coderhouse/publicidad-redes-avanzado.png",
  },
  {
    from: "Certificado comunity manager y publicidad_.png",
    to: "public/certifications/coderhouse/community-manager-publicidad.png",
  },
];

const pdfRenders = [
  {
    from: "Base de datos y sql para tester.pdf",
    to: "public/certifications/udemy/base-de-datos-sql-tester.png",
  },
  {
    from: "Google Sheets.pdf",
    to: "public/certifications/google/google-sheets.png",
  },
  {
    from: "n8n.pdf",
    to: "public/certifications/otros/n8n.png",
  },
  {
    from: "UC-1ab96526-bc18-472d-9601-7f69325083a5.pdf",
    to: "public/certifications/udemy/uc-1ab96526.png",
  },
  {
    from: "UC-28a92b27-3b02-4de1-a0c4-f334dec1b776.pdf",
    to: "public/certifications/udemy/uc-28a92b27.png",
  },
  {
    from: "UC-514e7f8b-f943-4032-9fe3-355b6145ceb5.pdf",
    to: "public/certifications/udemy/uc-514e7f8b.png",
  },
];

const mime = {
  ".pdf": "application/pdf",
  ".html": "text/html; charset=utf-8",
  ".js": "application/javascript",
};

async function ensureDirFor(filePath) {
  await mkdir(dirname(filePath), { recursive: true });
}

async function copyPngs() {
  for (const item of pngCopies) {
    const from = resolve(srcDir, item.from);
    const to = resolve(root, item.to);
    await ensureDirFor(to);
    await copyFile(from, to);
    console.log("copied", item.to);
  }
}

function startStaticServer() {
  return new Promise((resolvePromise) => {
    const server = createServer(async (req, res) => {
      try {
        const url = new URL(req.url || "/", "http://127.0.0.1");
        if (url.pathname === "/render") {
          const file = url.searchParams.get("file") || "";
          const html = `<!doctype html>
<html>
  <head>
    <meta charset="utf-8" />
    <style>
      html, body { margin: 0; background: #111; }
      #wrap { display:flex; justify-content:center; padding: 12px; }
      canvas { background: #fff; }
    </style>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.min.js"></script>
  </head>
  <body>
    <div id="wrap"><canvas id="c"></canvas></div>
    <script>
      pdfjsLib.GlobalWorkerOptions.workerSrc =
        "https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.worker.min.js";
      const file = ${JSON.stringify(file)};
      window.__ready = pdfjsLib.getDocument("/files/" + encodeURIComponent(file)).promise
        .then(async (pdf) => {
          const page = await pdf.getPage(1);
          const viewport = page.getViewport({ scale: 1.35 });
          const canvas = document.getElementById("c");
          const ctx = canvas.getContext("2d");
          canvas.width = viewport.width;
          canvas.height = viewport.height;
          await page.render({ canvasContext: ctx, viewport }).promise;
          // Fit page viewport to canvas so full cert is visible for screenshot tooling
          document.documentElement.style.width = canvas.width + "px";
          document.body.style.width = canvas.width + "px";
          document.title = "ready";
        })
        .catch((err) => {
          document.title = "error";
          document.body.innerHTML = "<pre>" + String(err) + "</pre>";
        });
    </script>
  </body>
</html>`;
          res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
          res.end(html);
          return;
        }

        if (url.pathname.startsWith("/files/")) {
          const name = decodeURIComponent(url.pathname.slice("/files/".length));
          const filePath = join(srcDir, name);
          const info = await stat(filePath);
          if (!info.isFile()) {
            res.writeHead(404);
            res.end("not found");
            return;
          }
          const type = mime[extname(filePath).toLowerCase()] || "application/octet-stream";
          res.writeHead(200, { "Content-Type": type, "Content-Length": info.size });
          createReadStream(filePath).pipe(res);
          return;
        }

        res.writeHead(404);
        res.end("not found");
      } catch (error) {
        res.writeHead(500);
        res.end(String(error));
      }
    });

    server.listen(0, "127.0.0.1", () => {
      const address = server.address();
      resolvePromise({
        server,
        port: typeof address === "object" && address ? address.port : 0,
      });
    });
  });
}

async function renderPdfs() {
  const { server, port } = await startStaticServer();
  const browser = await chromium.launch();
  const page = await browser.newPage({
    viewport: { width: 1600, height: 1130 },
  });

  try {
    for (const item of pdfRenders) {
      const to = resolve(root, item.to);
      await ensureDirFor(to);
      const target = `http://127.0.0.1:${port}/render?file=${encodeURIComponent(item.from)}`;
      await page.goto(target, { waitUntil: "networkidle" });
      await page.waitForFunction(() => document.title === "ready" || document.title === "error", null, {
        timeout: 90000,
      });
      const title = await page.title();
      if (title !== "ready") {
        const body = await page.locator("body").innerText();
        throw new Error(`Failed rendering ${item.from}: ${body}`);
      }
      await page.locator("#c").screenshot({ path: to, type: "png" });
      console.log("rendered", item.to);
    }
  } finally {
    await browser.close();
    server.close();
  }
}

await copyPngs();
await renderPdfs();
console.log("done");
