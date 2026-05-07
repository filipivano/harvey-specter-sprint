import TalkButton from "@/components/TalkButton";

export default function WorkCTA() {
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
          Discover how my creativity transforms ideas into impactful digital
          experiences —<br className="md:hidden" /> schedule a call with me to
          get started.
        </p>
        <TalkButton variant="dark" className="self-start tracking-[-0.04em]" style={{ fontFamily: "var(--font-inter)" }} />
      </div>
    </div>
  );
}
