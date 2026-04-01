"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

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

  return (
    <header className="fixed top-0 z-50 w-full border-b border-white/10 bg-black/90 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-10">
        <Link href="/" onClick={() => setMenuOpen(false)}>
          <img
            src="/housebandlogo.png"
            alt="Houseband Live"
            className="h-10 w-auto sm:h-12"
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

        <div className="flex items-center gap-3">
          <Link
            href="/work-with-us"
            className="hidden rounded-full border border-white/20 bg-white px-5 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-black transition hover:scale-105 md:inline-flex"
          >
            Apply
          </Link>

          <button
            type="button"
            aria-label="Toggle menu"
            onClick={() => setMenuOpen((prev) => !prev)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-white md:hidden"
          >
            <span className="sr-only">Open menu</span>
            <div className="flex flex-col gap-1.5">
              <span className="block h-[1.5px] w-5 bg-white" />
              <span className="block h-[1.5px] w-5 bg-white" />
              <span className="block h-[1.5px] w-5 bg-white" />
            </div>
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className="border-t border-white/10 bg-black/95 px-4 py-4 md:hidden">
          <nav className="flex flex-col gap-4 text-sm uppercase tracking-[0.2em] text-white/80">
            {navLinks.map((link) => {
              const isActive =
                link.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(link.href);

              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className={isActive ? "text-white" : "hover:text-white"}
                >
                  {link.label}
                </Link>
              );
            })}

            <Link
              href="/work-with-us"
              onClick={() => setMenuOpen(false)}
              className="mt-2 inline-flex w-fit rounded-full bg-white px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-black"
            >
              Apply
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}