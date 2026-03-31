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
  const episodes = [
    {
      episodeTitle: "Episode 01",
      subtitle: "Houseband/Live Sessions",
      videos: [
        {
          title: "Performance 01",
          youtubeId: "YOUTUBE_ID_1",
        },
        {
          title: "Performance 02",
          youtubeId: "YOUTUBE_ID_2",
        },
        {
          title: "Performance 03",
          youtubeId: "YOUTUBE_ID_3",
        },
      ],
    },
    {
      episodeTitle: "Episode 02",
      subtitle: "Houseband/Live Sessions",
      videos: [
        {
          title: "Performance 04",
          youtubeId: "YOUTUBE_ID_4",
        },
        {
          title: "Performance 05",
          youtubeId: "YOUTUBE_ID_5",
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
              Explore past Houseband/Live episodes and experience the sound,
              visuals, and collaborative energy behind each session.
            </p>
          </div>

          <div className="space-y-12">
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
                    <div
                      key={video.youtubeId}
                      className="overflow-hidden rounded-3xl border border-[#d8a25e]/15 bg-[#120d0b]"
                    >
                      <div className="aspect-video w-full">
                        <iframe
                          className="h-full w-full"
                          src={`https://www.youtube.com/embed/${video.youtubeId}`}
                          title={video.title}
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                          allowFullScreen
                        />
                      </div>
                      <div className="p-4">
                        <p className="text-sm uppercase tracking-[0.25em] text-[#d8a25e]/80">
                          Video
                        </p>
                        <h3 className={`${cormorant.className} mt-2 text-2xl font-semibold`}>
                          {video.title}
                        </h3>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}