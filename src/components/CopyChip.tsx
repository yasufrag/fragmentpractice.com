// src/components/CopyChip.tsx
"use client";

import { useId, useState } from "react";

interface Props {
  text: string;
  /** 表示文言（既定: "コピー"） */
  label?: string;
  /** 例: "chip ghost" */
  className?: string;
}

export default function CopyChip({ text, label = "コピー", className }: Props) {
  const [done, setDone] = useState(false);
  const liveId = useId(); // SR向けライブ領域ID

  const handleClick = async () => {
    try {
      if (navigator?.clipboard?.writeText) {
        await navigator.clipboard.writeText(text);
      } else {
        // フォールバック（古い環境向け）
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
      window.setTimeout(() => setDone(false), 1500);
    } catch {
      // 失敗時も一旦フィードバック（必要なら別文言に）
      setDone(true);
      window.setTimeout(() => setDone(false), 800);
    }
  };

  return (
    <>
      <button
        type="button"
        // Promise を返さない形にラップ（no-misused-promises の回避）
        onClick={() => { void handleClick(); }}
        aria-label={`${label}: ${text}`}
        aria-describedby={liveId}
        className={className ?? "chip ghost"}
        style={{ cursor: "pointer" }}
      >
        {done ? "✓ コピー済み" : label}
      </button>

      {/* スクリーンリーダー向けのライブリージョン（視覚表示は不要） */}
      <span
        id={liveId}
        aria-live="polite"
        aria-atomic="true"
        style={{
          position: "absolute",
          width: 1,
          height: 1,
          padding: 0,
          margin: -1,
          overflow: "hidden",
          clip: "rect(0 0 0 0)",
          whiteSpace: "nowrap",
          border: 0,
        }}
      >
        {done ? "コピーしました" : ""}
      </span>
    </>
  );
}