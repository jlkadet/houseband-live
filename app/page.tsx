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
  const featuredSessions = [
    {
      title: "Ian Chri$t",
      artist: "Featuring Ian Chri$t and the Houseband/Live Collective",
      image: "/IanChrist.png",
    },
    {
      title: "Imani Waters",
      artist: "Featuring Imani Waters and the Houseband/Live Collective",
      image: "/imaniwaters.png",
    },
    {
      title: "Nat Harriet",
      artist: "Featuring Nat Harriet and the Houseband/Live Collective",
      image: "/natharriet.png",
    },
  ];

  return (
    <div className={`${inter.className} min-h-screen bg-black text-white`}>
      <section className="retro-grain retro-frame relative flex min-h-[90svh] items-end overflow-hidden px-4 pb-12 pt-12 sm:px-6 lg:px-10 lg:pb-24 lg:pt-16">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/grouppic.png')" }}
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />

        <div className="relative z-10 mx-auto flex w-full max-w-7xl flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-3xl">
            <p className="mb-4 text-xs uppercase tracking-[0.35em] text-white/70 sm:text-sm sm:tracking-[0.45em]">
  Minneapolis Live Session Collective
</p>
            <h1
  className={`${bungee.className} text-4xl leading-[0.95] tracking-tight sm:text-6xl md:text-7xl lg:text-[7rem]`}
>
  HOUSEBAND/
  <span className="block text-white/85">LIVE</span>
</h1>

            <div className="mb-4 inline-block rounded-full border border-white/20 bg-white/5 px-4 py-2 text-[10px] uppercase tracking-[0.3em] text-white/75">
              Now Booking — Minneapolis, MN
            </div>

            <p className="mt-5 max-w-2xl text-sm leading-6 text-white/85 sm:text-base sm:leading-7 md:text-lg">
  Houseband/Live creates filmed live sessions for artists ready to
  turn strong performances into standout visual content. We bring
  together musicians, creative direction, and live energy to build
  sessions that feel intentional, collaborative, and built to travel.
</p>

            <p className="mt-4 text-sm text-white/60">
              Featuring Ian Chri$t, Imani Waters, and Nat Harriet
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <Link
                href="/work-with-us"
                className="rounded-full bg-white px-6 py-3 text-sm font-semibold uppercase tracking-[0.2em] text-black transition hover:scale-105"
              >
                Apply to Perform
              </Link>

              <Link
                href="/episodes"
                className="rounded-full border border-white/25 px-6 py-3 text-sm font-semibold uppercase tracking-[0.2em] text-white transition hover:bg-white/10"
              >
                Watch Sessions
              </Link>
            </div>
          </div>

          <div className="retro-card-frame max-w-sm rounded-3xl border border-white/20 bg-black/50 p-5 shadow-2xl backdrop-blur-md sm:p-6">
            <p className="text-xs uppercase tracking-[0.3em] text-white/60">
              What we do
            </p>
            <p
              className={`${cormorant.className} mt-4 text-3xl font-semibold leading-9 text-white`}
            >
              We produce live session experiences that give artists strong
              visuals, real collaboration, and a performance they can proudly
              put into the world.
            </p>
          </div>
        </div>
      </section>

      <section id="sessions" className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-10 lg:py-20">
        <div className="mb-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-white/55">
              Recent Releases
            </p>
            <h2
  className={`${bungee.className} mt-3 text-2xl tracking-wide sm:text-3xl md:text-5xl`}
>
  Featured Sessions
</h2>
          </div>

          <p className="max-w-xl text-white/70">
            A look at the performance quality, visual tone, and creative
            collaboration artists can expect when they create with Houseband/Live.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {featuredSessions.map((session, index) => (
            <div
              key={session.title}
              className="retro-card-frame group overflow-hidden rounded-3xl border border-white/10 bg-white/[0.04] shadow-xl"
            >
              <div className="overflow-hidden">
                <img
                  src={session.image}
                  alt={session.title}
                  className="h-80 w-full object-cover transition duration-500 group-hover:scale-105"
                />
              </div>

              <div className="p-6">
                <p className="text-xs uppercase tracking-[0.25em] text-white/55">
                  Session No. {String(index + 1).padStart(2, "0")}
                </p>
                <h3
                  className={`${cormorant.className} mt-3 text-3xl font-semibold`}
                >
                  {session.title}
                </h3>
                <p className="mt-2 text-white/70">{session.artist}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <Link
            href="/work-with-us"
            className="inline-block rounded-full bg-white px-6 py-3 text-sm font-semibold uppercase tracking-[0.2em] text-black transition hover:scale-105"
          >
            Apply to Perform
          </Link>

          <Link
            href="/episodes"
            className="inline-block rounded-full border border-white/25 px-6 py-3 text-sm font-semibold uppercase tracking-[0.2em] text-white transition hover:bg-white/10"
          >
            View All Episodes
          </Link>
        </div>
      </section>

      <section className="border-t border-white/10 px-4 py-20 text-center sm:px-6 lg:px-10 lg:py-24">
        <div className="mx-auto max-w-3xl">
          <p className="text-sm uppercase tracking-[0.3em] text-white/55">
            Work With Us
          </p>

          <h2
  className={`${bungee.className} mt-4 text-2xl tracking-wide sm:text-3xl md:text-5xl`}
>
  Ready to Create a Session?
</h2>

          <p className="mt-6 text-lg leading-8 text-white/75">
            We work with artists who want their music presented with intention,
            strong visuals, and real performance energy.
          </p>

          <Link
            href="/work-with-us"
            className="mt-8 inline-block rounded-full bg-white px-8 py-4 text-sm font-semibold uppercase tracking-[0.2em] text-black transition hover:scale-105"
          >
            Apply to Perform
          </Link>
        </div>
      </section>
    </div>
  );
}