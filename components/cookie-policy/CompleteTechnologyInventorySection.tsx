import React from "react";

export default function CompleteTechnologyInventorySection() {
  const rows = [
    {
      technology: "[ Registry-derived name ]",
      category: "Necessary",
      provider: "First party",
      duration: "Session",
      status: "Active",
      statusBg: "bg-emerald-100 text-emerald-800",
    },
    {
      technology: "[ Registry-derived name ]",
      category: "Analytics",
      provider: "[ Vendor ]",
      duration: "[ Duration ]",
      status: "Active",
      statusBg: "bg-white text-[#0b1329] border border-[#DCD6C8]",
    },
  ] as const;

  return (
    <section className="relative w-full bg-white py-20 px-6 md:px-12 lg:px-20 overflow-hidden font-sans">
      <div className="max-w-6xl mx-auto flex flex-col items-start">
        {/* Header Section */}
        <div className="mb-8">
          {/* Subtitle (Eye tag size: xs) */}
          <span className="text-[#A8843A] text-xs font-semibold tracking-[0.2em] uppercase mb-3 block">
            COMPLETE TECHNOLOGY INVENTORY
          </span>

          {/* Main Headline (32px for lg devices) */}
          <h1 className="text-3xl lg:text-[32px] font-bold text-[#0b1329] leading-tight tracking-tight">
            The primary proof surface — searchable, filterable, print-safe
          </h1>
        </div>

        {/* Filter / Search Bar Controls */}
        <div className="w-full flex flex-wrap items-center gap-3 mb-8">
          <div className="bg-white border border-[#DCD6C8] rounded-lg px-4 py-2.5 flex items-center shadow-sm w-full sm:w-72">
            <input
              type="text"
              placeholder="Search technology, vendor, purpose"
              className="w-full text-sm bg-transparent outline-none text-[#0b1329] placeholder-gray-400"
              readOnly
            />
          </div>

          <div className="bg-white border border-[#DCD6C8] rounded-lg px-4 py-2.5 flex items-center justify-between shadow-sm cursor-pointer text-sm text-[#0b1329] font-medium">
            <span>Category</span>
            <span className="ml-2 text-xs text-gray-500">▼</span>
          </div>

          <div className="bg-white border border-[#DCD6C8] rounded-lg px-4 py-2.5 flex items-center justify-between shadow-sm cursor-pointer text-sm text-[#0b1329] font-medium">
            <span>Provider</span>
            <span className="ml-2 text-xs text-gray-500">▼</span>
          </div>

          <div className="bg-white border border-[#DCD6C8] rounded-lg px-4 py-2.5 flex items-center justify-between shadow-sm cursor-pointer text-sm text-[#0b1329] font-medium">
            <span>Status</span>
            <span className="ml-2 text-xs text-gray-500">▼</span>
          </div>

          <div className="bg-white border border-[#DCD6C8] rounded-lg px-4 py-2.5 flex items-center shadow-sm cursor-pointer text-sm text-[#0b1329] font-medium">
            Show only optional
          </div>
        </div>

        {/* Table Container with Outer Border and Rounded Corners */}
        <div
          style={{ borderRadius: "14px" }}
          className="w-full overflow-x-auto bg-white border border-[#DCD6C8] shadow-sm"
        >
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-[#DCD6C8] text-xs font-semibold tracking-[0.15em] text-[#0b1329] uppercase bg-[#F6F1E6]">
                <th className="py-4 px-6 font-semibold">Technology</th>
                <th className="py-4 px-6 font-semibold">Category</th>
                <th className="py-4 px-6 font-semibold">Provider</th>
                <th className="py-4 px-6 font-semibold">Duration</th>
                <th className="py-4 px-6 font-semibold">Status</th>
                <th className="py-4 px-6 font-semibold">Detail</th>
              </tr>
            </thead>
            <tbody>
              {rows.map((row, index) => (
                <tr
                  key={index}
                  className="border-b last:border-b-0 border-[#DCD6C8] bg-white"
                >
                  <td className="py-6 px-6 text-[#0b1329] text-base font-semibold tracking-tight align-middle">
                    {row.technology}
                  </td>
                  <td className="py-6 px-6 text-gray-600 font-light leading-relaxed text-[15.5px] align-middle">
                    {row.category}
                  </td>
                  <td className="py-6 px-6 text-gray-600 font-light leading-relaxed text-[15.5px] align-middle">
                    {row.provider}
                  </td>
                  <td className="py-6 px-6 text-gray-600 font-light leading-relaxed text-[15.5px] align-middle">
                    {row.duration}
                  </td>
                  <td className="py-6 px-6 align-middle">
                    <span
                      className={`inline-block px-3 py-1 rounded-full text-xs font-semibold tracking-wider ${row.statusBg}`}
                    >
                      {row.status}
                    </span>
                  </td>
                  <td className="py-6 px-6 text-[#0b1329] font-medium text-[15.5px] align-middle cursor-pointer hover:underline">
                    View →
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
