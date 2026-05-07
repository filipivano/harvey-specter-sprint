"use client";

import { useEffect } from "react";
import { gsap, ScrollTrigger } from "@/lib/gsap";

export default function FullbleedBlur() {
  useEffect(() => {
    const img = document.querySelector<HTMLElement>("#fullbleed-img");
    const section = document.querySelector<HTMLElement>("#fullbleed-section");
    if (!img || !section) return;

    gsap.set(img, { filter: "blur(20px)", scale: 1.05 });

    const tween = gsap.to(img, {
      filter: "blur(0px)",
      scale: 1,
      ease: "none",
      scrollTrigger: {
        trigger: section,
        start: "top bottom",
        end: "center center",
        scrub: 1.5,
        invalidateOnRefresh: true,
      },
    });

    return () => {
      tween.scrollTrigger?.kill();
      tween.kill();
      gsap.set(img, { clearProps: "filter,scale" });
    };
  }, []);

  return null;
}
