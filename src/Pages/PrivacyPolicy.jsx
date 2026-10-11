import React from "react";
import { motion } from "framer-motion";
import {
  ShieldCheck,
  LockKeyhole,
  Database,
  Eye,
  Cookie,
  UserCheck,
  Mail,
  FileText,
  Globe,
  RefreshCw,
} from "lucide-react";

const policySections = [
  {
    id: "01",
    icon: Eye,
    title: "Information We Collect",
    content:
      "We may collect information you voluntarily provide when contacting us, requesting a quote, or using our services. This may include your name, email address, phone number, company name, project details, and other information you choose to share.",
  },
  {
    id: "02",
    icon: Database,
    title: "How We Use Your Information",
    content:
      "We may use the information we collect to respond to inquiries, provide requested services, prepare project proposals, communicate updates, improve our website, maintain security, and fulfill applicable legal obligations.",
  },
  {
    id: "03",
    icon: LockKeyhole,
    title: "Data Protection",
    content:
      "We take reasonable technical and organizational measures to protect information against unauthorized access, alteration, disclosure, or loss. However, no method of transmitting or storing information online can be guaranteed to be completely secure.",
  },
  {
    id: "04",
    icon: UserCheck,
    title: "Sharing of Information",
    content:
      "We do not sell your personal information. We may share information with trusted service providers who help us operate our website or deliver services, when required by law, or when necessary to protect our rights and the security of our users.",
  },
  {
    id: "05",
    icon: Cookie,
    title: "Cookies and Analytics",
    content:
      "Our website may use cookies or similar technologies to support essential functionality, understand website usage, and improve the browsing experience. You can manage cookies through your browser settings. Disabling certain cookies may affect website functionality.",
  },
  {
    id: "06",
    icon: Globe,
    title: "Third-Party Services",
    content:
      "Our website may contain links to third-party websites or use external services. Those providers may process information under their own privacy policies. We encourage you to review their policies before sharing personal information with them.",
  },
  {
    id: "07",
    icon: ShieldCheck,
    title: "Your Privacy Rights",
    content:
      "Depending on applicable law, you may have the right to request access to, correction of, or deletion of your personal information, or to object to certain processing. You can contact us to submit a privacy-related request. We may need to verify your identity before responding.",
  },
  {
    id: "08",
    icon: FileText,
    title: "Data Retention",
    content:
      "We retain personal information only for as long as reasonably necessary for the purposes described in this policy, including service delivery, recordkeeping, dispute resolution, and legal compliance.",
  },
  {
    id: "09",
    icon: RefreshCw,
    title: "Changes to This Policy",
    content:
      "We may update this Privacy Policy from time to time to reflect changes in our practices, services, or legal obligations. Any updated version will be published on this page with a revised effective date.",
  },
];

function PrivacyPolicy() {
  const lastUpdated = "October 11, 2026";

  return (
    <main className="relative min-h-screen overflow-hidden bg-[#fafafa] text-slate-900 transition-colors duration-300 dark:bg-[#050509] dark:text-white">
      {/* Background */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.035] dark:opacity-[0.06]"
        style={{
          backgroundImage:
            "linear-gradient(to right, #8b5cf6 1px, transparent 1px), linear-gradient(to bottom, #8b5cf6 1px, transparent 1px)",
          backgroundSize: "64px 64px",
          maskImage:
            "linear-gradient(to bottom, black, transparent 85%)",
        }}
      />

      <div className="pointer-events-none absolute -top-40 left-1/2 h-[450px] w-[650px] -translate-x-1/2 rounded-full bg-purple-500/10 blur-[130px] dark:bg-purple-600/15" />

      {/* Hero */}
      <section className="relative px-5 pb-14 pt-28 sm:px-8 sm:pb-20 sm:pt-36">
        <div className="mx-auto max-w-5xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-7 inline-flex items-center gap-2 rounded-full border border-purple-500/20 bg-purple-500/[0.07] px-4 py-2 text-sm font-medium text-purple-700 dark:text-purple-300"
          >
            <ShieldCheck size={16} />
            Your privacy matters to us
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl font-bold tracking-tight sm:text-5xl md:text-7xl"
          >
            Privacy{" "}
            <span className="bg-gradient-to-r from-violet-600 via-purple-500 to-fuchsia-500 bg-clip-text text-transparent">
              Policy
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mx-auto mt-6 max-w-2xl text-base leading-8 text-slate-600 dark:text-slate-400 sm:text-lg"
          >
            At Gyanex, we respect your privacy and are committed to handling
            your personal information responsibly. This policy explains what
            information we may collect, how we use it, and the choices
            available to you.
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.35 }}
            className="mt-8 flex flex-wrap items-center justify-center gap-3 text-sm text-slate-500 dark:text-slate-400"
          >
            <span className="rounded-full border border-slate-200 bg-white/70 px-4 py-2 dark:border-white/10 dark:bg-white/[0.03]">
              Effective date: {lastUpdated}
            </span>
            <span className="rounded-full border border-slate-200 bg-white/70 px-4 py-2 dark:border-white/10 dark:bg-white/[0.03]">
              Gyanex · gyanex.in
            </span>
          </motion.div>
        </div>
      </section>

      {/* Policy content */}
      <section className="relative px-5 pb-20 sm:px-8 sm:pb-28">
        <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-[280px_minmax(0,1fr)] lg:gap-12">
          {/* Sidebar */}
          <aside className="h-fit lg:sticky lg:top-28">
            <div className="rounded-2xl border border-slate-200 bg-white/80 p-5 shadow-sm dark:border-white/[0.08] dark:bg-white/[0.025]">
              <p className="mb-4 text-xs font-bold uppercase tracking-[0.2em] text-slate-500 dark:text-slate-400">
                On this page
              </p>

              <nav className="space-y-1">
                {policySections.map((section) => (
                  <a
                    key={section.id}
                    href={`#policy-${section.id}`}
                    className="group flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm text-slate-600 transition hover:bg-purple-500/[0.07] hover:text-purple-700 dark:text-slate-400 dark:hover:text-purple-300"
                  >
                    <span className="font-mono text-xs text-purple-600/70 dark:text-purple-400/70">
                      {section.id}
                    </span>
                    <span>{section.title}</span>
                  </a>
                ))}

                <a
                  href="#contact-privacy"
                  className="group flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm text-slate-600 transition hover:bg-purple-500/[0.07] hover:text-purple-700 dark:text-slate-400 dark:hover:text-purple-300"
                >
                  <span className="font-mono text-xs text-purple-600/70 dark:text-purple-400/70">
                    10
                  </span>
                  Contact Us
                </a>
              </nav>
            </div>

            <div className="mt-5 rounded-2xl border border-purple-500/15 bg-gradient-to-br from-purple-500/[0.08] to-fuchsia-500/[0.04] p-5">
              <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-purple-500/10 text-purple-600 dark:text-purple-300">
                <LockKeyhole size={20} />
              </div>
              <h3 className="font-semibold">Have a privacy question?</h3>
              <p className="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-400">
                Contact our team if you have questions about your information
                or this policy.
              </p>
              <a
                href="mailto:gyanaranjank020@gmail.com"
                className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-purple-700 transition hover:text-fuchsia-600 dark:text-purple-300 dark:hover:text-fuchsia-300"
              >
                Contact Gyanex <Mail size={15} />
              </a>
            </div>
          </aside>

          {/* Main content */}
          <div className="min-w-0">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.5 }}
              className="mb-6 rounded-2xl border border-slate-200 bg-white/80 p-6 sm:p-8 dark:border-white/[0.08] dark:bg-white/[0.025]"
            >
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-purple-600 dark:text-purple-400">
                Introduction
              </p>
              <h2 className="mt-3 text-xl font-bold sm:text-2xl">
                How this policy applies
              </h2>
              <p className="mt-4 text-sm leading-7 text-slate-600 dark:text-slate-400 sm:text-base">
                This Privacy Policy applies to information collected through
                the Gyanex website and through communications relating to our
                services. By using our website, you acknowledge that you have
                read this policy. Where consent is legally required, we will
                seek it as appropriate.
              </p>
            </motion.div>

            <div className="space-y-4">
              {policySections.map((section, index) => {
                const Icon = section.icon;

                return (
                  <motion.article
                    key={section.id}
                    id={`policy-${section.id}`}
                    initial={{ opacity: 0, y: 18 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.12 }}
                    transition={{
                      duration: 0.45,
                      delay: Math.min(index * 0.04, 0.2),
                    }}
                    className="scroll-mt-28 rounded-2xl border border-slate-200 bg-white/80 p-6 transition-colors duration-300 hover:border-purple-500/30 sm:p-8 dark:border-white/[0.08] dark:bg-white/[0.025] dark:hover:border-purple-500/30"
                  >
                    <div className="flex items-start gap-4 sm:gap-5">
                      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-purple-500/15 bg-purple-500/[0.08] text-purple-700 dark:text-purple-300">
                        <Icon size={21} strokeWidth={1.8} />
                      </div>

                      <div className="min-w-0 flex-1">
                        <div className="mb-2 flex flex-wrap items-center gap-3">
                          <span className="font-mono text-xs text-purple-600/70 dark:text-purple-400/70">
                            {section.id}
                          </span>
                          <h2 className="text-lg font-bold sm:text-xl">
                            {section.title}
                          </h2>
                        </div>

                        <p className="text-sm leading-7 text-slate-600 dark:text-slate-400 sm:text-base">
                          {section.content}
                        </p>
                      </div>
                    </div>
                  </motion.article>
                );
              })}
            </div>

            {/* Contact */}
            <motion.section
              id="contact-privacy"
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.5 }}
              className="mt-6 scroll-mt-28 overflow-hidden rounded-2xl border border-purple-500/20 bg-gradient-to-br from-violet-500/[0.09] via-purple-500/[0.05] to-fuchsia-500/[0.08] p-6 sm:p-9"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-purple-500/10 text-purple-700 dark:text-purple-300">
                <Mail size={23} />
              </div>

              <h2 className="mt-5 text-2xl font-bold sm:text-3xl">
                Contact Us
              </h2>

              <p className="mt-3 max-w-xl text-sm leading-7 text-slate-600 dark:text-slate-400 sm:text-base">
                If you have questions about this Privacy Policy, would like to
                request access to your personal information, or need to raise a
                privacy concern, please contact us.
              </p>

              <a
                href="mailto:gyanaranjank020@gmail.com?subject=Privacy%20Policy%20Inquiry"
                className="mt-6 inline-flex max-w-full items-center gap-3 break-all rounded-xl border border-purple-500/20 bg-white/70 px-4 py-3 text-sm font-semibold text-purple-700 transition hover:border-purple-500/40 hover:bg-white dark:bg-black/20 dark:text-purple-300 dark:hover:bg-black/30"
              >
                <Mail size={17} className="shrink-0" />
                gyanaranjank020@gmail.com
              </a>
            </motion.section>

            <p className="mt-8 text-center text-xs leading-6 text-slate-500 dark:text-slate-500">
              This page provides general privacy policy wording. Review it
              against your actual data collection, analytics, cookies, and
              third-party services before publishing.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}

export default PrivacyPolicy;