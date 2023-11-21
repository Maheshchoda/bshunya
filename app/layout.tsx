import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "../components/ui/Navbar/Navbar";
import Footer from "@/components/ui/Footer";
import GoogleAnalyticsScript from "@/lib/GoogleAnalyticsScript";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Bshunya",
  description:
    "Join Bshunya on a transformative health journey to 'zero' – where ancient wisdom meets modern wellness. Eliminate stress, combat ailments, and become a hero in your health saga with our easy-to-understand, holistic content. Dive into daily posts that make well-being universally accessible and guide you towards total health empowerment.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <GoogleAnalyticsScript />
      <body className={inter.className}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
