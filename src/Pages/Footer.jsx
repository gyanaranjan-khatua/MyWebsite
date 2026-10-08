import React from "react";
import { ArrowUpRight, Mail, Phone, MapPin } from "lucide-react";
import {
  FaInstagram,
  FaLinkedinIn,
  FaFacebookF,
} from "react-icons/fa";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer
      className="
        relative overflow-hidden
        border-t border-slate-200
        bg-[#fafafa] text-slate-950

        dark:border-white/[0.08]
        dark:bg-[#050509]
        dark:text-white
      "
    >
      {/* =========================
          BACKGROUND
      ========================== */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">

        {/* Purple Glow */}
        <div
          className="
            absolute -left-32 top-20
            h-72 w-72
            rounded-full
            bg-purple-300/20
            blur-3xl
            dark:bg-purple-600/[0.10]
          "
        />

        <div
          className="
            absolute -right-32 bottom-10
            h-80 w-80
            rounded-full
            bg-violet-300/20
            blur-3xl
            dark:bg-violet-600/[0.10]
          "
        />

        {/* Center Glow */}
        <div
          className="
            absolute left-1/2 top-1/2
            h-[500px] w-[700px]
            -translate-x-1/2 -translate-y-1/2
            rounded-full
            bg-purple-500/[0.035]
            blur-[120px]
            dark:bg-purple-500/[0.06]
          "
        />

        {/* Subtle Grid */}
        <div
          className="
            absolute inset-0
            opacity-[0.035]
            dark:opacity-[0.12]
          "
          style={{
            backgroundImage: `
              linear-gradient(rgba(15,23,42,0.8) 1px, transparent 1px),
              linear-gradient(90deg, rgba(15,23,42,0.8) 1px, transparent 1px)
            `,
            backgroundSize: "70px 70px",
          }}
        />

        {/* Dark Grid */}
        <div
          className="
            absolute inset-0
            hidden
            dark:block
            dark:opacity-[0.08]
          "
          style={{
            backgroundImage: `
              linear-gradient(rgba(255,255,255,0.7) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,0.7) 1px, transparent 1px)
            `,
            backgroundSize: "70px 70px",
          }}
        />
      </div>

      {/* =========================
          MAIN CONTAINER
      ========================== */}
      <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">

        {/* =========================
            TOP CTA
        ========================== */}
        <div
          className="
            border-b
            border-slate-200
            py-16
            sm:py-20
            dark:border-white/[0.08]
          "
        >
          <div className="flex flex-col justify-between gap-10 lg:flex-row lg:items-end">

            {/* Content */}
            <div className="max-w-3xl">

              {/* Label */}
              <div className="mb-5 flex items-center gap-3">
                <span className="h-px w-10 bg-purple-500" />

                <span
                  className="
                    text-xs font-semibold
                    uppercase tracking-[0.25em]
                    text-purple-600
                    dark:text-purple-300
                  "
                >
                  Let&apos;s Create
                </span>
              </div>

              {/* Heading */}
              <h2
                className="
                  text-4xl font-bold
                  leading-[1.05]
                  tracking-[-0.04em]
                  text-slate-950
                  sm:text-5xl
                  md:text-6xl
                  dark:text-white
                "
              >
                Have an idea?

                <span
                  className="
                    block
                    bg-gradient-to-r
                    from-purple-600
                    via-violet-500
                    to-fuchsia-500
                    bg-clip-text
                    text-transparent

                    dark:from-purple-300
                    dark:via-violet-300
                    dark:to-fuchsia-400
                  "
                >
                  Let&apos;s make it happen.
                </span>
              </h2>

              <p
                className="
                  mt-6
                  max-w-xl
                  text-base
                  leading-7
                  text-slate-500
                  dark:text-slate-400
                "
              >
                Tell us what you&apos;re building. We&apos;ll help turn your idea
                into a thoughtful, reliable, and valuable digital experience.
              </p>
            </div>

            {/* CTA */}
            <Link
              to="/contact"
              className="
                group
                inline-flex
                w-fit
                shrink-0
                items-center
                gap-3
                rounded-full

                bg-slate-950
                px-7
                py-4

                text-sm
                font-semibold
                text-white

                shadow-lg
                shadow-slate-950/10

                transition-all
                duration-300

                hover:-translate-y-1
                hover:bg-purple-600
                hover:shadow-xl
                hover:shadow-purple-500/20

                dark:bg-white
                dark:text-slate-950
                dark:shadow-none
                dark:hover:bg-purple-400
              "
            >
              Start a Project

              <ArrowUpRight
                size={18}
                className="
                  transition-transform
                  duration-300
                  group-hover:-translate-y-1
                  group-hover:translate-x-1
                "
              />
            </Link>
          </div>
        </div>

        {/* =========================
            FOOTER CONTENT
        ========================== */}
        <div
          className="
            grid
            gap-12
            py-14

            md:grid-cols-2
            lg:grid-cols-[1.5fr_0.8fr_0.8fr_1fr]
          "
        >

          {/* =========================
              BRAND
          ========================== */}
          <div>

            {/* Logo */}
            <Link
              to="/"
              className="
                inline-block
                text-3xl
                font-bold
                tracking-[-0.05em]
                text-slate-950
                dark:text-white
              "
            >
              Gyan
              <span
                className="
                  bg-gradient-to-r
                  from-purple-500
                  to-fuchsia-500
                  bg-clip-text
                  text-transparent
                "
              >
                ex
              </span>
            </Link>

            <p
              className="
                mt-5
                max-w-sm
                text-sm
                leading-6
                text-slate-500
                dark:text-slate-400
              "
            >
              Building modern websites and applications around what matters
              most — your business, your customers, and your vision.
            </p>

            {/* Social Icons */}
            <div className="mt-7 flex items-center gap-3">

              {/* Instagram */}
              <a
                href="#"
                aria-label="Instagram"
                className="
                  flex h-10 w-10
                  items-center justify-center
                  rounded-full

                  border border-slate-200
                  bg-white
                  text-slate-500

                  transition-all
                  duration-300

                  hover:-translate-y-1
                  hover:border-purple-400
                  hover:bg-purple-500
                  hover:text-white
                  hover:shadow-lg
                  hover:shadow-purple-500/20

                  dark:border-white/[0.10]
                  dark:bg-white/[0.025]
                  dark:text-slate-400
                  dark:hover:border-purple-400
                  dark:hover:bg-purple-500
                "
              >
                <FaInstagram size={17} />
              </a>

              {/* LinkedIn */}
              <a
                href="#"
                aria-label="LinkedIn"
                className="
                  flex h-10 w-10
                  items-center justify-center
                  rounded-full

                  border border-slate-200
                  bg-white
                  text-slate-500

                  transition-all
                  duration-300

                  hover:-translate-y-1
                  hover:border-purple-400
                  hover:bg-purple-500
                  hover:text-white
                  hover:shadow-lg
                  hover:shadow-purple-500/20

                  dark:border-white/[0.10]
                  dark:bg-white/[0.025]
                  dark:text-slate-400
                  dark:hover:border-purple-400
                  dark:hover:bg-purple-500
                "
              >
                <FaLinkedinIn size={17} />
              </a>

              {/* Facebook */}
              <a
                href="#"
                aria-label="Facebook"
                className="
                  flex h-10 w-10
                  items-center justify-center
                  rounded-full

                  border border-slate-200
                  bg-white
                  text-slate-500

                  transition-all
                  duration-300

                  hover:-translate-y-1
                  hover:border-purple-400
                  hover:bg-purple-500
                  hover:text-white
                  hover:shadow-lg
                  hover:shadow-purple-500/20

                  dark:border-white/[0.10]
                  dark:bg-white/[0.025]
                  dark:text-slate-400
                  dark:hover:border-purple-400
                  dark:hover:bg-purple-500
                "
              >
                <FaFacebookF size={15} />
              </a>
            </div>
          </div>

          {/* =========================
              EXPLORE
          ========================== */}
          <div>

            <h3
              className="
                text-xs
                font-bold
                uppercase
                tracking-[0.2em]
                text-slate-950
                dark:text-white
              "
            >
              Explore
            </h3>

            <ul className="mt-6 space-y-4">

              <li>
                <Link
                  to="/"
                  className="
                    text-sm
                    text-slate-500
                    transition-colors
                    duration-300
                    hover:text-purple-600
                    dark:text-slate-400
                    dark:hover:text-purple-300
                  "
                >
                  Home
                </Link>
              </li>

              <li>
                <Link
                  to="/about"
                  className="
                    text-sm
                    text-slate-500
                    transition-colors
                    duration-300
                    hover:text-purple-600
                    dark:text-slate-400
                    dark:hover:text-purple-300
                  "
                >
                  About
                </Link>
              </li>

              <li>
                <Link
                  to="/services"
                  className="
                    text-sm
                    text-slate-500
                    transition-colors
                    duration-300
                    hover:text-purple-600
                    dark:text-slate-400
                    dark:hover:text-purple-300
                  "
                >
                  Services
                </Link>
              </li>

              <li>
                <Link
                  to="/contact"
                  className="
                    text-sm
                    text-slate-500
                    transition-colors
                    duration-300
                    hover:text-purple-600
                    dark:text-slate-400
                    dark:hover:text-purple-300
                  "
                >
                  Contact
                </Link>
              </li>

            </ul>
          </div>

          {/* =========================
              SERVICES
          ========================== */}
          <div>

            <h3
              className="
                text-xs
                font-bold
                uppercase
                tracking-[0.2em]
                text-slate-950
                dark:text-white
              "
            >
              Services
            </h3>

            <ul className="mt-6 space-y-4">

              <li>
                <Link
                  to="/services"
                  className="
                    text-sm
                    text-slate-500
                    transition-colors
                    duration-300
                    hover:text-purple-600
                    dark:text-slate-400
                    dark:hover:text-purple-300
                  "
                >
                  Website Development
                </Link>
              </li>

              <li>
                <Link
                  to="/services"
                  className="
                    text-sm
                    text-slate-500
                    transition-colors
                    duration-300
                    hover:text-purple-600
                    dark:text-slate-400
                    dark:hover:text-purple-300
                  "
                >
                  Web Applications
                </Link>
              </li>

              <li>
                <Link
                  to="/services"
                  className="
                    text-sm
                    text-slate-500
                    transition-colors
                    duration-300
                    hover:text-purple-600
                    dark:text-slate-400
                    dark:hover:text-purple-300
                  "
                >
                  Mobile Applications
                </Link>
              </li>

              <li>
                <Link
                  to="/services"
                  className="
                    text-sm
                    text-slate-500
                    transition-colors
                    duration-300
                    hover:text-purple-600
                    dark:text-slate-400
                    dark:hover:text-purple-300
                  "
                >
                  UI / UX Design
                </Link>
              </li>

              <li>
                <Link
                  to="/services"
                  className="
                    text-sm
                    text-slate-500
                    transition-colors
                    duration-300
                    hover:text-purple-600
                    dark:text-slate-400
                    dark:hover:text-purple-300
                  "
                >
                  Digital Marketing
                </Link>
              </li>

            </ul>
          </div>

          {/* =========================
              CONTACT
          ========================== */}
          <div>

            <h3
              className="
                text-xs
                font-bold
                uppercase
                tracking-[0.2em]
                text-slate-950
                dark:text-white
              "
            >
              Get in Touch
            </h3>

            <div className="mt-6 space-y-5">

              {/* Email */}
              <a
                href="mailto:hello@gyanex.in"
                className="group flex items-start gap-3"
              >
                <Mail
                  size={17}
                  className="
                    mt-0.5
                    shrink-0
                    text-purple-500
                    dark:text-purple-400
                  "
                />

                <span
                  className="
                    text-sm
                    text-slate-500
                    transition-colors
                    duration-300
                    group-hover:text-purple-600
                    dark:text-slate-400
                    dark:group-hover:text-purple-300
                  "
                >
                  hello@gyanex.in
                </span>
              </a>

              {/* Phone */}
              <a
                href="tel:+919040738633"
                className="group flex items-start gap-3"
              >
                <Phone
                  size={17}
                  className="
                    mt-0.5
                    shrink-0
                    text-purple-500
                    dark:text-purple-400
                  "
                />

                <span
                  className="
                    text-sm
                    text-slate-500
                    transition-colors
                    duration-300
                    group-hover:text-purple-600
                    dark:text-slate-400
                    dark:group-hover:text-purple-300
                  "
                >
                  +91 90407 38633
                </span>
              </a>

              {/* Location */}
              <div className="flex items-start gap-3">

                <MapPin
                  size={17}
                  className="
                    mt-0.5
                    shrink-0
                    text-purple-500
                    dark:text-purple-400
                  "
                />

                <span
                  className="
                    text-sm
                    leading-6
                    text-slate-500
                    dark:text-slate-400
                  "
                >
                  Odisha, India
                </span>

              </div>
            </div>
          </div>
        </div>

        {/* =========================
            BOTTOM BAR
        ========================== */}
        <div
          className="
            flex
            flex-col
            gap-4
            border-t
            border-slate-200
            py-6
            text-xs
            text-slate-400

            sm:flex-row
            sm:items-center
            sm:justify-between

            dark:border-white/[0.08]
            dark:text-slate-500
          "
        >
          <p>
            © {new Date().getFullYear()} Gyanex. All rights reserved.
          </p>

          <div className="flex items-center gap-6">

            <Link
              to="/privacy"
              className="
                transition-colors
                duration-300
                hover:text-purple-600
                dark:hover:text-purple-300
              "
            >
              Privacy Policy
            </Link>

            <Link
              to="/terms"
              className="
                transition-colors
                duration-300
                hover:text-purple-600
                dark:hover:text-purple-300
              "
            >
              Terms & Conditions
            </Link>

          </div>
        </div>
      </div>

      {/* Bottom Fade */}
      <div
        className="
          pointer-events-none
          absolute bottom-0 left-0 right-0
          h-24
          bg-gradient-to-t
          from-slate-100/70
          to-transparent

          dark:from-purple-950/[0.08]
        "
      />
    </footer>
  );
}

export default Footer;