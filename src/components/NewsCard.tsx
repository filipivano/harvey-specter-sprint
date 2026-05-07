type Props = {
  title: string;
  description: string;
  img: string;
  category?: string | null;
  offset?: boolean;
};

export default function NewsCard({ title, description, img, category, offset = false }: Props) {
  return (
    <div
      className={`group flex flex-col gap-4 items-start shrink-0 w-[353px] cursor-pointer ${offset ? "pt-[120px]" : ""}`}
      style={{ fontFamily: "var(--font-inter)" }}
    >
      {/* Image */}
      <div className="relative h-[320px] w-full shrink-0 overflow-hidden">
        <img
          src={img}
          alt=""
          className="absolute inset-0 w-full h-full object-cover pointer-events-none transition-transform duration-700 ease-out group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/15 transition-colors duration-500" />
        {category && (
          <span
            className="absolute top-3 left-3 backdrop-blur-[10px] bg-[rgba(255,255,255,0.3)] px-2 py-1 rounded-[24px] text-[11px] font-medium text-[#111] tracking-[-0.02em] uppercase"
            style={{ fontFamily: "var(--font-geist-mono)" }}
          >
            {category}
          </span>
        )}
      </div>

      {/* Title */}
      <p className="text-[18px] font-black leading-[1.1] text-black uppercase tracking-[-0.04em] transition-transform duration-300 ease-out group-hover:translate-x-1">
        {title}
      </p>

      {/* Description */}
      <p className="text-[14px] font-normal text-[#1f1f1f] tracking-[-0.56px] leading-[1.3] flex-1 transition-opacity duration-300 group-hover:opacity-50">
        {description}
      </p>

      {/* Read more */}
      <div className="border-b border-black flex gap-[10px] items-center py-1 shrink-0 w-full group-hover:gap-[16px] transition-all duration-300">
        <span className="text-[14px] font-medium text-black tracking-[-0.56px] whitespace-nowrap">Read more</span>
        <svg
          width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden
          className="transition-transform duration-300 ease-out group-hover:-translate-y-[3px] group-hover:translate-x-[3px]"
        >
          <path d="M4.5 13.5L13.5 4.5M13.5 4.5H7.5M13.5 4.5V10.5" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>
    </div>
  );
}
