import { readFileSync } from "node:fs";
import { join } from "node:path";
import { cacheLife } from "next/cache";
import data from "./packages.json";

export type Pkg = (typeof data)[number];
export const packages: Pkg[] = data;
export const getPackage = (slug: string) => packages.find((p) => p.slug === slug);

const RAW = "https://raw.githubusercontent.com/Lapius7";
const BLOB = "https://github.com/Lapius7";

const localDoc = (slug: string) =>
  readFileSync(join(process.cwd(), "content", `${slug}.md`), "utf8");

// GitHub の README を5分ごとに再取得。失敗時は content/ のコピーを使う
export async function getDoc(slug: string): Promise<string> {
  "use cache";
  cacheLife({ stale: 300, revalidate: 300, expire: 3600 });
  let md: string;
  try {
    const res = await fetch(`${RAW}/${slug}/main/README.md`);
    if (!res.ok) throw new Error(String(res.status));
    md = await res.text();
  } catch {
    return localDoc(slug);
  }
  return md
    .replace(/(!\[[^\]]*\]\()(?!https?:|#|\/\/)\.?\/?([^)]+\))/g, `$1${RAW}/${slug}/main/$2`)
    .replace(/(?<!!)(\[[^\]]*\]\()(?!https?:|#|mailto:|\/\/)\.?\/?([^)]+\))/g, `$1${BLOB}/${slug}/blob/main/$2`);
}
