"use client";

import { useState } from "react";
import { whatsappLink } from "@/lib/site";

interface FormState {
  name: string;
  phone: string;
  email: string;
  subject: string;
  message: string;
}

const initialForm: FormState = {
  name: "",
  phone: "",
  email: "",
  subject: "",
  message: "",
};

export default function ContactForm() {
  const [form, setForm] = useState<FormState>(initialForm);
  const [errors, setErrors] = useState<Partial<FormState>>({});
  const [sent, setSent] = useState(false);
  const [saveFailed, setSaveFailed] = useState(false);

  const update = (field: keyof FormState) => (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setForm((prev) => ({ ...prev, [field]: e.target.value }));
    setErrors((prev) => ({ ...prev, [field]: undefined }));
  };

  const validate = (): boolean => {
    const next: Partial<FormState> = {};
    if (!form.name.trim()) next.name = "Please enter your name.";
    if (!form.phone.trim()) next.phone = "Please enter your phone number.";
    else if (!/^[0-9+\-\s()]{8,20}$/.test(form.phone.trim()))
      next.phone = "Please enter a valid phone number.";
    if (form.email && !/^\S+@\S+\.\S+$/.test(form.email))
      next.email = "Please enter a valid email address.";
    if (!form.message.trim()) next.message = "Please tell us about your project.";
    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setSaveFailed(false);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: form.name,
          phone: form.phone,
          email: form.email,
          subject: form.subject,
          message: form.message,
        }),
      });
      if (!res.ok) throw new Error("save failed");
    } catch {
      setSaveFailed(true);
    }

    const text = [
      "Assalam-o-Alaikum! New enquiry from the Deenar website:",
      "",
      `Name: ${form.name}`,
      `Phone: ${form.phone}`,
      form.email ? `Email: ${form.email}` : "",
      form.subject ? `Subject: ${form.subject}` : "",
      "",
      `Message: ${form.message}`,
    ]
      .filter(Boolean)
      .join("\n");

    window.open(whatsappLink(text), "_blank", "noopener,noreferrer");
    setSent(true);
    setForm(initialForm);
  };

  const inputClass = (hasError?: string) =>
    `w-full rounded-md border bg-[#0b0b0e] px-4 py-3 text-sm text-zinc-100 placeholder:text-zinc-600 focus:outline-none focus:ring-1 ${
      hasError
        ? "border-red-500/50 focus:border-red-500 focus:ring-red-500/30"
        : "border-white/10 focus:border-brand-500 focus:ring-brand-500/40"
    }`;

  return (
    <div className="border border-white/10 bg-[#101013] p-6 sm:p-8">
      {sent && (
        <div className="mb-6 flex items-start gap-3 rounded-md border border-emerald-500/30 bg-emerald-500/10 px-4 py-3 text-sm text-emerald-300">
          <svg viewBox="0 0 24 24" className="mt-0.5 h-5 w-5 shrink-0" fill="currentColor" aria-hidden="true">
            <path d="M12 2a10 10 0 100 20 10 10 0 000-20zm-1.2 14.5l-3.6-3.6 1.4-1.4 2.2 2.2 4.8-4.8 1.4 1.4-6.2 6.2z" />
          </svg>
          <p>
            Thank you! Your enquiry has been sent. Simply press <strong>Send</strong>{" "}
            in WhatsApp and our team will get back to you within one working day.
          </p>
        </div>
      )}
      {saveFailed && (
        <div className="mb-6 flex items-start gap-3 rounded-md border border-red-500/30 bg-red-500/10 px-4 py-3 text-sm text-red-300">
          <svg viewBox="0 0 24 24" className="mt-0.5 h-5 w-5 shrink-0" fill="currentColor" aria-hidden="true">
            <path d="M12 2a10 10 0 100 20 10 10 0 000-20zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z" />
          </svg>
          <p>
            We couldn&apos;t save this enquiry to the file, but it has still been
            prepared in WhatsApp below.
          </p>
        </div>
      )}

      <form onSubmit={handleSubmit} noValidate>
        <div className="grid gap-5 sm:grid-cols-2">
          <div>
            <label htmlFor="name" className="mb-1.5 block text-sm font-medium text-zinc-300">
              Full name <span className="text-brand-500">*</span>
            </label>
            <input
              id="name"
              type="text"
              value={form.name}
              onChange={update("name")}
              placeholder="e.g. Ahmed Raza"
              className={inputClass(errors.name)}
            />
            {errors.name && <p className="mt-1 text-xs text-red-400">{errors.name}</p>}
          </div>

          <div>
            <label htmlFor="phone" className="mb-1.5 block text-sm font-medium text-zinc-300">
              Phone / WhatsApp <span className="text-brand-500">*</span>
            </label>
            <input
              id="phone"
              type="tel"
              value={form.phone}
              onChange={update("phone")}
              placeholder="03XX XXXXXXX"
              className={inputClass(errors.phone)}
            />
            {errors.phone && <p className="mt-1 text-xs text-red-400">{errors.phone}</p>}
          </div>

          <div>
            <label htmlFor="email" className="mb-1.5 block text-sm font-medium text-zinc-300">
              Email address
            </label>
            <input
              id="email"
              type="email"
              value={form.email}
              onChange={update("email")}
              placeholder="you@example.com"
              className={inputClass(errors.email)}
            />
            {errors.email && <p className="mt-1 text-xs text-red-400">{errors.email}</p>}
          </div>

          <div>
            <label htmlFor="subject" className="mb-1.5 block text-sm font-medium text-zinc-300">
              Subject
            </label>
            <select
              id="subject"
              value={form.subject}
              onChange={update("subject")}
              className="w-full rounded-md border border-white/10 bg-[#0b0b0e] px-4 py-3 text-sm text-zinc-100 focus:border-brand-500 focus:outline-none focus:ring-1 focus:ring-brand-500/40"
            >
              <option value="">Select a topic…</option>
              <option>Passenger lift enquiry</option>
              <option>Home / villa lift enquiry</option>
              <option>Freight or goods lift</option>
              <option>Hospital lift</option>
              <option>Maintenance (AMC)</option>
              <option>Modernization / repair</option>
              <option>Other</option>
            </select>
          </div>
        </div>

        <div className="mt-5">
          <label htmlFor="message" className="mb-1.5 block text-sm font-medium text-zinc-300">
            Your message <span className="text-brand-500">*</span>
          </label>
          <textarea
            id="message"
            rows={5}
            value={form.message}
            onChange={update("message")}
            placeholder="Tell us about your building, number of floors, required capacity, and any other details…"
            className={inputClass(errors.message)}
          />
          {errors.message && <p className="mt-1 text-xs text-red-400">{errors.message}</p>}
        </div>

        <div className="mt-6 flex flex-col items-start gap-3 sm:flex-row sm:items-center">
          <button
            type="submit"
            className="inline-flex items-center gap-2 rounded-md bg-brand-500 px-6 py-3 text-sm font-semibold text-[#0a0a0a] transition-all hover:bg-brand-400 active:scale-[0.98]"
          >
            <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor" aria-hidden="true">
              <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z" />
            </svg>
            Send via WhatsApp
          </button>
          <p className="text-xs text-zinc-500">
            Your enquiry opens in WhatsApp so you can review it before sending.
          </p>
        </div>
      </form>
    </div>
  );
}
