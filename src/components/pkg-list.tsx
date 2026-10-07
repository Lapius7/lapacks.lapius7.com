"use client";
import { useState } from "react";
import Link from "next/link";
import { motion } from "motion/react";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import type { Pkg } from "@/lib/packages";

export function PkgList({ items }: { items: Pkg[] }) {
  const [q, setQ] = useState("");
  const f = items.filter((p) =>
    `${p.name} ${p.description} ${p.bin.join(" ")}`.toLowerCase().includes(q.toLowerCase()),
  );
  return (
    <div className="space-y-6">
      <Input placeholder="パッケージを検索" value={q} onChange={(e) => setQ(e.target.value)} />
      <div className="grid gap-4 sm:grid-cols-2">
        {f.map((p, i) => (
          <motion.div key={p.slug} initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }}
            transition={{ type: "spring", duration: 0.4, bounce: 0, delay: i * 0.03 }}>
            <Link href={`/${p.slug}/`}>
              <Card className="h-full transition-colors hover:bg-muted/50">
                <CardHeader>
                  <CardTitle>{p.slug}</CardTitle>
                  <CardDescription>{p.description}</CardDescription>
                  <div className="flex flex-wrap gap-1 pt-2">
                    {p.bin.map((b) => <Badge key={b} variant="secondary">{b}</Badge>)}
                  </div>
                </CardHeader>
              </Card>
            </Link>
            <div className="flex gap-3 px-1 pt-1 text-xs text-muted-foreground">
              <a className="hover:underline" href={`https://github.com/Lapius7/${p.slug}`} target="_blank" rel="noreferrer">GitHub</a>
              <a className="hover:underline" href={`https://www.npmjs.com/package/${p.name}`} target="_blank" rel="noreferrer">npm</a>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
