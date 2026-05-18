"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/team", label: "Crew" },
  { href: "/events", label: "Missions" },
  { href: "/stories", label: "Startup Stories" },
  { href: "/ideas", label: "Idea Hub" },
  { href: "/archives", label: "Stellar Archives" },
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <header className="fixed top-0 left-0 w-full z-50">
      {/* blur layer */}
      <div className="absolute inset-0 bg-black/20 backdrop-blur-md border-b border-orange-500/10" />

      <nav className="relative max-w-7xl mx-auto px-6 md:px-10 h-20 flex items-center justify-between">

        {/* LEFT LOGO */}
        <div className="flex items-center gap-3">
          {/* Replace with your ecell logo image later */}
          <div className="w-11 h-11 rounded-full bg-orange-500/20 border border-orange-400/40 flex items-center justify-center shadow-[0_0_20px_rgba(255,115,0,0.4)]">
            <span className="text-orange-400 font-bold text-xl">E</span>
          </div>

          <div className="leading-tight">
            <h1 className="text-white font-bold text-lg tracking-wide">
              ECELL
            </h1>
            <p className="text-orange-400 text-xs tracking-[0.3em]">
              INGISH
            </p>
          </div>
        </div>
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => {
            const isActive =
              link.href === "/"
                ? pathname === "/"
                : pathname === link.href || pathname.startsWith(`${link.href}/`);

            return (
              <Link
                key={link.href}
                href={link.href}
                className={`relative text-sm tracking-wider transition-all duration-300 ${
                  isActive
                    ? "font-medium text-orange-400"
                    : "text-white/80 hover:text-orange-400"
                }`}
              >
                {link.label}

                {isActive ? (
                  <span className="absolute -bottom-2 left-0 h-[2px] w-full bg-orange-400 shadow-[0_0_10px_rgba(255,115,0,0.8)]" />
                ) : null}
              </Link>
            );
          })}
        </div>
        {/* RIGHT LOGO */}
        <div className="flex items-center gap-3">
          {/* Replace with vignan logo later */}
          <div className="w-11 h-11 rounded-full border border-orange-400/40 bg-orange-500/10 flex items-center justify-center shadow-[0_0_20px_rgba(255,115,0,0.3)]">
            <span className="text-orange-400 font-bold text-sm">V</span>
          </div>

          <div className="hidden lg:block leading-tight text-right">
            <h2 className="text-white text-sm font-medium">
              Vignan Institute
            </h2>

            <p className="text-orange-400 text-xs tracking-widest">
              of Technology
            </p>
          </div>
        </div>
      </nav>
    </header>
  );
}
