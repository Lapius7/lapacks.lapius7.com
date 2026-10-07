import { ogImage, ogSize } from "@/lib/og";
import { getPackage, packages } from "@/lib/packages";

export const size = ogSize;
export const contentType = "image/png";
export const generateStaticParams = () => packages.map((p) => ({ slug: p.slug }));

export default async function Image({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const p = getPackage(slug);
  return ogImage(slug, p?.name ?? "@lapius");
}
