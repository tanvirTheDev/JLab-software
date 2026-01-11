/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export const ProjectCard = ({
  project,
  index,
}: {
  project: any;
  index: number;
}) => {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
      }}
      whileHover={{ y: -8 }}
      className={`group relative ${project.span} rounded-xl overflow-hidden cursor-pointer border border-[#324467] bg-[#192233]`}
    >
      {/* Image */}
      <div className="absolute inset-0 bg-cover bg-center">
        <motion.img
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.5 }}
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#111722] via-[#111722]/50 to-transparent opacity-90 group-hover:opacity-80 transition-opacity" />

      {/* Content */}
      <div className="absolute inset-0 p-6 md:p-8 flex flex-col justify-end">
        <motion.div
          initial={{ y: 0 }}
          whileHover={{ y: -8 }}
          transition={{ duration: 0.3 }}
        >
          {/* Tags */}
          <div className="flex gap-2 mb-3 flex-wrap">
            {project.tags.map((tag: any) => (
              <span
                key={tag}
                className="px-2 py-1 rounded-md bg-white/10 backdrop-blur-md text-white text-xs font-semibold border border-white/10"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Title */}
          <h3
            className={`text-white font-bold mb-2 ${
              project.featured ? "text-2xl md:text-3xl" : "text-xl"
            }`}
          >
            {project.title}
          </h3>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0 }}
            whileHover={{ opacity: 1 }}
            transition={{ duration: 0.3, delay: 0.1 }}
            className={`text-slate-300 line-clamp-2 mb-4 opacity-0 group-hover:opacity-100 ${
              project.featured ? "text-sm md:text-base max-w-lg" : "text-sm"
            }`}
          >
            {project.description}
          </motion.p>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0 }}
            whileHover={{ opacity: 1, x: 5 }}
            transition={{ duration: 0.3, delay: 0.15 }}
            className="flex items-center gap-2 text-[#135bec] font-bold text-sm opacity-0 group-hover:opacity-100"
          >
            View Case Study
            <ArrowRight className="w-4 h-4" />
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
};
