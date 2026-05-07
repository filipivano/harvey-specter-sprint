"use client";

import { useEffect } from "react";
import { gsap, ScrollTrigger } from "@/lib/gsap";

export default function AboutPhotoCurtain() {
  useEffect(() => {
    const img = document.querySelector<HTMLElement>("#about-photo-img");
    if (!img) return;

    // clip-path on the image itself — can never bleed outside the image bounds
    const tween = gsap.fromTo(
      img,
      { clipPath: "inset(0 100% 0 0)" },
      {
        clipPath: "inset(0 0% 0 0)",
        ease: "none",
        scrollTrigger: {
          trigger: img,
          start: "top 80%",
          end: "center 30%",
          scrub: 1,
          invalidateOnRefresh: true,
        },
      }
    );

    return () => {
      tween.scrollTrigger?.kill();
      tween.kill();
      gsap.set(img, { clearProps: "clipPath" });
    };
  }, []);

  return null;
}
