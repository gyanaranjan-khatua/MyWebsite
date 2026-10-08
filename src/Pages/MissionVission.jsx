import React from "react";
import { ArrowUpRight, Eye, Target, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

function MissionVission() {
  return (
    <section
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
      <div className="pointer-events-none absolute -left-40 top-10 h-[450px] w-[450px] rounded-full bg-violet-500/10 blur-[130px] dark:bg-violet-600/10" />

      <div className="pointer-events-none absolute -right-40 bottom-0 h-[500px] w-[500px] rounded-full bg-fuchsia-500/10 blur-[140px] dark:bg-fuchsia-600/10" />

      <div className="relative mx-auto max-w-7xl px-6 sm:px-8 lg:px-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
          className="mx-auto max-w-3xl text-center"
        >
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-violet-500/20 bg-violet-500/[0.07] px-4 py-2 text-sm font-medium text-violet-600 dark:border-violet-400/20 dark:bg-violet-500/10 dark:text-violet-300">
            <Sparkles className="h-4 w-4" />
            <span>What Drives Us</span>
          </div>

          <h2 className="text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl">
            Our Mission &{" "}
            <span className="bg-gradient-to-r from-violet-600 via-purple-600 to-fuchsia-500 bg-clip-text text-transparent dark:from-violet-400 dark:via-purple-400 dark:to-fuchsia-400">
              Vision
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-slate-600 sm:text-lg dark:text-slate-400">
            We believe technology should do more than look good. It should
            solve real problems, create opportunities, and help businesses
            move forward with confidence.
          </p>
        </motion.div>

        {/* Mission + Vision */}
        <div className="mt-16 grid gap-6 lg:grid-cols-2">
          {/* Mission */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7 }}
            className="group relative overflow-hidden rounded-[2rem] border border-slate-200 bg-white/70 p-8 shadow-xl shadow-slate-200/30 backdrop-blur-xl sm:p-10 dark:border-white/[0.09] dark:bg-white/[0.035] dark:shadow-black/20"
          >
            {/* Glow */}
            <div className="absolute -right-24 -top-24 h-64 w-64 rounded-full bg-violet-500/10 blur-3xl transition duration-500 group-hover:bg-violet-500/20" />

            <div className="relative">
              {/* Icon */}
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-violet-500/20 bg-violet-500/10 text-violet-600 dark:border-violet-400/20 dark:bg-violet-500/10 dark:text-violet-300">
                <Target className="h-7 w-7" />
              </div>

              <p className="mt-8 text-sm font-semibold uppercase tracking-[0.2em] text-violet-600 dark:text-violet-400">
                Our Mission
              </p>

              <h3 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
                Build with purpose.
              </h3>

              <p className="mt-6 text-base leading-8 text-slate-600 dark:text-slate-400">
                Our mission is to help businesses and individuals turn their
                ideas into high-quality digital products. We focus on building
                websites and software that are reliable, intuitive,
                scalable, and designed around real business needs.
              </p>

              <p className="mt-4 text-base leading-8 text-slate-600 dark:text-slate-400">
                Through modern technology, thoughtful design, and transparent
                collaboration, we aim to deliver solutions that provide
                genuine value—not just a finished product.
              </p>

              {/* Bottom Line */}
              <div className="mt-8 flex items-center gap-3 border-t border-slate-200 pt-6 dark:border-white/[0.08]">
                <div className="h-1.5 w-10 rounded-full bg-gradient-to-r from-violet-500 to-fuchsia-500" />
                <span className="text-sm font-medium text-slate-500 dark:text-slate-400">
                  Technology that creates real value.
                </span>
              </div>
            </div>
          </motion.div>

          {/* Vision */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="group relative overflow-hidden rounded-[2rem] border border-violet-500/20 bg-gradient-to-br from-violet-500/[0.08] via-white/70 to-fuchsia-500/[0.06] p-8 shadow-xl shadow-violet-500/5 backdrop-blur-xl sm:p-10 dark:border-violet-400/15 dark:from-violet-500/[0.12] dark:via-white/[0.035] dark:to-fuchsia-500/[0.08]"
          >
            {/* Glow */}
            <div className="absolute -bottom-24 -right-24 h-72 w-72 rounded-full bg-fuchsia-500/10 blur-3xl transition duration-500 group-hover:bg-fuchsia-500/20" />

            <div className="relative">
              {/* Icon */}
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-fuchsia-500/20 bg-fuchsia-500/10 text-fuchsia-600 dark:border-fuchsia-400/20 dark:bg-fuchsia-500/10 dark:text-fuchsia-300">
                <Eye className="h-7 w-7" />
              </div>

              <p className="mt-8 text-sm font-semibold uppercase tracking-[0.2em] text-fuchsia-600 dark:text-fuchsia-400">
                Our Vision
              </p>

              <h3 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
                Shape what comes next.
              </h3>

              <p className="mt-6 text-base leading-8 text-slate-600 dark:text-slate-400">
                Our vision is to become a trusted technology partner for
                businesses that want to grow and build a stronger digital
                presence. We want to create digital experiences that people
                remember and technology that businesses can depend on.
              </p>

              <p className="mt-4 text-base leading-8 text-slate-600 dark:text-slate-400">
                As technology continues to evolve, we aim to keep learning,
                adapting, and pushing ourselves to create better, smarter,
                and more meaningful digital solutions.
              </p>

              {/* Bottom Line */}
              <div className="mt-8 flex items-center gap-3 border-t border-slate-200 pt-6 dark:border-white/[0.08]">
                <div className="h-1.5 w-10 rounded-full bg-gradient-to-r from-fuchsia-500 to-violet-500" />
                <span className="text-sm font-medium text-slate-500 dark:text-slate-400">
                  Building a better digital future.
                </span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Closing Statement */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mx-auto mt-12 max-w-4xl text-center"
        >
          <div className="group inline-flex max-w-3xl flex-col items-center justify-center rounded-3xl border border-slate-200 bg-white/60 px-7 py-7 backdrop-blur-xl transition-all duration-300 hover:border-violet-400/30 dark:border-white/[0.08] dark:bg-white/[0.025]">
            <p className="text-lg font-medium leading-8 text-slate-700 sm:text-xl dark:text-slate-300">
              We don't just build software.
            </p>

            <p className="mt-1 text-lg font-semibold leading-8 sm:text-xl">
              We build{" "}
              <span className="bg-gradient-to-r from-violet-600 to-fuchsia-500 bg-clip-text text-transparent dark:from-violet-400 dark:to-fuchsia-400">
                trust, quality, and opportunities
              </span>{" "}
              through technology.
            </p>

            <a
              href="#contact"
              className="group mt-5 inline-flex items-center gap-2 text-sm font-semibold text-violet-600 transition-colors hover:text-fuchsia-600 dark:text-violet-400 dark:hover:text-fuchsia-400"
            >
              Let's build something meaningful
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </a>
          </div>
        </motion.div>
      </div>

      {/* Bottom Fade */}
      <div className="pointer-events-none absolute bottom-0 left-0 h-24 w-full bg-gradient-to-t from-[#fafafa] to-transparent dark:from-[#050509]" />
    </section>
  );
}

export default MissionVission;