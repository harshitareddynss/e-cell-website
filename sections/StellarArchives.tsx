"use client";

import { motion } from "framer-motion";
import StellarAchievementCard from "@/components/StellarAchievementCard";
import ScrollReveal from "@/components/ScrollReveal";
import { ChevronDown } from "lucide-react";

export default function StellarArchives() {
  return (
    <main className="relative overflow-hidden">
      <section className="flex min-h-screen flex-col items-center justify-center px-6 pt-24 text-center">
        <motion.h1
          className="text-4xl font-black uppercase tracking-[0.14em] text-white sm:text-5xl md:text-7xl"
          initial={{ opacity: 0, y: 22, scale: 0.92, filter: "blur(12px)" }}
          animate={{ opacity: 1, y: 0, scale: 1, filter: "blur(0px)" }}
          transition={{ duration: 0.7, delay: 2.1, ease: [0.22, 1, 0.36, 1] }}
        >
          Stellar
          <br />
          <span className="text-orange-400">Achievements</span>
        </motion.h1>

        <motion.div
          className="mb-7 mt-6 h-[2px] w-32 bg-orange-500 shadow-[0_0_20px_rgba(255,140,0,0.8)]"
          initial={{ opacity: 0, scaleX: 0 }}
          animate={{ opacity: 1, scaleX: 1 }}
          transition={{ duration: 0.55, delay: 2.28, ease: [0.22, 1, 0.36, 1] }}
        />

        <motion.p
          className="max-w-3xl text-xl italic leading-relaxed text-zinc-200 md:text-3xl"
          initial={{ opacity: 0, y: 18, filter: "blur(10px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 0.65, delay: 2.38, ease: [0.22, 1, 0.36, 1] }}
        >
          Every event began as a spark.
          <br />
          Here lies the constellation we created together.
        </motion.p>

        <motion.p
          className="mt-7 max-w-3xl text-base leading-relaxed text-zinc-400 md:text-lg"
          initial={{ opacity: 0, y: 18, filter: "blur(10px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 0.65, delay: 2.5, ease: [0.22, 1, 0.36, 1] }}
        >
          Explore hackathons, summits, workshops, collaborations, and milestones
          that continue to shape the E-Cell universe.
        </motion.p>

        <motion.a
          href="#stellar-events"
          aria-label="Scroll to stellar events"
          className="scroll-orbit mt-6 flex flex-col items-center gap-2 text-orange-300"
          initial={{ opacity: 0, y: 14, scale: 0.94 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.5, delay: 2.64, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="text-[10px] tracking-[0.35em] uppercase">Scroll</span>
          <span className="relative flex h-11 w-7 items-start justify-center rounded-full border border-orange-400/40 bg-orange-500/10 shadow-[0_0_22px_rgba(255,115,0,0.22)]">
            <ChevronDown className="mt-2 h-4 w-4 animate-bounce" aria-hidden="true" />
          </span>
        </motion.a>
      </section>

      <div id="stellar-events">
        <ScrollReveal>
          <StellarAchievementCard />
        </ScrollReveal>
      </div>
      <ScrollReveal delay={0.08}>
        <StellarAchievementCard />
      </ScrollReveal>
      <ScrollReveal delay={0.08}>
        <StellarAchievementCard />
      </ScrollReveal>
    </main>
  );
}
