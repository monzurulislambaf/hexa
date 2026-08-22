import { HeroSlider } from "@/components/sliders/hero-slider";
import { AboutSection } from "@/components/sections/about-section";
import { ServicesSection } from "@/components/sections/services-section";
import { WhyChooseSection } from "@/components/sections/why-choose-section";
import { IndustriesSection } from "@/components/sections/industries-section";
import { ProjectsSection } from "@/components/sections/projects-section";
import { StatsSection } from "@/components/sections/stats-section";
import { SustainabilitySection } from "@/components/sections/sustainability-section";
import { TestimonialsSection } from "@/components/sections/testimonials-section";
import { CTASection } from "@/components/sections/cta-section";
import { ClientLogoSlider } from "@/components/sliders/client-logo-slider";

export default function HomePage() {
  return (
    <>
      <HeroSlider />
      <StatsSection />
      <AboutSection />
      <ServicesSection />
      <WhyChooseSection />
      <IndustriesSection />
      <ProjectsSection />
      <SustainabilitySection />
      <TestimonialsSection />
      <div className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-sm text-muted-foreground mb-8 uppercase tracking-wider font-medium">
            Trusted by Leading Industries
          </p>
          <ClientLogoSlider />
        </div>
      </div>
      <CTASection />
    </>
  );
}
