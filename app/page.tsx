import { Bebas_Neue, Cormorant_Garamond, Inter } from "next/font/google";

const bebas = Bebas_Neue({
  weight: "400",
  subsets: ["latin"],
});

const cormorant = Cormorant_Garamond({
  weight: ["400", "500", "600"],
  subsets: ["latin"],
});

const inter = Inter({
  subsets: ["latin"],
});

export default function Home() {
  const featuredSessions = [
    {
      title: "Midnight Session",
      artist: "Featuring Local Artists",
      image: "/IanChrist.png",
    },
    {
      title: "Studio Take 02",
      artist: "Houseband/Live Collective",
      image: "/grouppic.png",
    },
    {
      title: "Live Room Cut",
      artist: "Guest Collaboration",
      image: "/IanChrist.png",
    },
  ];

  const packages = [
    {
      name: "Session Package",
      price: "$250",
      description:
        "A clean, collaborative live performance experience for artists who want strong visuals and a polished session.",
      features: [
        "Live performance capture",
        "Collaborative backing support",
        "Edited performance deliverable",
      ],
    },
    {
      name: "Full Experience",
      price: "$500",
      description:
        "A deeper creative partnership with more hands-on support, stronger production, and a fuller release experience.",
      features: [
        "Everything in Session Package",
        "Expanded production support",
        "Creative rollout guidance",
      ],
    },
  ];

  return (
    <div className={`${inter.className} min-h-screen bg-black text-white`}>
      <header className="fixed top-0 z-50 w-full border-b border-white/10 bg-black/70 backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-10">
          <img
            src="/housebandlogo.png"
            alt="Houseband Live"
            className="h-12 w-auto"
          />

          <nav className="hidden gap-8 text-sm uppercase tracking-[0.25em] text-white/80 md:flex">
            <a href="#sessions" className="transition hover:text-white">
              Sessions
            </a>
            <a href="#artists" className="transition hover:text-white">
              Artists
            </a>
            <a href="#about" className="transition hover:text-white">
              About
            </a>
            <a href="#work" className="transition hover:text-white">
              Work With Us
            </a>
          </nav>

          <a
            href="#contact"
            className="rounded-full border border-white/20 bg-white px-5 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-black transition hover:scale-105"
          >
            Join / Contact
          </a>
        </div>
      </header>

      <section className="relative flex min-h-screen items-end overflow-hidden px-6 pb-16 pt-28 lg:px-10 lg:pb-24">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('/grouppic.png')",
          }}
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/25 to-transparent" />

        <div className="relative z-10 mx-auto flex w-full max-w-7xl flex-col gap-10 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-3xl">
            <p className="mb-4 text-sm uppercase tracking-[0.45em] text-white/75">
              Live Music Collective
            </p>

            <h1
              className={`${bebas.className} text-6xl leading-[0.9] tracking-tight md:text-8xl lg:text-[9rem]`}
            >
              HOUSEBAND/
              <span className="block text-white/85">LIVE</span>
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-7 text-white/85 md:text-lg">
              Professional live sessions with artistic edge. We bring
              musicians together to create immersive performances,
              collaborative visuals, and a platform artists want to be part
              of.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="#work"
                className="rounded-full bg-white px-6 py-3 text-sm font-semibold uppercase tracking-[0.2em] text-black transition hover:scale-105"
              >
                Work With Us
              </a>
              <a
                href="#sessions"
                className="rounded-full border border-white/20 px-6 py-3 text-sm font-semibold uppercase tracking-[0.2em] text-white transition hover:bg-white/10"
              >
                View Sessions
              </a>
            </div>
          </div>

          <div className="max-w-sm rounded-3xl border border-white/20 bg-black/40 p-6 shadow-2xl backdrop-blur-md">
            <p className="text-xs uppercase tracking-[0.3em] text-white/60">
              What we do
            </p>
            <p
              className={`${cormorant.className} mt-4 text-3xl font-medium leading-9 text-white`}
            >
              We showcase our art and help artists bring their sound to life
              through live, collaborative session experiences.
            </p>
          </div>
        </div>
      </section>

      <section id="sessions" className="mx-auto max-w-7xl px-6 py-20 lg:px-10">
        <div className="mb-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-white/50">
              Featured Sessions
            </p>
            <h2
              className={`${bebas.className} mt-3 text-4xl tracking-wide md:text-6xl`}
            >
              Featured Sessions
            </h2>
          </div>
          <p className="max-w-xl text-white/70">
            A curated look at the atmosphere, collaboration, and live energy
            artists can expect when working with Houseband/Live.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {featuredSessions.map((session) => (
            <div
              key={session.title}
              className="group overflow-hidden rounded-3xl border border-white/10 bg-white/[0.04] shadow-xl"
            >
              <div className="overflow-hidden">
                <img
                  src={session.image}
                  alt={session.title}
                  className="h-80 w-full object-cover transition duration-500 group-hover:scale-105"
                />
              </div>

              <div className="p-6">
                <p className="text-xs uppercase tracking-[0.25em] text-white/50">
                  Session
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
      </section>

      <section
        id="artists"
        className="border-y border-white/10 bg-white/[0.03] px-6 py-20 lg:px-10"
      >
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-2">
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-white/50">
              Artists
            </p>
            <h2
              className={`${bebas.className} mt-3 text-4xl tracking-wide md:text-6xl`}
            >
              Built for Collaboration
            </h2>
          </div>

          <div className="grid gap-6 sm:grid-cols-2">
            {[
              "Featured Vocalists",
              "Session Musicians",
              "Guest Collaborators",
              "Emerging Artists",
            ].map((item) => (
              <div
                key={item}
                className="rounded-3xl border border-white/10 bg-black/30 p-6"
              >
                <h3 className={`${cormorant.className} text-2xl font-semibold`}>
                  {item}
                </h3>
                <p className="mt-3 text-white/70">
                  A flexible collective model that creates space for strong
                  performances and new creative partnerships.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="mx-auto max-w-7xl px-6 py-20 lg:px-10">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-white/50">
              About
            </p>
            <h2
              className={`${bebas.className} mt-3 text-4xl tracking-wide md:text-6xl`}
            >
              A Platform for Live Artistry
            </h2>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-white/75">
              Houseband/Live exists to spotlight artists through dynamic live
              sessions that feel elevated, intentional, and visually
              compelling. We blend performance, collaboration, and creative
              direction to make each session feel like an event.
            </p>
          </div>

          <div className="rounded-3xl border border-white/15 bg-white/[0.04] p-8 shadow-xl backdrop-blur-sm">
            <p className="text-sm uppercase tracking-[0.3em] text-white/50">
              Why it works
            </p>
            <ul className="mt-6 space-y-4 text-white/80">
              <li>Live-first identity with strong visual storytelling</li>
              <li>
                Professional presentation without losing artistic character
              </li>
              <li>Clear entry points for artists who want support</li>
            </ul>
          </div>
        </div>
      </section>

      <section id="work" className="mx-auto max-w-7xl px-6 py-20 lg:px-10">
        <div className="mb-10 max-w-3xl">
          <p className="text-sm uppercase tracking-[0.3em] text-white/50">
            Work With Us
          </p>
          <h2
            className={`${bebas.className} mt-3 text-4xl tracking-wide md:text-6xl`}
          >
            Artist Support Packages
          </h2>
          <p className="mt-5 text-lg leading-8 text-white/75">
            Designed for artists who want more than exposure. Whether you need
            a clean live session or a more involved creative partnership, we
            offer flexible support built around your goals.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          {packages.map((pkg) => (
            <div
              key={pkg.name}
              className="rounded-[2rem] border border-white/15 bg-white/[0.04] p-8 shadow-xl backdrop-blur-sm"
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h3 className={`${cormorant.className} text-3xl font-semibold`}>
                    {pkg.name}
                  </h3>
                  <p className="mt-3 max-w-xl text-white/70">
                    {pkg.description}
                  </p>
                </div>

                <div className="text-right">
                  <p className="text-xs uppercase tracking-[0.25em] text-white/50">
                    Starting at
                  </p>
                  <p className={`${bebas.className} mt-2 text-4xl tracking-wide`}>
                    {pkg.price}
                  </p>
                </div>
              </div>

              <ul className="mt-8 space-y-3 text-white/80">
                {pkg.features.map((feature) => (
                  <li
                    key={feature}
                    className="rounded-full border border-white/10 px-4 py-3"
                  >
                    {feature}
                  </li>
                ))}
              </ul>

              <a
                href="#contact"
                className="mt-8 inline-block rounded-full bg-white px-5 py-3 text-sm font-semibold uppercase tracking-[0.2em] text-black transition hover:scale-105"
              >
                Inquire Now
              </a>
            </div>
          ))}
        </div>
      </section>

      <section
        id="contact"
        className="border-t border-white/10 bg-white/[0.03] px-6 py-20 lg:px-10"
      >
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1fr_1fr]">
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-white/50">
              Join / Contact
            </p>
            <h2
              className={`${bebas.className} mt-3 text-4xl tracking-wide md:text-6xl`}
            >
              Let’s Build Something Live
            </h2>
            <p className="mt-6 max-w-xl text-lg leading-8 text-white/75">
              Reach out if you are an artist, collaborator, or creative partner
              interested in performing with Houseband/Live.
            </p>
          </div>

          <form
  action="https://formspree.io/f/xpqorbzd"
  method="POST"
  className="..."
>
            <input type="text" name="artistName" placeholder="Artist Name" />
<input type="text" name="links" placeholder="Instagram / Spotify / Website" />
<input type="email" name="email" placeholder="Email" />
<textarea name="message" />
            <button
              type="submit"
              className="rounded-full bg-white px-6 py-3 text-sm font-semibold uppercase tracking-[0.2em] text-black transition hover:scale-105"
            >
              Submit Inquiry
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}