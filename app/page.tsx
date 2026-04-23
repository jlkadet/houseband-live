"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
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

type FeaturedVideo = {
  title: string;
  subtitle: string;
  image: string;
  youtubeId: string;
};

export default function Home() {
  const carouselRef = useRef<HTMLDivElement | null>(null);
  const heroVideoRef = useRef<HTMLVideoElement | null>(null);
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [isHeroMuted, setIsHeroMuted] = useState(true);

  const featuredVideos: FeaturedVideo[] = [
    {
      title: "AK Fields",
      subtitle: "Episode 01",
      image: "https://img.youtube.com/vi/pOStmVxCAkU/hqdefault.jpg",
      youtubeId: "pOStmVxCAkU",
    },
    {
      title: "Imani Waters",
      subtitle: "Episode 02",
      image: "https://img.youtube.com/vi/Pp3C_fHKtMw/hqdefault.jpg",
      youtubeId: "Pp3C_fHKtMw",
    },
    {
      title: "Ian Chri$t",
      subtitle: "Episode 03",
      image: "https://img.youtube.com/vi/zxgs9gi_88o/hqdefault.jpg",
      youtubeId: "zxgs9gi_88o",
    },
    {
      title: "Nat Harriet",
      subtitle: "Episode 03",
      image: "https://img.youtube.com/vi/qqYYwg5OkC0/hqdefault.jpg",
      youtubeId: "qqYYwg5OkC0",
    },
    {
      title: "Khalil Da Visionary",
      subtitle: "Episode 03",
      image: "https://img.youtube.com/vi/2zn_BgkmK3Y/hqdefault.jpg",
      youtubeId: "2zn_BgkmK3Y",
    },
  ];

  const pageGallery = [
    {
      title: "Episodes",
      subtitle: "Watch the sessions",
      image: "/grouppic.png",
      href: "/episodes",
    },
    {
      title: "Roster",
      subtitle: "Meet the band",
      image: "/grouppic.png",
      href: "/roster",
    },
    {
      title: "About",
      subtitle: "What this is",
      image: "/grouppic.png",
      href: "/about",
    },
    {
      title: "Work With Us",
      subtitle: "Apply to perform",
      image: "/grouppic.png",
      href: "/work-with-us",
    },
  ];

  const activeVideo = activeIndex !== null ? featuredVideos[activeIndex] : null;

  const scrollCarousel = (direction: "left" | "right") => {
    if (!carouselRef.current) return;
    const amount = direction === "left" ? -300 : 300;
    carouselRef.current.scrollBy({ left: amount, behavior: "smooth" });
  };

  const openVideo = (index: number) => {
    setActiveIndex(index);
  };

  const closeVideo = () => {
    setActiveIndex(null);
  };

  const showPrevVideo = () => {
    if (activeIndex === null) return;
    setActiveIndex((activeIndex - 1 + featuredVideos.length) % featuredVideos.length);
  };

  const showNextVideo = () => {
    if (activeIndex === null) return;
    setActiveIndex((activeIndex + 1) % featuredVideos.length);
  };

  const toggleHeroMute = async () => {
    const video = heroVideoRef.current;
    if (!video) return;

    const nextMuted = !isHeroMuted;
    video.muted = nextMuted;
    setIsHeroMuted(nextMuted);

    try {
      if (video.paused) {
        await video.play();
      }
    } catch {}
  };

  useEffect(() => {
    const video = heroVideoRef.current;
    if (!video) return;
    video.muted = isHeroMuted;
  }, [isHeroMuted]);

  useEffect(() => {
    if (activeIndex !== null) {
      const originalOverflow = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = originalOverflow;
      };
    }
  }, [activeIndex]);

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

  return (
    <div className={`${inter.className} min-h-screen bg-black text-white`}>
      <section className="relative overflow-hidden px-4 pb-10 pt-10 sm:px-6 sm:pb-14 sm:pt-12 lg:px-10 lg:pb-18 lg:pt-14">
        <div className="absolute inset-0 overflow-hidden">
          <video
            ref={heroVideoRef}
            className="h-full w-full object-cover scale-105 animate-[zoom_20s_linear_infinite] brightness-75"
            autoPlay
            loop
            muted
            playsInline
            preload="metadata"
          >
            <source src="/hero-loop.mp4" type="video/mp4" />
          </video>
        </div>

        <div className="absolute inset-0 bg-black/30" />
        <div className="absolute inset-0 backdrop-blur-[2px]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_22%,rgba(0,0,0,0.86)_100%)]" />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/15 to-transparent" />

        <button
          type="button"
          onClick={toggleHeroMute}
          className="absolute right-4 top-20 z-20 inline-flex items-center justify-center rounded-full border border-[#d8a25e]/30 bg-[#120d0b]/80 px-4 py-2 text-[10px] uppercase tracking-[0.22em] text-[#f2d3a2] backdrop-blur-sm transition hover:bg-[#120d0b] sm:right-6 sm:top-24"
          aria-label={isHeroMuted ? "Unmute background video" : "Mute background video"}
        >
          {isHeroMuted ? "🔇 Sound" : "🔊 Sound"}
        </button>

        <div className="absolute left-4 top-20 hidden rounded-full border border-[#d8a25e]/40 bg-[#d8a25e]/10 px-4 py-2 text-[10px] uppercase tracking-[0.3em] text-[#f2d3a2] md:block">
          Live / Loud / Local
        </div>

        <div className="absolute right-6 top-32 hidden h-20 w-20 rounded-full border border-[#d8a25e]/20 bg-[#d8a25e]/10 blur-2xl md:block" />

        <div className="relative z-10 mx-auto flex min-h-[70svh] w-full max-w-7xl flex-col justify-end animate-[fadeIn_1s_ease-out] sm:min-h-[74svh]">
          <div className="max-w-4xl">
            <p className="mb-3 text-[11px] uppercase tracking-[0.28em] text-[#f2d3a2]/80 sm:mb-4 sm:text-sm sm:tracking-[0.45em]">
              Minneapolis Live Session Collective
            </p>

            <h1
              className={`${bungee.className} text-4xl leading-[0.9] tracking-tight sm:text-6xl md:text-7xl lg:text-[7.5rem]`}
            >
              HOUSEBAND/
              <span className="block text-white">LIVE</span>
            </h1>

            <div className="mt-4 inline-block rounded-full border border-[#d8a25e]/35 bg-[#d8a25e]/10 px-4 py-2 text-[10px] uppercase tracking-[0.28em] text-[#f2d3a2]">
              Now Booking — Minneapolis, MN
            </div>

            <div className="mt-5 sm:mt-6">
              <p className="max-w-md text-base leading-7 text-white/80 sm:max-w-lg sm:text-xl">
                Raw sessions. Real artists.
              </p>

              <button
                type="button"
                onClick={toggleHeroMute}
                className="mt-3 inline-flex items-center justify-center rounded-full border border-[#d8a25e]/25 bg-[#120d0b]/70 px-4 py-2 text-[10px] uppercase tracking-[0.25em] text-[#f2d3a2] transition hover:bg-[#120d0b] active:scale-95 sm:text-xs"
              >
                {isHeroMuted ? "Tap for Sound" : "Sound On"}
              </button>
            </div>

            <div className="mt-7 flex flex-col gap-3 sm:mt-8 sm:flex-row sm:flex-wrap">
              <Link
                href="/work-with-us#apply-form"
                className="inline-flex items-center justify-center rounded-full bg-[#f2d3a2] px-6 py-3 text-sm font-semibold uppercase tracking-[0.2em] text-black transition hover:scale-105"
              >
                Apply
              </Link>

              <Link
                href="/episodes"
                className="inline-flex items-center justify-center rounded-full border border-white/25 px-6 py-3 text-sm font-semibold uppercase tracking-[0.2em] text-white transition hover:bg-white/10"
              >
                Watch Live Sessions
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-b border-white/10 bg-black px-4 py-7 sm:px-6 sm:py-10 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <div className="mb-5 flex items-end justify-between gap-4">
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-[#f2d3a2]/70">
                Sessions
              </p>
              <h2
                className={`${bungee.className} mt-2 text-2xl tracking-wide sm:text-3xl`}
              >
                Press Play
              </h2>
            </div>

            <div className="flex gap-2">
              <button
                type="button"
                onClick={() => scrollCarousel("left")}
                className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-[#d8a25e]/20 bg-[#d8a25e]/10 text-[#f2d3a2] transition hover:bg-[#d8a25e]/20"
                aria-label="Scroll left"
              >
                ←
              </button>
              <button
                type="button"
                onClick={() => scrollCarousel("right")}
                className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-[#d8a25e]/20 bg-[#d8a25e]/10 text-[#f2d3a2] transition hover:bg-[#d8a25e]/20"
                aria-label="Scroll right"
              >
                →
              </button>
            </div>
          </div>

          <div
            ref={carouselRef}
            className="-mx-4 flex snap-x snap-mandatory gap-4 overflow-x-auto px-4 pb-2 scroll-smooth [scrollbar-width:none] [&::-webkit-scrollbar]:hidden sm:mx-0 sm:px-0"
          >
            {featuredVideos.map((item, index) => (
              <button
                key={item.title}
                type="button"
                onClick={() => openVideo(index)}
                className="group relative block h-[220px] w-[250px] snap-start flex-shrink-0 overflow-hidden rounded-[1.5rem] border border-white/10 bg-white/[0.04] text-left transition duration-300 hover:-rotate-[1deg] hover:scale-[1.04] hover:z-10 sm:h-[300px] sm:w-[380px] sm:rounded-[1.75rem]"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.05]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/25 to-transparent" />
                <div className="absolute inset-0 opacity-0 transition group-hover:opacity-100 bg-white/5" />

                <div className="absolute left-3 top-3 rounded-full border border-[#d8a25e]/30 bg-[#120d0b]/75 px-3 py-1 text-[10px] uppercase tracking-[0.25em] text-[#f2d3a2] sm:left-4 sm:top-4">
                  Play
                </div>

                <div className="absolute right-3 top-3 rounded-full border border-white/15 bg-black/60 px-2 py-1 text-[10px] uppercase tracking-[0.18em] text-white/70 sm:right-4 sm:top-4">
                  Video
                </div>

                <div className="absolute left-4 bottom-4 sm:left-5 sm:bottom-5">
                  <p className="text-[10px] uppercase tracking-[0.25em] text-white/55">
                    {item.subtitle}
                  </p>
                  <h3
                    className={`${cormorant.className} mt-2 text-3xl font-semibold text-white sm:text-4xl`}
                  >
                    {item.title}
                  </h3>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-white/10 bg-black px-4 py-7 sm:px-6 sm:py-10 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <p className="mb-4 text-xs uppercase tracking-[0.3em] text-[#f2d3a2]/70">
            Explore
          </p>

          <div className="-mx-4 flex snap-x snap-mandatory gap-4 overflow-x-auto px-4 pb-2 scroll-smooth [scrollbar-width:none] [&::-webkit-scrollbar]:hidden sm:mx-0 sm:grid sm:grid-cols-2 sm:overflow-visible sm:px-0 sm:pb-0 xl:grid-cols-4">
  {pageGallery.map((item, idx) => (
              <Link
                key={item.title}
                href={item.href}
                className={`group relative block w-[250px] snap-start flex-shrink-0 overflow-hidden rounded-[1.35rem] border bg-white/[0.04] sm:w-auto sm:rounded-[1.5rem] ${
                  idx % 2 === 0 ? "border-[#d8a25e]/20" : "border-white/10"
                }`}
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="h-[180px] w-full object-cover transition duration-500 group-hover:scale-105 group-hover:opacity-90 sm:h-[220px]"
                />
                <div className="absolute inset-0 bg-black/25" />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />

                <div className="absolute left-3 top-3 rounded-full border border-white/15 bg-black/60 px-3 py-1 text-[10px] uppercase tracking-[0.2em] text-white/70 sm:left-4 sm:top-4">
                  {idx + 1}
                </div>

                <div className="absolute left-3 bottom-3 sm:left-4 sm:bottom-4">
                  <p className="text-[10px] uppercase tracking-[0.25em] text-white/55">
                    {item.subtitle}
                  </p>
                  <h3
                    className={`${cormorant.className} mt-1 text-[1.9rem] font-semibold text-white sm:text-3xl`}
                  >
                    {item.title}
                  </h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-white/10 px-4 py-14 text-center sm:px-6 lg:px-10 lg:py-20">
        <div className="mx-auto max-w-3xl">
          <p className="text-xs uppercase tracking-[0.3em] text-[#f2d3a2]/70">
            Work With Us
          </p>

          <h2
            className={`${bungee.className} mt-4 text-2xl tracking-wide sm:text-3xl md:text-5xl`}
          >
            Be in the next session.
          </h2>

          <p className="mt-5 text-base leading-7 text-white/75 sm:mt-6 sm:text-lg sm:leading-8">
            Apply to perform with Houseband/Live.
          </p>

          <Link
            href="/work-with-us#apply-form"
            className="mt-8 inline-flex items-center justify-center rounded-full bg-[#f2d3a2] px-8 py-4 text-sm font-semibold uppercase tracking-[0.2em] text-black transition hover:scale-105"
          >
            Apply
          </Link>
        </div>
      </section>

      {activeVideo && (
        <div
          className="fixed inset-0 z-[100] flex items-end justify-center bg-black/90 px-3 py-3 backdrop-blur-md sm:items-center sm:px-4 sm:py-8"
          onClick={closeVideo}
        >
          <div
            className="relative w-full max-w-5xl rounded-[1.35rem] border border-[#d8a25e]/20 bg-[#050505] p-3 shadow-2xl sm:rounded-[2rem] sm:p-4"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="mb-3 flex items-start justify-between gap-4 border-b border-white/10 px-1 pb-3 pt-1 sm:mb-4 sm:px-2 sm:pb-4 sm:pt-2">
              <div>
                <p className="text-[10px] uppercase tracking-[0.25em] text-[#f2d3a2]/70 sm:text-xs">
                  Now Playing
                </p>
                <h3
                  className={`${cormorant.className} mt-2 text-2xl font-semibold sm:text-3xl`}
                >
                  {activeVideo.title}
                </h3>
                <p className="mt-1 text-xs text-white/60 sm:text-sm">
                  {activeVideo.subtitle}
                </p>
              </div>

              <p className="text-[10px] uppercase tracking-[0.25em] text-white/45 sm:text-xs">
                {activeIndex! + 1} / {featuredVideos.length}
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

            <div className="mt-4 flex items-center justify-between gap-2 sm:mt-5 sm:gap-3">
              <button
                type="button"
                onClick={showPrevVideo}
                className="inline-flex min-h-[48px] flex-1 items-center justify-center rounded-full border border-[#d8a25e]/20 bg-[#d8a25e]/10 px-4 py-3 text-xs font-semibold uppercase tracking-[0.2em] text-[#f2d3a2] transition hover:bg-[#d8a25e]/20"
              >
                Prev
              </button>

              <button
                type="button"
                onClick={closeVideo}
                className="inline-flex min-h-[48px] flex-1 items-center justify-center rounded-full bg-[#f2d3a2] px-4 py-3 text-xs font-semibold uppercase tracking-[0.2em] text-black transition hover:scale-[1.01]"
              >
                Close
              </button>

              <button
                type="button"
                onClick={showNextVideo}
                className="inline-flex min-h-[48px] flex-1 items-center justify-center rounded-full border border-[#d8a25e]/20 bg-[#d8a25e]/10 px-4 py-3 text-xs font-semibold uppercase tracking-[0.2em] text-[#f2d3a2] transition hover:bg-[#d8a25e]/20"
              >
                Next
              </button>
            </div>

            <div className="mt-4 text-center">
              <Link
                href="/episodes"
                onClick={closeVideo}
                className="text-xs uppercase tracking-[0.22em] text-white/55 transition hover:text-[#f2d3a2]"
              >
                View all sessions
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}