"use client";

import { ChevronDown } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";

export default function CrewHero() {
  return (
    <section className="relative flex flex-col items-center px-6 pb-16 pt-32 text-center">

      {/* TOP GLOW */}
      <div className="absolute top-0 left-1/2 h-[350px] w-[350px] -translate-x-1/2 rounded-full bg-orange-500/10 blur-[140px]" />

      <ScrollReveal className="relative z-10 flex flex-col items-center">

        {/* SMALL KICKER */}
        <p className="section-kicker mb-6">
          THE PEOPLE BEHIND ECELL
        </p>

        {/* MAIN HEADING */}
        <h1 className="text-5xl font-black uppercase tracking-[0.12em] text-white sm:text-6xl md:text-7xl leading-none">

          Meet
          <br />

          <span className="text-orange-400">
            The Crew
          </span>

        </h1>

        {/* GLOW LINE */}
        <div className="mb-7 mt-7 h-[2px] w-32 bg-orange-500 shadow-[0_0_25px_rgba(255,140,0,0.9)]" />

        {/* SUBTEXT */}
        <p className="max-w-3xl text-lg italic leading-relaxed text-zinc-300 md:text-2xl">

          The creators, organizers, strategists and innovators
          building experiences beyond classrooms.

        </p>

        {/* SCROLL INDICATOR */}
        <a
          href="#faculty-section"
          aria-label="Scroll to crew content"
          className="scroll-orbit mt-10 flex flex-col items-center gap-2 text-orange-300"
        >

          <span className="text-[10px] uppercase tracking-[0.35em]">
            Scroll
          </span>

          <span className="relative flex h-11 w-7 items-start justify-center rounded-full border border-orange-400/40 bg-orange-500/10 shadow-[0_0_22px_rgba(255,115,0,0.22)]">

            <ChevronDown
              className="mt-2 h-4 w-4 animate-bounce"
              aria-hidden="true"
            />

          </span>

        </a>

      </ScrollReveal>

    </section>
  );
}