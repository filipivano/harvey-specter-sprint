"use client";

import { useEffect } from "react";
import { gsap, ScrollTrigger } from "@/lib/gsap";

function splitIntoWordSpans(el: HTMLElement): HTMLElement[] {
  const words: HTMLElement[] = [];
  const frag = document.createDocumentFragment();

  Array.from(el.childNodes).forEach((node) => {
    if (node.nodeType === Node.TEXT_NODE) {
      (node.textContent ?? "").split(/(\s+)/).forEach((token) => {
        if (/\S/.test(token)) {
          const s = document.createElement("span");
          s.style.display = "inline-block";
          s.textContent = token;
          frag.appendChild(s);
          words.push(s);
        } else if (token) {
          frag.appendChild(document.createTextNode(token));
        }
      });
    } else if (node.nodeType === Node.ELEMENT_NODE) {
      const s = document.createElement("span");
      s.style.display = "inline-block";
      s.appendChild(node.cloneNode(true));
      frag.appendChild(s);
      words.push(s);
    }
  });

  el.innerHTML = "";
  el.appendChild(frag);
  return words;
}

export default function AboutAnimation() {
  useEffect(() => {
    const textBlock = document.querySelector<HTMLElement>("[data-about-text]");
    if (!textBlock || getComputedStyle(textBlock).display === "none") return;

    const lines = Array.from(
      textBlock.querySelectorAll<HTMLElement>("[data-about-line]")
    );
    if (!lines.length) return;

    // Snapshot for Strict-Mode double-invoke cleanup
    const originals = lines.map((el) => el.innerHTML);
    const words = lines.flatMap(splitIntoWordSpans);
    if (!words.length) return;

    // All words start as light gray
    words.forEach((w) => (w.style.color = "rgb(212,212,212)"));

    const n = words.length;

    const st = ScrollTrigger.create({
      trigger: textBlock,
      start: "top 80%",
      end: "bottom 20%",
      scrub: true,
      invalidateOnRefresh: true,
      onUpdate(self) {
        // Interpolate each word from rgb(212,212,212) → rgb(0,0,0)
        words.forEach((word, i) => {
          const fill = Math.max(0, Math.min(1, self.progress * n - i));
          const v = Math.round(212 * (1 - fill));
          word.style.color = `rgb(${v},${v},${v})`;
        });
      },
    });

    return () => {
      st.kill();
      lines.forEach((el, i) => (el.innerHTML = originals[i]));
    };
  }, []);

  return null;
}
