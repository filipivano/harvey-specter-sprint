import { client } from "@/sanity/lib/client";
import TalkButton from "@/components/TalkButton";
import FooterReveal from "@/components/FooterReveal";
import type { SiteSettings } from "@/components/ContactModal";

const SETTINGS_QUERY = `*[_type == "siteSettings"][0]{
  email, phone, location, instagram, facebook, twitter, linkedin
}`;

export default async function Footer() {
  const s = await client.fetch<SiteSettings | null>(SETTINGS_QUERY);

  const socials = [
    s?.facebook  && (s.facebook.startsWith("@")  ? s.facebook.slice(1)  : s.facebook),
    s?.instagram && (s.instagram.startsWith("@") ? s.instagram.slice(1) : s.instagram),
  ].filter(Boolean) as string[];

  const socialsRight = [
    s?.twitter  && (s.twitter.startsWith("@")  ? "X.com"    : s.twitter),
    s?.linkedin && (s.linkedin.startsWith("@") ? "LinkedIn" : s.linkedin),
  ].filter(Boolean) as string[];

  return (
    <>
      <FooterReveal />
      <footer
        id="site-footer"
        className="sticky bottom-0 z-0 bg-black pt-[48px] px-4 md:px-8"
        data-nav-dark
        style={{ fontFamily: "var(--font-inter)" }}
      >
        {/* Desktop */}
        <div className="hidden md:flex flex-col gap-[120px]">
          <div className="flex flex-col gap-[48px] w-full">
            <div className="flex items-start justify-between w-full">
              <div className="flex flex-col gap-3 w-[298px]">
                <p className="text-[24px] font-light italic text-white uppercase tracking-[-0.96px] leading-[1.1]">
                  Have a <strong className="font-black not-italic">project</strong> in mind?
                </p>
                <TalkButton variant="outline-white" className="w-fit tracking-[-0.56px]" />
              </div>
              <div className="text-[18px] font-normal text-white uppercase tracking-[-0.72px] text-center w-[298px]">
                {(socials.length ? socials : ["Facebook", "Instagram"]).map((s) => (
                  <p key={s} className="leading-[1.1]">{s}</p>
                ))}
              </div>
              <div className="text-[18px] font-normal text-white uppercase tracking-[-0.72px] text-right w-[298px]">
                {(socialsRight.length ? socialsRight : ["X.com", "Linkedin"]).map((s) => (
                  <p key={s} className="leading-[1.1]">{s}</p>
                ))}
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
                <TalkButton variant="outline-white" className="w-fit tracking-[-0.56px]" />
              </div>
              {[...(socials.length ? socials : ["Facebook", "Instagram"]), ...(socialsRight.length ? socialsRight : ["X.com", "Linkedin"])].map((s) => (
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
