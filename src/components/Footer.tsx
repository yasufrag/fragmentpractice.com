// src/components/Footer.tsx
export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="fp-container">
        <div className="footerbar" role="contentinfo" aria-label="サイトフッター">
          {/* 上段: 規約リンク */}
          <nav className="legal" aria-label="法的リンク">
            <a href="/terms">利用規約</a>
            <span className="sep">・</span>
            <a href="/privacy">プライバシーポリシー</a>
          </nav>

          {/* 下段: コピーライト（常に最下段） */}
          <div className="copy">© 2025 Fragment Practice</div>
        </div>
      </div>
    </footer>
  );
}