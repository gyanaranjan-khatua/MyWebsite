import React from "react";
import {
  ArrowUpRight,
  Mail,
  
 
  Send,
  MapPinCheck,
  MailBadge,
  PhoneCall,
} from "lucide-react";
import { motion } from "framer-motion";
import { FaFacebook } from "react-icons/fa";
import { BsInstagram } from "react-icons/bs";

function Contact() {
  const handleWhatsAppSubmit = (event) => {
    event.preventDefault();

    const form = event.currentTarget;
    const formData = new FormData(form);
    const projectType =
      form.elements.subject.selectedOptions[0]?.textContent ?? "";
    const message = encodeURIComponent(
      [
        "Hello Gyanex Technology",
        "",
        `Name: ${formData.get("name") || ""}`,
        `Email: ${formData.get("email") || ""}`,
        `Phone: ${formData.get("phone") || ""}`,
        `Project Type: ${projectType}`,
        `Project Details: ${formData.get("message") || ""}`,
      ].join("\n"),
    );
    const phoneNumber = "919040738633";
    const isMobile = /Android|iPhone|iPad|iPod/i.test(navigator.userAgent);
    const whatsappUrl = isMobile
      ? `whatsapp://send?phone=${phoneNumber}&text=${message}`
      : `https://web.whatsapp.com/send?phone=${phoneNumber}&text=${message}`;

    window.open(whatsappUrl, "_blank");
  };

  const contactDetails = [
    {
      icon: PhoneCall,
      title: "Call Us",
      value: "+91 90407 38633",
      href: "tel:+919040738633",
    },
    {
      icon: MailBadge,
      title: "Email Us",
      value: "gyanaranjank020@gmail.com",
      href: "mailto:gyanaranjank020@gmail.com",
    },
    {
      icon: MapPinCheck,
      title: "Visit Us",
      value: "Bhubaneswar, Odisha, India",
      href: "#",
    },
  ];

  const socialLinks = [
    {
      icon: BsInstagram,
      name: "Instagram",
      href: "https://www.instagram.com/gyanex_solutions/?hl=en",
    },
    {
      icon: FaFacebook,
      name: "Facebook",
      href: "#",
    },
    {
      icon: Mail,
      name: "Email",
      href: "mailto:gyanaranjank020@gmail.com",
    },
  ];

  return (
    <section
      id="contact"
      className="
        relative overflow-hidden
        bg-[#fafafa] text-slate-950
        dark:bg-[#050509] dark:text-white
      "
    >
      {/* Background Grid */}
      <div
        className="
          absolute inset-0 opacity-[0.45]
          bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)]
          bg-[size:70px_70px]
          dark:opacity-[0.18]
          dark:bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)]
        "
      />

      {/* Background Glow */}
      <div
        className="
          absolute left-1/2 top-1/2
          h-[500px] w-[700px]
          -translate-x-1/2 -translate-y-1/2
          rounded-full
          bg-purple-500/[0.08]
          blur-[120px]
          dark:bg-purple-600/[0.12]
        "
      />

      <div className="relative mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:px-10 lg:py-28">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7 }}
          className="mb-12 max-w-3xl"
        >
          <div
            className="
              mb-5 inline-flex items-center gap-2
              rounded-full border
              border-purple-500/20
              bg-purple-500/[0.06]
              px-4 py-2
              text-xs font-semibold uppercase tracking-[0.2em]
              text-purple-600
              dark:border-purple-400/20
              dark:bg-purple-400/[0.08]
              dark:text-purple-300
            "
          >
            <span className="h-1.5 w-1.5 rounded-full bg-purple-500" />
            Contact Us
          </div>

          <h2 className="text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl">
            Let&apos;s build something{" "}
            <span
              className="
                bg-gradient-to-r
                from-purple-600 via-violet-500 to-fuchsia-500
                bg-clip-text text-transparent
                dark:from-purple-300 dark:via-violet-300 dark:to-fuchsia-400
              "
            >
              remarkable.
            </span>
          </h2>

          <p
            className="
              mt-5 max-w-2xl text-base leading-7
              text-slate-600
              dark:text-slate-400
            "
          >
            Have a project in mind, a business idea, or simply want to discuss
            how technology can help you grow? Tell us about it. We&apos;d love
            to hear from you.
          </p>
        </motion.div>

        {/* Main Contact Card */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.8 }}
          className="
            grid overflow-hidden
            rounded-[32px]
            border
            border-slate-200
            bg-white/70
            shadow-[0_30px_100px_rgba(15,23,42,0.08)]
            backdrop-blur-2xl

            dark:border-white/[0.10]
            dark:bg-white/[0.025]
            dark:shadow-none

            lg:grid-cols-[1.15fr_0.85fr]
          "
        >
          {/* ================= FORM ================= */}
          <div
            className="
              relative
              border-b border-slate-200
              p-7 sm:p-10 lg:border-b-0 lg:border-r lg:p-12
              dark:border-white/[0.10]
            "
          >
            {/* Purple Glow */}
            <div
              className="
                pointer-events-none absolute
                -left-24 -top-24
                h-64 w-64
                rounded-full
                bg-purple-500/[0.08]
                blur-[80px]
                dark:bg-purple-500/[0.12]
              "
            />

            <div className="relative">
              <div className="mb-8">
                <p className="text-sm font-medium text-purple-600 dark:text-purple-300">
                  Start a conversation
                </p>

                <h3 className="mt-2 text-2xl font-semibold tracking-tight sm:text-3xl">
                  Tell us about your project.
                </h3>

                <p className="mt-3 max-w-xl text-sm leading-6 text-slate-500 dark:text-slate-400">
                  Fill out the form and share a few details about what you&apos;re
                  looking to build.
                </p>
              </div>

              <form className="space-y-5" onSubmit={handleWhatsAppSubmit}>
                {/* Name + Email */}
                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label
                      htmlFor="name"
                      className="mb-2 block text-sm font-medium"
                    >
                      Your Name
                    </label>

                    <input
                      id="name"
                      name="name"
                      type="text"
                      placeholder="John Doe"
                      className="
                        w-full rounded-2xl
                        border border-slate-200
                        bg-slate-50/80
                        px-4 py-3.5
                        text-sm outline-none
                        transition-all
                        placeholder:text-slate-400
                        focus:border-purple-500
                        focus:ring-4 focus:ring-purple-500/10

                        dark:border-white/[0.10]
                        dark:bg-white/[0.035]
                        dark:placeholder:text-slate-600
                        dark:focus:border-purple-400
                      "
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="mb-2 block text-sm font-medium"
                    >
                      Email Address
                    </label>

                    <input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="john@example.com"
                      className="
                        w-full rounded-2xl
                        border border-slate-200
                        bg-slate-50/80
                        px-4 py-3.5
                        text-sm outline-none
                        transition-all
                        placeholder:text-slate-400
                        focus:border-purple-500
                        focus:ring-4 focus:ring-purple-500/10

                        dark:border-white/[0.10]
                        dark:bg-white/[0.035]
                        dark:placeholder:text-slate-600
                        dark:focus:border-purple-400
                      "
                    />
                  </div>
                </div>

                {/* Phone */}
                <div>
                  <label
                    htmlFor="phone"
                    className="mb-2 block text-sm font-medium"
                  >
                    Phone Number
                  </label>

                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    placeholder="+91 98765 43210"
                    className="
                      w-full rounded-2xl
                      border border-slate-200
                      bg-slate-50/80
                      px-4 py-3.5
                      text-sm outline-none
                      transition-all
                      placeholder:text-slate-400
                      focus:border-purple-500
                      focus:ring-4 focus:ring-purple-500/10

                      dark:border-white/[0.10]
                      dark:bg-white/[0.035]
                      dark:placeholder:text-slate-600
                      dark:focus:border-purple-400
                    "
                  />
                </div>

                {/* Subject */}
                <div>
                  <label
                    htmlFor="subject"
                    className="mb-2 block text-sm font-medium"
                  >
                    Project Type
                  </label>

                  <select
                    id="subject"
                    name="subject"
                    defaultValue=""
                    className="
                      w-full rounded-2xl
                      border border-slate-200
                      bg-slate-50/80
                      px-4 py-3.5
                      text-sm outline-none
                      transition-all
                      focus:border-purple-500
                      focus:ring-4 focus:ring-purple-500/10

                      dark:border-white/[0.10]
                      dark:bg-[#101016]
                      dark:focus:border-purple-400
                    "
                  >
                    <option value="" disabled>
                      Select a service
                    </option>
                    <option value="website">Website Development</option>
                    <option value="webapp">Web Application</option>
                    <option value="mobile">Mobile Application</option>
                    <option value="uiux">UI/UX Design</option>
                    <option value="marketing">Digital Marketing</option>
                    <option value="other">Something Else</option>
                  </select>
                </div>

                {/* Message */}
                <div>
                  <label
                    htmlFor="message"
                    className="mb-2 block text-sm font-medium"
                  >
                    Tell Us About Your Project
                  </label>

                  <textarea
                    id="message"
                    name="message"
                    rows="5"
                    placeholder="Tell us about your idea, requirements, timeline..."
                    className="
                      w-full resize-none rounded-2xl
                      border border-slate-200
                      bg-slate-50/80
                      px-4 py-3.5
                      text-sm outline-none
                      transition-all
                      placeholder:text-slate-400
                      focus:border-purple-500
                      focus:ring-4 focus:ring-purple-500/10

                      dark:border-white/[0.10]
                      dark:bg-white/[0.035]
                      dark:placeholder:text-slate-600
                      dark:focus:border-purple-400
                    "
                  />
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  className="
                    group inline-flex w-full
                    items-center justify-center gap-2
                    rounded-2xl
                    bg-slate-950
                    px-6 py-4
                    text-sm font-semibold text-white
                    shadow-xl shadow-slate-950/10
                    transition-all duration-300
                    hover:-translate-y-0.5
                    hover:bg-purple-600
                    hover:shadow-purple-500/25

                    dark:bg-white
                    dark:text-slate-950
                    dark:hover:bg-purple-400
                  "
                >
                  Send Message

                  <Send
                    size={17}
                    className="
                      transition-transform duration-300
                      group-hover:translate-x-1
                      group-hover:-translate-y-1
                    "
                  />
                </button>
              </form>
            </div>
          </div>

          {/* ================= CONTACT DETAILS ================= */}
          <div
            className="
              relative
              overflow-hidden
              bg-slate-50/70
              p-7 sm:p-10 lg:p-12
              dark:bg-white/[0.015]
            "
          >
            {/* Decorative Purple Circle */}
            <div
              className="
                pointer-events-none absolute
                -right-28 -top-28
                h-72 w-72
                rounded-full
                border border-purple-500/10
                bg-purple-500/[0.04]
                blur-sm
                dark:border-purple-400/10
                dark:bg-purple-500/[0.06]
              "
            />

            <div
              className="
                pointer-events-none absolute
                bottom-[-100px] left-[-100px]
                h-64 w-64
                rounded-full
                bg-purple-500/[0.07]
                blur-[80px]
              "
            />

            <div className="relative">
              <p className="text-sm font-medium text-purple-600 dark:text-purple-300">
                Get in touch
              </p>

              <h3 className="mt-2 text-2xl font-semibold tracking-tight sm:text-3xl">
                We&apos;re here to help.
              </h3>

              <p className="mt-3 text-sm leading-6 text-slate-500 dark:text-slate-400">
                Whether you&apos;re starting from scratch or improving an existing
                product, let&apos;s discuss how we can make it better.
              </p>

              {/* Contact Details */}
              <div className="mt-9 space-y-4">
                {contactDetails.map((item, index) => {
                  const Icon = item.icon;

                  return (
                    <motion.a
                      key={item.title}
                      href={item.href}
                      initial={{ opacity: 0, x: 15 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{
                        duration: 0.5,
                        delay: index * 0.08,
                      }}
                      className="
                        group flex items-center gap-4
                        rounded-2xl
                        border border-slate-200
                        bg-white/70
                        p-4
                        transition-all duration-300
                        hover:-translate-y-0.5
                        hover:border-purple-500/30
                        hover:shadow-lg
                        hover:shadow-purple-500/5

                        dark:border-white/[0.08]
                        dark:bg-white/[0.025]
                        dark:hover:border-purple-400/30
                      "
                    >
                      <div
                        className="
                          flex h-12 w-12 shrink-0
                          items-center justify-center
                          rounded-xl
                          bg-purple-500/10
                          text-purple-600
                          transition-all duration-300
                          group-hover:bg-purple-500
                          group-hover:text-white

                          dark:bg-purple-400/10
                          dark:text-purple-300
                          dark:group-hover:bg-purple-500
                          dark:group-hover:text-white
                        "
                      >
                        <Icon size={20} />
                      </div>

                      <div className="min-w-0">
                        <p className="text-xs font-medium uppercase tracking-wider text-slate-400 dark:text-slate-500">
                          {item.title}
                        </p>

                        <p className="mt-1 truncate text-sm font-medium">
                          {item.value}
                        </p>
                      </div>

                      <ArrowUpRight
                        size={17}
                        className="
                          ml-auto shrink-0
                          text-slate-300
                          transition-all duration-300
                          group-hover:-translate-y-0.5
                          group-hover:translate-x-0.5
                          group-hover:text-purple-500
                          dark:text-slate-700
                        "
                      />
                    </motion.a>
                  );
                })}
              </div>

              {/* Divider */}
              <div className="my-9 h-px bg-slate-200 dark:bg-white/[0.08]" />

              {/* Social */}
              <div>
                <p className="text-sm font-semibold">Follow Us</p>

                <p className="mt-1 text-xs text-slate-500 dark:text-slate-500">
                  Let&apos;s connect and stay in touch.
                </p>

                <div className="mt-5 flex flex-wrap gap-3">
                  {socialLinks.map((social) => {
                    const Icon = social.icon;

                    return (
                      <a
                        key={social.name}
                        href={social.href}
                        target={social.href.startsWith("mailto:") ? undefined : "_blank"}
                        rel={
                          social.href.startsWith("mailto:")
                            ? undefined
                            : "noopener noreferrer"
                        }
                        aria-label={social.name}
                        className="
                          group flex items-center gap-2
                          rounded-xl
                          border border-slate-200
                          bg-white/70
                          px-4 py-2.5
                          text-sm font-medium
                          text-slate-600
                          transition-all duration-300
                          hover:-translate-y-0.5
                          hover:border-purple-500/30
                          hover:bg-purple-500
                          hover:text-white
                          hover:shadow-lg
                          hover:shadow-purple-500/20

                          dark:border-white/[0.08]
                          dark:bg-white/[0.025]
                          dark:text-slate-400
                          dark:hover:border-purple-400
                          dark:hover:bg-purple-500
                          dark:hover:text-white
                        "
                      >
                        <Icon
                          size={16}
                          className="transition-transform duration-300 group-hover:scale-110"
                        />

                        {social.name}
                      </a>
                    );
                  })}
                </div>
              </div>

              {/* Small CTA */}
              <div
                className="
                  mt-10 rounded-2xl
                  border border-purple-500/15
                  bg-gradient-to-br
                  from-purple-500/[0.08]
                  to-fuchsia-500/[0.04]
                  p-5
                  dark:border-purple-400/15
                  dark:from-purple-500/[0.10]
                  dark:to-fuchsia-500/[0.04]
                "
              >
                <p className="text-sm font-semibold">
                  Have a quick question?
                </p>

                <p className="mt-1 text-xs leading-5 text-slate-500 dark:text-slate-400">
                  Drop us an email and we&apos;ll get back to you as soon as
                  possible.
                </p>

                <a
                  href="mailto:gyanaranjank020@gmail.com"
                  className="
                    mt-4 inline-flex items-center gap-2
                    text-xs font-semibold
                    text-purple-600
                    hover:text-purple-700
                    dark:text-purple-300
                    dark:hover:text-purple-200
                  "
                >
                  Email us
                  <ArrowUpRight size={14} />
                </a>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Bottom Text */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-10 flex flex-col justify-between gap-4 sm:flex-row sm:items-center"
        >
          <p className="max-w-xl text-sm leading-6 text-slate-500 dark:text-slate-500">
            Great digital products start with great conversations.
          </p>

          <div className="flex items-center gap-2 text-xs font-medium uppercase tracking-[0.18em] text-slate-400 dark:text-slate-600">
            Gyanex
            <span className="h-px w-8 bg-purple-500/50" />
            Let&apos;s Create
          </div>
        </motion.div>
      </div>

      {/* Bottom Fade */}
      <div
        className="
          pointer-events-none absolute bottom-0 left-0 right-0 h-32
          bg-gradient-to-t
          from-[#fafafa]
          to-transparent
          dark:from-[#050509]
        "
      />
    </section>
  );
}

export default Contact;