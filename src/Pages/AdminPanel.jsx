
import React from "react";
import {
  ShieldCheck,
  Users,
  BarChart3,
  Settings,
  LockKeyhole,
  Database,
  Check,
  LayoutDashboard,
  Zap,
  ChartNoAxesCombined,
} from "lucide-react";
import { motion } from "framer-motion";

import adminPanelImage from "../assets/adminpanel.png";

function AdminPanel() {
  const leftFeatures = [
    {
      icon: LayoutDashboard,
      title: "Centralized Dashboard",
      description:
        "Manage your website, applications, and business activities from one organized dashboard.",
    },
    {
      icon: Users,
      title: "User Management",
      description:
        "Organize user accounts, manage access, and maintain control over your platform.",
    },
    {
      icon: BarChart3,
      title: "Real-Time Insights",
      description:
        "Understand business activity through meaningful statistics, reports, and visual summaries.",
    },
  ];

  const rightFeatures = [
    {
      icon: ShieldCheck,
      title: "Secure Access",
      description:
        "Role-based access and authentication help protect important administrative functions.",
    },
    {
      icon: Database,
      title: "Organized Data",
      description:
        "Keep essential records structured and accessible for easier day-to-day management.",
    },
    {
      icon: Settings,
      title: "Flexible Controls",
      description:
        "Configure platform settings and manage operational tasks from a central location.",
    },
  ];

  return (
    <section
      id="admin-panel"
      className="relative overflow-hidden bg-[#fafafa] py-20 text-slate-950 transition-colors duration-300 dark:bg-[#050509] dark:text-white sm:py-24 lg:py-28"
    >
      {/* Background Grid */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.4] dark:opacity-[0.16]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(139,92,246,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(139,92,246,0.08) 1px, transparent 1px)",
          backgroundSize: "70px 70px",
        }}
      />

      {/* Ambient Glows */}
      <div className="pointer-events-none absolute -left-40 top-1/3 h-[400px] w-[400px] rounded-full bg-violet-500/10 blur-[130px] dark:bg-violet-600/10" />

      <div className="pointer-events-none absolute -right-40 bottom-0 h-[400px] w-[400px] rounded-full bg-fuchsia-500/10 blur-[130px] dark:bg-fuchsia-600/10" />

      <div className="relative mx-auto max-w-[1500px] px-5 sm:px-8 lg:px-10">
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="mx-auto mb-16 max-w-3xl text-center"
        >
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-violet-500/20 bg-violet-500/[0.07] px-4 py-2 text-sm font-medium text-violet-600 dark:border-violet-400/20 dark:bg-violet-500/10 dark:text-violet-300">
            <LayoutDashboard className="h-4 w-4" />
            <span>Powerful Admin Solutions</span>
          </div>

          <h2 className="text-3xl font-semibold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
            Complete control.
            <span className="block bg-gradient-to-r from-violet-600 via-purple-600 to-fuchsia-500 bg-clip-text text-transparent dark:from-violet-400 dark:via-purple-400 dark:to-fuchsia-400">
              One powerful dashboard.
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-slate-600 dark:text-slate-400 sm:text-base">
            We build intuitive admin panels that simplify business operations,
            organize important information, and help you manage your digital
            platform with confidence.
          </p>
        </motion.div>

        {/* Three Column Layout */}
        <div className="grid items-center gap-10 lg:grid-cols-[1fr_1.15fr_1fr] lg:gap-8 xl:gap-12">
          {/* LEFT CONTENT */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7 }}
            className="order-2 space-y-8 lg:order-1"
          >
            {leftFeatures.map((feature, index) => {
              const Icon = feature.icon;

              return (
                <div
                  key={feature.title}
                  className="group flex gap-4"
                >
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-violet-500/15 bg-violet-500/[0.07] text-violet-600 transition duration-300 group-hover:border-violet-500/30 group-hover:bg-violet-500/15 dark:text-violet-300">
                    <Icon className="h-5 w-5" />
                  </div>

                  <div>
                    <div className="flex items-center gap-2">
                      <span className="font-mono text-xs text-violet-500/70">
                        0{index + 1}
                      </span>
                      <h3 className="text-base font-semibold text-slate-900 dark:text-white sm:text-lg">
                        {feature.title}
                      </h3>
                    </div>

                    <p className="mt-2 text-sm leading-7 text-slate-600 dark:text-slate-400">
                      {feature.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </motion.div>

          {/* CENTER IMAGE */}
          <motion.div
            initial={{ opacity: 0, y: 25, scale: 0.96 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative order-1 flex min-w-0 items-center justify-center lg:order-2"
          >
            {/* Image Glow */}
            <div className="absolute inset-4 rounded-full bg-violet-500/15 blur-[70px]" />

            {/* Dashboard Image */}
            <div className="relative w-full max-w-[520px] rounded-[2rem] border border-slate-200/80 bg-white/70 p-2.5 shadow-2xl shadow-violet-500/10 backdrop-blur-xl dark:border-white/10 dark:bg-white/[0.035] dark:shadow-black/30 sm:p-3">
              <div className="overflow-hidden rounded-[1.5rem] border border-slate-200/70 bg-white dark:border-white/10 dark:bg-[#0b0b12]">
                {/* Browser Header */}
                <div className="flex h-10 items-center gap-1.5 border-b border-slate-200 px-4 dark:border-white/10">
                  <span className="h-2.5 w-2.5 rounded-full bg-rose-400" />
                  <span className="h-2.5 w-2.5 rounded-full bg-amber-400" />
                  <span className="h-2.5 w-2.5 rounded-full bg-emerald-400" />

                  <div className="ml-3 flex h-5 flex-1 items-center rounded-md bg-slate-100 px-3 dark:bg-white/[0.06]">
                    <span className="text-[9px] text-slate-500">
                      admin.yourbusiness.com
                    </span>
                  </div>
                </div>

                <img
                  src={adminPanelImage}
                  alt="Admin dashboard interface"
                  loading="lazy"
                  className="block h-auto min-h-[250px] w-full object-contain sm:min-h-[320px]"
                />
              </div>

              {/* Floating Status */}
              <motion.div
                animate={{ y: [0, -6, 0] }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute -bottom-5 -left-3 flex items-center gap-3 rounded-2xl border border-slate-200 bg-white/95 px-4 py-3 shadow-xl dark:border-white/10 dark:bg-[#11111b]/95 sm:-left-5"
              >
                <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-emerald-500/10 text-emerald-600 dark:text-emerald-400">
                  <Check className="h-5 w-5" />
                </div>

                <div>
                  <p className="text-xs font-semibold text-slate-900 dark:text-white">
                    All in one place
                  </p>
                  <p className="mt-0.5 text-[10px] text-slate-500 dark:text-slate-400">
                    Simplified management
                  </p>
                </div>
              </motion.div>

              <motion.div
                animate={{ y: [0, 6, 0] }}
                transition={{
                  duration: 4.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute -right-2 -top-4 flex h-12 w-12 items-center justify-center rounded-2xl border border-violet-500/20 bg-white/90 text-violet-600 shadow-xl dark:bg-[#11111b]/95 dark:text-violet-300 sm:-right-4"
              >
                <ChartNoAxesCombined className="h-5 w-5" />
              </motion.div>
            </div>
          </motion.div>

          {/* RIGHT CONTENT */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7 }}
            className="order-3 space-y-8"
          >
            {rightFeatures.map((feature, index) => {
              const Icon = feature.icon;

              return (
                <div
                  key={feature.title}
                  className="group flex gap-4"
                >
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-fuchsia-500/15 bg-fuchsia-500/[0.07] text-fuchsia-600 transition duration-300 group-hover:border-fuchsia-500/30 group-hover:bg-fuchsia-500/15 dark:text-fuchsia-300">
                    <Icon className="h-5 w-5" />
                  </div>

                  <div>
                    <div className="flex items-center gap-2">
                      <span className="font-mono text-xs text-fuchsia-500/70">
                        0{index + 4}
                      </span>
                      <h3 className="text-base font-semibold text-slate-900 dark:text-white sm:text-lg">
                        {feature.title}
                      </h3>
                    </div>

                    <p className="mt-2 text-sm leading-7 text-slate-600 dark:text-slate-400">
                      {feature.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </motion.div>
        </div>

        {/* Bottom Capabilities Strip */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="mt-20 grid grid-cols-1 divide-y divide-slate-200 rounded-2xl border border-slate-200 bg-white/60 backdrop-blur-xl dark:divide-white/10 dark:border-white/10 dark:bg-white/[0.025] sm:grid-cols-3 sm:divide-x sm:divide-y-0"
        >
          {[
            {
              icon: Zap,
              title: "Efficient Workflows",
              description: "Less manual work, better organization",
            },
            {
              icon: ShieldCheck,
              title: "Access & Security",
              description: "Controls designed around your needs",
            },
            {
              icon: ChartNoAxesCombined,
              title: "Clear Business Insights",
              description: "Information presented meaningfully",
            },
          ].map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className="flex items-center gap-4 px-5 py-5 sm:px-6"
              >
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-violet-500/10 text-violet-600 dark:text-violet-300">
                  <Icon className="h-5 w-5" />
                </div>

                <div>
                  <p className="text-sm font-semibold text-slate-900 dark:text-white">
                    {item.title}
                  </p>
                  <p className="mt-1 text-xs leading-5 text-slate-500 dark:text-slate-400">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}

export default AdminPanel;
