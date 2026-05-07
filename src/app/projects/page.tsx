import { client } from "@/sanity/lib/client";
import Navbar from "@/components/Navbar";
import Button from "@/components/Button";
import FooterReveal from "@/components/FooterReveal";
import ProjectCard from "@/components/ProjectCard";
import WorkCTA from "@/components/WorkCTA";

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

export default async function ProjectsPage() {
  const projects = await client.fetch<PortfolioItem[]>(PORTFOLIO_QUERY);

  const leftCol  = projects.filter((_, i) => i % 2 === 0);
  const rightCol = projects.filter((_, i) => i % 2 === 1);

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
                [ portfolio ]
              </p>
            </div>
            <h1
              className="
                w-full text-center text-black font-medium capitalize
                text-[26vw] tracking-[-0.07em] leading-[0.85]
                md:text-[13.75vw] md:leading-[1.0] md:whitespace-nowrap
              "
            >
              Projects
            </h1>
          </div>
        </section>

        {/* ── Selected Work ── */}
        <section className="bg-[#F5F5F4] px-4 py-12 md:px-8 md:py-[80px]">

          {/* Mobile header */}
          <div className="md:hidden flex flex-col gap-4 mb-8 uppercase">
            <p
              className="text-[14px] font-normal leading-[1.1] text-[#1f1f1f]"
              style={{ fontFamily: "var(--font-geist-mono)" }}
            >
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

          {/* Mobile grid */}
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

          {/* Desktop grid */}
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
                <p
                  className="-rotate-90 whitespace-nowrap text-[14px] font-normal leading-[1.1] text-[#1f1f1f] uppercase"
                  style={{ fontFamily: "var(--font-geist-mono)" }}
                >
                  [ portfolio ]
                </p>
              </div>
            </div>

            {/* Two staggered columns — left: even indexes, right: odd indexes */}
            <div className="flex gap-6 items-start w-full">

              {/* Left column */}
              <div className="flex-1 flex flex-col gap-[80px]">
                {leftCol.map((project) => (
                  <ProjectCard
                    key={project._id}
                    title={project.title}
                    tags={project.tags}
                    img={project.img ?? ""}
                    tall={project.tall}
                    link={project.link}
                  />
                ))}
                <WorkCTA />
              </div>

              {/* Right column — offset down to create stagger */}
              <div className="flex-1 flex flex-col gap-[117px] pt-[240px]">
                {rightCol.map((project) => (
                  <ProjectCard
                    key={project._id}
                    title={project.title}
                    tags={project.tags}
                    img={project.img ?? ""}
                    tall={project.tall}
                    link={project.link}
                  />
                ))}
              </div>

            </div>

          </div>

        </section>

        {/* ── CTA ── */}
        <section className="bg-[#F5F5F4] px-4 py-16 md:px-8 md:py-[120px] border-t border-[#e5e5e5]">
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
