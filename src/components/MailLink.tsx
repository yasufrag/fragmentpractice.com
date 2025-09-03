"use client";
export default function MailLink() {
  const u = "yasuhiro";
  const d = "fragmentpractice.com";
  const mail = `${u}@${d}`;
  const subject = encodeURIComponent(
    "[Business Inquiry] Fragment Practice LLC"
  );
  const body = encodeURIComponent(
    "【Organization/Company】\n【Point of Contact】\n【Purpose / Overview】\n【Preferred format】 Talk / Dialog Session / Light Research / AI Relation Design\n【Tentative dates / Time zone】\n【Confidentiality】 NDA needed / Not required\n【Notes】"
  );
  return (
    <a
      href={`mailto:${mail}?subject=${subject}&body=${body}`}
      className="inline-block bg-neutral-800 hover:bg-neutral-700 text-white font-semibold px-5 py-3 rounded-md underline underline-offset-2"
    >
      {mail} へメールする
    </a>
  );
}
