"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";

export default function PageLaunchTransition() {
  const pathname = usePathname();
  const shouldLaunch = pathname !== "/";
  const [isLaunching, setIsLaunching] = useState(() => shouldLaunch);

  useEffect(() => {
    if (!shouldLaunch) {
      const hideTimer = window.setTimeout(() => {
        setIsLaunching(false);
      }, 0);

      return () => window.clearTimeout(hideTimer);
    }

    const showTimer = window.setTimeout(() => {
      setIsLaunching(true);
    }, 0);

    const launchTimer = window.setTimeout(() => {
      setIsLaunching(false);
    }, 2300);

    return () => {
      window.clearTimeout(showTimer);
      window.clearTimeout(launchTimer);
    };
  }, [pathname, shouldLaunch]);

  return (
    <AnimatePresence>
      {shouldLaunch && isLaunching ? <RocketLaunchIntro key={pathname} /> : null}
    </AnimatePresence>
  );
}

function RocketLaunchIntro() {
  return (
    <motion.div
      className="pointer-events-none fixed inset-0 z-[80] flex items-end justify-center overflow-hidden"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.45, ease: "easeOut" }}
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(249,115,22,0.14),transparent_48%)]" />

      <motion.div
        className="relative z-10 mb-[-110px] flex flex-col items-center"
        initial={{ y: 250, scale: 0.92 }}
        animate={{ y: "-124vh", scale: 0.84 }}
        transition={{ duration: 2.05, ease: [0.34, 0, 0.1, 1] }}
      >
        <div className="relative z-20 drop-shadow-[0_0_26px_rgba(255,115,0,0.38)]">
          <svg
            aria-hidden="true"
            className="h-[230px] w-[108px] sm:h-[270px] sm:w-[126px]"
            viewBox="0 0 126 270"
          >
            <defs>
              <linearGradient id="rocketBodyGlobal" x1="24" x2="102" y1="24" y2="212">
                <stop offset="0" stopColor="#f8fafc" />
                <stop offset="0.45" stopColor="#9ca3af" />
                <stop offset="1" stopColor="#111827" />
              </linearGradient>
              <linearGradient id="rocketNoseGlobal" x1="63" x2="63" y1="2" y2="56">
                <stop offset="0" stopColor="#0f172a" />
                <stop offset="0.5" stopColor="#334155" />
                <stop offset="1" stopColor="#e5e7eb" />
              </linearGradient>
              <radialGradient id="windowGlowGlobal" cx="50%" cy="50%" r="50%">
                <stop offset="0" stopColor="#fed7aa" />
                <stop offset="0.45" stopColor="#f97316" />
                <stop offset="1" stopColor="#7c2d12" />
              </radialGradient>
              <filter id="rocketGlowGlobal" x="-50%" y="-50%" width="200%" height="200%">
                <feDropShadow dx="0" dy="0" stdDeviation="5" floodColor="#f97316" floodOpacity="0.7" />
              </filter>
            </defs>

            <path
              d="M63 3C38 31 27 67 27 119v82c0 13 11 24 24 24h24c13 0 24-11 24-24v-82C99 67 88 31 63 3Z"
              fill="url(#rocketBodyGlobal)"
              stroke="#f8fafc"
              strokeOpacity="0.5"
              strokeWidth="1.5"
              filter="url(#rocketGlowGlobal)"
            />
            <path d="M63 3C48 19 39 37 34 58h58C87 37 78 19 63 3Z" fill="url(#rocketNoseGlobal)" />
            <path d="M31 155 6 221c-3 9 2 18 11 20l30-42Z" fill="#9a3412" stroke="#fb923c" strokeOpacity="0.45" />
            <path d="M95 155 120 221c3 9-2 18-11 20l-30-42Z" fill="#9a3412" stroke="#fb923c" strokeOpacity="0.45" />
            <circle cx="63" cy="90" r="17" fill="#111827" stroke="#fb923c" strokeWidth="4" />
            <circle cx="63" cy="90" r="9" fill="url(#windowGlowGlobal)" />
            <path d="M50 226h26l-5 20H55Z" fill="#1f2937" stroke="#fb923c" strokeOpacity="0.35" />
            <path d="M45 61c7-5 29-5 36 0" stroke="#ffffff" strokeOpacity="0.28" strokeWidth="2" fill="none" />
            <path d="M43 128h40M43 153h40" stroke="#020617" strokeOpacity="0.45" strokeWidth="3" />
          </svg>
        </div>

        <div className="relative mt-[-32px] flex flex-col items-center">
          <div className="absolute top-4 h-[210px] w-[190px] rounded-full bg-orange-500/18 blur-3xl sm:h-[250px] sm:w-[230px]" />
          <div className="h-[220px] w-[135px] bg-[radial-gradient(circle_at_50%_16%,rgba(255,255,255,0.96),rgba(253,186,116,0.9)_12%,rgba(249,115,22,0.82)_34%,rgba(154,52,18,0.46)_62%,rgba(0,0,0,0)_80%)] blur-[1px] sm:h-[250px] sm:w-[155px]" />
          <div className="absolute top-8 h-[190px] w-[92px] bg-[linear-gradient(to_bottom,rgba(255,247,237,0.92),rgba(251,146,60,0.86),rgba(194,65,12,0.42),rgba(0,0,0,0))] blur-md sm:h-[220px] sm:w-[110px]" />
        </div>
      </motion.div>
    </motion.div>
  );
}
