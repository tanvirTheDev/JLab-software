"use client";
import { CategoryTabs } from "@/components/Portfolio/CategoryTab";
import { CTASection } from "@/components/Portfolio/CTA";
import { HeroSection } from "@/components/Portfolio/HeroSection";
import { PhilosophySection } from "@/components/Portfolio/Philosophy";
import { ProjectsGrid } from "@/components/Portfolio/ProjectGrid";
import { useState } from "react";

// Project data
const projects = [
  {
    id: 1,
    title: "FinTech Dashboard Revolution",
    category: "SaaS",
    tags: ["SaaS", "React"],
    description:
      "A complete overhaul of a legacy financial system, improving data visualization speed by 400% and user retention by 25%.",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&q=80",
    featured: true,
    span: "md:col-span-2 lg:col-span-2",
  },
  {
    id: 2,
    title: "HealthMate App",
    category: "Mobile",
    tags: ["Mobile"],
    description:
      "Personalized wellness tracking with real-time biometric integration.",
    image:
      "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&q=80",
    featured: false,
    span: "",
  },
  {
    id: 3,
    title: "EcoStore Platform",
    category: "E-commerce",
    tags: ["E-commerce"],
    description:
      "Sustainable shopping experience built on headless Shopify architecture.",
    image:
      "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&q=80",
    featured: false,
    span: "",
  },
  {
    id: 4,
    title: "Logistics CRM System",
    category: "SaaS",
    tags: ["Enterprise", "Vue.js"],
    description:
      "Streamlining global supply chains with predictive AI and real-time tracking for a Fortune 500 logistics provider.",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&q=80",
    featured: true,
    span: "md:col-span-2",
  },
  {
    id: 5,
    title: "NeoBrand Identity",
    category: "SaaS",
    tags: ["Branding"],
    description: "Digital-first brand guidelines for a Web3 startup.",
    image:
      "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&q=80",
    featured: false,
    span: "",
  },
];

const categories = [
  "All Projects",
  "SaaS Platforms",
  "Mobile Apps",
  "E-commerce",
  "FinTech",
];

export default function PortfolioPage() {
  const [activeCategory, setActiveCategory] = useState("All Projects");

  return (
    <div className="min-h-screen bg-[#111722]">
      {/* Hero Section */}
      <HeroSection />

      {/* Category Tabs */}
      <CategoryTabs
        categories={categories}
        activeCategory={activeCategory}
        setActiveCategory={setActiveCategory}
      />

      {/* Projects Grid */}
      <ProjectsGrid projects={projects} />

      {/* Philosophy Section */}
      <PhilosophySection />

      {/* CTA Section */}
      <CTASection />
    </div>
  );
}
