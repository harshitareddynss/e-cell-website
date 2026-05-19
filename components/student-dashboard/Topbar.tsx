"use client";

import { Bell, Search } from "lucide-react";

export default function Topbar() {
  return (
    <header className="flex items-center justify-between mb-8">
      <div>
        <p className="text-orange-400 uppercase tracking-[0.35em] text-sm">
          STUDENT WORKSPACE
        </p>

        <h1 className="text-6xl font-bold text-white mt-3">
          Dashboard
        </h1>
      </div>

      <div className="flex items-center gap-5">
        <div className="relative">
          <Search className="absolute left-5 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />

          <input
            placeholder="Search ideas..."
            className="
              w-[420px]
              rounded-2xl
              border border-orange-500/10
              bg-black/40
              backdrop-blur-2xl
              py-5 pl-14 pr-5
              text-white
            "
          />
        </div>

        <button className="w-16 h-16 rounded-2xl border border-orange-500/15 bg-black/40 backdrop-blur-xl flex items-center justify-center">
          <Bell className="w-6 h-6 text-white" />
        </button>

        <div className="w-16 h-16 rounded-full border border-orange-500/20 bg-orange-500/10 flex items-center justify-center text-orange-400 text-2xl font-bold">
          H
        </div>
      </div>
    </header>
  );
}