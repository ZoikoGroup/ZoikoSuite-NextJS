import React from 'react';

export default function SixExecutionPathsSection() {
  const cards = [
    {
      title: 'Standard self-serve',
      description: 'Open current DPA -> verify customer/entity/service -> generate schedule -> review -> accept -> receipt + downloadable executed copy.',
    },
    {
      title: 'Order-form incorporation',
      description: 'Order form identifies current DPA URL/version -> customer signs commercial agreement -> execution record stores DPA version.',
    },
    {
      title: 'Negotiated enterprise',
      description: 'Request review -> redline workspace -> clause deviations -> privacy/security approvals -> final executed version.',
    },
    {
      title: 'Public sector / special jurisdiction',
      description: 'Qualification -> Legal review -> approved alternative terms or addendum -> execution.',
    },
    {
      title: 'Partner / reseller',
      description: 'Role determination -> direct/indirect customer allocation -> processor/subprocessor terms -> execution path.',
    },
    {
      title: 'Existing customer upgrade',
      description: 'New service/deployment changes processing -> impact check -> schedule/addendum update if required -> notice/acceptance.',
    },
  ] as const;

  return (
    <section className="relative w-full bg-[#F6F1E6] py-20 px-6 md:px-12 lg:px-20 overflow-hidden font-sans">
      <div className="max-w-6xl mx-auto flex flex-col items-start w-full">
        
        {/* Header Section */}
        <div className="mb-12 w-full">
          {/* Subtitle (Eye tag size: xs) */}
          <span className="text-[#A8843A] text-xs font-semibold tracking-[0.2em] uppercase mb-3 block">
            EXECUTE / REQUEST DPA
          </span>

          {/* Main Headline (32px for lg devices) */}
          <h1 className="text-3xl lg:text-[32px] font-bold text-[#0b1329] leading-tight tracking-tight">
            Six execution paths, chosen by context
          </h1>
        </div>

        {/* Grid of Cards */}
        <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {cards.map((card, index) => (
            <div
              key={index}
              style={{ borderRadius: '14px' }}
              className="bg-white border border-[#DCD6C8] p-6 shadow-sm flex flex-col gap-2"
            >
              <h3 className="text-[#0b1329] text-base font-semibold tracking-tight">
                {card.title}
              </h3>
              <p className="text-gray-600 font-light leading-relaxed text-[15.5px]">
                {card.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}