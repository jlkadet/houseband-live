"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/episodes", label: "Episodes" },
  { href: "/roster", label: "Roster" },
  { href: "/about", label: "About" },
  { href: "/work-with-us", label: "Work With Us" },
];

export default function SiteHeader() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const isActiveLink = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  return (
    <header className="fixed top-0 z-50 w-full border-b border-white/10 bg-black/90 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-10 lg:py-4">
        <Link
          href="/"
          onClick={() => setMenuOpen(false)}
          className="flex items-center"
        >
          <img
            src="/housebandlogo.png"
            alt="Houseband Live"
            className="h-12 w-12 rounded-md object-cover sm:h-12 sm:w-12"
          />
        </Link>

        <nav className="hidden gap-8 text-sm uppercase tracking-[0.25em] text-white/70 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`transition ${
                isActiveLink(link.href)
                  ? "text-white underline decoration-white/35 underline-offset-8"
                  : "hover:text-white"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <Link
  href="/work-with-us#apply-form"
  className="hidden rounded-full border border-white/20 bg-white px-5 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-black transition hover:scale-105 md:inline-flex"
>
  Apply
</Link>

          <button
            type="button"
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((prev) => !prev)}
            className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-white/15 bg-white/[0.03] text-white transition hover:bg-white/10 md:hidden"
          >
            <div className="flex flex-col gap-1.5">
              <span
                className={`block h-[1.5px] w-6 bg-white transition ${
                  menuOpen ? "translate-y-[7px] rotate-45" : ""
                }`}
              />
              <span
                className={`block h-[1.5px] w-6 bg-white transition ${
                  menuOpen ? "opacity-0" : ""
                }`}
              />
              <span
                className={`block h-[1.5px] w-6 bg-white transition ${
                  menuOpen ? "-translate-y-[7px] -rotate-45" : ""
                }`}
              />
            </div>
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className="border-t border-white/10 bg-black/95 px-4 pb-6 pt-4 md:hidden">
          <nav className="flex flex-col gap-3">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className={`rounded-2xl border px-4 py-4 text-sm uppercase tracking-[0.2em] transition ${
                  isActiveLink(link.href)
                    ? "border-white/20 bg-white/10 text-white"
                    : "border-white/10 bg-white/[0.03] text-white/80 hover:bg-white/10"
                }`}
              >
                {link.label}
              </Link>
            ))}

            <Link
  href="/work-with-us#apply-form"
  onClick={() => setMenuOpen(false)}
  className="mt-2 inline-flex items-center justify-center rounded-full bg-white px-5 py-3 text-sm font-semibold uppercase tracking-[0.2em] text-black"
>
  Apply
</Link>
          </nav>
        </div>
      )}
    </header>
  );
}