/* eslint-disable react/no-unescaped-entities */
"use client";

import { motion } from "framer-motion";
import { Layers, User, Zap } from "lucide-react";

export const PhilosophySection = () => {
  const features = [
    {
      icon: User,
      title: "User-Centric Design",
      description:
        "Every pixel serves a purpose for the end-user, ensuring high engagement.",
    },
    {
      icon: Layers,
      title: "Scalable Architecture",
      description:
        "Built to grow with your business, from MVP to enterprise scale.",
    },
    {
      icon: Zap,
      title: "Performance First",
      description:
        "Optimized for speed and efficiency across all devices and networks.",
    },
  ];

  return (
    <section className="w-full px-5 py-16 md:px-10 flex justify-center bg-[#0d121c]">
      <div className="max-w-[1280px] w-full flex flex-col md:flex-row gap-12 items-center">
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex flex-col gap-6 flex-1"
        >
          <h2 className="text-white text-3xl md:text-4xl font-bold leading-tight">
            Our Design Philosophy
          </h2>
          <p className="text-slate-400 text-lg leading-relaxed">
            We don't just write code; we craft digital experiences that drive
            results. Our process is rooted in understanding the human behind the
            screen.
          </p>

          <div className="flex flex-col gap-4 mt-4">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  whileHover={{ x: 5 }}
                  className="flex gap-4"
                >
                  <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-[#135bec]/10 flex items-center justify-center text-[#135bec] border border-[#135bec]/20">
                    <Icon className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-white text-lg font-bold">
                      {feature.title}
                    </h3>
                    <p className="text-slate-500 text-sm">
                      {feature.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* Right Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex-1 w-full relative"
        >
          <div className="aspect-square w-full max-w-[500px] mx-auto rounded-2xl overflow-hidden relative shadow-2xl shadow-[#135bec]/10 border border-[#324467]">
            <motion.img
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.5 }}
              src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&q=80"
              alt="Abstract design"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-[#135bec]/40 to-transparent mix-blend-overlay" />
          </div>
        </motion.div>
      </div>
    </section>
  );
};
