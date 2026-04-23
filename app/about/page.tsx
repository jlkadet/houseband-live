"use client";

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

export default function AboutPage() {
  return (
    <div className={`${inter.className} min-h-screen bg-black text-white`}>
      <main className="px-4 py-10 sm:px-6 sm:py-12 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 sm:mb-12">
            <p className="text-sm uppercase tracking-[0.3em] text-[#f2d3a2]/70">
              About
            </p>

            <h1
              className={`${bungee.className} mt-3 text-3xl tracking-wide sm:text-4xl md:text-6xl`}
            >
              What House/Band is
            </h1>

            <p className="mt-5 max-w-3xl text-base leading-7 text-white/75 sm:text-lg sm:leading-8">
              House/Band is a live session series that highlights talented
              artists by giving them a platform to perform their original music
              with a band on camera.
            </p>
          </div>

          <section className="mb-8 grid gap-6 lg:grid-cols-[1fr_1fr] lg:gap-8 sm:mb-10">
            <div className="rounded-[1.5rem] border border-[#d8a25e]/20 bg-white/[0.04] p-6 sm:p-8">
              <p className="text-[10px] uppercase tracking-[0.25em] text-[#f2d3a2]/70">
                The idea
              </p>

              <h2
                className={`${cormorant.className} mt-3 text-3xl font-semibold sm:text-4xl`}
              >
                Collaboration comes first
              </h2>

              <p className="mt-4 text-white/75 leading-7">
                The goal is not just to film an artist performing alone. House/Band
                is built around pairing artists with the right musicians and
                creating a live version of their music that feels collaborative,
                intentional, and worth capturing on camera.
              </p>
            </div>

            <div className="rounded-[1.5rem] border border-white/10 bg-white/[0.04] p-6 sm:p-8">
              <p className="text-[10px] uppercase tracking-[0.25em] text-[#f2d3a2]/70">
                The process
              </p>

              <h2
                className={`${cormorant.className} mt-3 text-3xl font-semibold sm:text-4xl`}
              >
                From song to session
              </h2>

              <p className="mt-4 text-white/75 leading-7">
                We find the musicians that make sense for the artist’s music,
                bring them together with the artist, and develop the live
                arrangement through rehearsal. From there, the session is filmed,
                edited, and released by Houseband/Live.
              </p>
            </div>
          </section>

          <section className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
            {[
              {
                number: "01",
                title: "Find the fit",
                description:
                  "We think carefully about which musicians match the artist’s music.",
              },
              {
                number: "02",
                title: "Build the arrangement",
                description:
                  "The band listens, collaborates, and creates their own approach with the artist’s guidance.",
              },
              {
                number: "03",
                title: "Rehearse it live",
                description:
                  "The songs are shaped in rehearsal before the cameras ever turn on.",
              },
              {
                number: "04",
                title: "Film and release",
                description:
                  "The final session is captured on camera, edited, and released through Houseband/Live.",
              },
            ].map((item, index) => (
              <div
                key={item.number}
                className={`group relative overflow-hidden rounded-[1.35rem] border bg-white/[0.04] p-5 transition duration-300 hover:-rotate-[1deg] hover:scale-[1.02] sm:rounded-[1.5rem] sm:p-6 ${
                  index % 2 === 0
                    ? "border-[#d8a25e]/20"
                    : "border-white/10"
                }`}
              >
                <div className="absolute inset-0 opacity-0 transition group-hover:opacity-100 bg-white/5" />

                <div className="relative">
                  <p className="text-[10px] uppercase tracking-[0.25em] text-[#f2d3a2]/70">
                    {item.number}
                  </p>

                  <h3
                    className={`${cormorant.className} mt-3 text-3xl font-semibold`}
                  >
                    {item.title}
                  </h3>

                  <p className="mt-4 text-sm leading-6 text-white/75 sm:text-base sm:leading-7">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </section>
        </div>
      </main>
    </div>
  );
}