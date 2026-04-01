import type { Metadata } from "next";
import "./globals.css";
import SiteHeader from "@/components/site-header";

export const metadata: Metadata = {
  title: "Houseband/Live",
  description: "Live sessions for artists ready to stand out.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-black text-white">
        <SiteHeader />
        <main className="pt-24">{children}</main>
      </body>
    </html>
  );
}