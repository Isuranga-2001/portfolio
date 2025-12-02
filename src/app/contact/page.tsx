"use client";

import { useState } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    title: "",
    phone: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMessage("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        const error = await response.json();
        throw new Error(error.error || "Failed to send message");
      }

      setStatus("success");
      setFormData({ name: "", title: "", phone: "", message: "" });
      
      // Reset success message after 5 seconds
      setTimeout(() => setStatus("idle"), 5000);
    } catch (error) {
      setStatus("error");
      setErrorMessage(error instanceof Error ? error.message : "An error occurred");
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <>
      <Navigation />
      <div className="min-h-screen">
        <section className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-[var(--gh-fg-default)] mb-4">
              Get in Touch
            </h1>
            <p className="text-lg text-[var(--gh-fg-muted)]">
              Have a question or want to work together? Feel free to reach out!
            </p>
          </div>

          <div className="border border-[var(--gh-border-default)] rounded-lg p-8 bg-[var(--gh-canvas-subtle)]">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name Field */}
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-[var(--gh-fg-default)] mb-2"
                >
                  Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-[var(--gh-border-default)] rounded-md bg-[var(--gh-canvas-default)] text-[var(--gh-fg-default)] focus:outline-none focus:ring-2 focus:ring-[var(--gh-accent-emphasis)] focus:border-transparent"
                  placeholder="Your name"
                />
              </div>

              {/* Title Field */}
              <div>
                <label
                  htmlFor="title"
                  className="block text-sm font-medium text-[var(--gh-fg-default)] mb-2"
                >
                  Title <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="title"
                  name="title"
                  required
                  value={formData.title}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-[var(--gh-border-default)] rounded-md bg-[var(--gh-canvas-default)] text-[var(--gh-fg-default)] focus:outline-none focus:ring-2 focus:ring-[var(--gh-accent-emphasis)] focus:border-transparent"
                  placeholder="Subject of your message"
                />
              </div>

              {/* Phone Field (Optional) */}
              <div>
                <label
                  htmlFor="phone"
                  className="block text-sm font-medium text-[var(--gh-fg-default)] mb-2"
                >
                  Phone Number <span className="text-[var(--gh-fg-muted)]">(optional)</span>
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-[var(--gh-border-default)] rounded-md bg-[var(--gh-canvas-default)] text-[var(--gh-fg-default)] focus:outline-none focus:ring-2 focus:ring-[var(--gh-accent-emphasis)] focus:border-transparent"
                  placeholder="+1 234 567 8900"
                />
              </div>

              {/* Message Field */}
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-[var(--gh-fg-default)] mb-2"
                >
                  Message <span className="text-red-500">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={6}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-[var(--gh-border-default)] rounded-md bg-[var(--gh-canvas-default)] text-[var(--gh-fg-default)] focus:outline-none focus:ring-2 focus:ring-[var(--gh-accent-emphasis)] focus:border-transparent resize-none"
                  placeholder="Your message..."
                />
              </div>

              {/* Status Messages */}
              {status === "success" && (
                <div className="p-4 bg-green-50 border border-green-200 rounded-md">
                  <p className="text-green-800 text-sm">
                    Message sent successfully! I'll get back to you soon.
                  </p>
                </div>
              )}

              {status === "error" && (
                <div className="p-4 bg-red-50 border border-red-200 rounded-md">
                  <p className="text-red-800 text-sm">
                    {errorMessage || "Failed to send message. Please try again."}
                  </p>
                </div>
              )}

              {/* Submit Button */}
              <button
                type="submit"
                disabled={status === "loading"}
                className="w-full px-6 py-3 bg-[var(--gh-accent-emphasis)] text-white rounded-lg font-medium hover:bg-[var(--gh-accent-fg)] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {status === "loading" ? "Sending..." : "Send Message"}
              </button>
            </form>
          </div>

          {/* Alternative Contact Methods */}
          <div className="mt-12 text-center">
            <p className="text-[var(--gh-fg-muted)] mb-4">
              Or reach out directly via:
            </p>
            <div className="flex justify-center gap-6">
              <a
                href="mailto:isurangawarnasooriya@outlook.com"
                className="text-[var(--gh-accent-fg)] hover:text-[var(--gh-accent-emphasis)] transition-colors"
              >
                Email
              </a>
              <a
                href="https://linkedin.com/in/isuranga-warnasooriya"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[var(--gh-accent-fg)] hover:text-[var(--gh-accent-emphasis)] transition-colors"
              >
                LinkedIn
              </a>
              <a
                href="https://github.com/Isuranga-2001"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[var(--gh-accent-fg)] hover:text-[var(--gh-accent-emphasis)] transition-colors"
              >
                GitHub
              </a>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
}
