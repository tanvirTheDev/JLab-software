"use client";

import { motion } from "framer-motion";

const blobVariants = {
  animate: {
    scale: [1, 1.2, 1],
    rotate: [0, 90, 0],
    opacity: [0.3, 0.5, 0.3],
  },
};

export function AnimatedBackground() {
  return (
    <div className="absolute inset-0 z-0">
      {/* Primary Blob */}
      <motion.div
        variants={blobVariants}
        animate="animate"
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-[-20%] right-[-10%] w-[600px] h-[600px] rounded-full bg-[#003366]/10 blur-[120px]"
      />

      {/* Accent Blob */}
      <motion.div
        variants={blobVariants}
        animate="animate"
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2,
        }}
        className="absolute bottom-[-20%] left-[-10%] w-[500px] h-[500px] rounded-full bg-[#00AAAA]/10 blur-[100px]"
      />
    </div>
  );
}
