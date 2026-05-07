"use client";

import { useEffect } from "react";
import { gsap, ScrollTrigger } from "@/lib/gsap";

export default function FooterReveal() {
  useEffect(() => {
    const footer = document.querySelector<HTMLElement>("#site-footer");
    if (!footer) return;

    // Wipe up from below — footer reveals top-to-bottom as the last section scrolls away
    gsap.fromTo(
      footer,
      { clipPath: "inset(40% 0 0 0)", y: 40 },
      {
        clipPath: "inset(0% 0 0 0)",
        y: 0,
        ease: "power2.out",
        scrollTrigger: {
          trigger: footer,
          start: "top 95%",
          end: "top 30%",
          scrub: 1.5,
          invalidateOnRefresh: true,
        },
      }
    );
  }, []);

  return null;
}
