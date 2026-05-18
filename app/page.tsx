import Navbar from "@/components/layout/Navbar";

import Hero from "@/sections/Hero";
import Insights from "@/sections/Insights";
import CoreTeam from "@/sections/CoreTeam";
import StartupStory from "@/sections/StartupStory";
import IdeaHub from "@/sections/IdeaHub";
import MissionArchive from "@/sections/MissionArchive";

export default function Home() {
  return (
    <main className="overflow-hidden">
      <Navbar />

      <Hero />

      <Insights />

      <CoreTeam />

      <StartupStory />

      <IdeaHub />

      <MissionArchive />
    </main>
  );
}
