"use client";

import { useMemo, useState } from "react";
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

type Video = {
  title: string;
  youtubeId: string;
};

type Episode = {
  episodeTitle: string;
  subtitle: string;
  coverImage: string;
  playlistUrl: string;
  videos: Video[];
};

export default function EpisodesPage() {
  const episodes: Episode[] = [
    {
      episodeTitle: "Episode 01 — Debut Sessions",
      subtitle: "Houseband/Live",
      coverImage: "/episode1-cover.png",
      playlistUrl: "https://www.youtube.com/",
      videos: [
        {
          title: "AK Fields",
          youtubeId: "pOStmVxCAkU",
        },
      ],
    },
    {
      episodeTitle: "Episode 02 — Featuring Imani Waters",
      subtitle: "Houseband/Live",
      coverImage: "/episode2-cover.png",
      playlistUrl: "https://www.youtube.com/",
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
      coverImage: "/episode3-cover.png",
      playlistUrl: "https://www.youtube.com/",
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

  const allVideos = useMemo(
    () =>
      episodes.flatMap((episode) =>
        episode.videos.map((video) => ({
          ...video,
          episodeTitle: episode.episodeTitle,
        }))
      ),
    [episodes]
  );

  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const activeVideo = activeIndex !== null ? allVideos[activeIndex] : null;

  const openVideo = (youtubeId: string) => {
    const foundIndex = allVideos.findIndex((video) => video.youtubeId === youtubeId);
    if (foundIndex !== -1) {
      setActiveIndex(foundIndex);
    }
  };

  const closeVideo = () => setActiveIndex(null);

  const showPrevVideo = () => {
    if (activeIndex === null) return;
    setActiveIndex((activeIndex - 1 + allVideos.length) % allVideos.length);
  };

  const showNextVideo = () => {
    if (activeIndex === null) return;
    setActiveIndex((activeIndex + 1) % allVideos.length);
  };

  return (
    <div className={`${inter.className} min-h-screen bg-[#120d0b] text-[#f5ead8]`}>
      <header className="border-b border-white/10 bg-black/80 backdrop-blur-md">
  <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-10">
    <Link href="/">
      <img
        src="/housebandlogo.png"
        alt="Houseband Live"
        className="h-12 w-auto"
      />
    </Link>

    <nav className="hidden gap-8 text-sm uppercase tracking-[0.25em] text-white/70 md:flex">
      <Link href="/" className="transition hover:text-white">Home</Link>
      <Link href="/episodes" className="transition hover:text-white">Episodes</Link>
      <Link href="/roster" className="transition hover:text-white">Roster</Link>
      <Link href="/about" className="transition hover:text-white">About</Link>
      <Link href="/work-with-us" className="transition hover:text-white">Work With Us</Link>
    </nav>

    <Link
      href="/work-with-us"
      className="rounded-full border border-white/20 bg-white px-5 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-black transition hover:scale-105"
    >
      Apply
    </Link>
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
                <div className="mb-8 grid gap-8 lg:grid-cols-[1.1fr_1fr] lg:items-center">
                  <div className="overflow-hidden rounded-[1.5rem] border border-[#d8a25e]/15">
                    <img
                      src={episode.coverImage}
                      alt={episode.episodeTitle}
                      className="aspect-[16/10] w-full object-cover"
                    />
                  </div>

                  <div>
                    <p className="text-xs uppercase tracking-[0.3em] text-[#d8a25e]">
                      {episode.subtitle}
                    </p>
                    <h2 className={`${cormorant.className} mt-2 text-4xl font-semibold`}>
                      {episode.episodeTitle}
                    </h2>
                    <p className="mt-4 max-w-xl text-[#f5ead8]/70">
                      A curated collection of live performances captured through the
                      Houseband/Live format.
                    </p>

                    <a
                      href={episode.playlistUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="mt-6 inline-block rounded-full border border-[#d8a25e]/30 bg-[#d8a25e] px-5 py-3 text-sm font-semibold uppercase tracking-[0.2em] text-[#120d0b] transition hover:scale-105"
                    >
                      Watch Full Episode on YouTube
                    </a>
                  </div>
                </div>

                <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
                  {episode.videos.map((video) => (
                    <button
                      key={video.youtubeId}
                      type="button"
                      onClick={() => openVideo(video.youtubeId)}
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
          onClick={closeVideo}
        >
          <div
            className="relative w-full max-w-5xl rounded-[2rem] border border-[#d8a25e]/25 bg-[#120d0b] p-4 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={closeVideo}
              className="absolute right-4 top-4 z-10 rounded-full border border-[#f5ead8]/20 bg-[#120d0b]/80 px-3 py-2 text-xs uppercase tracking-[0.2em] text-[#f5ead8] transition hover:border-[#d8a25e]/40 hover:text-[#f2d3a2]"
            >
              Close
            </button>

            <button
              type="button"
              onClick={showPrevVideo}
              className="absolute left-4 top-1/2 z-10 -translate-y-1/2 rounded-full border border-[#f5ead8]/20 bg-[#120d0b]/80 px-4 py-3 text-xs uppercase tracking-[0.2em] text-[#f5ead8] transition hover:border-[#d8a25e]/40 hover:text-[#f2d3a2]"
            >
              Prev
            </button>

            <button
              type="button"
              onClick={showNextVideo}
              className="absolute right-4 top-1/2 z-10 -translate-y-1/2 rounded-full border border-[#f5ead8]/20 bg-[#120d0b]/80 px-4 py-3 text-xs uppercase tracking-[0.2em] text-[#f5ead8] transition hover:border-[#d8a25e]/40 hover:text-[#f2d3a2]"
            >
              Next
            </button>

            <div className="mb-4 px-2 pt-2">
              <p className="text-xs uppercase tracking-[0.25em] text-[#d8a25e]/80">
                Now Playing
              </p>
              <h3 className={`${cormorant.className} mt-2 text-3xl font-semibold`}>
                {activeVideo.title}
              </h3>
              <p className="mt-1 text-sm text-[#f5ead8]/60">
                {activeVideo.episodeTitle}
              </p>
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