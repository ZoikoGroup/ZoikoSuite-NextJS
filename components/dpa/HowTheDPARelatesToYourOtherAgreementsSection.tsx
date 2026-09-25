import React from 'react';

export default function HowTheDPARelatesToYourOtherAgreementsSection() {
  const rows = [
    {
      document: 'Order Form / Subscription Agreement',
      coreFocus: 'Commercial scope, purchased services, entities, deployment, term.',
      legalEffect: 'Defines service scope and customer identity; DPA references the applicable agreement.',
    },
    {
      document: 'Terms of Service / MSA',
      coreFocus: 'General commercial/legal relationship.',
      legalEffect: 'DPA governs personal-data processing to the extent of conflict, subject to Legal-approved precedence language.',
    },
    {
      document: 'Data Processing Agreement',
      coreFocus: 'Controller/processor obligations and processing schedules.',
      legalEffect: 'Canonical privacy-processing instrument for in-scope service processing.',
    },
    {
      document: 'Security / TOM Schedule',
      coreFocus: 'Approved technical and organizational measures.',
      legalEffect: 'Incorporated schedule, versioned and tied to service/deployment scope.',
    },
    {
      document: 'Subprocessor List',
      coreFocus: 'Approved subprocessor registry and locations/functions.',
      legalEffect: 'Live registry governed by authorization/notice mechanics in the DPA.',
    },
    {
      document: 'Transfer Schedule',
      coreFocus: 'Applicable SCCs, UK Addendum/IDTA, adequacy, or other safeguard.',
      legalEffect: 'Activated only for relevant restricted/international transfers.',
    },
  ] as const;

  return (
    <section className="relative w-full bg-white py-20 px-6 md:px-12 lg:px-20 overflow-hidden font-sans">
      <div className="max-w-6xl mx-auto flex flex-col items-start w-full">
        
        {/* Header Section */}
        <div className="mb-12 w-full">
          {/* Subtitle (Eye tag size: xs) */}
          <span className="text-[#A8843A] text-xs font-semibold tracking-[0.2em] uppercase mb-3 block">
            CONTRACT STACK
          </span>

          {/* Main Headline (32px for lg devices) */}
          <h1 className="text-3xl lg:text-[32px] font-bold text-[#0b1329] leading-tight tracking-tight">
            How the DPA relates to your other agreements
          </h1>
        </div>

        {/* Semantic HTML Table */}
        <div className="w-full overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-t border-b border-[#DCD6C8] text-xs font-semibold tracking-[0.15em] text-[#0b1329] uppercase">
                <th className="py-4 pr-6 font-semibold w-1/3">
                  Document
                </th>
                <th className="py-4 px-6 font-semibold w-1/3">
                  Core Focus
                </th>
                <th className="py-4 pl-6 font-semibold w-1/3">
                  Legal Effect
                </th>
              </tr>
            </thead>
            <tbody>
              {rows.map((row, index) => (
                <tr
                  key={index}
                  className="border-b border-[#DCD6C8] bg-white"
                >
                  <td className="py-6 pr-6 text-[#0b1329] text-base font-semibold tracking-tight align-top">
                    {row.document}
                  </td>
                  <td className="py-6 px-6 text-gray-600 font-light leading-relaxed text-[15.5px] align-top">
                    {row.coreFocus}
                  </td>
                  <td className="py-6 pl-6 text-gray-600 font-light leading-relaxed text-[15.5px] align-top">
                    {row.legalEffect}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

      </div>
    </section>
  );
}