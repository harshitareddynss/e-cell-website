"use client";

import type { ReactNode } from "react";
import {
  ArrowRight,
  CalendarDays,
  ChevronLeft,
  ChevronRight,
  Clock3,
  Code2,
  Handshake,
  MapPin,
  Star,
  Trophy,
  Users,
} from "lucide-react";

export default function StellarAchievementCard() {
  return (
    <section className="flex min-h-screen items-center justify-center px-4 py-8 sm:px-6">
      <article className="relative w-full max-w-4xl overflow-hidden rounded-[22px] border border-orange-500/30 bg-black/60 shadow-[0_0_45px_rgba(255,140,0,0.14)] backdrop-blur-xl sm:rounded-[28px]">
        <div className="relative h-[320px] overflow-hidden bg-gradient-to-br from-zinc-950 via-black to-orange-950/30 sm:h-[300px] lg:h-[320px]">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,140,0,0.12),transparent_70%)]" />

          <div className="absolute left-4 top-4 z-10 sm:left-5 sm:top-5">
            <div className="flex items-center gap-2 rounded-full border border-orange-500/30 bg-black/50 px-3 py-1.5 text-xs text-orange-400 backdrop-blur-md">
              <Code2 size={15} />
              EVENT TYPE
            </div>
          </div>

          <div className="absolute right-4 top-16 z-10 sm:right-5 sm:top-5">
            <div className="flex items-center gap-2 rounded-full border border-orange-500/30 bg-black/50 px-3 py-1.5 text-xs text-white backdrop-blur-md">
              <MapPin size={15} />
              VENUE
            </div>
          </div>

          <button
            type="button"
            aria-label="Previous event image"
            className="absolute left-4 top-1/2 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 bg-black/40 text-white transition hover:border-orange-400/60 hover:text-orange-300 sm:left-5 sm:h-10 sm:w-10"
          >
            <ChevronLeft />
          </button>

          <button
            type="button"
            aria-label="Next event image"
            className="absolute right-4 top-1/2 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 bg-black/40 text-white transition hover:border-orange-400/60 hover:text-orange-300 sm:right-5 sm:h-10 sm:w-10"
          >
            <ChevronRight />
          </button>

          <div className="absolute bottom-10 left-5 right-5 z-10 sm:bottom-9 sm:left-7">
            <h2 className="text-3xl font-black text-white sm:text-4xl lg:text-5xl">
              EVENT TITLE
            </h2>

            <p className="mt-2 text-base text-zinc-300 sm:text-xl">
              Innovation. Collaboration.
              <span className="text-orange-400"> Impact.</span>
            </p>
          </div>

          <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 gap-2">
            <div className="h-2.5 w-2.5 rounded-full bg-orange-400" />
            <div className="h-2.5 w-2.5 rounded-full bg-zinc-600" />
            <div className="h-2.5 w-2.5 rounded-full bg-zinc-600" />
          </div>
        </div>

        <div className="grid border-y border-orange-500/20 md:grid-cols-3">
          <InfoBox icon={<CalendarDays size={28} />} title="DATE" subtitle="Timeline" />
          <InfoBox icon={<Clock3 size={28} />} title="DURATION" subtitle="Event Duration" />
          <InfoBox icon={<MapPin size={28} />} title="LOCATION" subtitle="Venue" />
        </div>

        <div className="space-y-3 p-3 sm:p-4">
          <div className="rounded-[18px] border border-orange-500/20 bg-zinc-950/50 p-3 sm:rounded-[22px]">
            <div className="flex flex-col gap-3 sm:flex-row sm:items-start">
              <div className="h-14 w-14 shrink-0 rounded-full border-2 border-orange-500 bg-zinc-900 shadow-[0_0_25px_rgba(255,140,0,0.3)] sm:h-16 sm:w-16" />

              <div>
                <p className="mb-1 text-xs uppercase tracking-widest text-orange-400">
                  Speakers / Judges / Guests
                </p>

                <h3 className="text-xl font-bold text-white sm:text-2xl">
                  Name Placeholder
                </h3>

                <p className="mt-1 text-sm text-zinc-400 sm:text-base">
                  Designation Placeholder
                </p>

                <a href="#" className="mt-2 inline-flex items-center gap-2 text-sm text-blue-400">
                  <LinkedInIcon />
                  LinkedIn
                </a>
              </div>
            </div>
          </div>

          <div className="grid gap-3 lg:grid-cols-2">
            <div className="rounded-[18px] border border-orange-500/20 bg-zinc-950/50 p-3 sm:rounded-[22px]">
              <SectionTitle icon={<Handshake size={20} />} title="Collaborators" />

              <div className="mt-3 flex flex-wrap gap-3">
                <LogoCircle />
                <LogoCircle />
                <LogoCircle />
                <LogoCircle />
              </div>

              <div className="my-3 border-t border-orange-500/10" />

              <SectionTitle icon={<Star size={20} />} title="Sponsors" />

              <div className="mt-3 flex flex-wrap gap-3">
                <LogoCircle />
                <LogoCircle />
                <LogoCircle />
                <LogoCircle />
              </div>
            </div>

            <div className="rounded-[18px] border border-orange-500/20 bg-zinc-950/50 p-3 sm:rounded-[22px]">
              <SectionTitle icon={<Trophy size={20} />} title="Winners" />

              <div className="mt-4 space-y-3">
                <WinnerRow medal="1" team="Winner / Team Name" />
                <WinnerRow medal="2" team="Winner / Team Name" />
                <WinnerRow medal="3" team="Winner / Team Name" />
              </div>
            </div>
          </div>

          <div className="rounded-[18px] border border-orange-500/20 bg-zinc-950/50 p-3 sm:rounded-[22px]">
            <SectionTitle icon={<Users size={20} />} title="Event Highlights" />

            <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              <Metric icon={<Users />} value="000+" label="Participants" />
              <Metric icon={<Users />} value="000+" label="Teams" />
              <Metric icon={<Clock3 />} value="00" label="Hours" />
              <Metric icon={<Code2 />} value="000+" label="Projects" />
            </div>
          </div>

          <div className="flex flex-col items-start justify-between gap-4 rounded-[18px] border border-orange-500/20 bg-zinc-950/50 p-3 sm:rounded-[22px] lg:flex-row lg:items-center">
            <div className="max-w-3xl">
              <SectionTitle icon={<Star size={20} />} title="Event Description" />

              <p className="mt-3 text-sm leading-relaxed text-zinc-300 sm:text-base">
                Event description placeholder. Organizers can later add detailed
                information about the event, experience, achievements, and
                highlights here.
              </p>
            </div>

            <button className="flex shrink-0 items-center gap-3 rounded-full border border-orange-500/40 px-5 py-2.5 text-sm font-semibold text-white shadow-[0_0_30px_rgba(255,140,0,0.2)] transition-all hover:bg-orange-500">
              Read More
              <ArrowRight />
            </button>
          </div>
        </div>
      </article>
    </section>
  );
}

function InfoBox({
  icon,
  title,
  subtitle,
}: {
  icon: ReactNode;
  title: string;
  subtitle: string;
}) {
  return (
    <div className="flex items-center gap-3 border-b border-orange-500/20 px-4 py-3 last:border-b-0 md:border-b-0 md:border-r md:last:border-r-0">
      <div className="text-orange-400">{icon}</div>

      <div>
        <h3 className="text-lg font-bold text-white sm:text-xl">{title}</h3>
        <p className="text-xs text-zinc-500 sm:text-sm">{subtitle}</p>
      </div>
    </div>
  );
}

function SectionTitle({ icon, title }: { icon: ReactNode; title: string }) {
  return (
    <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-orange-400 sm:text-sm">
      {icon}
      {title}
    </div>
  );
}

function LogoCircle() {
  return (
    <div className="h-10 w-10 rounded-full border border-orange-500/20 bg-black/40 sm:h-12 sm:w-12" />
  );
}

function WinnerRow({ medal, team }: { medal: string; team: string }) {
  return (
    <div className="flex items-center gap-3 border-b border-orange-500/10 pb-2.5 last:border-none">
      <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-orange-500/30 text-base font-black text-orange-300">
        {medal}
      </div>

      <div className="text-base font-semibold text-white sm:text-lg">{team}</div>
    </div>
  );
}

function Metric({
  icon,
  value,
  label,
}: {
  icon: ReactNode;
  value: string;
  label: string;
}) {
  return (
    <div className="flex items-center gap-4">
      <div className="text-orange-400">{icon}</div>

      <div>
        <h3 className="text-2xl font-black text-white">{value}</h3>
        <p className="text-xs text-zinc-500">{label}</p>
      </div>
    </div>
  );
}

function LinkedInIcon() {
  return (
    <svg
      aria-hidden="true"
      className="h-5 w-5"
      viewBox="0 0 24 24"
      fill="currentColor"
    >
      <path d="M5 9h3.2v10H5V9Zm1.6-4A1.85 1.85 0 1 1 6.6 8.7 1.85 1.85 0 0 1 6.6 5Zm5 4h3.1v1.4c.45-.85 1.55-1.65 3.2-1.65 3.4 0 4.1 2.15 4.1 5V19h-3.25v-4.7c0-1.1-.02-2.55-1.7-2.55s-1.95 1.2-1.95 2.45V19h-3.25V9Z" />
    </svg>
  );
}
