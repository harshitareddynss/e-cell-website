"use client";

import {
  LayoutDashboard,
  Lightbulb,
  TrendingUp,
  MessageSquare,
  Users,
  Bell,
  Settings,
  LogOut,
} from "lucide-react";

const navItems = [
  { icon: LayoutDashboard, label: "Dashboard", active: true },
  { icon: Lightbulb, label: "My Ideas" },
  { icon: TrendingUp, label: "Progress" },
  { icon: MessageSquare, label: "Feedback" },
  { icon: Users, label: "Mentors" },
  { icon: Bell, label: "Notifications" },
  { icon: Settings, label: "Settings" },
];

export default function Sidebar() {
  return (
    <aside
      className="
        relative
        w-[290px]
        min-h-screen
        border-r border-orange-500/10
        bg-black/40
        backdrop-blur-3xl
        px-6 py-8
        overflow-hidden
      "
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,120,0,0.18),transparent_35%)]" />

      <div className="relative z-10">
        <div className="mb-14">
          <div className="w-24 h-24 rounded-full border border-orange-500/30 bg-orange-500/10 flex items-center justify-center text-orange-400 text-5xl font-bold shadow-[0_0_45px_rgba(255,122,0,0.25)]">
            E
          </div>

          <h2 className="mt-8 text-5xl font-bold text-white">
            Idea Hub
          </h2>

          <p className="text-orange-300 mt-2 text-lg">
            Student Dashboard
          </p>
        </div>

        <nav className="space-y-4">
          {navItems.map((item) => {
            const Icon = item.icon;

            return (
              <button
                key={item.label}
                className={`
                  w-full flex items-center gap-4
                  rounded-2xl px-5 py-5
                  transition
                  ${
                    item.active
                      ? "bg-orange-500/10 border border-orange-500/20 shadow-[0_0_30px_rgba(255,122,0,0.15)] text-white"
                      : "text-gray-300 hover:bg-orange-500/5 hover:text-white"
                  }
                `}
              >
                <Icon className="w-6 h-6" />
                <span className="text-lg">{item.label}</span>
              </button>
            );
          })}
        </nav>

        <button className="mt-16 w-full flex items-center gap-4 rounded-2xl px-5 py-5 border border-red-500/10 text-red-400 hover:bg-red-500/5 transition">
          <LogOut className="w-6 h-6" />
          <span className="text-lg">Logout</span>
        </button>
      </div>
    </aside>
  );
}