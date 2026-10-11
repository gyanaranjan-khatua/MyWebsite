import React from "react";
import { ArrowUpRight, Check, Code2, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

import websiteDevelopmentImage from "../assets/webdev.png";

function WebsiteDevelopment() {
  const features = [
    "Modern & responsive design",
    "Fast and performance-focused",
    "SEO-friendly development",
    "Built for your business goals",
  ];

  return (
    <section
      id="website-development"
      className="relative min-h-[60vh] overflow-hidden bg-[#fafafa] text-slate-950 dark:bg-[#050509] dark:text-white py-5 lg:h-[80vh]"
    >
      {/* Background Grid */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.4] dark:opacity-[0.16]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(139,92,246,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(139,92,246,0.08) 1px, transparent 1px)",
          backgroundSize: "70px 70px",
        }}
      />

      {/* Ambient Glow */}
      <div className="pointer-events-none absolute -left-40 top-1/2 h-[450px] w-[450px] -translate-y-1/2 rounded-full bg-violet-500/10 blur-[130px] dark:bg-violet-600/10" />

      <div className="pointer-events-none absolute -right-40 top-0 h-[450px] w-[450px] rounded-full bg-fuchsia-500/10 blur-[130px] dark:bg-fuchsia-600/10" />

      <div className="relative mx-auto h-full max-w-7xl px-6 sm:px-8 lg:px-10">
        <div className="grid h-full items-center gap-12 py-16 lg:grid-cols-[0.95fr_1.05fr] lg:gap-16 lg:py-0">

          {/* LEFT CONTENT */}
          <motion.div
            initial={{ opacity: 0, x: -35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="max-w-xl"
          >
            {/* Label */}
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-violet-500/20 bg-violet-500/[0.07] px-4 py-2 text-sm font-medium text-violet-600 dark:border-violet-400/20 dark:bg-violet-500/10 dark:text-violet-300">
              <Code2 className="h-4 w-4" />
              <span>Website Development</span>
            </div>

            {/* Heading */}
            <h2 className="text-3xl font-semibold leading-[1.1] tracking-tight sm:text-4xl lg:text-5xl">
              Websites built to
              <span className="block bg-gradient-to-r from-violet-600 via-purple-600 to-fuchsia-500 bg-clip-text text-transparent dark:from-violet-400 dark:via-purple-400 dark:to-fuchsia-400">
                grow your business.
              </span>
            </h2>

            {/* Description */}
            <p className="mt-5 max-w-lg text-sm leading-7 text-slate-600 sm:text-base dark:text-slate-400">
              We create modern, responsive, and high-performance websites that
              represent your brand professionally and turn visitors into
              meaningful customers.
            </p>

            <p className="mt-3 max-w-lg text-sm leading-7 text-slate-500 dark:text-slate-500">
              From business websites to powerful web experiences, every
              project is designed around your goals, your audience, and the
              results you want to achieve.
            </p>

            {/* Features */}
            <div className="mt-6 grid grid-cols-1 gap-2.5 sm:grid-cols-2">
              {features.map((feature) => (
                <div
                  key={feature}
                  className="flex items-center gap-2.5 text-sm text-slate-700 dark:text-slate-300"
                >
                  <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-violet-500/10 text-violet-600 dark:bg-violet-500/15 dark:text-violet-400">
                    <Check className="h-3 w-3" />
                  </span>

                  {feature}
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className="mt-7 flex items-center gap-4">
              <a
                href="#contact"
                className="group inline-flex items-center gap-2 rounded-full bg-slate-950 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-violet-500/10 transition-all duration-300 hover:-translate-y-0.5 hover:bg-violet-600 dark:bg-white dark:text-slate-950 dark:hover:bg-violet-400"
              >
                Book Now
                <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </a>

              <div className="hidden items-center gap-2 text-xs text-slate-500 sm:flex dark:text-slate-500">
                <Sparkles className="h-4 w-4 text-violet-500" />
                <span>Built with quality & purpose</span>
              </div>
            </div>
          </motion.div>

          {/* RIGHT IMAGE */}
          <motion.div
            initial={{ opacity: 0, x: 35, scale: 0.97 }}
            whileInView={{ opacity: 1, x: 0, scale: 1 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative flex h-full min-h-[300px] items-center justify-center"
          >
            {/* Image Glow */}
            <div className="absolute -inset-5 rounded-[2rem] bg-gradient-to-br from-violet-500/20 via-purple-500/10 to-fuchsia-500/20 blur-2xl" />

            {/* Image Container */}
            <div className="relative w-full max-w-2xl overflow-hidden rounded-[2rem] border border-slate-200 bg-white/50 p-2 shadow-2xl shadow-slate-300/20 backdrop-blur-xl dark:border-white/[0.09] dark:bg-white/[0.035] dark:shadow-black/30">
              <div className="relative h-full min-h-[300px] overflow-hidden rounded-[1.5rem]">
                <img
                  src={websiteDevelopmentImage}
                  alt="Professional website development"
                  className="h-full w-full object-contain transition rounded-2xl duration-700"
                />

                {/* Image Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/10 to-transparent" />

                {/* Bottom Content */}
                <div className="absolute bottom-5 left-5 right-5">
                  <div className="rounded-2xl border border-white/15 bg-black/30 p-5 backdrop-blur-xl">
                    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-violet-300">
                      Digital Presence
                    </p>

                    <p className="mt-1 text-lg font-semibold text-white">
                      Your website should work as hard as your business.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Accent */}
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute -right-3 -top-3 hidden h-14 w-14 rounded-2xl border border-violet-400/20 bg-violet-500/10 backdrop-blur-xl sm:block"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default WebsiteDevelopment;