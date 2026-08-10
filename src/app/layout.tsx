import type {
  Metadata,
} from "next";

import {
  Geist,
  Geist_Mono,
} from "next/font/google";

import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";

import "./globals.css";

const geistSans = Geist({
  variable:
    "--font-geist-sans",
  subsets: [
    "latin",
  ],
});

const geistMono = Geist_Mono({
  variable:
    "--font-geist-mono",
  subsets: [
    "latin",
  ],
});

export const metadata:
  Metadata = {

  title: {
    default:
      "Leart Kaceli | Software Developer",

    template:
      "%s | Leart Kaceli",
  },

  description:
    "Portfolio of a high school software developer building full-stack applications with Next.js, TypeScript, React, Firebase, and Playwright.",

  applicationName:
    "Leart Kaceli Portfolio",

  keywords: [
    "Leart Kaceli",
    "software developer",
    "high school developer",
    "Next.js",
    "TypeScript",
    "React",
    "Firebase",
    "Playwright",
    "AP Path Planner",
  ],

  authors: [
    {
      name:
        "Leart Kaceli",
    },
  ],

  creator:
    "Leart Kaceli",

  openGraph: {
    type:
      "website",

    title:
      "Leart Kaceli | Software Developer",

    description:
      "Portfolio featuring AP Path Planner and my work in full-stack software development.",

    siteName:
      "Leart Kaceli Portfolio",
  },

  twitter: {
    card:
      "summary_large_image",

    title:
      "Leart Kaceli | Software Developer",

    description:
      "Portfolio featuring AP Path Planner and my work in full-stack software development.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children:
    React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <a
  href="#main-content"
  className="sr-only fixed left-4 top-4 z-[100] rounded-lg bg-blue-600 px-4 py-3 font-semibold text-white focus:not-sr-only"
>
  Skip to main content
</a>
        <div className="flex min-h-screen flex-col">
          <Header />

          <div
  id="main-content"
  className="flex-1"
>
  {children}
</div>

          <Footer />
        </div>
      </body>
    </html>
  );
}