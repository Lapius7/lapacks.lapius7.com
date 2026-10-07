import { PkgList } from "@/components/pkg-list";
import { packages } from "@/lib/packages";

export default function Home() {
  return (
    <main className="mx-auto max-w-4xl space-y-8 px-6 py-16">
      <header className="space-y-2">
        <h1 className="text-3xl font-medium">Lapacks ドキュメント</h1>
        <p className="text-muted-foreground">
          <code>npm i -g @lapius/lapacks</code> で管理できる @lapius パッケージの使い方。
        </p>
      </header>
      <PkgList items={packages} />
    </main>
  );
}
