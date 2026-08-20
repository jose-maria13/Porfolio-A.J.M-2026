import { ImageResponse } from "next/og";

export const size = { width: 32, height: 32 };
export const contentType = "image/png";

/** Favicon delicado: iniciales J.A. de Jose Maria Atonur */
export default function Icon() {
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
          borderRadius: 8,
          border: "1px solid rgba(16, 185, 129, 0.35)",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "baseline",
            color: "#f4f4f5",
            fontSize: 13,
            fontWeight: 560,
            letterSpacing: "0.04em",
            fontFamily:
              'ui-sans-serif, system-ui, -apple-system, "Segoe UI", sans-serif',
          }}
        >
          <span>J</span>
          <span
            style={{
              color: "#10b981",
              fontSize: 10,
              margin: "0 1px",
              opacity: 0.9,
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
