"use client";
import { motion } from "framer-motion";
import { Play } from "lucide-react";

export const VideoSection = ({
  isPlaying,
  setIsPlaying,
}: {
  isPlaying: boolean;
  setIsPlaying: (isPlaying: boolean) => void;
}) => {
  return (
    <section className="py-20 bg-[#E0E0E0]/40 dark:bg-[#00284d]">
      <div className="container mx-auto px-4 md:px-8 lg:px-12 max-w-5xl text-center space-y-10">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl font-semibold text-[#003366] dark:text-white"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          Life at JLab
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="relative w-full aspect-video rounded-3xl overflow-hidden shadow-2xl bg-slate-900 cursor-pointer group"
          onClick={() => setIsPlaying(true)}
        >
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1200&q=80')",
            }}
          >
            <div className="absolute inset-0 bg-[#003366]/60 group-hover:bg-[#003366]/40 transition-colors" />
          </div>
          <div className="absolute inset-0 flex items-center justify-center">
            <motion.button
              whileHover={{ scale: 1.15 }}
              whileTap={{ scale: 0.9 }}
              className="w-24 h-24 bg-[#00AAAA]/90 text-white rounded-full flex items-center justify-center shadow-lg"
            >
              <Play className="w-12 h-12 fill-white ml-1" />
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
