
import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  CheckCircle2,
  ArrowRight,
  Home,
  MessageCircle,
  Sparkles,
  Code2,
  Rocket,
} from "lucide-react";

function ThankYou() {
  const steps = [
    "Your enquiry has been received successfully.",
    "Our team will review your requirements.",
    "We will contact you shortly to discuss your project.",
  ];

  return (
    <div className="relative min-h-screen bg-[#050505] flex items-center justify-center px-4 py-16 overflow-hidden">

      {/* Background Effects */}
      <div className="absolute top-0 left-0 w-80 h-80 bg-purple-700/20 blur-[140px] rounded-full" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-600/20 blur-[150px] rounded-full" />

      <motion.div
        initial={{ opacity: 0, y: 35 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="relative w-full max-w-2xl"
      >
        <div className="absolute -inset-[1px] rounded-[30px] bg-gradient-to-br from-purple-500/60 via-purple-900/20 to-purple-500/40 blur-sm" />

        <div className="relative bg-[#0c0c0f] border border-purple-500/20 rounded-[28px] p-7 sm:p-12 text-center shadow-2xl shadow-purple-950/30">

          {/* Brand */}
          <div className="flex items-center justify-center gap-2 mb-10">
            <div className="w-10 h-10 rounded-xl bg-purple-600 flex items-center justify-center shadow-lg shadow-purple-500/30">
              <Code2 size={23} className="text-white" />
            </div>
            <span className="text-xl font-bold text-white tracking-tight">
              Gyanex <span className="text-purple-500">Solutions</span>
            </span>
          </div>

          {/* Success Icon */}
          <motion.div
            initial={{ scale: 0, rotate: -30 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ delay: 0.25, type: "spring" }}
            className="relative w-24 h-24 mx-auto mb-8 flex items-center justify-center"
          >
            <div className="absolute inset-0 rounded-full bg-purple-500/15 blur-xl" />
            <div className="relative w-20 h-20 rounded-full border border-purple-500/40 bg-purple-500/10 flex items-center justify-center">
              <CheckCircle2
                size={48}
                className="text-purple-400"
                strokeWidth={1.5}
              />
            </div>
          </motion.div>

          {/* Heading */}
          <div className="flex items-center justify-center gap-2 text-purple-400 text-xs sm:text-sm font-semibold tracking-[2px] mb-5">
            <Sparkles size={15} />
            ENQUIRY SUCCESSFUL
            <Sparkles size={15} />
          </div>

          <h1 className="text-3xl sm:text-5xl font-bold text-white leading-tight mb-5">
            Thank You for
            <br />
            Choosing{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-purple-600">
              Gyanex!
            </span>
          </h1>

          <p className="text-gray-400 text-sm sm:text-base leading-relaxed max-w-lg mx-auto">
            Your enquiry has been submitted successfully.
            We're excited to hear about your ideas and help
            turn them into powerful digital experiences.
          </p>

          {/* What's Next */}
          <div className="mt-10 bg-white/[0.03] border border-white/10 rounded-2xl p-5 sm:p-6 text-left">
            <div className="flex items-center gap-2 mb-5">
              <Rocket size={19} className="text-purple-400" />
              <h3 className="text-white font-semibold">
                What Happens Next?
              </h3>
            </div>

            <div className="space-y-4">
              {steps.map((item, index) => (
                <motion.div
                  initial={{ opacity: 0, x: -15 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4 + index * 0.15 }}
                  key={index}
                  className="flex gap-3 items-start"
                >
                  <CheckCircle2
                    size={19}
                    className="text-purple-400 shrink-0 mt-0.5"
                  />
                  <p className="text-sm text-gray-400">{item}</p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 mt-9">
            <Link
              to="/"
              className="flex-1 flex items-center justify-center gap-2 bg-purple-600 hover:bg-purple-500 text-white font-semibold py-4 rounded-xl transition-all duration-300 shadow-lg shadow-purple-900/30"
            >
              <Home size={18} />
              Back to Home
              <ArrowRight size={17} />
            </Link>

            <a
              href="https://wa.me/919040738633"
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 flex items-center justify-center gap-2 border border-purple-500/30 hover:border-purple-400 hover:bg-purple-500/10 text-white font-semibold py-4 rounded-xl transition-all duration-300"
            >
              <MessageCircle size={18} className="text-purple-400" />
              Chat With Us
            </a>
          </div>

          {/* Footer */}
          <div className="mt-10 pt-6 border-t border-white/10">
            <p className="text-xs text-gray-500">
              BUILD <span className="text-purple-500">•</span> INNOVATE{" "}
              <span className="text-purple-500">•</span> GROW
            </p>
            <p className="text-xs text-gray-600 mt-3">
              © {new Date().getFullYear()} Gyanex Solutions. All rights reserved.
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default ThankYou;
