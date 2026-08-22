import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { services } from "@/lib/data";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Explore our comprehensive engineering consultancy services including energy audit, safety compliance, sustainability, ETP/STP, and carbon accounting.",
};

export default function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <section className="py-20 lg:py-32 bg-gradient-to-br from-primary/5 to-secondary/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-2 text-primary font-medium text-sm mb-4 uppercase tracking-wider">
              <span className="w-8 h-0.5 bg-primary" />
              Our Services
            </span>
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">
              Comprehensive Engineering Solutions
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              From energy audits to sustainability consulting, we deliver end-to-end
              engineering solutions that drive efficiency, ensure compliance, and
              reduce environmental impact.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service) => {
              const Icon = service.icon;
              return (
                <Link
                  key={service.id}
                  href={`/services/${service.slug}`}
                  className="group p-8 bg-card rounded-2xl ring-1 ring-border hover:ring-primary/30 transition-all duration-300 hover:shadow-lg"
                >
                  <div className="flex items-start gap-6">
                    <div className="h-16 w-16 rounded-xl bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary group-hover:text-white transition-all duration-300">
                      <Icon className="h-8 w-8 text-primary group-hover:text-white transition-colors" />
                    </div>
                    <div>
                      <h2 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                        {service.title}
                      </h2>
                      <p className="text-muted-foreground mb-4">
                        {service.description}
                      </p>
                      <span className="inline-flex items-center gap-1 text-sm font-medium text-primary">
                        Learn More
                        <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                      </span>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
