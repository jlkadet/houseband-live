"use client";

import Link from "next/link";
import { useState, type ChangeEvent, type FormEvent } from "react";
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

export default function Home() {
  const [formData, setFormData] = useState({
    artistName: "",
    links: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState<
    "idle" | "submitting" | "success" | "error"
  >("idle");

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

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("submitting");

    try {
      const response = await fetch(
        "https://script.google.com/macros/s/AKfycbxJRQMAkmpOdReRIbTRbuu1pTDYyEjhV_GInsQxudrcKv5F9kgZ6DCvAXuEdUAEON8tWA/exec",
        {
          method: "POST",
          headers: {
            "Content-Type": "text/plain;charset=utf-8",
          },
          body: JSON.stringify(formData),
        }
      );

      const result = await response.json();

      if (result.result === "success") {
        setStatus("success");
        setFormData({
          artistName: "",
          links: "",
          email: "",
          message: "",
        });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <div className={`${inter.className} min-h-screen bg-[#120d0b] text-[#f5ead8]`}>
      <header className="fixed top-0 z-50 w-full border-b border-[#c48b4f]/20 bg-[#120d0b]/80 backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-10">
          <img
            src="/housebandlogo.png"
            alt="Houseband Live"
            className="h-12 w-auto"
          />

          <nav className="hidden gap-8 text-sm uppercase tracking-[0.25em] text-[#f5ead8]/75 md:flex">
            <Link href="/#sessions" className="transition hover:text-[#d8a25e]">
              Sessions
            </Link>
            <Link href="/episodes" className="transition hover:text-[#d8a25e]">
              Episodes
            </Link>
            <Link href="/#artists" className="transition hover:text-[#d8a25e]">
              Artists
            </Link>
            <Link href="/#about" className="transition hover:text-[#d8a25e]">
              About
            </Link>
            <Link href="/#work" className="transition hover:text-[#d8a25e]">
              Work With Us
            </Link>
          </nav>

          <a
            href="#contact"
            className="rounded-full border border-[#d8a25e]/40 bg-[#f5ead8] px-5 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#120d0b] transition hover:scale-105"
          >
            Join / Contact
          </a>
        </div>
      </header>

      <section className="retro-grain retro-frame relative flex min-h-screen items-end overflow-hidden px-6 pb-16 pt-28 lg:px-10 lg:pb-24">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/grouppic.png')" }}
        />
        <div className="absolute inset-0 bg-[#120d0b]/55" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#120d0b] via-[#120d0b]/40 to-transparent" />

        <div className="relative z-10 mx-auto flex w-full max-w-7xl flex-col gap-10 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-3xl">
            <p className="mb-4 text-sm uppercase tracking-[0.45em] text-[#d8a25e]">
  Minneapolis Live Session Collective
</p>

            <h1
              className={`${bungee.className} text-5xl leading-[0.92] tracking-tight md:text-7xl lg:text-[7rem]`}
            >
              HOUSEBAND/
              <span className="block text-[#f2d3a2]">LIVE</span>
            </h1>

            <div className="mb-4 inline-block rounded-full border border-[#d8a25e]/30 bg-[#1a1310]/70 px-4 py-2 text-[10px] uppercase tracking-[0.3em] text-[#f2d3a2]">
              Est. Live Sessions / Minneapolis
            </div>

            <p className="mt-6 max-w-2xl text-base leading-7 text-[#f5ead8]/85 md:text-lg">
  Houseband/Live creates filmed live sessions that help artists turn
  strong performances into standout visual content. We bring together
  musicians, creative direction, and live energy to build sessions that
  feel intentional, collaborative, and worth sharing.
</p>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="#work"
                className="rounded-full bg-[#d8a25e] px-6 py-3 text-sm font-semibold uppercase tracking-[0.2em] text-[#120d0b] transition hover:scale-105"
              >
                Work With Us
              </a>
              <a
                href="#sessions"
                className="rounded-full border border-[#f5ead8]/30 px-6 py-3 text-sm font-semibold uppercase tracking-[0.2em] text-[#f5ead8] transition hover:bg-[#f5ead8]/10"
              >
                View Sessions
              </a>
            </div>
          </div>

          <div className="retro-card-frame max-w-sm rounded-3xl border border-[#d8a25e]/30 bg-[#1a1310]/70 p-6 shadow-2xl backdrop-blur-md">
            <p className="text-xs uppercase tracking-[0.3em] text-[#d8a25e]">
              What we do
            </p>
            <p
  className={`${cormorant.className} mt-4 text-3xl font-semibold leading-9 text-[#f5ead8]`}
>
  We create live session experiences that give artists strong visuals,
  real collaboration, and a performance they can proudly put into the world.
</p>
          </div>
        </div>
      </section>

      <section id="sessions" className="mx-auto max-w-7xl px-6 py-20 lg:px-10">
        <div className="mb-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-[#d8a25e]/80">
              Featured Sessions
            </p>
            <h2
              className={`${bungee.className} mt-3 text-3xl tracking-wide md:text-5xl`}
            >
              Featured Sessions
            </h2>
          </div>
          <p className="max-w-xl text-[#f5ead8]/70">
  A look at the kind of live performance, visual quality, and creative
  collaboration artists can expect when they work with Houseband/Live.
</p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {featuredSessions.map((session, index) => (
            <div
              key={session.title}
              className="retro-card-frame group overflow-hidden rounded-3xl border border-[#d8a25e]/20 bg-[#1a1310] shadow-xl"
            >
              <div className="overflow-hidden">
                <img
                  src={session.image}
                  alt={session.title}
                  className="h-80 w-full object-cover transition duration-500 group-hover:scale-105"
                />
              </div>

              <div className="p-6">
                <p className="text-xs uppercase tracking-[0.25em] text-[#d8a25e]">
                  Session No. {String(index + 1).padStart(2, "0")}
                </p>
                <h3
                  className={`${cormorant.className} mt-3 text-3xl font-semibold`}
                >
                  {session.title}
                </h3>
                <p className="mt-2 text-[#f5ead8]/70">{session.artist}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <a
            href="#work"
            className="inline-block rounded-full bg-[#d8a25e] px-6 py-3 text-sm font-semibold uppercase tracking-[0.2em] text-[#120d0b] transition hover:scale-105"
          >
            Work With Us
          </a>
        </div>
      </section>

      <section
        id="artists"
        className="border-y border-[#d8a25e]/15 bg-[#18110f] px-6 py-20 lg:px-10"
      >
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-2">
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-[#d8a25e]/80">
              Who This Is For
            </p>
            <h2
              className={`${bungee.className} mt-3 text-3xl tracking-wide md:text-5xl`}
            >
              Built for Collaboration
            </h2>
            <p className="mt-6 max-w-xl text-lg leading-8 text-[#f5ead8]/75">
  Whether you are a solo artist, vocalist, songwriter, instrumentalist,
  or creative collaborator, Houseband/Live is built for artists who want
  their music presented in a more intentional and visually compelling way.
</p>
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
                className="retro-card-frame rounded-3xl border border-[#d8a25e]/15 bg-[#120d0b] p-6"
              >
                <h3 className={`${cormorant.className} text-2xl font-semibold`}>
                  {item}
                </h3>
                <p className="mt-3 text-[#f5ead8]/70">
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
            <p className="text-sm uppercase tracking-[0.3em] text-[#d8a25e]/80">
              About
            </p>
            <h2
              className={`${bungee.className} mt-3 text-3xl tracking-wide md:text-5xl`}
            >
              A Platform for Live Artistry
            </h2>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-[#f5ead8]/75">
  Houseband/Live exists to help artists turn live performance into a
  stronger creative asset. Our sessions combine musicianship, visual
  storytelling, and collaboration so each performance feels polished,
  memorable, and ready to reach a wider audience.
</p>
          </div>

          <div className="retro-card-frame rounded-3xl border border-[#d8a25e]/20 bg-[#1a1310] p-8 shadow-xl">
            <p className="text-sm uppercase tracking-[0.3em] text-[#d8a25e]/80">
              Why it works
            </p>
            <ul className="mt-6 space-y-4 text-[#f5ead8]/80">
  <li>High-quality live content built around real performance</li>
  <li>Creative direction that keeps the artist at the center</li>
  <li>Flexible ways for artists to collaborate and get support</li>
</ul>
          </div>
        </div>
      </section>

      <section id="work" className="mx-auto max-w-7xl px-6 py-20 lg:px-10">
        <div className="mb-10 max-w-3xl">
          <p className="text-sm uppercase tracking-[0.3em] text-[#d8a25e]/80">
            Work With Us
          </p>
          <h2
            className={`${bungee.className} mt-3 text-3xl tracking-wide md:text-5xl`}
          >
            Artist Support Packages
          </h2>
          <p className="mt-5 text-lg leading-8 text-[#f5ead8]/75">
  Our packages are built for artists who want more than just a recording.
  Whether you need a straightforward live session or a more hands-on
  creative partnership, we offer support that matches your goals, sound,
  and stage of growth.
</p>
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          {packages.map((pkg) => (
            <div
              key={pkg.name}
              className="retro-card-frame rounded-[2rem] border border-[#d8a25e]/20 bg-[#1a1310] p-8 shadow-xl"
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h3 className={`${cormorant.className} text-3xl font-semibold`}>
                    {pkg.name}
                  </h3>
                  <p className="mt-3 max-w-xl text-[#f5ead8]/70">
                    {pkg.description}
                  </p>
                </div>

                <div className="text-right">
                  <p className="text-xs uppercase tracking-[0.25em] text-[#d8a25e]/70">
                    Starting at
                  </p>
                  <p
                    className={`${bungee.className} mt-2 text-3xl text-[#f2d3a2]`}
                  >
                    {pkg.price}
                  </p>
                </div>
              </div>

              <ul className="mt-8 space-y-3 text-[#f5ead8]/80">
                {pkg.features.map((feature) => (
                  <li
                    key={feature}
                    className="rounded-full border border-[#d8a25e]/15 px-4 py-3"
                  >
                    {feature}
                  </li>
                ))}
              </ul>

              <a
                href="#contact"
                className="mt-8 inline-block rounded-full bg-[#d8a25e] px-5 py-3 text-sm font-semibold uppercase tracking-[0.2em] text-[#120d0b] transition hover:scale-105"
              >
                Inquire Now
              </a>
            </div>
          ))}
        </div>
      </section>

      <section
        id="contact"
        className="border-t border-[#d8a25e]/15 bg-[#18110f] px-6 py-20 lg:px-10"
      >
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[1fr_1fr] lg:items-start">
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-[#d8a25e]/80">
              Join / Contact
            </p>
            <h2
              className={`${bungee.className} mt-3 text-3xl tracking-wide md:text-5xl`}
            >
              Let’s Build Something Live
            </h2>
            <p className="mt-6 max-w-xl text-lg leading-8 text-[#f5ead8]/75">
  Reach out if you are an artist looking to create a session, a musician
  interested in collaborating, or a creative partner who wants to build
  something with Houseband/Live.
</p>
          </div>

          <div className="retro-card-frame rounded-[2rem] border border-[#d8a25e]/20 bg-[#120d0b] p-8 shadow-2xl">
            <div className="mb-3 text-[10px] uppercase tracking-[0.35em] text-[#d8a25e]">
              Artist Intake Form
            </div>

            <p className="mb-5 text-sm text-[#f5ead8]/60">
  Tell us a little about yourself, your sound, and the kind of session you want to create.
</p>

            <form onSubmit={handleSubmit} className="grid gap-5">
              <input
                type="text"
                name="artistName"
                placeholder="Artist Name"
                value={formData.artistName}
                onChange={handleChange}
                required
                className="w-full rounded-2xl border border-[#d8a25e]/20 bg-[#241916] px-5 py-4 text-base text-[#f5ead8] placeholder:text-[#f5ead8]/40 outline-none transition focus:border-[#d8a25e]/50"
              />

              <input
                type="text"
                name="links"
                placeholder="Instagram / Spotify / Website"
                value={formData.links}
                onChange={handleChange}
                className="w-full rounded-2xl border border-[#d8a25e]/20 bg-[#241916] px-5 py-4 text-base text-[#f5ead8] placeholder:text-[#f5ead8]/40 outline-none transition focus:border-[#d8a25e]/50"
              />

              <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full rounded-2xl border border-[#d8a25e]/20 bg-[#241916] px-5 py-4 text-base text-[#f5ead8] placeholder:text-[#f5ead8]/40 outline-none transition focus:border-[#d8a25e]/50"
              />

              <textarea
                name="message"
                placeholder="Tell us about your music and what kind of support you're looking for"
                rows={6}
                value={formData.message}
                onChange={handleChange}
                required
                className="w-full rounded-2xl border border-[#d8a25e]/20 bg-[#241916] px-5 py-4 text-base text-[#f5ead8] placeholder:text-[#f5ead8]/40 outline-none transition focus:border-[#d8a25e]/50"
              />

              <button
                type="submit"
                disabled={status === "submitting"}
                className="mt-2 inline-flex w-fit items-center justify-center rounded-full bg-[#d8a25e] px-6 py-3 text-sm font-semibold uppercase tracking-[0.2em] text-[#120d0b] transition hover:scale-105 disabled:cursor-not-allowed disabled:opacity-60"
              >
                {status === "submitting" ? "Submitting..." : "Request a Session"}
              </button>
            </form>

            {status === "success" && (
              <p className="mt-4 rounded-2xl border border-green-500/30 bg-green-500/10 px-4 py-3 text-sm text-green-300">
                Thanks! Your inquiry was submitted successfully. We’ll be in touch soon.
              </p>
            )}

            {status === "error" && (
              <p className="mt-4 rounded-2xl border border-red-500/30 bg-red-500/10 px-4 py-3 text-sm text-red-300">
                Something went wrong while sending your form. Please try again.
              </p>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}