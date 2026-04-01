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

export default function RosterPage() {
  const roster = [
    {
      name: "Poe",
      role: "Organizer",
      bio: "Poe helps shape the direction of Houseband/Live and plays a central role in organizing sessions, collaboration, and the overall creative vision.",
    },
    {
      name: "Dio",
      role: "Musician / Organizer",
      bio: "Dio is both a musician and an organizer within Houseband/Live, helping bring together the musical and logistical sides of each session.",
    },
    {
      name: "Justin",
      role: "Trumpet / Keys",
      bio: "Justin plays trumpet and keys, contributing live musicianship, arrangement support, and collaborative energy across Houseband/Live sessions.",
    },
    {
      name: "Reign",
      role: "Bass",
      bio: "Reign holds down the low end on bass and helps give each session a strong musical foundation.",
    },
    {
      name: "Joy",
      role: "Keys",
      bio: "Joy plays keys and adds harmonic texture and depth to the Houseband/Live sound.",
    },
    {
      name: "Aaron",
      role: "Drums",
      bio: "Aaron plays drums and drives the rhythm section with energy, feel, and consistency across live performances.",
    },
    {
      name: "Logyn",
      role: "Backup Vocals",
      bio: "Logyn provides backup vocals and helps add dynamic vocal support to featured sessions.",
    },
  ];

  return (
    <div className={`${inter.className} min-h-screen bg-black text-white`}>
      
      <main className="px-4 py-10 sm:px-6 sm:py-12 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12">
            <p className="text-sm uppercase tracking-[0.3em] text-white/55">
              Houseband/Live
            </p>
            <h1
  className={`${bungee.className} mt-3 text-3xl tracking-wide sm:text-4xl md:text-6xl`}
>
              Houseband Roster
            </h1>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-white/75">
              Meet the musicians and organizers behind Houseband/Live. This is
              the core roster helping shape the sound, collaboration, and live
              energy behind each session.
            </p>
          </div>

          <div className="grid gap-4 sm:gap-6 md:grid-cols-2 xl:grid-cols-3">
            {roster.map((member) => (
              <div
                key={member.name}
                className="retro-card-frame rounded-[2rem] border border-white/10 bg-white/[0.04] p-5 shadow-xl sm:p-6"
              >
                <div className="mb-5 overflow-hidden rounded-[1.5rem] border border-white/10 bg-white/5">
                  <div className="flex aspect-[4/5] items-center justify-center text-sm uppercase tracking-[0.25em] text-white/35">
                    Photo Placeholder
                  </div>
                </div>

                <p className="text-xs uppercase tracking-[0.25em] text-white/55">
                  {member.role}
                </p>
                <h2
                  className={`${cormorant.className} mt-2 text-3xl font-semibold`}
                >
                  {member.name}
                </h2>
                <p className="mt-4 text-white/75">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}