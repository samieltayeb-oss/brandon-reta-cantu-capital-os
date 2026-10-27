import type { Metadata } from "next";
import {
  Familjen_Grotesk,
  Hanken_Grotesk,
  Cormorant_Garamond,
  JetBrains_Mono,
} from "next/font/google";
import "./globals.css";

const familjen = Familjen_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-familjen",
});

const hanken = Hanken_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-hanken",
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-cormorant",
});

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-jetbrains",
});

export const metadata: Metadata = {
  title: "Business Funding | Brandon Reta-Cantu",
  description:
    "Explore business funding options through one simple application with Brandon Reta-Cantu and Bank Breezy.",
  openGraph: {
    title: "Business Funding | Brandon Reta-Cantu",
    description:
      "Explore business funding options through one simple application with Brandon Reta-Cantu and Bank Breezy.",
    type: "website",
    siteName: "Brandon Reta-Cantu Business Funding",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${familjen.variable} ${hanken.variable} ${cormorant.variable} ${jetbrains.variable} scroll-smooth`}
    >
      <body className="min-h-screen antialiased selection:bg-[#85303E] selection:text-white">
        {children}
      </body>
    </html>
  );
}
