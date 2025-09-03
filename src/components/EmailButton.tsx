'use client';

import React from 'react';

type Props = {
  className?: string;
};

export default function EmailButton({ className }: Props) {
  const user = 'yasuhiro';
  const domain = 'fragmentpractice.com';

  const subject = encodeURIComponent('[Business Inquiry] Fragment Practice LLC');
  const body = encodeURIComponent(
    '【Organization/Company】\n【Point of Contact】\n【Purpose / Overview】\n' +
      '【Preferred format】 Talk / Dialog Session / Light Research / AI Relation Design\n' +
      '【Tentative dates / Time zone】\n【Confidentiality】 NDA needed / Not required\n【Notes】'
  );

  const mailto = `mailto:${user}@${domain}?subject=${subject}&body=${body}`;

  return (
    <a
      href={mailto}
      className={[
        'inline-block bg-neutral-800 hover:bg-neutral-700 text-white font-semibold px-5 py-3 rounded-md underline underline-offset-2',
        className ?? '',
      ]
        .filter(Boolean)
        .join(' ')}
    >
      Send email to yasuhiro[at]fragmentpractice.com
    </a>
  );
}