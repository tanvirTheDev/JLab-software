"use client";
import { motion } from "framer-motion";

export const MissionSection = () => {
  return (
    <section className="py-20 bg-[#E0E0E0]/40 dark:bg-[#00284d] border-y border-[#E0E0E0] dark:border-gray-800">
      <div className="container mx-auto px-4 md:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative rounded-3xl overflow-hidden aspect-[16/11] shadow-2xl"
          >
            <div className="absolute inset-0 bg-gradient-to-t from-[#003366]/80 to-transparent z-10" />
            <motion.img
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.7 }}
              alt="Team collaboration"
              className="w-full h-full object-cover"
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1200&q=80"
            />
            <div className="absolute bottom-8 left-8 z-20">
              <p className="text-white text-base font-medium opacity-90 mb-2">
                Established 2018
              </p>
              <h3
                className="text-white text-3xl font-bold"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                Our Headquarters
              </h3>
            </div>
          </motion.div>

          <div className="space-y-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2
                className="text-4xl font-semibold mb-6 text-[#003366] dark:text-white"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                Our Mission
              </h2>
              <p className="text-[#003366]/80 dark:text-slate-300 text-lg leading-relaxed">
                Our mission is to empower businesses by demystifying technology.
                We believe that software shouldn't just be functional; it should
                be intuitive, scalable, and a joy to use.
              </p>
            </motion.div>

            <div className="grid grid-cols-2 gap-8">
              {[
                { number: "50+", label: "Enterprise Clients" },
                { number: "120+", label: "Projects Delivered" },
              ].map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  whileHover={{ y: -5 }}
                  className="p-6 rounded-2xl bg-white dark:bg-[#003366] border border-[#E0E0E0] dark:border-gray-700 shadow-md"
                >
                  <h4
                    className="text-4xl font-bold text-[#00AAAA] mb-2"
                    style={{ fontFamily: "'Playfair Display', serif" }}
                  >
                    {stat.number}
                  </h4>
                  <p className="text-base text-[#003366]/60 dark:text-slate-400 font-medium">
                    {stat.label}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
