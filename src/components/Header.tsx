"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import BrandLogo from "@/components/BrandLogo";

export default function Header() {
  const [open, setOpen] = useState(false);

  // メニュー開閉でスクロールロック
  useEffect(() => {
    const root = document.documentElement;
    if (open) root.classList.add("menu-open");
    else root.classList.remove("menu-open");
    return () => root.classList.remove("menu-open");
  }, [open]);

  return (
    <header className="site-header">
      <div className="container nav" aria-label="グローバルナビ">
        {/* Brand */}
        <div className="brand">
          <Link href="/" aria-label="Fragment Practice ホーム" className="brand-link">
            <BrandLogo />
          </Link>
        </div>

        {/* Desktop nav */}
        <nav className="navlinks" aria-label="主要ページ">
          <Link href="/company">Company</Link>
          <Link href="/work">Work</Link>
          <Link href="/zine">ZINE</Link>
          <Link href="/contact">Contact</Link>
        </nav>

        {/* Hamburger */}
        <button
          className="hamburger"
          aria-label="メニューを開く"
          aria-controls="mobile-menu"
          aria-expanded={open}
          onClick={() => setOpen(true)}
        >
          <span className="bar" />
          <span className="bar" />
          <span className="bar" />
        </button>
      </div>

      {/* === Fullscreen Mobile Menu === */}
      <div
        id="mobile-menu"
        className={`mobile-menu fullscreen ${open ? "open" : ""}`}
        role="dialog"
        aria-modal="true"
        aria-label="サイトメニュー"
      >
        <button
          className="panel-close"
          aria-label="メニューを閉じる"
          onClick={() => setOpen(false)}
        >
          <span className="x-1" />
          <span className="x-2" />
        </button>

        <nav className="mobile-nav">
          <Link href="/company" onClick={() => setOpen(false)}>Company</Link>
          <Link href="/work" onClick={() => setOpen(false)}>Work</Link>
          <Link href="/zine" onClick={() => setOpen(false)}>ZINE</Link>
          <Link href="/contact" onClick={() => setOpen(false)}>Contact</Link>
        </nav>

        <div className="mobile-meta">
          <div className="copy">© {new Date().getFullYear()} Fragment Practice</div>
        </div>
      </div>
    </header>
  );
}