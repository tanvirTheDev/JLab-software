"use client";

import { motion, type Variants } from "framer-motion";

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeInOut",
    },
  },
};

interface HeroButtonsProps {
  onStartProject?: () => void;
  onViewWork?: () => void;
}

export function HeroButtons({ onStartProject, onViewWork }: HeroButtonsProps) {
  return (
    <motion.div
      variants={itemVariants}
      className="flex flex-wrap gap-4 justify-center"
    >
      {/* Primary CTA */}
      <motion.button
        whileHover={{
          scale: 1.05,
          boxShadow: "0 20px 25px -5px rgba(0, 51, 102, 0.3)",
        }}
        whileTap={{ scale: 0.95 }}
        onClick={onStartProject}
        className="flex min-w-[160px] cursor-pointer items-center justify-center rounded-lg h-12 px-6 bg-[#003366] hover:bg-[#002244] text-white text-base font-bold shadow-lg shadow-[#003366]/30 transition-colors duration-200"
      >
        <span>Start a Project</span>
      </motion.button>

      {/* Secondary CTA */}
      <motion.button
        whileHover={{
          scale: 1.05,
        }}
        whileTap={{ scale: 0.95 }}
        onClick={onViewWork}
        className="flex min-w-[160px] cursor-pointer items-center justify-center rounded-lg h-12 px-6 border border-[#E0E0E0] dark:border-[#004080] hover:bg-[#F5F7FA] dark:hover:bg-white/5 text-[#003366] dark:text-white text-base font-bold transition-all duration-200"
      >
        <span>View Our Work</span>
      </motion.button>
    </motion.div>
  );
}
