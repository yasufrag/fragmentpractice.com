// src/components/CopyChip.tsx
"use client";

import { useState } from "react";

type Props = {
  text: string;
  label?: string;       // 表示文言（既定: "コピー"）
  className?: string;   // 例: "chip ghost"
};

export default function CopyChip({ text, label = "コピー", className }: Props) {
  const [done, setDone] = useState(false);

  async function handleClick() {
    try {
      if (navigator?.clipboard?.writeText) {
        await navigator.clipboard.writeText(text);
      } else {
        const ta = document.createElement("textarea");
        ta.value = text;
        ta.style.position = "fixed";
        ta.style.top = "-1000px";
        document.body.appendChild(ta);
        ta.select();
        document.execCommand("copy");
        document.body.removeChild(ta);
      }
      setDone(true);
      setTimeout(() => setDone(false), 1500);
    } catch {
      setDone(true);
      setTimeout(() => setDone(false), 800);
    }
  }

  return (
    <button
      type="button"
      onClick={handleClick}
      aria-label={`${label}: ${text}`}
      className={className ?? "chip ghost"}
      style={{ cursor: "pointer" }}
    >
      {done ? "✓ コピー済み" : label}
    </button>
  );
}