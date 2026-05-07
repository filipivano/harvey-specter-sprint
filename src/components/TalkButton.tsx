"use client";

import Button from "@/components/Button";

type Props = {
  variant?: "dark" | "outline-white" | "light";
  className?: string;
  style?: React.CSSProperties;
};

export default function TalkButton({ variant = "dark", className, style }: Props) {
  return (
    <Button
      variant={variant}
      className={className}
      style={style}
      onClick={() => window.dispatchEvent(new CustomEvent("contact:open"))}
    >
      Let&apos;s talk
    </Button>
  );
}
