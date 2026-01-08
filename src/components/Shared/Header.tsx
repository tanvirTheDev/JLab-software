"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Menu, Terminal, X } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Services", href: "#services" },
    { name: "Work", href: "#work" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`sticky top-0 z-50 w-full border-b border-border/40 backdrop-blur-md transition-all duration-300 ${
        isScrolled ? "bg-background/95 shadow-sm" : "bg-background/90"
      }`}
    >
      <div className="flex items-center justify-between px-6 py-4 lg:px-10 max-w-[1280px] mx-auto">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="flex items-center justify-center size-10 rounded-lg bg-primary/10 text-primary dark:text-white dark:bg-primary/30 group-hover:bg-primary/20 transition-colors">
            <Terminal className="w-6 h-6" />
          </div>
          <h2 className="text-lg font-bold leading-tight tracking-tight text-primary dark:text-white">
            JLab Software
          </h2>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex flex-1 justify-center gap-8">
          {navItems.map((item, index) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 + 0.2 }}
            >
              <Link
                href={item.href}
                className="text-sm font-medium hover:text-accent transition-colors text-primary dark:text-white relative group"
              >
                {item.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent transition-all group-hover:w-full" />
              </Link>
            </motion.div>
          ))}
        </nav>

        {/* CTA Buttons */}
        <div className="flex gap-4 items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5 }}
            className="hidden sm:block"
          >
            <Button className="bg-accent hover:bg-accent-hover text-white shadow-lg shadow-accent/25">
              Download Now
            </Button>
          </motion.div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden flex items-center justify-center text-primary dark:text-white"
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          className="md:hidden border-t border-border/40 bg-background/95 backdrop-blur-md"
        >
          <nav className="flex flex-col gap-4 px-6 py-6">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-base font-medium hover:text-accent transition-colors text-primary dark:text-white"
              >
                {item.name}
              </Link>
            ))}
            <Button className="w-full bg-accent hover:bg-accent-hover text-white mt-2">
              Start a Project
            </Button>
          </nav>
        </motion.div>
      )}
    </motion.header>
  );
}
