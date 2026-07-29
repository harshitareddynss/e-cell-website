"use client";

import CinematicHeading from "@/components/CinematicHeading";
import ScrollReveal from "@/components/ScrollReveal";

export default function CoreTeam() {
  return (
    <section className="relative overflow-hidden py-16 scroll-mt-[var(--navbar-height)] md:py-24">

      {/* BACKGROUND GLOW */}
      <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-orange-500/5 blur-[180px] rounded-full" />

      <div className="relative z-10 mx-auto max-w-[1440px] px-6 md:px-10">

        {/* SECTION HEADING */}
        <ScrollReveal className="mb-16 text-center md:mb-20">

          <p className="section-kicker mb-6">
            Meet The Crew
          </p>

          <CinematicHeading
            first="The Minds Behind"
            second="The Mission"
            className="text-4xl md:text-6xl font-bold text-white leading-tight"
          />

        </ScrollReveal>

        {/* FACULTY ADVISOR */}
        <ScrollReveal delay={0.08} className="rounded-[36px] border border-orange-500/10 bg-white/5 backdrop-blur-xl p-8 md:p-12 flex flex-col md:flex-row items-center gap-10 mb-16">

          {/* IMAGE */}
          <div className="w-40 h-40 rounded-full border border-orange-500/20 bg-gradient-to-br from-orange-500/20 to-black flex items-center justify-center text-orange-300 text-xl shadow-[0_0_40px_rgba(255,115,0,0.2)]">

            Faculty
            <br />
            Advisor

          </div>

          {/* TEXT */}
          <div className="flex-1">

            <h3 className="text-3xl font-bold text-white">
              Guiding Innovation & Leadership
            </h3>

            <p className="mt-6 text-white/60 leading-relaxed text-lg">
              Our faculty coordinators mentor and support the entrepreneurial
              ecosystem of E-Cell, helping students transform ideas into
              impactful initiatives and real-world opportunities.
            </p>

          </div>

        </ScrollReveal>

        {/* BOTTOM GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">

          {/* LEFT CARD */}
          <ScrollReveal delay={0.12} direction="right" className="rounded-[36px] border border-orange-500/10 bg-white/5 backdrop-blur-xl p-8 hover:border-orange-500/30 transition-all duration-500">

            {/* IMAGE */}
            <div className="h-72 rounded-[28px] bg-gradient-to-br from-orange-500/20 to-black border border-orange-500/10 flex items-center justify-center">
              {/* TODO: Replace this placeholder card surface with the real E-Summit image asset once available. */}
              <div className="h-20 w-20 rounded-full border border-orange-500/20 bg-orange-500/10" />
            </div>

            {/* TEXT */}
            <div className="mt-8">

              <h3 className="text-3xl font-bold text-white">
                Creating Impactful Experiences
              </h3>

              <p className="mt-5 text-white/60 leading-relaxed">
                Through E-Summits, workshops, startup events, and leadership
                initiatives, E-Cell continuously builds a strong entrepreneurial
                culture across campus.
              </p>

            </div>

          </ScrollReveal>

          {/* RIGHT CARD */}
          <ScrollReveal delay={0.2} direction="left" className="rounded-[36px] border border-orange-500/10 bg-white/5 backdrop-blur-xl p-8 hover:border-orange-500/30 transition-all duration-500">

            {/* IMAGE */}
            <div className="h-72 rounded-[28px] bg-gradient-to-br from-orange-500/20 to-black border border-orange-500/10 flex items-center justify-center text-orange-200 text-2xl">

              Core Team
              <br />
              Image

            </div>

            {/* TEXT */}
            <div className="mt-8">

              <h3 className="text-3xl font-bold text-white">
                Driven By Passionate Innovators
              </h3>

              <p className="mt-5 text-white/60 leading-relaxed">
                The core team of E-Cell consists of passionate student leaders
                who manage events, innovation programs, startup activities,
                and community initiatives throughout the year.
              </p>

            </div>

          </ScrollReveal>

        </div>

        {/* BUTTON */}
        <ScrollReveal delay={0.1} className="mt-16 flex justify-center">

          <button className="px-10 py-4 rounded-full bg-orange-500 hover:bg-orange-400 transition-all duration-300 text-black font-semibold shadow-[0_0_35px_rgba(255,115,0,0.4)]">

            Meet The Core Team

          </button>

        </ScrollReveal>

      </div>
    </section>
  );
}
