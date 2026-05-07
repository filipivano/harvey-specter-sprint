import { client } from "@/sanity/lib/client";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import type { SiteSettings } from "@/components/ContactModal";

const SETTINGS_QUERY = `*[_type == "siteSettings"][0]`;

export default async function ContactPage() {
  const s = await client.fetch<SiteSettings | null>(SETTINGS_QUERY);

  return (
    <>
      <Navbar />
      <main className="relative z-[1]">

        {/* ── Hero ── */}
        <section className="bg-white px-4 pt-[120px] pb-8 md:px-8 md:pt-[160px] md:pb-[48px]">
          <div style={{ fontFamily: "var(--font-inter)" }}>
            <div className="flex items-center justify-center w-full mb-1 md:justify-start md:pl-[18px]">
              <p
                className="text-[14px] font-normal uppercase text-[#1f1f1f] leading-[1.1]"
                style={{ fontFamily: "var(--font-geist-mono)" }}
              >
                [ H.Studio ]
              </p>
            </div>
            <h1
              className="
                w-full text-center text-black font-medium capitalize
                text-[26vw] tracking-[-0.07em] leading-[0.85]
                md:text-[13.75vw] md:leading-[1.0] md:whitespace-nowrap
              "
            >
              Contact
            </h1>
          </div>
        </section>

        {/* ── Contact body ── */}
        <section className="bg-[#F5F5F4] px-4 py-12 md:px-8 md:py-[120px]">
          <div className="flex flex-col md:flex-row gap-12 md:gap-0 w-full">

            {/* Left — info */}
            <div className="flex flex-col gap-8 md:w-[40%] md:pr-16">
              <div className="flex flex-col gap-3 items-start w-full mb-2">
                <p
                  className="text-[14px] font-normal leading-[1.1] text-[#1f1f1f] uppercase"
                  style={{ fontFamily: "var(--font-geist-mono)" }}
                >
                  [ get in touch ]
                </p>
                <div className="w-full border-t border-[#1f1f1f]" />
              </div>

              <p
                className="text-[36px] md:text-[56px] font-light text-black uppercase tracking-[-0.08em] leading-[0.88]"
                style={{ fontFamily: "var(--font-inter)" }}
              >
                {s?.contactHeading ?? "Let's create something great."}
              </p>

              <div className="flex flex-col gap-3 mt-4">
                {s?.email && (
                  <a
                    href={`mailto:${s.email}`}
                    className="text-[14px] font-normal text-[#1f1f1f] tracking-[-0.04em] hover:opacity-60 transition-opacity"
                    style={{ fontFamily: "var(--font-inter)" }}
                  >
                    {s.email}
                  </a>
                )}
                {s?.phone && (
                  <p className="text-[14px] font-normal text-[#999] tracking-[-0.04em]" style={{ fontFamily: "var(--font-inter)" }}>
                    {s.phone}
                  </p>
                )}
                {s?.location && (
                  <p className="text-[14px] font-normal text-[#999] tracking-[-0.04em]" style={{ fontFamily: "var(--font-inter)" }}>
                    {s.location}
                  </p>
                )}
              </div>

            </div>

            {/* Divider */}
            <div className="hidden md:block w-px bg-[#e5e5e5] shrink-0" />

            {/* Right — form */}
            <div className="md:flex-1 md:pl-16">
              <p
                className="text-[14px] font-normal leading-[1.1] text-[#1f1f1f] uppercase mb-8"
                style={{ fontFamily: "var(--font-geist-mono)" }}
              >
                [ your details ]
              </p>
              <ContactFormLight />
            </div>
          </div>
        </section>

      </main>

      <Footer />
    </>
  );
}

function ContactFormLight() {
  return (
    <form
      action={async (formData: FormData) => {
        "use server";
        // TODO: wire up to email service (Resend, SendGrid, etc.)
        console.log("Contact:", {
          name: formData.get("name"),
          email: formData.get("email"),
          message: formData.get("message"),
        });
      }}
      className="flex flex-col gap-8"
      style={{ fontFamily: "var(--font-inter)" }}
    >
      {/* Name */}
      <div className="flex flex-col gap-2">
        <label
          className="text-[11px] font-normal text-[#999] uppercase tracking-[0.08em]"
          style={{ fontFamily: "var(--font-geist-mono)" }}
        >
          Name
        </label>
        <input
          name="name"
          required
          autoComplete="name"
          className="bg-transparent border-b border-[#1f1f1f]/20 focus:border-[#1f1f1f] pb-2 text-[18px] font-light text-[#1f1f1f] placeholder-[#1f1f1f]/20 outline-none transition-colors duration-300 tracking-[-0.04em] w-full"
          placeholder="Your name"
        />
      </div>

      {/* Email */}
      <div className="flex flex-col gap-2">
        <label
          className="text-[11px] font-normal text-[#999] uppercase tracking-[0.08em]"
          style={{ fontFamily: "var(--font-geist-mono)" }}
        >
          Email
        </label>
        <input
          name="email"
          type="email"
          required
          autoComplete="email"
          className="bg-transparent border-b border-[#1f1f1f]/20 focus:border-[#1f1f1f] pb-2 text-[18px] font-light text-[#1f1f1f] placeholder-[#1f1f1f]/20 outline-none transition-colors duration-300 tracking-[-0.04em] w-full"
          placeholder="hello@yourco.com"
        />
      </div>

      {/* Message */}
      <div className="flex flex-col gap-2">
        <label
          className="text-[11px] font-normal text-[#999] uppercase tracking-[0.08em]"
          style={{ fontFamily: "var(--font-geist-mono)" }}
        >
          Project / Message
        </label>
        <div className="relative p-3">
          <span className="absolute top-0 left-0 w-4 h-4 border-t border-l border-[#1f1f1f]/20" />
          <span className="absolute top-0 right-0 w-4 h-4 border-t border-r border-[#1f1f1f]/20" />
          <span className="absolute bottom-0 left-0 w-4 h-4 border-b border-l border-[#1f1f1f]/20" />
          <span className="absolute bottom-0 right-0 w-4 h-4 border-b border-r border-[#1f1f1f]/20" />
          <textarea
            name="message"
            required
            rows={6}
            className="w-full bg-transparent text-[14px] font-normal text-[#1f1f1f] placeholder-[#1f1f1f]/20 outline-none resize-none tracking-[-0.04em] leading-[1.5]"
            placeholder="Tell me about your project..."
          />
        </div>
      </div>

      {/* Submit */}
      <button
        type="submit"
        className="self-start flex items-center gap-3 border-b border-[#1f1f1f] pb-1 text-[#1f1f1f] uppercase tracking-[-0.04em] text-[14px] font-medium hover:gap-5 transition-all duration-300"
      >
        Send message
        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden>
          <path d="M4.5 13.5L13.5 4.5M13.5 4.5H7.5M13.5 4.5V10.5" stroke="#1f1f1f" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>
    </form>
  );
}
