"use client";

import { motion } from "framer-motion";
import { Rocket } from "lucide-react";

export const CTASection = () => {
  return (
    <section className="w-full px-5 py-20 md:px-10 flex justify-center border-t border-[#324467]/50 bg-[#0b0f17]">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="max-w-[800px] w-full flex flex-col items-center text-center gap-8"
      >
        <h2 className="text-white text-4xl md:text-5xl font-black tracking-tight">
          Ready to build your vision?
        </h2>
        <p className="text-slate-400 text-lg max-w-2xl">
          Whether you need a complete product overhaul or a new digital
          experience from scratch, JLab Software is ready to partner with you.
        </p>
        <motion.button
          whileHover={{
            scale: 1.05,
            boxShadow: "0 20px 40px -10px rgba(19, 91, 236, 0.4)",
          }}
          whileTap={{ scale: 0.95 }}
          className="bg-[#135bec] hover:bg-[#135bec]/90 text-white text-lg font-bold h-14 px-10 rounded-xl transition-all shadow-xl shadow-[#135bec]/30 flex items-center gap-2"
        >
          Start a Project
          <Rocket className="w-5 h-5" />
        </motion.button>
      </motion.div>
    </section>
  );
};
