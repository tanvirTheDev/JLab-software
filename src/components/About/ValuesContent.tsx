"use client";
import { motion } from "framer-motion";
import { Eye, Rocket, Shield } from "lucide-react";

export const ValuesSection = () => {
  const values = [
    {
      icon: Shield,
      title: "Uncompromising Quality",
      description:
        "We build software that is robust, secure, and ready to scale.",
    },
    {
      icon: Eye,
      title: "Radical Transparency",
      description:
        "No hidden fees, no tech jargon. Open communication at every step.",
    },
    {
      icon: Rocket,
      title: "Velocity & Agility",
      description: "We work in rapid sprints to deliver value quickly.",
    },
  ];

  return (
    <section className="py-24 md:py-36">
      <div className="container mx-auto px-4 md:px-8 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-20"
        >
          <h2
            className="text-4xl md:text-5xl font-semibold mb-6 text-[#003366] dark:text-white"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Core Values
          </h2>
          <p className="text-lg text-[#003366]/70 dark:text-slate-400">
            The principles that guide every line of code we write.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {values.map((value, i) => {
            const Icon = value.icon;
            return (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2 }}
                whileHover={{ y: -10 }}
                className="group p-10 rounded-3xl bg-white dark:bg-[#00284d] border border-[#E0E0E0]/70 dark:border-gray-700 hover:border-[#00AAAA]/50 transition-all hover:shadow-xl"
              >
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                  className="w-14 h-14 rounded-xl bg-[#00AAAA]/10 flex items-center justify-center text-[#00AAAA] mb-8"
                >
                  <Icon className="w-8 h-8" />
                </motion.div>
                <h3
                  className="text-2xl font-bold mb-4 text-[#003366] dark:text-white"
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  {value.title}
                </h3>
                <p className="text-[#003366]/80 dark:text-slate-300">
                  {value.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
