/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { motion } from "framer-motion";
import { RefreshCw } from "lucide-react";
import { ProjectCard } from "./ProjectCard";

export const ProjectsGrid = ({ projects }: { projects: any[] }) => {
  return (
    <section className="w-full px-5 py-12 md:px-10 flex justify-center">
      <div className="max-w-[1280px] w-full">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: { staggerChildren: 0.1 },
            },
          }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-[380px]"
        >
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </motion.div>

        {/* Load More Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="w-full flex justify-center mt-12"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-2 text-slate-400 hover:text-white font-semibold transition-colors px-6 py-3 rounded-lg border border-[#324467] hover:border-slate-500"
          >
            Load More Projects
            <RefreshCw className="w-4 h-4" />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};
