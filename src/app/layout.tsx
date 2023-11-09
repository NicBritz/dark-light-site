import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "Dark Light",
  description: "Full-Stack web developer",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" data-theme="business">
      <body>
        <Header />
        <div className="container min-h-screen mx-auto pt-32 px-4">
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}
