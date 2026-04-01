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
      title: "Ian Chri$t",
      artist: "Featuring Ian Chri$t and the Houseband/Live Collective",
      image: "/IanChrist.png",
    },
    {
      title: "Imani Waters",
      artist: "Featuring Imani Waters and the Houseband/Live Collective",
      image: "/imaniwaters.png",
    },
    {
      title: "Nat Harriet",
      artist: "Featuring Nat Harriet and the Houseband/Live Collective",
      image: "/natharriet.png",
    },
  ];

  const packages = [
    {
      name: "Live Session",
      price: "$---",
      description:
        "A focused live session built for artists who want strong performance-driven visuals and a polished final piece.",
      features: [
        "Live performance capture",
        "Houseband/Live collaboration",
        "Edited session deliverable",
      ],
    },
    {
      name: "Featured Session",
      price: "$---",
      description:
        "A deeper creative package for artists who want a more involved session experience, stronger production support, and a more developed rollout.",
      features: [
        "Everything in Live Session",
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
    <div className={`${inter.className} min-h-screen bg-black text-white`}>
      <header className="fixed top-0 z-50 w-full border-b border-white/10 bg-black/80 backdrop-blur-md">
  <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-10">
    <img
      src="/housebandlogo.png"
      alt="Houseband Live"
      className="h-12 w-auto"
    />

    <nav className="flex gap-6 text-sm uppercase tracking-[0.2em] text-white/70">
      <Link href="/" className="transition hover:text-white">
        Home
      </Link>
      <Link href="/episodes" className="transition hover:text-white">
        Episodes
      </Link>
      <Link href="/roster" className="transition hover:text-white">
        Roster
      </Link>
      <Link href="/about" className="transition hover:text-white">
        About
      </Link>
      <Link href="/work-with-us" className="transition hover:text-white">
        Work With Us
      </Link>
    </nav>

    <Link
      href="/work-with-us"
      className="rounded-full border border-white/20 bg-white px-5 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-black transition hover:scale-105"
    >
      Apply
    </Link>
  </div>
</header>
      <section className="retro-grain retro-frame relative flex min-h-screen items-end overflow-hidden px-6 pb-16 pt-28 lg:px-10 lg:pb-24">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/grouppic.png')" }}
        />
        <div className="absolute inset-0 bg-black/65" />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />

        <div className="relative z-10 mx-auto flex w-full max-w-7xl flex-col gap-10 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-3xl">
            <p className="mb-4 text-sm uppercase tracking-[0.45em] text-white/70">
              Minneapolis Live Session Collective
            </p>

            <h1
              className={`${bungee.className} text-5xl leading-[0.92] tracking-tight md:text-7xl lg:text-[7rem]`}
            >
              HOUSEBAND/
              <span className="block text-white/85">LIVE</span>
            </h1>

            <div className="mb-4 inline-block rounded-full border border-white/20 bg-white/5 px-4 py-2 text-[10px] uppercase tracking-[0.3em] text-white/75">
              Now Booking — Minneapolis, MN
            </div>

            <p className="mt-6 max-w-2xl text-base leading-7 text-white/85 md:text-lg">
              Houseband/Live creates filmed live sessions for artists ready to
              turn strong performances into standout visual content. We bring
              together musicians, creative direction, and live energy to build
              sessions that feel intentional, collaborative, and built to travel.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Link
  href="/work-with-us"
  className="rounded-full bg-white px-6 py-3 text-sm font-semibold uppercase tracking-[0.2em] text-black transition hover:scale-105"
>
  Book a Session
</Link>
              <Link
                href="/episodes"
                className="rounded-full border border-white/25 px-6 py-3 text-sm font-semibold uppercase tracking-[0.2em] text-white transition hover:bg-white/10"
              >
                Watch Episodes
              </Link>
            </div>
          </div>

          <div className="retro-card-frame max-w-sm rounded-3xl border border-white/20 bg-black/50 p-6 shadow-2xl backdrop-blur-md">
            <p className="text-xs uppercase tracking-[0.3em] text-white/60">
              What we do
            </p>
            <p
              className={`${cormorant.className} mt-4 text-3xl font-semibold leading-9 text-white`}
            >
              We produce live session experiences that give artists strong
              visuals, real collaboration, and a performance they can proudly
              put into the world.
            </p>
          </div>
        </div>
      </section>

      <section id="sessions" className="mx-auto max-w-7xl px-6 py-20 lg:px-10">
        <div className="mb-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-white/55">
              Recent Releases
            </p>
            <h2
              className={`${bungee.className} mt-3 text-3xl tracking-wide md:text-5xl`}
            >
              Featured Sessions
            </h2>
          </div>
          <p className="max-w-xl text-white/70">
            A look at the performance quality, visual tone, and creative
            collaboration artists can expect when they create with Houseband/Live.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {featuredSessions.map((session, index) => (
            <div
              key={session.title}
              className="retro-card-frame group overflow-hidden rounded-3xl border border-white/10 bg-white/[0.04] shadow-xl"
            >
              <div className="overflow-hidden">
                <img
                  src={session.image}
                  alt={session.title}
                  className="h-80 w-full object-cover transition duration-500 group-hover:scale-105"
                />
              </div>

              <div className="p-6">
                <p className="text-xs uppercase tracking-[0.25em] text-white/55">
                  Session No. {String(index + 1).padStart(2, "0")}
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

        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <a
            href="#contact"
            className="inline-block rounded-full bg-white px-6 py-3 text-sm font-semibold uppercase tracking-[0.2em] text-black transition hover:scale-105"
          >
            Book a Session
          </a>
          <Link
            href="/episodes"
            className="inline-block rounded-full border border-white/25 px-6 py-3 text-sm font-semibold uppercase tracking-[0.2em] text-white transition hover:bg-white/10"
          >
            View All Episodes
          </Link>
        </div>
      </section>

      <section
        id="artists"
        className="border-y border-white/10 bg-white/[0.03] px-6 py-20 lg:px-10"
      >
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-2">
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-white/55">
              Built for Artists
            </p>
            <h2
              className={`${bungee.className} mt-3 text-3xl tracking-wide md:text-5xl`}
            >
              Made for Collaboration
            </h2>
            <p className="mt-6 max-w-xl text-lg leading-8 text-white/75">
              Whether you are a solo artist, vocalist, songwriter,
              instrumentalist, or creative collaborator, Houseband/Live is built
              for artists who want their music presented with more intention,
              stronger visuals, and a sharper sense of identity.
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
                className="retro-card-frame rounded-3xl border border-white/10 bg-white/[0.04] p-6"
              >
                <h3 className={`${cormorant.className} text-2xl font-semibold`}>
                  {item}
                </h3>
                <p className="mt-3 text-white/70">
                  A flexible collective model designed to support strong
                  performances, intentional collaboration, and new creative chemistry.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="mx-auto max-w-7xl px-6 py-20 lg:px-10">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-white/55">
              About
            </p>
            <h2
              className={`${bungee.className} mt-3 text-3xl tracking-wide md:text-5xl`}
            >
              Live Sessions for Artists Ready to Stand Out
            </h2>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-white/75">
              Houseband/Live exists to help artists turn live performance into a
              stronger creative asset. Our sessions combine musicianship, visual
              storytelling, and collaboration so each performance feels polished,
              memorable, and ready to reach a wider audience.
            </p>
          </div>

          <div className="retro-card-frame rounded-3xl border border-white/10 bg-white/[0.04] p-8 shadow-xl">
            <p className="text-sm uppercase tracking-[0.3em] text-white/55">
              Why it works
            </p>
            <ul className="mt-6 space-y-4 text-white/80">
              <li>High-quality live content built around real performance</li>
              <li>Creative direction that keeps the artist at the center</li>
              <li>Flexible collaboration built around the artist’s goals</li>
            </ul>
          </div>
        </div>
      </section>

      <section id="work" className="mx-auto max-w-7xl px-6 py-20 lg:px-10">
        <div className="mb-10 max-w-3xl">
          <p className="text-sm uppercase tracking-[0.3em] text-white/55">
            Booking
          </p>
          <h2
            className={`${bungee.className} mt-3 text-3xl tracking-wide md:text-5xl`}
          >
            Session Options
          </h2>
          <p className="mt-5 text-lg leading-8 text-white/75">
            Our session options are built for artists who want more than just a
            recording. Whether you need a straightforward live session or a more
            hands-on creative partnership, we offer support that matches your
            sound, vision, and stage of growth.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          {packages.map((pkg) => (
            <div
              key={pkg.name}
              className="retro-card-frame rounded-[2rem] border border-white/10 bg-white/[0.04] p-8 shadow-xl"
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
                  <p className={`${bungee.className} mt-2 text-3xl text-white`}>
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
                Apply to Perform
              </a>
            </div>
          ))}
        </div>
      </section>

      <section
        id="contact"
        className="border-t border-white/10 bg-white/[0.03] px-6 py-20 lg:px-10"
      >
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[1fr_1fr] lg:items-start">
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-white/55">
              Contact
            </p>
            <h2
              className={`${bungee.className} mt-3 text-3xl tracking-wide md:text-5xl`}
            >
              Apply to Perform
            </h2>
            <p className="mt-6 max-w-xl text-lg leading-8 text-white/75">
              Reach out if you are an artist looking to create a session, a
              musician interested in collaborating, or a creative partner who
              wants to build something with Houseband/Live.
            </p>
          </div>

          <div className="retro-card-frame rounded-[2rem] border border-white/10 bg-white/[0.04] p-8 shadow-2xl">
            <div className="mb-3 text-[10px] uppercase tracking-[0.35em] text-white/60">
              Artist Intake Form
            </div>

            <p className="mb-5 text-sm text-white/60">
              Tell us about your sound, your vision, and the kind of session you
              want to create.
            </p>

            <form onSubmit={handleSubmit} className="grid gap-5">
              <input
                type="text"
                name="artistName"
                placeholder="Artist Name"
                value={formData.artistName}
                onChange={handleChange}
                required
                className="w-full rounded-2xl border border-white/10 bg-white/5 px-5 py-4 text-base text-white placeholder:text-white/35 outline-none transition focus:border-white/30"
              />

              <input
                type="text"
                name="links"
                placeholder="Instagram / Spotify / Website"
                value={formData.links}
                onChange={handleChange}
                className="w-full rounded-2xl border border-white/10 bg-white/5 px-5 py-4 text-base text-white placeholder:text-white/35 outline-none transition focus:border-white/30"
              />

              <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full rounded-2xl border border-white/10 bg-white/5 px-5 py-4 text-base text-white placeholder:text-white/35 outline-none transition focus:border-white/30"
              />

              <textarea
                name="message"
                placeholder="Tell us about your music, your goals, and the kind of session you're looking for"
                rows={6}
                value={formData.message}
                onChange={handleChange}
                required
                className="w-full rounded-2xl border border-white/10 bg-white/5 px-5 py-4 text-base text-white placeholder:text-white/35 outline-none transition focus:border-white/30"
              />

              <button
                type="submit"
                disabled={status === "submitting"}
                className="mt-2 inline-flex w-fit items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-semibold uppercase tracking-[0.2em] text-black transition hover:scale-105 disabled:cursor-not-allowed disabled:opacity-60"
              >
                {status === "submitting" ? "Submitting..." : "Submit Application"}
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