import { ImageResponse } from "next/og";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

/** Ícono Apple Touch con monograma JMA */
export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background:
            "linear-gradient(135deg, #07111f 0%, #0b0d10 48%, #052e2b 100%)",
          borderRadius: 36,
          border: "2px solid rgba(16, 185, 129, 0.45)",
          boxShadow: "inset 0 0 54px rgba(16, 185, 129, 0.14)",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "baseline",
            color: "#f4f4f5",
            fontSize: 62,
            fontWeight: 700,
            letterSpacing: "-0.08em",
            fontFamily:
              'ui-sans-serif, system-ui, -apple-system, "Segoe UI", sans-serif',
          }}
        >
          <span style={{ color: "#f8fafc" }}>J</span>
          <span
            style={{
              color: "#10b981",
              margin: "0 4px",
            }}
          >
            M
          </span>
          <span style={{ color: "#f8fafc" }}>A</span>
        </div>
      </div>
    ),
    size,
  );
}
