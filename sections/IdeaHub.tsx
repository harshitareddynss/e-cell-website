"use client";

import CinematicHeading from "@/components/CinematicHeading";
import ScrollReveal from "@/components/ScrollReveal";

export default function IdeaHub() {
  return (
    <section className="relative py-36 overflow-hidden">

      {/* BACKGROUND GLOW */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-orange-500/5 blur-[180px] rounded-full" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-10">

        {/* HEADING */}
        <ScrollReveal className="text-center mb-24">

          <p className="section-kicker mb-6">
            Idea Hub
          </p>

          <CinematicHeading
            first="Ideas That Could"
            second="Shape The Future"
            className="text-4xl md:text-6xl font-bold text-white leading-tight"
          />

          <p className="mt-8 text-white/60 max-w-3xl mx-auto text-lg leading-relaxed">

            A platform where innovative student ideas, startup concepts,
            and creative problem-solving approaches are showcased and celebrated.

          </p>

        </ScrollReveal>

        {/* IDEA CARD */}
        <ScrollReveal delay={0.1} className="rounded-[40px] border border-orange-500/10 bg-white/5 backdrop-blur-xl overflow-hidden hover:border-orange-500/30 transition-all duration-500">

          <div className="grid grid-cols-1 lg:grid-cols-2">

            {/* LEFT IMAGE */}
            <div className="min-h-[420px] bg-gradient-to-br from-orange-500/20 to-black border-r border-orange-500/10 flex items-center justify-center text-orange-200 text-3xl">

              Idea
              <br />
              Preview

            </div>

            {/* RIGHT CONTENT */}
            <div className="p-10 md:p-14 flex flex-col justify-center">

              {/* STUDENT INFO */}
              <div className="flex items-center gap-5 mb-8">

                {/* PROFILE */}
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-orange-500/30 to-black border border-orange-500/20 flex items-center justify-center text-orange-200">

                  IMG

                </div>

                {/* TEXT */}
                <div>

                  <h4 className="text-white text-xl font-semibold">
                    Student Name
                  </h4>

                  <p className="text-orange-300 text-sm tracking-wider">
                    CSE • 3rd Year
                  </p>

                </div>

              </div>

              {/* IDEA TITLE */}
              <CinematicHeading
                as="h3"
                first="Smart Waste"
                second="Management System"
                className="text-4xl font-bold text-white leading-tight"
              />

              {/* DESCRIPTION */}
              <p className="mt-8 text-white/60 leading-relaxed text-lg">

                An AI-powered smart waste management system designed to
                optimize garbage collection, improve sustainability,
                and create cleaner urban environments through intelligent tracking.

              </p>

              {/* TAGS */}
              <div className="mt-10 flex flex-wrap gap-4">

                <div className="px-4 py-2 rounded-full border border-orange-500/20 bg-orange-500/10 text-orange-300 text-sm">
                  AI
                </div>

                <div className="px-4 py-2 rounded-full border border-orange-500/20 bg-orange-500/10 text-orange-300 text-sm">
                  Sustainability
                </div>

                <div className="px-4 py-2 rounded-full border border-orange-500/20 bg-orange-500/10 text-orange-300 text-sm">
                  Innovation
                </div>

              </div>

              {/* BUTTON */}
              <div className="mt-12">

                <button className="px-10 py-4 rounded-full bg-orange-500 hover:bg-orange-400 transition-all duration-300 text-black font-semibold shadow-[0_0_35px_rgba(255,115,0,0.4)]">

                  Explore Idea Hub

                </button>

              </div>

            </div>

          </div>

        </ScrollReveal>

      </div>
    </section>
  );
}
