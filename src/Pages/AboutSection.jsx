import React from "react";
import { ArrowUpRight, Check, Sparkles, ShieldCheck, Gem } from "lucide-react";
import { motion } from "framer-motion";

function AboutSection() {
  const values = [
    {
      icon: Gem,
      title: "Quality First",
      text: "We focus on clean design, reliable performance, and scalable digital solutions.",
    },
    {
      icon: ShieldCheck,
      title: "Built on Trust",
      text: "We believe strong communication and transparency create long-term client relationships.",
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
          className="absolute inset-0 opacity-[0.12]"
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

        {/* Center fade */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_10%,#000_80%)]" />

        {/* Amber glow */}
        <div className="absolute -left-40 top-1/3 h-[500px] w-[500px] rounded-full bg-amber-500/[0.06] blur-[150px]" />

        <div className="absolute -right-40 bottom-0 h-[400px] w-[400px] rounded-full bg-amber-400/[0.05] blur-[150px]" />
      </div>

      {/* =========================
          MAIN CONTAINER
      ========================== */}
      <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">

        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
          className="mb-16 max-w-3xl"
        >

          {/* Label */}
          <div className="mb-5 flex items-center gap-3">
            <span className="h-px w-10 bg-amber-400" />

            <span className="text-xs font-semibold uppercase tracking-[0.25em] text-amber-400">
              About Gyanex
            </span>
          </div>

          {/* Heading */}
          <h2 className="text-4xl font-semibold leading-[1.08] tracking-[-0.04em] sm:text-5xl md:text-6xl">
            We build digital
            <span className="block text-white/40">
              experiences that matter.
            </span>
          </h2>

        </motion.div>

        {/* =========================
            CONTENT GRID
        ========================== */}
        <div className="grid items-stretch gap-6 lg:grid-cols-[1.15fr_0.85fr]">

          {/* =========================
              MAIN ABOUT CARD
          ========================== */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{
              duration: 0.9,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="
              group
              relative
              overflow-hidden
              rounded-[32px]
              border
              border-white/[0.10]
              bg-white/[0.045]
              p-7
              backdrop-blur-2xl
              sm:p-10
              lg:p-12
            "
          >

            {/* Card glow */}
            <div
              className="
                absolute
                -right-24
                -top-24
                h-64
                w-64
                rounded-full
                bg-amber-500/[0.08]
                blur-[90px]
                transition-all
                duration-700
                group-hover:bg-amber-500/[0.14]
              "
            />

            {/* Decorative grid */}
            <div
              className="pointer-events-none absolute right-0 top-0 h-48 w-48 opacity-[0.10]"
              style={{
                backgroundImage: `
                  linear-gradient(rgba(255,255,255,0.3) 1px, transparent 1px),
                  linear-gradient(90deg, rgba(255,255,255,0.3) 1px, transparent 1px)
                `,
                backgroundSize: "24px 24px",
                maskImage:
                  "linear-gradient(to bottom left, black, transparent)",
              }}
            />

            <div className="relative z-10">

              {/* Small number */}
              <p className="mb-10 text-sm font-medium text-amber-400">
                / 01
              </p>

              <h3 className="max-w-2xl text-2xl font-medium leading-snug tracking-tight sm:text-3xl">
                Turning your ideas into{" "}
                <span className="text-amber-400">
                  meaningful digital solutions.
                </span>
              </h3>

              <p className="mt-6 max-w-2xl text-base leading-7 text-white/50 sm:text-lg">
                At Gyanex, we create professional websites and applications
                designed around what your business and customers actually need.
                We combine thoughtful design, modern technology, and practical
                functionality to deliver digital products that are built to
                create real value.
              </p>

              <p className="mt-5 max-w-2xl text-base leading-7 text-white/50">
                From the first idea to the final product, we work closely with
                our clients to understand their goals, solve the right problems,
                and build experiences they can confidently grow with.
              </p>

              {/* Divider */}
              <div className="my-9 h-px w-full bg-white/10" />

              {/* Features */}
              <div className="grid gap-5 sm:grid-cols-2">

                <div className="flex gap-3">
                  <div className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-amber-500/10 text-amber-400">
                    <Check size={14} />
                  </div>

                  <div>
                    <h4 className="text-sm font-semibold text-white">
                      Client-Centered
                    </h4>
                    <p className="mt-1 text-sm leading-6 text-white/40">
                      Every solution starts with your actual requirements.
                    </p>
                  </div>
                </div>

                <div className="flex gap-3">
                  <div className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-amber-500/10 text-amber-400">
                    <Check size={14} />
                  </div>

                  <div>
                    <h4 className="text-sm font-semibold text-white">
                      Modern Technology
                    </h4>
                    <p className="mt-1 text-sm leading-6 text-white/40">
                      Built with modern tools for better performance.
                    </p>
                  </div>
                </div>

                <div className="flex gap-3">
                  <div className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-amber-500/10 text-amber-400">
                    <Check size={14} />
                  </div>

                  <div>
                    <h4 className="text-sm font-semibold text-white">
                      Quality Driven
                    </h4>
                    <p className="mt-1 text-sm leading-6 text-white/40">
                      We pay attention to the details that make a difference.
                    </p>
                  </div>
                </div>

                <div className="flex gap-3">
                  <div className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-amber-500/10 text-amber-400">
                    <Check size={14} />
                  </div>

                  <div>
                    <h4 className="text-sm font-semibold text-white">
                      Long-Term Value
                    </h4>
                    <p className="mt-1 text-sm leading-6 text-white/40">
                      We build solutions with growth and usability in mind.
                    </p>
                  </div>
                </div>

              </div>

              {/* CTA */}
              <div className="mt-10">
                <a
                  href="/about"
                  className="
                    group/btn
                    inline-flex
                    items-center
                    gap-2
                    rounded-full
                    border
                    border-white/15
                    bg-white/[0.04]
                    px-5
                    py-3
                    text-sm
                    font-medium
                    text-white
                    transition-all
                    duration-300
                    hover:border-amber-400/40
                    hover:bg-amber-500
                    hover:text-black
                  "
                >
                  Discover Gyanex

                  <ArrowUpRight
                    size={16}
                    className="
                      transition-transform
                      duration-300
                      group-hover/btn:-translate-y-0.5
                      group-hover/btn:translate-x-0.5
                    "
                  />
                </a>
              </div>

            </div>
          </motion.div>

          {/* =========================
              RIGHT SIDE
          ========================== */}
          <div className="grid gap-6">

            {/* Quality Card */}
            {values.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, x: 40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{
                    duration: 0.7,
                    delay: index * 0.12,
                  }}
                  className="
                    group
                    relative
                    overflow-hidden
                    rounded-[28px]
                    border
                    border-white/[0.10]
                    bg-white/[0.04]
                    p-7
                    backdrop-blur-2xl
                    transition-all
                    duration-500
                    hover:border-amber-400/20
                    hover:bg-white/[0.06]
                    sm:p-8
                  "
                >

                  {/* Number */}
                  <span className="absolute right-7 top-6 text-xs text-white/20">
                    0{index + 2}
                  </span>

                  {/* Icon */}
                  <div
                    className="
                      mb-7
                      flex
                      h-12
                      w-12
                      items-center
                      justify-center
                      rounded-2xl
                      border
                      border-amber-400/20
                      bg-amber-500/[0.08]
                      text-amber-400
                      transition-all
                      duration-500
                      group-hover:bg-amber-500
                      group-hover:text-black
                    "
                  >
                    <Icon size={21} strokeWidth={1.7} />
                  </div>

                  <h3 className="text-xl font-semibold">
                    {item.title}
                  </h3>

                  <p className="mt-3 max-w-md text-sm leading-6 text-white/45">
                    {item.text}
                  </p>

                  {/* Bottom line */}
                  <div className="mt-7 h-px w-full bg-white/10" />

                  <div className="mt-4 flex items-center gap-2 text-xs uppercase tracking-[0.18em] text-white/30 transition-colors duration-300 group-hover:text-amber-400">
                    Gyanex Standard
                    <span className="h-px w-5 bg-current" />
                  </div>

                </motion.div>
              );
            })}

            {/* Value Statement */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.8 }}
              className="
                relative
                overflow-hidden
                rounded-[28px]
                border
                border-amber-400/20
                bg-gradient-to-br
                from-amber-500/[0.12]
                via-white/[0.04]
                to-transparent
                p-7
                sm:p-8
              "
            >

              <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-amber-400/10 blur-3xl" />

              <div className="relative z-10">

                <div className="mb-5 flex items-center gap-2">
                  <Sparkles
                    size={16}
                    className="text-amber-400"
                  />

                  <span className="text-xs font-semibold uppercase tracking-[0.2em] text-amber-400">
                    Our Promise
                  </span>
                </div>

                <h3 className="text-xl font-medium leading-snug">
                  Your need comes first.
                  <span className="block text-white/40">
                    Our technology makes it possible.
                  </span>
                </h3>

              </div>
            </motion.div>

          </div>
        </div>

      </div>

      {/* Bottom Fade */}
      <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-black to-transparent" />

    </section>
  );
}

export default AboutSection;