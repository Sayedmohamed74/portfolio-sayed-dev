"use client";

import { FC, useState } from "react";

const Contact: FC = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<
    "idle" | "sending" | "success" | "error"
  >("idle");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (res.ok && data.success) {
        setStatus("success");
        setForm({ name: "", email: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch (err) {
      console.error("Error sending message:", err);
      setStatus("error");
    }

    setTimeout(() => setStatus("idle"), 4000);
  };

  return (
    <section
      id="contact"
      className="py-24 bg-[var(--color-primary)] text-[var(--color-textPrimary)] transition-colors duration-300"
    >
      <div className="max-w-5xl mx-auto px-6 text-center">
        {/* Section Title */}
        <h2 className="text-4xl md:text-5xl font-bold font-orbitron mb-6 text-[var(--color-textPrimary)]">
          Get in Touch
        </h2>
        <p className="text-[var(--color-textSecondary)] max-w-2xl mx-auto mb-12 text-lg">
          Have a question, project, or idea? I’d love to hear from you! Fill out
          the form below and I’ll get back to you soon.
        </p>

        {/* Contact Form */}
        <form
          onSubmit={handleSubmit}
          className="bg-[var(--color-secondary)] rounded-2xl shadow-xl p-8 md:p-10 max-w-2xl mx-auto space-y-6 border border-[var(--color-textTertiary)]"
        >
          <div className="flex flex-col md:flex-row gap-6">
            <div className="w-full">
              <label className="block text-sm font-semibold text-[var(--color-textTertiary)] mb-2">
                Name
              </label>
              <input
                type="text"
                name="name"
                required
                disabled={status === "sending"}
                value={form.name}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg bg-[var(--color-primary)] text-[var(--color-textPrimary)] border border-[var(--color-textTertiary)] focus:border-[var(--color-tertiary)] focus:ring-2 focus:ring-[var(--color-tertiary)] outline-none transition-all duration-300"
                placeholder="Your name"
              />
            </div>

            <div className="w-full">
              <label className="block text-sm font-semibold text-[var(--color-textTertiary)] mb-2">
                Email
              </label>
              <input
                type="email"
                name="email"
                required
                disabled={status === "sending"}
                value={form.email}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg bg-[var(--color-primary)] text-[var(--color-textPrimary)] border border-[var(--color-textTertiary)] focus:border-[var(--color-tertiary)] focus:ring-2 focus:ring-[var(--color-tertiary)] outline-none transition-all duration-300"
                placeholder="you@example.com"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-semibold text-[var(--color-textTertiary)] mb-2">
              Message
            </label>
            <textarea
              name="message"
              required
              disabled={status === "sending"}
              value={form.message}
              onChange={handleChange}
              rows={5}
              className="w-full px-4 py-3 rounded-lg bg-[var(--color-primary)] text-[var(--color-textPrimary)] border border-[var(--color-textTertiary)] focus:border-[var(--color-tertiary)] focus:ring-2 focus:ring-[var(--color-tertiary)] outline-none transition-all duration-300"
              placeholder="Write your message..."
            ></textarea>
          </div>

          <button
            type="submit"
            disabled={status === "sending"}
            className={`w-full py-3.5 rounded-lg font-semibold text-lg transition-all duration-300
              ${
                status === "sending"
                  ? "bg-gray-500 cursor-not-allowed"
                  : "bg-[var(--color-tertiary)] text-[var(--color-textPrimary)] hover:opacity-90 hover:scale-[1.02] active:scale-95"
              }`}
          >
            {status === "sending" ? "Sending..." : "Send Message"}
          </button>

          {/* Status Message */}
          {status === "success" && (
            <p className="text-green-400 text-center font-semibold">
              ✅ Message sent successfully!
            </p>
          )}
          {status === "error" && (
            <p className="text-red-400 text-center font-semibold">
              ❌ Something went wrong. Try again.
            </p>
          )}
        </form>
      </div>
    </section>
  );
};

export default Contact;
