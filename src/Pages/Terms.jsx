import React from "react";
import { motion } from "framer-motion";
import {
  FileText,
  Scale,
  ShieldCheck,
  BriefcaseBusiness,
  CreditCard,
  Copyright,
  AlertTriangle,
  Ban,
  RefreshCw,
  Mail,
  Globe,
  Handshake,
} from "lucide-react";

const termsSections = [
  {
    id: "01",
    icon: Handshake,
    title: "Acceptance of Terms",
    content:
      "By accessing or using the Gyanex website or engaging our services, you agree to these Terms and Conditions. If you do not agree with these terms, please do not use our website or services. Additional terms may apply to specific projects or services where agreed in writing.",
  },
  {
    id: "02",
    icon: BriefcaseBusiness,
    title: "Our Services",
    content:
      "Gyanex provides digital services that may include website development, mobile application development, UI/UX design, full-stack application development, and digital marketing. The scope, deliverables, timelines, and requirements of a specific project will be discussed and agreed upon with the client before work begins.",
  },
  {
    id: "03",
    icon: FileText,
    title: "Project Requirements and Client Responsibilities",
    content:
      "Clients are responsible for providing accurate project information, required content, brand assets, feedback, and approvals in a timely manner. Delays in providing necessary materials or approvals may affect delivery timelines. Clients must ensure that materials supplied to us may legally be used for the intended project.",
  },
  {
    id: "04",
    icon: CreditCard,
    title: "Pricing and Payments",
    content:
      "Project pricing, payment schedules, deposits, and any applicable additional charges will be communicated and agreed upon before work begins. Unless otherwise agreed in writing, invoices must be paid according to the agreed payment terms. Additional work outside the original scope may require a revised quotation or separate agreement.",
  },
  {
    id: "05",
    icon: RefreshCw,
    title: "Revisions, Changes, and Cancellations",
    content:
      "The number of revisions and the process for requesting changes will be determined by the relevant project agreement or quotation. Requests that substantially change the approved scope may involve additional costs or revised deadlines. Any cancellation, refund, or termination arrangements will be governed by the applicable written agreement and relevant law.",
  },
  {
    id: "06",
    icon: Copyright,
    title: "Intellectual Property",
    content:
      "Each party retains ownership of its pre-existing intellectual property. Ownership and licensing of custom deliverables, source code, designs, and other project materials will be determined by the applicable written agreement and payment terms. Third-party software, libraries, fonts, images, and other licensed assets remain subject to their respective licenses.",
  },
  {
    id: "07",
    icon: ShieldCheck,
    title: "Website Use and Security",
    content:
      "You agree to use our website lawfully and responsibly. You must not attempt to gain unauthorized access to our systems, interfere with website operations, introduce malicious code, misuse contact forms, or engage in activities that may compromise the security or availability of our website.",
  },
  {
    id: "08",
    icon: Ban,
    title: "Prohibited Activities",
    content:
      "You may not use our website or services to violate applicable laws, infringe another person's rights, distribute unlawful or harmful material, commit fraud, or facilitate unauthorized access to computer systems. We reserve the right to take appropriate action where misuse is reasonably suspected, subject to applicable law and any relevant agreement.",
  },
  {
    id: "09",
    icon: AlertTriangle,
    title: "Warranties and Limitations",
    content:
      "We aim to provide professional services with reasonable care and skill. However, we do not guarantee uninterrupted website availability, specific business outcomes, search engine rankings, marketing performance, or compatibility with every third-party platform. To the extent permitted by applicable law, Gyanex will not be liable for indirect or consequential losses arising from website use or services. Nothing in these terms excludes liability that cannot legally be excluded.",
  },
  {
    id: "10",
    icon: Globe,
    title: "Third-Party Services and Links",
    content:
      "Our website or projects may integrate with third-party platforms, hosting providers, payment processors, APIs, or external websites. These services may have their own terms, privacy policies, availability limits, and fees. We are not responsible for third-party services except to the extent responsibility cannot be excluded under applicable law or is expressly accepted in a written agreement.",
  },
  {
    id: "11",
    icon: Scale,
    title: "Governing Law and Disputes",
    content:
      "These Terms and Conditions are subject to applicable laws. Any dispute relating to these terms or our services should first be discussed in good faith in an effort to reach a mutually acceptable resolution. The applicable jurisdiction and dispute-resolution arrangements may be specified in the relevant client agreement, subject to applicable law.",
  },
  {
    id: "12",
    icon: RefreshCw,
    title: "Changes to These Terms",
    content:
      "We may update these Terms and Conditions from time to time. Updated terms will be published on this page with a revised effective date. Changes will apply as permitted by applicable law. Where a separate written agreement governs a project, that agreement will continue to apply according to its terms.",
  },
];

function Terms() {
  const lastUpdated = "October 11, 2026";

  return (
    <main className="relative min-h-screen overflow-hidden bg-[#fafafa] text-slate-900 transition-colors duration-300 dark:bg-[#050509] dark:text-white">
      {/* Background grid */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.035] dark:opacity-[0.06]"
        style={{
          backgroundImage:
            "linear-gradient(to right, #8b5cf6 1px, transparent 1px), linear-gradient(to bottom, #8b5cf6 1px, transparent 1px)",
          backgroundSize: "64px 64px",
          maskImage: "linear-gradient(to bottom, black, transparent 85%)",
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
            <Scale size={16} />
            Clear terms. Better partnerships.
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl font-bold tracking-tight sm:text-5xl md:text-7xl"
          >
            Terms &{" "}
            <span className="bg-gradient-to-r from-violet-600 via-purple-500 to-fuchsia-500 bg-clip-text text-transparent">
              Conditions
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mx-auto mt-6 max-w-2xl text-base leading-8 text-slate-600 dark:text-slate-400 sm:text-lg"
          >
            Please read these terms carefully before using the Gyanex website
            or engaging our digital services. They explain the basic rules,
            responsibilities, and conditions that apply to our work together.
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

      {/* Terms content */}
      <section className="relative px-5 pb-20 sm:px-8 sm:pb-28">
        <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-[280px_minmax(0,1fr)] lg:gap-12">
          {/* Sidebar */}
          <aside className="h-fit lg:sticky lg:top-28">
            <div className="rounded-2xl border border-slate-200 bg-white/80 p-5 shadow-sm dark:border-white/[0.08] dark:bg-white/[0.025]">
              <p className="mb-4 text-xs font-bold uppercase tracking-[0.2em] text-slate-500 dark:text-slate-400">
                On this page
              </p>

              <nav className="space-y-1">
                {termsSections.map((section) => (
                  <a
                    key={section.id}
                    href={`#terms-${section.id}`}
                    className="group flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm text-slate-600 transition hover:bg-purple-500/[0.07] hover:text-purple-700 dark:text-slate-400 dark:hover:text-purple-300"
                  >
                    <span className="font-mono text-xs text-purple-600/70 dark:text-purple-400/70">
                      {section.id}
                    </span>
                    <span>{section.title}</span>
                  </a>
                ))}

                <a
                  href="#terms-contact"
                  className="flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm text-slate-600 transition hover:bg-purple-500/[0.07] hover:text-purple-700 dark:text-slate-400 dark:hover:text-purple-300"
                >
                  <span className="font-mono text-xs text-purple-600/70 dark:text-purple-400/70">
                    13
                  </span>
                  Contact Us
                </a>
              </nav>
            </div>

            <div className="mt-5 rounded-2xl border border-purple-500/15 bg-gradient-to-br from-purple-500/[0.08] to-fuchsia-500/[0.04] p-5">
              <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-purple-500/10 text-purple-600 dark:text-purple-300">
                <FileText size={20} />
              </div>

              <h3 className="font-semibold">Need clarification?</h3>

              <p className="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-400">
                Contact our team if you have questions about these terms or
                our services.
              </p>

              <a
                href="mailto:hello@gyanex.in?subject=Terms%20and%20Conditions%20Inquiry"
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
                Welcome to Gyanex
              </p>

              <h2 className="mt-3 text-xl font-bold sm:text-2xl">
                Our working agreement
              </h2>

              <p className="mt-4 text-sm leading-7 text-slate-600 dark:text-slate-400 sm:text-base">
                These Terms and Conditions govern your access to our website
                and your use of our services. Project-specific proposals,
                quotations, invoices, and signed agreements may contain
                additional terms. If there is a conflict, the relevant written
                agreement will govern the project to the extent stated in that
                agreement and permitted by law.
              </p>
            </motion.div>

            <div className="space-y-4">
              {termsSections.map((section, index) => {
                const Icon = section.icon;

                return (
                  <motion.article
                    key={section.id}
                    id={`terms-${section.id}`}
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

            {/* Contact section */}
            <motion.section
              id="terms-contact"
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
                If you have questions about these Terms and Conditions,
                project arrangements, or our services, please get in touch
                with our team.
              </p>

              <a
                href="mailto:hello@gyanex.in?subject=Terms%20and%20Conditions%20Inquiry"
                className="mt-6 inline-flex max-w-full items-center gap-3 break-all rounded-xl border border-purple-500/20 bg-white/70 px-4 py-3 text-sm font-semibold text-purple-700 transition hover:border-purple-500/40 hover:bg-white dark:bg-black/20 dark:text-purple-300 dark:hover:bg-black/30"
              >
                <Mail size={17} className="shrink-0" />
                hello@gyanex.in
              </a>
            </motion.section>

            <p className="mt-8 text-center text-xs leading-6 text-slate-500 dark:text-slate-500">
              These terms are a general template and should be reviewed to
              ensure they reflect your actual services, project agreements,
              payment policies, and applicable laws.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Terms;