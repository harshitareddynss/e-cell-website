
"use client";

import { motion } from "framer-motion";
import { ChevronDown, Mail, Rocket } from "lucide-react";

const socialLinks = [
  {
    label: "Instagram",
    href: "#",
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true" className="h-5 w-5">
        <rect x="3" y="3" width="18" height="18" rx="5" fill="none" stroke="currentColor" strokeWidth="2" />
        <circle cx="12" cy="12" r="4" fill="none" stroke="currentColor" strokeWidth="2" />
        <circle cx="17.5" cy="6.5" r="1.2" fill="currentColor" />
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    href: "#",
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true" className="h-5 w-5">
        <path d="M5 9h3.2v10H5V9Zm1.6-4A1.85 1.85 0 1 1 6.6 8.7 1.85 1.85 0 0 1 6.6 5Zm5 4h3.1v1.4c.45-.85 1.55-1.65 3.2-1.65 3.4 0 4.1 2.15 4.1 5V19h-3.25v-4.7c0-1.1-.02-2.55-1.7-2.55s-1.95 1.2-1.95 2.45V19h-3.25V9Z" fill="currentColor" />
      </svg>
    ),
  },
  {
    label: "Gmail",
    href: "mailto:",
    icon: <Mail className="h-5 w-5" aria-hidden="true" />,
  },
  {
    label: "X",
    href: "#",
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true" className="h-5 w-5">
        <path d="M4 4h4.2l4.45 5.8L17.6 4H20l-6.2 7.25L21 20h-4.15l-4.9-6.4L6.5 20H4.05l6.75-7.85L4 4Zm3.1 1.75 10.6 12.5h1.2L8.35 5.75H7.1Z" fill="currentColor" />
      </svg>
    ),
  },
];

export default function Hero() {
  return (
    <section className="relative isolate mt-[var(--navbar-height)] flex min-h-[calc(100vh-var(--navbar-height))] items-center overflow-hidden py-10 sm:py-14 lg:py-0 scroll-mt-[var(--navbar-height)]">

      {/* MAIN CONTENT */}
      <div className="relative z-10 mx-auto flex w-full max-w-[1440px] flex-col gap-14 px-6 md:px-10 lg:grid lg:grid-cols-2 lg:items-center">

        {/* LEFT SIDE */}
        <motion.div
          initial={{ opacity: 0, y: 36, filter: "blur(10px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        >

          {/* SMALL LABEL */}
          <div className="inline-flex items-center gap-2 border border-orange-500/20 bg-orange-500/10 px-4 py-2 rounded-full mb-8">

            <div className="w-2 h-2 bg-orange-400 rounded-full animate-pulse" />

            <span className="text-orange-300 text-sm tracking-wider">
              INNOVATION STARTS HERE
            </span>

          </div>

          {/* MAIN HEADING */}
          <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight">
            Where Ideas
            <br />

            <span className="text-orange-400">
              Escape Gravity
            </span>
          </h1>

          {/* DESCRIPTION */}
          <p className="mt-8 text-white/70 text-lg leading-relaxed max-w-xl">
            E-Cell empowers innovators, dreamers, and future founders
            to build ideas that shape the next generation of startups.
          </p>

          <div className="mt-8 inline-flex items-center gap-3 text-orange-200">
            <span className="h-px w-10 bg-gradient-to-r from-transparent to-orange-400/80" />
            <span className="text-sm md:text-base font-semibold tracking-[0.18em] uppercase drop-shadow-[0_0_14px_rgba(255,115,0,0.55)]">
              Exploring Startups Beyond The Atmosphere
            </span>
          </div>

          {/* BUTTONS */}
          <div className="mt-8 flex flex-wrap gap-5">

            <button className="px-7 py-3 rounded-full bg-orange-500 hover:bg-orange-400 transition-all duration-300 text-black font-semibold shadow-[0_0_30px_rgba(255,115,0,0.5)]">
              Startup Stories
            </button>

            <button className="px-7 py-3 rounded-full border border-orange-400/40 text-orange-300 hover:bg-orange-500/10 transition-all duration-300">
              Idea Hub
            </button>

          </div>

          {/* SOCIAL ICONS */}
          <div className="mt-12 flex gap-5">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                aria-label={social.label}
                className="w-11 h-11 rounded-full border border-orange-500/30 bg-orange-500/10 flex items-center justify-center text-orange-300 shadow-[0_0_22px_rgba(255,115,0,0.12)] hover:scale-110 hover:text-orange-100 hover:border-orange-400/60 hover:bg-orange-500/15 transition-all duration-300"
              >
                {social.icon}
              </a>
            ))}

          </div>
        </motion.div>

        {/* RIGHT SIDE */}
        <motion.div
          className="relative flex justify-center"
          initial={{ opacity: 0, x: 46, filter: "blur(12px)" }}
          animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
          transition={{ duration: 1, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
        >

          {/* PLANET */}
          <div className="absolute w-[380px] h-[380px] rounded-full bg-gradient-to-br from-orange-400/30 via-orange-500/20 to-orange-700/10 blur-3xl" />

          <div className="relative z-10 w-full max-w-md">
            {/* ANNOUNCEMENTS TITLE */}
            <div className="mission-heading-float mb-3 flex items-center justify-center gap-3 text-orange-200">
              <Rocket className="h-5 w-5 rotate-45 drop-shadow-[0_0_14px_rgba(255,115,0,0.85)]" aria-hidden="true" />

              <p className="text-sm md:text-base font-bold tracking-[0.28em] uppercase drop-shadow-[0_0_18px_rgba(255,115,0,0.9)]">
                Mission Updates
              </p>
            </div>

            {/* ANNOUNCEMENT CARD */}
            <div className="rounded-[32px] border border-orange-500/20 bg-white/5 backdrop-blur-xl p-6 shadow-[0_0_50px_rgba(255,115,0,0.15)]">
              <div className="flex min-h-[320px] flex-col items-center justify-center gap-6 text-center sm:min-h-[340px]">
                <div className="relative flex flex-col items-center">
                  <div className="mb-5 rounded-2xl border border-orange-500/40 bg-black/40 backdrop-blur-lg px-6 py-3 shadow-[0_0_20px_rgba(255,136,0,0.25)]">
                    <p className="font-semibold text-white">
                      No ongoing missions
                    </p>
                    <div className="absolute left-1/2 -bottom-2 h-4 w-4 -translate-x-1/2 rotate-45 border-r border-b border-orange-500/40 bg-black/40" />
                  </div>

                  <div className="relative inline-flex items-center justify-center rounded-full bg-orange-500/10 p-8 shadow-[0_0_40px_rgba(255,140,0,0.18)]">
                    <div className="absolute inset-0 rounded-full bg-orange-500/10 blur-3xl" />
                    <img
                      src="/images/mascot/astronaut.png"
                      alt="Astronaut"
                      width={200}
                      height={200}
                      className="relative animate-float object-contain"
                    />
                  </div>
                </div>

                <div>
                  <p className="mt-3 text-gray-300">
                    All caught up! Check back soon for exciting new missions.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      <a
        href="#insights"
        aria-label="Scroll down"
        className="scroll-orbit absolute bottom-5 left-1/2 z-20 flex flex-col items-center gap-2 text-orange-300 md:bottom-7"
      >
        <span className="text-[10px] tracking-[0.35em] uppercase">Scroll</span>
        <span className="relative flex h-11 w-7 items-start justify-center rounded-full border border-orange-400/40 bg-orange-500/10 shadow-[0_0_22px_rgba(255,115,0,0.22)]">
          <ChevronDown className="mt-2 h-4 w-4 animate-bounce" aria-hidden="true" />
        </span>
      </a>
    </section>
  );
}
