"use client";

import Link from "next/link";

export default function BottomCTA() {
  return (
    <section className="px-10 lg:px-16 pb-12">
      <div
        className="
          glow-card
          relative overflow-hidden
          px-10 py-12
        "
      >
        {/* ambient glow */}
        <div className="absolute top-0 right-0 w-72 h-72 bg-orange-500/10 blur-3xl rounded-full" />
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-orange-400/10 blur-3xl rounded-full" />

        <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-8">
          <div>
            <p className="text-orange-400 uppercase tracking-[0.35em] text-sm mb-4">
              READY TO BUILD?
            </p>

            <h2 className="text-4xl lg:text-5xl font-black text-white leading-tight">
              Your Next Big Startup
              <span className="block text-orange-500">
                Begins With One Idea
              </span>
            </h2>

            <p className="text-gray-400 mt-5 max-w-2xl text-lg">
              Take your innovation from imagination to execution with E-Cell mentorship and startup support.
            </p>
          </div>

          <Link
            href="/ideas/submit"
            className="
              orange-button
              px-8 py-4
              font-semibold
              whitespace-nowrap
            "
          >
            Launch Your Idea
          </Link>
        </div>
      </div>
    </section>
  );
}