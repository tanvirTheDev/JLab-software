"use client";

import { motion, type Variants } from "framer-motion";

const workItems = [
  {
    title: "Fintech Dashboard",
    tag: "Web Application",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBVoXLYzbCbdU3l7PjZ-WFnJSw030JQgRlPNzeiOVmgak4AJwooyX7pFVrQ56Tc0DcDcckIrpy-xCq7yKfapghoXIivDcxOTVbyui17Ui4YeIiixmovhIbzq00XACA7QijRhLyNxVI65j9yhY9Hpc8UiQ4IMs8a7N2IlYrVC3NbRCfRwrmOv7raCApqClRgSlAIBTzyTID0djilmoCOk1-UuxsVf9AEOPSLelAVY6g9JRWo7650zfcDGd_l5o77SVDgRShWiHqiNeo",
    alt: "Modern fintech dashboard application on a laptop screen",
  },
  {
    title: "Swift Pay App",
    tag: "iOS & Android",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCDxvNP7spSBuiRdgAX6QOxlxZtozQPY4otp5KJtXlY57MJ6jxk0KtSHVDeZUqbkH9AcMYZMus1uylTTOqZWC3FQiWzIdheGgxfoy4XD0XgXi9_pFiveLDRB3x6myN77SyEVx6ZFpTTd-Of_S1pc9lygW3Cz9YBLqTmz7FifquRwvFKx62ZfslTi9rOjOxR2A6Dip27o9xAQrEsfUYzj22Q8l-XQUttr29JeMYCTFxCMHvpJIHiPQhyX_XEXslPwfhWuKTUL6NNjbU",
    alt: "Mobile banking app interface on a smartphone",
  },
  {
    title: "DevTools API",
    tag: "Backend Infrastructure",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCzvs5R8a4CVLSbxRngpm4AnQPmGv3pEnXEBkxDJaC-DegTqI7_TLNc55SnIaoETnK5_xJFLMdYpij4B3rj25QU17OjNy0gswB4wv1J7q4EB96XSKyhUDE1g4pNJFZ-ZY69Qmid2272liEtKOb-0xCMPjr8mZgh8LA0_0-AE_bf9eJeIWGfyUv2PSaD-eh74sAiucFIaAzH0eNp5uTorleJ5EAeUGCe9bOH88mpOf4yVAYk6-bCOF8Fu4T6VCwx9dWj6cs1rT0Cijc",
    alt: "Abstract colorful code syntax on a dark screen",
  },
];

const sectionVariants: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: "easeOut",
      when: "beforeChildren",
      staggerChildren: 0.15,
    },
  },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

export function WorkSection() {
  return (
    <section
      id="work"
      className="py-12 bg-[#021627] dark:bg-[#021627]/90 border-y border-border"
    >
      <motion.div
        className="px-6 lg:px-10 max-w-[1280px] mx-auto"
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div className="flex flex-col gap-2">
            <h2 className="text-[#f9fbff] text-3xl font-bold leading-tight">
              Selected Work
            </h2>
            <p className="text-[#94a3b8]">
              A glimpse into our recent software deliveries.
            </p>
          </div>
          <button className="text-[#00AAAA] font-bold flex items-center gap-1 hover:gap-2 transition-all hover:text-[#00c0c0]">
            <span>View all projects</span>
            <span className="material-symbols-outlined text-sm">
              arrow_forward
            </span>
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {workItems.map((item) => (
            <motion.article
              key={item.title}
              variants={cardVariants}
              whileHover={{ y: -4 }}
              className="group cursor-pointer flex flex-col gap-3"
            >
              <div className="w-full aspect-[4/3] bg-gray-200 dark:bg-gray-800 rounded-xl overflow-hidden relative border border-border">
                <motion.div
                  className="w-full h-full bg-cover bg-center"
                  style={{ backgroundImage: `url("${item.image}")` }}
                  transition={{ duration: 0.5 }}
                  whileHover={{ scale: 1.05 }}
                />
                <div className="absolute inset-0 bg-[#003366]/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <span className="px-4 py-2 bg-white text-[#003366] text-sm font-bold rounded-full">
                    View Case Study
                  </span>
                </div>
              </div>

              <div className="flex flex-col">
                <h3 className="text-[#f9fbff] font-bold text-lg group-hover:text-[#00AAAA] transition-colors">
                  {item.title}
                </h3>
                <span className="text-sm text-[#94a3b8]">{item.tag}</span>
              </div>
            </motion.article>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
