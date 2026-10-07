import { ogImage, ogSize } from "@/lib/og";

export const size = ogSize;
export const contentType = "image/png";
export const alt = "Lapacks Docs";

export default function Image() {
  return ogImage("Lapacks Docs", "npm i -g @lapius/lapacks");
}
