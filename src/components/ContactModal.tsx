"use client";

import { useEffect, useState } from "react";

export type SiteSettings = {
  email?: string;
  phone?: string;
  location?: string;
  instagram?: string;
  facebook?: string;
  twitter?: string;
  linkedin?: string;
  contactHeading?: string;
  contactSubtext?: string;
};

export default function ContactModal({ settings }: { settings: SiteSettings | null }) {
  const [isOpen, setIsOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const open = () => setIsOpen(true);
    window.addEventListener("contact:open", open);
    return () => window.removeEventListener("contact:open", open);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

  const close = () => { setIsOpen(false); setSubmitted(false); };

  const socials = [
    settings?.instagram  && { label: "Instagram", handle: settings.instagram  },
    settings?.facebook   && { label: "Facebook",  handle: settings.facebook   },
    settings?.twitter    && { label: "X.com",     handle: settings.twitter    },
    settings?.linkedin   && { label: "LinkedIn",  handle: settings.linkedin   },
  ].filter(Boolean) as { label: string; handle: string }[];

  return (
    <div
      aria-modal="true"
      aria-hidden={!isOpen}
      className={`fixed inset-0 z-[200] bg-black flex flex-col overflow-y-auto
        transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]
        ${isOpen ? "translate-y-0" : "translate-y-full pointer-events-none"}`}
      style={{ fontFamily: "var(--font-inter)" }}
    >
      {/* Top bar */}
      <div className="flex items-center justify-between px-4 pt-6 md:px-8 md:pt-8 shrink-0">
        <span className="font-semibold text-base capitalize tracking-[-0.04em] text-white">
          H.Studio
        </span>
        <button onClick={close} aria-label="Close" className="text-white hover:opacity-60 transition-opacity">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden>
            <line x1="4" y1="4" x2="20" y2="20" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
            <line x1="20" y1="4" x2="4" y2="20" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
          </svg>
        </button>
      </div>

      {/* Body */}
      <div className="flex flex-col md:flex-row flex-1 px-4 pt-8 pb-12 gap-12 md:px-8 md:pt-12 md:gap-0">

        {/* Left — contact info */}
        <div className="flex flex-col gap-8 md:w-[40%] md:pr-16">
          <p
            className="text-[14px] font-normal leading-[1.1] text-white uppercase"
            style={{ fontFamily: "var(--font-geist-mono)" }}
          >
            [ get in touch ]
          </p>

          <p
            className="text-[36px] md:text-[56px] font-light text-white uppercase tracking-[-0.08em] leading-[0.88]"
          >
            {settings?.contactHeading ?? "Let's create something great."}
          </p>

          {settings?.contactSubtext && (
            <p className="text-[14px] font-normal leading-[1.4] text-white/60 tracking-[-0.04em] max-w-[320px]">
              {settings.contactSubtext}
            </p>
          )}

          <div className="flex flex-col gap-2 mt-auto">
            {settings?.email && (
              <a
                href={`mailto:${settings.email}`}
                className="text-[14px] font-normal text-white tracking-[-0.04em] hover:opacity-60 transition-opacity"
              >
                {settings.email}
              </a>
            )}
            {settings?.phone && (
              <p className="text-[14px] font-normal text-white/60 tracking-[-0.04em]">{settings.phone}</p>
            )}
            {settings?.location && (
              <p className="text-[14px] font-normal text-white/60 tracking-[-0.04em]">{settings.location}</p>
            )}
          </div>

          {socials.length > 0 && (
            <div className="flex gap-5 flex-wrap">
              {socials.map(({ label }) => (
                <span
                  key={label}
                  className="text-[14px] font-normal text-white uppercase tracking-[-0.04em] hover:opacity-60 transition-opacity cursor-pointer"
                >
                  {label}
                </span>
              ))}
            </div>
          )}
        </div>

        {/* Divider */}
        <div className="hidden md:block w-px bg-white/10 shrink-0" />

        {/* Right — form */}
        <div className="md:flex-1 md:pl-16">
          {submitted ? (
            <div className="flex flex-col gap-6 h-full items-start justify-center py-8">
              <p
                className="text-[14px] font-normal text-white uppercase"
                style={{ fontFamily: "var(--font-geist-mono)" }}
              >
                [ message sent ]
              </p>
              <p className="text-[36px] md:text-[56px] font-light text-white uppercase tracking-[-0.08em] leading-[0.88]">
                Thank you.<br />I&apos;ll be<br />in touch.
              </p>
              <button
                onClick={close}
                className="mt-4 text-[14px] font-medium text-white/60 underline uppercase tracking-[-0.04em] hover:text-white transition-colors"
              >
                Close
              </button>
            </div>
          ) : (
            <ContactForm onSuccess={() => setSubmitted(true)} />
          )}
        </div>
      </div>
    </div>
  );
}

function ContactForm({ onSuccess }: { onSuccess: () => void }) {
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    const data = new FormData(e.currentTarget);
    // TODO: wire up to email service (Resend, SendGrid, etc.)
    console.log("Contact:", Object.fromEntries(data));
    await new Promise((r) => setTimeout(r, 600));
    setLoading(false);
    onSuccess();
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-8">
      <p
        className="text-[14px] font-normal leading-[1.1] text-white uppercase"
        style={{ fontFamily: "var(--font-geist-mono)" }}
      >
        [ your details ]
      </p>

      {/* Name */}
      <div className="flex flex-col gap-2">
        <label
          className="text-[11px] font-normal text-white/40 uppercase tracking-[0.08em]"
          style={{ fontFamily: "var(--font-geist-mono)" }}
        >
          Name
        </label>
        <input
          name="name"
          required
          autoComplete="name"
          className="bg-transparent border-b border-white/20 focus:border-white pb-2 text-[18px] font-light text-white placeholder-white/20 outline-none transition-colors duration-300 tracking-[-0.04em] w-full"
          placeholder="Your name"
        />
      </div>

      {/* Email */}
      <div className="flex flex-col gap-2">
        <label
          className="text-[11px] font-normal text-white/40 uppercase tracking-[0.08em]"
          style={{ fontFamily: "var(--font-geist-mono)" }}
        >
          Email
        </label>
        <input
          name="email"
          type="email"
          required
          autoComplete="email"
          className="bg-transparent border-b border-white/20 focus:border-white pb-2 text-[18px] font-light text-white placeholder-white/20 outline-none transition-colors duration-300 tracking-[-0.04em] w-full"
          placeholder="hello@yourco.com"
        />
      </div>

      {/* Message */}
      <div className="flex flex-col gap-2">
        <label
          className="text-[11px] font-normal text-white/40 uppercase tracking-[0.08em]"
          style={{ fontFamily: "var(--font-geist-mono)" }}
        >
          Project / Message
        </label>
        <div className="relative p-3">
          <span className="absolute top-0 left-0 w-4 h-4 border-t border-l border-white/20" />
          <span className="absolute top-0 right-0 w-4 h-4 border-t border-r border-white/20" />
          <span className="absolute bottom-0 left-0 w-4 h-4 border-b border-l border-white/20" />
          <span className="absolute bottom-0 right-0 w-4 h-4 border-b border-r border-white/20" />
          <textarea
            name="message"
            required
            rows={5}
            className="w-full bg-transparent text-[14px] font-normal text-white placeholder-white/20 outline-none resize-none tracking-[-0.04em] leading-[1.5]"
            placeholder="Tell me about your project..."
          />
        </div>
      </div>

      {/* Submit */}
      <button
        type="submit"
        disabled={loading}
        className="self-start flex items-center gap-3 border-b border-white pb-1 text-white uppercase tracking-[-0.04em] text-[14px] font-medium hover:gap-5 transition-all duration-300 disabled:opacity-40"
      >
        {loading ? "Sending…" : "Send message"}
        {!loading && (
          <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden>
            <path d="M4.5 13.5L13.5 4.5M13.5 4.5H7.5M13.5 4.5V10.5" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        )}
      </button>
    </form>
  );
}
