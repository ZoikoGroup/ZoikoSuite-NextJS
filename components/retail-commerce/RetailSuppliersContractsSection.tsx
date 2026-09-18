"use client";

import React from "react";
import Image from "next/image";

export default function RetailSuppliersContractsSection() {
  return (
    <section className="w-full bg-[#F7F5F0] text-[#08222F] py-20 px-6 lg:px-12 font-sans">
      <div className="max-w-6xl mx-auto">
        {/* Header Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-12 items-end">
          <div className="lg:col-span-7 flex flex-col items-start">
            {/* Eyebrow Tag */}
            <div className="flex items-center gap-2 mb-3">
              <span
                className="w-4 h-[1px]"
                style={{ backgroundColor: "#C59B3F" }}
              ></span>
              <span
                className="text-[12px] font-semibold tracking-widest uppercase font-mono"
                style={{ color: "#C59B3F" }}
              >
                SUPPLIERS, CONTRACTS, LEASES AND OBLIGATIONS
              </span>
            </div>

            {/* Main Heading */}
            <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-bold tracking-tight leading-[1.1]">
              Dependency and date obligations in one register
            </h2>
          </div>

          <div className="lg:col-span-5">
            <p className="text-[13px] lg:text-[14px] text-gray-600 leading-relaxed">
              Supplier diligence, data and payment dependencies, contract
              renewals and lease notice windows governed together.
            </p>
          </div>
        </div>

        {/* Featured Card with Illustration */}
        <div className="w-full rounded-2xl">
          <div className="relative w-full h-[450px] sm:h-[650px]">
            <Image
              src="/retail/2.png"
              alt="Dependency and date obligations illustration"
              fill
              priority
              className="object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
