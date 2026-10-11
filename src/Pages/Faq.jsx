
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus, MessageCircle, ArrowUpRight } from "lucide-react";

const faqs = [
  {
    question: "What services does Gyanex Technology provide?",
    answer:
      "We provide website development, mobile app development, UI/UX design, full-stack application development, and digital marketing services tailored to your business needs.",
  },
  {
    question: "How much does it cost to develop a website?",
    answer:
      "The cost depends on your requirements, features, design complexity, and project scope. Contact us with your ideas, and we'll discuss a suitable solution and estimate.",
  },
  {
    question: "How long does it take to complete a project?",
    answer:
      "The timeline depends on the project's size and complexity. A simple website may take less time than a custom web application or mobile app. We'll share an estimated timeline after understanding your requirements.",
  },
  {
    question: "Can you build a website for my specific business?",
    answer:
      "Yes! We create tailored digital solutions for different business types, focusing on your goals, audience, brand identity, and required functionality.",
  },
  {
    question: "Do you develop mobile applications for Android and iOS?",
    answer:
      "Yes. We can help you plan and build mobile applications based on your business requirements, target platforms, and preferred features.",
  },
  {
    question: "Will my website work on mobile phones and tablets?",
    answer:
      "Absolutely. We focus on responsive design so your website adapts to different screen sizes, including desktops, tablets, and smartphones.",
  },
  {
    question: "Can you redesign or improve my existing website?",
    answer:
      "Yes. We can help modernize your existing website with an improved user experience, refreshed design, better responsiveness, and functionality aligned with your goals.",
  },
  {
    question: "How can I get started with Gyanex Technology?",
    answer:
      "Getting started is simple. Send us an enquiry with your name, contact number, and project requirements. We'll connect with you on WhatsApp to discuss the next steps.",
  },
];

function Faq() {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleWhatsAppClick = () => {
    const phoneNumber = "919040738633";
    const message = encodeURIComponent(
      "Hello Gyanex Technology! I have a question about your services."
    );
    const isMobile = /Android|iPhone|iPad|iPod/i.test(
      navigator.userAgent
    );

    const whatsappUrl = isMobile
      ? `whatsapp://send?phone=${phoneNumber}&text=${message}`
      : `https://web.whatsapp.com/send?phone=${phoneNumber}&text=${message}`;

    window.open(whatsappUrl, "_blank", "noopener,noreferrer");
  };

  return (
    <section
      id="faq"
      className="relative overflow-hidden bg-white px-4 py-20 text-slate-900 transition-colors duration-300 dark:bg-[#050509] dark:text-white sm:px-6 sm:py-24 lg:px-8"
    >
      {/* Background decoration */}
      <div className="pointer-events-none absolute left-[-150px] top-20 h-80 w-80 rounded-full bg-violet-500/10 blur-[100px]" />
      <div className="pointer-events-none absolute bottom-0 right-[-100px] h-80 w-80 rounded-full bg-fuchsia-500/10 blur-[100px]" />

      <div className="relative mx-auto max-w-7xl">
        {/* Section heading */}
        <div className="mx-auto mb-14 max-w-3xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-violet-500/20 bg-violet-500/5 px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] text-violet-600 dark:text-violet-300">
            <MessageCircle size={15} />
            Frequently Asked Questions
          </span>

          <h2 className="mt-6 text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
            Got Questions?
            <span className="mt-2 block bg-gradient-to-r from-violet-600 via-purple-500 to-fuchsia-500 bg-clip-text text-transparent">
              We've Got Answers.
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-slate-600 dark:text-slate-400 sm:text-base">
            Everything you need to know about our services, process, and how
            we can help bring your ideas to life.
          </p>
        </div>

        {/* FAQ layout */}
        <div className="grid items-start gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
          {/* Left information panel */}
          <div className="lg:sticky lg:top-24">
            <div className="relative overflow-hidden rounded-3xl border border-violet-500/20 bg-gradient-to-br from-violet-600/10 via-purple-500/5 to-fuchsia-500/10 p-7 sm:p-9">
              <div className="absolute -right-10 -top-10 h-36 w-36 rounded-full border border-violet-500/15" />
              <div className="absolute -right-2 -top-2 h-20 w-20 rounded-full border border-violet-500/15" />

              <div className="relative flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-violet-600 to-fuchsia-600 text-white shadow-lg shadow-violet-600/20">
                <MessageCircle size={27} />
              </div>

              <h3 className="relative mt-7 text-2xl font-bold sm:text-3xl">
                Still have questions?
              </h3>

              <p className="relative mt-4 text-sm leading-7 text-slate-600 dark:text-slate-400">
                Every project is different. Tell us what you're planning, and
                let's find the right digital solution for your business.
              </p>

              <button
                type="button"
                onClick={handleWhatsAppClick}
                className="relative mt-7 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-violet-600 to-fuchsia-600 px-5 py-4 text-sm font-bold text-white shadow-lg shadow-violet-600/20 transition hover:-translate-y-0.5 hover:shadow-xl"
              >
                Ask Us on WhatsApp
                <ArrowUpRight size={18} />
              </button>

              <div className="relative mt-6 flex items-center gap-3 border-t border-violet-500/15 pt-5">
                <div className="h-2.5 w-2.5 rounded-full bg-emerald-500 ring-4 ring-emerald-500/10" />
                <p className="text-xs text-slate-600 dark:text-slate-400">
                  Let's discuss your next project
                </p>
              </div>
            </div>
          </div>

          {/* Accordion */}
          <div className="space-y-3">
            {faqs.map((faq, index) => {
              const isActive = activeIndex === index;

              return (
                <motion.div
                  key={faq.question}
                  initial={false}
                  className={`overflow-hidden rounded-2xl border transition-colors duration-300 ${
                    isActive
                      ? "border-violet-500/40 bg-violet-500/[0.045]"
                      : "border-slate-200 bg-white dark:border-white/10 dark:bg-white/[0.02]"
                  }`}
                >
                  <button
                    type="button"
                    onClick={() =>
                      setActiveIndex(isActive ? -1 : index)
                    }
                    aria-expanded={isActive}
                    className="flex w-full items-center justify-between gap-4 px-5 py-5 text-left sm:px-6"
                  >
                    <span
                      className={`text-sm font-semibold leading-6 sm:text-base ${
                        isActive
                          ? "text-violet-700 dark:text-violet-300"
                          : "text-slate-800 dark:text-slate-200"
                      }`}
                    >
                      <span className="mr-3 font-mono text-xs text-violet-500/80">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      {faq.question}
                    </span>

                    <span
                      className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full transition-colors ${
                        isActive
                          ? "bg-violet-600 text-white"
                          : "bg-slate-100 text-slate-600 dark:bg-white/10 dark:text-slate-300"
                      }`}
                    >
                      {isActive ? <Minus size={16} /> : <Plus size={16} />}
                    </span>
                  </button>

                  <AnimatePresence initial={false}>
                    {isActive && (
                      <motion.div
                        key="answer"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{
                          height: { duration: 0.3, ease: "easeInOut" },
                          opacity: { duration: 0.2 },
                        }}
                        className="overflow-hidden"
                      >
                        <p className="px-5 pb-6 pl-12 text-sm leading-7 text-slate-600 dark:text-slate-400 sm:px-6 sm:pl-[3.75rem]">
                          {faq.answer}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Faq;
