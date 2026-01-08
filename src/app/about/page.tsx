"use client";
import { CTASection } from "@/components/About/CTASection";
import { HeroSection } from "@/components/About/HeroSection";
import OurJourneySection from "@/components/About/JourneySection";
import { MissionSection } from "@/components/About/MissonSection";
import { TeamMember } from "@/components/About/TeamMember";
import { TimelineSection } from "@/components/About/TimelineSection";
import { ValuesSection } from "@/components/About/ValuesContent";
import { VideoSection } from "@/components/About/VideoSection";
import { useState } from "react";

const AboutPage = () => {
  const [isVideoPlaying, setIsVideoPlaying] = useState<boolean>(false);
  return (
    <div className="flex flex-col min-h-screen bg-white dark:bg-[#002244]">
      <HeroSection />
      <MissionSection />
      <ValuesSection />
      <VideoSection
        isPlaying={isVideoPlaying}
        setIsPlaying={setIsVideoPlaying}
      />
      <TimelineSection />
      <OurJourneySection />
      <TeamMember />
      <CTASection />
    </div>
  );
};

export default AboutPage;
