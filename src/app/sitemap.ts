import type { MetadataRoute } from "next";
import { packages } from "@/lib/packages";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://lapacks.lapius7.com";
  return [base + "/", ...packages.map((p) => `${base}/${p.slug}/`)].map((url) => ({ url }));
}
