"use client";

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
    musicLinks: "",
    socials: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState<
    "idle" | "submitting" | "success" | "error"
  >("idle");

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
          musicLinks: "",
          socials: "",
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
      <main className="px-4 py-8 sm:px-6 sm:py-10 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <div className="mb-8 sm:mb-10">
            <p className="text-sm uppercase tracking-[0.3em] text-[#f2d3a2]/70">
              Work With Us
            </p>

            <h1
              className={`${bungee.className} mt-3 text-3xl tracking-wide sm:text-4xl md:text-6xl`}
            >
              Be in the next session.
            </h1>

            <div className="mt-5 max-w-3xl">
              <p className="text-base leading-7 text-white/75 sm:text-lg sm:leading-8">
                House/Band is a live session series built around artist
                collaboration. We pair artists with the right musicians,
                rehearse live arrangements of original music, and film sessions
                that are edited and released by Houseband/Live.
              </p>

              <a
                href="#apply-form"
                className="mt-6 inline-flex items-center justify-center rounded-full bg-[#f2d3a2] px-6 py-3 text-sm font-semibold uppercase tracking-[0.2em] text-black transition hover:scale-105"
              >
                Apply Now
              </a>
            </div>
          </div>

          <section className="mb-8 grid gap-4 lg:grid-cols-[1fr_1fr] lg:gap-6 sm:mb-10">
            <div className="rounded-[1.5rem] border border-[#d8a25e]/20 bg-white/[0.04] p-6 sm:p-8">
              <p className="text-[10px] uppercase tracking-[0.25em] text-[#f2d3a2]/70">
                What this is
              </p>

              <h2
                className={`${cormorant.className} mt-3 text-3xl font-semibold sm:text-4xl`}
              >
                More than a filmed performance
              </h2>

              <p className="mt-4 leading-7 text-white/75">
                We do not just film a song as-is. We build the right band around
                it, rehearse it with the artist, and create a session that feels
                collaborative, musical, and worth releasing.
              </p>
            </div>

            <div className="rounded-[1.5rem] border border-white/10 bg-white/[0.04] p-6 sm:p-8">
              <p className="text-[10px] uppercase tracking-[0.25em] text-[#f2d3a2]/70">
                Good fit
              </p>

              <h2
                className={`${cormorant.className} mt-3 text-3xl font-semibold sm:text-4xl`}
              >
                Who this is for
              </h2>

              <ul className="mt-4 space-y-3 leading-7 text-white/75">
                <li>Artists with original music they want to perform live</li>
                <li>Artists open to collaboration and arrangement development</li>
                <li>Artists who want a filmed session with strong musicianship</li>
                <li>Artists interested in a polished edited release</li>
              </ul>
            </div>
          </section>

          <p className="mb-6 max-w-2xl text-sm leading-6 text-white/60 sm:text-base sm:leading-7">
            If it feels like a fit, send us your music and tell us what kind of
            session you want to build.
          </p>

          <section
  id="apply-form"
  className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]"
>
  <div className="col-span-full flex items-center gap-3 mb-4">
    <div className="h-[1px] flex-1 bg-white/10" />
    <p className="text-xs uppercase tracking-[0.25em] text-[#f2d3a2]/70">
      Drop your music — we’ll build the session around it
    </p>
    <div className="h-[1px] flex-1 bg-white/10" />
  </div>
            <p className="col-span-full mb-4 text-sm text-[#f2d3a2]/70">

    ↓ Drop your music below — we’ll build the session around it

  </p>
            <div className="rounded-[1.5rem] border border-white/10 bg-white/[0.04] p-6 sm:p-8">
              <p className="text-[10px] uppercase tracking-[0.25em] text-[#f2d3a2]/70">
                Apply
              </p>

              <h2
                className={`${cormorant.className} mt-3 text-3xl font-semibold sm:text-4xl`}
              >
                Send us your music
              </h2>

              <p className="mt-4 leading-7 text-white/75">
                Tell us about your sound, share your music, and give us a sense
                of what you would want the session to feel like.
              </p>

              <p className="mt-4 text-sm leading-6 text-white/55">
                We are especially looking for artists with original music and a
                real interest in collaborating with a live band.
              </p>
            </div>

            <div className="rounded-[1.5rem] border border-[#d8a25e]/20 bg-white/[0.04] p-6 sm:rounded-[1.75rem] sm:p-8">
              <div className="mb-3 text-[10px] uppercase tracking-[0.35em] text-[#f2d3a2]/70">
                Artist Intake Form
              </div>

              <p className="mb-5 text-sm text-white/60">
                Send your music, your socials, and a little bit about the kind
                of session you want to build with House/Band.
              </p>

              <form onSubmit={handleSubmit} className="grid gap-5">
                <input
  type="text"
  name="artistName"
  autoFocus
                  placeholder="Artist Name"
                  value={formData.artistName}
                  onChange={handleChange}
                  required
                  className="w-full rounded-2xl border border-white/10 bg-white/5 px-5 py-4 text-base text-white placeholder:text-white/35 outline-none transition focus:border-[#d8a25e]/35"
                />

                <div>
                  <input
                    type="text"
                    name="musicLinks"
                    placeholder="Spotify / SoundCloud / YouTube / Drive link"
                    value={formData.musicLinks}
                    onChange={handleChange}
                    required
                    className="w-full rounded-2xl border border-white/10 bg-white/5 px-5 py-4 text-base text-white placeholder:text-white/35 outline-none transition focus:border-[#d8a25e]/35"
                  />
                  <p className="mt-2 text-xs leading-5 text-white/45">
                    Send 1–3 songs or demos that best represent your sound.
                  </p>
                </div>

                <input
                  type="text"
                  name="socials"
                  placeholder="Instagram / Website (optional)"
                  value={formData.socials}
                  onChange={handleChange}
                  className="w-full rounded-2xl border border-white/10 bg-white/5 px-5 py-4 text-base text-white placeholder:text-white/35 outline-none transition focus:border-[#d8a25e]/35"
                />

                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full rounded-2xl border border-white/10 bg-white/5 px-5 py-4 text-base text-white placeholder:text-white/35 outline-none transition focus:border-[#d8a25e]/35"
                />

                <textarea
                  name="message"
                  placeholder="Tell us about your sound, what songs you’d want to do, and how you imagine the session feeling"
                  rows={6}
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="w-full rounded-2xl border border-white/10 bg-white/5 px-5 py-4 text-base text-white placeholder:text-white/35 outline-none transition focus:border-[#d8a25e]/35"
                />

                <button
                  type="submit"
                  disabled={status === "submitting"}
                  className="mt-2 inline-flex w-fit items-center justify-center rounded-full bg-[#f2d3a2] px-6 py-3 text-sm font-semibold uppercase tracking-[0.2em] text-black transition hover:scale-105 disabled:cursor-not-allowed disabled:opacity-60"
                >
                  {status === "submitting" ? "Submitting..." : "Apply"}
                </button>
              </form>

              {status === "success" && (
                <p className="mt-4 rounded-2xl border border-green-500/30 bg-green-500/10 px-4 py-3 text-sm text-green-300">
                  Submission received. If it feels like a fit, we’ll be in touch.
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