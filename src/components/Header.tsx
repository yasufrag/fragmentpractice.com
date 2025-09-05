// components/Header.tsx
"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import BrandLogo from "@/components/BrandLogo";

export default function Header() {
  const [open, setOpen] = useState(false);
  const btnRef = useRef<HTMLButtonElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);

  // Escで閉じる／開閉時にスクロール固定
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") setOpen(false); };
    document.addEventListener("keydown", onKey);

    // スクロール固定
    document.body.style.overflow = open ? "hidden" : "";

    // ← 追記：メニュー開閉フラグ（スタイル切替用）
    document.body.classList.toggle("menu-open", open);

    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
      document.body.classList.remove("menu-open");
    };
  }, [open]);

  // メニュー内リンククリック時に閉じてフォーカス返却
  const closeAndFocus = () => {
    setOpen(false);
    btnRef.current?.focus();
  };

  return (
    <header className="site-header" role="banner">
      <div className="container nav">
        <div className="brand">
          <Link href="/" aria-label="Fragment Practice ホーム" className="brand-link">
            <BrandLogo size="header" />
          </Link>
        </div>

        {/* デスクトップの横並びナビ */}
        <nav className="navlinks" aria-label="主要ナビゲーション">
          <Link href="/company">Company</Link>
          <Link href="/work">Work</Link>
          <Link href="/zine">ZINE</Link>
          <Link href="/contact">Contact</Link>
        </nav>

        {/* モバイル：ハンバーガー */}
        <button
          ref={btnRef}
          className="hamburger"
          aria-label={open ? "メニューを閉じる" : "メニューを開く"}
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen(!open)}
        >
          <span aria-hidden className={`bar ${open ? "bar-1-open" : ""}`} />
          <span aria-hidden className={`bar ${open ? "bar-2-open" : ""}`} />
          <span aria-hidden className={`bar ${open ? "bar-3-open" : ""}`} />
        </button>

        {/* バックドロップ */}
        {open && (
          <button
            aria-hidden
            className="backdrop"
            onClick={() => setOpen(false)}
            tabIndex={-1}
          />
        )}

        {/* モバイルメニュー本体 */}
        <div
          id="mobile-menu"
          ref={panelRef}
          className={`mobile-menu ${open ? "open" : ""}`}
          role="dialog"
          aria-modal="true"
          aria-label="モバイルメニュー"
        >
          {/* 右上クローズボタン（元に戻す） */}
          <button
            className="panel-close"
            aria-label="メニューを閉じる"
            onClick={closeAndFocus}
          >
            <span aria-hidden className="x-1" />
            <span aria-hidden className="x-2" />
          </button>

          <nav className="mobile-nav" onClick={closeAndFocus}>
            <Link href="/company">Company</Link>
            <Link href="/work">Work</Link>
            <Link href="/zine">ZINE</Link>
            <Link href="/contact">Contact</Link>
          </nav>

          <div className="mobile-meta">
            <span className="muted">© {new Date().getFullYear()} Fragment Practice</span>
          </div>
        </div>
      </div>
    </header>
  );
}