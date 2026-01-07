import { HeroSection } from "@/components/Homepage/HeroSection";
import { ServiceSection } from "@/components/Homepage/ServiceSection/ServiceSection";
import { TechStackSection } from "@/components/Homepage/TechStackSection/TechStackSection";

export default function Home() {
  return (
    <div className="flex flex-col">
      <HeroSection />
      <TechStackSection />
      <ServiceSection />
    </div>
  );
}
