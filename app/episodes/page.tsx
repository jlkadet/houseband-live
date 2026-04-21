"use client";

import { useEffect, useMemo, useState } from "react";
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
  youtubeUrl: string;
  previewYoutubeId: string;
  videos: Video[];
};

const episodes: Episode[] = [
  {
    episodeTitle: "Episode 01",
    subtitle: "AK Fields",
    youtubeUrl: "https://www.youtube.com/watch?v=pOStmVxCAkU",
    previewYoutubeId: "pOStmVxCAkU",
    videos: [
      {
        title: "AK Fields",
        youtubeId: "pOStmVxCAkU",
      },
    ],
  },
  {
    episodeTitle: "Episode 02",
    subtitle: "Imani Waters",
    youtubeUrl: "https://www.youtube.com/watch?v=Pp3C_fHKtMw",
    previewYoutubeId: "Pp3C_fHKtMw",
    videos: [
      {
        title: "Imani Waters",
        youtubeId: "Pp3C_fHKtMw",
      },
    ],
  },
  {
    episodeTitle: "Episode 03",
    subtitle: "Live Collective",
    youtubeUrl: "https://www.youtube.com/watch?v=zxgs9gi_88o",
    previewYoutubeId: "zxgs9gi_88o",
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

export default function EpisodesPage() {
  const [hoveredEpisode, setHoveredEpisode] = useState<string | null>(null);
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const allVideos = useMemo(
    () =>
      episodes.flatMap((episode) =>
        episode.videos.map((video) => ({
          ...video,
          episodeTitle: episode.episodeTitle,
          episodeSubtitle: episode.subtitle,
        }))
      ),
    []
  );

  const activeVideo = activeIndex !== null ? allVideos[activeIndex] : null;

  const setVideoById = (youtubeId: string) => {
    const foundIndex = allVideos.findIndex((video) => video.youtubeId === youtubeId);
    if (foundIndex !== -1) {
      setActiveIndex(foundIndex);
    }
  };

  const openVideo = (youtubeId: string) => {
    const foundIndex = allVideos.findIndex((video) => video.youtubeId === youtubeId);
    if (foundIndex === -1) return;

    setActiveIndex(foundIndex);

    const url = new URL(window.location.href);
    url.searchParams.set("video", youtubeId);
    window.history.replaceState({}, "", url.pathname + url.search);
  };

  const closeVideo = () => {
    setActiveIndex(null);

    const url = new URL(window.location.href);
    url.searchParams.delete("video");
    window.history.replaceState({}, "", url.pathname + url.search);
  };

  const showPrevVideo = () => {
    if (activeIndex === null) return;
    const nextIndex = (activeIndex - 1 + allVideos.length) % allVideos.length;
    const nextVideo = allVideos[nextIndex];
    setActiveIndex(nextIndex);

    const url = new URL(window.location.href);
    url.searchParams.set("video", nextVideo.youtubeId);
    window.history.replaceState({}, "", url.pathname + url.search);
  };

  const showNextVideo = () => {
    if (activeIndex === null) return;
    const nextIndex = (activeIndex + 1) % allVideos.length;
    const nextVideo = allVideos[nextIndex];
    setActiveIndex(nextIndex);

    const url = new URL(window.location.href);
    url.searchParams.set("video", nextVideo.youtubeId);
    window.history.replaceState({}, "", url.pathname + url.search);
  };

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const videoId = params.get("video");
    if (!videoId) return;
    setVideoById(videoId);
  }, [allVideos]);

  useEffect(() => {
    if (activeIndex === null) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeVideo();
      if (e.key === "ArrowLeft") showPrevVideo();
      if (e.key === "ArrowRight") showNextVideo();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [activeIndex]);

  useEffect(() => {
    if (activeIndex !== null) {
      const originalOverflow = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = originalOverflow;
      };
    }
  }, [activeIndex]);

  return (
    <div className={`${inter.className} min-h-screen bg-black text-white`}>
      <main className="px-4 py-10 sm:px-6 sm:py-12 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 sm:mb-12">
            <p className="text-sm uppercase tracking-[0.3em] text-white/55">
              Episodes
            </p>
            <h1
              className={`${bungee.className} mt-3 text-3xl tracking-wide sm:text-4xl md:text-6xl`}
            >
              Archive
            </h1>
            <p className="mt-5 max-w-2xl text-base leading-7 text-white/75 sm:text-lg sm:leading-8">
              Live sessions from Houseband/Live.
            </p>
          </div>

          <div className="space-y-10 sm:space-y-16">
            {episodes.map((episode) => (
              <div
                key={episode.episodeTitle}
                className="retro-card-frame rounded-[2rem] border border-white/10 bg-white/[0.04] p-5 shadow-xl sm:p-8"
              >
                <div className="mb-6 grid gap-6 sm:mb-8 sm:gap-8 lg:grid-cols-[1.1fr_1fr] lg:items-center">
                  <button
                    type="button"
                    onClick={() => openVideo(episode.previewYoutubeId)}
                    onMouseEnter={() => setHoveredEpisode(episode.episodeTitle)}
                    onMouseLeave={() => setHoveredEpisode(null)}
                    className="group relative overflow-hidden rounded-[1.5rem] border border-white/10 text-left"
                  >
                    <img
                      src={`https://img.youtube.com/vi/${episode.previewYoutubeId}/hqdefault.jpg`}
                      alt={episode.episodeTitle}
                      className="aspect-[16/10] w-full object-cover transition duration-500 group-hover:scale-[1.02]"
                    />

                    <div className="pointer-events-none absolute inset-0 bg-black/20 transition duration-300 group-hover:bg-black/5" />

                    {hoveredEpisode === episode.episodeTitle && (
                      <div className="absolute inset-0 hidden md:block">
                        <iframe
                          className="h-full w-full scale-[1.1]"
                          src={`https://www.youtube.com/embed/${episode.previewYoutubeId}?autoplay=1&mute=1&controls=0&loop=1&playlist=${episode.previewYoutubeId}&modestbranding=1&rel=0`}
                          title={`${episode.episodeTitle} preview`}
                          allow="autoplay; encrypted-media; picture-in-picture"
                        />
                      </div>
                    )}

                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />

                    <div className="absolute left-4 top-4 rounded-full border border-white/20 bg-black/75 px-3 py-1 text-[10px] uppercase tracking-[0.25em] text-white/80">
                      Play
                    </div>

                    <div className="absolute left-5 bottom-5">
                      <p className="text-[10px] uppercase tracking-[0.25em] text-white/60">
                        {episode.episodeTitle}
                      </p>
                      <h3
                        className={`${cormorant.className} mt-2 text-3xl font-semibold text-white`}
                      >
                        {episode.subtitle}
                      </h3>
                    </div>
                  </button>

                  <div>
                    <p className="text-xs uppercase tracking-[0.3em] text-white/55">
                      Houseband/Live
                    </p>
                    <h2
                      className={`${cormorant.className} mt-2 text-4xl font-semibold`}
                    >
                      {episode.episodeTitle}
                    </h2>
                    <p className="mt-4 max-w-xl text-white/70">
                      {episode.subtitle}
                    </p>

                    <div className="mt-6 flex flex-wrap gap-3">
                      <button
                        type="button"
                        onClick={() => openVideo(episode.previewYoutubeId)}
                        className="inline-block rounded-full bg-white px-5 py-3 text-sm font-semibold uppercase tracking-[0.2em] text-black transition hover:scale-105"
                      >
                        Watch Here
                      </button>

                      <a
                        href={episode.youtubeUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block rounded-full border border-white/20 bg-white/5 px-5 py-3 text-sm font-semibold uppercase tracking-[0.2em] text-white transition hover:bg-white/10"
                      >
                        YouTube
                      </a>
                    </div>
                  </div>
                </div>

                {episode.videos.length > 1 && (
                  <div className="grid gap-4 sm:gap-6 md:grid-cols-2 xl:grid-cols-3">
                    {episode.videos.map((video) => (
                      <button
                        key={video.youtubeId}
                        type="button"
                        onClick={() => openVideo(video.youtubeId)}
                        className="group overflow-hidden rounded-3xl border border-white/10 bg-white/[0.04] text-left transition hover:scale-[1.01] hover:border-white/25"
                      >
                        <div className="relative aspect-video w-full overflow-hidden">
                          <img
                            src={`https://img.youtube.com/vi/${video.youtubeId}/hqdefault.jpg`}
                            alt={video.title}
                            className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                          />
                          <div className="absolute inset-0 bg-black/35 transition group-hover:bg-black/20" />
                          <div className="absolute inset-0 flex items-center justify-center">
                            <div className="flex h-16 w-16 items-center justify-center rounded-full border border-white/30 bg-black/75 backdrop-blur-sm">
                              <div className="ml-1 h-0 w-0 border-b-[10px] border-l-[16px] border-t-[10px] border-b-transparent border-l-white border-t-transparent" />
                            </div>
                          </div>
                        </div>

                        <div className="p-5">
                          <p className="text-xs uppercase tracking-[0.25em] text-white/55">
                            Session
                          </p>
                          <h3
                            className={`${cormorant.className} mt-2 text-2xl font-semibold`}
                          >
                            {video.title}
                          </h3>
                        </div>
                      </button>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </main>

      {activeVideo && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/85 px-3 py-4 backdrop-blur-sm sm:px-4 sm:py-8"
          onClick={closeVideo}
        >
          <div
            className="relative w-full max-w-5xl rounded-[1.5rem] border border-white/15 bg-black p-3 shadow-2xl sm:rounded-[2rem] sm:p-4"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="mb-3 flex items-start justify-between gap-4 px-1 pt-1 sm:mb-4 sm:px-2 sm:pt-2">
              <div>
                <p className="text-[10px] uppercase tracking-[0.25em] text-white/55 sm:text-xs">
                  Now Playing
                </p>
                <h3
                  className={`${cormorant.className} mt-2 text-2xl font-semibold sm:text-3xl`}
                >
                  {activeVideo.title}
                </h3>
                <p className="mt-1 text-xs text-white/60 sm:text-sm">
                  {activeVideo.episodeTitle}
                </p>
              </div>

              <p className="text-[10px] uppercase tracking-[0.25em] text-white/45 sm:text-xs">
                {activeIndex! + 1} / {allVideos.length}
              </p>
            </div>

            <div className="aspect-video w-full overflow-hidden rounded-[1rem] border border-white/10 sm:rounded-[1.5rem]">
              <iframe
                className="h-full w-full"
                src={`https://www.youtube.com/embed/${activeVideo.youtubeId}?autoplay=1`}
                title={activeVideo.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>

            <div className="mt-4 flex items-center justify-between gap-3 sm:mt-5">
              <button
                type="button"
                onClick={showPrevVideo}
                className="inline-flex flex-1 items-center justify-center rounded-full border border-white/15 bg-white/5 px-4 py-3 text-xs font-semibold uppercase tracking-[0.2em] text-white transition hover:border-white/30 hover:bg-white/10"
              >
                Prev
              </button>

              <button
                type="button"
                onClick={closeVideo}
                className="inline-flex flex-1 items-center justify-center rounded-full bg-white px-4 py-3 text-xs font-semibold uppercase tracking-[0.2em] text-black transition hover:scale-[1.01]"
              >
                Close
              </button>

              <button
                type="button"
                onClick={showNextVideo}
                className="inline-flex flex-1 items-center justify-center rounded-full border border-white/15 bg-white/5 px-4 py-3 text-xs font-semibold uppercase tracking-[0.2em] text-white transition hover:border-white/30 hover:bg-white/10"
              >
                Next
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}