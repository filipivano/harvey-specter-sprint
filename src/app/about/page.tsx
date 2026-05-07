import Navbar from "@/components/Navbar";
import Button from "@/components/Button";
import FooterReveal from "@/components/FooterReveal";

const ABOUT_PHOTO =
  "https://www.figma.com/api/mcp/asset/998407b9-a4cb-4e35-83c8-4078be6273f0";
const FULLBLEED_PHOTO =
  "https://www.figma.com/api/mcp/asset/f78bd178-5dda-4536-81eb-66bd9fb6ca7d";

const SKILLS = [
  { num: "[ 1 ]", title: "Brand Identity",  years: "8+ yrs" },
  { num: "[ 2 ]", title: "Art Direction",   years: "6+ yrs" },
  { num: "[ 3 ]", title: "Web Design",      years: "7+ yrs" },
  { num: "[ 4 ]", title: "Photography",     years: "5+ yrs" },
  { num: "[ 5 ]", title: "Motion Design",   years: "4+ yrs" },
] as const;

const TIMELINE = [
  { year: "2016", title: "Started freelancing",  desc: "Began taking on brand identity clients from my hometown on the south side of Chicago." },
  { year: "2018", title: "First award",           desc: "Received the Young Creatives Award at the Chicago Design Festival." },
  { year: "2020", title: "Studio launch",         desc: "Founded H.Studio officially, expanding to a full-service creative operation." },
  { year: "2022", title: "Global reach",          desc: "Worked with clients across 12 countries on brand, web, and campaign projects." },
  { year: "2024", title: "Today",                 desc: "Leading H.Studio with a team of 6 specializing in brand, web design, and photography." },
] as const;

export default function AboutPage() {
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
                text-[36vw] tracking-[-0.07em] leading-[0.85]
                md:text-[20vw] md:leading-[1.0] md:whitespace-nowrap
              "
            >
              About
            </h1>
          </div>
        </section>

        {/* ── Identity ── */}
        <section className="bg-[#F5F5F4] px-4 py-12 md:px-8 md:py-[120px]">
          <div className="flex flex-col gap-3 items-end w-full mb-6">
            <p
              className="text-[14px] font-normal leading-[1.1] text-[#1f1f1f] uppercase text-right"
              style={{ fontFamily: "var(--font-geist-mono)" }}
            >
              [ 8+ years in industry ]
            </p>
            <div className="w-full border-t border-[#1f1f1f]" />
          </div>

          {/* Mobile */}
          <div
            className="md:hidden flex flex-col gap-2 items-center w-full uppercase"
            style={{ fontFamily: "var(--font-inter)" }}
          >
            <div className="flex flex-col gap-3 items-center">
              <p className="text-[14px] font-normal leading-[1.1] text-[#1f1f1f]" style={{ fontFamily: "var(--font-geist-mono)" }}>
                001
              </p>
              <p className="text-[32px] font-light text-black tracking-[-0.08em] leading-[0.84] whitespace-nowrap">
                Creative director&nbsp;&nbsp;&nbsp;/
              </p>
            </div>
            <p className="text-[32px] font-light text-black tracking-[-0.08em] leading-[0.84] whitespace-nowrap">
              Photographer
            </p>
            <p className="text-[32px] font-light text-black tracking-[-0.08em] leading-[0.84] whitespace-nowrap">
              Born <span style={{ fontFamily: "var(--font-playfair)", fontStyle: "italic" }}>&</span> raised
            </p>
            <p className="text-[32px] font-light text-black tracking-[-0.08em] leading-[0.84] whitespace-nowrap">
              on the south side
            </p>
            <div className="flex flex-col gap-3 items-center">
              <p className="text-[32px] font-light text-black tracking-[-0.08em] leading-[0.84] whitespace-nowrap">
                of chicago.
              </p>
              <p className="text-[14px] font-normal leading-[1.1] text-[#1f1f1f]" style={{ fontFamily: "var(--font-geist-mono)" }}>
                [ creative freelancer ]
              </p>
            </div>
          </div>

          {/* Desktop */}
          <div className="hidden md:flex flex-col gap-2 w-full uppercase" style={{ fontFamily: "var(--font-inter)" }}>
            <div className="flex gap-3 items-start">
              <p className="text-[96px] font-light tracking-[-0.08em] leading-[0.84] whitespace-nowrap">
                Creative director&nbsp;&nbsp;&nbsp;/
              </p>
              <span className="text-[14px] font-normal leading-[1.1] mt-1" style={{ fontFamily: "var(--font-geist-mono)" }}>
                001
              </span>
            </div>
            <div className="pl-[214px]">
              <p className="text-[96px] font-light tracking-[-0.08em] leading-[0.84] whitespace-nowrap">
                Photographer
              </p>
            </div>
            <div className="pl-[610px]">
              <p className="text-[96px] font-light tracking-[-0.08em] leading-[0.84] whitespace-nowrap">
                Born <span style={{ fontFamily: "var(--font-playfair)", fontStyle: "italic" }}>&</span> raised
              </p>
            </div>
            <p className="text-[96px] font-light tracking-[-0.08em] leading-[0.84] whitespace-nowrap">
              on the south side
            </p>
            <div className="pl-[606px]">
              <p className="text-[96px] font-light tracking-[-0.08em] leading-[0.84] whitespace-nowrap">
                of chicago.
              </p>
            </div>
            <p className="text-center text-[14px] font-normal leading-[1.1] mt-5" style={{ fontFamily: "var(--font-geist-mono)" }}>
              [ creative freelancer ]
            </p>
          </div>
        </section>

        {/* ── Bio ── */}
        <section className="bg-[#F5F5F4] px-4 py-12 md:px-8 md:py-[80px]">
          {/* Mobile */}
          <div className="md:hidden flex flex-col gap-5 w-full">
            <p className="text-[14px] font-normal leading-[1.1] text-[#1f1f1f] uppercase" style={{ fontFamily: "var(--font-geist-mono)" }}>
              002
            </p>
            <p className="text-[14px] font-normal leading-[1.1] text-[#1f1f1f] uppercase" style={{ fontFamily: "var(--font-geist-mono)" }}>
              [ About ]
            </p>
            <div className="relative p-3 w-full">
              <CornerBrackets />
              <p className="text-[14px] font-normal leading-[1.3] text-[#1f1f1f] tracking-[-0.04em]" style={{ fontFamily: "var(--font-inter)" }}>
                I&apos;m Harvey Specter — a creative director, photographer, and web
                designer born and raised on the south side of Chicago. With over 8
                years of industry experience, I&apos;ve built H.Studio into a
                full-service creative operation specializing in brand identity, web
                design, and visual storytelling.
              </p>
            </div>
            <div className="-mx-4 aspect-[422/594] overflow-hidden">
              <img src={ABOUT_PHOTO} alt="" className="w-full h-full object-cover object-center" />
            </div>
          </div>

          {/* Desktop */}
          <div className="hidden md:flex items-start justify-between w-full">
            <p className="text-[14px] font-normal leading-[1.1] text-[#1f1f1f] uppercase whitespace-nowrap" style={{ fontFamily: "var(--font-geist-mono)" }}>
              [ About ]
            </p>
            <div className="flex gap-8 items-end w-[983px]">
              <div className="relative flex-1 p-3">
                <CornerBrackets />
                <p className="text-[14px] font-normal leading-[1.3] text-[#1f1f1f] tracking-[-0.04em]" style={{ fontFamily: "var(--font-inter)" }}>
                  I&apos;m Harvey Specter — a creative director, photographer, and
                  web designer born and raised on the south side of Chicago. With
                  over 8 years of industry experience, I&apos;ve built H.Studio into
                  a full-service creative operation specializing in brand identity,
                  web design, and visual storytelling.
                  <br /><br />
                  My approach blends sharp visual instincts with a deep
                  understanding of brand strategy. Every project I take on is
                  treated as a unique challenge — there are no templates, no
                  shortcuts. I believe great design solves real problems while
                  creating something people genuinely want to look at.
                </p>
              </div>
              <div className="flex gap-6 items-start shrink-0">
                <p className="text-[14px] font-normal leading-[1.1] text-[#1f1f1f] uppercase" style={{ fontFamily: "var(--font-geist-mono)" }}>
                  002
                </p>
                <div className="relative w-[436px] h-[614px] bg-black overflow-hidden">
                  <img
                    src={ABOUT_PHOTO}
                    alt=""
                    className="block w-full h-full object-cover object-center"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── Full-bleed photo ── */}
        <section className="relative w-full h-[565px] md:h-[900px] overflow-hidden" data-nav-dark>
          <img
            src={FULLBLEED_PHOTO}
            alt=""
            className="absolute inset-0 w-full h-full object-cover object-center pointer-events-none"
          />
        </section>

        {/* ── Skills / Expertise ── */}
        <section
          data-nav-dark
          className="bg-black flex flex-col px-4 py-12 gap-8 md:px-8 md:py-[80px] md:gap-[48px]"
        >
          <p className="text-[14px] font-normal leading-[1.1] text-white uppercase" style={{ fontFamily: "var(--font-geist-mono)" }}>
            [ expertise ]
          </p>
          <div
            className="flex items-center justify-between w-full uppercase text-white font-light tracking-[-0.08em] leading-none whitespace-nowrap
                       text-[32px] md:text-[96px]"
            style={{ fontFamily: "var(--font-inter)" }}
          >
            <span>[5]</span>
            <span>Disciplines</span>
          </div>
          <div className="flex flex-col gap-[48px]">
            {SKILLS.map(({ num, title, years }) => (
              <div key={num} className="group flex flex-col gap-3 md:gap-[9px] cursor-pointer">
                <div className="flex flex-col gap-[9px]">
                  <p
                    className="text-[14px] font-normal leading-[1.1] text-white uppercase transition-opacity duration-300 group-hover:opacity-40"
                    style={{ fontFamily: "var(--font-geist-mono)" }}
                  >
                    {num}
                  </p>
                  <div className="w-1/2 group-hover:w-full border-t border-white transition-[width] duration-500 ease-out" />
                </div>
                <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
                  <p
                    className="text-[36px] font-bold italic leading-[1.1] text-white uppercase tracking-[-0.04em] whitespace-nowrap transition-transform duration-300 ease-out group-hover:translate-x-4"
                    style={{ fontFamily: "var(--font-inter)" }}
                  >
                    {title}
                  </p>
                  <p
                    className="text-[14px] font-normal leading-[1.1] text-white tracking-[-0.04em] self-end"
                    style={{ fontFamily: "var(--font-geist-mono)" }}
                  >
                    [ {years} ]
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── Career Timeline ── */}
        <section className="bg-[#F5F5F4] px-4 py-12 md:px-8 md:py-[80px]">
          {/* Header */}
          <div className="flex items-start justify-between w-full mb-12">
            <div className="flex gap-[10px] items-start uppercase" style={{ fontFamily: "var(--font-inter)" }}>
              <div className="font-light text-[32px] md:text-[96px] text-black tracking-[-0.08em] leading-[0.86]">
                <p>Career</p>
                <p>Timeline</p>
              </div>
              <span className="text-[14px] font-normal leading-[1.1] text-[#1f1f1f]" style={{ fontFamily: "var(--font-geist-mono)" }}>
                003
              </span>
            </div>
          </div>

          <div className="flex flex-col w-full">
            {TIMELINE.map(({ year, title, desc }) => (
              <div key={year} className="group flex flex-col cursor-pointer">
                <div className="w-full border-t border-[#1f1f1f]" />
                <div className="flex items-start gap-4 py-4 md:py-6">
                  <p
                    className="text-[14px] font-normal leading-[1.1] text-[#1f1f1f] uppercase shrink-0 w-[60px] md:w-[80px] pt-1"
                    style={{ fontFamily: "var(--font-geist-mono)" }}
                  >
                    {year}
                  </p>
                  <p
                    className="text-[24px] md:text-[36px] font-bold italic leading-[1.1] text-black uppercase tracking-[-0.04em] flex-1 transition-transform duration-300 ease-out group-hover:translate-x-2"
                    style={{ fontFamily: "var(--font-inter)" }}
                  >
                    {title}
                  </p>
                  <p
                    className="hidden md:block text-[14px] font-normal leading-[1.3] text-[#1f1f1f] tracking-[-0.04em] w-[393px] shrink-0 transition-opacity duration-300 group-hover:opacity-50"
                    style={{ fontFamily: "var(--font-inter)" }}
                  >
                    {desc}
                  </p>
                </div>
              </div>
            ))}
            <div className="w-full border-t border-[#1f1f1f]" />
          </div>
        </section>

        {/* ── Philosophy ── */}
        <section className="bg-[#F5F5F4] px-4 py-12 md:px-8 md:py-[120px]">
          <div className="flex flex-col gap-3 items-end w-full mb-12">
            <p className="text-[14px] font-normal leading-[1.1] text-[#1f1f1f] uppercase text-right" style={{ fontFamily: "var(--font-geist-mono)" }}>
              [ creative process ]
            </p>
            <div className="w-full border-t border-[#1f1f1f]" />
          </div>

          {/* Mobile */}
          <div className="md:hidden flex flex-col gap-5 w-full">
            <p className="text-[14px] font-normal leading-[1.1] text-[#1f1f1f] uppercase" style={{ fontFamily: "var(--font-geist-mono)" }}>
              004
            </p>
            <p className="text-[14px] font-normal leading-[1.1] text-[#1f1f1f] uppercase" style={{ fontFamily: "var(--font-geist-mono)" }}>
              [ Philosophy ]
            </p>
            <div className="relative p-3 w-full">
              <CornerBrackets />
              <p className="text-[14px] font-normal leading-[1.3] text-[#1f1f1f] tracking-[-0.04em]" style={{ fontFamily: "var(--font-inter)" }}>
                Design is not decoration — it&apos;s strategy made visible. Every
                decision, from a typeface choice to a color palette, is a statement
                about who a brand is and who it wants to become. I start every
                project by asking the hard questions, then I build the answers into
                every pixel.
              </p>
            </div>
          </div>

          {/* Desktop */}
          <div className="hidden md:flex items-start justify-between w-full">
            <p className="text-[14px] font-normal leading-[1.1] text-[#1f1f1f] uppercase whitespace-nowrap" style={{ fontFamily: "var(--font-geist-mono)" }}>
              [ Philosophy ]
            </p>
            <div className="flex flex-col gap-6 w-[983px]">
              <div className="relative p-3">
                <CornerBrackets />
                <p className="text-[14px] font-normal leading-[1.3] text-[#1f1f1f] tracking-[-0.04em]" style={{ fontFamily: "var(--font-inter)" }}>
                  Design is not decoration — it&apos;s strategy made visible. Every
                  decision, from a typeface choice to a color palette, is a statement
                  about who a brand is and who it wants to become. I start every
                  project by asking the hard questions, then I build the answers into
                  every pixel.
                  <br /><br />
                  Collaboration is at the core of how I work. The best results come
                  from a genuine partnership between client and creator — where
                  honesty and ambition coexist. I push my clients to be bold, and I
                  hold myself to the same standard.
                </p>
              </div>
              <p className="text-[14px] font-normal text-right uppercase text-[#1f1f1f]" style={{ fontFamily: "var(--font-geist-mono)" }}>
                004
              </p>
            </div>
          </div>
        </section>

        {/* ── CTA ── */}
        <section className="bg-[#F5F5F4] px-4 py-16 md:px-8 md:py-[120px]">
          <div className="flex flex-col gap-6 items-center text-center md:gap-8">
            <p className="text-[14px] font-normal leading-[1.1] text-[#1f1f1f] uppercase" style={{ fontFamily: "var(--font-geist-mono)" }}>
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

function CornerBrackets() {
  return (
    <>
      <span className="absolute top-0 left-0 w-4 h-4 border-t border-l border-[#1f1f1f]" />
      <span className="absolute top-0 right-0 w-4 h-4 border-t border-r border-[#1f1f1f]" />
      <span className="absolute bottom-0 left-0 w-4 h-4 border-b border-l border-[#1f1f1f]" />
      <span className="absolute bottom-0 right-0 w-4 h-4 border-b border-r border-[#1f1f1f]" />
    </>
  );
}
