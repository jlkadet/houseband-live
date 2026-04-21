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
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

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
      subtitle: "Watch the archive",
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
    const amount = direction === "left" ? -320 : 320;
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
      <section className="relative overflow-hidden px-4 pb-14 pt-12 sm:px-6 sm:pb-16 sm:pt-14 lg:px-10 lg:pb-20 lg:pt-16">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/grouppic.png')" }}
        />
        <div className="absolute inset-0 bg-black/20" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_30%,rgba(0,0,0,0.82)_100%)]" />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/10 to-transparent" />

        <div className="relative z-10 mx-auto flex min-h-[78svh] w-full max-w-7xl flex-col justify-end">
          <div className="max-w-4xl">
            <p className="mb-4 text-xs uppercase tracking-[0.35em] text-white/60 sm:text-sm sm:tracking-[0.45em]">
              Minneapolis Live Session Collective
            </p>

            <h1
              className={`${bungee.className} text-5xl leading-[0.9] tracking-tight sm:text-6xl md:text-7xl lg:text-[7.5rem]`}
            >
              HOUSEBAND/
              <span className="block text-white/90">LIVE</span>
            </h1>

            <div className="mt-5 inline-block rounded-full border border-white/20 bg-white/5 px-4 py-2 text-[10px] uppercase tracking-[0.3em] text-white/75">
              Now Booking — Minneapolis, MN
            </div>

            <p className="mt-6 max-w-lg text-lg leading-7 text-white/80 sm:text-xl">
              Raw sessions. Real artists.
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
                Archive
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-b border-white/10 bg-black px-4 py-8 sm:px-6 sm:py-10 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <div className="mb-5 flex items-end justify-between gap-4">
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-white/45">
                Sessions
              </p>
              <h2
                className={`${bungee.className} mt-2 text-2xl tracking-wide sm:text-3xl`}
              >
                Featured Videos
              </h2>
            </div>

            <div className="flex gap-2">
              <button
                type="button"
                onClick={() => scrollCarousel("left")}
                className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-white/5 text-white transition hover:bg-white/10"
                aria-label="Scroll left"
              >
                ←
              </button>
              <button
                type="button"
                onClick={() => scrollCarousel("right")}
                className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-white/5 text-white transition hover:bg-white/10"
                aria-label="Scroll right"
              >
                →
              </button>
            </div>
          </div>

          <div
            ref={carouselRef}
            className="flex snap-x snap-mandatory gap-4 overflow-x-auto pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          >
            {featuredVideos.map((item, index) => (
              <button
                key={item.title}
                type="button"
                onClick={() => openVideo(index)}
                className="group relative block h-[250px] w-[290px] snap-start flex-shrink-0 overflow-hidden rounded-[1.75rem] border border-white/10 bg-white/[0.04] text-left sm:h-[300px] sm:w-[380px]"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.04]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/25 to-transparent" />

                <div className="absolute left-4 top-4 rounded-full border border-white/20 bg-black/70 px-3 py-1 text-[10px] uppercase tracking-[0.25em] text-white/80">
                  Play
                </div>

                <div className="absolute left-5 bottom-5">
                  <p className="text-[10px] uppercase tracking-[0.25em] text-white/55">
                    {item.subtitle}
                  </p>
                  <h3
                    className={`${cormorant.className} mt-2 text-4xl font-semibold text-white`}
                  >
                    {item.title}
                  </h3>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-white/10 bg-black px-4 py-8 sm:px-6 sm:py-10 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <p className="mb-4 text-xs uppercase tracking-[0.3em] text-white/45">
            Explore
          </p>

          <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
            {pageGallery.map((item) => (
              <Link
                key={item.title}
                href={item.href}
                className="group relative block overflow-hidden rounded-[1.5rem] border border-white/10 bg-white/[0.04]"
              >
                <div className="absolute inset-0 bg-black/25" />
                <img
                  src={item.image}
                  alt={item.title}
                  className="h-[220px] w-full object-cover transition duration-500 group-hover:scale-105 group-hover:opacity-90"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />

                <div className="absolute left-4 bottom-4">
                  <p className="text-[10px] uppercase tracking-[0.25em] text-white/55">
                    {item.subtitle}
                  </p>
                  <h3
                    className={`${cormorant.className} mt-1 text-3xl font-semibold text-white`}
                  >
                    {item.title}
                  </h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-white/10 px-4 py-16 text-center sm:px-6 lg:px-10 lg:py-20">
        <div className="mx-auto max-w-3xl">
          <p className="text-xs uppercase tracking-[0.3em] text-white/45">
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

      {activeVideo && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 px-3 py-4 backdrop-blur-md sm:px-4 sm:py-8"
          onClick={closeVideo}
        >
          <div
            className="relative w-full max-w-5xl rounded-[1.5rem] border border-white/15 bg-[#050505] p-3 shadow-2xl sm:rounded-[2rem] sm:p-4"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="mb-3 flex items-start justify-between gap-4 border-b border-white/10 px-1 pb-3 pt-1 sm:mb-4 sm:px-2 sm:pb-4 sm:pt-2">
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

            <div className="mt-4 text-center">
              <Link
                href="/episodes"
                onClick={closeVideo}
                className="text-xs uppercase tracking-[0.22em] text-white/55 transition hover:text-white"
              >
                Go to full archive
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}