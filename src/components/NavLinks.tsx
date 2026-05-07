"use client";

import { useRef } from "react";
import { gsap } from "@/lib/gsap";

const NAV_LINKS = [
  { label: "About",    href: "/about"    },
  { label: "Services", href: "/services" },
  { label: "Projects", href: "/projects" },
  { label: "News",     href: "/news"     },
  { label: "Contact",  href: "/contact"  },
];

type Props = { isDark?: boolean };

export default function NavLinks({ isDark = false }: Props) {
  const underlineRefs = useRef<(HTMLSpanElement | null)[]>([]);

  return (
    <ul className="hidden md:flex items-center gap-14 list-none font-semibold text-base capitalize tracking-[-0.04em]">
      {NAV_LINKS.map(({ label, href }, i) => (
        <li key={label}>
          <a
            href={href}
            className="relative pb-0.5 transition-colors duration-500"
            style={{ color: isDark ? "white" : "black" }}
            onMouseEnter={() =>
              gsap.to(underlineRefs.current[i], { scaleX: 1, duration: 0.3, ease: "power2.out" })
            }
            onMouseLeave={() =>
              gsap.to(underlineRefs.current[i], { scaleX: 0, duration: 0.25, ease: "power2.in" })
            }
          >
            {label}
            <span
              ref={(el: HTMLSpanElement | null) => { underlineRefs.current[i] = el; }}
              className="absolute bottom-0 left-0 h-px w-full origin-left transition-colors duration-500"
              style={{ transform: "scaleX(0)", backgroundColor: isDark ? "white" : "black" }}
            />
          </a>
        </li>
      ))}
    </ul>
  );
}
