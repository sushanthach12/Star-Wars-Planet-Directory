import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { PlanetProvider } from "@/context/PlanetContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Star Wars Planets",
  description: "Star Wars Planet Directory",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cn(inter.className, "scroll-smooth select-none ")}>
        <PlanetProvider>
          {children}
        </PlanetProvider>
      </body>
    </html>
  );
}
