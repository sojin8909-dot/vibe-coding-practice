import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";

export const metadata: Metadata = {
  title: "폭염지킴이",
  description: "무더위쉼터 위치 확인과 안부 체크인",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <body className="min-h-screen bg-gray-50 text-gray-900">
        <header className="border-b bg-white">
          <nav className="mx-auto flex max-w-3xl items-center gap-6 px-4 py-3">
            <span className="font-semibold">폭염지킴이</span>
            <Link href="/" className="text-sm text-gray-600 hover:text-gray-900">
              쉼터 지도
            </Link>
            <Link href="/checkin" className="text-sm text-gray-600 hover:text-gray-900">
              체크인
            </Link>
          </nav>
        </header>
        <main className="mx-auto max-w-3xl px-4 py-6">{children}</main>
      </body>
    </html>
  );
}
