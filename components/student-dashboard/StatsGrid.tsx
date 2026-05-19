import { Lightbulb, TrendingUp, MessageSquare, Trophy } from "lucide-react";

const stats = [
  {
    icon: Lightbulb,
    title: "Ideas Submitted",
    value: "04",
    sub: "+2 this month",
  },
  {
    icon: TrendingUp,
    title: "In Progress",
    value: "02",
    sub: "50% completion",
  },
  {
    icon: MessageSquare,
    title: "Feedback Received",
    value: "07",
    sub: "+3 new",
  },
  {
    icon: Trophy,
    title: "Badges Earned",
    value: "03",
    sub: "Keep going!",
  },
];

export default function StatsGrid() {
  return (
    <div className="grid grid-cols-4 gap-6 mt-8">
      {stats.map((stat) => {
        const Icon = stat.icon;

        return (
          <div
            key={stat.title}
            className="
              rounded-[28px]
              border border-orange-500/20
              bg-white/5
              backdrop-blur-2xl
              shadow-[0_0_30px_rgba(255,122,0,0.05)]
              p-6
            "
          >
            <div className="w-14 h-14 rounded-full bg-orange-500/10 border border-orange-500/20 flex items-center justify-center">
              <Icon className="w-6 h-6 text-orange-400" />
            </div>

            <p className="text-gray-400 mt-5">{stat.title}</p>

            <h3 className="text-5xl font-bold text-white mt-2">
              {stat.value}
            </h3>

            <p className="text-orange-300 mt-3 text-sm">
              {stat.sub}
            </p>
          </div>
        );
      })}
    </div>
  );
}