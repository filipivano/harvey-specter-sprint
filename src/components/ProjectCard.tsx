type Props = {
  title: string;
  tags: string[];
  img: string;
  tall: boolean;
  mobile?: boolean;
  link?: string | null;
};

export default function ProjectCard({ title, tags, img, tall, mobile = false, link }: Props) {
  const imgHeight = mobile
    ? "h-[390px]"
    : tall ? "h-[744px]" : "h-[699px]";

  const inner = (
    <>
      <div className={`relative w-full overflow-hidden flex flex-col justify-end pb-4 pl-4 ${imgHeight}`}>
        <img
          src={img}
          alt=""
          className="absolute inset-0 w-full h-full object-cover pointer-events-none transition-transform duration-700 ease-out group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-500" />
        <div className="relative flex gap-3 items-center">
          {tags.map(tag => (
            <span
              key={tag}
              className="backdrop-blur-[10px] bg-[rgba(255,255,255,0.3)] group-hover:bg-[rgba(255,255,255,0.55)] px-2 py-1 rounded-[24px] text-[14px] font-medium text-[#111] tracking-[-0.04em] whitespace-nowrap transition-colors duration-300"
              style={{ fontFamily: "var(--font-inter)" }}
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
      <div className="flex items-center justify-between">
        <p
          className="font-black leading-[1.1] text-black uppercase tracking-[-0.04em] whitespace-nowrap transition-transform duration-300 ease-out group-hover:translate-x-2
                     text-[24px] md:text-[36px]"
          style={{ fontFamily: "var(--font-inter)" }}
        >
          {title}
        </p>
        <svg
          width="20" height="20" viewBox="0 0 32 32" fill="none" aria-hidden
          className="shrink-0 size-5 md:size-8 [stroke-width:2.5] md:[stroke-width:4] transition-transform duration-300 ease-out group-hover:-translate-y-1 group-hover:translate-x-1"
        >
          <path d="M8 24L24 8M24 8H12M24 8V20" stroke="black" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>
    </>
  );

  const sharedClass = "group flex flex-col gap-[10px] cursor-pointer";

  if (link) {
    return (
      <a href={link} target="_blank" rel="noopener noreferrer" className={sharedClass}>
        {inner}
      </a>
    );
  }
  return <div className={sharedClass}>{inner}</div>;
}
