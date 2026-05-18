"use client";

import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";
import StartupStoryCard from "@/components/StartupStoryCard";

export default function StartupStories() {
  return (
    <main className="relative overflow-hidden">
      <ScrollReveal className="flex flex-col items-center px-6 pb-8 pt-32 text-center">
        <h1 className="text-4xl font-black uppercase tracking-[0.14em] text-white sm:text-5xl md:text-6xl">
          Startup
          <br />
          <span className="text-orange-400">Stories</span>
        </h1>

        <div className="mb-6 mt-5 h-[2px] w-28 bg-orange-500 shadow-[0_0_20px_rgba(255,140,0,0.8)]" />

        <p className="max-w-3xl text-lg italic leading-relaxed text-zinc-200 md:text-2xl">
          Featuring inspiring startup journeys every week.
        </p>

        <a
          href="#startup-stories"
          aria-label="Scroll to startup stories"
          className="scroll-orbit mt-5 flex flex-col items-center gap-2 text-orange-300"
        >
          <span className="text-[10px] tracking-[0.35em] uppercase">Scroll</span>
          <span className="relative flex h-11 w-7 items-start justify-center rounded-full border border-orange-400/40 bg-orange-500/10 shadow-[0_0_22px_rgba(255,115,0,0.22)]">
            <ChevronDown className="mt-2 h-4 w-4 animate-bounce" aria-hidden="true" />
          </span>
        </a>
      </ScrollReveal>

      <div id="startup-stories" className="pt-2">
        <ScrollReveal>
          <StartupStoryCard />
        </ScrollReveal>
      </div>
      <ScrollReveal delay={0.08}>
        <StartupStoryCard />
      </ScrollReveal>
      <ScrollReveal delay={0.08}>
        <StartupStoryCard />
      </ScrollReveal>
    </main>
  );
}
