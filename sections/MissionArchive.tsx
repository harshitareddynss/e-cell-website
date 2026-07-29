"use client";

import CinematicHeading from "@/components/CinematicHeading";
import ScrollReveal from "@/components/ScrollReveal";
import Link from "next/link";

export default function MissionArchive() {
  return (
    <section className="relative overflow-hidden py-16 scroll-mt-[var(--navbar-height)] md:py-24">

      {/* BACKGROUND GLOW */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-orange-500/5 blur-[200px] rounded-full" />

      <div className="relative z-10 mx-auto max-w-[1440px] px-6 md:px-10">

        {/* HEADING */}
        <ScrollReveal className="mb-16 text-center md:mb-20">

          <p className="section-kicker mb-6">
            Stellar Archives
          </p>

          <CinematicHeading
            first="Missions That"
            second="Left An Impact"
            className="text-4xl md:text-6xl font-bold text-white leading-tight"
          />

          <p className="mt-8 text-white/60 max-w-3xl mx-auto text-lg leading-relaxed">

            Explore the events, workshops, summits, startup initiatives,
            and unforgettable experiences that shaped the E-Cell ecosystem.

          </p>

        </ScrollReveal>

        {/* CARDS */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">

          {/* CARD 1 */}
          <ScrollReveal delay={0.05} className="group rounded-[32px] overflow-hidden border border-orange-500/10 bg-white/5 backdrop-blur-xl hover:border-orange-500/30 transition-all duration-500">

            {/* IMAGE */}
            <div className="h-[340px] bg-gradient-to-br from-orange-500/20 to-black flex items-center justify-center">
              {/* TODO: Replace this placeholder archive tile with the real mission image asset once available. */}
              <div className="h-16 w-16 rounded-full border border-orange-500/20 bg-orange-500/10" />
            </div>

            {/* TEXT */}
            <div className="p-6">

              <h3 className="text-2xl font-bold text-white">
                E-Summit 2025
              </h3>

              <p className="mt-4 text-white/60 leading-relaxed">
                Startup sessions, innovation showcases,
                entrepreneurial networking, and competitions.
              </p>

            </div>

          </ScrollReveal>

          {/* CARD 2 */}
          <ScrollReveal delay={0.13} className="group rounded-[32px] overflow-hidden border border-orange-500/10 bg-white/5 backdrop-blur-xl hover:border-orange-500/30 transition-all duration-500">

            <div className="h-[340px] bg-gradient-to-br from-orange-500/20 to-black flex items-center justify-center">
              {/* TODO: Replace this placeholder archive tile with the real mission image asset once available. */}
              <div className="h-16 w-16 rounded-full border border-orange-500/20 bg-orange-500/10" />
            </div>

            <div className="p-6">

              <h3 className="text-2xl font-bold text-white">
                Innovation HackFest
              </h3>

              <p className="mt-4 text-white/60 leading-relaxed">
                Students collaborated to solve real-world
                problems through technology and creativity.
              </p>

            </div>

          </ScrollReveal>

          {/* CARD 3 */}
          <ScrollReveal delay={0.21} className="group rounded-[32px] overflow-hidden border border-orange-500/10 bg-white/5 backdrop-blur-xl hover:border-orange-500/30 transition-all duration-500">

            <div className="h-[340px] bg-gradient-to-br from-orange-500/20 to-black flex items-center justify-center">
              {/* TODO: Replace this placeholder archive tile with the real mission image asset once available. */}
              <div className="h-16 w-16 rounded-full border border-orange-500/20 bg-orange-500/10" />
            </div>

            <div className="p-6">

              <h3 className="text-2xl font-bold text-white">
                Startup Workshop
              </h3>

              <p className="mt-4 text-white/60 leading-relaxed">
                Interactive entrepreneurial learning sessions
                conducted by founders and industry mentors.
              </p>

            </div>

          </ScrollReveal>

          {/* CARD 4 */}
          <ScrollReveal delay={0.29} className="group rounded-[32px] overflow-hidden border border-orange-500/10 bg-white/5 backdrop-blur-xl hover:border-orange-500/30 transition-all duration-500">

            <div className="h-[340px] bg-gradient-to-br from-orange-500/20 to-black flex items-center justify-center">
              {/* TODO: Replace this placeholder archive tile with the real mission image asset once available. */}
              <div className="h-16 w-16 rounded-full border border-orange-500/20 bg-orange-500/10" />
            </div>

            <div className="p-6">

              <h3 className="text-2xl font-bold text-white">
                Founder Connect
              </h3>

              <p className="mt-4 text-white/60 leading-relaxed">
                Inspiring interactions, networking opportunities,
                and startup ecosystem collaborations.
              </p>

            </div>

          </ScrollReveal>

        </div>

        {/* BUTTON */}
        <ScrollReveal delay={0.12} className="mt-16 flex justify-center">

          <Link
            href="/archives"
            className="px-10 py-4 rounded-full bg-orange-500 hover:bg-orange-400 transition-all duration-300 text-black font-semibold shadow-[0_0_35px_rgba(255,115,0,0.4)]"
          >

            Explore Stellar Archives

          </Link>

        </ScrollReveal>

      </div>
    </section>
  );
}
