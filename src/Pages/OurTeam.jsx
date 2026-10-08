import React from "react";
import { ArrowUpRight, Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import { LiaLinkedin } from "react-icons/lia";

const teamMembers = [
  {
    name: "Gyanaranjan Khatua",
    role: "CEO & Founder",
    image: "https://i.pravatar.cc/600?img=12",
    description:
      "Gyanaranjan is a passionate software developer and the founder of Gyanex. With a strong focus on frontend engineering, modern web technologies, and user experience, he turns ideas into reliable and high-quality digital products. His approach combines clean development, thoughtful design, and business understanding to create solutions that deliver real value.",
    skills: ["Frontend Engineering", "React.js", "Next.js", "Web Development"],
  },
  {
    name: "Fullstack Developer",
    role: "Tech Lead",
    image: "https://i.pravatar.cc/600?img=11",
    description:
      "Our Tech Lead focuses on building robust and scalable applications across the frontend and backend. From architecture and APIs to databases and deployment, the role ensures that every technical decision supports performance, maintainability, and long-term growth.",
    skills: ["Full Stack", "Node.js", "APIs", "Architecture"],
  },
  {
    name: "Jashmini Dash",
    role: "UI/UX Designer",
    image: "https://i.pravatar.cc/600?img=47",
    description:
      "Jashmini focuses on creating intuitive and engaging digital experiences. By combining visual design, usability, and user-centered thinking, she transforms complex ideas into clean interfaces that feel natural, modern, and easy to use.",
    skills: ["UI Design", "UX Design", "Prototyping", "User Experience"],
  },
  {
    name: "Jetendra",
    role: "App Developer",
    image: "https://i.pravatar.cc/600?img=68",
    description:
      "Jetendra is an application developer with experience in Flutter, focused on creating smooth, responsive, and reliable mobile experiences. He works on turning product ideas into practical mobile applications with attention to performance and usability.",
    skills: ["Flutter", "Mobile Development", "Dart", "App UI"],
  },
  {
    name: "Hrudananda",
    role: "Graphics Designer",
    image: "https://i.pravatar.cc/600?img=13",
    description:
      "Hrudananda creates visual assets that help brands communicate clearly and make a lasting impression. From digital graphics to marketing visuals, he brings ideas to life through thoughtful design.",
    skills: ["Graphic Design", "Branding", "Visual Design", "Creative"],
  },
  {
    name: "Geeta",
    role: "Digital Marketer",
    image: "https://i.pravatar.cc/600?img=44",
    description:
      "Geeta helps brands grow their online presence through thoughtful digital marketing. She focuses on connecting businesses with their audiences and supporting meaningful, measurable engagement.",
    skills: ["Digital Marketing", "Social Media", "Content Strategy", "Growth"],
  },
];

function OurTeam() {
  return (
    <section
      id="team"
      className="relative overflow-hidden bg-[#fafafa] py-24 text-slate-950 sm:py-32 dark:bg-[#050509] dark:text-white"
    >
      {/* Background Grid */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.45] dark:opacity-[0.18]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(139,92,246,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(139,92,246,0.08) 1px, transparent 1px)",
          backgroundSize: "70px 70px",
        }}
      />

      {/* Ambient Glows */}
      <div className="pointer-events-none absolute -left-40 top-20 h-[450px] w-[450px] rounded-full bg-violet-500/10 blur-[130px] dark:bg-violet-600/10" />

      <div className="pointer-events-none absolute -right-40 bottom-10 h-[500px] w-[500px] rounded-full bg-fuchsia-500/10 blur-[140px] dark:bg-fuchsia-600/10" />

      <div className="relative mx-auto max-w-7xl px-6 sm:px-8 lg:px-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
          className="mx-auto max-w-3xl text-center"
        >
          {/* Label */}
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-violet-500/20 bg-violet-500/[0.07] px-4 py-2 text-sm font-medium text-violet-600 dark:border-violet-400/20 dark:bg-violet-500/10 dark:text-violet-300">
            <Sparkles className="h-4 w-4" />
            <span>Meet Our Team</span>
          </div>

          <h2 className="text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl">
            The people behind{" "}
            <span className="bg-gradient-to-r from-violet-600 via-purple-600 to-fuchsia-500 bg-clip-text text-transparent dark:from-violet-400 dark:via-purple-400 dark:to-fuchsia-400">
              Gyanex.
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-slate-600 sm:text-lg dark:text-slate-400">
            A team of developers and designers working together to build
            thoughtful digital experiences, reliable technology, and products
            that create meaningful results for our clients.
          </p>
        </motion.div>

        {/* Team Grid */}
        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {teamMembers.map((member, index) => (
            <motion.article
              key={member.name}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{
                duration: 0.6,
                delay: index * 0.08,
              }}
              className="group relative overflow-hidden rounded-[1.75rem] border border-slate-200 bg-white/70 p-3 shadow-xl shadow-slate-200/30 backdrop-blur-xl transition-all duration-500 hover:-translate-y-2 hover:border-violet-400/40 hover:shadow-violet-500/10 dark:border-white/[0.09] dark:bg-white/[0.035] dark:shadow-black/20"
            >
              {/* Image */}
              <div className="relative aspect-[4/4.5] overflow-hidden rounded-[1.4rem]">
                <img
                  src={member.image}
                  alt={member.name}
                  className="h-full w-full object-cover grayscale-[15%] transition duration-700 group-hover:scale-105 group-hover:grayscale-0"
                />

                {/* Image Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />

                {/* Role */}
                <div className="absolute bottom-4 left-4 right-4">
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-violet-300">
                    {member.role}
                  </p>

                  <h3 className="mt-1 text-xl font-semibold text-white">
                    {member.name}
                  </h3>
                </div>

                {/* LinkedIn Button */}
                <button
                  type="button"
                  className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-black/30 text-white backdrop-blur-xl transition-all duration-300 hover:bg-violet-600"
                  aria-label={`${member.name} LinkedIn`}
                >
                  <LiaLinkedin className="h-4 w-4" />
                </button>
              </div>

              {/* Content */}
              <div className="p-5">
                <p className="text-sm leading-7 text-slate-600 dark:text-slate-400">
                  {member.description}
                </p>

                {/* Skills */}
                <div className="mt-5 flex flex-wrap gap-2">
                  {member.skills.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-full border border-violet-500/15 bg-violet-500/[0.06] px-3 py-1.5 text-[11px] font-medium text-violet-600 dark:border-violet-400/15 dark:bg-violet-500/[0.08] dark:text-violet-300"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Hover Glow */}
              <div className="pointer-events-none absolute -bottom-20 left-1/2 h-40 w-40 -translate-x-1/2 rounded-full bg-violet-500/10 opacity-0 blur-3xl transition duration-500 group-hover:opacity-100" />
            </motion.article>
          ))}
        </div>

        {/* Bottom Message */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mx-auto mt-16 max-w-3xl text-center"
        >
          <div className="rounded-3xl border border-slate-200 bg-white/60 px-6 py-8 backdrop-blur-xl dark:border-white/[0.08] dark:bg-white/[0.025]">
            <p className="text-lg font-medium leading-8 text-slate-700 dark:text-slate-300 sm:text-xl">
              Different skills. One vision.
              <span className="bg-gradient-to-r from-violet-600 to-fuchsia-500 bg-clip-text font-semibold text-transparent dark:from-violet-400 dark:to-fuchsia-400">
                {" "}
                Building better digital experiences together.
              </span>
            </p>
          </div>
        </motion.div>
      </div>

      {/* Bottom Fade */}
      <div className="pointer-events-none absolute bottom-0 left-0 h-24 w-full bg-gradient-to-t from-[#fafafa] to-transparent dark:from-[#050509]" />
    </section>
  );
}

export default OurTeam;