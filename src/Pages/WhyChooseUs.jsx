
import React from "react";
import {
  ArrowUpRight,
  ShieldCheck,
  Zap,
  Users,
  Target,
} from "lucide-react";
import { motion } from "framer-motion";

import whyChooseUsImage from "../assets/whychooseus.png";

function WhyChooseUs() {
  const reasons = [
    {
      number: "01",
      icon: Target,
      title: "Built Around You",
      text: "Every solution is shaped around your goals, audience, and actual business requirements.",
    },
    {
      number: "02",
      icon: ShieldCheck,
      title: "Quality You Can Trust",
      text: "We focus on clean interfaces, reliable functionality, and professional digital experiences.",
    },
    {
      number: "03",
      icon: Zap,
      title: "Smart & Modern",
      text: "Modern technologies and practical solutions keep your digital product fast, scalable, and ready to grow.",
    },
    {
      number: "04",
      icon: Users,
      title: "Your Success Matters",
      text: "We work closely with you, understand your challenges, and focus on creating real business value.",
    },
  ];

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

      <div className="pointer-events-none absolute inset-0">
        {/* Light Grid */}
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
                rgba(15,23,42,0.06) 1px,
                transparent 1px
              ),
              linear-gradient(
                90deg,
                rgba(15,23,42,0.06) 1px,
                transparent 1px
              )
            `,
            backgroundSize: "70px 70px",
          }}
        />

        {/* Dark Grid */}
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

        {/* Light Radial Fade */}
        <div
          className="
            absolute
            inset-0
            bg-[radial-gradient(circle_at_center,transparent_0%,#fafafa_88%)]
            dark:hidden
          "
        />

        {/* Dark Radial Fade */}
        <div
          className="
            absolute
            inset-0
            hidden
            bg-[radial-gradient(circle_at_center,transparent_0%,#050509_88%)]
            dark:block
          "
        />

        {/* Purple Left Glow */}
        <div
          className="
            absolute
            left-[-180px]
            top-[15%]
            h-[500px]
            w-[500px]
            rounded-full
            bg-purple-500/[0.055]
            blur-[150px]
            dark:bg-purple-600/[0.10]
          "
        />

        {/* Purple Right Glow */}
        <div
          className="
            absolute
            bottom-[-100px]
            right-[-150px]
            h-[500px]
            w-[500px]
            rounded-full
            bg-violet-500/[0.05]
            blur-[150px]
            dark:bg-purple-500/[0.08]
          "
        />

        {/* Center Glow */}
        <div
          className="
            absolute
            left-1/2
            top-[45%]
            h-[350px]
            w-[350px]
            -translate-x-1/2
            rounded-full
            bg-purple-500/[0.025]
            blur-[130px]
            dark:bg-purple-500/[0.05]
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
            TOP LABEL
        ================================================= */}

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{
            duration: 0.7,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="mb-10 lg:mb-12"
        >
          <div className="flex items-center gap-3">
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
              Why Choose Us
            </span>
          </div>
        </motion.div>

        {/* =================================================
            THREE COLUMN CONTAINER
        ================================================= */}

        <div
          className="
            grid
            overflow-hidden
            rounded-[32px]
            border
            border-slate-200
            bg-white/60
            shadow-[0_25px_100px_rgba(15,23,42,0.05)]
            backdrop-blur-2xl

            dark:border-white/[0.10]
            dark:bg-white/[0.025]
            dark:shadow-none

            lg:h-[50vh]
            lg:min-h-[500px]
            lg:max-h-[620px]

            lg:grid-cols-[0.85fr_1.15fr_1fr]
          "
        >
          {/* =================================================
              COLUMN 1 — CONTENT
          ================================================= */}

          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{
              duration: 0.8,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="
              relative
              flex
              flex-col
              justify-center
              p-7

              sm:p-10

              lg:min-h-0
              lg:border-r
              lg:border-slate-200
              lg:p-9

              dark:lg:border-white/[0.10]
            "
          >
            {/* Decorative Line */}
            <div
              className="
                absolute
                left-0
                top-10
                h-16
                w-[2px]
                bg-gradient-to-b
                from-purple-500
                to-transparent
              "
            />

            {/* Mini Label */}
            <div className="mb-4 flex items-center gap-3">
              <span
                className="
                  h-px
                  w-8
                  bg-purple-600
                  dark:bg-purple-400
                "
              />

              <span
                className="
                  text-[10px]
                  font-semibold
                  uppercase
                  tracking-[0.22em]
                  text-purple-600
                  dark:text-purple-400
                "
              >
                The Gyanex Difference
              </span>
            </div>

            {/* Heading */}
            <h2
              className="
                max-w-md
                text-3xl
                font-semibold
                leading-[1.05]
                tracking-[-0.045em]
                text-slate-950
                dark:text-white

                sm:text-4xl
              "
            >
              Why Choose Us?
            </h2>

            {/* Sub Heading */}
            <h3
              className="
                mt-4
                max-w-md
                text-xl
                font-medium
                leading-tight
                tracking-[-0.03em]
                text-slate-400
                dark:text-white/35

                sm:text-2xl
              "
            >
              Your Project,
              <span
                className="
                  block
                  bg-gradient-to-r
                  from-purple-600
                  via-violet-500
                  to-fuchsia-500
                  bg-clip-text
                  text-transparent
                "
              >
                Our Priority.
              </span>
            </h3>

            {/* Paragraph */}
            <p
              className="
                mt-5
                max-w-md
                text-sm
                leading-6
                text-slate-500
                dark:text-white/45
              "
            >
              We don't just build digital products. We understand your
              goals, solve real problems, and create experiences that help
              your business move forward with confidence.
            </p>

            {/* CTA */}
            <div className="mt-7">
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
                  px-5
                  py-3
                  text-sm
                  font-semibold
                  text-white
                  shadow-[0_10px_30px_rgba(124,58,237,0.18)]
                  transition-all
                  duration-300

                  hover:-translate-y-0.5
                  hover:from-purple-500
                  hover:to-violet-400
                  hover:shadow-[0_15px_40px_rgba(124,58,237,0.30)]
                "
              >
                Let's Work Together

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
            </div>

            {/* Bottom Text */}
            <div
              className="
                mt-7
                flex
                items-center
                gap-3
                text-[9px]
                uppercase
                tracking-[0.2em]
                text-slate-400
                dark:text-white/20
              "
            >
              <span className="h-px w-6 bg-slate-300 dark:bg-white/15" />
              Built With Purpose
            </div>
          </motion.div>

          {/* =================================================
              COLUMN 2 — IMAGE
          ================================================= */}

          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{
              duration: 0.9,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="
              relative
              flex
              items-center
              justify-center
              overflow-hidden
              min-h-[400px]
              bg-slate-100/30
              p-5

              lg:h-full
              lg:w-full
              lg:min-w-0
              lg:p-6
              lg:border-r
              lg:border-slate-200

              dark:lg:border-white/[0.10]
              dark:bg-white/[0.02]
            "
          >
            {/* Image */}
            <img
              src={whyChooseUsImage}
              alt="Gyanex digital solutions"
              className="
                h-auto
                max-h-full
                w-auto
                max-w-full
                rounded-2xl
                border
                border-slate-200
                bg-[#050509]
                object-contain
                shadow-[0_20px_60px_rgba(15,23,42,0.18)]
                transition-transform
                duration-700
                hover:scale-[1.02]
                dark:border-white/20
              "
            />
          </motion.div>

          {/* =================================================
              COLUMN 3 — REASONS
          ================================================= */}

          <div
            className="
              relative
              flex
              min-h-0
              flex-col
              justify-center
              p-6

              sm:p-8

              lg:p-8
            "
          >
            {/* Column Heading */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.7 }}
            >
              <p
                className="
                  text-[10px]
                  font-semibold
                  uppercase
                  tracking-[0.22em]
                  text-slate-400
                  dark:text-white/30
                "
              >
                What You Get
              </p>

              <h3
                className="
                  mt-2
                  text-xl
                  font-semibold
                  tracking-[-0.03em]
                  text-slate-950
                  dark:text-white
                "
              >
                Built for your success.
              </h3>
            </motion.div>

            {/* Reasons */}
            <div className="mt-5">
              {reasons.map((reason, index) => {
                const Icon = reason.icon;

                return (
                  <motion.div
                    key={reason.number}
                    initial={{ opacity: 0, x: 25 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.15 }}
                    transition={{
                      duration: 0.55,
                      delay: index * 0.08,
                    }}
                    className="
                      group
                      relative
                      border-b
                      border-slate-200
                      py-3.5
                      first:pt-0
                      last:border-b-0
                      last:pb-0

                      dark:border-white/[0.08]
                    "
                  >
                    <div className="flex gap-3">
                      {/* Circular Icon */}
                      <div
                        className="
                          relative
                          flex
                          h-9
                          w-9
                          shrink-0
                          items-center
                          justify-center
                          rounded-full
                          border
                          border-slate-200
                          bg-slate-100
                          text-slate-500
                          transition-all
                          duration-500

                          group-hover:border-purple-500/30
                          group-hover:bg-purple-600
                          group-hover:text-white
                          group-hover:shadow-[0_0_25px_rgba(124,58,237,0.22)]

                          dark:border-white/10
                          dark:bg-white/[0.04]
                          dark:text-white/55
                          dark:group-hover:border-purple-400/30
                          dark:group-hover:bg-purple-500
                        "
                      >
                        <Icon size={16} strokeWidth={1.7} />

                        <span
                          className="
                            absolute
                            -right-0.5
                            -top-0.5
                            h-1.5
                            w-1.5
                            rounded-full
                            bg-purple-500
                            opacity-0
                            transition-opacity
                            duration-300
                            group-hover:opacity-100
                          "
                        />
                      </div>

                      {/* Content */}
                      <div className="min-w-0 flex-1">
                        <div className="flex items-center gap-2">
                          <span
                            className="
                              text-[9px]
                              font-medium
                              text-purple-600
                              dark:text-purple-400
                            "
                          >
                            {reason.number}
                          </span>

                          <h4
                            className="
                              text-sm
                              font-semibold
                              text-slate-900
                              dark:text-white
                            "
                          >
                            {reason.title}
                          </h4>
                        </div>

                        <p
                          className="
                            mt-1
                            text-xs
                            leading-5
                            text-slate-500
                            dark:text-white/40
                          "
                        >
                          {reason.text}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>

        {/* =================================================
            BOTTOM STATEMENT
        ================================================= */}

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="
            mt-7
            flex
            flex-col
            items-start
            justify-between
            gap-5
            border-t
            border-slate-200
            pt-7

            dark:border-white/[0.08]

            sm:flex-row
            sm:items-center
          "
        >
          <p
            className="
              max-w-xl
              text-sm
              leading-6
              text-slate-400
              dark:text-white/30
            "
          >
            Your idea deserves more than just a digital presence.
            It deserves an experience built for growth.
          </p>

          <a
            href="/contact"
            className="
              group
              inline-flex
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
            Let's build together

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

      {/* =====================================================
          BOTTOM FADE
      ====================================================== */}

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

export default WhyChooseUs;
