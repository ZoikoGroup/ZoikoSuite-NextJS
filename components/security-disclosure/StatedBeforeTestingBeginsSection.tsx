import React from 'react';

export default function StatedBeforeTestingBeginsSection() {
  const cards = [
    {
      title: 'Denial of service / resource exhaustion',
      description: 'Do not intentionally degrade availability or generate disruptive load unless explicitly authorized.',
    },
    {
      title: 'Social engineering / phishing',
      description: 'Do not target employees, customers, partners, or suppliers.',
    },
    {
      title: 'Physical security',
      description: 'No physical intrusion, tailgating, or device theft.',
    },
    {
      title: 'Privacy-invasive testing',
      description: 'Do not access, download, alter, or retain more data than needed to demonstrate a vulnerability.',
    },
    {
      title: 'Persistence / lateral movement',
      description: 'Do not establish persistence or expand access beyond minimal proof unless specifically authorized.',
    },
    {
      title: 'Destructive actions',
      description: 'Do not delete, modify, or corrupt customer/system data to prove impact.',
    },
  ] as const;

  return (
    <section className="relative w-full bg-[#F6F1E6] py-20 px-6 md:px-12 lg:px-20 overflow-hidden font-sans">
      <div className="max-w-6xl mx-auto flex flex-col items-start w-full">
        
        {/* Header Section */}
        <div className="mb-12 w-full">
          {/* Subtitle (Eye tag size: xs) */}
          <span className="text-[#A8843A] text-xs font-semibold tracking-[0.2em] uppercase mb-3 block">
            OUT-OF-SCOPE & RESTRICTED TESTING
          </span>

          {/* Main Headline (32px for lg devices) */}
          <h1 className="text-3xl lg:text-[32px] font-bold text-[#0b1329] leading-tight tracking-tight">
            Stated before testing begins, not discovered after
          </h1>
        </div>

        {/* Cards Grid (2 columns on desktop) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
          {cards.map((card, index) => (
            <div
              key={index}
              style={{ borderRadius: '12px' }}
              className="bg-white border border-[#DCD6C8] border-l-4 border-l-[#C05645] p-8 flex flex-col justify-start shadow-sm"
            >
              <h2 className="text-base font-semibold text-[#0b1329] tracking-tight mb-3">
                {card.title}
              </h2>
              <p className="text-gray-600 font-light leading-relaxed text-[15px]">
                {card.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
