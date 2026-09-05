import React from "react";
import {
  ArrowUpRight,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";

import {
  FaInstagram,
  FaLinkedinIn,
  FaFacebookF,
} from "react-icons/fa";

import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-white/[0.08] bg-black text-white">

      {/* =========================
          BACKGROUND
      ========================== */}
      <div className="pointer-events-none absolute inset-0">

        {/* Grid */}
        <div
          className="absolute inset-0 opacity-[0.07]"
          style={{
            backgroundImage: `
              linear-gradient(
                rgba(255,255,255,0.1) 1px,
                transparent 1px
              ),
              linear-gradient(
                90deg,
                rgba(255,255,255,0.1) 1px,
                transparent 1px
              )
            `,
            backgroundSize: "70px 70px",
          }}
        />

        {/* Amber glow */}
        <div className="absolute left-1/2 top-0 h-[300px] w-[500px] -translate-x-1/2 rounded-full bg-amber-500/[0.05] blur-[140px]" />

      </div>

      {/* =========================
          MAIN CONTAINER
      ========================== */}
      <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">

        {/* =========================
            TOP CTA
        ========================== */}
        <div className="border-b border-white/[0.08] py-16 sm:py-20">

          <div className="flex flex-col justify-between gap-10 lg:flex-row lg:items-end">

            <div className="max-w-3xl">

              {/* Label */}
              <div className="mb-5 flex items-center gap-3">
                <span className="h-px w-10 bg-amber-400" />

                <span className="text-xs font-semibold uppercase tracking-[0.25em] text-amber-400">
                  Let's Create
                </span>
              </div>

              {/* Heading */}
              <h2 className="text-4xl font-semibold leading-[1.05] tracking-[-0.04em] sm:text-5xl md:text-6xl">
                Have an idea?
                <span className="block text-white/35">
                  Let's make it happen.
                </span>
              </h2>

              <p className="mt-6 max-w-xl text-base leading-7 text-white/40">
                Tell us what you're building. We'll help turn your idea into
                a thoughtful, reliable, and valuable digital experience.
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
                bg-amber-500
                px-7
                py-4
                text-sm
                font-semibold
                text-black
                transition-all
                duration-300
                hover:bg-amber-400
                hover:shadow-[0_0_40px_rgba(245,158,11,0.2)]
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
        <div className="grid gap-12 py-14 md:grid-cols-2 lg:grid-cols-[1.5fr_0.8fr_0.8fr_1fr]">

          {/* =========================
              BRAND
          ========================== */}
          <div>

            <Link
              to="/"
              className="inline-block text-3xl font-bold tracking-[-0.05em]"
            >
              Gyan<span className="text-amber-400">ex</span>
            </Link>

            <p className="mt-5 max-w-sm text-sm leading-6 text-white/40">
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
                  flex h-10 w-10 items-center justify-center
                  rounded-full
                  border border-white/10
                  bg-white/[0.03]
                  text-white/50
                  transition-all duration-300
                  hover:border-amber-400/30
                  hover:bg-amber-500
                  hover:text-black
                "
              >
                <FaInstagram size={17} />
              </a>

              {/* LinkedIn */}
              <a
                href="#"
                aria-label="LinkedIn"
                className="
                  flex h-10 w-10 items-center justify-center
                  rounded-full
                  border border-white/10
                  bg-white/[0.03]
                  text-white/50
                  transition-all duration-300
                  hover:border-amber-400/30
                  hover:bg-amber-500
                  hover:text-black
                "
              >
                <FaLinkedinIn size={17} />
              </a>

              {/* Facebook */}
              <a
                href="#"
                aria-label="Facebook"
                className="
                  flex h-10 w-10 items-center justify-center
                  rounded-full
                  border border-white/10
                  bg-white/[0.03]
                  text-white/50
                  transition-all duration-300
                  hover:border-amber-400/30
                  hover:bg-amber-500
                  hover:text-black
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

            <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-white/70">
              Explore
            </h3>

            <ul className="mt-6 space-y-4">

              <li>
                <Link
                  to="/"
                  className="text-sm text-white/40 transition-colors duration-300 hover:text-amber-400"
                >
                  Home
                </Link>
              </li>

              <li>
                <Link
                  to="/about"
                  className="text-sm text-white/40 transition-colors duration-300 hover:text-amber-400"
                >
                  About
                </Link>
              </li>

              <li>
                <Link
                  to="/services"
                  className="text-sm text-white/40 transition-colors duration-300 hover:text-amber-400"
                >
                  Services
                </Link>
              </li>

              <li>
                <Link
                  to="/contact"
                  className="text-sm text-white/40 transition-colors duration-300 hover:text-amber-400"
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

            <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-white/70">
              Services
            </h3>

            <ul className="mt-6 space-y-4">

              <li className="text-sm text-white/40">
                Website Development
              </li>

              <li className="text-sm text-white/40">
                Web Applications
              </li>

              <li className="text-sm text-white/40">
                Mobile Applications
              </li>

              <li className="text-sm text-white/40">
                UI / UX Design
              </li>

            </ul>

          </div>

          {/* =========================
              CONTACT
          ========================== */}
          <div>

            <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-white/70">
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
                  className="mt-0.5 shrink-0 text-amber-400"
                />

                <span className="text-sm text-white/40 transition-colors duration-300 group-hover:text-white">
                  hello@gyanex.in
                </span>
              </a>

              {/* Phone */}
              <a
                href="tel:+910000000000"
                className="group flex items-start gap-3"
              >
                <Phone
                  size={17}
                  className="mt-0.5 shrink-0 text-amber-400"
                />

                <span className="text-sm text-white/40 transition-colors duration-300 group-hover:text-white">
                  +91 00000 00000
                </span>
              </a>

              {/* Location */}
              <div className="flex items-start gap-3">

                <MapPin
                  size={17}
                  className="mt-0.5 shrink-0 text-amber-400"
                />

                <span className="text-sm leading-6 text-white/40">
                  India
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
            border-white/[0.08]
            py-6
            text-xs
            text-white/25
            sm:flex-row
            sm:items-center
            sm:justify-between
          "
        >

          <p>
            © {new Date().getFullYear()} Gyanex. All rights reserved.
          </p>

          <div className="flex items-center gap-6">

            <Link
              to="/privacy"
              className="transition-colors duration-300 hover:text-white/60"
            >
              Privacy Policy
            </Link>

            <Link
              to="/terms"
              className="transition-colors duration-300 hover:text-white/60"
            >
              Terms & Conditions
            </Link>

          </div>

        </div>

      </div>

      {/* Bottom fade */}
      <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-black to-transparent" />

    </footer>
  );
}

export default Footer;