"use client";
import React, { useState } from "react";

export default function MaintainedAsOperationalSecurityContentSection() {
  const [copied, setCopied] = useState(false);

  const codeSnippet = `# https://zoikosuite.com/.well-known/security.txt
Contact: mailto:security@zoikosuite.com
Expires: [ ISO 8601 date ]
Canonical: https://zoikosuite.com/.well-known/security.txt
Policy: https://zoikosuite.com/legal/security-disclosure
Encryption: https://zoikosuite.com/.well-known/pgp-key.txt
Preferred-Languages: en`;

  const handleCopy = () => {
    navigator.clipboard.writeText(codeSnippet);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="relative w-full bg-white py-20 px-6 md:px-12 lg:px-20 overflow-hidden font-sans">
      <div className="max-w-6xl mx-auto flex flex-col items-start w-full">
        {/* Header Section */}
        <div className="mb-12 w-full">
          {/* Subtitle (Eye tag size: xs) */}
          <span className="text-[#A8843A] text-xs font-semibold tracking-[0.2em] uppercase mb-3 block">
            SECURITY.TXT & MACHINE-READABLE DISCOVERY
          </span>

          {/* Main Headline (32px for lg devices) */}
          <h1 className="text-3xl lg:text-[32px] font-bold text-[#0b1329] leading-tight tracking-tight max-w-3xl">
            Maintained as operational security content, not generated once and
            forgotten
          </h1>
        </div>

        {/* Code Block Container */}
        <div
          style={{ borderRadius: "14px" }}
          className="w-full bg-[#0A1D34] border border-[#1E293B] shadow-lg overflow-hidden relative mb-6"
        >
          {/* Copy Button header if needed */}
          <div className="absolute top-4 right-4 z-10">
            <button
              onClick={handleCopy}
              className="bg-[#1E293B] text-gray-300 hover:text-white px-3 py-1.5 rounded text-xs font-medium transition-colors"
            >
              {copied ? "Copied!" : "Copy"}
            </button>
          </div>

          <div className="p-6 md:p-8 overflow-x-auto">
            <pre className="text-gray-200 font-mono text-xs md:text-sm leading-relaxed">
              <code>{codeSnippet}</code>
            </pre>
          </div>
        </div>

        {/* Bottom Alert / Note Box */}
        <div className="w-full bg-[#F6F1E6] border-l-4 border-l-[#A8843A] border border-[#DCD6C8] px-4 py-4 flex items-center">
          <p className="text-gray-700 text-xs md:text-sm font-light leading-relaxed">
            A synthetic monitor verifies the 200 response, content type,
            contacts, expiry, and canonical URL — this is treated as operational
            security content requiring renewal, not a one-time file.
          </p>
        </div>
      </div>
    </section>
  );
}
