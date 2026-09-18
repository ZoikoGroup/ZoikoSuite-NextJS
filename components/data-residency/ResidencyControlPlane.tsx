"use client";

import React from "react";
import Image from "next/image";

export default function ResidencyControlPlane() {
  return (
    <section className="w-full bg-white py-20 px-6 lg:px-12 font-sans text-[#111827]">
      <div className="max-w-6xl mx-auto">
        {/* Header Section */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-16 gap-8">
          <div className="max-w-xl">
            <div className="flex items-center gap-2 mb-3">
              <span
                className="w-4 h-[1px]"
                style={{ backgroundColor: "#C9B07A" }}
              ></span>
              <span
                className="text-[11px] font-semibold tracking-widest uppercase font-mono"
                style={{ color: "#C9B07A" }}
              >
                RESIDENCY CONTROL PLANE
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-[44px] font-bold tracking-tight leading-[1.15]">
              Policy, scope, status and evidence in one record
            </h2>
          </div>
          <div className="max-w-md">
            <p className="text-[#4B5563] text-[15px] leading-relaxed">
              Each residency policy carries its entity and jurisdiction scope,
              the dimensions it constrains, its current status and its last
              verification. Synthetic data throughout.
            </p>
          </div>
        </div>

        {/* Image Display Section */}
        <div className="w-full">
          <div className="relative w-full aspect-[17/9] rounded-2xl overflow-hidden">
            <Image
              src="/data/2.png"
              alt="Residency Control Plane Global Architecture Illustration"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
