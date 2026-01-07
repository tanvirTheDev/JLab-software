"use client";

import { motion } from "framer-motion";
import { AnimatedBackground } from "./AnimatedBackground";
import { HeroContent } from "./HeroContent";

import { HeroButtons } from "./HeroButton";
import { HeroMedia } from "./HeroMedia";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
};

export function HeroSection() {
  const handleStartProject = () => {
    console.log("Start Project clicked");
    // Add your logic here
  };

  const handleViewWork = () => {
    console.log("View Work clicked");
    // Scroll to work section
    document.getElementById("work")?.scrollIntoView({ behavior: "smooth" });
  };

  const handlePlayVideo = () => {
    console.log("Play video clicked");
    // Open video modal or navigate to video
  };

  return (
    <section className="relative w-full overflow-hidden bg-white dark:bg-[#001a33]">
      {/* Animated Background */}
      <AnimatedBackground />

      {/* Content Container */}
      <div className="relative z-10 flex flex-col justify-center px-6 lg:px-10 py-20 lg:py-32 max-w-[1280px] mx-auto">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col gap-8 md:gap-12 text-center items-center"
        >
          <HeroContent />
          <HeroButtons
            onStartProject={handleStartProject}
            onViewWork={handleViewWork}
          />
          <HeroMedia onPlayClick={handlePlayVideo} />
        </motion.div>
      </div>
    </section>
  );
}
