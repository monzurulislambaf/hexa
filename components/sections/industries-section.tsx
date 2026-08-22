"use client";

import { motion } from "framer-motion";
import { industries } from "@/lib/data";

export function IndustriesSection() {
  return (
    <section className="py-20 lg:py-28 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-flex items-center gap-2 text-primary font-medium text-sm mb-4 uppercase tracking-wider">
            <span className="w-8 h-0.5 bg-primary" />
            Industries We Serve
            <span className="w-8 h-0.5 bg-primary" />
          </span>
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            Trusted Across Industries
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            We serve a diverse range of industries with tailored engineering solutions
            that address sector-specific challenges.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {industries.map((industry, index) => (
            <motion.div
              key={industry.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group p-8 bg-card rounded-xl ring-1 ring-border hover:ring-primary/30 transition-all duration-300 hover:shadow-lg text-center"
            >
              <span className="text-4xl mb-4 block">{industry.icon}</span>
              <h3 className="font-semibold text-lg mb-2">{industry.name}</h3>
              <p className="text-sm text-muted-foreground">{industry.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
