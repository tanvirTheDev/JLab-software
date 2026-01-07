import { CTASection } from "@/components/Homepage/CTA/CTASection";
import { HeroSection } from "@/components/Homepage/HeroSection";
import { ServiceSection } from "@/components/Homepage/ServiceSection/ServiceSection";
import { TechStackSection } from "@/components/Homepage/TechStackSection/TechStackSection";
import { WorkSection } from "@/components/Homepage/Work/Work";

export default function Home() {
  return (
    <div className="flex flex-col">
      <HeroSection />
      <TechStackSection />
      <ServiceSection />
      <WorkSection />
      <CTASection />
    </div>
  );
}
