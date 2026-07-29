"use client";

import CinematicHeading from "@/components/CinematicHeading";
import ScrollReveal from "@/components/ScrollReveal";

export default function Insights() {
  return (
    <section id="insights" className="relative overflow-hidden py-16 scroll-mt-[var(--navbar-height)] md:py-24">

      {/* SUBTLE GLOW */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-orange-500/5 blur-[160px] rounded-full" />

      <div className="relative z-10 mx-auto max-w-[1440px] px-6 md:px-10">

        {/* TOP HEADING */}
        <ScrollReveal className="mb-16 text-center md:mb-20">

          <p className="section-kicker mb-6">
            E-Cell Insights
          </p>

          <CinematicHeading
            first="Building Innovators"
            second="Beyond Classrooms"
            className="text-4xl md:text-6xl font-bold text-white leading-tight"
          />

          <p className="mx-auto mt-8 max-w-3xl text-lg leading-relaxed text-white/60">
            E-Cell VIEW empowers students with entrepreneurial exposure,
            startup culture, innovation opportunities, and real-world
            leadership experiences.
          </p>

        </ScrollReveal>

        {/* STATS */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

          {/* CARD 1 */}
          <ScrollReveal delay={0.05} className="rounded-[32px] border border-orange-500/10 bg-white/5 backdrop-blur-xl p-10 hover:-translate-y-2 hover:border-orange-500/30 transition-all duration-500">

            <h3 className="text-6xl font-bold text-orange-400">
              50+
            </h3>

            <p className="mt-4 text-white text-xl font-medium">
              Startup Events
            </p>

            <p className="mt-3 text-white/60 leading-relaxed">
              Workshops, hackathons, summits, and innovation challenges
              conducted across multiple domains.
            </p>

          </ScrollReveal>

          {/* CARD 2 */}
          <ScrollReveal delay={0.16} className="rounded-[32px] border border-orange-500/10 bg-white/5 backdrop-blur-xl p-10 hover:-translate-y-2 hover:border-orange-500/30 transition-all duration-500">

            <h3 className="text-6xl font-bold text-orange-400">
              5K+
            </h3>

            <p className="mt-4 text-white text-xl font-medium">
              Student Reach
            </p>

            <p className="mt-3 text-white/60 leading-relaxed">
              Inspiring students through startup stories, leadership,
              mentoring sessions, and entrepreneurial initiatives.
            </p>

          </ScrollReveal>

          {/* CARD 3 */}
          <ScrollReveal delay={0.27} className="rounded-[32px] border border-orange-500/10 bg-white/5 backdrop-blur-xl p-10 hover:-translate-y-2 hover:border-orange-500/30 transition-all duration-500">

            <h3 className="text-6xl font-bold text-orange-400">
              100+
            </h3>

            <p className="mt-4 text-white text-xl font-medium">
              Innovative Ideas
            </p>

            <p className="mt-3 text-white/60 leading-relaxed">
              Student-driven startup concepts, problem-solving ideas,
              and entrepreneurial experiments nurtured through E-Cell.
            </p>

          </ScrollReveal>

        </div>

        {/* BUTTON */}
        <ScrollReveal delay={0.12} className="mt-16 flex justify-center">

          <button className="px-10 py-4 rounded-full bg-orange-500 hover:bg-orange-400 transition-all duration-300 text-black font-semibold shadow-[0_0_35px_rgba(255,115,0,0.4)]">
            Explore Our Mission
          </button>

        </ScrollReveal>

      </div>
    </section>
  );
}
