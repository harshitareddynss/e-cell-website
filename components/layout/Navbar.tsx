"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/crew", label: "Crew" },
  { href: "/events", label: "Missions" },
  { href: "/stories", label: "Startup Stories" },
  { href: "/ideas", label: "Idea Hub" },
  { href: "/archives", label: "Stellar Archives" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  const getIsActive = (href: string) =>
    href === "/"
      ? pathname === "/"
      : pathname === href || pathname.startsWith(`${href}/`);

  return (
    <header className="fixed top-0 left-0 w-full z-50">
      <div className="absolute inset-0 bg-black/20 backdrop-blur-md border-b border-orange-500/10" />

      <nav className="relative w-full px-8 sm:px-10 py-3 h-[var(--navbar-height)] lg:grid lg:grid-cols-[minmax(280px,auto)_1fr_minmax(360px,auto)] lg:items-center lg:gap-8">
        <div className="flex items-center gap-14 lg:justify-start flex-shrink-0 whitespace-nowrap">
          <div className="group relative w-[56px] h-[56px] rounded-2xl border border-orange-400/25 bg-white/5 shadow-[0_0_20px_rgba(255,115,0,0.18)] transition duration-300 hover:shadow-[0_0_25px_rgba(255,115,0,0.38)]">
            <Image
              src="/images/logo/ecell-logo.png"
              alt="E-Cell View logo"
              fill
              className="object-contain"
            />
          </div>

          <div className="hidden sm:flex flex-col leading-tight min-w-max">
            <span className="text-orange-400 uppercase text-[11px] tracking-[0.35em]">
              ECELL-VIEW
            </span>
            <span className="text-white font-semibold text-lg tracking-[0.02em] sm:text-base md:text-lg">
              Ignite • Innovate • Impact
            </span>
          </div>
        </div>

        <div className="hidden md:flex justify-center">
          <div className="flex flex-wrap items-center justify-center gap-5 xl:gap-6">
            {navLinks.map((link) => {
              const isActive = getIsActive(link.href);

              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`relative text-sm tracking-wider transition-all duration-300 ${isActive
                    ? "font-medium text-orange-400"
                    : "text-white/80 hover:text-orange-400"
                    } whitespace-nowrap`}
                >
                  {link.label}
                  {isActive ? (
                    <span className="absolute -bottom-2 left-0 h-[2px] w-full bg-orange-400 shadow-[0_0_10px_rgba(255,115,0,0.8)]" />
                  ) : null}
                </Link>
              );
            })}
          </div>
        </div>

        <div className="flex items-center justify-end gap-14 flex-shrink-0 whitespace-nowrap">
          <div className="group relative w-[56px] h-[56px] rounded-2xl border border-orange-400/25 bg-white/5 shadow-[0_0_20px_rgba(255,115,0,0.18)] transition duration-300 hover:shadow-[0_0_25px_rgba(255,115,0,0.38)]">
            <Image
              src="/images/logo/vignan-logo.png"
              alt="Vignan's Institute of Engineering for Women logo"
              fill
              className="object-contain"
            />
          </div>

          <div className="hidden sm:flex flex-col leading-tight text-right min-w-max">
            <span className="text-orange-400 uppercase text-[11px] tracking-[0.32em]">
              VIGNAN&apos;S
            </span>
            <span className="text-white font-semibold text-base leading-tight">
              Institute of Engineering for Women
            </span>
            <span className="text-orange-400 text-xs tracking-[0.24em]">
              (Autonomous)
            </span>
          </div>

          <button
            type="button"
            className="lg:hidden inline-flex items-center justify-center w-12 h-12 rounded-2xl border border-orange-400/20 bg-black/25 text-orange-300 transition hover:bg-orange-500/15 hover:text-orange-100"
            onClick={() => setMobileOpen((current) => !current)}
            aria-label="Toggle navigation"
          >
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-6 w-6"
            >
              <path d="M4 7h16M4 12h16M4 17h16" />
            </svg>
          </button>
        </div>

        {mobileOpen ? (
          <div className="absolute left-8 right-8 top-full mt-3 rounded-[28px] border border-orange-500/15 bg-black/95 backdrop-blur-xl p-4 shadow-[0_20px_60px_rgba(0,0,0,0.65)] lg:hidden">
            <div className="flex flex-col gap-3">
              {navLinks.map((link) => {
                const isActive = getIsActive(link.href);
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className={`block rounded-2xl px-4 py-3 text-sm tracking-wider transition duration-200 ${isActive
                      ? "bg-orange-500/10 text-orange-300"
                      : "text-white/80 hover:bg-white/5 hover:text-orange-300"
                      }`}
                  >
                    {link.label}
                  </Link>
                );
              })}
            </div>
          </div>
        ) : null}
      </nav>
    </header>
  );
}
