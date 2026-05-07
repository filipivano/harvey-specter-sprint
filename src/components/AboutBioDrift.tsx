"use client";

import { useEffect } from "react";
import { gsap, ScrollTrigger } from "@/lib/gsap";

export default function AboutBioDrift() {
  useEffect(() => {
    const el = document.querySelector<HTMLElement>("#about-bio-text");
    if (!el) return;

    const tween = gsap.fromTo(
      el,
      { x: 0 },
      {
        x: -80,
        ease: "none",
        scrollTrigger: {
          trigger: el,
          start: "top 80%",
          end: "bottom 20%",
          scrub: 1.5,
          invalidateOnRefresh: true,
        },
      }
    );

    return () => {
      tween.scrollTrigger?.kill();
      tween.kill();
      gsap.set(el, { clearProps: "transform" });
    };
  }, []);

  return null;
}
