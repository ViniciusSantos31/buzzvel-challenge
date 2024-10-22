import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

export const metadata: Metadata = {
  title: "Soller",
  description: "Created with Framer Motion, Tailwind CSS, and Next.js",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="w-screen overflow-x-hidden">
      <body
        className={`${roboto.className}flex w-screen antialiased overflow-x-hidden`}
      >
        {children}
      </body>
    </html>
  );
}
