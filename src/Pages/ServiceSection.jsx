import React, { useState } from "react";
import {
  ArrowUpRight,
  Code2,
  Smartphone,
  Palette,
  Globe2,
  Check,
  Sparkles,
  Megaphone,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { DiaTextReveal } from "@/Components/ui/dia-text-reveal";

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
    {
      number: "05",
      title: "Digital Marketing",
      shortTitle: "Digital Marketing",
      icon: Megaphone,
      description:
        "Data-driven digital marketing strategies that help businesses increase visibility, reach the right audience, and generate meaningful growth.",
      points: [
        "Search engine optimization",
        "Social media marketing",
        "Google & Meta advertising",
        "Content & growth strategies",
      ],
    },
  ];

  const active = services[activeService];
  const ActiveIcon = active.icon;

  return (
    <section
      className="
        relative
        overflow-hidden
        bg-[#fafafa]
        py-24
        text-slate-950
        transition-colors
        duration-500
        dark:bg-[#050509]
        dark:text-white
        sm:py-32
      "
    >
      {/* =====================================================
          BACKGROUND
      ====================================================== */}
{/* =========================
    BACKGROUND
========================== */}
<div className="pointer-events-none absolute inset-0">

  {/* Light Theme Grid */}
  <div
    className="
      absolute
      inset-0
      opacity-[0.45]
      dark:hidden
    "
    style={{
      backgroundImage: `
        linear-gradient(
          rgba(15,23,42,0.07) 1px,
          transparent 1px
        ),
        linear-gradient(
          90deg,
          rgba(15,23,42,0.07) 1px,
          transparent 1px
        )
      `,
      backgroundSize: "70px 70px",
    }}
  />

  {/* Dark Theme Grid */}
  <div
    className="
      absolute
      inset-0
      hidden
      opacity-[0.12]
      dark:block
    "
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

  {/* Light Center Fade */}
  <div
    className="
      absolute
      inset-0
      bg-[radial-gradient(
        circle_at_center,
        transparent_0%,
        #fafafa_85%
      )]
      dark:hidden
    "
  />

  {/* Dark Center Fade */}
  <div
    className="
      absolute
      inset-0
      hidden
      bg-[radial-gradient(
        circle_at_center,
        transparent_0%,
        #050509_85%
      )]
      dark:block
    "
  />

  {/* Left Purple Glow */}
  <div
    className="
      absolute
      left-[-150px]
      top-[25%]
      h-[450px]
      w-[450px]
      rounded-full
      bg-purple-500/[0.06]
      blur-[140px]
      dark:bg-purple-600/[0.10]
    "
  />

  {/* Right Purple Glow */}
  <div
    className="
      absolute
      bottom-[10%]
      right-[-150px]
      h-[500px]
      w-[500px]
      rounded-full
      bg-purple-500/[0.05]
      blur-[150px]
      dark:bg-purple-500/[0.08]
    "
  />

</div>
      {/* =====================================================
          CONTAINER
      ====================================================== */}

      <div
        className="
          relative
          z-10
          mx-auto
          max-w-7xl
          px-5
          sm:px-8
          lg:px-10
        "
      >
        {/* =================================================
            HEADER
        ================================================= */}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="
            mb-14
            flex
            flex-col
            justify-between
            gap-6
            md:flex-row
            md:items-end
          "
        >
          <div>
            {/* Label */}
            <div className="mb-5 flex items-center gap-3">
              <span
                className="
                  h-px
                  w-10
                  bg-purple-600
                  dark:bg-purple-400
                "
              />

              <span
                className="
                  text-xs
                  font-semibold
                  uppercase
                  tracking-[0.25em]
                  text-purple-600
                  dark:text-purple-400
                "
              >
                What We Do
              </span>
            </div>

            {/* Heading */}
            <h2
              className="
                max-w-3xl
                text-4xl
                font-semibold
                leading-[1.08]
                tracking-[-0.04em]
                text-slate-950
                dark:text-white
                sm:text-5xl
                md:text-6xl
              "
            >
              
              Digital solutions
              <br />
                <DiaTextReveal
        className="text-4xl font-bold tracking-tight"
        colors={["#f97316", "#eab308", "#22c55e", "#3b82f6", "#a855f7"]}
        delay={0.35}
        duration={2.4}
        text="built around your needs."
      />
              {/* <span
                className="
                  block
                  text-slate-400
                  dark:text-white/40
                "
              >
                built around your needs.
              </span> */}
            </h2>
          </div>

          <p
            className="
              max-w-md
              text-sm
              leading-6
              text-slate-500
              dark:text-white/40
              md:pb-1
            "
          >
            From your first idea to a complete digital product, Gyanex
            combines design, technology, and strategy to create solutions
            that deliver real value.
          </p>
        </motion.div>

        {/* =================================================
            SERVICES AREA
        ================================================= */}

        <div className="grid gap-5 lg:grid-cols-[0.9fr_1.1fr]">
          {/* =================================================
              LEFT SERVICE LIST
          ================================================= */}

          <div
            className="
              overflow-hidden
              rounded-[30px]
              border
              border-slate-200
              bg-white/70
              shadow-[0_20px_80px_rgba(15,23,42,0.04)]
              backdrop-blur-2xl

              dark:border-white/[0.10]
              dark:bg-white/[0.035]
              dark:shadow-none
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
                    border-slate-200
                    px-5
                    py-6
                    text-left
                    transition-all
                    duration-500
                    last:border-b-0
                    sm:px-7

                    dark:border-white/[0.08]

                    ${
                      isActive
                        ? "bg-purple-50/80 dark:bg-white/[0.07]"
                        : "hover:bg-purple-50/50 dark:hover:bg-white/[0.04]"
                    }
                  `}
                >
                  {/* Active Purple Line */}
                  {isActive && (
                    <motion.div
                      layoutId="serviceLine"
                      className="
                        absolute
                        bottom-0
                        left-0
                        top-0
                        w-[2px]
                        bg-purple-600
                        shadow-[0_0_15px_rgba(124,58,237,0.7)]
                        dark:bg-purple-400
                        dark:shadow-[0_0_15px_rgba(167,139,250,0.8)]
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
                          ? "text-purple-600 dark:text-purple-400"
                          : "text-slate-300 dark:text-white/25"
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
                          ? `
                            border-purple-500/30
                            bg-purple-600
                            text-white
                            shadow-[0_8px_25px_rgba(124,58,237,0.20)]
                            dark:border-purple-400/30
                            dark:bg-purple-500
                          `
                          : `
                            border-slate-200
                            bg-slate-100
                            text-slate-400
                            group-hover:text-purple-600
                            dark:border-white/10
                            dark:bg-white/[0.04]
                            dark:text-white/50
                            dark:group-hover:text-white
                          `
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
                          ? "text-slate-950 dark:text-white"
                          : "text-slate-500 group-hover:text-slate-950 dark:text-white/55 dark:group-hover:text-white"
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
                          ? `
                            translate-x-0
                            -translate-y-0
                            text-purple-600
                            dark:text-purple-400
                          `
                          : `
                            translate-x-1
                            translate-y-1
                            text-slate-300
                            opacity-0
                            group-hover:translate-x-0
                            group-hover:translate-y-0
                            group-hover:opacity-100
                            dark:text-white/20
                          `
                      }
                    `}
                  />
                </button>
              );
            })}
          </div>

          {/* =================================================
              RIGHT DETAIL PANEL
          ================================================= */}

          <div
            className="
              relative
              min-h-[470px]
              overflow-hidden
              rounded-[30px]
              border
              border-slate-200
              bg-white/70
              p-7
              shadow-[0_20px_80px_rgba(15,23,42,0.04)]
              backdrop-blur-2xl

              dark:border-white/[0.10]
              dark:bg-white/[0.045]
              dark:shadow-none

              sm:p-10
              lg:p-12
            "
          >
            {/* Large Background Number */}
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
                  text-slate-900/[0.035]
                  sm:text-[190px]
                  dark:text-white/[0.025]
                "
              >
                {active.number}
              </motion.span>
            </AnimatePresence>

            {/* Purple Glow */}
            <div
              className="
                pointer-events-none
                absolute
                -right-20
                -top-20
                h-72
                w-72
                rounded-full
                bg-purple-500/[0.08]
                blur-[100px]
                dark:bg-purple-500/[0.10]
              "
            />

            {/* Decorative Grid */}
            <div
              className="
                pointer-events-none
                absolute
                right-0
                top-0
                h-56
                w-56
                opacity-[0.07]
                dark:opacity-[0.08]
              "
              style={{
                backgroundImage: `
                  linear-gradient(rgba(15,23,42,0.35) 1px, transparent 1px),
                  linear-gradient(90deg, rgba(15,23,42,0.35) 1px, transparent 1px)
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
                    border-purple-500/20
                    bg-purple-500/10
                    text-purple-600

                    dark:border-purple-400/20
                    dark:bg-purple-500/[0.10]
                    dark:text-purple-400
                  "
                >
                  <ActiveIcon size={25} strokeWidth={1.6} />
                </div>

                {/* Heading */}
                <h3
                  className="
                    mt-9
                    max-w-xl
                    text-3xl
                    font-semibold
                    tracking-[-0.03em]
                    text-slate-950
                    dark:text-white
                    sm:text-4xl
                  "
                >
                  {active.title}
                </h3>

                {/* Description */}
                <p
                  className="
                    mt-5
                    max-w-xl
                    text-base
                    leading-7
                    text-slate-500
                    dark:text-white/45
                  "
                >
                  {active.description}
                </p>

                {/* Divider */}
                <div
                  className="
                    my-8
                    h-px
                    w-full
                    bg-slate-200
                    dark:bg-white/10
                  "
                />

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
                          bg-purple-500/10
                          text-purple-600
                          dark:bg-purple-500/[0.10]
                          dark:text-purple-400
                        "
                      >
                        <Check size={13} />
                      </span>

                      <span
                        className="
                          text-sm
                          text-slate-500
                          dark:text-white/60
                        "
                      >
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
                      bg-gradient-to-r
                      from-purple-600
                      to-violet-500
                      px-6
                      py-3.5
                      text-sm
                      font-semibold
                      text-white
                      shadow-[0_10px_30px_rgba(124,58,237,0.18)]
                      transition-all
                      duration-300

                      hover:-translate-y-0.5
                      hover:from-purple-500
                      hover:to-violet-400
                      hover:shadow-[0_15px_40px_rgba(124,58,237,0.28)]
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

        {/* =================================================
            BOTTOM STATEMENT
        ================================================= */}

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
            border-purple-500/15
            bg-purple-500/[0.04]
            px-6
            py-6
            backdrop-blur-xl

            dark:border-purple-400/15
            dark:bg-purple-500/[0.045]

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
                bg-purple-600
                text-white
                shadow-[0_0_25px_rgba(124,58,237,0.25)]
                dark:bg-purple-500
              "
            >
              <Sparkles size={16} />
            </span>

            <p
              className="
                text-sm
                text-slate-500
                dark:text-white/60
                sm:text-base
              "
            >
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
              text-purple-600
              transition-colors
              duration-300
              hover:text-purple-500

              dark:text-purple-400
              dark:hover:text-purple-300
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
      <div
        className="
          pointer-events-none
          absolute
          bottom-0
          left-0
          right-0
          h-24
          bg-gradient-to-t
          from-[#fafafa]
          to-transparent
          dark:from-[#050509]
        "
      />
    </section>
  );
}

export default Services;