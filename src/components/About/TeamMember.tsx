import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export const TeamMember = () => {
  const team = [
    {
      name: "James Carter",
      role: "CEO & Founder",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80",
    },
    {
      name: "Sarah Chen",
      role: "CTO",
      image:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&q=80",
    },
    {
      name: "Michael Ross",
      role: "Lead Designer",
      image:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&q=80",
    },
    {
      name: "Emily Davis",
      role: "Head of Operations",
      image:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&q=80",
    },
  ];

  return (
    <section className="py-20 bg-white dark:bg-[#00284d]">
      <div className="container mx-auto px-4 md:px-8 lg:px-12">
        <div className="flex justify-between items-end mb-16">
          <div>
            <h2
              className="text-4xl md:text-5xl font-semibold mb-6 text-[#003366] dark:text-white"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Meet the Team
            </h2>
            <p className="text-lg text-[#003366]/70 dark:text-slate-300">
              The minds behind the code.
            </p>
          </div>
          <motion.a
            whileHover={{ x: 5 }}
            href="#"
            className="text-[#00AAAA] font-semibold inline-flex items-center gap-2"
          >
            View all <ArrowRight className="w-5 h-5" />
          </motion.a>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member, i) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group relative overflow-hidden rounded-xl aspect-[3/4] shadow-md hover:shadow-xl transition-shadow"
            >
              <motion.img
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.5 }}
                className="w-full h-full object-cover"
                src={member.image}
                alt={member.name}
              />
              <motion.div
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                className="absolute inset-0 bg-gradient-to-t from-[#003366]/90 to-transparent flex flex-col justify-end p-6"
              >
                <h3
                  className="text-white font-bold text-xl mb-1"
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  {member.name}
                </h3>
                <p className="text-[#00AAAA] font-medium">{member.role}</p>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
