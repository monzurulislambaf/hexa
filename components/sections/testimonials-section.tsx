"use client";

import { motion } from "framer-motion";
import { TestimonialSlider } from "@/components/sliders/testimonial-slider";

export function TestimonialsSection() {
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
            Testimonials
            <span className="w-8 h-0.5 bg-primary" />
          </span>
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            What Our Clients Say
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Trusted by leading industries across Bangladesh for engineering excellence
            and sustainable solutions.
          </p>
        </motion.div>

        {/* Testimonial Slider */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <TestimonialSlider />
        </motion.div>
      </div>
    </section>
  );
}
