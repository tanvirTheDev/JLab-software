import { motion, Variants } from "framer-motion";

const journeyEvents = [
  {
    year: "2017",
    title: "JLab Software Founded",
    description:
      "JLab Software was founded in Narayanganj with a clear mission: to build reliable, practical software solutions for real-world businesses.",
    side: "right",
    isHighlight: true,
  },
  {
    year: "2019",
    title: "Industry-Focused Software Solutions",
    description:
      "Started delivering customized software for hospitals and garment companies, focusing on automation, efficiency, and scalability.",
    side: "left",
    isHighlight: false,
  },
  {
    year: "2022",
    title: "Enterprise & Corporate Web Solutions",
    description:
      "Expanded services to enterprise-level websites and business platforms, helping companies build strong and professional digital identities.",
    side: "right",
    isHighlight: false,
  },
  {
    year: "2024",
    title: "Growing with Modern Technologies",
    description:
      "Adopted modern web technologies to deliver secure, scalable, and high-performance software solutions tailored to client needs.",
    side: "left",
    isHighlight: false,
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
      delayChildren: 0.2,
    },
  },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, x: -50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.8,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

export default function OurJourneySection() {
  return (
    <section className="py-24 md:py-36 bg-[#002244] relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#00AAAA] rounded-full blur-[150px]" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#00AAAA] rounded-full blur-[150px]" />
      </div>

      <div className="container mx-auto px-4 md:px-8 lg:px-12 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Our Journey
          </h2>
          <div className="w-20 h-1 bg-[#00AAAA] mx-auto rounded-full" />
        </motion.div>

        {/* Timeline */}
        <div className="relative max-w-6xl mx-auto">
          {/* Vertical Timeline Line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-[#00AAAA]/50 to-transparent -translate-x-1/2 hidden md:block" />

          {/* Mobile Timeline Line */}
          <div className="absolute left-8 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-[#00AAAA]/50 to-transparent md:hidden" />

          {/* Timeline Events */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="space-y-16 md:space-y-32"
          >
            {journeyEvents.map((event, index) => (
              <motion.div
                key={event.year}
                variants={cardVariants}
                className={`relative flex items-center ${
                  event.side === "right" ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                {/* Timeline Dot */}
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{
                    type: "spring",
                    stiffness: 200,
                    delay: index * 0.3 + 0.3,
                  }}
                  className={`absolute left-8 md:left-1/2 -translate-x-1/2 z-10 ${
                    event.isHighlight
                      ? "w-6 h-6 bg-[#00AAAA] shadow-[0_0_0_8px_rgba(0,170,170,0.2)]"
                      : "w-4 h-4 bg-white/50"
                  } rounded-full border-4 border-[#002244]`}
                >
                  {event.isHighlight && (
                    <motion.div
                      animate={{
                        scale: [1, 1.5, 1],
                        opacity: [0.5, 0, 0.5],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                      className="absolute inset-0 bg-[#00AAAA] rounded-full"
                    />
                  )}
                </motion.div>

                {/* Content Card */}
                <div className="w-full md:w-[calc(50%-3rem)]">
                  <motion.div
                    whileHover={{
                      y: -8,
                      boxShadow: "0 20px 40px -10px rgba(0, 170, 170, 0.3)",
                    }}
                    transition={{ duration: 0.3 }}
                    className={`ml-20 md:ml-0 p-8 rounded-2xl bg-gradient-to-br from-[#003366]/80 to-[#002244]/80 backdrop-blur-sm border border-[#00AAAA]/20 hover:border-[#00AAAA]/50 transition-all duration-300 ${
                      event.side === "left" ? "md:mr-12" : "md:ml-12"
                    }`}
                  >
                    {/* Year Badge */}
                    <motion.div
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.3 + 0.5 }}
                      className="inline-flex items-center justify-center mb-4"
                    >
                      <span
                        className={`px-4 py-1 rounded-full text-sm font-bold uppercase tracking-wider ${
                          event.isHighlight
                            ? "bg-[#00AAAA] text-white"
                            : "bg-white/10 text-[#00AAAA]"
                        }`}
                        style={{ fontFamily: "'Source Sans 3', sans-serif" }}
                      >
                        {event.year}
                      </span>
                    </motion.div>

                    {/* Title */}
                    <h3
                      className="text-2xl md:text-3xl font-bold text-white mb-3"
                      style={{ fontFamily: "'Playfair Display', serif" }}
                    >
                      {event.title}
                    </h3>

                    {/* Description */}
                    <p
                      className="text-slate-300 text-base md:text-lg leading-relaxed"
                      style={{ fontFamily: "'Source Sans 3', sans-serif" }}
                    >
                      {event.description}
                    </p>

                    {/* Decorative Line */}
                    {event.isHighlight && (
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: "100%" }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.3 + 0.7, duration: 0.8 }}
                        className="h-1 bg-gradient-to-r from-[#00AAAA] to-transparent mt-6 rounded-full"
                      />
                    )}
                  </motion.div>
                </div>

                {/* Spacer for opposite side */}
                <div className="hidden md:block w-[calc(50%-3rem)]" />
              </motion.div>
            ))}
          </motion.div>

          {/* Future Marker */}
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ type: "spring", delay: 1.2 }}
            className="relative flex justify-center mt-16 md:mt-32"
          >
            <div className="absolute left-8 md:left-1/2 w-6 h-6 bg-gradient-to-r from-[#00AAAA] to-white rounded-full border-4 border-[#002244] -translate-x-1/2 z-10">
              <motion.div
                animate={{
                  scale: [1, 1.3, 1],
                  opacity: [1, 0.5, 1],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute inset-0 bg-[#00AAAA] rounded-full"
              />
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 1.4 }}
              className="ml-20 md:ml-0 text-center"
            >
              <p className="text-[#00AAAA] font-bold text-lg uppercase tracking-wider mb-2">
                The Future
              </p>
              <p className="text-slate-400 text-sm">More innovation ahead...</p>
            </motion.div>
          </motion.div>
        </div>

        {/* Bottom Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8 }}
          className="mt-24 max-w-4xl mx-auto"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {[
              { number: "6", label: "Years of Excellence", suffix: "" },
              { number: "3", label: "Major Milestones", suffix: "" },
              { number: "∞", label: "Growth Potential", suffix: "" },
            ].map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{
                  type: "spring",
                  stiffness: 100,
                  delay: 1 + i * 0.1,
                }}
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 10px 30px -5px rgba(0, 170, 170, 0.3)",
                }}
                className="p-8 rounded-2xl bg-gradient-to-br from-[#003366]/60 to-[#002244]/60 backdrop-blur-sm border border-[#00AAAA]/30 text-center group hover:border-[#00AAAA] transition-all duration-300"
              >
                <div
                  className="text-5xl md:text-6xl font-bold text-[#00AAAA] mb-3 group-hover:scale-110 transition-transform"
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  {stat.number}
                  {stat.suffix}
                </div>
                <p
                  className="text-slate-300 text-sm md:text-base font-medium"
                  style={{ fontFamily: "'Source Sans 3', sans-serif" }}
                >
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
