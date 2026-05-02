"use client";

import { useState } from "react";

const NAV_LINKS = ["About", "Services", "Projects", "News", "Contact"];

export default function MobileMenu() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button className="md:hidden" aria-label="Open menu" onClick={() => setOpen(true)}>
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden>
          <line x1="3" y1="6"  x2="21" y2="6"  stroke="black" strokeWidth="1.5" strokeLinecap="round" />
          <line x1="3" y1="12" x2="21" y2="12" stroke="black" strokeWidth="1.5" strokeLinecap="round" />
          <line x1="3" y1="18" x2="21" y2="18" stroke="black" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
      </button>

      {open && (
        <div
          className="fixed inset-0 z-50 bg-black flex flex-col px-4 py-6"
          style={{ fontFamily: "var(--font-inter)" }}
        >
          <div className="flex items-center justify-between">
            <span className="font-semibold text-base capitalize tracking-[-0.04em] text-white">
              H.Studio
            </span>
            <button onClick={() => setOpen(false)} aria-label="Close menu">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden>
                <line x1="4" y1="4" x2="20" y2="20" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
                <line x1="20" y1="4" x2="4" y2="20" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
              </svg>
            </button>
          </div>

          <ul className="flex flex-col gap-8 mt-12 list-none">
            {NAV_LINKS.map((link) => (
              <li key={link}>
                <a
                  href={`#${link.toLowerCase()}`}
                  className="text-white font-semibold text-[32px] capitalize tracking-[-0.04em] hover:opacity-70 transition-opacity"
                  onClick={() => setOpen(false)}
                >
                  {link}
                </a>
              </li>
            ))}
          </ul>

          <div className="mt-auto">
            <button className="flex items-center justify-center bg-white text-black text-[14px] font-medium tracking-[-0.04em] px-4 py-3 rounded-[24px] w-full">
              Let&apos;s talk
            </button>
          </div>
        </div>
      )}
    </>
  );
}
