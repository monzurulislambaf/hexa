"use client";

import { motion } from "framer-motion";
import { Leaf, Zap, Cloud, TreePine } from "lucide-react";

const highlights = [
  {
    icon: Leaf,
    title: "Green Engineering",
    description: "Sustainable design solutions that minimize environmental impact while maximizing operational efficiency.",
  },
  {
    icon: Cloud,
    title: "Carbon Reduction",
    description: "Comprehensive GHG accounting and decarbonization strategies aligned with global climate goals.",
  },
  {
    icon: Zap,
    title: "Energy Saving",
    description: "Data-driven energy optimization that reduces costs by 15-40% across industrial operations.",
  },
  {
    icon: TreePine,
    title: "ESG Solutions",
    description: "Environmental, Social, and Governance consulting for responsible business practices.",
  },
];

export function SustainabilitySection() {
  return (
    <section className="py-20 lg:py-28 bg-gradient-to-br from-sustainability-green-dark via-sustainability-green to-sustainability-green-dark text-white relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full translate-x-1/2 translate-y-1/2" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-flex items-center gap-2 text-white/80 font-medium text-sm mb-4 uppercase tracking-wider">
            <span className="w-8 h-0.5 bg-white/60" />
            Sustainability
            <span className="w-8 h-0.5 bg-white/60" />
          </span>
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            Building a Greener Future Together
          </h2>
          <p className="text-white/80 max-w-2xl mx-auto">
            We are committed to helping industries transition to sustainable practices
            through innovative engineering solutions and environmental stewardship.
          </p>
        </motion.div>

        {/* Highlights */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {highlights.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="p-6 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-all duration-300"
              >
                <div className="h-12 w-12 rounded-xl bg-white/20 flex items-center justify-center mb-4">
                  <Icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
                <p className="text-sm text-white/80">{item.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
