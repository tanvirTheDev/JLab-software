"use client";

import { motion, type Variants } from "framer-motion";
import {
  Github,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Send,
  User,
} from "lucide-react";
import { useState } from "react";

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.6,
      when: "beforeChildren",
      staggerChildren: 0.1,
    },
  },
};

const itemVariants: Variants = {
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

const formVariants: Variants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Add your form submission logic here
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <main className="flex-grow flex flex-col items-center justify-center px-4 py-12 lg:py-20 bg-[#F8F9FA] dark:bg-[#001a33] min-h-screen">
      <motion.div
        className="w-full max-w-7xl"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Header Section */}
        <motion.div
          variants={itemVariants}
          className="mb-12 text-center lg:text-left lg:mb-16 px-4"
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black leading-tight tracking-tight text-[#003366] dark:text-white mb-4">
            Let&apos;s Build{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#003366] to-[#00AAAA] dark:from-white dark:to-[#00AAAA]">
              Something Together
            </span>
          </h1>
          <p className="text-[#637588] dark:text-[#94a3b8] text-lg max-w-2xl mx-auto lg:mx-0">
            Have a question or an idea? Fill out the form and our team will get
            back to you within 24 hours. We love turning complex problems into
            simple solutions.
          </p>
        </motion.div>

        {/* Form and Contact Info Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 px-4 mb-12">
          {/* Contact Form */}
          <motion.div
            variants={formVariants}
            className="lg:col-span-7 bg-white dark:bg-[#001426] border border-[#E0E0E0] dark:border-[#002a4d] rounded-2xl p-6 md:p-10 shadow-xl shadow-slate-200/50 dark:shadow-black/20 order-2 lg:order-1"
          >
            <form onSubmit={handleSubmit} className="flex flex-col gap-6">
              {/* Name and Email Row */}
              <div className="flex flex-col md:flex-row gap-6">
                <label className="flex flex-col flex-1 gap-2">
                  <span className="text-[#003366] dark:text-white text-sm font-bold">
                    Full Name
                  </span>
                  <div className="relative group">
                    <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#637588] dark:text-[#94a3b8] group-focus-within:text-[#00AAAA] transition-colors" />
                    <input
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full h-12 pl-12 pr-4 bg-white dark:bg-[#001426] border border-[#E0E0E0] dark:border-[#002a4d] rounded-lg text-[#003366] dark:text-white placeholder:text-[#637588] dark:placeholder:text-[#94a3b8] focus:outline-none focus:ring-2 focus:ring-[#00AAAA]/50 focus:border-[#00AAAA] transition-all text-sm"
                      placeholder="John Doe"
                      type="text"
                      required
                    />
                  </div>
                </label>

                <label className="flex flex-col flex-1 gap-2">
                  <span className="text-[#003366] dark:text-white text-sm font-bold">
                    Email Address
                  </span>
                  <div className="relative group">
                    <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#637588] dark:text-[#94a3b8] group-focus-within:text-[#00AAAA] transition-colors" />
                    <input
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full h-12 pl-12 pr-4 bg-white dark:bg-[#001426] border border-[#E0E0E0] dark:border-[#002a4d] rounded-lg text-[#003366] dark:text-white placeholder:text-[#637588] dark:placeholder:text-[#94a3b8] focus:outline-none focus:ring-2 focus:ring-[#00AAAA]/50 focus:border-[#00AAAA] transition-all text-sm"
                      placeholder="john@company.com"
                      type="email"
                      required
                    />
                  </div>
                </label>
              </div>

              {/* Subject */}
              <label className="flex flex-col gap-2">
                <span className="text-[#003366] dark:text-white text-sm font-bold">
                  Subject
                </span>
                <div className="relative group">
                  <select
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full h-12 pl-12 pr-10 bg-white dark:bg-[#001426] border border-[#E0E0E0] dark:border-[#002a4d] rounded-lg text-[#003366] dark:text-white focus:outline-none focus:ring-2 focus:ring-[#00AAAA]/50 focus:border-[#00AAAA] transition-all text-sm appearance-none cursor-pointer"
                    required
                  >
                    <option value="">Select a topic</option>
                    <option value="project">Start a Project</option>
                    <option value="consultation">General Consultation</option>
                    <option value="careers">Careers</option>
                    <option value="other">Other</option>
                  </select>
                </div>
              </label>

              {/* Message */}
              <label className="flex flex-col gap-2">
                <span className="text-[#003366] dark:text-white text-sm font-bold">
                  Message
                </span>
                <div className="relative group">
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full min-h-[160px] p-4 bg-white dark:bg-[#001426] border border-[#E0E0E0] dark:border-[#002a4d] rounded-lg text-[#003366] dark:text-white placeholder:text-[#637588] dark:placeholder:text-[#94a3b8] focus:outline-none focus:ring-2 focus:ring-[#00AAAA]/50 focus:border-[#00AAAA] transition-all text-sm resize-none"
                    placeholder="Tell us about your project goals, timeline, and budget..."
                    required
                  />
                </div>
              </label>

              {/* Submit Button */}
              <div className="flex justify-end pt-2">
                <motion.button
                  whileHover={{ scale: 1.02, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  className="group flex items-center justify-center gap-2 h-12 px-8 bg-[#00AAAA] hover:bg-[#00c0c0] text-white font-bold rounded-lg transition-all duration-200 shadow-lg shadow-[#00AAAA]/25 w-full md:w-auto"
                  type="submit"
                >
                  <span>Send Message</span>
                  <Send className="w-[18px] h-[18px] group-hover:translate-x-1 transition-transform" />
                </motion.button>
              </div>
            </form>
          </motion.div>

          {/* Contact Information Card */}
          <motion.div
            variants={itemVariants}
            className="lg:col-span-5 flex flex-col gap-6 order-1 lg:order-2 h-full"
          >
            <div className="bg-[#003366] border border-[#003366]/50 rounded-2xl p-8 flex flex-col gap-8 relative overflow-hidden group shadow-xl">
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-[#00AAAA]/20 rounded-full blur-3xl group-hover:bg-[#00AAAA]/30 transition-all duration-700" />
              <h3 className="text-xl font-bold text-white z-10">
                Contact Information
              </h3>

              <div className="flex flex-col gap-6 z-10">
                {/* Location */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                  className="flex items-start gap-4"
                >
                  <div className="flex-shrink-0 size-10 rounded-full bg-white/10 flex items-center justify-center text-[#00AAAA]">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-[#94a3b8] mb-1">
                      Our Office
                    </p>
                    <p className="text-base font-semibold text-white leading-relaxed">
                      Godnail, Chowdhurybari
                      <br />
                      Narayangonj
                    </p>
                  </div>
                </motion.div>

                {/* Email */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 }}
                  className="flex items-start gap-4"
                >
                  <div className="flex-shrink-0 size-10 rounded-full bg-white/10 flex items-center justify-center text-[#00AAAA]">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-[#94a3b8] mb-1">
                      Email Us
                    </p>
                    <a
                      href="mailto:hello@jlabsoftware.com"
                      className="text-base font-semibold text-white hover:text-[#00AAAA] transition-colors"
                    >
                      incjlab@gmail.com
                    </a>
                  </div>
                </motion.div>

                {/* Phone */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 }}
                  className="flex items-start gap-4"
                >
                  <div className="flex-shrink-0 size-10 rounded-full bg-white/10 flex items-center justify-center text-[#00AAAA]">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-[#94a3b8] mb-1">
                      Call Us
                    </p>
                    <a
                      href="tel:+8801760061268"
                      className="text-base font-semibold text-white hover:text-[#00AAAA] transition-colors"
                    >
                      +8801760061268
                    </a>
                  </div>
                </motion.div>
              </div>

              {/* Social Links */}
              <div className="mt-4 pt-8 border-t border-white/10 flex gap-4 z-10">
                <motion.a
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  href="#"
                  className="size-10 rounded-lg bg-white/10 flex items-center justify-center text-[#94a3b8] hover:bg-[#00AAAA] hover:text-white transition-all"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-5 h-5" />
                </motion.a>
                <motion.a
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  href="#"
                  className="size-10 rounded-lg bg-white/10 flex items-center justify-center text-[#94a3b8] hover:bg-[#00AAAA] hover:text-white transition-all"
                  aria-label="Twitter"
                >
                  <svg
                    aria-hidden="true"
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"></path>
                  </svg>
                </motion.a>
                <motion.a
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  href="#"
                  className="size-10 rounded-lg bg-white/10 flex items-center justify-center text-[#94a3b8] hover:bg-[#00AAAA] hover:text-white transition-all"
                  aria-label="GitHub"
                >
                  <Github className="w-5 h-5" />
                </motion.a>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Google Maps Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="px-4 mb-12"
        >
          <div className="rounded-2xl overflow-hidden border border-[#E0E0E0] dark:border-[#002a4d] shadow-xl shadow-slate-200/50 dark:shadow-black/20">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.835434509373!2d-122.4194154846814!3d37.774929279759!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085809c6c8f4459%3A0xb10ed6d9b5050fa5!2sSan%20Francisco%2C%20CA%2C%20USA!5e0!3m2!1sen!2s!4v1234567890123!5m2!1sen!2s"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full"
              title="JLab Software Location - San Francisco"
            />
          </div>
        </motion.div>
      </motion.div>
    </main>
  );
}
