import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Testimonials } from "@/components/layout/testimonials";
import { Newsletter } from "@/components/layout/newsletter";

const handelGo = localFont({
  src: "./fonts/HandelGo.ttf",
  variable: "--font-handel-go",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Targohyp - Baufinanzierung",
  description: "Content-Plattform für Baufinanzierung",
  robots: {
    index: false,
    follow: false,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de" className="scroll-smooth">
      <body className={`${handelGo.variable} antialiased bg-white`}>
        <div className="flex min-h-screen flex-col">
          <Header />
          <main className="flex-1">{children}</main>
          <Testimonials />
          <Newsletter />
          <Footer />
        </div>
      </body>
    </html>
  );
}

