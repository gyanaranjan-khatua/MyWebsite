import React, { useState } from "react";
import {
  ArrowUpRight,
  Code2,
  Smartphone,
  Palette,
  Globe2,
  Check,
    Sparkles,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

function Services() {
  const [activeService, setActiveService] = useState(0);

  const services = [
    {
      number: "01",
      title: "Website Development",
      shortTitle: "Web Development",
      icon: Globe2,
      description:
        "We create fast, modern, responsive websites that turn your ideas into a strong digital presence.",
      points: [
        "Business & corporate websites",
        "Landing pages",
        "E-commerce websites",
        "Custom web applications",
      ],
    },
    {
      number: "02",
      title: "Web Application",
      shortTitle: "Web Apps",
      icon: Code2,
      description:
        "Powerful web applications designed around your workflow, users, and business requirements.",
      points: [
        "Custom dashboards",
        "Admin panels",
        "MERN applications",
        "API & database integration",
      ],
    },
    {
      number: "03",
      title: "Mobile Application",
      shortTitle: "Mobile Apps",
      icon: Smartphone,
      description:
        "We build intuitive mobile experiences that make your services accessible wherever your customers are.",
      points: [
        "Android applications",
        "Cross-platform apps",
        "User authentication",
        "Backend integration",
      ],
    },
    {
      number: "04",
      title: "UI / UX Design",
      shortTitle: "UI / UX",
      icon: Palette,
      description:
        "Thoughtful interfaces designed to make your digital product look premium and feel effortless to use.",
      points: [
        "Modern interface design",
        "User experience design",
        "Responsive layouts",
        "Design systems",
      ],
    },
  ];

  const active = services[activeService];
  const ActiveIcon = active.icon;

  return (
    <section className="relative overflow-hidden bg-black py-24 text-white sm:py-32">

      {/* =========================
          BACKGROUND
      ========================== */}
      <div className="pointer-events-none absolute inset-0">

        {/* Technical Grid */}
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

        {/* Fade */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,#000_80%)]" />

        {/* Amber Glow */}
        <div className="absolute left-[-150px] top-[25%] h-[450px] w-[450px] rounded-full bg-amber-500/[0.06] blur-[140px]" />

        <div className="absolute right-[-150px] bottom-[10%] h-[500px] w-[500px] rounded-full bg-amber-400/[0.05] blur-[150px]" />
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
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-14 flex flex-col justify-between gap-6 md:flex-row md:items-end"
        >

          <div>

            {/* Label */}
            <div className="mb-5 flex items-center gap-3">
              <span className="h-px w-10 bg-amber-400" />

              <span className="text-xs font-semibold uppercase tracking-[0.25em] text-amber-400">
                What We Do
              </span>
            </div>

            {/* Heading */}
            <h2 className="max-w-3xl text-4xl font-semibold leading-[1.08] tracking-[-0.04em] sm:text-5xl md:text-6xl">
              Digital solutions
              <span className="block text-white/40">
                built around your needs.
              </span>
            </h2>

          </div>

          <p className="max-w-md text-sm leading-6 text-white/40 md:pb-1">
            From your first idea to a complete digital product, Gyanex
            combines design, technology, and strategy to create solutions
            that deliver real value.
          </p>

        </motion.div>

        {/* =========================
            SERVICES AREA
        ========================== */}
        <div className="grid gap-5 lg:grid-cols-[0.9fr_1.1fr]">

          {/* =========================
              LEFT SERVICE LIST
          ========================== */}
          <div
            className="
              overflow-hidden
              rounded-[30px]
              border
              border-white/[0.10]
              bg-white/[0.035]
              backdrop-blur-2xl
            "
          >

            {services.map((service, index) => {
              const Icon = service.icon;
              const isActive = activeService === index;

              return (
                <button
                  key={service.number}
                  onMouseEnter={() => setActiveService(index)}
                  onClick={() => setActiveService(index)}
                  className={`
                    group
                    relative
                    flex
                    w-full
                    items-center
                    gap-4
                    border-b
                    border-white/[0.08]
                    px-5
                    py-6
                    text-left
                    transition-all
                    duration-500
                    last:border-b-0
                    sm:px-7
                    ${
                      isActive
                        ? "bg-white/[0.07]"
                        : "hover:bg-white/[0.04]"
                    }
                  `}
                >

                  {/* Active amber line */}
                  {isActive && (
                    <motion.div
                      layoutId="serviceLine"
                      className="
                        absolute
                        bottom-0
                        left-0
                        top-0
                        w-[2px]
                        bg-amber-400
                        shadow-[0_0_15px_rgba(251,191,36,0.8)]
                      "
                      transition={{
                        type: "spring",
                        stiffness: 400,
                        damping: 30,
                      }}
                    />
                  )}

                  {/* Number */}
                  <span
                    className={`
                      w-8
                      shrink-0
                      text-xs
                      font-medium
                      transition-colors
                      duration-300
                      ${
                        isActive
                          ? "text-amber-400"
                          : "text-white/25"
                      }
                    `}
                  >
                    {service.number}
                  </span>

                  {/* Icon */}
                  <div
                    className={`
                      flex
                      h-10
                      w-10
                      shrink-0
                      items-center
                      justify-center
                      rounded-xl
                      border
                      transition-all
                      duration-300
                      ${
                        isActive
                          ? "border-amber-400/30 bg-amber-500 text-black"
                          : "border-white/10 bg-white/[0.04] text-white/50 group-hover:text-white"
                      }
                    `}
                  >
                    <Icon size={18} strokeWidth={1.7} />
                  </div>

                  {/* Title */}
                  <span
                    className={`
                      flex-1
                      text-base
                      font-medium
                      transition-colors
                      duration-300
                      sm:text-lg
                      ${
                        isActive
                          ? "text-white"
                          : "text-white/55 group-hover:text-white"
                      }
                    `}
                  >
                    {service.title}
                  </span>

                  {/* Arrow */}
                  <ArrowUpRight
                    size={19}
                    className={`
                      shrink-0
                      transition-all
                      duration-300
                      ${
                        isActive
                          ? "translate-x-0 -translate-y-0 text-amber-400"
                          : "translate-x-1 translate-y-1 text-white/20 opacity-0 group-hover:translate-x-0 group-hover:translate-y-0 group-hover:opacity-100"
                      }
                    `}
                  />

                </button>
              );
            })}

          </div>

          {/* =========================
              RIGHT DETAIL PANEL
          ========================== */}
          <div
            className="
              relative
              min-h-[470px]
              overflow-hidden
              rounded-[30px]
              border
              border-white/[0.10]
              bg-white/[0.045]
              p-7
              backdrop-blur-2xl
              sm:p-10
              lg:p-12
            "
          >

            {/* Large background number */}
            <AnimatePresence mode="wait">
              <motion.span
                key={active.number}
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="
                  pointer-events-none
                  absolute
                  right-5
                  top-0
                  text-[150px]
                  font-bold
                  leading-none
                  tracking-[-0.08em]
                  text-white/[0.025]
                  sm:text-[190px]
                "
              >
                {active.number}
              </motion.span>
            </AnimatePresence>

            {/* Amber glow */}
            <div className="pointer-events-none absolute -right-20 -top-20 h-72 w-72 rounded-full bg-amber-500/[0.10] blur-[100px]" />

            {/* Decorative grid */}
            <div
              className="pointer-events-none absolute right-0 top-0 h-56 w-56 opacity-[0.08]"
              style={{
                backgroundImage: `
                  linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px),
                  linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)
                `,
                backgroundSize: "25px 25px",
              }}
            />

            <AnimatePresence mode="wait">

              <motion.div
                key={active.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{
                  duration: 0.35,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="relative z-10 flex h-full flex-col"
              >

                {/* Icon */}
                <div
                  className="
                    flex
                    h-14
                    w-14
                    items-center
                    justify-center
                    rounded-2xl
                    border
                    border-amber-400/20
                    bg-amber-500/[0.10]
                    text-amber-400
                  "
                >
                  <ActiveIcon size={25} strokeWidth={1.6} />
                </div>

                {/* Heading */}
                <h3 className="mt-9 max-w-xl text-3xl font-semibold tracking-[-0.03em] sm:text-4xl">
                  {active.title}
                </h3>

                {/* Description */}
                <p className="mt-5 max-w-xl text-base leading-7 text-white/45">
                  {active.description}
                </p>

                {/* Divider */}
                <div className="my-8 h-px w-full bg-white/10" />

                {/* Features */}
                <div className="grid gap-4 sm:grid-cols-2">

                  {active.points.map((point) => (
                    <div
                      key={point}
                      className="flex items-center gap-3"
                    >
                      <span
                        className="
                          flex
                          h-6
                          w-6
                          shrink-0
                          items-center
                          justify-center
                          rounded-full
                          bg-amber-500/[0.10]
                          text-amber-400
                        "
                      >
                        <Check size={13} />
                      </span>

                      <span className="text-sm text-white/60">
                        {point}
                      </span>
                    </div>
                  ))}

                </div>

                {/* Bottom CTA */}
                <div className="mt-auto pt-10">

                  <a
                    href="/contact"
                    className="
                      group
                      inline-flex
                      items-center
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
                      hover:shadow-[0_0_30px_rgba(245,158,11,0.20)]
                    "
                  >
                    Discuss Your Project

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

                </div>

              </motion.div>

            </AnimatePresence>

          </div>
        </div>

        {/* =========================
            BOTTOM STATEMENT
        ========================== */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="
            mt-6
            flex
            flex-col
            items-start
            justify-between
            gap-5
            rounded-[25px]
            border
            border-amber-400/15
            bg-amber-500/[0.045]
            px-6
            py-6
            backdrop-blur-xl
            sm:flex-row
            sm:items-center
            sm:px-8
          "
        >

          <div className="flex items-center gap-3">

            <span
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
              <Sparkles size={16} />
            </span>

            <p className="text-sm text-white/60 sm:text-base">
              Have an idea? Let's turn it into something valuable.
            </p>

          </div>

          <a
            href="/contact"
            className="
              group
              flex
              items-center
              gap-2
              text-sm
              font-medium
              text-amber-400
              transition-colors
              duration-300
              hover:text-amber-300
            "
          >
            Start a conversation

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

      {/* Bottom Fade */}
      <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-black to-transparent" />

    </section>
  );
}

export default Services;