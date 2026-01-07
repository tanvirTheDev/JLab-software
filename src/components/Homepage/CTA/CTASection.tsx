"use client";

import { motion, type Variants } from "framer-motion";

const containerVariants: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: "easeOut",
      when: "beforeChildren",
      staggerChildren: 0.12,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

export function CTASection() {
  return (
    <section
      id="about"
      className="py-20 lg:py-32 px-6 lg:px-10 relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-[#003366]/5 dark:bg-[#003366]/10" />
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#003366]/20 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/3" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#00AAAA]/20 rounded-full blur-[80px] translate-y-1/3 -translate-x-1/4" />

      <motion.div
        className="relative z-10 max-w-[960px] mx-auto text-center flex flex-col items-center gap-8"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.35 }}
      >
        <motion.h2
          variants={itemVariants}
          className="text-[#003366] dark:text-white text-4xl font-black leading-tight tracking-tight md:text-5xl"
        >
          Code meets creativity.
        </motion.h2>

        <motion.p
          variants={itemVariants}
          className="text-[#637588] dark:text-[#94a3b8] text-lg md:text-xl font-normal leading-relaxed max-w-[720px]"
        >
          We combine technical expertise with creative vision to deliver
          software that stands out in a crowded market. Let&apos;s build
          something extraordinary together.
        </motion.p>

        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row gap-4 mt-4 w-full sm:w-auto"
        >
          <motion.button
            whileHover={{
              scale: 1.03,
              y: -2,
              boxShadow: "0 18px 35px -18px rgba(0, 170, 170, 0.7)",
            }}
            whileTap={{ scale: 0.97 }}
            className="flex w-full sm:w-auto min-w-[160px] cursor-pointer items-center justify-center rounded-lg h-12 px-6 bg-[#00AAAA] hover:bg-[#00c0c0] text-white text-base font-bold shadow-lg shadow-[#00AAAA]/30 transition-all"
          >
            <span>Get in Touch</span>
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.03, y: -2 }}
            whileTap={{ scale: 0.97 }}
            className="flex w-full sm:w-auto min-w-[160px] cursor-pointer items-center justify-center rounded-lg h-12 px-6 bg-white dark:bg-[#001426] hover:bg-gray-100 dark:hover:bg-[#003366]/20 text-[#003366] dark:text-white text-base font-bold transition-all border border-border"
          >
            <span>Learn More About Us</span>
          </motion.button>
        </motion.div>
      </motion.div>
    </section>
  );
}
