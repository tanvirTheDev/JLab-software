"use client";

import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";

export const HeroSection = () => {
  return (
    <section className="w-full px-5 py-12 md:py-20 md:px-10 flex justify-center">
      <div className="max-w-[1280px] w-full">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="relative w-full overflow-hidden rounded-2xl min-h-[480px] flex items-center justify-center p-8 md:p-12 text-center group"
        >
          {/* Background */}
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: `url("https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=1600&q=80")`,
            }}
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.7 }}
              className="absolute inset-0 bg-cover bg-center"
              style={{
                backgroundImage: `url("https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=1600&q=80")`,
              }}
            />
          </div>

          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-[#111722]/90" />

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="relative z-10 flex flex-col items-center gap-6 max-w-4xl"
          >
            <motion.span
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5 }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#135bec]/20 text-[#135bec] text-xs font-bold uppercase tracking-wider border border-[#135bec]/20"
            >
              Portfolio
            </motion.span>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="text-white text-4xl md:text-6xl lg:text-7xl font-black leading-[1.1] tracking-tight"
            >
              Building the Future,
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-slate-400">
                One Pixel at a Time
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="text-slate-300 text-lg md:text-xl font-normal leading-relaxed max-w-2xl"
            >
              A curated selection of digital products engineered for scale,
              optimized for performance, and designed for humans.
            </motion.p>

            <motion.button
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1 }}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="h-12 px-8 bg-white text-[#111722] hover:bg-slate-200 rounded-lg text-base font-bold transition-all shadow-lg flex items-center gap-2 mt-4"
            >
              Explore Case Studies
              <ArrowDown className="w-4 h-4" />
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
