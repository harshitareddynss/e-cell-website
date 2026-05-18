"use client";

import {
  CalendarDays,
  ChevronLeft,
  ChevronRight,
  Link2,
  UserRound,
} from "lucide-react";

export default function StartupStoryCard() {
  return (
    <section className="flex items-center justify-center px-4 py-5 sm:px-6">
      <article className="relative grid w-full max-w-5xl overflow-hidden rounded-[22px] border border-orange-500/30 bg-black/60 shadow-[0_0_46px_rgba(255,140,0,0.14)] backdrop-blur-xl transition-all duration-500 hover:border-orange-500/60 hover:shadow-[0_0_60px_rgba(255,140,0,0.25)] lg:grid-cols-[0.94fr_1.06fr]">
        <div className="flex flex-col justify-center p-5 sm:p-6 lg:p-7">
          <div className="mb-3 inline-flex w-fit items-center gap-2 rounded-full border border-orange-500/25 bg-orange-500/10 px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.2em] text-orange-300">
            <CalendarDays className="h-4 w-4" />
            Posted Date
          </div>

          <h2 className="text-3xl font-black text-orange-200 sm:text-4xl lg:text-5xl">
            Startup Name
          </h2>

          <div className="mt-4 rounded-[16px] border border-orange-500/15 bg-white/[0.04] p-3">
            <div className="flex items-center gap-3">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-orange-400/60 bg-zinc-950 text-orange-300 shadow-[0_0_20px_rgba(255,115,0,0.2)]">
                <UserRound className="h-6 w-6" />
              </div>

              <div>
                <h3 className="text-xl font-bold text-white">
                  Founder Name
                </h3>
                <p className="text-sm text-zinc-400">
                  Founder Designation
                </p>
              </div>
            </div>
          </div>

          <p className="mt-5 max-w-xl text-base leading-relaxed text-zinc-300">
            Startup story placeholder. Add the founder journey, problem solved,
            product idea, milestones, and impact created by this startup here.
          </p>

          <div className="mt-5 grid gap-3 border-t border-orange-500/15 pt-5 sm:grid-cols-2">
            <InfoPill label="Industry" value="Placeholder" />
            <InfoPill label="Founded" value="Year" />
            <InfoPill label="Stage" value="Placeholder" />
            <InfoPill label="Location" value="Placeholder" />
          </div>

          <div className="mt-5 flex items-center gap-3 border-t border-orange-500/15 pt-4 text-sm text-zinc-300">
            <Link2 className="h-4 w-4 shrink-0 text-orange-300" />
            <span className="font-semibold text-orange-300">Sources</span>
            <span className="h-1 w-1 rounded-full bg-orange-400/70" />
            <span>Website, LinkedIn</span>
          </div>
        </div>

        <div className="relative min-h-[300px] border-t border-orange-500/20 bg-gradient-to-br from-orange-500/20 via-zinc-950 to-black lg:min-h-[390px] lg:border-l lg:border-t-0">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,140,0,0.28),transparent_36%)]" />

          <div className="absolute inset-4 overflow-hidden rounded-[18px] border border-orange-500/30 bg-black/45 shadow-[inset_0_0_40px_rgba(255,115,0,0.08)]">
            <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,0.08),transparent_28%),radial-gradient(circle_at_70%_70%,rgba(249,115,22,0.22),transparent_38%)]" />


          </div>

          <button
            type="button"
            aria-label="Previous startup image"
            className="absolute left-6 top-1/2 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 bg-black/45 text-white transition hover:border-orange-400/60 hover:text-orange-300"
          >
            <ChevronLeft />
          </button>

          <button
            type="button"
            aria-label="Next startup image"
            className="absolute right-6 top-1/2 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 bg-black/45 text-white transition hover:border-orange-400/60 hover:text-orange-300"
          >
            <ChevronRight />
          </button>

          <div className="absolute bottom-5 left-1/2 flex -translate-x-1/2 gap-2">
            <div className="h-2.5 w-2.5 rounded-full bg-orange-400" />
            <div className="h-2.5 w-2.5 rounded-full bg-zinc-600" />
            <div className="h-2.5 w-2.5 rounded-full bg-zinc-600" />
          </div>
        </div>
      </article>
    </section>
  );
}

function InfoPill({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-[14px] border border-orange-500/15 bg-zinc-950/45 px-3 py-2">
      <p className="text-xs uppercase tracking-[0.2em] text-orange-300">
        {label}
      </p>
      <p className="text-base font-semibold text-white">{value}</p>
    </div>
  );
}
