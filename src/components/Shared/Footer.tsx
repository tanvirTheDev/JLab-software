"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight, Terminal } from "lucide-react";
import Link from "next/link";

export function Footer() {
  const services = [
    "Web Development",
    "Mobile Apps",
    "UI/UX Design",
    "Cloud Infrastructure",
  ];

  const company = ["About Us", "Careers", "Blog", "Contact"];

  return (
    <footer className="bg-surface-light dark:bg-[#000d1a] border-t border-border/40 pt-16 pb-8">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-2">
              <Terminal className="text-primary dark:text-accent w-6 h-6" />
              <span className="text-xl font-bold text-primary dark:text-white">
                JLab Software
              </span>
            </div>
            <p className="text-muted dark:text-muted-foreground text-sm leading-relaxed">
              Crafting digital experiences with precision and passion.
            </p>
          </div>

          {/* Services */}
          <div className="flex flex-col gap-4">
            <h4 className="text-primary dark:text-white font-bold">Services</h4>
            <div className="flex flex-col gap-2">
              {services.map((service) => (
                <Link
                  key={service}
                  href="#"
                  className="text-muted dark:text-muted-foreground hover:text-accent text-sm transition-colors"
                >
                  {service}
                </Link>
              ))}
            </div>
          </div>

          {/* Company */}
          <div className="flex flex-col gap-4">
            <h4 className="text-primary dark:text-white font-bold">Company</h4>
            <div className="flex flex-col gap-2">
              {company.map((item) => (
                <Link
                  key={item}
                  href="#"
                  className="text-muted dark:text-muted-foreground hover:text-accent text-sm transition-colors"
                >
                  {item}
                </Link>
              ))}
            </div>
          </div>

          {/* Newsletter */}
          <div className="flex flex-col gap-4">
            <h4 className="text-primary dark:text-white font-bold">
              Newsletter
            </h4>
            <p className="text-muted dark:text-muted-foreground text-sm">
              Subscribe for the latest tech news.
            </p>
            <div className="flex gap-2">
              <input
                className="bg-white dark:bg-surface-dark border border-border rounded-lg px-4 py-2 text-sm text-primary dark:text-white w-full focus:outline-none focus:border-accent"
                placeholder="Enter your email"
                type="email"
              />
              <Button
                size="icon"
                className="bg-accent hover:bg-accent-hover text-white rounded-lg"
              >
                <ArrowRight className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-border/40 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-muted dark:text-muted-foreground text-sm">
            © 2026 JLab Software. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link
              href="#"
              className="text-muted dark:text-muted-foreground hover:text-accent text-sm transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              href="#"
              className="text-muted dark:text-muted-foreground hover:text-accent text-sm transition-colors"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
