import Hero from "@/components/ideas/Hero";
import FeatureCards from "@/components/ideas/FeatureCards";
import DashboardStrip from "@/components/ideas/DashboardStrip";
import BottomCTA from "@/components/ideas/BottomCTA";
import Navbar from "@/components/layout/Navbar";
import SpaceBackground from "@/components/ideas/SpaceBackground";

export default function IdeasPage() {
  return (
    <main className="relative min-h-screen px-6 py-8 lg:px-10 overflow-hidden">
      <SpaceBackground />

      <div
  className="
    relative z-10
    max-w-[1600px]
    mx-auto
    rounded-[32px]
    border border-orange-500/10
    bg-black/4
    backdrop-blur-[2px]
    overflow-hidden
  "
>
        <div className="px-8 lg:px-12 pt-6">
          <Navbar />
        </div>

        <Hero />
        <FeatureCards />
        <DashboardStrip />
        <BottomCTA />
      </div>
    </main>
  );
}