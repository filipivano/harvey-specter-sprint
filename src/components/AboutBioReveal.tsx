"use client";

import { useEffect } from "react";
import { gsap, ScrollTrigger } from "@/lib/gsap";

export default function AboutBioReveal() {
  useEffect(() => {
    const el = document.querySelector<HTMLElement>("#about-bio-text");
    if (!el) return;

    const tween = gsap.fromTo(
      el,
      { x: -72, autoAlpha: 0 },
      {
        x: 0,
        autoAlpha: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: el,
          start: "top 80%",
          end: "top 30%",
          scrub: 1.2,
          invalidateOnRefresh: true,
        },
      }
    );

    return () => {
      tween.scrollTrigger?.kill();
      tween.kill();
      gsap.set(el, { clearProps: "transform,opacity,visibility" });
    };
  }, []);

  return null;
}
