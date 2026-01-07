"use client";

import { Easing, motion } from "framer-motion";

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.16, 1, 0.3, 1] as unknown as Easing,
    },
  },
};

export function HeroContent() {
  return (
    <motion.div
      variants={itemVariants}
      className="flex flex-col gap-6 max-w-[960px]"
    >
      <h1 className="text-[#003366] dark:text-white text-5xl font-black leading-[1.1] tracking-[-0.033em] md:text-6xl lg:text-7xl">
        Building the{" "}
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#003366] to-[#00AAAA] dark:from-white dark:to-[#00AAAA] inline-block">
          Future
        </span>{" "}
        of <br className="hidden md:block" />
        Digital Software.
      </h1>

      <h2 className="text-[#637588] dark:text-[#94a3b8] text-lg font-medium leading-relaxed max-w-[720px] mx-auto md:text-xl">
        We craft high-performance web applications and software solutions
        tailored for your business growth.
      </h2>
    </motion.div>
  );
}
