"use client";

import { useRef } from "react";
import { gsap, useGSAP } from "@/lib/gsap";
import Button from "@/components/Button";

const NAV_LINKS = [
  { label: "About",    href: "/about"    },
  { label: "Services", href: "/services" },
  { label: "Projects", href: "/projects" },
  { label: "News",     href: "/news"     },
  { label: "Contact",  href: "/contact"  },
];

type Props = { isDark?: boolean };

export default function MobileMenu({ isDark = false }: Props) {
  const overlayRef = useRef<HTMLDivElement>(null);
  const linksRef = useRef<(HTMLLIElement | null)[]>([]);
  const ctaRef = useRef<HTMLDivElement>(null);
  const isOpen = useRef(false);

  useGSAP(() => {
    gsap.set(overlayRef.current, { autoAlpha: 0, y: 20, pointerEvents: "none" });
  });

  const openMenu = () => {
    if (isOpen.current) return;
    isOpen.current = true;

    gsap.timeline()
      .set(overlayRef.current, { pointerEvents: "all" })
      .to(overlayRef.current, { autoAlpha: 1, y: 0, duration: 0.4, ease: "power3.out" })
      .fromTo(
        linksRef.current.filter(Boolean),
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, stagger: 0.06, duration: 0.45, ease: "power3.out" },
        "-=0.25"
      )
      .fromTo(ctaRef.current, { opacity: 0, y: 16 }, { opacity: 1, y: 0, duration: 0.35, ease: "power3.out" }, "-=0.3");
  };

  const closeMenu = () => {
    if (!isOpen.current) return;
    isOpen.current = false;

    gsap.timeline()
      .to(
        linksRef.current.filter(Boolean).reverse(),
        { opacity: 0, y: -12, stagger: 0.04, duration: 0.2, ease: "power2.in" }
      )
      .to(ctaRef.current, { opacity: 0, y: -8, duration: 0.15, ease: "power2.in" }, "<")
      .to(overlayRef.current, { autoAlpha: 0, y: 10, duration: 0.3, ease: "power2.in" }, "-=0.05")
      .set(overlayRef.current, { pointerEvents: "none" });
  };

  const openContact = () => {
    closeMenu();
    window.dispatchEvent(new CustomEvent("contact:open"));
  };

  return (
    <>
      <button className="md:hidden" aria-label="Open menu" onClick={openMenu}>
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden>
          <line x1="3" y1="6"  x2="21" y2="6"  stroke={isDark ? "white" : "black"} strokeWidth="1.5" strokeLinecap="round" style={{ transition: "stroke 0.5s" }} />
          <line x1="3" y1="12" x2="21" y2="12" stroke={isDark ? "white" : "black"} strokeWidth="1.5" strokeLinecap="round" style={{ transition: "stroke 0.5s" }} />
          <line x1="3" y1="18" x2="21" y2="18" stroke={isDark ? "white" : "black"} strokeWidth="1.5" strokeLinecap="round" style={{ transition: "stroke 0.5s" }} />
        </svg>
      </button>

      <div
        ref={overlayRef}
        className="fixed inset-0 z-50 bg-black flex flex-col px-4 py-6"
        style={{ fontFamily: "var(--font-inter)" }}
      >
        <div className="flex items-center justify-between">
          <span className="font-semibold text-base capitalize tracking-[-0.04em] text-white">
            H.Studio
          </span>
          <button onClick={closeMenu} aria-label="Close menu">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden>
              <line x1="4" y1="4" x2="20" y2="20" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
              <line x1="20" y1="4" x2="4" y2="20" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
          </button>
        </div>

        <ul className="flex flex-col gap-8 mt-12 list-none items-center">
          {NAV_LINKS.map(({ label, href }, i) => (
            <li key={label} ref={(el: HTMLLIElement | null) => { linksRef.current[i] = el; }}>
              <a
                href={href}
                className="group relative text-white font-semibold text-[32px] capitalize tracking-[-0.04em]"
                onClick={closeMenu}
              >
                {label}
                <span className="absolute bottom-0 left-0 h-px w-0 bg-white transition-[width] duration-300 group-hover:w-full" />
              </a>
            </li>
          ))}
        </ul>

        <div ref={ctaRef} className="mt-auto">
          <Button variant="light" className="w-full tracking-[-0.04em]" onClick={openContact}>
            Let&apos;s talk
          </Button>
        </div>
      </div>
    </>
  );
}
