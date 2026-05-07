"use client";

import { useState } from "react";

type Testimonial = {
  logo: string;
  logoW: number;
  logoH: number;
  quote: string;
  author: string;
};

export default function TestimonialCarousel({ items }: { items: readonly Testimonial[] }) {
  const [current, setCurrent] = useState(0);

  return (
    <div className="md:hidden mt-8 w-full">
      {/* Card */}
      <div className="overflow-hidden w-full">
        <div
          className="flex transition-transform duration-300 ease-in-out"
          style={{ transform: `translateX(-${current * 100}%)` }}
        >
          {items.map(({ logo, logoW, logoH, quote, author }) => (
            <div key={author} className="flex-none w-full px-4">
              <div
                className="bg-[#f1f1f1] border border-[#ddd] rounded-[4px] p-6 flex flex-col gap-4 w-full"
                style={{ fontFamily: "var(--font-inter)" }}
              >
                <div className="relative shrink-0" style={{ width: logoW, height: logoH }}>
                  <img src={logo} alt="" className="absolute inset-0 w-full h-full" />
                </div>
                <p className="text-[18px] font-normal leading-[1.3] text-[#1f1f1f] tracking-[-0.72px]">
                  {quote}
                </p>
                <p className="text-[16px] font-black leading-[1.1] text-black uppercase tracking-[-0.64px]">
                  {author}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Dots */}
      <div className="flex justify-center gap-2 mt-5">
        {items.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            aria-label={`Go to slide ${i + 1}`}
            className={`rounded-full transition-all duration-200 ${
              i === current
                ? "w-5 h-2 bg-black"
                : "w-2 h-2 bg-[#ccc]"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
