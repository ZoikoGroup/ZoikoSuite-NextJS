import React from "react";

export default function MoreThanBrowserCookiesSection() {
  const rows = [
    {
      technologyType: "HTTP cookie",
      plainLanguageExplanation:
        "Small browser-stored value sent with relevant web requests.",
      inventoryMetadata:
        "Name, domain, path, party, session/persistent, expiry.",
    },
    {
      technologyType: "Web / local storage",
      plainLanguageExplanation:
        "Browser storage that can persist values without being sent automatically with requests.",
      inventoryMetadata:
        "Key/object, origin, purpose, persistence, deletion trigger.",
    },
    {
      technologyType: "Tracking pixel / beacon",
      plainLanguageExplanation:
        "Request or tiny resource used to record an event or load identifier-linked data.",
      inventoryMetadata: "Vendor, endpoint, event, data fields, consent gate.",
    },
    {
      technologyType: "Script / tag",
      plainLanguageExplanation:
        "Code executed in the page that may read/write data or send events.",
      inventoryMetadata: "Tag owner, vendor, purpose, trigger, blocking rule.",
    },
    {
      technologyType: "SDK",
      plainLanguageExplanation:
        "Software component embedded in an app or web experience.",
      inventoryMetadata:
        "Provider, version, capabilities, data fields, platform scope.",
    },
    {
      technologyType: "Fingerprinting / device signals",
      plainLanguageExplanation:
        "Use of device/browser characteristics to distinguish or assess devices.",
      inventoryMetadata:
        "Feature set, purpose, legal review, consent/exception basis.",
    },
  ] as const;

  return (
    <section className="relative w-full bg-white py-20 px-6 md:px-12 lg:px-20 overflow-hidden font-sans">
      <div className="max-w-6xl mx-auto flex flex-col items-start">
        {/* Header Section */}
        <div className="mb-12">
          {/* Subtitle (Eye tag size: xs) */}
          <span className="text-[#A8843A] text-xs font-semibold tracking-[0.2em] uppercase mb-3 block">
            WHAT COOKIES & SIMILAR TECHNOLOGIES ARE
          </span>

          {/* Main Headline (32px for lg devices) */}
          <h1 className="text-3xl lg:text-[32px] font-bold text-[#0b1329] leading-tight tracking-tight">
            More than browser cookies
          </h1>
        </div>

        {/* Table Section */}
        <div className="w-full flex flex-col border-t border-[#DCD6C8]">
          {/* Table Header */}
          <div className="w-full py-4 px-6 border-b border-[#DCD6C8] grid grid-cols-1 md:grid-cols-12 gap-4 text-xs font-semibold tracking-[0.15em] text-[#0b1329] uppercase">
            <div className="md:col-span-3">Technology Type</div>
            <div className="md:col-span-5">Plain-Language Explanation</div>
            <div className="md:col-span-4">Inventory Metadata</div>
          </div>

          {/* Table Rows */}
          {rows.map((row, index) => (
            <div
              key={index}
              className="w-full py-6 px-6 border-b border-[#DCD6C8] grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-6 items-center bg-white"
            >
              {/* Technology Type Column */}
              <div className="md:col-span-3 text-[#0b1329] text-base font-semibold tracking-tight">
                {row.technologyType}
              </div>

              {/* Plain-Language Explanation Column */}
              <div className="md:col-span-5 text-gray-600 font-light leading-relaxed text-[15.5px]">
                {row.plainLanguageExplanation}
              </div>

              {/* Inventory Metadata Column */}
              <div className="md:col-span-4 text-gray-600 font-light leading-relaxed text-[15.5px]">
                {row.inventoryMetadata}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
