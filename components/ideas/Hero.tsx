"use client";

import Link from "next/link";
import { Rocket } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative px-10 lg:px-16 pt-20 pb-20">
      <div className="grid lg:grid-cols-2 gap-20 items-center min-h-[560px]">
        {/* LEFT */}
        <div>
          <p className="text-sm uppercase tracking-[0.45em] text-orange-400 mb-6">
            E-CELL IDEA HUB
          </p>

          <h1 className="text-4xl lg:text-6xl font-black leading-[1] text-white max-w-3xl">
            Launch Your
            <span className="block text-orange-500">
              Startup Idea
            </span>
            Into Orbit
          </h1>

          <p className="mt-8 text-lg text-gray-300 leading-relaxed max-w-2xl">
            Submit your startup ideas, receive expert mentorship, track your
            progress, and transform bold visions into real ventures.
          </p>

          {/* BUTTONS */}
          <div className="mt-12 flex flex-wrap gap-6 items-center">
            <Link
              href="/ideas/submit"
              className="
                rounded-2xl
                px-8 py-4
                min-w-[220px]
                text-center
                font-semibold
                text-white
                bg-gradient-to-b from-orange-400 to-orange-600
                shadow-[0_0_30px_rgba(255,122,0,0.3)]
                hover:scale-[1.02]
                transition
              "
            >
              Submit Your Idea
            </Link>

            <Link
              href="/ideas/dashboard"
              className="
                rounded-2xl
                border border-orange-500/20
                bg-white/5
                backdrop-blur-xl
                px-8 py-4
                min-w-[220px]
                text-center
                font-semibold
                text-white
                hover:border-orange-500/40
                transition
              "
            >
              View My Dashboard
            </Link>
          </div>
        </div>

        {/* RIGHT PREMIUM CARD */}
        <div className="relative flex items-center justify-center h-[560px]">
          {/* ambient glow */}
          <div className="absolute w-[420px] h-[420px] rounded-full bg-orange-500/10 blur-3xl" />

          {/* orbit rings */}
          <div className="absolute w-[420px] h-[420px] rounded-full border border-orange-500/10" />
          <div className="absolute w-[300px] h-[300px] rounded-full border border-orange-500/10" />

          {/* floating rocket */}
          <div
            className="
              absolute top-8 right-10
              w-16 h-16
              rounded-full
              bg-orange-500/10
              border border-orange-500/20
              flex items-center justify-center
              shadow-[0_0_30px_rgba(255,122,0,0.25)]
              z-30
            "
          >
            <Rocket className="w-8 h-8 text-orange-400 rotate-45" />
          </div>

          {/* particles */}
          <div className="absolute top-20 left-12 w-3 h-3 rounded-full bg-orange-400 shadow-[0_0_20px_rgba(255,122,0,0.8)]" />
          <div className="absolute bottom-20 right-16 w-4 h-4 rounded-full bg-orange-300 shadow-[0_0_20px_rgba(255,122,0,0.8)]" />

          {/* trails */}
          <div className="absolute top-28 left-16 w-32 h-[2px] bg-gradient-to-r from-orange-500 to-transparent rotate-[-30deg]" />
          <div className="absolute bottom-28 right-20 w-36 h-[2px] bg-gradient-to-r from-orange-500 to-transparent rotate-[35deg]" />

          {/* SIGN IN CARD */}
          <div
            className="
              relative z-20
              w-full max-w-[420px]
              rounded-[28px]
              border border-orange-500/20
              bg-black/50
              backdrop-blur-2xl
              shadow-[0_0_50px_rgba(255,122,0,0.12)]
              p-8
            "
          >
            <p className="text-sm uppercase tracking-[0.35em] text-orange-400 mb-4">
              Innovator Access
            </p>

            <h3 className="text-4xl font-bold text-white">
              Sign In
            </h3>

            <p className="text-gray-400 mt-4 leading-relaxed">
              Access your dashboard, track submissions, and receive mentor
              feedback.
            </p>

            <div className="mt-8 space-y-4">
              <div className="rounded-2xl border border-orange-500/15 bg-white/5 px-5 py-4 text-gray-500">
                Enter your email
              </div>

              <div className="rounded-2xl border border-orange-500/15 bg-white/5 px-5 py-4 text-gray-500">
                Enter your password
              </div>
            </div>

            <button
              className="
                mt-6
                w-full
                rounded-2xl
                py-4
                font-semibold
                text-white
                bg-gradient-to-b from-orange-400 to-orange-600
                shadow-[0_0_30px_rgba(255,122,0,0.3)]
              "
            >
              Launch Dashboard
            </button>

            <div className="flex justify-between mt-5 text-sm text-gray-500">
              <span>Forgot Password?</span>
              <span>Create Account</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}