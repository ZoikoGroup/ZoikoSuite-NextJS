import React from 'react';

export default function IdentifiedPerProcessingActivitySection() {
  const rows = [
    {
      field: 'Customer / Controller party',
      requiredContent: 'Legal name, address, jurisdiction, authorized signatory or incorporation-by-reference method.',
    },
    {
      field: 'Zoiko party',
      requiredContent: 'Exact contracting/processing legal entity approved for the customer and service.',
    },
    {
      field: 'Role by processing activity',
      requiredContent: 'Controller / processor / subprocessor / independent controller / not applicable.',
    },
    {
      field: 'Authority basis',
      requiredContent: 'Order Form/MSA reference, click-to-accept authority, signed addendum, or negotiated agreement.',
    },
  ] as const;

  return (
    <section className="relative w-full bg-[#F6F1E6] py-20 px-6 md:px-12 lg:px-20 overflow-hidden font-sans">
      <div className="max-w-6xl mx-auto flex flex-col items-start w-full">
        
        {/* Header Section */}
        <div className="mb-12 w-full">
          {/* Subtitle (Eye tag size: xs) */}
          <span className="text-[#A8843A] text-xs font-semibold tracking-[0.2em] uppercase mb-3 block">
            PARTIES, ROLES & AUTHORITY
          </span>

          {/* Main Headline (32px for lg devices) */}
          <h1 className="text-3xl lg:text-[32px] font-bold text-[#0b1329] leading-tight tracking-tight">
            Identified per processing activity — never one global role
          </h1>
        </div>

        {/* Semantic HTML Table */}
        <div className="w-full overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-t border-b border-[#DCD6C8] text-xs font-semibold tracking-[0.15em] text-[#0b1329] uppercase">
                <th className="py-4 pr-6 font-semibold w-1/3">
                  Field
                </th>
                <th className="py-4 pl-6 font-semibold w-2/3">
                  Required Content
                </th>
              </tr>
            </thead>
            <tbody>
              {rows.map((row, index) => (
                <tr
                  key={index}
                  className="border-b border-[#DCD6C8] bg-[#F6F1E6]"
                >
                  <td className="py-6 pr-6 text-[#0b1329] text-base font-semibold tracking-tight align-top">
                    {row.field}
                  </td>
                  <td className="py-6 pl-6 text-gray-600 font-light leading-relaxed text-[15.5px] align-top">
                    {row.requiredContent}
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
