"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/episodes", label: "Episodes" },
  { href: "/roster", label: "Roster" },
  { href: "/about", label: "About" },
  { href: "/work-with-us", label: "Work With Us" },
];

export default function SiteHeader() {
  const pathname = usePathname();

  return (
    <header className="fixed top-0 z-50 w-full border-b border-white/10 bg-black/90 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-10">
        <Link href="/">
          <img
            src="/housebandlogo.png"
            alt="Houseband Live"
            className="h-12 w-auto"
          />
        </Link>

        <nav className="hidden gap-8 text-sm uppercase tracking-[0.25em] text-white/70 md:flex">
          {navLinks.map((link) => {
            const isActive =
              link.href === "/"
                ? pathname === "/"
                : pathname.startsWith(link.href);

            return (
              <Link
                key={link.href}
                href={link.href}
                className={`transition ${
                  isActive
                    ? "text-white underline decoration-white/40 underline-offset-8"
                    : "hover:text-white"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        <Link
          href="/work-with-us"
          className="rounded-full border border-white/20 bg-white px-5 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-black transition hover:scale-105"
        >
          Apply
        </Link>
      </div>
    </header>
  );
}