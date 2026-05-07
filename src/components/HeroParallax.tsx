"use client";

import { useEffect } from "react";
import { gsap, ScrollTrigger } from "@/lib/gsap";

export default function HeroParallax() {
  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: "#hero-section",
          start: "top top",
          end: "bottom top",
          scrub: 1.5,
          invalidateOnRefresh: true,
        },
      });

      // background grows
      tl.to("#hero-bg", { scale: 1.4, ease: "none" }, 0);

      // harvey + hello i'm exit left together
      tl.to("#hero-harvey", { x: "-120vw", ease: "none" }, 0);
      tl.to("#hero-hello",  { x: "-120vw", ease: "none" }, 0);

      // specter exits right
      tl.to("#hero-specter", { x: "120vw", ease: "none" }, 0);
    });

    return () => ctx.revert();
  }, []);

  return null;
}
