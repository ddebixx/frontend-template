import type { Metadata } from "next";
import { Fraunces, Geist, Source_Sans_3 } from "next/font/google";
import { AppProviders } from "@/components/shared/AppProviders/AppProviders";
import "./globals.css";
import { cn } from "@/lib/utils";

const geist = Geist({ subsets: ["latin"], variable: "--font-sans" });

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
});

const sourceSans = Source_Sans_3({
  variable: "--font-source-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Next.js template",
  description: "OSS frontend standards example template",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={cn(
        "h-full",
        "antialiased",
        fraunces.variable,
        sourceSans.variable,
        "font-sans",
        geist.variable,
      )}
    >
      <body className="flex min-h-full flex-col">
        <AppProviders>{children}</AppProviders>
      </body>
    </html>
  );
}
