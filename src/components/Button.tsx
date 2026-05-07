"use client";

import { useRef } from "react";
import { gsap } from "@/lib/gsap";

type Variant = "dark" | "outline-white" | "light";

const variantConfig: Record<Variant, { base: string; fill: string }> = {
  dark:            { base: "bg-black border border-black",          fill: "bg-white"  },
  "outline-white": { base: "border border-white",                   fill: "bg-white"  },
  light:           { base: "bg-white border border-white",          fill: "bg-black"  },
};

type Props = {
  children: React.ReactNode;
  variant?: Variant;
  className?: string;
  style?: React.CSSProperties;
  onClick?: () => void;
};

export default function Button({ children, variant = "dark", className = "", style, onClick }: Props) {
  const buttonRef = useRef<HTMLButtonElement>(null);
  const fillRef   = useRef<HTMLSpanElement>(null);
  const { base, fill } = variantConfig[variant];

  const onEnter = () => {
    gsap.fromTo(
      fillRef.current,
      { scaleX: 0, transformOrigin: "left center" },
      { scaleX: 1, duration: 0.4, ease: "power2.inOut" }
    );
  };

  const onMove = (e: React.MouseEvent<HTMLButtonElement>) => {
    const btn = buttonRef.current;
    if (!btn) return;
    const { left, top, width, height } = btn.getBoundingClientRect();
    const x = (e.clientX - (left + width  / 2)) * 0.25;
    const y = (e.clientY - (top  + height / 2)) * 0.25;
    gsap.to(btn, { x, y, rotation: x * 0.1, duration: 0.35, ease: "power2.out" });
  };

  const onLeave = () => {
    gsap.to(fillRef.current, {
      scaleX: 0,
      transformOrigin: "right center",
      duration: 0.35,
      ease: "power2.inOut",
    });
    gsap.to(buttonRef.current, {
      x: 0, y: 0, rotation: 0,
      duration: 0.7, ease: "elastic.out(1, 0.4)",
    });
  };

  return (
    <button
      ref={buttonRef}
      className={`relative overflow-hidden text-[14px] font-medium px-4 py-3 rounded-[24px] ${base} ${className}`}
      style={style}
      onMouseEnter={onEnter}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
    >
      {/* sweeping fill — scales in from left, out to right */}
      <span
        ref={fillRef}
        className={`absolute inset-0 ${fill}`}
        style={{ transform: "scaleX(0)", transformOrigin: "left center" }}
      />

      {/* text inverts automatically as fill passes over it */}
      <span className="relative z-10 pointer-events-none text-white mix-blend-difference">
        {children}
      </span>
    </button>
  );
}
