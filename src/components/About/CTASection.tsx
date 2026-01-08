/* eslint-disable react/no-unescaped-entities */
"use client";
import { motion } from "framer-motion";

export const CTASection = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-[#003366]/5 dark:bg-[#00AAAA]/5" />
      <div className="container mx-auto px-4 md:px-8 lg:px-12 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2
            className="text-4xl md:text-6xl font-semibold mb-8 text-[#003366] dark:text-white"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Ready to start your project?
          </h2>
          <p className="text-lg md:text-xl text-[#003366]/70 dark:text-slate-300 max-w-3xl mx-auto mb-12">
            Let's collaborate to build software that drives your business
            forward.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full sm:w-auto px-10 py-5 bg-[#00AAAA] hover:bg-[#008888] text-white font-semibold rounded-lg text-lg shadow-lg"
            >
              Get in Touch
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full sm:w-auto px-10 py-5 bg-white dark:bg-[#00284d] border border-[#E0E0E0] dark:border-gray-700 text-[#003366] dark:text-white font-semibold rounded-lg text-lg"
            >
              View Portfolio
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
