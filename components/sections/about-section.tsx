"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

export function AboutSection() {
  return (
    <section className="py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
              <Image
                src="https://hexa-bd.com/wp-content/uploads/2026/02/IMG_20250917_160601-scaled.jpg"
                alt="Hexa Engineering Team"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            {/* Stats badge */}
            <div className="absolute -bottom-6 -right-6 bg-primary text-primary-foreground rounded-2xl p-6 shadow-xl">
              <p className="text-3xl font-bold">10+</p>
              <p className="text-sm opacity-90">Years Experience</p>
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className="inline-flex items-center gap-2 text-primary font-medium text-sm mb-4 uppercase tracking-wider">
              <span className="w-8 h-0.5 bg-primary" />
              About Us
            </span>
            <h2 className="text-3xl lg:text-4xl font-bold mb-6 leading-tight">
              Engineering Excellence for a Sustainable Future
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Hexa Engineering Limited is a premier engineering consultancy firm
              in Bangladesh dedicated to transforming the industrial landscape
              through energy efficiency, safety, and sustainability. We specialize
              in identifying hidden inefficiencies in industrial operations and
              providing engineering solutions that reduce costs, ensure compliance,
              and lower carbon footprints.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8">
              Bridging the gap between engineering precision and sustainable
              development, we serve as a strategic partner to the Textile, RMG,
              Pharmaceutical, and Heavy Industrial sectors.
            </p>

            {/* Mission/Vision */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              <div className="p-4 rounded-xl bg-primary/5 border border-primary/10">
                <h4 className="font-semibold text-sm mb-1">Our Mission</h4>
                <p className="text-xs text-muted-foreground">
                  Empower industries through data-driven energy audits and optimization.
                </p>
              </div>
              <div className="p-4 rounded-xl bg-secondary/5 border border-secondary/10">
                <h4 className="font-semibold text-sm mb-1">Our Vision</h4>
                <p className="text-xs text-muted-foreground">
                  Bangladesh&apos;s leading engineering consultancy for sustainable growth.
                </p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg">
                <Link href="/about">
                  Learn More About Us
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="/contact">Contact Us</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
