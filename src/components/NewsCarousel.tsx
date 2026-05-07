"use client";

import { useState } from "react";

type NewsItem = {
  img: string;
  title: string;
  description: string;
};

export default function NewsCarousel({ items }: { items: readonly NewsItem[] }) {
  const [current, setCurrent] = useState(0);

  return (
    <div className="w-full">
      <div className="overflow-hidden w-full">
        <div
          className="flex transition-transform duration-300 ease-in-out"
          style={{ transform: `translateX(-${current * 100}%)` }}
        >
          {items.map(({ img, title, description }, i) => (
            <div key={i} className="flex-none w-full flex flex-col gap-4" style={{ fontFamily: "var(--font-inter)" }}>
              <div className="relative h-[398px] w-full overflow-hidden">
                <img src={img} alt="" className="absolute inset-0 w-full h-full object-cover pointer-events-none" />
              </div>
              <p className="text-[18px] font-black leading-[1.1] text-black uppercase tracking-[-0.04em]">
                {title}
              </p>
              <p className="text-[14px] font-normal text-[#1f1f1f] tracking-[-0.56px] leading-[1.3]">
                {description}
              </p>
              <div className="border-b border-black flex gap-[10px] items-center py-1 shrink-0 w-fit">
                <span className="text-[14px] font-medium text-black tracking-[-0.56px] whitespace-nowrap">Read more</span>
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden>
                  <path d="M4.5 13.5L13.5 4.5M13.5 4.5H7.5M13.5 4.5V10.5" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="flex justify-center gap-2 mt-5">
        {items.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            aria-label={`Go to slide ${i + 1}`}
            className={`rounded-full transition-all duration-200 ${
              i === current ? "w-5 h-2 bg-black" : "w-2 h-2 bg-[#ccc]"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
