import React from "react";
import { Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import { FaUser, FaUserTie } from "react-icons/fa6";

const teamMembers = [
  {
    name: "Gyanaranjan Khatua",
    role: "CEO & Founder",
    gender: "male",
    description:
      "Gyanaranjan leads Gyanex as CEO and founder, focusing on frontend engineering, modern web technologies, and user experience. He turns ideas into polished, reliable digital products.",
    skills: ["Frontend Engineering", "React.js", "Next.js", "Web Development"],
  },
  {
    name: "Hinangshu",
    role: "Director & Full-Stack Developer",
    gender: "male",
    description:
      "Hinangshu directs the startup, bringing experience in software development and marketing. He is also a full-stack developer, guiding products from planning through launch.",
    skills: ["Full Stack", "Software Development", "Marketing", "Leadership"],
  },
  {
    name: "Jitendra",
    role: "Application & Full-Stack Developer",
    gender: "male",
    description:
      "Jitendra is an application developer and Laravel full-stack developer, building reliable mobile and web experiences with a focus on performance and usability.",
    skills: ["App Development", "Laravel", "Full Stack", "Mobile Apps"],
  },
  {
    name: "Jashmin Dash",
    role: "Social Media Manager",
    gender: "female",
    description:
      "Jashmin Dash manages social media, creating engaging content and campaigns that strengthen brand presence and connect with the right audience.",
    skills: ["Social Media", "Content Creation", "Campaigns", "Brand Growth"],
  },
  {
    name: "Hrudananda",
    role: "Graphics Designer",
    gender: "male",
    description:
      "Hrudananda creates thoughtful visual assets, from digital graphics to marketing materials, helping brands communicate clearly and make a lasting impression.",
    skills: ["Graphic Design", "Branding", "Visual Design", "Creative"],
  },
  {
    name: "Geeta",
    role: "Digital Marketer",
    gender: "female",
    description:
      "Geeta helps brands grow online through digital marketing, connecting businesses with their audiences and supporting meaningful, measurable engagement.",
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
              className="group relative flex h-full flex-col overflow-hidden rounded-[1.75rem] border border-slate-200 bg-white/70 p-3 shadow-xl shadow-slate-200/30 backdrop-blur-xl transition-all duration-500 hover:-translate-y-2 hover:border-violet-400/40 hover:shadow-violet-500/10 dark:border-white/[0.09] dark:bg-white/[0.035] dark:shadow-black/20"
            >
              {/* Member Icon */}
              <div className="relative flex aspect-[4/4.5] items-center justify-center overflow-hidden rounded-[1.4rem] bg-gradient-to-br from-violet-100 via-purple-50 to-fuchsia-100 dark:from-violet-950/70 dark:via-[#151020] dark:to-fuchsia-950/50">
                <div className="absolute inset-0 bg-gradient-to-t from-violet-950/70 via-transparent to-transparent" />
                <div className="flex h-36 w-36 items-center justify-center rounded-full border border-violet-400/20 bg-white/50 text-violet-500 shadow-xl shadow-violet-900/10 dark:bg-white/[0.06] dark:text-violet-300">
                  {member.gender === "female" ? (
                    <FaUser
                      aria-hidden="true"
                      className="h-16 w-16 transition-transform duration-500 group-hover:scale-110"
                    />
                  ) : (
                    <FaUserTie
                      aria-hidden="true"
                      className="h-16 w-16 transition-transform duration-500 group-hover:scale-110"
                    />
                  )}
                </div>

                {/* Role */}
                <div className="absolute bottom-4 left-4 right-4">
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-violet-300">
                    {member.role}
                  </p>

                  <h3 className="mt-1 text-xl font-semibold text-white">
                    {member.name}
                  </h3>
                </div>
              </div>

              {/* Content */}
              <div className="flex flex-1 flex-col p-5">
                <p className="line-clamp-3 min-h-[4.5rem] text-sm leading-6 text-slate-600 dark:text-slate-400">
                  {member.description}
                </p>

                {/* Skills */}
                <div className="mt-auto flex min-h-[4.5rem] flex-wrap content-start gap-2 pt-5">
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