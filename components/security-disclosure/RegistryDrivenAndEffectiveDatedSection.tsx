"use client"
import React, { useState } from "react";

export default function RegistryDrivenAndEffectiveDatedSection() {
  const [searchTerm, setSearchTerm] = useState("");
  const [assetType, setAssetType] = useState("Asset type");
  const [scopeStatus, setScopeStatus] = useState("Scope status");
  const [bountyEligibility, setBountyEligibility] =
    useState("Bounty eligibility");

  const rows = [
    {
      asset: "[ Registry-derived asset name ]",
      type: "Web / API / Mobile",
      scopeStatus: "In scope",
      scopeStatusType: "green",
      environment: "Production",
      bountyEligibility: "[ status ]",
    },
    {
      asset: "[ Registry-derived asset name ]",
      type: "API",
      scopeStatus: "Ask first",
      scopeStatusType: "yellow",
      environment: "Production",
      bountyEligibility: "[ status ]",
    },
  ] as const;

  return (
    <section className="relative w-full bg-white py-20 px-6 md:px-12 lg:px-20 overflow-hidden font-sans">
      <div className="max-w-6xl mx-auto flex flex-col items-start w-full">
        {/* Header Section */}
        <div className="mb-8 w-full">
          {/* Subtitle (Eye tag size: xs) */}
          <span className="text-[#A8843A] text-xs font-semibold tracking-[0.2em] uppercase mb-3 block">
            IN-SCOPE ASSET REGISTRY
          </span>

          {/* Main Headline (32px for lg devices) */}
          <h1 className="text-3xl lg:text-[32px] font-bold text-[#0b1329] leading-tight tracking-tight">
            Registry-driven and effective-dated — never a static prose list
          </h1>
        </div>

        {/* Filter / Search Controls */}
        <div className="flex flex-wrap items-center gap-3 mb-8 w-full">
          {/* Search Input */}
          <div className="relative flex-1 min-w-[240px]">
            <input
              type="text"
              placeholder="Search asset name / domain"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full bg-white border border-[#DCD6C8] rounded-md px-4 py-2.5 text-gray-700 text-sm focus:outline-none focus:border-[#0b1329]"
            />
          </div>

          {/* Asset Type Dropdown */}
          <div className="relative">
            <select
              value={assetType}
              onChange={(e) => setAssetType(e.target.value)}
              className="bg-white border border-[#DCD6C8] rounded-md px-4 py-2.5 text-gray-700 text-sm focus:outline-none focus:border-[#0b1329] appearance-none pr-10"
            >
              <option value="Asset type">Asset type</option>
              <option value="Web">Web</option>
              <option value="API">API</option>
              <option value="Mobile">Mobile</option>
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3 text-gray-500">
              <svg className="h-4 w-4 fill-current" viewBox="0 0 20 20">
                <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" />
              </svg>
            </div>
          </div>

          {/* Scope Status Dropdown */}
          <div className="relative">
            <select
              value={scopeStatus}
              onChange={(e) => setScopeStatus(e.target.value)}
              className="bg-white border border-[#DCD6C8] rounded-md px-4 py-2.5 text-gray-700 text-sm focus:outline-none focus:border-[#0b1329] appearance-none pr-10"
            >
              <option value="Scope status">Scope status</option>
              <option value="In scope">In scope</option>
              <option value="Ask first">Ask first</option>
              <option value="Out of scope">Out of scope</option>
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3 text-gray-500">
              <svg className="h-4 w-4 fill-current" viewBox="0 0 20 20">
                <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" />
              </svg>
            </div>
          </div>

          {/* Bounty Eligibility Dropdown */}
          <div className="relative">
            <select
              value={bountyEligibility}
              onChange={(e) => setBountyEligibility(e.target.value)}
              className="bg-white border border-[#DCD6C8] rounded-md px-4 py-2.5 text-gray-700 text-sm focus:outline-none focus:border-[#0b1329] appearance-none pr-10"
            >
              <option value="Bounty eligibility">Bounty eligibility</option>
              <option value="Eligible">Eligible</option>
              <option value="Not eligible">Not eligible</option>
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3 text-gray-500">
              <svg className="h-4 w-4 fill-current" viewBox="0 0 20 20">
                <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" />
              </svg>
            </div>
          </div>
        </div>

        {/* Semantic HTML Table Container with Rounded Border */}
        <div
          style={{ borderRadius: "12px" }}
          className="w-full overflow-x-auto border border-[#DCD6C8] bg-white shadow-sm"
        >
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-[#DCD6C8] bg-[#F7F4EC] text-xs font-semibold tracking-[0.15em] text-[#0b1329] uppercase">
                <th className="py-4 px-6 font-semibold w-1/4">Asset</th>
                <th className="py-4 px-6 font-semibold w-1/4">Type</th>
                <th className="py-4 px-6 font-semibold w-1/6">Scope Status</th>
                <th className="py-4 px-6 font-semibold w-1/6">Environment</th>
                <th className="py-4 px-6 font-semibold w-1/6">
                  Bounty Eligibility
                </th>
              </tr>
            </thead>
            <tbody>
              {rows.map((row, index) => (
                <tr
                  key={index}
                  className="border-b border-[#DCD6C8] last:border-b-0 bg-white"
                >
                  <td className="py-5 px-6 text-[#0b1329] text-sm font-semibold tracking-tight align-middle">
                    {row.asset}
                  </td>
                  <td className="py-5 px-6 text-gray-600 text-sm font-light align-middle">
                    {row.type}
                  </td>
                  <td className="py-5 px-6 align-middle">
                    {row.scopeStatusType === "green" ? (
                      <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-[#E6F4EA] text-[#137333] border border-[#CEEAD6]">
                        {row.scopeStatus}
                      </span>
                    ) : (
                      <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-[#FEF7E0] text-[#B06000] border border-[#FEEFC3]">
                        {row.scopeStatus}
                      </span>
                    )}
                  </td>
                  <td className="py-5 px-6 text-gray-600 text-sm font-light align-middle">
                    {row.environment}
                  </td>
                  <td className="py-5 px-6 text-gray-600 text-sm font-light align-middle">
                    {row.bountyEligibility}
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
