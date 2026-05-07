import { client } from "@/sanity/lib/client";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

type NewsItem = {
  _id: string;
  title: string;
  description: string;
  img: string | null;
  category: string | null;
  publishedAt: string | null;
  order: number;
};

const NEWS_QUERY = `*[_type == "newsItem"] | order(order asc) {
  _id,
  title,
  description,
  "img": select(
    defined(coverImage.asset) => coverImage.asset->url,
    coverImageUrl
  ),
  category,
  publishedAt,
  order
}`;

function formatDate(iso: string | null) {
  if (!iso) return null;
  return new Date(iso).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" });
}

export default async function NewsPage() {
  const news = await client.fetch<NewsItem[]>(NEWS_QUERY);

  return (
    <>
      <Navbar />
      <main className="relative z-[1]">

        {/* ── Hero ── */}
        <section className="bg-white px-4 pt-[120px] pb-8 md:px-8 md:pt-[160px] md:pb-[48px]">
          <div style={{ fontFamily: "var(--font-inter)" }}>
            <div className="flex items-center justify-center w-full mb-1 md:justify-start md:pl-[18px]">
              <p
                className="text-[14px] font-normal uppercase text-[#1f1f1f] leading-[1.1]"
                style={{ fontFamily: "var(--font-geist-mono)" }}
              >
                [ H.Studio ]
              </p>
            </div>
            <h1
              className="
                w-full text-center text-black font-medium capitalize
                text-[26vw] tracking-[-0.07em] leading-[0.85]
                md:text-[13.75vw] md:leading-[1.0] md:whitespace-nowrap
              "
            >
              News
            </h1>
          </div>
        </section>

        {/* ── News list ── */}
        <section className="bg-[#f3f3f3] px-4 py-[80px] md:px-8 md:py-[120px]">

          {/* Desktop — vertical column matching services layout */}
          <div className="hidden md:flex flex-col gap-[48px] w-full">

            {/* Section label */}
            <p
              className="text-[14px] font-normal leading-[1.1] text-[#1f1f1f] uppercase"
              style={{ fontFamily: "var(--font-geist-mono)" }}
            >
              [ news ]
            </p>

            {/* Count + heading */}
            <div
              className="flex items-center justify-between w-full uppercase text-black font-light tracking-[-0.08em] leading-none whitespace-nowrap text-[96px]"
              style={{ fontFamily: "var(--font-inter)" }}
            >
              <span>[{news.length}]</span>
              <span>Articles</span>
            </div>

            {/* News rows */}
            <div className="flex flex-col gap-[80px]">
              {news.map((item, i) => (
                <NewsRow key={item._id} item={item} index={i} />
              ))}
            </div>
          </div>

          {/* Mobile — stacked cards */}
          <div className="md:hidden flex flex-col gap-8">
            <p
              className="text-[32px] font-light text-black uppercase tracking-[-2.56px] leading-[0.86]"
              style={{ fontFamily: "var(--font-inter)" }}
            >
              Keep up with<br />my latest news<br />&amp; achievements
            </p>
            <div className="flex flex-col gap-12">
              {news.map((item) => (
                <div key={item._id} className="flex flex-col gap-3">
                  <div className="relative h-[280px] w-full overflow-hidden">
                    <img
                      src={item.img ?? ""}
                      alt=""
                      className="absolute inset-0 w-full h-full object-cover"
                    />
                    {item.category && (
                      <span
                        className="absolute top-3 left-3 backdrop-blur-[10px] bg-[rgba(255,255,255,0.3)] px-2 py-1 rounded-[24px] text-[11px] font-medium text-[#111] uppercase"
                        style={{ fontFamily: "var(--font-geist-mono)" }}
                      >
                        {item.category}
                      </span>
                    )}
                  </div>
                  {item.publishedAt && (
                    <p className="text-[12px] font-normal text-[#999] uppercase tracking-[0.04em]" style={{ fontFamily: "var(--font-geist-mono)" }}>
                      {formatDate(item.publishedAt)}
                    </p>
                  )}
                  <p className="text-[18px] font-black leading-[1.1] text-black uppercase tracking-[-0.04em]" style={{ fontFamily: "var(--font-inter)" }}>
                    {item.title}
                  </p>
                  <p className="text-[14px] font-normal text-[#1f1f1f] tracking-[-0.56px] leading-[1.3]" style={{ fontFamily: "var(--font-inter)" }}>
                    {item.description}
                  </p>
                  <div className="border-b border-black flex gap-[10px] items-center py-1 w-fit" style={{ fontFamily: "var(--font-inter)" }}>
                    <span className="text-[14px] font-medium text-black tracking-[-0.56px]">Read more</span>
                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden>
                      <path d="M4.5 13.5L13.5 4.5M13.5 4.5H7.5M13.5 4.5V10.5" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </section>

      </main>

      <Footer />
    </>
  );
}

function NewsRow({ item, index }: { item: NewsItem; index: number }) {
  return (
    <div className="flex flex-col gap-4 md:gap-6">

      {/* Number + divider */}
      <div className="flex flex-col gap-[9px]">
        <p
          className="text-[14px] font-normal leading-[1.1] text-[#1f1f1f] uppercase"
          style={{ fontFamily: "var(--font-geist-mono)" }}
        >
          [ {index + 1} ]
        </p>
        <div className="w-full border-t border-[#1f1f1f]" />
      </div>

      {/* Title */}
      <p
        className="text-[36px] md:text-[64px] font-bold italic leading-[1.0] text-black uppercase tracking-[-0.04em]"
        style={{ fontFamily: "var(--font-inter)" }}
      >
        {item.title}
      </p>

      {/* Image + right column */}
      <div className="flex flex-col gap-6 md:flex-row md:gap-8 md:items-start">

        {/* Image */}
        {item.img && (
          <div className="w-full md:w-[480px] md:shrink-0 aspect-[4/3] overflow-hidden">
            <img src={item.img} alt="" className="w-full h-full object-cover" />
          </div>
        )}

        {/* Meta + description + read more */}
        <div className="flex flex-col gap-5 flex-1">

          {/* Category + date */}
          <div className="flex gap-4 items-center">
            {item.category && (
              <span
                className="text-[12px] font-normal text-[#1f1f1f] uppercase tracking-[0.04em]"
                style={{ fontFamily: "var(--font-geist-mono)" }}
              >
                [ {item.category} ]
              </span>
            )}
            {item.publishedAt && (
              <span
                className="text-[12px] font-normal text-[#999] uppercase tracking-[0.04em]"
                style={{ fontFamily: "var(--font-geist-mono)" }}
              >
                {formatDate(item.publishedAt)}
              </span>
            )}
          </div>

          {/* Description in corner brackets */}
          <div className="relative p-3">
            <span className="absolute top-0 left-0 w-4 h-4 border-t border-l border-[#1f1f1f]" />
            <span className="absolute top-0 right-0 w-4 h-4 border-t border-r border-[#1f1f1f]" />
            <span className="absolute bottom-0 left-0 w-4 h-4 border-b border-l border-[#1f1f1f]" />
            <span className="absolute bottom-0 right-0 w-4 h-4 border-b border-r border-[#1f1f1f]" />
            <p
              className="text-[14px] font-normal leading-[1.4] text-[#1f1f1f] tracking-[-0.04em]"
              style={{ fontFamily: "var(--font-inter)" }}
            >
              {item.description}
            </p>
          </div>

          {/* Read more */}
          <div className="group flex items-center gap-[10px] border-b border-[#1f1f1f] pb-1 w-fit cursor-pointer hover:gap-4 transition-all duration-300">
            <span
              className="text-[14px] font-medium text-[#1f1f1f] tracking-[-0.56px] whitespace-nowrap"
              style={{ fontFamily: "var(--font-inter)" }}
            >
              Read more
            </span>
            <svg
              width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden
              className="transition-transform duration-300 ease-out group-hover:-translate-y-[3px] group-hover:translate-x-[3px]"
            >
              <path d="M4.5 13.5L13.5 4.5M13.5 4.5H7.5M13.5 4.5V10.5" stroke="#1f1f1f" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>

        </div>
      </div>

    </div>
  );
}
