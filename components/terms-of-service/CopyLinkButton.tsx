"use client";

import React, { useState } from "react";
import { FONT_INTER } from "./data";

export default function CopyLinkButton({ targetId }: { targetId: string }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    const url = `${window.location.origin}${window.location.pathname}#${targetId}`;
    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch {
      window.location.hash = targetId;
    }
  };

  return (
    <button
      type="button"
      onClick={handleCopy}
      className="shrink-0 mt-[5px] px-[9px] py-[3px] border border-[#DCD6C8] rounded-full text-[11px] font-normal leading-[17.6px] text-[#4B5872] whitespace-nowrap hover:border-[#A8843A] hover:text-[#16223A] transition-colors"
      style={{ fontFamily: FONT_INTER }}
    >
      {copied ? "Copied" : "Copy link"}
    </button>
  );
}
