"use client";
import { motion } from "framer-motion";

export const TimelineSection = () => {
  return (
    <section className="py-24 md:py-36">
      <div className="container mx-auto px-4 md:px-8 lg:px-12">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-semibold text-center mb-20 text-[#003366] dark:text-white"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          Our Journey
        </motion.h2>
        {/* Timeline content here */}
      </div>
    </section>
  );
};
