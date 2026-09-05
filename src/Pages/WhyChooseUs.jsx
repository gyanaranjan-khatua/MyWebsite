
import React from "react";
import {
  ArrowUpRight,
  Check,
  ShieldCheck,
  Zap,
  Users,
  Target,
} from "lucide-react";
import { motion } from "framer-motion";

function WhyChooseUs() {
  const reasons = [
    {
      number: "01",
      icon: Target,
      title: "Built Around You",
      text: "We don't force your business into a template. Every website and application is shaped around your goals, audience, and actual requirements.",
    },
    {
      number: "02",
      icon: ShieldCheck,
      title: "Quality You Can Trust",
      text: "From clean interfaces to reliable functionality, we focus on creating digital products that feel professional, stable, and dependable.",
    },
    {
      number: "03",
      icon: Zap,
      title: "Smart & Modern",
      text: "We use modern technologies and practical solutions to build digital experiences that are fast, responsive, scalable, and ready for growth.",
    },
    {
      number: "04",
      icon: Users,
      title: "Your Success Matters",
      text: "We work closely with our clients, understand their challenges, and focus on delivering value rather than simply delivering a project.",
    },
  ];

  return (
    <section className="relative overflow-hidden bg-black py-24 text-white sm:py-32">

      {/* =========================
          BACKGROUND
      ========================== */}
      <div className="pointer-events-none absolute inset-0">

        {/* Grid */}
        <div
          className="absolute inset-0 opacity-[0.11]"
          style={{
            backgroundImage: `
              linear-gradient(
                rgba(255,255,255,0.08) 1px,
                transparent 1px
              ),
              linear-gradient(
                90deg,
                rgba(255,255,255,0.08) 1px,
                transparent 1px
              )
            `,
            backgroundSize: "70px 70px",
          }}
        />

        {/* Radial fade */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,#000_78%)]" />

        {/* Amber glow */}
        <div className="absolute left-1/2 top-[20%] h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-amber-500/[0.055] blur-[160px]" />

        <div className="absolute -right-40 bottom-0 h-[400px] w-[400px] rounded-full bg-amber-400/[0.04] blur-[140px]" />
      </div>

      {/* =========================
          CONTAINER
      ========================== */}
      <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">

        {/* =========================
            HEADER
        ========================== */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{
            duration: 0.8,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="mx-auto max-w-3xl text-center"
        >

          {/* Label */}
          <div className="mb-6 flex items-center justify-center gap-3">
            <span className="h-px w-10 bg-amber-400" />

            <span className="text-xs font-semibold uppercase tracking-[0.25em] text-amber-400">
              Why Gyanex
            </span>

            <span className="h-px w-10 bg-amber-400" />
          </div>

          {/* Heading */}
          <h2 className="text-4xl font-semibold leading-[1.08] tracking-[-0.04em] sm:text-5xl md:text-6xl">
            More than a service.
            <span className="block text-white/40">
              A digital partner you can trust.
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-white/45 sm:text-lg">
            We believe the best digital products come from understanding the
            people behind them. That's why we put your needs, your customers,
            and your long-term growth at the center of everything we build.
          </p>

        </motion.div>

        {/* =========================
            CENTER STATEMENT
        ========================== */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{
            duration: 0.8,
            delay: 0.1,
          }}
          className="relative mx-auto mt-16 max-w-4xl"
        >

          {/* Outer glow */}
          <div className="absolute -inset-5 rounded-[40px] bg-amber-500/[0.03] blur-2xl" />

          {/* Main glass */}
          <div
            className="
              relative
              overflow-hidden
              rounded-[34px]
              border
              border-white/[0.10]
              bg-white/[0.035]
              px-6
              py-12
              backdrop-blur-2xl
              sm:px-10
              sm:py-14
            "
          >

            {/* Decorative top line */}
            <div className="absolute left-1/2 top-0 h-px w-32 -translate-x-1/2 bg-gradient-to-r from-transparent via-amber-400 to-transparent" />

            {/* Large quote */}
            <div className="text-center">

              <span className="text-6xl font-serif leading-none text-amber-400/30">
                “
              </span>

              <h3 className="mx-auto mt-2 max-w-3xl text-2xl font-medium leading-relaxed tracking-tight sm:text-3xl md:text-4xl">
                Your idea deserves more than just a website.
                <span className="text-amber-400">
                  {" "}
                  It deserves the right digital experience.
                </span>
              </h3>

              <div className="mt-7 flex items-center justify-center gap-3">
                <span className="h-px w-8 bg-white/15" />

                <span className="text-xs uppercase tracking-[0.2em] text-white/30">
                  The Gyanex Approach
                </span>

                <span className="h-px w-8 bg-white/15" />
              </div>

            </div>

          </div>
        </motion.div>

        {/* =========================
            REASONS GRID
        ========================== */}
        <div className="relative mt-8">

          {/* Connecting horizontal line */}
          <div className="pointer-events-none absolute left-[12%] right-[12%] top-0 hidden h-px bg-gradient-to-r from-transparent via-white/10 to-transparent lg:block" />

          <div className="grid gap-px overflow-hidden rounded-[32px] border border-white/[0.10] bg-white/[0.08] sm:grid-cols-2 lg:grid-cols-4">

            {reasons.map((reason, index) => {
              const Icon = reason.icon;

              return (
                <motion.div
                  key={reason.number}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.15 }}
                  transition={{
                    duration: 0.7,
                    delay: index * 0.1,
                  }}
                  className="
                    group
                    relative
                    min-h-[300px]
                    bg-black
                    p-7
                    transition-all
                    duration-500
                    hover:bg-white/[0.035]
                    sm:p-8
                  "
                >

                  {/* Hover amber glow */}
                  <div className="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full bg-amber-500/[0.08] opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100" />

                  {/* Number */}
                  <div className="flex items-center justify-between">

                    <span className="text-xs font-medium text-amber-400">
                      {reason.number}
                    </span>

                    <span className="text-xs text-white/15">
                      GYANEX
                    </span>

                  </div>

                  {/* Icon */}
                  <div
                    className="
                      mt-10
                      flex
                      h-12
                      w-12
                      items-center
                      justify-center
                      rounded-2xl
                      border
                      border-white/10
                      bg-white/[0.04]
                      text-white/60
                      transition-all
                      duration-500
                      group-hover:border-amber-400/30
                      group-hover:bg-amber-500
                      group-hover:text-black
                    "
                  >
                    <Icon size={21} strokeWidth={1.7} />
                  </div>

                  {/* Content */}
                  <h4 className="mt-7 text-lg font-semibold">
                    {reason.title}
                  </h4>

                  <p className="mt-3 text-sm leading-6 text-white/40">
                    {reason.text}
                  </p>

                  {/* Bottom check */}
                  <div className="absolute bottom-7 left-7 flex items-center gap-2 text-[11px] uppercase tracking-[0.15em] text-white/20 transition-colors duration-300 group-hover:text-amber-400 sm:left-8 sm:bottom-8">

                    <span className="flex h-5 w-5 items-center justify-center rounded-full bg-white/[0.05] transition-colors group-hover:bg-amber-500/10">
                      <Check size={11} />
                    </span>

                    Client Focused

                  </div>

                </motion.div>
              );
            })}

          </div>
        </div>

        {/* =========================
            BOTTOM CTA
        ========================== */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mt-10 flex flex-col items-center justify-between gap-5 sm:flex-row"
        >

          <p className="text-center text-sm text-white/30 sm:text-left">
            Let's build something that creates real value for your business.
          </p>

          <a
            href="/contact"
            className="
              group
              inline-flex
              shrink-0
              items-center
              gap-2
              rounded-full
              border
              border-amber-400/25
              bg-amber-500/[0.06]
              px-5
              py-3
              text-sm
              font-medium
              text-amber-400
              transition-all
              duration-300
              hover:bg-amber-500
              hover:text-black
              hover:shadow-[0_0_30px_rgba(245,158,11,0.18)]
            "
          >
            Work With Us

            <ArrowUpRight
              size={16}
              className="
                transition-transform
                duration-300
                group-hover:-translate-y-0.5
                group-hover:translate-x-0.5
              "
            />
          </a>

        </motion.div>

      </div>

      {/* Bottom fade */}
      <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-black to-transparent" />

    </section>
  );
}

export default WhyChooseUs;

