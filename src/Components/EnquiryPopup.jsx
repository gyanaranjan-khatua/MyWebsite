
import React, { useState } from "react";
import { X, MessageCircle, Send, User, Phone, MessageSquare } from "lucide-react";

function EnquiryPopup({ isOpen, onClose }) {
  const [formData, setFormData] = useState({
    name: "",
    contact: "",
    message: "",
  });

  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
    setError("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { name, contact, message } = formData;

    if (!name.trim() || !contact.trim() || !message.trim()) {
      setError("Please fill in all fields.");
      return;
    }

    const phoneNumber = "919040738633";

    const whatsappMessage = `
Hello Gyanex Technology!

I would like to make an enquiry.

Name: ${name.trim()}
Contact Number: ${contact.trim()}

What I Need:
${message.trim()}
    `.trim();

    const encodedMessage = encodeURIComponent(whatsappMessage);
    const isMobile = /Android|iPhone|iPad|iPod/i.test(
      navigator.userAgent
    );

    const whatsappUrl = isMobile
      ? `whatsapp://send?phone=${phoneNumber}&text=${encodedMessage}`
      : `https://web.whatsapp.com/send?phone=${phoneNumber}&text=${encodedMessage}`;

    window.open(whatsappUrl, "_blank");

    setFormData({
      name: "",
      contact: "",
      message: "",
    });

    onClose?.();
  };

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/70 px-4 py-6 backdrop-blur-md"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-lg overflow-hidden rounded-3xl border border-violet-500/20 bg-white shadow-2xl dark:bg-[#0b0b12]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="relative overflow-hidden bg-gradient-to-br from-violet-700 via-purple-600 to-fuchsia-600 px-6 py-7 text-white sm:px-8">
          <div className="absolute -right-10 -top-10 h-36 w-36 rounded-full bg-white/10 blur-2xl" />

          <button
            type="button"
            onClick={onClose}
            aria-label="Close enquiry popup"
            className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full border border-white/20 bg-white/10 transition hover:bg-white/20"
          >
            <X size={19} />
          </button>

          <div className="relative flex h-12 w-12 items-center justify-center rounded-2xl border border-white/20 bg-white/15">
            <MessageCircle size={25} />
          </div>

          <h2 className="relative mt-5 text-2xl font-bold tracking-tight sm:text-3xl">
            Let’s Talk About Your Project
          </h2>

          <p className="relative mt-2 max-w-sm text-sm leading-6 text-white/80">
            Tell us what you need. Our team will connect with you on WhatsApp.
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-5 p-6 sm:p-8">
          <div>
            <label
              htmlFor="enquiry-name"
              className="mb-2 block text-sm font-semibold text-slate-800 dark:text-slate-200"
            >
              Your Name
            </label>

            <div className="relative">
              <User
                size={18}
                className="absolute left-4 top-1/2 -translate-y-1/2 text-violet-500"
              />

              <input
                id="enquiry-name"
                type="text"
                name="name"
                placeholder="Enter your full name"
                value={formData.name}
                onChange={handleChange}
                autoComplete="name"
                required
                className="w-full rounded-xl border border-slate-200 bg-slate-50 py-3.5 pl-11 pr-4 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-violet-500 focus:ring-4 focus:ring-violet-500/10 dark:border-white/10 dark:bg-white/[0.04] dark:text-white"
              />
            </div>
          </div>

          <div>
            <label
              htmlFor="enquiry-contact"
              className="mb-2 block text-sm font-semibold text-slate-800 dark:text-slate-200"
            >
              Contact Number
            </label>

            <div className="relative">
              <Phone
                size={18}
                className="absolute left-4 top-1/2 -translate-y-1/2 text-violet-500"
              />

              <input
                id="enquiry-contact"
                type="tel"
                name="contact"
                placeholder="Enter your phone number"
                value={formData.contact}
                onChange={handleChange}
                autoComplete="tel"
                inputMode="tel"
                required
                className="w-full rounded-xl border border-slate-200 bg-slate-50 py-3.5 pl-11 pr-4 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-violet-500 focus:ring-4 focus:ring-violet-500/10 dark:border-white/10 dark:bg-white/[0.04] dark:text-white"
              />
            </div>
          </div>

          <div>
            <label
              htmlFor="enquiry-message"
              className="mb-2 block text-sm font-semibold text-slate-800 dark:text-slate-200"
            >
              What Do You Need?
            </label>

            <div className="relative">
              <MessageSquare
                size={18}
                className="absolute left-4 top-4 text-violet-500"
              />

              <textarea
                id="enquiry-message"
                name="message"
                placeholder="Tell us about your website, app, or other requirements..."
                value={formData.message}
                onChange={handleChange}
                rows={4}
                required
                className="w-full resize-none rounded-xl border border-slate-200 bg-slate-50 py-3.5 pl-11 pr-4 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-violet-500 focus:ring-4 focus:ring-violet-500/10 dark:border-white/10 dark:bg-white/[0.04] dark:text-white"
              />
            </div>
          </div>

          {error && (
            <p role="alert" className="text-sm text-red-500">
              {error}
            </p>
          )}

          <button
            type="submit"
            className="flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-violet-600 to-fuchsia-600 px-5 py-4 text-sm font-bold text-white shadow-lg shadow-violet-600/20 transition hover:-translate-y-0.5 hover:shadow-xl hover:shadow-violet-600/30 active:translate-y-0"
          >
            <Send size={18} />
            Submit Enquiry on WhatsApp
          </button>

          <p className="text-center text-xs leading-5 text-slate-500 dark:text-slate-400">
            You’ll be redirected to WhatsApp to send your enquiry.
          </p>
        </form>
      </div>
    </div>
  );
}

export default EnquiryPopup;
