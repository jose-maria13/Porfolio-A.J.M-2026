import { mkdir } from "node:fs/promises";
import { dirname, resolve } from "node:path";
import { chromium } from "playwright";

const outputs = [
  "public/cv-jose-maria-atonur.pdf",
  "public/cv-jose-maria-atonur-2026.pdf",
];

const links = {
  email: "mailto:Atonur65@gmail.com",
  linkedin: "https://www.linkedin.com/in/jose-maria-atonur-94949324b",
  github: "https://github.com/jose-maria13",
  portfolio: "https://porfolio-a-j-m.vercel.app/es",
  strata: "https://strata-analytics.us/es/",
  vethealth: "https://vethealth-lime.vercel.app/",
  pasionUrbana: "https://pasion-urbana.vercel.app/",
  csvComparator: "https://github.com/jose-maria13/csv-dataset-comparator",
  conversationalStress: "https://github.com/jose-maria13/conversational-agent-stress-test",
  cypressE2E: "https://github.com/jose-maria13/cypress-conversational-agent-e2e",
  stressAgents: "https://github.com/jose-maria13/Stress-Test-Agentes-IA",
};

const link = (href, label) => `<a href="${href}">${label}</a>`;

const html = `<!doctype html>
<html lang="es">
  <head>
    <meta charset="utf-8" />
    <title>CV - José María Atonur</title>
    <style>
      @page {
        size: A4;
        margin: 12mm 13mm;
      }

      * {
        box-sizing: border-box;
      }

      body {
        margin: 0;
        color: #111827;
        font-family: Arial, Helvetica, sans-serif;
        font-size: 10px;
        line-height: 1.35;
        background: white;
      }

      a {
        color: #1d4ed8;
        text-decoration: none;
      }

      .page {
        width: 100%;
      }

      .header {
        display: grid;
        grid-template-columns: 1.3fr 1fr;
        gap: 18px;
        padding-bottom: 10px;
        border-bottom: 2px solid #111827;
      }

      .name {
        margin: 0;
        font-size: 27px;
        line-height: 1;
        letter-spacing: -0.7px;
      }

      .degree {
        margin: 5px 0 0;
        color: #4b5563;
        font-size: 10.5px;
        font-weight: 700;
      }

      .headline {
        display: inline-flex;
        margin-top: 8px;
        padding: 5px 8px;
        border-radius: 999px;
        color: #065f46;
        background: #ecfdf5;
        border: 1px solid #a7f3d0;
        font-size: 10px;
        font-weight: 800;
      }

      .contact {
        display: grid;
        gap: 3px;
        justify-items: end;
        color: #374151;
        font-size: 8.6px;
        text-align: right;
      }

      .section {
        margin-top: 10px;
        break-inside: avoid;
      }

      .section-title {
        display: flex;
        align-items: center;
        gap: 8px;
        margin: 0 0 6px;
        color: #111827;
        font-size: 11px;
        font-weight: 900;
        letter-spacing: 0.08em;
      }

      .section-title::after {
        content: "";
        height: 1px;
        flex: 1;
        background: linear-gradient(90deg, #d1d5db, transparent);
      }

      .profile {
        display: grid;
        grid-template-columns: 1fr;
        gap: 4px;
        color: #1f2937;
      }

      .item {
        padding: 8px 10px;
        border: 1px solid #e5e7eb;
        border-radius: 10px;
        background: #fbfdff;
        break-inside: avoid;
      }

      .item + .item {
        margin-top: 6px;
      }

      .item-header {
        display: flex;
        justify-content: space-between;
        gap: 12px;
        margin-bottom: 4px;
      }

      .role {
        margin: 0;
        font-size: 10.6px;
        font-weight: 900;
      }

      .meta {
        color: #4b5563;
        font-size: 8.7px;
        font-weight: 700;
        text-align: right;
        white-space: nowrap;
      }

      ul {
        margin: 5px 0 0;
        padding-left: 13px;
      }

      li {
        margin: 0 0 2px;
      }

      .stack {
        margin-top: 5px;
        color: #065f46;
        font-size: 8.7px;
        font-weight: 800;
      }

      .projects {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        gap: 6px;
      }

      .project {
        padding: 7px 9px;
        border-radius: 9px;
        border: 1px solid #e5e7eb;
        background: #ffffff;
        break-inside: avoid;
      }

      .project-title {
        margin: 0 0 3px;
        font-size: 9.6px;
        font-weight: 900;
      }

      .grid-two {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 7px;
      }

      .compact-list {
        display: grid;
        gap: 4px;
      }

      .compact-row {
        padding: 6px 8px;
        border-left: 3px solid #10b981;
        background: #f9fafb;
        border-radius: 6px;
      }

      .label {
        display: block;
        margin-bottom: 2px;
        font-weight: 900;
      }

      .footer-note {
        margin-top: 9px;
        padding-top: 7px;
        border-top: 1px solid #e5e7eb;
        color: #4b5563;
        font-size: 8.4px;
        font-style: italic;
      }

      @media print {
        .item,
        .project,
        .compact-row {
          print-color-adjust: exact;
          -webkit-print-color-adjust: exact;
        }
      }
    </style>
  </head>
  <body>
    <main class="page">
      <header class="header">
        <div>
          <h1 class="name">José María Atonur</h1>
          <p class="degree">Técnico Universitario en Desarrollo y Calidad de Software</p>
          <div class="headline">Analista de Datos | QA | Automatización | Análisis Funcional</div>
        </div>
        <address class="contact">
          <span>· San Miguel de Tucumán · Argentina</span>
          <span>${link(links.email, "Atonur65@gmail.com")} · +54 381 345 8710</span>
          <span>${link(links.linkedin, "LinkedIn")} · ${link(links.github, "GitHub")} · ${link(links.portfolio, "Portfolio")}</span>
        </address>
      </header>

      <section class="section">
        <h2 class="section-title">PERFIL PROFESIONAL</h2>
        <div class="profile">
          <p>Me interesa continuar desarrollándome en proyectos donde pueda combinar QA, análisis funcional y automatización de pruebas, aportando una mirada orientada a la calidad, la mejora continua y la comprensión real del negocio.</p>
          <p>Actualmente curso la Licenciatura en Ciencia de Datos (UCBA), fortaleciendo mis conocimientos en análisis de datos, Machine Learning y modelos analíticos.</p>
          <p>Me considero una persona curiosa, creativa y enfocada en entender el porqué de cada proceso. Busco conectar con los equipos de forma colaborativa, mantener una comunicación clara y aportar valor desde lo técnico sin perder la calidad humana detrás de cada interacción.</p>
        </div>
      </section>

      <section class="section">
        <h2 class="section-title">EXPERIENCIA LABORAL</h2>
        <article class="item">
          <div class="item-header">
            <h3 class="role">QA & Data Analyst</h3>
            <div class="meta">${link(links.strata, "Strata Analytics")} | Octubre 2024 - Actualidad</div>
          </div>
          <ul>
            <li>Validación funcional de procesos analíticos, asegurando la calidad y consistencia de la información en plataformas cloud.</li>
            <li>Diseño y ejecución de casos de prueba a partir de historias de usuario, criterios de aceptación y reglas de negocio.</li>
            <li>Análisis y validación de bases de datos, formatos de tablas y pipelines de procesamiento utilizando SQL, Oracle y Snowflake.</li>
            <li>Validación de campañas comerciales y soporte a procesos críticos de negocio.</li>
            <li>Participación en proyectos de automatización y validación de modelos predictivos, colaborando con el equipo de Data & Analytics.</li>
            <li>Colaboración con equipos funcionales y técnicos en el análisis, diagnóstico y resolución de incidencias.</li>
          </ul>
          <div class="stack">Stack tecnológico: SQL · Oracle · Snowflake · Python · AWS · Cypress · Git · Machine Learning</div>
        </article>

        <article class="item">
          <div class="item-header">
            <h3 class="role">Administrador de Base de Datos para Software Comercial</h3>
            <div class="meta">${link(links.vethealth, "VetHealth")} | Mayo 2023 - Octubre 2024</div>
          </div>
          <ul>
            <li>Definición, construcción y puesta en producción de base de datos en MongoDB.</li>
            <li>Soporte diario, optimización de procesos, APIs, visualización de datos y pasarelas de pago.</li>
          </ul>
          <div class="stack">Stack: MongoDB · SQL · AWS · Stripe</div>
        </article>

        <article class="item">
          <div class="item-header">
            <h3 class="role">Desarrollador Full Stack para Emprendimiento</h3>
            <div class="meta">${link(links.pasionUrbana, "Pasión Urbana")} | Proyecto finalizado</div>
          </div>
          <ul>
            <li>Reestructuración y rediseño web con enfoque funcional, UX moderna y mejor experiencia digital.</li>
          </ul>
          <div class="stack">Stack: Full Stack · Web Redesign · UX/UI · Responsive Design</div>
        </article>
      </section>

      <section class="section">
        <h2 class="section-title">PROYECTOS TÉCNICOS DESTACADOS</h2>
        <div class="projects">
          <article class="project">
            <h3 class="project-title">${link(links.csvComparator, "CSV Dataset Comparator")}</h3>
            <p>Herramienta desarrollada en Python para comparar datasets CSV y generar reportes automáticos de diferencias.</p>
          </article>
          <article class="project">
            <h3 class="project-title">${link(links.conversationalStress, "Conversational Agent Stress Test")}</h3>
            <p>Stress testing con hasta 50 sesiones simultáneas, monitoreo de APIs y base de datos.</p>
          </article>
          <article class="project">
            <h3 class="project-title">${link(links.cypressE2E, "Cypress Conversational Agent E2E")}</h3>
            <p>Suite E2E: login SSO, agente conversacional y validación de dashboards.</p>
          </article>
          <article class="project">
            <h3 class="project-title">${link(links.stressAgents, "Stress Test Agentes IA")}</h3>
            <p>Pruebas de carga para agentes de IA con métricas de rendimiento y estabilidad.</p>
          </article>
        </div>
      </section>

      <div class="grid-two">
        <section class="section">
          <h2 class="section-title">EDUCACIÓN</h2>
          <div class="compact-list">
            <div class="compact-row"><span class="label">Licenciatura en Ciencia de Datos (en curso)</span>Universidad de la Ciudad de Buenos Aires (UCBA) · Actualidad</div>
            <div class="compact-row"><span class="label">Técnico Universitario en Desarrollo y Calidad de Software</span>Universidad Santo Tomás de Aquino (UNSTA) · 2024</div>
            <div class="compact-row"><span class="label">Educación primaria y secundaria</span>Colegio Tulio García Fernández · Completo</div>
          </div>
        </section>

        <section class="section">
          <h2 class="section-title">IDIOMAS</h2>
          <div class="compact-list">
            <div class="compact-row"><span class="label">Español</span>Nativo</div>
            <div class="compact-row"><span class="label">Inglés</span>B1 · Intermedio (lectura técnica y contextos laborales)</div>
            <div class="compact-row"><span class="label">Portugués</span>A1-A2 · Básico (en aprendizaje)</div>
          </div>
        </section>
      </div>

      <section class="section">
        <h2 class="section-title">COMPETENCIAS TÉCNICAS</h2>
        <div class="grid-two">
          <div class="compact-row"><span class="label">Bases de Datos & Datos</span>SQL · T-SQL · Oracle · MongoDB · Snowflake · Python · AWS · Machine Learning · Data Quality · Pipelines</div>
          <div class="compact-row"><span class="label">QA & Testing</span>Cypress · Selenium · E2E Testing · Stress Testing · Postman · Test Plans · Jira · XRay · TestRail</div>
          <div class="compact-row"><span class="label">Desarrollo & Análisis</span>JavaScript · TypeScript · React · Next.js · Node.js · HTML · CSS · Tailwind · UML · Git · GitHub</div>
          <div class="compact-row"><span class="label">Herramientas & Metodologías</span>Docker · CI/CD · Stripe · Excel · Word · Notion · Trello · Figma · Scrum · Kanban</div>
        </div>
      </section>

      <p class="footer-note">La empatía y el aprendizaje constante son los pilares que guían mi forma de comunicar, trabajar y crecer en equipo.</p>
    </main>
  </body>
</html>`;

async function generate() {
  const browser = await chromium.launch();
  const page = await browser.newPage({ viewport: { width: 1240, height: 1754 } });

  await page.setContent(html, { waitUntil: "networkidle" });

  for (const output of outputs) {
    const outputPath = resolve(output);
    await mkdir(dirname(outputPath), { recursive: true });
    await page.pdf({
      path: outputPath,
      format: "A4",
      printBackground: true,
      preferCSSPageSize: true,
    });
    console.log(`Generated ${output}`);
  }

  await browser.close();
}

generate().catch((error) => {
  console.error(error);
  process.exit(1);
});
