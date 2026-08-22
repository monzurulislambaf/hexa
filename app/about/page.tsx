import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Shield, Target, Eye, Award, Users, Building2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SITE_CONFIG } from "@/lib/constants";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about Hexa Engineering Limited - Bangladesh's premier engineering consultancy for energy efficiency, safety, and sustainability.",
};

const values = [
  {
    icon: Shield,
    title: "Integrity",
    description:
      "We uphold the highest standards of professional integrity in every project we undertake.",
  },
  {
    icon: Target,
    title: "Excellence",
    description:
      "We strive for engineering excellence through continuous improvement and innovation.",
  },
  {
    icon: Eye,
    title: "Sustainability",
    description:
      "Environmental stewardship is at the core of everything we do.",
  },
  {
    icon: Users,
    title: "Collaboration",
    description:
      "We work as strategic partners with our clients to achieve shared goals.",
  },
  {
    icon: Award,
    title: "Quality",
    description:
      "We deliver measurable results that exceed expectations.",
  },
  {
    icon: Building2,
    title: "Innovation",
    description:
      "We leverage cutting-edge technology and methodologies for optimal outcomes.",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative py-20 lg:py-32 bg-gradient-to-br from-primary/5 to-secondary/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-2 text-primary font-medium text-sm mb-4 uppercase tracking-wider">
              <span className="w-8 h-0.5 bg-primary" />
              About Us
            </span>
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">
              Engineering Excellence for a Sustainable Future
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Hexa Engineering Limited is a premier engineering consultancy firm
              in Bangladesh dedicated to transforming the industrial landscape
              through energy efficiency, safety, and sustainability.
            </p>
          </div>
        </div>
      </section>

      {/* Company Profile */}
      <section className="py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Our Story</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                We specialize in identifying hidden inefficiencies in industrial
                operations and providing engineering solutions that reduce costs,
                ensure compliance, and lower carbon footprints.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-8">
                Bridging the gap between engineering precision and sustainable
                development, we serve as a strategic partner to the Textile, RMG,
                Pharmaceutical, and Heavy Industrial sectors. Our team combines
                local expertise with global standards (ASHRAE, NFPA, BNBC) to
                deliver data-driven audits and implementation support.
              </p>

              {/* Company Info */}
              <div className="grid grid-cols-2 gap-4">
                {Object.entries(SITE_CONFIG.company).map(([key, value]) => (
                  <div key={key} className="p-3 rounded-lg bg-muted/50">
                    <p className="text-xs text-muted-foreground capitalize">
                      {key.replace(/([A-Z])/g, " $1").trim()}
                    </p>
                    <p className="text-sm font-medium">{value}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
                <Image
                  src="https://hexa-bd.com/wp-content/uploads/2026/02/IMG_20250917_160601-scaled.jpg"
                  alt="Hexa Engineering Team"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 lg:py-28 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-8 bg-card rounded-2xl ring-1 ring-border">
              <div className="h-14 w-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                <Target className="h-7 w-7 text-primary" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-primary mt-2 shrink-0" />
                  Empower industries by reducing energy waste and operational costs
                  through data-driven energy audits and optimization.
                </li>
                <li className="flex items-start gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-primary mt-2 shrink-0" />
                  Ensure safety through the implementation of international safety
                  codes (BNBC, NFPA, electrical standards).
                </li>
                <li className="flex items-start gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-primary mt-2 shrink-0" />
                  Drive sustainability and green financing by guiding industries
                  towards renewable energy and carbon footprint reduction.
                </li>
                <li className="flex items-start gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-primary mt-2 shrink-0" />
                  Reduce carbon emissions through accurate GHG accounting and
                  decarbonization technologies.
                </li>
              </ul>
            </div>

            <div className="p-8 bg-card rounded-2xl ring-1 ring-border">
              <div className="h-14 w-14 rounded-xl bg-secondary/10 flex items-center justify-center mb-6">
                <Eye className="h-7 w-7 text-secondary" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-secondary mt-2 shrink-0" />
                  To be Bangladesh&apos;s leading engineering consultancy for
                  sustainable industrial growth.
                </li>
                <li className="flex items-start gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-secondary mt-2 shrink-0" />
                  To drive the nation towards energy independence and safety
                  excellence.
                </li>
                <li className="flex items-start gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-secondary mt-2 shrink-0" />
                  To set the benchmark for engineering integrity, innovation, and
                  environmental stewardship in South Asia.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Our Core Values</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              The principles that guide our work and define our commitment to
              excellence.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map((value) => {
              const Icon = value.icon;
              return (
                <div
                  key={value.title}
                  className="p-6 bg-card rounded-xl ring-1 ring-border hover:ring-primary/30 transition-all duration-300"
                >
                  <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-semibold text-lg mb-2">{value.title}</h3>
                  <p className="text-sm text-muted-foreground">
                    {value.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Ready to Work With Us?
          </h2>
          <p className="text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
            Let us help you optimize your operations, ensure compliance, and
            achieve your sustainability goals.
          </p>
          <Button asChild size="lg" className="bg-white text-primary hover:bg-white/90">
            <Link href="/contact">Get in Touch</Link>
          </Button>
        </div>
      </section>
    </>
  );
}
