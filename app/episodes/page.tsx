"use client";

import { useState } from "react";
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

export default function EpisodesPage() {
  const [activeVideo, setActiveVideo] = useState<{
    title: string;
    youtubeId: string;
  } | null>(null);

  const episodes = [
    {
      episodeTitle: "Episode 01 — Debut Sessions",
      subtitle: "Houseband/Live",
      videos: [
        {
          title: "AK Fields",
          youtubeId: "pOStmVxCAkU",
        },
      ],
    },
    {
      episodeTitle: "Episode 02 — Imani Waters Session",
      subtitle: "Houseband/Live",
      videos: [
        {
          title: "Imani Waters",
          youtubeId: "Pp3C_fHKtMw",
        },
      ],
    },
    {
      episodeTitle: "Episode 03 — Live Collective",
      subtitle: "Houseband/Live",
      videos: [
        {
          title: "Ian Chri$t",
          youtubeId: "zxgs9gi_88o",
        },
        {
          title: "Nat Harriet",
          youtubeId: "qqYYwg5OkC0",
        },
        {
          title: "Khalil Da Visionary",
          youtubeId: "2zn_BgkmK3Y",
        },
      ],
    },
  ];

  return (
    <div className={`${inter.className} min-h-screen bg-[#120d0b] text-[#f5ead8]`}>
      <header className="border-b border-[#c48b4f]/20 bg-[#120d0b]/90 backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-10">
          <Link href="/">
            <img
              src="/housebandlogo.png"
              alt="Houseband Live"
              className="h-12 w-auto"
            />
          </Link>

          <nav className="hidden gap-8 text-sm uppercase tracking-[0.25em] text-[#f5ead8]/75 md:flex">
            <Link href="/" className="transition hover:text-[#d8a25e]">
              Home
            </Link>
            <Link href="/episodes" className="transition hover:text-[#d8a25e]">
              Episodes
            </Link>
          </nav>
        </div>
      </header>

      <main className="px-6 py-16 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12">
            <p className="text-sm uppercase tracking-[0.3em] text-[#d8a25e]/80">
              Previous Episodes
            </p>
            <h1 className={`${bungee.className} mt-3 text-4xl tracking-wide md:text-6xl`}>
              Watch the Archive
            </h1>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-[#f5ead8]/75">
              Explore past Houseband/Live sessions and experience the sound,
              visuals, and collaborative energy behind each performance.
            </p>
          </div>

          <div className="space-y-16">
            {episodes.map((episode) => (
              <div
                key={episode.episodeTitle}
                className="retro-card-frame rounded-[2rem] border border-[#d8a25e]/20 bg-[#1a1310] p-8 shadow-xl"
              >
                <div className="mb-8">
                  <p className="text-xs uppercase tracking-[0.3em] text-[#d8a25e]">
                    {episode.subtitle}
                  </p>
                  <h2 className={`${cormorant.className} mt-2 text-4xl font-semibold`}>
                    {episode.episodeTitle}
                  </h2>
                </div>

                <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
                  {episode.videos.map((video) => (
                    <button
                      key={video.youtubeId}
                      type="button"
                      onClick={() => setActiveVideo(video)}
                      className="group overflow-hidden rounded-3xl border border-[#d8a25e]/15 bg-[#120d0b] text-left transition hover:scale-[1.01] hover:border-[#d8a25e]/35"
                    >
                      <div className="relative aspect-video w-full overflow-hidden">
                        <img
                          src={`https://img.youtube.com/vi/${video.youtubeId}/hqdefault.jpg`}
                          alt={video.title}
                          className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-black/30 transition group-hover:bg-black/20" />
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="flex h-16 w-16 items-center justify-center rounded-full border border-[#f5ead8]/40 bg-[#120d0b]/75 backdrop-blur-sm">
                            <div className="ml-1 h-0 w-0 border-b-[10px] border-l-[16px] border-t-[10px] border-b-transparent border-l-[#f2d3a2] border-t-transparent" />
                          </div>
                        </div>
                        <div className="absolute left-4 top-4 rounded-full border border-[#d8a25e]/30 bg-[#120d0b]/75 px-3 py-1 text-[10px] uppercase tracking-[0.25em] text-[#f2d3a2]">
                          Watch Now
                        </div>
                      </div>

                      <div className="p-5">
                        <p className="text-xs uppercase tracking-[0.25em] text-[#d8a25e]/80">
                          Live Session
                        </p>
                        <h3 className={`${cormorant.className} mt-2 text-2xl font-semibold`}>
                          {video.title}
                        </h3>
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>

      {activeVideo && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 px-4 py-8 backdrop-blur-sm"
          onClick={() => setActiveVideo(null)}
        >
          <div
            className="relative w-full max-w-5xl rounded-[2rem] border border-[#d8a25e]/25 bg-[#120d0b] p-4 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setActiveVideo(null)}
              className="absolute right-4 top-4 z-10 rounded-full border border-[#f5ead8]/20 bg-[#120d0b]/80 px-3 py-2 text-xs uppercase tracking-[0.2em] text-[#f5ead8] transition hover:border-[#d8a25e]/40 hover:text-[#f2d3a2]"
            >
              Close
            </button>

            <div className="mb-4 px-2 pt-2">
              <p className="text-xs uppercase tracking-[0.25em] text-[#d8a25e]/80">
                Now Playing
              </p>
              <h3 className={`${cormorant.className} mt-2 text-3xl font-semibold`}>
                {activeVideo.title}
              </h3>
            </div>

            <div className="aspect-video w-full overflow-hidden rounded-[1.5rem] border border-[#d8a25e]/15">
              <iframe
                className="h-full w-full"
                src={`https://www.youtube.com/embed/${activeVideo.youtubeId}?autoplay=1`}
                title={activeVideo.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}