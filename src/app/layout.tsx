import { DM_Sans, DM_Serif_Display } from "next/font/google";
import Navbar from "@/components/layout/Navbar";
import HoverFooter from "@/components/ui/demo";
import "./globals.css";

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  weight: ["400", "500", "600", "700"],
});

const dmSerif = DM_Serif_Display({
  subsets: ["latin"],
  variable: "--font-dm-serif",
  weight: ["400"],
});

export const metadata: Metadata = {
  title: "Mineralia | Global Critical Mineral Supply Leader",
  description:
    "Precision-grade industrial minerals sourced from 40+ countries, backed by 25+ years of supply chain excellence.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${dmSans.variable} ${dmSerif.variable}`}>
      <body className="bg-white text-mineralia-navy font-sans antialiased min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow">
          {children}
        </main>
        <HoverFooter />
      </body>
    </html>
  );
}
