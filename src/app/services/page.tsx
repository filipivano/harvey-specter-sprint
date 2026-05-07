import { client } from "@/sanity/lib/client";
import Navbar from "@/components/Navbar";
import Button from "@/components/Button";
import FooterReveal from "@/components/FooterReveal";

const FULLBLEED_PHOTO =
  "https://www.figma.com/api/mcp/asset/f78bd178-5dda-4536-81eb-66bd9fb6ca7d";

type ServiceItem = {
  _id: string;
  title: string;
  description: string;
  img: string | null;
  deliverables: string[];
  order: number;
};

const SERVICE_QUERY = `*[_type == "service"] | order(order asc) {
  _id,
  title,
  description,
  "img": select(
    defined(coverImage.asset) => coverImage.asset->url,
    coverImageUrl
  ),
  deliverables,
  order
}`;

export default async function ServicesPage() {
  const services = await client.fetch<ServiceItem[]>(SERVICE_QUERY);

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
              Services
            </h1>
          </div>
        </section>

        {/* ── Services label + count ── */}
        <section
          data-nav-dark
          className="bg-black flex flex-col px-4 py-12 gap-8 md:px-8 md:py-[80px] md:gap-[48px]"
        >
          <p
            className="text-[14px] font-normal leading-[1.1] text-white uppercase"
            style={{ fontFamily: "var(--font-geist-mono)" }}
          >
            [ services ]
          </p>
          <div
            className="flex items-center justify-between w-full uppercase text-white font-light tracking-[-0.08em] leading-none whitespace-nowrap
                       text-[32px] md:text-[96px]"
            style={{ fontFamily: "var(--font-inter)" }}
          >
            <span>[{services.length}]</span>
            <span>Deliverables</span>
          </div>

          {/* Service rows */}
          <div className="flex flex-col gap-[64px] md:gap-[96px]">
            {services.map((svc, i) => (
              <ServiceRow key={svc._id} svc={svc} index={i} />
            ))}
          </div>
        </section>

        {/* ── Full-bleed photo ── */}
        <section className="relative w-full h-[565px] md:h-[900px] overflow-hidden">
          <img
            src={FULLBLEED_PHOTO}
            alt=""
            className="absolute inset-0 w-full h-full object-cover object-center pointer-events-none"
          />
        </section>

        {/* ── CTA ── */}
        <section className="bg-[#F5F5F4] px-4 py-16 md:px-8 md:py-[120px]">
          <div className="flex flex-col gap-6 items-center text-center md:gap-8">
            <p
              className="text-[14px] font-normal leading-[1.1] text-[#1f1f1f] uppercase"
              style={{ fontFamily: "var(--font-geist-mono)" }}
            >
              [ Let&apos;s work together ]
            </p>
            <p
              className="text-[32px] md:text-[64px] font-light text-black uppercase tracking-[-0.08em] leading-[0.86]"
              style={{ fontFamily: "var(--font-inter)" }}
            >
              Have a project<br />in mind?
            </p>
            <Button variant="dark" style={{ fontFamily: "var(--font-inter)", letterSpacing: "-0.56px" }}>
              Let&apos;s talk
            </Button>
          </div>
        </section>

      </main>

      <FooterReveal />

      {/* ── Footer ── */}
      <footer id="site-footer" className="sticky bottom-0 z-0 bg-black pt-[48px] px-4 md:px-8" data-nav-dark style={{ fontFamily: "var(--font-inter)" }}>

        {/* Desktop */}
        <div className="hidden md:flex flex-col gap-[120px]">
          <div className="flex flex-col gap-[48px] w-full">
            <div className="flex items-start justify-between w-full">
              <div className="flex flex-col gap-3 w-[298px]">
                <p className="text-[24px] font-light italic text-white uppercase tracking-[-0.96px] leading-[1.1]">
                  Have a <strong className="font-black not-italic">project</strong> in mind?
                </p>
                <Button variant="outline-white" className="w-fit tracking-[-0.56px]">
                  Let&apos;s talk
                </Button>
              </div>
              <div className="text-[18px] font-normal text-white uppercase tracking-[-0.72px] text-center w-[298px]">
                <p className="leading-[1.1]">Facebook</p>
                <p className="leading-[1.1]">Instagram</p>
              </div>
              <div className="text-[18px] font-normal text-white uppercase tracking-[-0.72px] text-right w-[298px]">
                <p className="leading-[1.1]">X.com</p>
                <p className="leading-[1.1]">Linkedin</p>
              </div>
            </div>
            <div className="w-full border-t border-white" />
          </div>
          <div className="flex items-end justify-between w-full">
            <div className="relative h-[219px] overflow-hidden shrink-0 w-[1093px]">
              <p
                className="absolute whitespace-nowrap text-[290px] font-semibold text-white capitalize tracking-[-17.4px] leading-[0.8]"
                style={{ top: 0, left: "5px" }}
              >
                H.Studio
              </p>
              <div className="absolute left-0 top-0 bottom-0 flex items-center justify-center w-[15px]">
                <p
                  className="-rotate-90 whitespace-nowrap text-[14px] font-normal text-white uppercase leading-[1.1]"
                  style={{ fontFamily: "var(--font-geist-mono)" }}
                >
                  [ Coded By Claude ]
                </p>
              </div>
            </div>
            <div className="flex gap-[34px] items-center pb-8 text-[12px] font-normal text-white uppercase tracking-[-0.48px] whitespace-nowrap">
              <a href="#" className="underline">Licences</a>
              <a href="#" className="underline">Privacy policy</a>
            </div>
          </div>
        </div>

        {/* Mobile */}
        <div className="md:hidden flex flex-col gap-[48px]">
          <div className="flex flex-col gap-[24px]">
            <div className="flex flex-col gap-[16px]">
              <div className="flex flex-col gap-3">
                <p className="text-[24px] font-light italic text-white uppercase tracking-[-0.96px] leading-[1.1]">
                  Have a <strong className="font-black not-italic">project</strong> in mind?
                </p>
                <Button variant="outline-white" className="w-fit tracking-[-0.56px]">
                  Let&apos;s talk
                </Button>
              </div>
              {["Facebook", "Instagram", "X.com", "Linkedin"].map((s) => (
                <p key={s} className="text-[18px] font-normal text-white uppercase tracking-[-0.72px] leading-[1.1]">{s}</p>
              ))}
            </div>
            <div className="w-full border-t border-white" />
          </div>
          <div className="flex flex-col gap-[16px] h-[150px] items-center w-full whitespace-nowrap">
            <div className="flex gap-[34px] items-center pb-8 text-[12px] font-normal text-white uppercase tracking-[-0.48px]">
              <a href="#" className="underline">Licences</a>
              <a href="#" className="underline">Privacy policy</a>
            </div>
            <div className="flex flex-col gap-3 items-start overflow-clip w-full">
              <p className="text-[10px] font-normal text-white uppercase leading-[1.1]" style={{ fontFamily: "var(--font-geist-mono)" }}>
                [ Coded By Claude ]
              </p>
              <p className="text-[91.425px] font-semibold text-white capitalize tracking-[-5.4855px] leading-[0.8]">
                H.Studio
              </p>
            </div>
          </div>
        </div>

      </footer>
    </>
  );
}

function ServiceRow({ svc, index }: { svc: ServiceItem; index: number }) {
  return (
    <div className="flex flex-col gap-4 md:gap-6">

      {/* Number + full-width divider */}
      <div className="flex flex-col gap-[9px]">
        <p
          className="text-[14px] font-normal leading-[1.1] text-white uppercase"
          style={{ fontFamily: "var(--font-geist-mono)" }}
        >
          [ {index + 1} ]
        </p>
        <div className="w-full border-t border-white" />
      </div>

      {/* Title */}
      <p
        className="text-[36px] md:text-[64px] font-bold italic leading-[1.0] text-white uppercase tracking-[-0.04em]"
        style={{ fontFamily: "var(--font-inter)" }}
      >
        {svc.title}
      </p>

      {/* Image + right column — stacked mobile, side-by-side desktop */}
      <div className="flex flex-col gap-6 md:flex-row md:gap-8 md:items-start">

        {/* Image */}
        {svc.img && (
          <div className="w-full md:w-[480px] md:shrink-0 aspect-[4/3] overflow-hidden">
            <img
              src={svc.img}
              alt=""
              className="w-full h-full object-cover"
            />
          </div>
        )}

        {/* Description + deliverables */}
        <div className="flex flex-col gap-6 flex-1">

          {/* Description in corner brackets */}
          <div className="relative p-3">
            <span className="absolute top-0 left-0 w-4 h-4 border-t border-l border-white" />
            <span className="absolute top-0 right-0 w-4 h-4 border-t border-r border-white" />
            <span className="absolute bottom-0 left-0 w-4 h-4 border-b border-l border-white" />
            <span className="absolute bottom-0 right-0 w-4 h-4 border-b border-r border-white" />
            <p
              className="text-[14px] font-normal leading-[1.4] text-white tracking-[-0.04em]"
              style={{ fontFamily: "var(--font-inter)" }}
            >
              {svc.description}
            </p>
          </div>

          {/* Deliverables */}
          {svc.deliverables?.length > 0 && (
            <div className="flex flex-col gap-3">
              <p
                className="text-[14px] font-normal leading-[1.1] text-white uppercase"
                style={{ fontFamily: "var(--font-geist-mono)" }}
              >
                [ what&apos;s included ]
              </p>
              <div className="flex flex-col gap-2">
                {svc.deliverables.map((d) => (
                  <div key={d} className="flex items-center gap-3 group/d">
                    <div className="w-1 h-1 rounded-full bg-white shrink-0" />
                    <p
                      className="text-[14px] font-normal leading-[1.3] text-white tracking-[-0.04em] group-hover/d:opacity-60 transition-opacity duration-200"
                      style={{ fontFamily: "var(--font-inter)" }}
                    >
                      {d}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}

        </div>
      </div>

    </div>
  );
}
