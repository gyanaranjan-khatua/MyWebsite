
import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  Menu,
  X,
  ArrowUpRight,
} from "lucide-react";
import { motion } from "framer-motion";
import { AnimatedThemeToggler } from "../Components/ui/animated-theme-toggler";
import { CoolMode } from "@/Components/ui/cool-mode";
import logo from "../assets/logo.jpeg";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const location = useLocation();

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Contact", path: "/contact" },
    { name: "Blog", path: "/blog" },
  ];

  /* ---------------------------------
     Load Saved Theme
  ---------------------------------- */
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");

    if (savedTheme === "light") {
      document.documentElement.classList.remove("dark");
    } else {
      document.documentElement.classList.add("dark");
    }
  }, []);

  const isActive = (path) => location.pathname === path;

  return (
    <header className="fixed left-0 top-0 z-50 w-full">
      <nav className="w-full">

        {/* Main Navbar */}
        <div
          className="
            relative flex h-[78px] w-full items-center justify-between
            border-b
            border-slate-200/70
            bg-white/90
            px-5
            backdrop-blur-xl
            transition-colors duration-500

            dark:border-white/10
            dark:bg-[#050509]/90

            sm:px-8
            lg:px-28
          "
        >

          {/* Top Purple Light */}
          <div
            className="
              pointer-events-none
              absolute left-0 right-0 top-0
              h-[1px]
              bg-gradient-to-r
              from-transparent
              via-purple-500/70
              to-transparent
            "
          />

          {/* Logo */}
          <Link
            to="/"
            onClick={() => setIsOpen(false)}
            className="relative z-10 flex items-center"
          >
            <img
              src={logo}
              alt="Gyanex"
              className="h-15 w-[170px] rounded-lg object-cover"
            />
          </Link>

          {/* Desktop Navigation */}
          <div
            className="
              hidden
              items-center
              rounded-full
              border
              border-slate-200
              bg-slate-100/70
              p-1.5
              shadow-[inset_0_1px_1px_rgba(0,0,0,0.04),0_8px_30px_rgba(0,0,0,0.06)]
              backdrop-blur-2xl

              dark:border-white/[0.12]
              dark:bg-white/[0.06]
              dark:shadow-[inset_0_1px_1px_rgba(255,255,255,0.08),0_8px_30px_rgba(0,0,0,0.25)]

              lg:flex
            "
          >
            {navLinks.map((link) => (
              <CoolMode>
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
                      absolute
                      inset-0
                      rounded-full
                      border
                      border-purple-200
                      bg-purple-100
                      shadow-[inset_0_1px_2px_rgba(124,58,237,0.08),0_0_18px_rgba(124,58,237,0.08)]

                      dark:border-white/[0.10]
                      dark:bg-white/[0.10]
                      dark:shadow-[inset_0_1px_2px_rgba(255,255,255,0.12),0_0_18px_rgba(139,92,246,0.12)]
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
                        bg-purple-600
                        shadow-[0_0_10px_rgba(124,58,237,0.8)]

                        dark:bg-purple-400
                        dark:shadow-[0_0_10px_rgba(168,85,247,1)]
                      "
                    />
                  </motion.div>
                )}

                <span
                  className={`
                    relative z-10
                    block
                    rounded-full
                    px-5 py-2.5
                    text-sm
                    font-medium
                    tracking-wide
                    transition-colors duration-300

                    ${
                      isActive(link.path)
                        ? "text-purple-700 dark:text-white"
                        : "text-slate-600 hover:text-slate-950 dark:text-white/60 dark:hover:text-white"
                    }
                  `}
                >
                  {link.name}
                </span>
              </Link>
              </CoolMode>
            ))}
          </div>

          {/* Right Controls */}
          <div className="flex items-center gap-2">

            {/* Theme Toggle */}
            <AnimatedThemeToggler
              className="
                relative
                flex
                h-11
                w-11
                items-center
                justify-center
                overflow-hidden
                rounded-xl
                border
                border-slate-200
                bg-slate-100
                text-slate-700
                transition-all duration-300

                hover:border-purple-300
                hover:bg-purple-50
                hover:text-purple-600

                dark:border-white/10
                dark:bg-white/[0.06]
                dark:text-white
                dark:hover:border-purple-500/40
                dark:hover:bg-purple-500/10
                dark:hover:text-purple-400
              "
            />

            {/* Desktop CTA */}
            <Link
              to="/contact"
              className="
                group
                hidden
                items-center
                gap-2
                rounded-full
                border
                border-purple-500/40
                bg-gradient-to-r
                from-purple-600
                to-violet-500
                px-5
                py-3
                text-sm
                font-semibold
                text-white
                transition-all duration-300

                hover:from-purple-500
                hover:to-violet-400
                hover:shadow-[0_0_25px_rgba(139,92,246,0.25)]

                lg:flex
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
                relative
                z-10
                flex
                h-11
                w-11
                items-center
                justify-center
                rounded-xl
                border
                border-slate-200
                bg-slate-100
                text-slate-800
                transition-all duration-300

                hover:border-purple-300
                hover:text-purple-600

                dark:border-white/10
                dark:bg-white/[0.06]
                dark:text-white
                dark:hover:border-purple-500/40
                dark:hover:text-purple-400

                lg:hidden
              "
              aria-label="Toggle navigation"
            >
              {isOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
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
                ? "max-h-[500px] opacity-100"
                : "max-h-0 opacity-0"
            }
          `}
        >
          <div
            className="
              border-b
              border-slate-200
              bg-white/95
              px-5
              py-4
              shadow-2xl
              backdrop-blur-2xl
              transition-colors duration-500

              dark:border-white/10
              dark:bg-[#050509]/95
            "
          >
            <div
              className="
                rounded-2xl
                border
                border-slate-200
                bg-slate-100/70
                p-2
                backdrop-blur-2xl

                dark:border-white/[0.10]
                dark:bg-white/[0.05]
              "
            >
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className={`
                    flex
                    items-center
                    justify-between
                    rounded-xl
                    px-4
                    py-3.5
                    text-sm
                    font-medium
                    transition-all duration-300

                    ${
                      isActive(link.path)
                        ? "bg-purple-600 text-white shadow-[0_0_20px_rgba(124,58,237,0.2)]"
                        : "text-slate-600 hover:bg-purple-50 hover:text-purple-700 dark:text-white/70 dark:hover:bg-white/[0.07] dark:hover:text-white"
                    }
                  `}
                >
                  {link.name}

                  {isActive(link.path) && (
                    <span
                      className="
                        h-1.5
                        w-1.5
                        rounded-full
                        bg-white
                      "
                    />
                  )}
                </Link>
              ))}

              {/* Mobile CTA */}
              <Link
                to="/contact"
                onClick={() => setIsOpen(false)}
                className="
                  mt-2
                  flex
                  items-center
                  justify-center
                  gap-2
                  rounded-xl
                  bg-gradient-to-r
                  from-purple-600
                  to-violet-500
                  px-4
                  py-3.5
                  text-sm
                  font-semibold
                  text-white
                  transition-all duration-300
                  hover:from-purple-500
                  hover:to-violet-400
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
