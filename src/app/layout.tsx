import type {
  Metadata,
} from "next";

import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";

import "./globals.css";

export const metadata:
  Metadata = {
  title: {
    default:
      "Leart | Software Developer",

    template:
      "%s | Leart",
  },

  description:
    "Portfolio of a high school software developer building full-stack applications with Next.js, TypeScript, React, Firebase, and Playwright.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children:
    React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Header />

        {children}

        <Footer />
      </body>
    </html>
  );
}