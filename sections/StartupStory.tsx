"use client";

import CinematicHeading from "@/components/CinematicHeading";
import ScrollReveal from "@/components/ScrollReveal";

export default function StartupStory() {
  return (
    <section className="relative py-36 overflow-hidden">

      {/* BACKGROUND GLOW */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-orange-500/5 blur-[180px] rounded-full" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-10">

        {/* HEADING */}
        <ScrollReveal className="text-center mb-24">

          <p className="section-kicker mb-6">
            Startup Story Of The Week
          </p>

          <CinematicHeading
            first="Stories That"
            second="Inspire Innovation"
            className="text-4xl md:text-6xl font-bold text-white leading-tight"
          />

          <p className="mt-8 text-white/60 max-w-3xl mx-auto text-lg leading-relaxed">

            Every week we spotlight inspiring entrepreneurial journeys,
            startup breakthroughs, and innovative founders to motivate
            the next generation of creators.

          </p>

        </ScrollReveal>

        {/* MAIN STORY CARD */}
        <ScrollReveal delay={0.1} className="rounded-[40px] border border-orange-500/10 bg-white/5 backdrop-blur-xl overflow-hidden hover:border-orange-500/30 transition-all duration-500">

          <div className="grid grid-cols-1 lg:grid-cols-2">

            {/* LEFT IMAGE */}
            <div className="min-h-[400px] bg-gradient-to-br from-orange-500/20 to-black border-r border-orange-500/10 flex items-center justify-center text-orange-200 text-3xl">

              Startup
              <br />
              Story Image

            </div>

            {/* RIGHT CONTENT */}
            <div className="p-10 md:p-14 flex flex-col justify-center">

              <p className="text-orange-300 tracking-[0.3em] uppercase text-sm mb-5">
                Featured Founder
              </p>

              <CinematicHeading
                as="h3"
                first="Building Startups"
                second="Beyond Limitations"
                className="text-4xl font-bold text-white leading-tight"
              />

              <p className="mt-8 text-white/60 leading-relaxed text-lg">

                Discover how student founders and young entrepreneurs
                transformed simple ideas into impactful startups through
                persistence, creativity, and innovation-driven thinking.

              </p>

              {/* MINI INFO */}
              <div className="mt-10 flex flex-wrap gap-4">

                <div className="px-4 py-2 rounded-full border border-orange-500/20 bg-orange-500/10 text-orange-300 text-sm">
                  Innovation
                </div>

                <div className="px-4 py-2 rounded-full border border-orange-500/20 bg-orange-500/10 text-orange-300 text-sm">
                  Leadership
                </div>

                <div className="px-4 py-2 rounded-full border border-orange-500/20 bg-orange-500/10 text-orange-300 text-sm">
                  Entrepreneurship
                </div>

              </div>

              {/* BUTTON */}
              <div className="mt-12">

                <button className="px-10 py-4 rounded-full bg-orange-500 hover:bg-orange-400 transition-all duration-300 text-black font-semibold shadow-[0_0_35px_rgba(255,115,0,0.4)]">

                  Read Full Story

                </button>

              </div>

            </div>

          </div>

        </ScrollReveal>

      </div>
    </section>
  );
}
