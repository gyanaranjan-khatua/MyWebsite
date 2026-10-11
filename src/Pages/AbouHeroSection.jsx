import React from "react";
import { ArrowUpRight, CheckCircle2, Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import aboutHeroImage from "../assets/about-hero.png";
function AbouHeroSection() {
  return (
    <section className="relative min-h-[85vh] overflow-hidden bg-[#fafafa] text-slate-950 dark:bg-[#050509] dark:text-white">
      {/* Background Grid */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.45] dark:opacity-[0.2]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(139,92,246,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(139,92,246,0.08) 1px, transparent 1px)",
          backgroundSize: "70px 70px",
        }}
      />

      {/* Ambient Glows */}
      <div className="pointer-events-none absolute -left-32 top-20 h-96 w-96 rounded-full bg-violet-500/10 blur-[120px] dark:bg-violet-600/15" />
      <div className="pointer-events-none absolute right-0 top-1/3 h-[500px] w-[500px] rounded-full bg-fuchsia-500/10 blur-[140px] dark:bg-fuchsia-600/10" />

      <div className="relative mx-auto flex min-h-[85vh] max-w-7xl items-center px-6 py-20 sm:px-8 lg:px-10">
        <div className="grid w-full items-center gap-14 lg:grid-cols-[1fr_0.95fr] lg:gap-20">
          
          {/* LEFT CONTENT */}
          <motion.div
            initial={{ opacity: 0, x: -35 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="max-w-2xl"
          >
            {/* Label */}
            <div className="mb-4 mt-2 inline-flex items-center gap-2 rounded-full border border-violet-500/20 bg-violet-500/[0.07] px-4 py-2 text-sm font-medium text-violet-600 dark:border-violet-400/20 dark:bg-violet-500/10 dark:text-violet-300">
              <Sparkles className="h-4 w-4" />
              <span>About Gyanex</span>
            </div>

            {/* Heading */}
            <h1 className="text-4xl font-semibold leading-[1.08] tracking-tight sm:text-5xl lg:text-6xl">
              We build digital
              <span className="block bg-gradient-to-r from-violet-600 via-purple-600 to-fuchsia-500 bg-clip-text text-transparent dark:from-violet-400 dark:via-purple-400 dark:to-fuchsia-400">
                experiences you can trust.
              </span>
            </h1>

            {/* Description */}
            <p className="mt-4 max-w-xl text-base leading-8 text-slate-600 sm:text-lg dark:text-slate-400">
              Gyanex is a professional development team focused on building
              high-quality websites and digital solutions that help businesses
              grow, connect with their customers, and achieve meaningful
              results.
            </p>

            <p className="mt-4 max-w-xl text-base leading-7 text-slate-500 dark:text-slate-500">
              We combine modern technology, thoughtful design, clean
              development, and a commitment to quality to turn ideas into
              reliable digital products built for the long term.
            </p>

            {/* Trust Points */}
            <div className="mt-9 grid gap-4 sm:grid-cols-2">
              {[
                "Professional Development",
                "Quality-Driven Solutions",
                "Transparent Communication",
                "Built for Real Results",
              ].map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <CheckCircle2 className="h-5 w-5 shrink-0 text-violet-600 dark:text-violet-400" />
                  <span className="text-sm font-medium text-slate-700 dark:text-slate-300">
                    {item}
                  </span>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className="mt-6 flex flex-wrap items-center gap-4">
              <Link
                to="/contact"
                className="group inline-flex items-center gap-2 rounded-full bg-slate-950 px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-violet-500/10 transition-all duration-300 hover:-translate-y-0.5 hover:bg-violet-600 dark:bg-white dark:text-slate-950 dark:hover:bg-violet-400"
              >
                Let's Work Together
                <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>

              <Link
                to="/services"
                className="rounded-full border border-slate-300 bg-white/60 px-6 py-3.5 text-sm font-semibold text-slate-700 backdrop-blur-md transition-all duration-300 hover:border-violet-400 hover:text-violet-600 dark:border-white/10 dark:bg-white/[0.03] dark:text-slate-300 dark:hover:border-violet-400 dark:hover:text-violet-400"
              >
                Explore Our Services
              </Link>
            </div>
          </motion.div>

          {/* RIGHT IMAGE */}
          <motion.div
            initial={{ opacity: 0, x: 35, scale: 0.97 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.15, ease: "easeOut" }}
            className="relative"
          >


            {/* Glow */}
            <div className="absolute -inset-6 rounded-[2rem] bg-gradient-to-br from-violet-500/20 via-purple-500/10 to-fuchsia-500/20 blur-2xl" />

            {/* Image Card */}
            <div className="relative overflow-hidden rounded-[2rem] border border-slate-200 bg-white/60 p-2 shadow-2xl shadow-slate-300/20 backdrop-blur-xl dark:border-white/[0.10] dark:bg-white/[0.035] dark:shadow-black/40">
              <div className="relative aspect-[4/4.4] overflow-hidden rounded-[1.5rem]">
                <img
                  src={aboutHeroImage}
                  alt="Professional Gyanex development team"
                  className="h-full w-full object-cover"
                />

                {/* Image Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/5" />

                {/* Bottom Glass Card */}
                <div className="absolute bottom-5 left-5 right-5 rounded-2xl border border-white/15 bg-black/35 p-5 backdrop-blur-xl">
                  <p className="text-sm font-medium text-violet-300">
                    Our Approach
                  </p>

                  <p className="mt-1 text-lg font-semibold text-white">
                    Quality. Trust. Technology. Results.
                  </p>
                </div>
              </div>
            </div>

            {/* Floating Badge */}
            <motion.div
              animate={{ y: [0, -7, 0] }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute -bottom-5 -left-5 hidden rounded-2xl border border-slate-200 bg-white/90 px-5 py-4 shadow-xl backdrop-blur-xl sm:block dark:border-white/10 dark:bg-[#101016]/90"
            >
              <p className="text-xs font-medium text-slate-500 dark:text-slate-400">
                Built with
              </p>
              <p className="mt-1 text-sm font-bold text-slate-900 dark:text-white">
                Modern Technology
              </p>
            </motion.div>

            {/* Small Accent */}
            <div className="absolute -right-3 -top-3 h-16 w-16 rounded-2xl border border-violet-500/20 bg-violet-500/10 backdrop-blur-xl" />
          </motion.div>
        </div>
      </div>

      {/* Bottom Fade */}
      <div className="pointer-events-none absolute bottom-0 left-0 h-32 w-full bg-gradient-to-t from-[#fafafa] to-transparent dark:from-[#050509]" />
    </section>
  );
}

export default AbouHeroSection;