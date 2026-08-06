import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "폭염지킴이",
  description: "근처 무더위쉼터 찾기",
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
          </nav>
        </header>
        <main className="mx-auto max-w-3xl px-4 py-6">{children}</main>
      </body>
    </html>
  );
}
