
import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Contact", path: "/contact" },
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <header className="fixed top-0 left-0 z-50 w-full">
      <nav className="w-full">
        <div className="relative flex h-[78px] w-full items-center justify-between border-b border-white/10 bg-black/90 px-5 backdrop-blur-xl sm:px-8 lg:px-28">

          {/* Top Amber Light */}
          <div className="pointer-events-none absolute left-0 right-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-amber-500/50 to-transparent" />

          {/* Gyanex Text Logo */}
          <Link
            to="/"
            onClick={() => setIsOpen(false)}
            className="group relative z-10 flex items-center"
          >
            <span className="text-[28px] font-semibold tracking-[-0.04em] text-white transition-all duration-300 group-hover:text-amber-400 sm:text-[30px]">
              Gyan
              <span className="text-amber-400 transition-colors duration-300 group-hover:text-white">
                ex
              </span>
            </span>

            {/* Small amber underline */}
            <span className="absolute -bottom-1 left-0 h-[1px] w-0 bg-amber-400 transition-all duration-500 group-hover:w-full" />
          </Link>

          {/* Desktop Navigation */}
          <div
            className="
              hidden lg:flex
              items-center
              rounded-full
              border border-white/[0.12]
              bg-white/[0.06]
              p-1.5
              shadow-[inset_0_1px_1px_rgba(255,255,255,0.08),0_8px_30px_rgba(0,0,0,0.25)]
              backdrop-blur-2xl
            "
          >
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className="relative"
              >
                {isActive(link.path) && (
                  <motion.div
                    layoutId="activeNav"
                    transition={{
                      type: "spring",
                      stiffness: 380,
                      damping: 30,
                      mass: 0.7,
                    }}
                    className="
                      absolute inset-0
                      rounded-full
                      border border-white/[0.10]
                      bg-white/[0.10]
                      shadow-[inset_0_1px_2px_rgba(255,255,255,0.12),0_0_18px_rgba(245,158,11,0.08)]
                    "
                  >
                    <motion.span
                      layoutId="activeDot"
                      transition={{
                        type: "spring",
                        stiffness: 450,
                        damping: 28,
                      }}
                      className="
                        absolute
                        bottom-1
                        left-1/2
                        h-1
                        w-1
                        -translate-x-1/2
                        rounded-full
                        bg-amber-400
                        shadow-[0_0_10px_rgba(251,191,36,1)]
                      "
                    />
                  </motion.div>
                )}

                <span
                  className={`
                    relative z-10
                    block rounded-full
                    px-5 py-2.5
                    text-sm font-medium
                    tracking-wide
                    transition-colors duration-300
                    ${
                      isActive(link.path)
                        ? "text-white"
                        : "text-white/60 hover:text-white"
                    }
                  `}
                >
                  {link.name}
                </span>
              </Link>
            ))}
          </div>

          {/* Desktop CTA */}
          <Link
            to="/contact"
            className="
              group hidden lg:flex
              items-center gap-2
              rounded-full
              border border-amber-500/40
              bg-gradient-to-r from-amber-400 to-amber-500
              px-5 py-3
              text-sm font-semibold text-black
              transition-all duration-300
              hover:bg-amber-400
              hover:shadow-[0_0_25px_rgba(245,158,11,0.20)]
            "
          >
            Let's Talk

            <ArrowUpRight
              size={17}
              className="
                transition-transform duration-300
                group-hover:-translate-y-0.5
                group-hover:translate-x-0.5
              "
            />
          </Link>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="
              relative z-10
              flex h-11 w-11
              items-center justify-center
              rounded-xl
              border border-white/10
              bg-white/[0.06]
              text-white
              transition-all duration-300
              hover:border-amber-500/40
              hover:text-amber-400
              lg:hidden
            "
            aria-label="Toggle navigation"
          >
            {isOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`
            overflow-hidden
            transition-all duration-500
            ease-[cubic-bezier(0.22,1,0.36,1)]
            lg:hidden
            ${
              isOpen
                ? "max-h-[420px] opacity-100"
                : "max-h-0 opacity-0"
            }
          `}
        >
          <div
            className="
              border-b border-white/10
              bg-black/95
              px-5 py-4
              shadow-2xl
              backdrop-blur-2xl
            "
          >
            <div
              className="
                rounded-2xl
                border border-white/[0.10]
                bg-white/[0.05]
                p-2
                backdrop-blur-2xl
              "
            >
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className={`
                    flex items-center justify-between
                    rounded-xl
                    px-4 py-3.5
                    text-sm font-medium
                    transition-all duration-300
                    ${
                      isActive(link.path)
                        ? "bg-amber-500 text-black"
                        : "text-white/70 hover:bg-white/[0.07] hover:text-white"
                    }
                  `}
                >
                  {link.name}

                  {isActive(link.path) && (
                    <span className="h-1.5 w-1.5 rounded-full bg-black" />
                  )}
                </Link>
              ))}

              <Link
                to="/contact"
                onClick={() => setIsOpen(false)}
                className="
                  mt-2
                  flex items-center justify-center gap-2
                  rounded-xl
                  bg-amber-500
                  px-4 py-3.5
                  text-sm font-semibold text-black
                  transition-all duration-300
                  hover:bg-amber-400
                "
              >
                Let's Talk
                <ArrowUpRight size={17} />
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;

