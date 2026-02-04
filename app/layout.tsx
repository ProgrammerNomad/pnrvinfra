import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "PNRV Infra - Making Ideas Concrete",
    template: "%s | PNRV Infra",
  },
  description: "PNRV Infra delivers world-class construction and infrastructure development services. Making ideas concrete with excellence, innovation, and sustainability.",
  keywords: [
    "construction",
    "infrastructure development",
    "real estate",
    "project management",
    "building construction",
    "PNRV Infra",
  ],
  authors: [{ name: "PNRV Infra" }],
  creator: "PNRV Infra",
  publisher: "PNRV Infra",
  metadataBase: new URL("https://www.pnrvinfra.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "PNRV Infra - Making Ideas Concrete",
    description: "World-class construction and infrastructure development services with excellence and innovation.",
    url: "https://www.pnrvinfra.com",
    siteName: "PNRV Infra",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "PNRV Infra - Making Ideas Concrete",
    description: "World-class construction and infrastructure development services.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
