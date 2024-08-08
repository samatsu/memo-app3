import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Script from "next/script";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Memo App V3",
  description: "Simple Memo Website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body className={inter.className}>
        <Header />
        <main className="mx-7 lg:mx-6 mt-32 flex-grow">
          <div className="max-w-5xl mx-auto">{children}</div>
        </main>
        <Footer />
        <Script src="/assets/js/main.js" />
      </body>
    </html>
  );
}
