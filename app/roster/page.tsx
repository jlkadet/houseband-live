"use client";

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

type Member = {
  name: string;
  role: string;
};

export default function RosterPage() {
  const members: Member[] = [
    {
      name: "Poe",
      role: "Organizer",
    },
    {
      name: "Dio",
      role: "Musician / Organizer",
    },
    {
      name: "Justin",
      role: "Trumpet / Keys",
    },
    {
      name: "Reign",
      role: "Bass",
    },
    {
      name: "Joy",
      role: "Keys",
    },
    {
      name: "Aaron",
      role: "Drums",
    },
    {
      name: "Logyn",
      role: "Backup Vocals",
    },
  ];

  return (
    <div className={`${inter.className} min-h-screen bg-black text-white`}>
      <main className="px-4 py-10 sm:px-6 sm:py-12 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 sm:mb-12">
            <p className="text-sm uppercase tracking-[0.3em] text-[#f2d3a2]/70">
              Houseband
            </p>

            <h1
              className={`${bungee.className} mt-3 text-3xl tracking-wide sm:text-4xl md:text-6xl`}
            >
              Roster
            </h1>

            <p className="mt-5 max-w-2xl text-base leading-7 text-white/75 sm:text-lg sm:leading-8">
              The musicians behind Houseband/Live.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {members.map((member, index) => (
              <div
                key={member.name}
                className={`group relative overflow-hidden rounded-[1.15rem] border bg-white/[0.04] p-4 transition duration-300 hover:-rotate-[1deg] hover:scale-[1.02] sm:rounded-[1.5rem] sm:p-6 ${
                  index % 2 === 0
                    ? "border-[#d8a25e]/20"
                    : "border-white/10"
                }`}
              >
                <div className="absolute right-3 top-3 rounded-full border border-white/15 bg-black/60 px-2 py-1 text-[10px] uppercase tracking-[0.18em] text-white/70 sm:right-4 sm:top-4">
                  {String(index + 1).padStart(2, "0")}
                </div>

                <div className="absolute inset-0 opacity-0 transition group-hover:opacity-100 bg-white/5" />

                <div className="relative">
                  <p className="text-[10px] uppercase tracking-[0.25em] text-[#f2d3a2]/70">
                    Member
                  </p>

                  <h2
                    className={`${cormorant.className} mt-3 text-3xl font-semibold leading-none sm:text-4xl`}
                  >
                    {member.name}
                  </h2>

                  <p className="mt-4 text-sm leading-6 text-white/75 sm:text-base">
                    {member.role}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}