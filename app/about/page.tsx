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

export default function AboutPage() {
  return (
    <div className={`${inter.className} min-h-screen bg-black text-white`}>
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
        <div className="mx-auto max-w-6xl">
          <div className="mb-16 max-w-4xl">
            <p className="text-sm uppercase tracking-[0.3em] text-white/55">
              About
            </p>
            <h1
              className={`${bungee.className} mt-3 text-4xl tracking-wide md:text-6xl`}
            >
              Built Around Live Performance
            </h1>
            <p className="mt-6 text-lg leading-8 text-white/75">
              Houseband/Live is a live session platform built to help artists
              turn performance into something visual, memorable, and worth
              sharing. We create sessions that feel intentional from the first
              note to the final frame.
            </p>
          </div>

          <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
            <section className="retro-card-frame rounded-[2rem] border border-white/10 bg-white/[0.04] p-8 shadow-xl">
              <p className="text-sm uppercase tracking-[0.3em] text-white/55">
                What We Do
              </p>
              <h2
                className={`${cormorant.className} mt-3 text-4xl font-semibold`}
              >
                Performance-driven sessions for artists who want to stand out
              </h2>
              <p className="mt-5 text-lg leading-8 text-white/75">
                Houseband/Live brings together musicianship, collaboration,
                creative direction, and visual presentation to create live
                sessions that feel polished without losing the raw energy of a
                real performance.
              </p>
            </section>

            <section className="retro-card-frame rounded-[2rem] border border-white/10 bg-white/[0.04] p-8 shadow-xl">
              <p className="text-sm uppercase tracking-[0.3em] text-white/55">
                Why It Exists
              </p>
              <h2
                className={`${cormorant.className} mt-3 text-4xl font-semibold`}
              >
                To give artists stronger visual identity through live music
              </h2>
              <p className="mt-5 text-lg leading-8 text-white/75">
                Too often, live performance stays in the room. Houseband/Live
                exists to help artists capture that energy and translate it into
                content that can travel, connect, and leave a lasting
                impression.
              </p>
            </section>
          </div>

          <section className="mt-10 grid gap-8 lg:grid-cols-2">
            <div className="retro-card-frame rounded-[2rem] border border-white/10 bg-white/[0.04] p-8 shadow-xl">
              <p className="text-sm uppercase tracking-[0.3em] text-white/55">
                What Makes It Different
              </p>
              <ul className="mt-6 space-y-4 text-white/80">
                <li>Live-first content built around real performance</li>
                <li>Strong visual presentation without losing artistic identity</li>
                <li>A collaborative houseband structure that supports the artist</li>
                <li>Sessions designed to feel like a release, not just a recording</li>
              </ul>
            </div>

            <div className="retro-card-frame rounded-[2rem] border border-white/10 bg-white/[0.04] p-8 shadow-xl">
              <p className="text-sm uppercase tracking-[0.3em] text-white/55">
                Who It’s For
              </p>
              <p className="mt-6 text-lg leading-8 text-white/75">
                Houseband/Live is built for emerging and independent artists,
                vocalists, songwriters, instrumentalists, and collaborators who
                want a more intentional way to present their music. It is for
                artists who care about the performance, the look, and the story
                around the work.
              </p>
            </div>
          </section>

          <section className="mt-10 text-center">
            <p className="mx-auto max-w-3xl text-lg leading-8 text-white/70">
              Houseband/Live is not just about documenting a performance. It is
              about creating a session that feels like a statement.
            </p>

            <Link
              href="/work-with-us"
              className="mt-8 inline-block rounded-full bg-white px-6 py-3 text-sm font-semibold uppercase tracking-[0.2em] text-black transition hover:scale-105"
            >
              Work With Us
            </Link>
          </section>
        </div>
      </main>
    </div>
  );
}