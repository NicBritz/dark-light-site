import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/NavBar";
import { Footer } from "@/components/Footer";
import { cookies } from "next/headers";

export const metadata: Metadata = {
  title: "Dark Light",
  description: "Full-Stack web developer",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const cookieStore = cookies();
  const theme = cookieStore.get("theme");

  return (
    <html lang="en" data-theme={theme?.value ?? "business"}>
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
