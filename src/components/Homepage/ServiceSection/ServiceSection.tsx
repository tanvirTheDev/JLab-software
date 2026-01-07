"use client";
import { motion, type Variants } from "framer-motion";
import { Brush, Cloud, PanelsTopLeft, Smartphone } from "lucide-react";

const services = [
  {
    title: "Custom Web Dev",
    description:
      "High-performance websites built with modern frameworks like React and Next.js.",
    Icon: PanelsTopLeft,
  },
  {
    title: "Mobile Apps",
    description:
      "Native and cross-platform mobile applications for iOS and Android.",
    Icon: Smartphone,
  },
  {
    title: "UI/UX Design",
    description:
      "User-centric design focused on conversion, accessibility, and usability.",
    Icon: Brush,
  },
  {
    title: "Cloud Infra",
    description:
      "Scalable serverless architectures and robust cloud management solutions.",
    Icon: Cloud,
  },
];

const containerVariants: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.16, 1, 0.3, 1],
      when: "beforeChildren",
      staggerChildren: 0.12,
    },
  },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 30, scale: 0.96 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

export function ServiceSection() {
  return (
    <section
      id="services"
      className="py-24 px-6 lg:px-10 max-w-[1280px] mx-auto"
    >
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        className="flex flex-col gap-12"
      >
        <div className="flex flex-col gap-4 max-w-[720px]">
          <h2 className="text-[#003366] dark:text-white text-3xl font-bold leading-tight md:text-4xl">
            Our Services
          </h2>
          <p className="text-[#637588] dark:text-[#94a3b8] text-lg font-normal leading-relaxed">
            Comprehensive digital solutions designed to scale. We handle the
            complexity so you can focus on the business.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service) => (
            <motion.article
              key={service.title}
              variants={cardVariants}
              whileHover={{
                y: -6,
                scale: 1.02,
                boxShadow: "0 24px 45px -18px rgba(0, 51, 102, 0.45)",
              }}
              className="group flex flex-col gap-4 p-6 rounded-xl border border-[#E0E0E0] dark:border-[#002a4d] bg-white dark:bg-[#001426] hover:border-[#00AAAA]/60 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-lg bg-[#00AAAA]/10 flex items-center justify-center text-[#00AAAA] group-hover:bg-[#00AAAA] group-hover:text-white transition-colors duration-300">
                <service.Icon className="w-6 h-6" />
              </div>

              <div className="flex flex-col gap-2">
                <h3 className="text-[#003366] dark:text-white text-lg font-bold">
                  {service.title}
                </h3>
                <p className="text-[#637588] dark:text-[#94a3b8] text-sm leading-relaxed">
                  {service.description}
                </p>
              </div>
            </motion.article>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
