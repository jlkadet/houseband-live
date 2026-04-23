import type { Metadata, Viewport } from "next";
import "./globals.css";
import SiteHeader from "@/components/site-header";

export const metadata: Metadata = {
  title: "Houseband/Live",
  description: "Live sessions for artists ready to stand out.",
};

export const viewport: Viewport = {
  themeColor: "#000000",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="bg-black">
      <body className="bg-black text-white">
        <SiteHeader />
        <main className="bg-black pt-[4.5rem] sm:pt-24">{children}</main>
      </body>
    </html>
  );
}