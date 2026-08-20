import { ImageResponse } from "next/og";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

/** Ícono Apple Touch con las mismas iniciales */
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
          background: "#0b0d10",
          borderRadius: 36,
          border: "2px solid rgba(16, 185, 129, 0.4)",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "baseline",
            color: "#f4f4f5",
            fontSize: 72,
            fontWeight: 560,
            letterSpacing: "0.06em",
            fontFamily:
              'ui-sans-serif, system-ui, -apple-system, "Segoe UI", sans-serif',
          }}
        >
          <span>J</span>
          <span
            style={{
              color: "#10b981",
              fontSize: 48,
              margin: "0 4px",
              opacity: 0.95,
            }}
          >
            .
          </span>
          <span>A</span>
        </div>
      </div>
    ),
    size,
  );
}
