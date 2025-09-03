export const metadata = {
  metadataBase: new URL("https://fragmentpractice.com"),
  title: { default: "Fragment Practice合同会社", template: "%s | Fragment Practice合同会社" },
  description:
    "AIとの対話を通じて、生活と構文を再設計する実践。Fragments, ZINEs, and a layered syntax for living.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ja">
      <body className="bg-black text-white tracking-wide leading-relaxed antialiased">
        {children}
      </body>
    </html>
  );
}