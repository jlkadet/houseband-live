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

export default function WorkWithUsPage() {
  const [formData, setFormData] = useState({
    artistName: "",
    links: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState<
    "idle" | "submitting" | "success" | "error"
  >("idle");

  const packages = [
    {
      name: "Live Session",
      price: "$250",
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
      price: "$500",
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
        </div>
      </header>

      <main className="px-6 py-16 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <div className="mb-16 max-w-4xl">
            <p className="text-sm uppercase tracking-[0.3em] text-white/55">
              Work With Us
            </p>
            <h1
              className={`${bungee.className} mt-3 text-4xl tracking-wide md:text-6xl`}
            >
              Book a Session
            </h1>
            <p className="mt-6 text-lg leading-8 text-white/75">
              Houseband/Live works with artists who want more than a simple
              recording. Our sessions are built to create strong live content,
              sharper visual identity, and a performance that feels worth
              putting into the world.
            </p>
          </div>

          <section className="grid gap-6 lg:grid-cols-2">
            {packages.map((pkg) => (
              <div
                key={pkg.name}
                className="retro-card-frame rounded-[2rem] border border-white/10 bg-white/[0.04] p-8 shadow-xl"
              >
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h2 className={`${cormorant.className} text-3xl font-semibold`}>
                      {pkg.name}
                    </h2>
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
              </div>
            ))}
          </section>

          <section className="mt-10 grid gap-8 lg:grid-cols-[1fr_1fr]">
            <div className="retro-card-frame rounded-[2rem] border border-white/10 bg-white/[0.04] p-8 shadow-xl">
              <p className="text-sm uppercase tracking-[0.3em] text-white/55">
                What Artists Get
              </p>
              <ul className="mt-6 space-y-4 text-white/80">
                <li>A session built around live performance and visual impact</li>
                <li>Collaboration with the Houseband/Live roster</li>
                <li>Creative support shaped around the artist’s sound and goals</li>
                <li>Final content that feels polished, intentional, and release-ready</li>
              </ul>
            </div>

            <div className="retro-card-frame rounded-[2rem] border border-white/10 bg-white/[0.04] p-8 shadow-xl">
              <p className="text-sm uppercase tracking-[0.3em] text-white/55">
                How It Works
              </p>
              <ol className="mt-6 space-y-4 text-white/80">
                <li>1. Submit your information and session interest</li>
                <li>2. We review your sound, links, and creative direction</li>
                <li>3. We follow up with next steps, availability, and fit</li>
                <li>4. We build the session together</li>
              </ol>
            </div>
          </section>

          <section className="mt-10 grid gap-12 lg:grid-cols-[1fr_1fr] lg:items-start">
            <div>
              <p className="text-sm uppercase tracking-[0.3em] text-white/55">
                Apply
              </p>
              <h2
                className={`${bungee.className} mt-3 text-3xl tracking-wide md:text-5xl`}
              >
                Apply to Perform
              </h2>
              <p className="mt-6 max-w-xl text-lg leading-8 text-white/75">
                Tell us about your sound, your vision, and the kind of session
                you want to create. We’re looking for artists who care about the
                performance and the presentation around it.
              </p>
            </div>

            <div className="retro-card-frame rounded-[2rem] border border-white/10 bg-white/[0.04] p-8 shadow-2xl">
              <div className="mb-3 text-[10px] uppercase tracking-[0.35em] text-white/60">
                Artist Intake Form
              </div>

              <p className="mb-5 text-sm text-white/60">
                Tell us about your sound, your goals, and the kind of session
                you want to create.
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
                  className="w-full rounded-2xl border borderwhite/10 bg-white/5 px-5 py-4 text-base text-white placeholder:text-white/35 outline-none transition focus:border-white/30"
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
          </section>
        </div>
      </main>
    </div>
  );
}