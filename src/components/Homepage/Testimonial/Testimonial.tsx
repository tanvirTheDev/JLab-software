"use client";

import { motion, type Variants } from "framer-motion";
import { Building2, Rocket, Star } from "lucide-react";
import Image from "next/image";

interface TestimonialData {
  quote: string;
  highlightedText: string;
  author: {
    name: string;
    title: string;
    company: string;
    image: string;
    imageAlt: string;
  };
  company: {
    name: string;
    Icon: typeof Building2;
  };
}

const testimonials: TestimonialData[] = [
  {
    quote:
      "JLab Software didn't just build an app; they architected a solution that processed $1B+ in transactions without a single second of downtime. Their engineering is absolute elite-tier.",
    highlightedText: "$1B+ in transactions",
    author: {
      name: "Sarah Mitchell",
      title: "Chief Technology Officer",
      company: "NexFin Dynamics",
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuDiZSV3xO7HyAsquKXM2i6w1VXz9nHc1zZQZQgygeZhDw2nWLx7-aqyrk-vtZfwe6J69caf_EmwCC_2buJX2j4zsVLFK6sOnFuIqOolCan6_53pj_eh8nqHfD6NcONFUGWiBEsouIJcVuuk8vMJAtmw2af0ZlPfpuUYkDqAknF94e9dIBu7Jn_Vy0A3SQPrnocCixbRhVkA_VL0MzQRWAljzIwPfMLXF2L-mpmXlPNbw7HpJATM4k2QtS5UGq-wQGNbtEBkOlwnLCg",
      imageAlt: "Sarah Mitchell",
    },
    company: {
      name: "NexFin",
      Icon: Building2,
    },
  },
  {
    quote:
      "The technical depth of the JLab team is stunning. They integrated our telemetry systems with 99.9% data accuracy. It's rare to find a partner that understands our mission this well.",
    highlightedText: "99.9% data accuracy",
    author: {
      name: "Marcus Chen",
      title: "VP Engineering",
      company: "AstroTech Systems",
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuA4NsryPMzb_M7bVtCBFt_fD4msKRXemzZUyVBftoVQrz4imTBG0BlykWjPzkoWTfzQkFptkOw2yYatbdwPDO9psG6Pn0d-hZGNO_POL75Vl9L233bmWKUxiuvZeBZkiiQbUTna5qLMniZ_RCE1zSJORwYlELAzCe9DSVJ7xVeEiK4gA84PPLhTzIz6SQAwElSG7yiPIr7JiWzri7wo_52prVHi9s6dZ9X0kkcxPcRSM9C4mimzkQNchLhDU4GTGCPwXI-_cNzBJwA",
      imageAlt: "Marcus Chen",
    },
    company: {
      name: "AstroTech",
      Icon: Rocket,
    },
  },
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.6,
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
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

export function Testimonial() {
  return (
    <section
      id="success-stories"
      className="py-32 px-6 lg:px-10 max-w-[1440px] mx-auto overflow-hidden"
    >
      <motion.div
        className="flex flex-col gap-16"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        {/* Header */}
        <motion.div
          variants={cardVariants}
          className="flex flex-col gap-4 text-center max-w-[800px] mx-auto"
        >
          <span className="text-[#003366] dark:text-[#00AAAA] font-bold uppercase tracking-[0.3em] text-sm">
            Case Studies
          </span>
          <h2 className="text-[#003366] dark:text-white text-4xl font-extrabold leading-tight md:text-6xl">
            Success Stories
          </h2>
          <p className="text-[#637588] dark:text-[#94a3b8] text-lg md:text-xl">
            Transformative outcomes delivered for the world&apos;s most
            ambitious teams.
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {testimonials.map((testimonial) => (
            <motion.article
              key={testimonial.author.name}
              variants={cardVariants}
              whileHover={{ y: -5 }}
              className="group relative p-10 lg:p-14 rounded-[2.5rem] bg-white dark:bg-[#001426] border border-gray-100 dark:border-white/10 shadow-2xl hover:border-[#003366]/30 dark:hover:border-[#00AAAA]/30 transition-all duration-500"
            >
              <div className="flex flex-col h-full gap-8">
                {/* Header with Stars and Company */}
                <div className="flex items-center justify-between">
                  {/* Star Rating */}
                  <div className="flex items-center gap-2 text-[#003366] dark:text-[#00AAAA]">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-current" />
                    ))}
                  </div>

                  {/* Company */}
                  <div className="flex items-center gap-2 opacity-60">
                    <testimonial.company.Icon className="w-6 h-6 text-[#003366] dark:text-[#00AAAA]" />
                    <span className="font-bold text-sm tracking-[0.2em] uppercase text-[#003366] dark:text-white">
                      {testimonial.company.name}
                    </span>
                  </div>
                </div>

                {/* Quote */}
                <blockquote className="text-2xl md:text-3xl font-bold leading-tight text-[#003366] dark:text-white">
                  &quot;
                  {testimonial.quote
                    .split(testimonial.highlightedText)
                    .map((part, i, arr) => (
                      <span key={i}>
                        {part}
                        {i < arr.length - 1 && (
                          <span className="text-[#00AAAA]">
                            {testimonial.highlightedText}
                          </span>
                        )}
                      </span>
                    ))}
                  &quot;
                </blockquote>

                {/* Author Info */}
                <div className="flex items-center gap-5 mt-auto border-t border-gray-100 dark:border-white/5 pt-8">
                  <div className="size-16 rounded-2xl bg-gray-200 dark:bg-white/10 overflow-hidden ring-4 ring-gray-50 dark:ring-white/5">
                    <Image
                      alt={testimonial.author.imageAlt}
                      className="w-full h-full object-cover"
                      src={testimonial.author.image}
                      width={64}
                      height={64}
                    />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-xl font-bold text-[#003366] dark:text-white">
                      {testimonial.author.name}
                    </span>
                    <span className="text-sm text-[#637588] dark:text-[#94a3b8]">
                      {testimonial.author.title}, {testimonial.author.company}
                    </span>
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
