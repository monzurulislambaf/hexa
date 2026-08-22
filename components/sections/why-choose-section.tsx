"use client";

import { motion } from "framer-motion";
import { whyChooseUs } from "@/lib/data";

export function WhyChooseSection() {
  return (
    <section className="py-20 lg:py-28">
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
            Why Choose Us
            <span className="w-8 h-0.5 bg-primary" />
          </span>
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            Engineering Excellence You Can Trust
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Our commitment to quality, innovation, and sustainability sets us apart
            in the engineering consultancy industry.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {whyChooseUs.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group p-6 bg-card rounded-xl ring-1 ring-border hover:ring-primary/30 transition-all duration-300 hover:shadow-lg"
              >
                <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-white transition-all duration-300">
                  <Icon className="h-6 w-6 text-primary group-hover:text-white transition-colors" />
                </div>
                <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
