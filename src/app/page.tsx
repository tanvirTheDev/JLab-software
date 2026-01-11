import { CTASection } from "@/components/Homepage/CTA/CTASection";
import { HeroSection } from "@/components/Homepage/HeroSection";
import { Partners } from "@/components/Homepage/Partners/Partners";
import { ServiceSection } from "@/components/Homepage/ServiceSection/ServiceSection";
import { TechStackSection } from "@/components/Homepage/TechStackSection/TechStackSection";
import { Testimonial } from "@/components/Homepage/Testimonial/Testimonial";
import { WorkSection } from "@/components/Homepage/Work/Work";

export default function Home() {
  return (
    <div className="flex flex-col">
      <HeroSection />
      <TechStackSection />
      <ServiceSection />
      <WorkSection />
      <Partners />
      <Testimonial />
      <CTASection />
    </div>
  );
}
