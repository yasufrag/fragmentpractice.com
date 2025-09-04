// app/company/page.tsx
export default function Company() {
  return (
    <div className="container section">
      <h1 className="h2">会社概要</h1>
      <table style={{ width:'100%', borderCollapse:'collapse', marginTop:16 }}>
        <tbody>
          {[
            ['商号','Fragment Practice合同会社'],
            ['所在地','〒760-0018 香川県高松市天神前10番5号 高松セントラルスカイビルディング3F south'],
            ['設立','2025年8月12日'],
            ['代表','新庄 泰大'],
            ['事業','リフレクション設計 / AI×言語実験 / 出版 / コンサルティング'],
            ['連絡先','TEL 087-810-3037'],
            ['法人番号','7470003002956']
          ].map(([k,v])=>(
            <tr key={k}>
              <th style={{textAlign:'left', padding:'10px 8px', borderBottom:'1px solid var(--line)', width:'180px', color:'var(--muted)'}}>{k}</th>
              <td style={{padding:'10px 8px', borderBottom:'1px solid var(--line)'}}>{v}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}