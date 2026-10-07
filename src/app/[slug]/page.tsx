import Link from "next/link";
import { notFound } from "next/navigation";
import { Doc } from "@/components/doc";
import { Badge } from "@/components/ui/badge";
import { getDoc, getPackage, packages } from "@/lib/packages";

export const generateStaticParams = () => packages.map((p) => ({ slug: p.slug }));

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const p = getPackage(slug);
  if (!p) notFound();
  return (
    <main className="mx-auto max-w-3xl space-y-6 px-6 py-12">
      <Link href="/" className="text-sm text-muted-foreground hover:underline">← 一覧</Link>
      <div className="flex flex-wrap items-center gap-2">
        <Badge variant="outline">{p.name}</Badge>
        {p.bin.map((b) => <Badge key={b} variant="secondary">{b}</Badge>)}
      </div>
      <div className="flex flex-wrap gap-4 text-sm">
        <a className="underline" href={`https://github.com/Lapius7/${slug}`} target="_blank" rel="noreferrer">GitHub</a>
        <a className="underline" href={`https://www.npmjs.com/package/${p.name}`} target="_blank" rel="noreferrer">npm</a>
      </div>
      <Doc source={await getDoc(slug)} />
    </main>
  );
}
