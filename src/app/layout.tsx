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

export const metadata: Metadata = {
  title: "AuroraMedia - KI-Agenten & Automatisierung",
  description: "AuroraMedia: Die KI-Agentur für zukunftsweisende Lösungen. Wir entwerfen und implementieren maßgeschneiderte KI-Lösungen, die Ihre Geschäftsprozesse revolutionieren.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <a href="#main" className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 focus:z-50 bg-white text-slate-900 px-3 py-2 rounded-md shadow">Skip to content</a>
        <div id="main">{children}</div>
      </body>
    </html>
  );
}
