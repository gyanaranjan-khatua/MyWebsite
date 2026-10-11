
import React from "react";
import {
  ArrowUpRight,
  Check,
  Smartphone,
  Sparkles,
  Code2,
  Layers,
  Zap,
  ShieldCheck,
} from "lucide-react";
import { motion } from "framer-motion";

import appDevelopmentImage from "../assets/appdev.png";

function AppDevelopment() {
  const handleWhatsAppClick = () => {
    const phoneNumber = "919040738633";
    const message = encodeURIComponent(
      [
        "Hello Gyanex Technology",
        "",
        "I'm interested in booking your app development service.",
      ].join("\n"),
    );
    const isMobile = /Android|iPhone|iPad|iPod/i.test(navigator.userAgent);
    const whatsappUrl = isMobile
      ? `whatsapp://send?phone=${phoneNumber}&text=${message}`
      : `https://web.whatsapp.com/send?phone=${phoneNumber}&text=${message}`;

    window.open(whatsappUrl, "_blank", "noopener,noreferrer");
  };

  const features = [
    "Android & iOS app development",
    "Modern and intuitive UI/UX",
    "Fast and reliable performance",
    "Scalable and secure architecture",
  ];

  const technologies = [
    { icon: Smartphone, label: "Mobile First" },
    { icon: Zap, label: "High Performance" },
    { icon: ShieldCheck, label: "Secure & Scalable" },
  ];

  return (
    <section
      id="app-development"
      className="relative min-h-[60vh] overflow-hidden bg-[#fafafa] py-5 text-slate-950 transition-colors duration-300 dark:bg-[#050509] dark:text-white lg:min-h-[80vh]"
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
        <div className="grid h-full items-center gap-12 py-16 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16 lg:py-0">

          {/* RIGHT CONTENT ON DESKTOP, FIRST ON MOBILE */}
          <motion.div
            initial={{ opacity: 0, x: 35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="order-1 max-w-xl lg:order-2 lg:justify-self-end"
          >
            {/* Label */}
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-violet-500/20 bg-violet-500/[0.07] px-4 py-2 text-sm font-medium text-violet-600 dark:border-violet-400/20 dark:bg-violet-500/10 dark:text-violet-300">
              <Smartphone className="h-4 w-4" />
              <span>App Development</span>
            </div>

            {/* Heading */}
            <h2 className="text-3xl font-semibold leading-[1.1] tracking-tight sm:text-4xl lg:text-5xl">
              Apps built to
              <span className="block bg-gradient-to-r from-violet-600 via-purple-600 to-fuchsia-500 bg-clip-text text-transparent dark:from-violet-400 dark:via-purple-400 dark:to-fuchsia-400">
                move your business forward.
              </span>
            </h2>

            {/* Description */}
            <p className="mt-5 max-w-lg text-sm leading-7 text-slate-600 dark:text-slate-400 sm:text-base">
              We build modern, intuitive, and high-performance mobile
              applications that help businesses connect with customers and
              deliver better digital experiences.
            </p>

            <p className="mt-3 max-w-lg text-sm leading-7 text-slate-500 dark:text-slate-500">
              From customer-facing applications to business-focused mobile
              solutions, we focus on seamless usability, reliable performance,
              and features designed around your goals.
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
            <div className="mt-7 flex flex-wrap items-center gap-4">
              <button
                type="button"
                onClick={handleWhatsAppClick}
                className="group inline-flex items-center gap-2 rounded-full bg-slate-950 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-violet-500/10 transition-all duration-300 hover:-translate-y-0.5 hover:bg-violet-600 dark:bg-white dark:text-slate-950 dark:hover:bg-violet-400"
              >
                Book Now
                <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </button>

              <div className="hidden items-center gap-2 text-xs text-slate-500 dark:text-slate-500 sm:flex">
                <Sparkles className="h-4 w-4 text-violet-500" />
                <span>Ideas transformed into apps</span>
              </div>
            </div>
          </motion.div>

          {/* LEFT IMAGE ON DESKTOP, SECOND ON MOBILE */}
          <motion.div
            initial={{ opacity: 0, x: -35, scale: 0.97 }}
            whileInView={{ opacity: 1, x: 0, scale: 1 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative order-2 flex min-h-[300px] items-center justify-center lg:order-1"
          >
            {/* Image Glow */}
            <div className="absolute -inset-5 rounded-[2rem] bg-gradient-to-br from-violet-500/20 via-purple-500/10 to-fuchsia-500/20 blur-2xl" />

            {/* Image Container */}
            <div className="relative w-full max-w-2xl overflow-hidden rounded-[2rem] border border-slate-200 bg-white/50 p-2 shadow-2xl shadow-slate-300/20 backdrop-blur-xl dark:border-white/[0.09] dark:bg-white/[0.035] dark:shadow-black/30">
              <div className="relative min-h-[300px] overflow-hidden rounded-[1.5rem] sm:min-h-[380px]">
                <img
                  src={appDevelopmentImage}
                  alt="Mobile application development"
                  loading="lazy"
                  className="absolute inset-0 h-full min-h-[300px] w-full object-contain transition-transform duration-700 hover:scale-[1.02] sm:min-h-[380px]"
                />

                {/* Image Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/5 to-transparent" />

                {/* Floating Feature Cards */}
                <motion.div
                  animate={{ y: [0, -6, 0] }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="absolute right-4 top-4 flex items-center gap-2 rounded-xl border border-white/20 bg-black/35 px-3 py-2.5 text-white shadow-lg backdrop-blur-xl sm:right-6 sm:top-6"
                >
                  <Code2 className="h-4 w-4 text-violet-300" />
                  <span className="text-xs font-medium">
                    Modern Technology
                  </span>
                </motion.div>

                <motion.div
                  animate={{ y: [0, 6, 0] }}
                  transition={{
                    duration: 4.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="absolute bottom-24 left-4 flex items-center gap-2 rounded-xl border border-white/20 bg-black/35 px-3 py-2.5 text-white shadow-lg backdrop-blur-xl sm:bottom-24 sm:left-6"
                >
                  <Layers className="h-4 w-4 text-fuchsia-300" />
                  <span className="text-xs font-medium">
                    Seamless Experience
                  </span>
                </motion.div>

                {/* Bottom Content */}
                <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6">
                  <div className="rounded-2xl border border-white/15 bg-black/35 p-4 backdrop-blur-xl sm:p-5">
                    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-violet-300">
                      Mobile Innovation
                    </p>

                    <p className="mt-1 text-base font-semibold text-white sm:text-lg">
                      Powerful apps. Better experiences. Real growth.
                    </p>

                    <div className="mt-4 flex flex-wrap gap-x-5 gap-y-2">
                      {technologies.map(({ icon: Icon, label }) => (
                        <div
                          key={label}
                          className="flex items-center gap-1.5 text-xs text-white/80"
                        >
                          <Icon className="h-3.5 w-3.5 text-violet-300" />
                          {label}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Accent */}
            <motion.div
              animate={{ y: [0, -8, 0], rotate: [0, 5, 0] }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute -left-3 -top-3 hidden h-14 w-14 rounded-2xl border border-violet-400/20 bg-violet-500/10 backdrop-blur-xl sm:block"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default AppDevelopment;
