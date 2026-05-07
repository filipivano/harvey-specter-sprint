import { client } from "@/sanity/lib/client";
import Navbar from "@/components/Navbar";
import Button from "@/components/Button";
import HeroParallax from "@/components/HeroParallax";
import AboutAnimation from "@/components/AboutAnimation";
import AboutPhotoCurtain from "@/components/AboutPhotoCurtain";
import AboutBioDrift from "@/components/AboutBioDrift";
import FullbleedBlur from "@/components/FullbleedBlur";
import TestimonialsParallax from "@/components/TestimonialsParallax";
import Footer from "@/components/Footer";
import TestimonialCarousel from "@/components/TestimonialCarousel";
import NewsCarousel from "@/components/NewsCarousel";
import NewsCard from "@/components/NewsCard";
import ProjectCard from "@/components/ProjectCard";
import WorkCTA from "@/components/WorkCTA";

const HERO_BG = "/hero-image-5.png";

const ABOUT_PHOTO =
  "https://www.figma.com/api/mcp/asset/998407b9-a4cb-4e35-83c8-4078be6273f0";

const FULLBLEED_PHOTO =
  "https://www.figma.com/api/mcp/asset/f78bd178-5dda-4536-81eb-66bd9fb6ca7d";


const TESTIMONIALS = [
  {
    logo: "https://www.figma.com/api/mcp/asset/1705d5b3-6214-41f2-a01a-43887180fc15",
    logoW: 142.749, logoH: 18.97,
    quote: "A brilliant creative partner who transformed our vision into a unique, high-impact brand identity. Their ability to craft everything from custom mascots to polished logos is truly impressive.",
    author: "Marko Stojković",
  },
  {
    logo: "https://www.figma.com/api/mcp/asset/93f0500c-6661-4f76-8800-82a8574ad6ed",
    logoW: 137.733, logoH: 19.263,
    quote: "Professional, precise, and incredibly fast at handling complex product visualizations and templates.",
    author: "Lukas Weber",
  },
  {
    logo: "https://www.figma.com/api/mcp/asset/7954ae7e-597d-4647-8186-66a914df12db",
    logoW: 108.537, logoH: 30.748,
    quote: "A strategic partner who balances stunning aesthetics with high-performance UX for complex platforms. They don't just make things look good; they solve business problems through visual clarity.",
    author: "Sarah Jenkins",
  },
  {
    logo: "https://www.figma.com/api/mcp/asset/35e96c8c-df85-4f64-b0cd-154e0b475779",
    logoW: 81.1, logoH: 36.174,
    quote: "An incredibly versatile designer who delivers consistent quality across a wide range of styles and formats.",
    author: "Sofia Martínez",
  },
] as const;

type NewsItem = {
  _id: string;
  title: string;
  description: string;
  img: string | null;
  category: string | null;
};

const NEWS_QUERY = `*[_type == "newsItem"] | order(order asc)[0...3] {
  _id,
  title,
  description,
  "img": select(
    defined(coverImage.asset) => coverImage.asset->url,
    coverImageUrl
  ),
  category
}`;

type ServiceItem = {
  _id: string;
  title: string;
  description: string;
  img: string | null;
};

const SERVICE_QUERY = `*[_type == "service"] | order(order asc) {
  _id,
  title,
  description,
  "img": select(
    defined(coverImage.asset) => coverImage.asset->url,
    coverImageUrl
  )
}`;

type PortfolioItem = {
  _id: string;
  title: string;
  tags: string[];
  img: string | null;
  tall: boolean;
  link?: string | null;
};

const PORTFOLIO_QUERY = `*[_type == "portfolioItem"] | order(order asc) {
  _id,
  title,
  tags,
  "img": select(
    defined(coverImage.asset) => coverImage.asset->url,
    coverImageUrl
  ),
  tall,
  link
}`;

export default async function Home() {
  const [projects, services, news] = await Promise.all([
    client.fetch<PortfolioItem[]>(PORTFOLIO_QUERY),
    client.fetch<ServiceItem[]>(SERVICE_QUERY),
    client.fetch<NewsItem[]>(NEWS_QUERY),
  ]);

  return (
    <>
    <Navbar />
    <main className="relative z-[1]">
      {/* ── Hero ── */}
      <section
        id="hero-section"
        className="
          relative overflow-hidden flex flex-col
          h-[635px] px-4 pb-6
          md:h-screen md:justify-start md:px-0 md:pb-0
        "
      >
        {/* Background photo */}
        <img
          id="hero-bg"
          src={HERO_BG}
          alt=""
          aria-hidden
          className="absolute inset-0 size-full object-cover object-top pointer-events-none select-none"
        />

        <HeroParallax />

        {/* Frosted glass bar — bottom 349px, fades in upward via mask */}
        <div
          className="absolute bottom-0 left-0 right-0 h-[349px] backdrop-blur-[10px] bg-[rgba(217,217,217,0.01)]"
          style={{ maskImage: "linear-gradient(to bottom, transparent 0%, black 40%)" }}
        />


        {/* ── Hero content ── */}
        <div
          className="
            relative mt-auto flex flex-col items-center w-full gap-4
            md:mt-[240px] md:flex-none md:justify-start md:h-auto md:px-8 md:gap-0
          "
          style={{ fontFamily: "var(--font-inter)" }}
        >
          {/* Label + hero name */}
          <div className="relative w-full md:pb-[15px]">
            {/* "[ Hello i'm ]" — centered mobile, left-padded desktop */}
            <div className="flex items-center justify-center w-full -mb-3 md:justify-start md:pl-[18px] md:-mb-[15px]">
              <p
                id="hero-hello"
                className="text-[14px] font-normal uppercase text-white mix-blend-overlay leading-[1.1]"
                style={{ fontFamily: "var(--font-geist-mono)" }}
              >
                [ Hello i&apos;m ]
              </p>
            </div>

            {/* Harvey Specter */}
            <h1
              className="
                w-full text-center text-white mix-blend-overlay font-medium capitalize
                text-[26vw] tracking-[-0.07em] leading-[0.85]
                md:text-[13.75vw] md:leading-[1.1] md:-mb-[15px] md:whitespace-nowrap
              "
            >
              <span id="hero-harvey" className="inline-block">Harvey</span>
              <span className="hidden md:inline">&nbsp;&nbsp;&nbsp;</span>
              <span className="md:hidden"> </span>
              <span id="hero-specter" className="inline-block">Specter</span>
            </h1>
          </div>

          {/* Bio + CTA — centered mobile, right-aligned desktop */}
          <div className="flex w-full justify-start md:justify-end">
            <div className="flex flex-col gap-[17px] w-full md:w-[294px]">
              <p
                className="text-[14px] font-bold italic uppercase leading-[1.1] text-[#1f1f1f]"
                style={{ letterSpacing: "-0.56px" }}
              >
                H.Studio is a{" "}
                <span className="font-normal">full-service</span> creative
                studio creating beautiful digital experiences and products. We
                are an <span className="font-normal">award winning</span> desing
                and art group specializing in branding, web design and
                engineering.
              </p>
              <Button variant="dark" className="w-fit" style={{ letterSpacing: "-0.56px" }}>
                Let&apos;s talk
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* ── About / Identity ── */}
      <section id="about" className="bg-[#F5F5F4] px-4 py-12 md:px-8 md:py-[120px]">
        <AboutAnimation />

        {/* Header: label + divider */}
        <div className="flex flex-col gap-3 items-end w-full mb-6">
          <p
            className="text-[14px] font-normal leading-[1.1] text-[#1f1f1f] uppercase text-right"
            style={{ fontFamily: "var(--font-geist-mono)" }}
          >
            [ 8+ years in industry ]
          </p>
          <div className="w-full border-t border-[#1f1f1f]" />
        </div>

        {/* ── Mobile text block — centered, 32px ── */}
        <div
          className="md:hidden flex flex-col gap-2 items-center w-full uppercase"
          style={{ fontFamily: "var(--font-inter)" }}
        >
          {/* 001 + line 1: 12px inner gap */}
          <div className="flex flex-col gap-3 items-center">
            <p className="text-[14px] font-normal leading-[1.1] text-[#1f1f1f]" style={{ fontFamily: "var(--font-geist-mono)" }}>
              001
            </p>
            <p className="text-[32px] font-light text-black tracking-[-0.08em] leading-[0.84] whitespace-nowrap">
              A creative director&nbsp;&nbsp;&nbsp;/
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

          {/* of chicago. + [ creative freelancer ]: 12px inner gap */}
          <div className="flex flex-col gap-3 items-center">
            <p className="text-[32px] font-light text-black tracking-[-0.08em] leading-[0.84] whitespace-nowrap">
              of chicago.
            </p>
            <p className="text-[14px] font-normal leading-[1.1] text-[#1f1f1f]" style={{ fontFamily: "var(--font-geist-mono)" }}>
              [ creative freelancer ]
            </p>
          </div>
        </div>

        {/* ── Desktop text block — two copies, word-fill scrub ── */}
        <div data-about-text className="hidden md:flex flex-col gap-[100px] w-full">

          {/* ── Copy 1 ── */}
          <div className="flex flex-col gap-2 w-full uppercase" style={{ fontFamily: "var(--font-inter)" }}>
            <div className="flex gap-3 items-start">
              <p data-about-line className="text-[96px] font-light tracking-[-0.08em] leading-[0.84] whitespace-nowrap">
                A creative director&nbsp;&nbsp;&nbsp;/
              </p>
              <span data-about-line className="text-[14px] font-normal leading-[1.1] mt-1" style={{ fontFamily: "var(--font-geist-mono)" }}>
                001
              </span>
            </div>
            <div className="pl-[214px]">
              <p data-about-line className="text-[96px] font-light tracking-[-0.08em] leading-[0.84] whitespace-nowrap">
                Photographer
              </p>
            </div>
            <div className="pl-[610px]">
              <p data-about-line className="text-[96px] font-light tracking-[-0.08em] leading-[0.84] whitespace-nowrap">
                Born <span style={{ fontFamily: "var(--font-playfair)", fontStyle: "italic" }}>&</span> raised
              </p>
            </div>
            <p data-about-line className="text-[96px] font-light tracking-[-0.08em] leading-[0.84] whitespace-nowrap">
              on the south side
            </p>
            <div className="pl-[606px] w-full">
              <p data-about-line className="text-[96px] font-light tracking-[-0.08em] leading-[0.84] whitespace-nowrap">
                of chicago.
              </p>
            </div>
            <p data-about-line className="text-center text-[14px] font-normal leading-[1.1] mt-5" style={{ fontFamily: "var(--font-geist-mono)" }}>
              [ creative freelancer ]
            </p>
          </div>

        </div>

      </section>

      <AboutPhotoCurtain />
      <AboutBioDrift />
      <FullbleedBlur />
      <TestimonialsParallax />

      {/* ── About / Bio ── */}
      <section className="bg-[#F5F5F4] px-4 py-12 md:px-8 md:py-[80px]">

        {/* Mobile layout: 002 → [ About ] → text-brackets → image */}
        <div className="md:hidden flex flex-col gap-5 w-full">
          <p
            className="text-[14px] font-normal leading-[1.1] text-[#1f1f1f] uppercase"
            style={{ fontFamily: "var(--font-geist-mono)" }}
          >
            002
          </p>
          <p
            className="text-[14px] font-normal leading-[1.1] text-[#1f1f1f] uppercase"
            style={{ fontFamily: "var(--font-geist-mono)" }}
          >
            [ About ]
          </p>
          {/* Text with corner brackets */}
          <div className="relative p-3 w-full">
            <span className="absolute top-0 left-0 w-4 h-4 border-t border-l border-[#1f1f1f]" />
            <span className="absolute top-0 right-0 w-4 h-4 border-t border-r border-[#1f1f1f]" />
            <span className="absolute bottom-0 left-0 w-4 h-4 border-b border-l border-[#1f1f1f]" />
            <span className="absolute bottom-0 right-0 w-4 h-4 border-b border-r border-[#1f1f1f]" />
            <p
              className="text-[14px] font-normal leading-[1.3] text-[#1f1f1f] tracking-[-0.04em]"
              style={{ fontFamily: "var(--font-inter)" }}
            >
              Placeholder paragraph one. This is where you introduce yourself — your background, your passion for your craft, and what drives you creatively. Two to three sentences work best here. Placeholder paragraph two. Here you can describe your technical approach, how you collaborate with clients, or what sets your work apart from others in your field.
            </p>
          </div>
          {/* Image — full bleed, breaks out of section padding */}
          <div className="-mx-4 aspect-[422/594] overflow-hidden">
            <img src={ABOUT_PHOTO} alt="" className="w-full h-full object-cover object-center" />
          </div>
        </div>

        {/* Desktop layout: [ About ] | text-brackets + 002/image */}
        <div className="hidden md:flex items-start justify-between w-full">

          {/* Left: section label */}
          <p
            className="text-[14px] font-normal leading-[1.1] text-[#1f1f1f] uppercase whitespace-nowrap"
            style={{ fontFamily: "var(--font-geist-mono)" }}
          >
            [ About ]
          </p>

          {/* Right: text block + photo column */}
          <div className="flex gap-8 items-end w-[983px]">

            {/* Text with corner brackets */}
            <div id="about-bio-text" className="relative flex-1 p-3">
              <span className="absolute top-0 left-0 w-4 h-4 border-t border-l border-[#1f1f1f]" />
              <span className="absolute top-0 right-0 w-4 h-4 border-t border-r border-[#1f1f1f]" />
              <span className="absolute bottom-0 left-0 w-4 h-4 border-b border-l border-[#1f1f1f]" />
              <span className="absolute bottom-0 right-0 w-4 h-4 border-b border-r border-[#1f1f1f]" />
              <p
                className="text-[14px] font-normal leading-[1.3] text-[#1f1f1f] tracking-[-0.04em]"
                style={{ fontFamily: "var(--font-inter)" }}
              >
                Placeholder paragraph one. This is where you introduce yourself — your background, your passion for your craft, and what drives you creatively. Two to three sentences work best here. Placeholder paragraph two. Here you can describe your technical approach, how you collaborate with clients, or what sets your work apart from others in your field.
              </p>
            </div>

            {/* 002 label + portrait photo — row so 002 sits left of image at same baseline as [ About ] */}
            <div className="flex gap-6 items-start shrink-0">
              <p
                className="text-[14px] font-normal leading-[1.1] text-[#1f1f1f] uppercase"
                style={{ fontFamily: "var(--font-geist-mono)" }}
              >
                002
              </p>
              <div className="relative w-[436px] h-[614px] bg-black overflow-hidden">
                <img
                  id="about-photo-img"
                  src={ABOUT_PHOTO}
                  alt=""
                  className="block w-full h-full object-cover object-center"
                />
              </div>
            </div>

          </div>
        </div>

      </section>

      {/* ── Full-bleed photo — 565px mobile / 900px desktop ── */}
      <section id="fullbleed-section" className="relative w-full h-[565px] md:h-[900px] overflow-hidden" data-nav-dark>
        <img
          id="fullbleed-img"
          src={FULLBLEED_PHOTO}
          alt=""
          className="absolute inset-0 w-full h-full object-cover object-center pointer-events-none"
        />
      </section>

      {/* ── Services ── */}
      <section
        id="services"
        data-nav-dark
        className="bg-black flex flex-col px-4 py-12 gap-8 md:px-8 md:py-[80px] md:gap-[48px]"
      >
        {/* [ services ] label */}
        <p
          className="text-[14px] font-normal leading-[1.1] text-white uppercase"
          style={{ fontFamily: "var(--font-geist-mono)" }}
        >
          [ services ]
        </p>

        {/* [N] Deliverables — 32px mobile / 96px desktop */}
        <div
          className="flex items-center justify-between w-full uppercase text-white font-light tracking-[-0.08em] leading-none whitespace-nowrap
                     text-[32px] md:text-[96px]"
          style={{ fontFamily: "var(--font-inter)" }}
        >
          <span>[{services.length}]</span>
          <span>Deliverables</span>
        </div>

        {/* Service list */}
        <div className="flex flex-col gap-[48px]">
          {services.map((svc, i) => (
            <div key={svc._id} className="group flex flex-col gap-3 md:gap-[9px] cursor-pointer">

              {/* Number + divider */}
              <div className="flex flex-col gap-[9px]">
                <p
                  className="text-[14px] font-normal leading-[1.1] text-white uppercase transition-opacity duration-300 group-hover:opacity-40"
                  style={{ fontFamily: "var(--font-geist-mono)" }}
                >
                  [ {i + 1} ]
                </p>
                <div className="w-1/2 group-hover:w-full border-t border-white transition-[width] duration-500 ease-out" />
              </div>

              {/* Mobile: title → description → image stacked
                  Desktop: title left | description + image right */}
              <div className="flex flex-col gap-4 md:flex-row md:flex-wrap md:items-start md:justify-between">
                <p
                  className="text-[36px] font-bold italic leading-[1.1] text-white uppercase tracking-[-0.04em] whitespace-nowrap transition-transform duration-300 ease-out group-hover:translate-x-4"
                  style={{ fontFamily: "var(--font-inter)" }}
                >
                  {svc.title}
                </p>
                <div className="flex flex-col gap-4 md:flex-row md:gap-6 md:items-start">
                  <p
                    className="text-[14px] font-normal leading-[1.3] text-white tracking-[-0.04em] w-full md:w-[393px] transition-opacity duration-300 group-hover:opacity-50"
                    style={{ fontFamily: "var(--font-inter)" }}
                  >
                    {svc.description}
                  </p>
                  <div className="size-[151px] shrink-0 overflow-hidden">
                    <img src={svc.img ?? ""} alt="" className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-110" />
                  </div>
                </div>
              </div>

            </div>
          ))}
        </div>

      </section>

      {/* ── Selected Work ── */}
      <section id="projects" className="bg-[#F5F5F4] px-4 py-12 md:px-8 md:py-[80px]">

        {/* ── Mobile header ── */}
        <div className="md:hidden flex flex-col gap-4 mb-8 uppercase">
          <p className="text-[14px] font-normal leading-[1.1] text-[#1f1f1f]" style={{ fontFamily: "var(--font-geist-mono)" }}>
            [ portfolio ]
          </p>
          <div className="flex items-start justify-between w-full" style={{ fontFamily: "var(--font-inter)" }}>
            <div className="font-light text-[32px] text-black tracking-[-0.08em] leading-[0.86]">
              <p>Selected</p>
              <p>Work</p>
            </div>
            <span className="text-[14px] font-normal leading-[1.1] text-[#1f1f1f]" style={{ fontFamily: "var(--font-geist-mono)" }}>
              {String(projects.length).padStart(3, "0")}
            </span>
          </div>
        </div>

        {/* ── Mobile layout ── */}
        <div className="md:hidden flex flex-col gap-10">
          {projects.map((project) => (
            <ProjectCard
              key={project._id}
              title={project.title}
              tags={project.tags}
              img={project.img ?? ""}
              tall={false}
              link={project.link}
              mobile
            />
          ))}
          <WorkCTA />
        </div>

        {/* ── Desktop layout ── */}
        <div className="hidden md:flex flex-col gap-[61px] w-full">

          {/* Header row */}
          <div className="flex items-center justify-between w-full">
            <div className="flex gap-[10px] items-start uppercase" style={{ fontFamily: "var(--font-inter)" }}>
              <div className="font-light text-[96px] text-black tracking-[-0.08em] leading-[0] not-italic">
                <p className="leading-[0.86]">Selected</p>
                <p className="leading-[0.86]">Work</p>
              </div>
              <span className="text-[14px] font-normal leading-[1.1] text-[#1f1f1f]" style={{ fontFamily: "var(--font-geist-mono)" }}>
                {String(projects.length).padStart(3, "0")}
              </span>
            </div>
            <div className="flex items-center justify-center w-[15px] h-[110px]">
              <p className="-rotate-90 whitespace-nowrap text-[14px] font-normal leading-[1.1] text-[#1f1f1f] uppercase" style={{ fontFamily: "var(--font-geist-mono)" }}>
                [ portfolio ]
              </p>
            </div>
          </div>

          {/* Two staggered columns */}
          <div className="flex gap-6 items-end w-full">
            <div className="flex-1 flex flex-col">
              {projects[0] && (
                <ProjectCard title={projects[0].title} tags={projects[0].tags} img={projects[0].img ?? ""} tall={projects[0].tall} link={projects[0].link} />
              )}
              {projects[1] && (
                <div className="mt-[80px]">
                  <ProjectCard title={projects[1].title} tags={projects[1].tags} img={projects[1].img ?? ""} tall={projects[1].tall} link={projects[1].link} />
                </div>
              )}
              <div className="mt-[80px]">
                <WorkCTA />
              </div>
            </div>
            <div className="flex-1 flex flex-col gap-[117px] pt-[240px]">
              {projects[2] && (
                <ProjectCard title={projects[2].title} tags={projects[2].tags} img={projects[2].img ?? ""} tall={projects[2].tall} link={projects[2].link} />
              )}
              {projects[3] && (
                <ProjectCard title={projects[3].title} tags={projects[3].tags} img={projects[3].img ?? ""} tall={projects[3].tall} link={projects[3].link} />
              )}
            </div>
          </div>

        </div>

      </section>

      {/* ── Testimonials ── */}
      <section id="testimonials-section" className="relative bg-[#F5F5F4] px-4 py-16 md:flex md:flex-col md:items-center md:justify-center md:overflow-hidden md:py-[120px] md:min-h-[900px]">

        {/*
          Desktop layer order mirrors Figma exactly (DOM order = z order):
          1. Lukas   — absolute, first   → behind heading
          2. Heading — in-flow           → in front of Lukas
          3. Marko / Sarah / Sofia — absolute, last → in front of heading
        */}

        {/* 1. Lukas — behind heading */}
        <div
          id="tc-lukas"
          className="hidden md:flex absolute items-center justify-center"
          style={{ left: 676, top: 272, width: 361.958, height: 203.867 }}
        >
          <div className="group [transform:rotate(2.9deg)] hover:[transform:rotate(0deg)] transition-transform duration-300 ease-out cursor-pointer">
            <TestimonialCard {...TESTIMONIALS[1]} />
          </div>
        </div>

        {/* 2. Heading — in normal flow */}
        <p
          className="relative min-w-full text-left md:text-center text-black font-medium capitalize
                     leading-[0.8] md:leading-[1.1]
                     text-[64px] tracking-[-4.48px]
                     md:text-[198px] md:tracking-[-13.86px]"
          style={{ fontFamily: "var(--font-inter)" }}
        >
          Testimonials
        </p>

        {/* Mobile: dot carousel */}
        <TestimonialCarousel items={TESTIMONIALS} />

        {/* 3. Marko — in front of heading */}
        <div
          id="tc-marko"
          className="hidden md:flex absolute items-center justify-center"
          style={{ left: 102, top: 142, width: 380.876, height: 295.234 }}
        >
          <div className="group [transform:rotate(-6.85deg)] hover:[transform:rotate(0deg)] transition-transform duration-300 ease-out cursor-pointer">
            <TestimonialCard {...TESTIMONIALS[0]} />
          </div>
        </div>

        {/* 3. Sarah — in front of heading */}
        <div
          id="tc-sarah"
          className="hidden md:flex absolute items-center justify-center"
          style={{ left: 305, top: 553, width: 363.132, height: 280.316 }}
        >
          <div className="group [transform:rotate(2.23deg)] hover:[transform:rotate(0deg)] transition-transform duration-300 ease-out cursor-pointer">
            <TestimonialCard {...TESTIMONIALS[2]} />
          </div>
        </div>

        {/* 3. Sofia — in front of heading */}
        <div
          id="tc-sofia"
          className="hidden md:flex absolute items-center justify-center"
          style={{ left: 987, top: 546, width: 366.766, height: 228.169 }}
        >
          <div className="group [transform:rotate(-4.15deg)] hover:[transform:rotate(0deg)] transition-transform duration-300 ease-out cursor-pointer">
            <TestimonialCard {...TESTIMONIALS[3]} />
          </div>
        </div>

      </section>

      {/* ── News & Achievements ── */}
      <section id="news" className="relative bg-[#f3f3f3] overflow-hidden px-4 py-[80px] md:px-8 md:py-[120px]">

        {/* Desktop */}
        <div className="hidden md:flex items-end justify-between w-full">

          {/* Rotated heading */}
          <div className="flex items-center justify-center shrink-0 w-[110px] h-[706px]">
            <div
              className="-rotate-90 whitespace-nowrap"
              style={{ fontFamily: "var(--font-inter)" }}
            >
              <p className="text-[64px] font-light text-black uppercase tracking-[-5.12px] leading-[0.86]">Keep up with my latest</p>
              <p className="text-[64px] font-light text-black uppercase tracking-[-5.12px] leading-[0.86]">news &amp; achievements</p>
            </div>
          </div>

          {/* Three cards with vertical dividers */}
          <div className="flex gap-[31px] items-start">
            {news[0] && <NewsCard title={news[0].title} description={news[0].description} img={news[0].img ?? ""} category={news[0].category} />}
            {news[1] && <><div className="w-px self-stretch bg-black" /><NewsCard title={news[1].title} description={news[1].description} img={news[1].img ?? ""} category={news[1].category} offset /></>}
            {news[2] && <><div className="w-px self-stretch bg-black" /><NewsCard title={news[2].title} description={news[2].description} img={news[2].img ?? ""} category={news[2].category} /></>}
          </div>
        </div>

        {/* Mobile: heading + carousel */}
        <div className="md:hidden flex flex-col gap-8">
          <p
            className="text-[32px] font-light text-black uppercase tracking-[-2.56px] leading-[0.86]"
            style={{ fontFamily: "var(--font-inter)" }}
          >
            Keep up with<br />my latest news<br />&amp; achievements
          </p>
          <NewsCarousel items={news.map(n => ({ img: n.img ?? "", title: n.title, description: n.description }))} />
        </div>

      </section>
    </main>

    <Footer />
    </>
  );
}


/* ── Testimonial card ── */
function TestimonialCard({ logo, logoW, logoH, quote, author }: {
  logo: string;
  logoW: number;
  logoH: number;
  quote: string;
  author: string;
}) {
  return (
    <div
      className="bg-[#f1f1f1] border border-[#ddd] rounded-[4px] p-6 flex flex-col gap-4 w-[260px] md:w-[353px]
                 transition-all duration-300 ease-out
                 group-hover:bg-white group-hover:border-[#bbb]
                 group-hover:-translate-y-2
                 group-hover:shadow-[0_24px_64px_rgba(0,0,0,0.14)]"
      style={{ fontFamily: "var(--font-inter)" }}
    >
      <div className="relative shrink-0" style={{ width: logoW, height: logoH }}>
        <img src={logo} alt="" className="absolute inset-0 w-full h-full" />
      </div>
      <p className="text-[18px] font-normal leading-[1.3] text-[#1f1f1f] tracking-[-0.72px]">
        {quote}
      </p>
      <p className="text-[16px] font-black leading-[1.1] text-black uppercase tracking-[-0.64px] whitespace-nowrap">
        {author}
      </p>
    </div>
  );
}


