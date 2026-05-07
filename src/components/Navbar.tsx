"use client";

import { useState, useEffect, useCallback } from "react";
import MobileMenu from "./MobileMenu";
import NavLinks from "./NavLinks";
import TalkButton from "./TalkButton";

export default function Navbar() {
  const [isDark, setIsDark] = useState(false);

  const checkTheme = useCallback(() => {
    const navMidY = 44; // vertical midpoint of the 89px navbar
    const darkSections = document.querySelectorAll<HTMLElement>("[data-nav-dark]");

    for (const section of darkSections) {
      const { top, bottom } = section.getBoundingClientRect();
      if (top <= navMidY && bottom >= navMidY) {
        setIsDark(true);
        return;
      }
    }
    setIsDark(false);
  }, []);

  useEffect(() => {
    checkTheme();
    window.addEventListener("scroll", checkTheme, { passive: true });
    return () => window.removeEventListener("scroll", checkTheme);
  }, [checkTheme]);

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between py-6 px-4 md:px-8 md:h-[89px] md:py-0"
      style={{ fontFamily: "var(--font-inter)" }}
    >
      <span
        className="font-semibold text-base capitalize tracking-[-0.04em] transition-colors duration-300"
        style={{ color: isDark ? "white" : "black" }}
      >
        H.Studio
      </span>

      <MobileMenu isDark={isDark} />
      <NavLinks isDark={isDark} />

      <TalkButton
        variant={isDark ? "light" : "dark"}
        className="hidden md:flex tracking-[-0.04em]"
      />
    </nav>
  );
}
