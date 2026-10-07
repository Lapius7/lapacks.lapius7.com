import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const siteName = "Lapacks Docs";
const description = "@lapius の npm パッケージの使い方をまとめたドキュメント。lapacks で一覧・インストール・更新ができます。";

export const metadata: Metadata = {
  metadataBase: new URL("https://lapacks.lapius7.com"),
  title: { default: `${siteName} | @lapius パッケージ`, template: `%s | ${siteName}` },
  description,
  applicationName: siteName,
  alternates: { canonical: "/" },
  openGraph: { type: "website", siteName, locale: "ja_JP", title: siteName, description, url: "/" },
  twitter: { card: "summary_large_image", title: siteName, description },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="ja"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
