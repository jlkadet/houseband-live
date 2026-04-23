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
  const processSteps = [
    {
      number: "01",
      title: "Start with the artist",
      description:
        "Every session begins with the artist and their original music.",
    },
    {
      number: "02",
      title: "Build the right band",
      description:
        "We bring together the musicians that best fit the artist’s sound and songs.",
    },
    {
      number: "03",
      title: "Rehearse and shape it",
      description:
        "The band listens, collaborates, and develops a live arrangement with the artist’s guidance.",
    },
    {
      number: "04",
      title: "Film and release",
      description:
        "Once the session is ready, it is filmed, edited, and released by Houseband/Live.",
    },
  ];

  return (
    <div className={`${inter.className} min-h-screen bg-black text-white`}>
      <main className="px-4 py-8 sm:px-6 sm:py-10 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <div className="mb-8 sm:mb-10">
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

          <section className="mb-8 grid gap-4 lg:grid-cols-[1fr_1fr] lg:gap-6 sm:mb-10">
            <div className="rounded-[1.5rem] border border-[#d8a25e]/20 bg-white/[0.04] p-6 sm:p-8">
              <p className="text-[10px] uppercase tracking-[0.25em] text-[#f2d3a2]/70">
                The idea
              </p>

              <h2
                className={`${cormorant.className} mt-3 text-3xl font-semibold sm:text-4xl`}
              >
                Collaboration comes first
              </h2>

              <p className="mt-4 leading-7 text-white/75">
                House/Band is not just about filming a performance. It is about
                pairing artists with the right musicians and building a live
                version of the music that feels collaborative, musical, and true
                to the artist.
              </p>
            </div>

            <div className="rounded-[1.5rem] border border-white/10 bg-white/[0.04] p-6 sm:p-8">
              <p className="text-[10px] uppercase tracking-[0.25em] text-[#f2d3a2]/70">
                Why it works
              </p>

              <h2
                className={`${cormorant.className} mt-3 text-3xl font-semibold sm:text-4xl`}
              >
                Built around real process
              </h2>

              <p className="mt-4 leading-7 text-white/75">
                The sessions are shaped through listening, rehearsal, and artist
                guidance before the cameras roll. That process is what makes the
                final filmed session feel alive and intentional instead of just
                captured.
              </p>
            </div>
          </section>

          <section className="mb-8 sm:mb-10">
            <p className="text-sm uppercase tracking-[0.3em] text-[#f2d3a2]/70">
              Process
            </p>

            <div className="mt-5 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
              {processSteps.map((step, index) => (
                <div
                  key={step.number}
                  className={`group relative overflow-hidden rounded-[1.35rem] border bg-white/[0.04] p-5 transition duration-300 hover:-rotate-[1deg] hover:scale-[1.02] sm:rounded-[1.5rem] sm:p-6 ${
                    index % 2 === 0
                      ? "border-[#d8a25e]/20"
                      : "border-white/10"
                  }`}
                >
                  <div className="absolute inset-0 opacity-0 transition group-hover:opacity-100 bg-white/5" />

                  <div className="relative">
                    <p className="text-[10px] uppercase tracking-[0.25em] text-[#f2d3a2]/70">
                      {step.number}
                    </p>

                    <h3
                      className={`${cormorant.className} mt-3 text-3xl font-semibold`}
                    >
                      {step.title}
                    </h3>

                    <p className="mt-4 text-sm leading-6 text-white/75 sm:text-base sm:leading-7">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section className="rounded-[1.5rem] border border-white/10 bg-white/[0.04] p-6 sm:p-8">
            <p className="text-[10px] uppercase tracking-[0.25em] text-[#f2d3a2]/70">
              The result
            </p>

            <h2
              className={`${cormorant.className} mt-3 text-3xl font-semibold sm:text-4xl`}
            >
              A session worth releasing
            </h2>

            <p className="mt-4 max-w-3xl leading-7 text-white/75">
              The final goal is simple: create a live session that gives the
              artist a strong performance, a real band behind them, and a piece
              of content worth putting into the world through Houseband/Live.
            </p>
          </section>
        </div>
      </main>
    </div>
  );
}