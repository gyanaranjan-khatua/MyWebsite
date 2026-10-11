import React, { useState } from "react";
import {
  ArrowUpRight,
  Check,
  Code2,
  Smartphone,
  Layers3,
  Palette,
  Megaphone,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";

// Import your images from assets
import websiteImage from "../assets/webdev.png";
import webAppImage from "../assets/webdev.png";
import mobileImage from "../assets/appdev.png";
import uiuxImage from "../assets/appdev.png";
import marketingImage from "../assets/appdev.png";

function Services() {
  const services = [
    {
      id: "01",
      title: "Website Development",
      shortTitle: "Websites",
      description:
        "High-performance websites designed to establish your brand, engage your audience, and turn visitors into customers.",
      image: websiteImage,
      icon: Code2,
      color: "purple",
      features: [
        "Business & Corporate Websites",
        "Landing Pages",
        "Portfolio Websites",
        "E-commerce Websites",
        "Responsive & SEO-Friendly",
      ],
      technologies: ["React", "Next.js", "Tailwind CSS", "JavaScript"],
    },
    {
      id: "02",
      title: "Web Applications",
      shortTitle: "Web Apps",
      description:
        "Scalable and powerful web applications built around your business processes, users, and long-term goals.",
      image: webAppImage,
      icon: Layers3,
      color: "violet",
      features: [
        "Custom Web Applications",
        "Admin Dashboards",
        "SaaS Platforms",
        "Business Management Systems",
        "API & Backend Integration",
      ],
      technologies: ["React", "Node.js", "Express", "MongoDB"],
    },
    {
      id: "03",
      title: "Mobile Application",
      shortTitle: "Mobile Apps",
      description:
        "Modern mobile experiences that bring your product directly to your customers' fingertips across platforms.",
      image: mobileImage,
      icon: Smartphone,
      color: "fuchsia",
      features: [
        "Android Applications",
        "iOS Applications",
        "Cross-Platform Apps",
        "API Integration",
        "App UI & Animations",
      ],
      technologies: ["React Native", "Expo", "JavaScript", "REST API"],
    },
    {
      id: "04",
      title: "UI/UX Design",
      shortTitle: "UI / UX",
      description:
        "Thoughtful interfaces and user experiences that make digital products intuitive, visually engaging, and easy to use.",
      image: uiuxImage,
      icon: Palette,
      color: "indigo",
      features: [
        "Website UI Design",
        "Mobile App UI",
        "Dashboard Design",
        "Design Systems",
        "User Experience Strategy",
      ],
      technologies: ["Figma", "Wireframes", "Prototyping", "Design Systems"],
    },
    {
      id: "05",
      title: "Digital Marketing",
      shortTitle: "Marketing",
      description:
        "Strategic digital marketing solutions that improve your online visibility, attract the right audience, and drive growth.",
      image: marketingImage,
      icon: Megaphone,
      color: "purple",
      features: [
        "Search Engine Optimization",
        "Social Media Marketing",
        "Google Ads",
        "Content Strategy",
        "Performance Marketing",
      ],
      technologies: ["SEO", "Google Ads", "Analytics", "Social Media"],
    },
  ];

  const [activeService, setActiveService] = useState(services[0]);

  return (
    <section
      id="services"
      className="
        relative min-h-screen overflow-hidden
        bg-[#fafafa] text-slate-950
        dark:bg-[#050509] dark:text-white
      "
    >
      {/* ================= BACKGROUND GRID ================= */}
      <div
        className="
          pointer-events-none absolute inset-0
          bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)]
          bg-[size:70px_70px]
          opacity-40
          dark:bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)]
          dark:opacity-[0.12]
        "
      />

      {/* Background Glow */}
      <div
        className="
          pointer-events-none absolute
          left-1/2 top-[30%]
          h-[600px] w-[700px]
          -translate-x-1/2
          rounded-full
          bg-purple-500/[0.08]
          blur-[140px]
          dark:bg-purple-600/[0.12]
        "
      />

      {/* ================= HERO ================= */}
      <div className="relative mx-auto max-w-7xl px-5 pb-12 pt-24 sm:px-8 lg:px-10 lg:pb-10 lg:pt-20">
        <div className="grid items-end gap-8 lg:grid-cols-[1fr_0.7fr]">
          <motion.div
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            {/* Label */}
            <div
              className="
                mb-4 inline-flex items-center gap-2
                rounded-full
                border border-purple-500/20
                bg-purple-500/[0.06]
                px-4 py-2
                text-xs font-semibold uppercase
                tracking-[0.2em]
                text-purple-600
                dark:border-purple-400/20
                dark:bg-purple-400/[0.08]
                dark:text-purple-300
              "
            >
              <span className="h-1.5 w-1.5 rounded-full bg-purple-500" />
              What We Do
            </div>

            <h1
              className="
                max-w-4xl
                text-5xl font-semibold
                leading-[0.98]
                tracking-[-0.04em]
                sm:text-6xl
                lg:text-6xl
              "
            >
              Digital solutions
              <br />
              built for{" "}
              <span
                className="
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
                real growth.
              </span>
            </h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="lg:pb-2"
          >
            <p
              className="
                max-w-xl
                text-base leading-7
                text-slate-600
                dark:text-slate-400
              "
            >
              From websites and applications to mobile experiences and digital
              marketing, we create technology that helps ambitious businesses
              move forward.
            </p>

            <div className="mt-6 flex items-center gap-3">
              <div className="h-px w-12 bg-purple-500" />
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">
                Gyanex Digital
              </span>
            </div>
          </motion.div>
        </div>
      </div>

      {/* ================= SERVICES ================= */}
      <div className="relative mx-auto max-w-7xl px-5 pb-20 sm:px-8 lg:px-10 lg:pb-24">
        <div
          className="
            overflow-hidden
            rounded-[32px]
            border border-slate-200
            bg-white/65
            shadow-[0_30px_100px_rgba(15,23,42,0.07)]
            backdrop-blur-2xl

            dark:border-white/[0.10]
            dark:bg-white/[0.025]
            dark:shadow-none
          "
        >
          {/* ================= SERVICE NAVIGATION ================= */}
          <div
            className="
              grid
              border-b border-slate-200
              dark:border-white/[0.08]
              sm:grid-cols-2
              lg:grid-cols-5
            "
          >
            {services.map((service) => {
              const Icon = service.icon;
              const isActive = activeService.id === service.id;

              return (
                <button
                  key={service.id}
                  onClick={() => setActiveService(service)}
                  className={`
                    group relative
                    flex items-center gap-3
                    border-b border-slate-200
                    px-4 py-4
                    text-left
                    transition-all duration-300
                    dark:border-white/[0.08]
                    lg:border-b-0
                    lg:border-r
                    lg:last:border-r-0

                    ${
                      isActive
                        ? "bg-purple-500/[0.07] dark:bg-purple-500/[0.08]"
                        : "hover:bg-slate-50 dark:hover:bg-white/[0.025]"
                    }
                  `}
                >
                  {/* Active Line */}
                  <span
                    className={`
                      absolute left-0 top-0 h-0.5
                      bg-purple-500
                      transition-all duration-300
                      ${
                        isActive
                          ? "w-full"
                          : "w-0 group-hover:w-full"
                      }
                    `}
                  />

                  <span
                    className={`
                      text-xs font-semibold
                      ${
                        isActive
                          ? "text-purple-500"
                          : "text-slate-400"
                      }
                    `}
                  >
                    {service.id}
                  </span>

                  <Icon
                    size={18}
                    className={`
                      transition-colors
                      ${
                        isActive
                          ? "text-purple-500"
                          : "text-slate-400 group-hover:text-purple-500"
                      }
                    `}
                  />

                  <span
                    className={`
                      text-sm font-semibold
                      ${
                        isActive
                          ? "text-slate-950 dark:text-white"
                          : "text-slate-500 dark:text-slate-400"
                      }
                    `}
                  >
                    {service.shortTitle}
                  </span>
                </button>
              );
            })}
          </div>

          {/* ================= ACTIVE SERVICE ================= */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeService.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.4 }}
              className="grid lg:grid-cols-[1.05fr_0.95fr]"
            >
              {/* IMAGE */}
              <div
                className="
                  relative
                  min-h-[360px]
                  overflow-hidden
                  border-b border-slate-200
                  dark:border-white/[0.08]
                  lg:min-h-[420px]
                  lg:border-b-0
                  lg:border-r
                  dark:lg:border-white/[0.08]
                "
              >
                <img
                  src={activeService.image}
                  alt={activeService.title}
                  className="
                    absolute inset-0
                    h-full w-full
                    object-cover
                    transition-transform
                    duration-700
                  "
                />

                {/* Image Overlay */}
                <div
                  className="
                    absolute inset-0
                    bg-gradient-to-t
                    from-slate-950
                    via-slate-950/20
                    to-transparent
                  "
                />

                {/* Purple Glow */}
                <div
                  className="
                    absolute
                    -bottom-20
                    -right-20
                    h-72 w-72
                    rounded-full
                    bg-purple-500/30
                    blur-[100px]
                  "
                />

                {/* Image Content */}
                <div className="absolute bottom-0 left-0 right-0 p-7 sm:p-10">
                  <div className="mb-4 flex items-center gap-3">
                    <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white backdrop-blur-md">
                      <activeService.icon size={18} />
                    </span>

                    <span className="text-xs font-medium uppercase tracking-[0.2em] text-white/60">
                      Service {activeService.id}
                    </span>
                  </div>

                  <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
                    {activeService.title}
                  </h2>

                  <p className="mt-3 max-w-lg text-sm leading-6 text-white/65">
                    {activeService.description}
                  </p>
                </div>
              </div>

              {/* CONTENT */}
              <div className="flex flex-col justify-between p-6 sm:p-8 lg:p-8">
                <div>
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-semibold uppercase tracking-[0.2em] text-purple-500">
                      What we provide
                    </span>

                    <span className="text-5xl font-semibold tracking-tight text-slate-200 dark:text-white/[0.07]">
                      {activeService.id}
                    </span>
                  </div>

                  <h3 className="mt-3 text-xl font-semibold tracking-tight sm:text-2xl">
                    Everything you need to move forward.
                  </h3>

                  {/* Features */}
                  <div className="mt-5 grid gap-2 lg:grid-cols-2">
                    {activeService.features.map((feature) => (
                      <div
                        key={feature}
                        className="
                          flex items-center gap-3
                          rounded-lg
                          border border-slate-200
                          bg-slate-50/70
                          px-3 py-2
                          dark:border-white/[0.07]
                          dark:bg-white/[0.02]
                        "
                      >
                        <span
                          className="
                            flex h-6 w-6 shrink-0
                            items-center justify-center
                            rounded-full
                            bg-purple-500/10
                            text-purple-500
                            dark:bg-purple-400/10
                            dark:text-purple-300
                          "
                        >
                          <Check size={14} strokeWidth={2.5} />
                        </span>

                        <span className="text-sm font-medium text-slate-700 dark:text-slate-300">
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* Technologies */}
                  <div className="mt-5">
                    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-400">
                      Technologies & Expertise
                    </p>

                    <div className="mt-3 flex flex-wrap gap-2">
                      {activeService.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="
                            rounded-full
                            border border-purple-500/15
                            bg-purple-500/[0.05]
                            px-3 py-1
                            text-xs font-medium
                            text-purple-600
                            dark:border-purple-400/15
                            dark:bg-purple-400/[0.06]
                            dark:text-purple-300
                          "
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* CTA */}
                <div
                  className="
                    mt-6
                    border-t border-slate-200
                    pt-5
                    dark:border-white/[0.08]
                  "
                >
                  <Link
                    to="/contact"
                    className="
                      group inline-flex
                      items-center gap-2
                      rounded-full
                      bg-slate-950
                      px-6 py-3.5
                      text-sm font-semibold
                      text-white
                      transition-all duration-300
                      hover:-translate-y-0.5
                      hover:bg-purple-600
                      hover:shadow-xl
                      hover:shadow-purple-500/20

                      dark:bg-white
                      dark:text-slate-950
                      dark:hover:bg-purple-400
                    "
                  >
                    Discuss Your Project

                    <ArrowUpRight
                      size={17}
                      className="
                        transition-transform duration-300
                        group-hover:-translate-y-0.5
                        group-hover:translate-x-0.5
                      "
                    />
                  </Link>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* ================= BOTTOM CTA ================= */}
      <div className="relative mx-auto max-w-7xl px-5 pb-24 sm:px-8 lg:px-10 lg:pb-32">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="
            relative overflow-hidden
            rounded-[32px]
            border border-purple-500/20
            bg-gradient-to-br
            from-purple-600
            via-violet-600
            to-fuchsia-600
            p-8
            text-white
            sm:p-12
            lg:p-16
          "
        >
          {/* Decorative Circles */}
          <div
            className="
              pointer-events-none absolute
              -right-20 -top-32
              h-80 w-80
              rounded-full
              border border-white/10
            "
          />

          <div
            className="
              pointer-events-none absolute
              -bottom-40 left-1/3
              h-80 w-80
              rounded-full
              bg-white/10
              blur-[80px]
            "
          />

          <div className="relative flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/60">
                Have an idea?
              </p>

              <h2 className="mt-3 max-w-2xl text-3xl font-semibold tracking-tight sm:text-4xl lg:text-5xl">
                Let&apos;s turn your idea into something people remember.
              </h2>

              <p className="mt-4 max-w-xl text-sm leading-6 text-white/70">
                Tell us what you&apos;re building and let&apos;s create a digital
                experience that makes your business stand out.
              </p>
            </div>

            <Link
              to="/contact"
              className="
                group inline-flex shrink-0
                items-center justify-center gap-2
                rounded-full
                bg-white
                px-6 py-4
                text-sm font-semibold
                text-purple-700
                transition-all duration-300
                hover:-translate-y-1
                hover:bg-slate-950
                hover:text-white
                hover:shadow-2xl
              "
            >
              Start a Conversation

              <ArrowUpRight
                size={17}
                className="
                  transition-transform duration-300
                  group-hover:-translate-y-0.5
                  group-hover:translate-x-0.5
                "
              />
            </Link>
          </div>
        </motion.div>
      </div>

      {/* Bottom Fade */}
      <div
        className="
          pointer-events-none absolute
          bottom-0 left-0 right-0
          h-32
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