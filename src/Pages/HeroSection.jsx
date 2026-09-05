
import React from "react";
import { ArrowUpRight, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

import heroImage from "../assets/heroimg.png";

function HeroSection() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-black text-white">

      {/* =========================
          BACKGROUND GRID
      ========================== */}
      <div className="pointer-events-none absolute inset-0">

        {/* Grid */}
        <div
          className="absolute inset-0 opacity-[0.16]"
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

        {/* Radial grid fade */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,#000_78%)]" />

        {/* Amber glow behind content */}
        <div className="absolute left-[5%] top-[35%] h-[350px] w-[350px] rounded-full bg-amber-500/[0.08] blur-[130px]" />

        {/* Amber glow behind image */}
        <div className="absolute right-[5%] top-[15%] h-[350px] w-[350px] rounded-full bg-amber-400/[0.06] blur-[130px]" />
      </div>

      {/* =========================
          HERO CONTENT
      ========================== */}
      <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl items-center px-5 pb-16 pt-28 sm:px-8 lg:px-10">

        <div className="grid w-full items-center gap-14 lg:grid-cols-[0.9fr_1fr] lg:gap-20">

          {/* =========================
              LEFT — CONTENT
          ========================== */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              duration: 0.9,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="order-1"
          >

            {/* Small Label */}
            <div className="mb-6 flex items-center gap-3">

              <span className="h-px w-10 bg-amber-400" />

              <span className="text-xs font-semibold uppercase tracking-[0.25em] text-amber-400">
                Welcome to Gyanex
              </span>

            </div>

            {/* Heading */}
            <h1 className="max-w-2xl text-5xl font-semibold leading-[1.05] tracking-[-0.04em] sm:text-6xl md:text-7xl lg:text-[72px]">

              Ideas into

              <span className="block">
                <span className="text-white">
                  Digital{" "}
                </span>

                <span className="text-amber-400">
                  Impact.
                </span>
              </span>

            </h1>

            {/* Description */}
            <p className="mt-7 max-w-xl text-base leading-7 text-white/55 sm:text-lg">
              Gyanex creates modern digital experiences that combine
              thoughtful design, powerful technology, and a clear vision
              to help businesses move forward.
            </p>

            {/* CTA Buttons */}
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">

              {/* Primary CTA */}
              <a
                href="/contact"
                className="
                  group
                  inline-flex
                  items-center
                  justify-center
                  gap-2
                  rounded-full
                  bg-amber-500
                  px-6
                  py-3.5
                  text-sm
                  font-semibold
                  text-black
                  transition-all
                  duration-300
                  hover:bg-amber-400
                  hover:shadow-[0_0_30px_rgba(245,158,11,0.22)]
                "
              >
                Start a Project

                <ArrowUpRight
                  size={17}
                  className="
                    transition-transform
                    duration-300
                    group-hover:-translate-y-0.5
                    group-hover:translate-x-0.5
                  "
                />
              </a>

              {/* Secondary CTA */}
              <a
                href="/services"
                className="
                  inline-flex
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-white/15
                  bg-white/[0.04]
                  px-6
                  py-3.5
                  text-sm
                  font-medium
                  text-white/80
                  backdrop-blur-xl
                  transition-all
                  duration-300
                  hover:border-amber-400/30
                  hover:bg-white/[0.08]
                  hover:text-white
                "
              >
                Explore Services
              </a>

            </div>

            {/* =========================
                STATS
            ========================== */}
            <div className="mt-12 flex flex-wrap gap-x-8 gap-y-5 border-t border-white/10 pt-7 sm:gap-x-10">

              <div>
                <p className="text-2xl font-semibold text-white">
                  01
                </p>

                <p className="mt-1 text-xs uppercase tracking-wider text-white/35">
                  Vision
                </p>
              </div>

              <div className="hidden h-10 w-px bg-white/10 sm:block" />

              <div>
                <p className="text-2xl font-semibold text-white">
                  100%
                </p>

                <p className="mt-1 text-xs uppercase tracking-wider text-white/35">
                  Commitment
                </p>
              </div>

              <div className="hidden h-10 w-px bg-white/10 sm:block" />

              <div>
                <p className="text-2xl font-semibold text-amber-400">
                  ∞
                </p>

                <p className="mt-1 text-xs uppercase tracking-wider text-white/35">
                  Possibilities
                </p>
              </div>

            </div>

          </motion.div>

          {/* =========================
              RIGHT — IMAGE
          ========================== */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              duration: 0.9,
              delay: 0.15,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="relative order-2"
          >

            {/* Image Wrapper */}
            <div className="relative mx-auto max-w-[620px]">

              {/* Amber Border Glow */}
              <div
                className="
                  absolute
                  -inset-[1px]
                  rounded-[30px]
                  bg-gradient-to-br
                  from-amber-400/50
                  via-transparent
                  to-white/10
                  opacity-70
                  blur-[1px]
                "
              />

              {/* Image Container */}
              <div
                className="
                  relative
                  aspect-[4/4.5]
                  overflow-hidden
                  rounded-[30px]
                  border
                  border-white/10
                  bg-white/[0.04]
                  shadow-2xl
                "
              >

                <img
                  src={heroImage}
                  alt="Gyanex Digital Technology"
                  className="
                    h-full
                    w-full
                    object-cover
                    opacity-90
                    transition-transform
                    duration-700
                    hover:scale-105
                  "
                />

                {/* Dark Overlay */}
                <div
                  className="
                    absolute
                    inset-0
                    bg-gradient-to-t
                    from-black
                    via-transparent
                    to-black/10
                  "
                />

                {/* Amber Bottom Glow */}
                <div
                  className="
                    absolute
                    bottom-0
                    left-0
                    h-40
                    w-full
                    bg-gradient-to-t
                    from-amber-500/10
                    to-transparent
                  "
                />

                {/* =========================
                    FLOATING GLASS BADGE
                ========================== */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    delay: 0.7,
                    duration: 0.6,
                  }}
                  className="
                    absolute
                    bottom-6
                    left-6
                    rounded-2xl
                    border
                    border-white/15
                    bg-black/50
                    px-5
                    py-4
                    backdrop-blur-xl
                  "
                >

                  <div className="flex items-center gap-3">

                    <div
                      className="
                        flex
                        h-9
                        w-9
                        items-center
                        justify-center
                        rounded-full
                        bg-amber-500
                        text-black
                      "
                    >
                      <Sparkles size={17} />
                    </div>

                    <div>
                      <p className="text-xs text-white/50">
                        Building the future
                      </p>

                      <p className="text-sm font-medium text-white">
                        One digital idea at a time
                      </p>
                    </div>

                  </div>

                </motion.div>

              </div>

              {/* Decorative Corner — Top Right */}
              <div
                className="
                  absolute
                  -right-3
                  -top-3
                  h-16
                  w-16
                  rounded-tr-[25px]
                  border-r
                  border-t
                  border-amber-400/40
                "
              />

              {/* Decorative Corner — Bottom Left */}
              <div
                className="
                  absolute
                  -bottom-3
                  -left-3
                  h-16
                  w-16
                  rounded-bl-[25px]
                  border-b
                  border-l
                  border-amber-400/30
                "
              />

            </div>

          </motion.div>

        </div>

      </div>

      {/* Bottom Fade */}
      <div
        className="
          pointer-events-none
          absolute
          bottom-0
          left-0
          right-0
          h-32
          bg-gradient-to-t
          from-black
          to-transparent
        "
      />

    </section>
  );
}

export default HeroSection;
