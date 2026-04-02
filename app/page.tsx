"use client";

import Link from "next/link";
import { Bungee, Cormorant_Garamond, Inter } from "next/font/google";

const bungee = Bungee({
  weight: "400",
  subsets: ["latin"],
});

const cormorant = Cormorant_Garamond({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
});

const inter = Inter({
  subsets: ["latin"],
});

export default function Home() {
  const galleryItems = [
    {
      title: "Ian Chri$t",
      subtitle: "Houseband/Live Session",
      image: "/IanChrist.png",
      href: "/episodes",
    },
    {
      title: "Imani Waters",
      subtitle: "Houseband/Live Session",
      image: "/imaniwaters.png",
      href: "/episodes",
    },
    {
      title: "Nat Harriet",
      subtitle: "Houseband/Live Session",
      image: "/natharriet.png",
      href: "/episodes",
    },
    {
      title: "The Houseband",
      subtitle: "Live Performance",
      image: "/grouppic.png",
      href: "/roster",
    },
    {
      title: "Watch the Archive",
      subtitle: "Episodes",
      image: "/grouppic.png",
      href: "/episodes",
    },
    {
      title: "Work With Us",
      subtitle: "Apply to Perform",
      image: "/grouppic.png",
      href: "/work-with-us",
    },
  ];

  const firstRow = [...galleryItems, ...galleryItems];
  const secondRow = [...galleryItems.slice().reverse(), ...galleryItems.slice().reverse()];

  return (
    <div className={`${inter.className} min-h-screen bg-black text-white`}>
      <section className="retro-grain relative overflow-hidden px-4 pb-14 pt-12 sm:px-6 sm:pb-16 sm:pt-14 lg:px-10 lg:pb-20 lg:pt-16">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/grouppic.png')" }}
        />
        <div className="absolute inset-0 bg-black/45" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_35%,rgba(0,0,0,0.75)_100%)]" />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/15 to-transparent" />

        <div className="relative z-10 mx-auto flex min-h-[78svh] w-full max-w-7xl flex-col justify-end">
          <div className="max-w-4xl">
            <p className="mb-4 text-xs uppercase tracking-[0.32em] text-white/65 sm:text-sm sm:tracking-[0.45em]">
              Minneapolis Live Session Collective
            </p>

            <h1
              className={`${bungee.className} text-4xl leading-[0.95] tracking-tight sm:text-5xl md:text-7xl lg:text-[7rem]`}
            >
              HOUSEBAND/
              <span className="block text-white/85">LIVE</span>
            </h1>

            <div className="mt-5 inline-block rounded-full border border-white/20 bg-white/5 px-4 py-2 text-[10px] uppercase tracking-[0.3em] text-white/75">
              Now Booking — Minneapolis, MN
            </div>

            <p className="mt-6 max-w-xl text-sm leading-6 text-white/85 sm:text-base sm:leading-7 md:text-lg">
              Live sessions for artists.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <Link
                href="/work-with-us"
                className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-semibold uppercase tracking-[0.2em] text-black transition hover:scale-105"
              >
                Apply
              </Link>

              <Link
                href="/episodes"
                className="inline-flex items-center justify-center rounded-full border border-white/25 px-6 py-3 text-sm font-semibold uppercase tracking-[0.2em] text-white transition hover:bg-white/10"
              >
                Watch
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="overflow-hidden border-t border-white/10 border-b border-white/10 bg-black py-8 sm:py-10">
        <div className="mb-4 px-4 sm:px-6 lg:px-10">
          <p className="text-xs uppercase tracking-[0.3em] text-white/50">
            Sessions / Archive / Roster
          </p>
        </div>

        <div className="space-y-4 sm:space-y-6">
          <div className="gallery-marquee">
            <div className="gallery-track">
              {firstRow.map((item, index) => (
                <Link
                  key={`${item.title}-top-${index}`}
                  href={item.href}
                  className="group relative block h-[240px] w-[280px] flex-shrink-0 overflow-hidden rounded-[1.75rem] border border-white/10 bg-white/[0.04] sm:h-[280px] sm:w-[340px]"
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-105 group-hover:opacity-90"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
                  <div className="absolute inset-0 border border-white/5 rounded-[1.75rem]" />

                  <div className="absolute left-5 bottom-5">
                    <p className="text-[10px] uppercase tracking-[0.28em] text-white/65">
                      {item.subtitle}
                    </p>
                    <h3 className={`${cormorant.className} mt-2 text-3xl font-semibold text-white`}>
                      {item.title}
                    </h3>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          <div className="gallery-marquee gallery-marquee-reverse">
            <div className="gallery-track">
              {secondRow.map((item, index) => (
                <Link
                  key={`${item.title}-bottom-${index}`}
                  href={item.href}
                  className="group relative block h-[180px] w-[240px] flex-shrink-0 overflow-hidden rounded-[1.5rem] border border-white/10 bg-white/[0.04] sm:h-[220px] sm:w-[300px]"
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-105 group-hover:opacity-90"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />

                  <div className="absolute left-4 bottom-4">
                    <p className="text-[10px] uppercase tracking-[0.25em] text-white/60">
                      {item.subtitle}
                    </p>
                    <h3 className={`${cormorant.className} mt-1 text-2xl font-semibold text-white`}>
                      {item.title}
                    </h3>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="px-4 py-20 sm:px-6 lg:px-10 lg:py-24">
        <div className="mx-auto max-w-4xl text-center">
          <p className="text-xs uppercase tracking-[0.3em] text-white/50">
            About
          </p>

          <h2
            className={`${bungee.className} mt-4 text-2xl tracking-wide sm:text-3xl md:text-5xl`}
          >
            Built Around Live Performance
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-white/75 sm:text-lg sm:leading-8">
            Houseband/Live is a live session platform built around performance,
            collaboration, and artists we believe in.
          </p>
        </div>
      </section>

      <section className="border-t border-white/10 px-4 py-20 text-center sm:px-6 lg:px-10 lg:py-24">
        <div className="mx-auto max-w-3xl">
          <p className="text-xs uppercase tracking-[0.3em] text-white/50">
            Work With Us
          </p>

          <h2
            className={`${bungee.className} mt-4 text-2xl tracking-wide sm:text-3xl md:text-5xl`}
          >
            Want to do a session with us?
          </h2>

          <p className="mt-6 text-base leading-7 text-white/75 sm:text-lg sm:leading-8">
            Apply to perform with Houseband/Live.
          </p>

          <Link
            href="/work-with-us"
            className="mt-8 inline-flex items-center justify-center rounded-full bg-white px-8 py-4 text-sm font-semibold uppercase tracking-[0.2em] text-black transition hover:scale-105"
          >
            Apply
          </Link>
        </div>
      </section>

      <style jsx global>{`
        .gallery-marquee {
          overflow: hidden;
          width: 100%;
        }

        .gallery-track {
          display: flex;
          gap: 1rem;
          width: max-content;
          animation: marquee-left 38s linear infinite;
          padding: 0 1rem;
        }

        .gallery-marquee-reverse .gallery-track {
          animation: marquee-right 42s linear infinite;
        }

        .gallery-marquee:hover .gallery-track {
          animation-play-state: paused;
        }

        @keyframes marquee-left {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        @keyframes marquee-right {
          0% {
            transform: translateX(-50%);
          }
          100% {
            transform: translateX(0);
          }
        }

        @media (max-width: 640px) {
          .gallery-track {
            animation-duration: 28s;
          }

          .gallery-marquee-reverse .gallery-track {
            animation-duration: 32s;
          }
        }
      `}</style>
    </div>
  );
}