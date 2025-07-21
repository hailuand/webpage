import type React from "react";
import "@/app/globals.css";
import { Inter } from "next/font/google";
import websiteData from "@/data/website-data.json";
import { ThemeProvider } from "@/components/theme-provider";
import { Analytics } from '@vercel/analytics/next';

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: `${websiteData.personal.name} | Software Engineer`,
  description: `Personal portfolio of ${websiteData.personal.name}, a software engineer`,
  generator: "v0.dev",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          {children}
          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  );
}
