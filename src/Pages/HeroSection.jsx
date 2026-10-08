import React from "react";
import { ArrowUpRight, CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";

// Dark theme image
import heroDarkImage from "../assets/darkheroimg.jpeg";

// Light theme image
import heroLightImage from "../assets/lightheroimg.jpeg";

function HeroSection() {
  return (
    <section
      className="
        relative
        min-h-screen
        lg:min-h-[50vh]
        w-full
        overflow-hidden
        bg-[#fafafa]
        text-slate-950
        transition-colors
        duration-500
        dark:bg-[#050509]
        dark:text-white
      "
    >
      {/* =====================================================
          FULL BACKGROUND IMAGE
      ====================================================== */}

      <div className="pointer-events-none absolute inset-0">
        {/* Dark Theme Image */}
        <img
          src={heroDarkImage}
          alt=""
          aria-hidden="true"
          className="
            absolute
            inset-0
            h-full
            w-full
            object-cover
            object-center
            opacity-0
            transition-opacity
            duration-700
            dark:opacity-100
          "
        />

        {/* Light Theme Image */}
        <img
          src={heroLightImage}
          alt=""
          aria-hidden="true"
          className="
            absolute
            inset-0
            h-full
            w-full
            object-cover
            opacity-100
            transition-opacity
            duration-700
            dark:opacity-0
          "
        />

        {/* =================================================
            LEFT SIDE PREMIUM FADE
        ================================================= */}

        {/* Light Theme Fade */}
        <div
          className="
            absolute
            inset-0
            bg-gradient-to-r
            from-[#fafafa]
            from-[0%]
            via-[#fafafa]/95
            via-[28%]
          
            to-transparent
            dark:hidden
          "
        />

        {/* Dark Theme Fade */}
        <div
          className="
            absolute
            inset-0
            hidden
            bg-gradient-to-r
            from-[#050509]
            from-[0%]
            via-[#050509]/95
            via-[25%]
            via-[#050509]/75
            
           
            to-transparent
            dark:block
          "
        />

        {/* =================================================
            EXTRA SOFT LEFT GLOW
        ================================================= */}

        <div
          className="
            absolute
            inset-y-0
            left-0
            w-[65%]
            bg-[radial-gradient(
              ellipse_at_left,
              rgba(124,58,237,0.08),
              transparent_65%
            )]
            dark:bg-[radial-gradient(
              ellipse_at_left,
              rgba(124,58,237,0.14),
              transparent_65%
            )]
          "
        />

        {/* =================================================
            TOP / BOTTOM SOFT FADES
        ================================================= */}

        <div
          className="
            absolute
            inset-x-0
            top-0
            h-24
            bg-gradient-to-b
            from-[#fafafa]/40
            to-transparent
            dark:from-[#050509]/50
          "
        />

        <div
          className="
            absolute
            inset-x-0
            bottom-0
            h-32
            bg-gradient-to-t
            from-[#fafafa]/70
            to-transparent
            dark:from-[#050509]/70
          "
        />
      </div>

      {/* =====================================================
          HERO CONTENT
      ====================================================== */}

      <div
        className="
          relative
          z-10
          mx-auto
          flex
          min-h-screen
          lg:min-h-[50vh]
          w-full
          max-w-[1500px]
          items-center
          px-5
          pb-16
          pt-28
          sm:px-8
          md:px-12
          lg:px-16
          xl:px-20
        "
      >
        {/* =================================================
            LEFT CONTENT
        ================================================= */}

        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{
            duration: 0.9,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="
            relative
            z-20
            w-full
            max-w-[680px]
          "
        >
          {/* Small Label */}
          <div className="mb-6 flex items-center gap-3">
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
                text-[10px]
                font-semibold
                uppercase
                tracking-[0.25em]
                text-purple-600
                dark:text-purple-400
                sm:text-xs
              "
            >
              A Digital Product Company
            </span>
          </div>

          {/* =================================================
              HEADING
          ================================================= */}

          <h1
            className="
              max-w-[700px]
              text-5xl
              font-semibold
              leading-[1.03]
              tracking-[-0.045em]
              text-slate-950

              dark:text-white

              sm:text-6xl
              md:text-7xl
              lg:text-[68px]
              xl:text-[74px]
            "
          >
            We Build Digital

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
              Products for Growing
            </span>

            <span className="block">
              Businesses
            </span>
          </h1>

          {/* =================================================
              DESCRIPTION
          ================================================= */}

          <p
            className="
              mt-7
              max-w-[560px]
              text-base
              leading-7
              text-slate-600
              dark:text-white/60
              sm:text-lg
              sm:leading-8
            "
          >
            We're a technology team helping ambitious businesses turn
            bold ideas into reliable digital products—from web platforms
            to mobile apps—built to grow with you.
          </p>

          {/* =================================================
              CTA BUTTONS
          ================================================= */}

          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            {/* Get Started */}
            <a
              href="/contact"
              className="
                group
                inline-flex
                items-center
                justify-center
                gap-2
                rounded-full
                bg-gradient-to-r
                from-purple-600
                to-violet-500
                px-7
                py-3.5
                text-sm
                font-semibold
                text-white
                shadow-[0_10px_35px_rgba(124,58,237,0.25)]
                transition-all
                duration-300

                hover:-translate-y-0.5
                hover:from-purple-500
                hover:to-violet-400
                hover:shadow-[0_15px_45px_rgba(124,58,237,0.35)]
              "
            >
              Build With Us

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

            {/* View Work */}
            <a
              href="/services"
              className="
                group
                inline-flex
                items-center
                justify-center
                gap-2
                rounded-full
                border
                border-slate-300
                bg-white/70
                px-7
                py-3.5
                text-sm
                font-medium
                text-slate-800
                shadow-sm
                backdrop-blur-xl
                transition-all
                duration-300

                hover:-translate-y-0.5
                hover:border-purple-400/50
                hover:bg-purple-50
                hover:text-purple-700

                dark:border-white/15
                dark:bg-black/20
                dark:text-white/85
                dark:hover:border-purple-400/50
                dark:hover:bg-white/10
                dark:hover:text-white
              "
            >
              Explore Our Work

              <ArrowUpRight
                size={16}
                className="
                  opacity-70
                  transition-transform
                  duration-300
                  group-hover:-translate-y-0.5
                  group-hover:translate-x-0.5
                "
              />
            </a>
          </div>

          {/* =================================================
              BENEFITS
          ================================================= */}

          <div
            className="
              mt-11
              flex
              flex-wrap
              gap-x-7
              gap-y-5
              border-t
              border-slate-200/80
              pt-7

              dark:border-white/10

              sm:gap-x-8
            "
          >
            {/* Premium Quality */}
            <div className="flex items-center gap-2.5">
              <div
                className="
                  flex
                  h-7
                  w-7
                  shrink-0
                  items-center
                  justify-center
                  rounded-full
                  bg-purple-100
                  text-purple-600

                  dark:bg-purple-500/10
                  dark:text-purple-400
                "
              >
                <CheckCircle2 size={16} />
              </div>

              <span
                className="
                  text-sm
                  font-medium
                  text-slate-700
                  dark:text-white/75
                "
              >
                Built for Growth
              </span>
            </div>

            {/* Clean Code */}
            <div className="flex items-center gap-2.5">
              <div
                className="
                  flex
                  h-7
                  w-7
                  shrink-0
                  items-center
                  justify-center
                  rounded-full
                  bg-purple-100
                  text-purple-600

                  dark:bg-purple-500/10
                  dark:text-purple-400
                "
              >
                <CheckCircle2 size={16} />
              </div>

              <span
                className="
                  text-sm
                  font-medium
                  text-slate-700
                  dark:text-white/75
                "
              >
                Scalable by Design
              </span>
            </div>

            {/* Lifetime Support */}
            <div className="flex items-center gap-2.5">
              <div
                className="
                  flex
                  h-7
                  w-7
                  shrink-0
                  items-center
                  justify-center
                  rounded-full
                  bg-purple-100
                  text-purple-600

                  dark:bg-purple-500/10
                  dark:text-purple-400
                "
              >
                <CheckCircle2 size={16} />
              </div>

              <span
                className="
                  text-sm
                  font-medium
                  text-slate-700
                  dark:text-white/75
                "
              >
                A Team That Partners With You
              </span>
            </div>
          </div>
        </motion.div>
      </div>

      {/* =====================================================
          RIGHT SIDE IMAGE VISIBILITY ENHANCEMENT
      ====================================================== */}

      <div
        className="
          pointer-events-none
          absolute
          right-0
          top-0
          z-[2]
          hidden
          h-full
          w-[52%]
          bg-gradient-to-l
          from-transparent
          via-transparent
          to-transparent
          lg:block
        "
      />

      {/* Bottom Fade */}
      <div
        className="
          pointer-events-none
          absolute
          bottom-0
          left-0
          right-0
          z-20
          h-20
          bg-gradient-to-t
          from-[#fafafa]
          to-transparent

          dark:from-[#050509]
        "
      />
    </section>
  );
}

export default HeroSection;