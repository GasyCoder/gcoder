import type { Metadata } from "next";
import { Geist, Geist_Mono, Inter } from "next/font/google";
import "./globals.css";

const geist = Geist({ subsets: ["latin"], variable: "--font-geist-sans", display: "swap" });
const geistMono = Geist_Mono({ subsets: ["latin"], variable: "--font-geist-mono", display: "swap" });
const inter = Inter({ subsets: ["latin"], variable: "--font-inter", display: "swap" });
const title = "GasyCoder Software Engineering & Digital Products";
const description = "GasyCoder designs and builds software products, SaaS platforms and AI-enabled systems for healthcare, higher education and modern organizations.";

export const metadata: Metadata = {
  metadataBase: new URL("https://gasycoder.com"),
  title: {
    default: title,
    template: "%s | GasyCoder"
  },
  description,
  icons: {
    icon: { url: "/brand/gasycoder-logo.png", type: "image/png" },
    apple: { url: "/brand/gasycoder-logo.png", type: "image/png" }
  },
  alternates: {
    canonical: "/"
  },
  openGraph: {
    title,
    description,
    url: "https://gasycoder.com",
    siteName: "GasyCoder",
    type: "website"
  },
  twitter: { card: "summary", title, description }
};

export default function RootLayout({
  children
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${geist.variable} ${geistMono.variable}`}>{children}</body>
    </html>
  );
}
