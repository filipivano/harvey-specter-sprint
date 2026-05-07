"use client";

import { useEffect } from "react";
import { gsap, ScrollTrigger } from "@/lib/gsap";

const CARDS = [
  { id: "tc-marko", speed: -60  },
  { id: "tc-lukas", speed: -100 },
  { id: "tc-sarah", speed: -40  },
  { id: "tc-sofia", speed: -80  },
];

export default function TestimonialsParallax() {
  useEffect(() => {
    const section = document.querySelector<HTMLElement>("#testimonials-section");
    if (!section) return;

    const tweens = CARDS.map(({ id, speed }) => {
      const el = document.querySelector<HTMLElement>(`#${id}`);
      if (!el) return null;

      return gsap.fromTo(
        el,
        { y: 0 },
        {
          y: speed,
          ease: "none",
          scrollTrigger: {
            trigger: section,
            start: "top bottom",
            end: "bottom top",
            scrub: 1.5,
            invalidateOnRefresh: true,
          },
        }
      );
    });

    return () => {
      tweens.forEach((t) => {
        if (!t) return;
        t.scrollTrigger?.kill();
        t.kill();
      });
      CARDS.forEach(({ id }) => {
        const el = document.querySelector<HTMLElement>(`#${id}`);
        if (el) gsap.set(el, { clearProps: "transform" });
      });
    };
  }, []);

  return null;
}
