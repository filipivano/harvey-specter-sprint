"use client";

import { useState } from "react";

const HERO_BG = "/hero-image-5.png";

const NAV_LINKS = ["About", "Services", "Projects", "News", "Contact"];

const ABOUT_PHOTO =
  "https://www.figma.com/api/mcp/asset/998407b9-a4cb-4e35-83c8-4078be6273f0";

const FULLBLEED_PHOTO =
  "https://www.figma.com/api/mcp/asset/f78bd178-5dda-4536-81eb-66bd9fb6ca7d";

const SERVICES = [
  { num: "[ 1 ]", title: "Brand Discovery",    img: "https://www.figma.com/api/mcp/asset/b3cc421c-e63d-4d23-8de2-a83e2943033f" },
  { num: "[ 2 ]", title: "Web design & Dev",   img: "https://www.figma.com/api/mcp/asset/e0e3f9c2-5556-4eff-acc5-b77136283f60" },
  { num: "[ 3 ]", title: "Marketing",          img: "https://www.figma.com/api/mcp/asset/c488ae2d-94b8-483c-87ec-5aee4f90fda6" },
  { num: "[ 4 ]", title: "Photography",        img: "https://www.figma.com/api/mcp/asset/b9b1068a-ee07-420d-ab74-dc58937c7411" },
] as const;

const PROJECTS = [
  { title: "Surfers Paradise",   tags: ["Social Media", "Photography"], img: "https://www.figma.com/api/mcp/asset/59208767-6b41-46d5-950b-9e5c70e6a203", tall: true  },
  { title: "Cyberpunk Caffe",    tags: ["Social Media", "Photography"], img: "https://www.figma.com/api/mcp/asset/3e3d2caf-9b4c-474e-9305-419d76121adc", tall: false },
  { title: "Agency 976",         tags: ["Social Media", "Photography"], img: "https://www.figma.com/api/mcp/asset/df948448-4c15-490a-81e2-a7177a05ab37", tall: false },
  { title: "Minimal Playground", tags: ["Social Media", "Photography"], img: "https://www.figma.com/api/mcp/asset/3edf2601-17ec-422d-9e89-663c29e3495b", tall: true  },
] as const;

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

const NEWS_ITEMS = [
  { img: "https://www.figma.com/api/mcp/asset/fc9b121d-db2d-41fe-bdca-095e2ed012de", offset: false },
  { img: "https://www.figma.com/api/mcp/asset/fdfb11e8-eada-42a3-8166-7ae57f93d50a", offset: true  },
  { img: "https://www.figma.com/api/mcp/asset/c83bcdf9-5a2f-4a56-b482-d209237ecc6f", offset: false },
] as const;

const NEWS_DESC = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.";

const SERVICE_DESC =
  "We are a creative studio that loves making beautiful websites and premium products. We've won some awards for our work. We're really good at creating brands, designing cool stuff, and making things work just right.";

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
    <main>
      {/* ── Mobile menu overlay ── */}
      {menuOpen && (
        <div
          className="fixed inset-0 z-50 bg-black flex flex-col px-4 py-6"
          style={{ fontFamily: "var(--font-inter)" }}
        >
          <div className="flex items-center justify-between">
            <span className="font-semibold text-base capitalize tracking-[-0.04em] text-white">
              H.Studio
            </span>
            <button onClick={() => setMenuOpen(false)} aria-label="Close menu">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden>
                <line x1="4" y1="4" x2="20" y2="20" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
                <line x1="20" y1="4" x2="4" y2="20" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
              </svg>
            </button>
          </div>

          <ul className="flex flex-col gap-8 mt-12 list-none">
            {NAV_LINKS.map((link) => (
              <li key={link}>
                <a
                  href={`#${link.toLowerCase()}`}
                  className="text-white font-semibold text-[32px] capitalize tracking-[-0.04em] hover:opacity-70 transition-opacity"
                  onClick={() => setMenuOpen(false)}
                >
                  {link}
                </a>
              </li>
            ))}
          </ul>

          <div className="mt-auto">
            <button className="flex items-center justify-center bg-white text-black text-[14px] font-medium tracking-[-0.04em] px-4 py-3 rounded-[24px] w-full">
              Let&apos;s talk
            </button>
          </div>
        </div>
      )}

      {/* ── Hero ── */}
      <section
        className="
          relative overflow-hidden flex flex-col
          h-[635px] px-4 pb-6
          md:h-screen md:justify-start md:px-0 md:pb-0
        "
      >
        {/* Background photo */}
        <img
          src={HERO_BG}
          alt=""
          aria-hidden
          className="absolute inset-0 size-full object-cover object-top pointer-events-none select-none"
        />

        {/* Frosted glass bar — bottom 349px, fades in upward via mask */}
        <div
          className="absolute bottom-0 left-0 right-0 h-[349px] backdrop-blur-[10px] bg-[rgba(217,217,217,0.01)]"
          style={{ maskImage: "linear-gradient(to bottom, transparent 0%, black 40%)" }}
        />

        {/* ── Navbar ── */}
        <nav
          className="relative z-10 flex items-center justify-between py-6 md:px-8 md:h-[89px] md:py-0"
          style={{ fontFamily: "var(--font-inter)" }}
        >
          <span className="font-semibold text-base capitalize tracking-[-0.04em] text-black">
            H.Studio
          </span>

          {/* Mobile: hamburger */}
          <button className="md:hidden" aria-label="Open menu" onClick={() => setMenuOpen(true)}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden>
              <line x1="3" y1="6"  x2="21" y2="6"  stroke="black" strokeWidth="1.5" strokeLinecap="round" />
              <line x1="3" y1="12" x2="21" y2="12" stroke="black" strokeWidth="1.5" strokeLinecap="round" />
              <line x1="3" y1="18" x2="21" y2="18" stroke="black" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
          </button>

          {/* Desktop: nav links */}
          <ul className="hidden md:flex items-center gap-14 list-none font-semibold text-base capitalize tracking-[-0.04em] text-black">
            {NAV_LINKS.map((link) => (
              <li key={link}>
                <a
                  href={`#${link.toLowerCase()}`}
                  className="hover:opacity-70 transition-opacity"
                >
                  {link}
                </a>
              </li>
            ))}
          </ul>

          {/* Desktop: CTA */}
          <button className="hidden md:flex items-center justify-center bg-black text-white text-[14px] font-medium tracking-[-0.04em] px-4 py-3 rounded-[24px]">
            Let&apos;s talk
          </button>
        </nav>

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
              <span>Harvey</span>
              <span className="hidden md:inline">&nbsp;&nbsp;&nbsp;</span>
              <span className="md:hidden"> </span>
              <span>Specter</span>
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
              <button
                className="flex items-center justify-center bg-black text-white text-[14px] font-medium px-4 py-3 rounded-[24px] w-fit"
                style={{ letterSpacing: "-0.56px" }}
              >
                Let&apos;s talk
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ── About / Identity ── */}
      <section id="about" className="bg-[#F5F5F4] px-4 py-12 md:px-8 md:py-[120px]">

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

        {/* ── Desktop text block — staggered, 96px ── */}
        <div
          className="hidden md:flex flex-col gap-2 w-full uppercase"
          style={{ fontFamily: "var(--font-inter)" }}
        >
          {/* Line 1: A CREATIVE DIRECTOR / + 001 inline */}
          <div className="flex gap-3 items-start">
            <p className="text-[96px] font-light text-black tracking-[-0.08em] leading-[0.84] whitespace-nowrap">
              A creative director&nbsp;&nbsp;&nbsp;/
            </p>
            <span className="text-[14px] font-normal leading-[1.1] text-[#1f1f1f] mt-1" style={{ fontFamily: "var(--font-geist-mono)" }}>
              001
            </span>
          </div>

          {/* Line 2: PHOTOGRAPHER — indent 214px */}
          <div className="pl-[214px]">
            <p className="text-[96px] font-light text-black tracking-[-0.08em] leading-[0.84] whitespace-nowrap">
              Photographer
            </p>
          </div>

          {/* Line 3: BORN & RAISED — indent 610px */}
          <div className="pl-[610px]">
            <p className="text-[96px] font-light text-black tracking-[-0.08em] leading-[0.84] whitespace-nowrap">
              Born <span style={{ fontFamily: "var(--font-playfair)", fontStyle: "italic" }}>&</span> raised
            </p>
          </div>

          {/* Line 4: ON THE SOUTH SIDE — no indent */}
          <p className="text-[96px] font-light text-black tracking-[-0.08em] leading-[0.84] whitespace-nowrap">
            on the south side
          </p>

          {/* Line 5: OF CHICAGO. — indent 606px */}
          <div className="pl-[606px] w-full">
            <p className="text-[96px] font-light text-black tracking-[-0.08em] leading-[0.84] whitespace-nowrap">
              of chicago.
            </p>
          </div>
        </div>

        {/* [ creative freelancer ] — centered below text block, desktop only */}
        <p
          className="hidden md:block text-center text-[14px] font-normal leading-[1.1] text-[#1f1f1f] uppercase mt-5"
          style={{ fontFamily: "var(--font-geist-mono)" }}
        >
          [ creative freelancer ]
        </p>

      </section>

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
            <div className="relative flex-1 p-3">
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
              <div className="w-[436px] h-[614px] overflow-hidden">
                <img
                  src={ABOUT_PHOTO}
                  alt=""
                  className="w-full h-full object-cover object-center"
                />
              </div>
            </div>

          </div>
        </div>

      </section>

      {/* ── Full-bleed photo — 565px mobile / 900px desktop ── */}
      <section className="relative w-full h-[565px] md:h-[900px] overflow-hidden">
        <img
          src={FULLBLEED_PHOTO}
          alt=""
          className="absolute inset-0 w-full h-full object-cover object-center pointer-events-none"
        />
      </section>

      {/* ── Services ── */}
      <section
        id="services"
        className="bg-black flex flex-col px-4 py-12 gap-8 md:px-8 md:py-[80px] md:gap-[48px]"
      >
        {/* [ services ] label */}
        <p
          className="text-[14px] font-normal leading-[1.1] text-white uppercase"
          style={{ fontFamily: "var(--font-geist-mono)" }}
        >
          [ services ]
        </p>

        {/* [4] Deliverables — 32px mobile / 96px desktop */}
        <div
          className="flex items-center justify-between w-full uppercase text-white font-light tracking-[-0.08em] leading-none whitespace-nowrap
                     text-[32px] md:text-[96px]"
          style={{ fontFamily: "var(--font-inter)" }}
        >
          <span>[4]</span>
          <span>Deliverables</span>
        </div>

        {/* Service list */}
        <div className="flex flex-col gap-[48px]">
          {SERVICES.map(({ num, title, img }) => (
            <div key={num} className="flex flex-col gap-3 md:gap-[9px]">

              {/* Number + divider */}
              <div className="flex flex-col gap-[9px]">
                <p
                  className="text-[14px] font-normal leading-[1.1] text-white uppercase"
                  style={{ fontFamily: "var(--font-geist-mono)" }}
                >
                  {num}
                </p>
                <div className="w-full border-t border-white" />
              </div>

              {/* Mobile: title → description → image stacked
                  Desktop: title left | description + image right */}
              <div className="flex flex-col gap-4 md:flex-row md:flex-wrap md:items-start md:justify-between">
                <p
                  className="text-[36px] font-bold italic leading-[1.1] text-white uppercase tracking-[-0.04em] whitespace-nowrap"
                  style={{ fontFamily: "var(--font-inter)" }}
                >
                  {title}
                </p>
                <div className="flex flex-col gap-4 md:flex-row md:gap-6 md:items-start">
                  <p
                    className="text-[14px] font-normal leading-[1.3] text-white tracking-[-0.04em] w-full md:w-[393px]"
                    style={{ fontFamily: "var(--font-inter)" }}
                  >
                    {SERVICE_DESC}
                  </p>
                  <div className="size-[151px] shrink-0 overflow-hidden">
                    <img src={img} alt="" className="w-full h-full object-cover" />
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
              004
            </span>
          </div>
        </div>

        {/* ── Mobile layout ── */}
        <div className="md:hidden flex flex-col gap-10">
          {PROJECTS.map(({ title, tags, img }) => (
            <ProjectCard key={title} title={title} tags={tags} img={img} tall={false} mobile />
          ))}
          <WorkCTA />
        </div>

        {/* ── Desktop layout: flex-col gap-[61px] matching Figma node 1:111 ── */}
        <div className="hidden md:flex flex-col gap-[61px] w-full">

          {/* Header row */}
          <div className="flex items-center justify-between w-full">
            <div className="flex gap-[10px] items-start uppercase" style={{ fontFamily: "var(--font-inter)" }}>
              <div className="font-light text-[96px] text-black tracking-[-0.08em] leading-[0] not-italic">
                <p className="leading-[0.86]">Selected</p>
                <p className="leading-[0.86]">Work</p>
              </div>
              <span className="text-[14px] font-normal leading-[1.1] text-[#1f1f1f]" style={{ fontFamily: "var(--font-geist-mono)" }}>
                004
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
              <ProjectCard title={PROJECTS[0].title} tags={PROJECTS[0].tags} img={PROJECTS[0].img} tall />
              <div className="mt-[80px]">
                <ProjectCard title={PROJECTS[1].title} tags={PROJECTS[1].tags} img={PROJECTS[1].img} tall={false} />
              </div>
              <div className="mt-[80px]">
                <WorkCTA />
              </div>
            </div>
            <div className="flex-1 flex flex-col gap-[117px] pt-[240px]">
              <ProjectCard title={PROJECTS[2].title} tags={PROJECTS[2].tags} img={PROJECTS[2].img} tall={false} />
              <ProjectCard title={PROJECTS[3].title} tags={PROJECTS[3].tags} img={PROJECTS[3].img} tall />
            </div>
          </div>

        </div>

      </section>

      {/* ── Testimonials ── */}
      <section className="relative bg-[#F5F5F4] px-4 py-16 md:flex md:flex-col md:items-center md:justify-center md:overflow-hidden md:py-[120px] md:min-h-[900px]">

        {/*
          Desktop layer order mirrors Figma exactly (DOM order = z order):
          1. Lukas   — absolute, first   → behind heading
          2. Heading — in-flow           → in front of Lukas
          3. Marko / Sarah / Sofia — absolute, last → in front of heading
        */}

        {/* 1. Lukas — behind heading */}
        <div
          className="hidden md:flex absolute items-center justify-center"
          style={{ left: 676, top: 272, width: 361.958, height: 203.867 }}
        >
          <div style={{ transform: "rotate(2.9deg)" }}>
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

        {/* Mobile: horizontal scroll strip */}
        <div className="md:hidden -mx-4 mt-8 overflow-x-auto">
          <div className="flex items-center pl-4 pr-4" style={{ width: "max-content" }}>
            {TESTIMONIALS.map(({ logo, logoW, logoH, quote, author }, i) => {
              const mobileRotates = [-3.5, 1.5, -2, 2];
              return (
                <div
                  key={author}
                  className="flex-none"
                  style={{ transform: `rotate(${mobileRotates[i]}deg)`, marginRight: i < TESTIMONIALS.length - 1 ? "-10px" : "0" }}
                >
                  <TestimonialCard logo={logo} logoW={logoW} logoH={logoH} quote={quote} author={author} />
                </div>
              );
            })}
          </div>
        </div>

        {/* 3. Marko — in front of heading */}
        <div
          className="hidden md:flex absolute items-center justify-center"
          style={{ left: 102, top: 142, width: 380.876, height: 295.234 }}
        >
          <div style={{ transform: "rotate(-6.85deg)" }}>
            <TestimonialCard {...TESTIMONIALS[0]} />
          </div>
        </div>

        {/* 3. Sarah — in front of heading */}
        <div
          className="hidden md:flex absolute items-center justify-center"
          style={{ left: 305, top: 553, width: 363.132, height: 280.316 }}
        >
          <div style={{ transform: "rotate(2.23deg)" }}>
            <TestimonialCard {...TESTIMONIALS[2]} />
          </div>
        </div>

        {/* 3. Sofia — in front of heading */}
        <div
          className="hidden md:flex absolute items-center justify-center"
          style={{ left: 987, top: 546, width: 366.766, height: 228.169 }}
        >
          <div style={{ transform: "rotate(-4.15deg)" }}>
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
            <NewsCard img={NEWS_ITEMS[0].img} desc={NEWS_DESC} />
            <div className="w-px self-stretch bg-black" />
            <NewsCard img={NEWS_ITEMS[1].img} desc={NEWS_DESC} offset />
            <div className="w-px self-stretch bg-black" />
            <NewsCard img={NEWS_ITEMS[2].img} desc={NEWS_DESC} />
          </div>
        </div>

        {/* Mobile: heading + horizontal scroll strip */}
        <div className="md:hidden flex flex-col gap-8">
          <p
            className="text-[32px] font-light text-black uppercase tracking-[-2.56px] leading-[0.86]"
            style={{ fontFamily: "var(--font-inter)" }}
          >
            Keep up with<br />my latest news<br />&amp; achievements
          </p>

          {/* Horizontal scroll — breaks out of section padding */}
          <div className="-mx-4 overflow-x-auto">
            <div className="flex gap-4 pl-4 pr-4" style={{ width: "max-content" }}>
              {NEWS_ITEMS.map(({ img }, i) => (
                <div key={i} className="flex flex-col gap-4 shrink-0 w-[300px]" style={{ fontFamily: "var(--font-inter)" }}>
                  <div className="relative h-[398px] w-[300px] overflow-hidden">
                    <img src={img} alt="" className="absolute inset-0 w-full h-full object-cover pointer-events-none" />
                  </div>
                  <p className="text-[14px] font-normal text-[#1f1f1f] tracking-[-0.56px] leading-[1.3]">
                    {NEWS_DESC}
                  </p>
                  <div className="border-b border-black flex gap-[10px] items-center py-1 shrink-0">
                    <span className="text-[14px] font-medium text-black tracking-[-0.56px] whitespace-nowrap">Read more</span>
                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden>
                      <path d="M4.5 13.5L13.5 4.5M13.5 4.5H7.5M13.5 4.5V10.5" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

      </section>
    </main>

    {/* ── Footer ── */}
    <footer className="bg-black pt-[48px] px-4 md:px-8" style={{ fontFamily: "var(--font-inter)" }}>

      {/* Desktop */}
      <div className="hidden md:flex flex-col gap-[120px]">

        {/* Top: CTA + social + divider */}
        <div className="flex flex-col gap-[48px] w-full">
          <div className="flex items-start justify-between w-full">

            {/* CTA */}
            <div className="flex flex-col gap-3 w-[298px]">
              <p className="text-[24px] font-light italic text-white uppercase tracking-[-0.96px] leading-[1.1]">
                Have a <strong className="font-black not-italic">project</strong> in mind?
              </p>
              <button className="border border-white text-white text-[14px] font-medium tracking-[-0.56px] px-4 py-3 rounded-[24px] w-fit">
                Let&apos;s talk
              </button>
            </div>

            {/* Social center */}
            <div className="text-[18px] font-normal text-white uppercase tracking-[-0.72px] text-center w-[298px]">
              <p className="leading-[1.1]">Facebook</p>
              <p className="leading-[1.1]">Instagram</p>
            </div>

            {/* Social right */}
            <div className="text-[18px] font-normal text-white uppercase tracking-[-0.72px] text-right w-[298px]">
              <p className="leading-[1.1]">X.com</p>
              <p className="leading-[1.1]">Linkedin</p>
            </div>
          </div>

          {/* Divider */}
          <div className="w-full border-t border-white" />
        </div>

        {/* Bottom: giant brand + legal */}
        <div className="flex items-end justify-between w-full">

          {/* H.Studio clipped box */}
          <div className="relative h-[219px] overflow-hidden shrink-0 w-[1093px]">
            <p
              className="absolute whitespace-nowrap text-[290px] font-semibold text-white capitalize tracking-[-17.4px] leading-[0.8]"
              style={{ top: 0, left: "5px" }}
            >
              H.Studio
            </p>
            {/* [ Coded By Claude ] — rotated vertical label on far left */}
            <div className="absolute left-0 top-0 bottom-0 flex items-center justify-center w-[15px]">
              <p
                className="-rotate-90 whitespace-nowrap text-[14px] font-normal text-white uppercase leading-[1.1]"
                style={{ fontFamily: "var(--font-geist-mono)" }}
              >
                [ Coded By Claude ]
              </p>
            </div>
          </div>

          {/* Legal links */}
          <div className="flex gap-[34px] items-center pb-8 text-[12px] font-normal text-white uppercase tracking-[-0.48px] whitespace-nowrap">
            <a href="#" className="underline">Licences</a>
            <a href="#" className="underline">Privacy policy</a>
          </div>
        </div>
      </div>

      {/* Mobile */}
      <div className="md:hidden flex flex-col gap-[48px]">

        {/* CTA + socials + divider */}
        <div className="flex flex-col gap-[24px]">
          <div className="flex flex-col gap-[16px]">

            {/* CTA */}
            <div className="flex flex-col gap-3">
              <p className="text-[24px] font-light italic text-white uppercase tracking-[-0.96px] leading-[1.1]">
                Have a <strong className="font-black not-italic">project</strong> in mind?
              </p>
              <button className="border border-white text-white text-[14px] font-medium tracking-[-0.56px] px-4 py-3 rounded-[24px] w-fit">
                Let&apos;s talk
              </button>
            </div>

            {/* Socials — vertical stack */}
            {["Facebook", "Instagram", "X.com", "Linkedin"].map((s) => (
              <p key={s} className="text-[18px] font-normal text-white uppercase tracking-[-0.72px] leading-[1.1]">{s}</p>
            ))}
          </div>

          {/* Divider */}
          <div className="w-full border-t border-white" />
        </div>

        {/* Legal + coded-by + H.Studio */}
        <div className="flex flex-col gap-[16px] h-[150px] items-center w-full whitespace-nowrap">

          {/* Legal */}
          <div className="flex gap-[34px] items-center pb-8 text-[12px] font-normal text-white uppercase tracking-[-0.48px]">
            <a href="#" className="underline">Licences</a>
            <a href="#" className="underline">Privacy policy</a>
          </div>

          {/* Brand — overflows bottom intentionally */}
          <div className="flex flex-col gap-3 items-start overflow-clip w-full">
            <p
              className="text-[10px] font-normal text-white uppercase leading-[1.1]"
              style={{ fontFamily: "var(--font-geist-mono)" }}
            >
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

/* ── Project card ── */
function ProjectCard({ title, tags, img, tall, mobile = false }: {
  title: string;
  tags: readonly string[];
  img: string;
  tall: boolean;
  mobile?: boolean;
}) {
  const imgHeight = mobile
    ? "h-[390px]"
    : tall ? "h-[744px]" : "h-[699px]";

  return (
    <div className="flex flex-col gap-[10px]">
      <div className={`relative w-full overflow-hidden flex flex-col justify-end pb-4 pl-4 ${imgHeight}`}>
        <img src={img} alt="" className="absolute inset-0 w-full h-full object-cover pointer-events-none" />
        <div className="relative flex gap-3 items-center">
          {tags.map(tag => (
            <span
              key={tag}
              className="backdrop-blur-[10px] bg-[rgba(255,255,255,0.3)] px-2 py-1 rounded-[24px] text-[14px] font-medium text-[#111] tracking-[-0.04em] whitespace-nowrap"
              style={{ fontFamily: "var(--font-inter)" }}
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
      <div className="flex items-center justify-between">
        <p
          className="font-black leading-[1.1] text-black uppercase tracking-[-0.04em] whitespace-nowrap
                     text-[24px] md:text-[36px]"
          style={{ fontFamily: "var(--font-inter)" }}
        >
          {title}
        </p>
        <svg width="20" height="20" viewBox="0 0 32 32" fill="none" aria-hidden className="shrink-0 size-5 md:size-8 [stroke-width:2.5] md:[stroke-width:4]">
          <path d="M8 24L24 8M24 8H12M24 8V20" stroke="black" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>
    </div>
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
      className="bg-[#f1f1f1] border border-[#ddd] rounded-[4px] p-6 flex flex-col gap-4 w-[260px] md:w-[353px]"
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

/* ── News card ── */
function NewsCard({ img, desc, offset = false }: { img: string; desc: string; offset?: boolean }) {
  return (
    <div
      className={`flex flex-col gap-4 items-start shrink-0 w-[353px] ${offset ? "pt-[120px]" : "h-[581px]"}`}
      style={{ fontFamily: "var(--font-inter)" }}
    >
      <div className="relative h-[469px] w-full shrink-0 overflow-hidden">
        <img src={img} alt="" className="absolute inset-0 w-full h-full object-cover pointer-events-none" />
      </div>
      <p className={`text-[14px] font-normal text-[#1f1f1f] tracking-[-0.56px] leading-[1.3] ${offset ? "" : "flex-1"}`}>
        {desc}
      </p>
      <div className="border-b border-black flex gap-[10px] items-center py-1 shrink-0">
        <span className="text-[14px] font-medium text-black tracking-[-0.56px] whitespace-nowrap">Read more</span>
        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden>
          <path d="M4.5 13.5L13.5 4.5M13.5 4.5H7.5M13.5 4.5V10.5" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>
    </div>
  );
}

/* ── CTA block with corner brackets ── */
function WorkCTA() {
  return (
    <div className="relative flex-none md:w-[465px] p-3">
      <span className="absolute top-0 left-0 w-4 h-4 border-t border-l border-[#1f1f1f]" />
      <span className="absolute top-0 right-0 w-4 h-4 border-t border-r border-[#1f1f1f]" />
      <span className="absolute bottom-0 left-0 w-4 h-4 border-b border-l border-[#1f1f1f]" />
      <span className="absolute bottom-0 right-0 w-4 h-4 border-b border-r border-[#1f1f1f]" />
      <div className="flex flex-col gap-[10px]">
        <p
          className="text-[14px] font-normal italic leading-[1.3] text-[#1f1f1f] tracking-[-0.04em]"
          style={{ fontFamily: "var(--font-inter)" }}
        >
          Discover how my creativity transforms ideas into impactful digital experiences —<br className="md:hidden" /> schedule a call with me to get started.
        </p>
        <button
          className="self-start bg-black text-white text-[14px] font-medium px-4 py-3 rounded-[24px] tracking-[-0.04em]"
          style={{ fontFamily: "var(--font-inter)" }}
        >
          Let&apos;s talk
        </button>
      </div>
    </div>
  );
}
