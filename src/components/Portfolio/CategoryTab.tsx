"use client";
import { motion } from "framer-motion";

export const CategoryTabs = ({
  categories,
  activeCategory,
  setActiveCategory,
}: {
  categories: string[];
  activeCategory: string;
  setActiveCategory: (category: string) => void;
}) => {
  return (
    <section className="w-full px-5 md:px-10 flex justify-center sticky top-0 z-40 bg-[#111722]/95 backdrop-blur-sm border-b border-[#324467]/50">
      <div className="max-w-[1280px] w-full">
        <div className="flex overflow-x-auto no-scrollbar gap-8 pb-1 pt-4 hide-scrollbar">
          {categories.map((category, index) => (
            <motion.button
              key={category}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              onClick={() => setActiveCategory(category)}
              className={`flex flex-col items-center justify-center border-b-2 pb-3 min-w-fit px-2 transition-all duration-300 ${
                activeCategory === category
                  ? "border-[#135bec] text-white"
                  : "border-transparent text-slate-400 hover:text-white"
              }`}
            >
              <span className="text-sm font-bold tracking-wide whitespace-nowrap">
                {category}
              </span>
            </motion.button>
          ))}
        </div>
      </div>
    </section>
  );
};
