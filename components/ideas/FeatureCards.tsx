"use client";

import { Rocket, TrendingUp, Users } from "lucide-react";

const cards = [
  {
    icon: Rocket,
    title: "Submit Ideas",
    desc: "Share your innovative concepts with the E-Cell startup ecosystem.",
  },
  {
    icon: TrendingUp,
    title: "Track Progress",
    desc: "Monitor your submission journey, reviews, and progress in real time.",
  },
  {
    icon: Users,
    title: "Get Mentored",
    desc: "Receive guidance from founders, experts, and startup mentors.",
  },
];

export default function FeatureCards() {
  return (
    <section className="px-8 lg:px-12 -mt-20 relative z-20">
      <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8">
        {cards.map((card) => {
          const Icon = card.icon;

          return (
            <div
              key={card.title}
              className="
                rounded-[28px]
                border border-orange-500/20
                bg-white/5
                backdrop-blur-2xl
                shadow-[0_0_40px_rgba(255,122,0,0.08)]
                p-8
                hover:scale-[1.02]
                transition
              "
            >
              <div className="w-16 h-16 rounded-full border border-orange-500/20 bg-orange-500/10 flex items-center justify-center">
                <Icon className="w-7 h-7 text-orange-400" />
              </div>

              <h3 className="text-2xl font-bold text-white mt-6">
                {card.title}
              </h3>

              <p className="text-gray-300 mt-4 leading-relaxed">
                {card.desc}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
}