"use client";

import { motion } from "framer-motion";
import { Building2, CloudCheck, Dna, Leaf, Rocket, Shield } from "lucide-react";

const partners = [
  { name: "ASTROTECH", Icon: Rocket },
  { name: "NEXFIN", Icon: Building2 },
  { name: "GENEFLOW", Icon: Dna },
  { name: "ECOCORE", Icon: Leaf },
  { name: "SHIELDX", Icon: Shield },
  { name: "SKYGRID", Icon: CloudCheck },
];

export function Partners() {
  return (
    <section
      id="trusted"
      className="w-full py-20 bg-gray-50/50 dark:bg-black/20 border-y border-gray-200 dark:border-white/5 overflow-hidden"
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-[1440px] mx-auto px-6 lg:px-10 mb-12 text-center"
      >
        <h3 className="text-xs font-bold text-gray-500 dark:text-[#94a3b8] uppercase tracking-[0.3em]">
          Strategic Partners & Enterprise Clients
        </h3>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="relative w-full"
      >
        {/* Fade edges mask */}
        <div className="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-gray-50/50 dark:from-black/20 to-transparent z-10 pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-gray-50/50 dark:from-black/20 to-transparent z-10 pointer-events-none" />

        <div className="flex whitespace-nowrap animate-marquee py-6">
          {/* First set of partners */}
          <div className="flex shrink-0 items-center justify-around gap-20 min-w-full px-10">
            {partners.map((partner) => (
              <motion.div
                key={partner.name}
                whileHover={{ scale: 1.05 }}
                className="flex items-center gap-3 grayscale opacity-40 hover:grayscale-0 hover:opacity-100 transition-all duration-500 cursor-pointer"
              >
                <partner.Icon className="w-10 h-10 text-[#003366] dark:text-[#00AAAA]" />
                <span className="text-2xl font-black tracking-tighter text-[#003366] dark:text-white">
                  {partner.name}
                </span>
              </motion.div>
            ))}
          </div>
          {/* Duplicate set for seamless loop */}
          <div className="flex shrink-0 items-center justify-around gap-20 min-w-full px-10">
            {partners.map((partner) => (
              <motion.div
                key={`${partner.name}-duplicate`}
                whileHover={{ scale: 1.05 }}
                className="flex items-center gap-3 grayscale opacity-40 hover:grayscale-0 hover:opacity-100 transition-all duration-500 cursor-pointer"
              >
                <partner.Icon className="w-10 h-10 text-[#003366] dark:text-[#00AAAA]" />
                <span className="text-2xl font-black tracking-tighter text-[#003366] dark:text-white">
                  {partner.name}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
