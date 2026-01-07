"use client";

import { Easing, motion } from "framer-motion";
import { Play } from "lucide-react";

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

interface HeroMediaProps {
  imageUrl?: string;
  onPlayClick?: () => void;
}

export function HeroMedia({
  imageUrl = "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1600&q=80",
  onPlayClick,
}: HeroMediaProps) {
  return (
    <motion.div variants={itemVariants} className="mt-20 w-full">
      <motion.div
        whileHover={{ scale: 1.02, y: -5 }}
        transition={{ duration: 0.3 }}
        className="rounded-xl border border-[#E0E0E0] dark:border-[#004080] bg-white/50 dark:bg-[#00264d]/50 backdrop-blur-sm p-2 shadow-2xl"
      >
        <div
          className="w-full aspect-[21/9] bg-cover bg-center rounded-lg overflow-hidden relative"
          style={{
            backgroundImage: `linear-gradient(rgba(0, 51, 102, 0.2) 0%, rgba(0, 26, 51, 0.8) 100%), url("${imageUrl}")`,
          }}
        >
          {/* Play Button Overlay */}
          <div className="absolute inset-0 flex items-center justify-center">
            <motion.div
              whileHover={{ scale: 1.15 }}
              whileTap={{ scale: 0.9 }}
              onClick={onPlayClick}
              className="bg-[#003366]/60 backdrop-blur-md rounded-full w-20 h-20 flex items-center justify-center border border-white/20 cursor-pointer group"
            >
              <motion.div
                animate={{
                  scale: [1, 1.2, 1],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <Play className="w-10 h-10 text-white fill-white ml-1" />
              </motion.div>
            </motion.div>
          </div>

          {/* Shimmer Effect on Hover */}
          <motion.div
            initial={{ x: "-100%" }}
            whileHover={{ x: "100%" }}
            transition={{ duration: 1, ease: "easeInOut" }}
            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent pointer-events-none"
          />
        </div>
      </motion.div>
    </motion.div>
  );
}
