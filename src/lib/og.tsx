import { ImageResponse } from "next/og";

export const ogSize = { width: 1200, height: 630 };

export function ogImage(title: string, sub: string) {
  return new ImageResponse(
    (
      <div style={{ width: "100%", height: "100%", display: "flex", flexDirection: "column", justifyContent: "space-between", background: "#0a0a0a", color: "#fafafa", padding: 80 }}>
        <div style={{ fontSize: 36, color: "#a1a1aa" }}>Lapacks Docs</div>
        <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
          <div style={{ fontSize: 96, fontWeight: 500 }}>{title}</div>
          <div style={{ fontSize: 40, color: "#a1a1aa" }}>{sub}</div>
        </div>
        <div style={{ fontSize: 32, color: "#71717a" }}>lapacks.lapius7.com</div>
      </div>
    ),
    ogSize,
  );
}
