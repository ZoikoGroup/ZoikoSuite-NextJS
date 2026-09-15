"use client";

import React from "react";
import Image from "next/image";
import { Check, AlertCircle, ShieldAlert } from "lucide-react";

interface KeyModel {
  modelNumber: string;
  title: string;
  description: string;
  consequenceTitle: string;
  consequenceText: string;
  statusText: string;
  statusType: "published" | "readiness" | "applies";
}

const KEY_MODELS: KeyModel[] = [
  {
    modelNumber: "MODEL 01",
    title: "Platform-managed keys",
    description:
      "ZokoSuite generates, stores, rotates, and uses keys within the approved region.",
    consequenceTitle: "CONSEQUENCE",
    consequenceText:
      "Simplest operations; customer holds no revocation authority.",
    statusText: "VERIFIED AVAILABLE",
    statusType: "published",
  },
  {
    modelNumber: "MODEL 02",
    title: "Customer-managed / BYOK",
    description:
      "The customer supplies key material into an approved key service; ZokoSuite uses it under policy.",
    consequenceTitle: "CONSEQUENCE",
    consequenceText:
      "Customer can rotate and revoke; service dependency remains.",
    statusText: "CONFIGURATION REQUIRED",
    statusType: "applies",
  },
  {
    modelNumber: "MODEL 03",
    title: "External key authority / HYOK-type",
    description:
      "Keys remain under an external authority the customer controls, with ZokoSuite calling out for operations.",
    consequenceTitle: "CONSEQUENCE",
    consequenceText:
      "Strongest customer authority; availability and search behavior change.",
    statusText: "REQUIRES VERIFICATION",
    statusType: "readiness",
  },
  {
    modelNumber: "MODEL 04",
    title: "Customer-managed local keys",
    description:
      "For approved on-premise scenarios, keys are generated and held entirely in the customer environment.",
    consequenceTitle: "CONSEQUENCE",
    consequenceText:
      "Full customer authority and full customer recovery responsibility.",
    statusText: "IMPLEMENTATION REVIEW REQUIRED",
    statusType: "readiness",
  },
];

export default function EncryptionAndKeyControlSection() {
  return (
    <section className="w-full bg-[#08222F] py-16 md:py-24 text-white font-sans px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-6xl mx-auto flex flex-col gap-12">
        {/* Header Content */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
          <div className="flex flex-col gap-4 max-w-xl">
            <div className="flex items-center gap-2">
              <span className="w-4 h-[2px] bg-[#D0AA55]" />
              <span className="text-[11px] font-mono font-bold tracking-widest text-[#D0AA55] uppercase">
                ENCRYPTION AND KEY CONTROL
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-[40px] font-bold tracking-tight leading-[1.15] text-white">
              Key ownership is not the same as key authority
            </h2>
          </div>

          <div className="max-w-md">
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              Four models, twelve lifecycle stages. What matters operationally
              is what happens when a key is revoked or the key service is
              unreachable.
            </p>
          </div>
        </div>

        {/* Four Key Models Cards Grid (Cards with white background) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {KEY_MODELS.map((model, idx) => (
            <div
              key={idx}
              className="bg-white border border-[#DBE3E8] rounded-2xl p-5 flex flex-col justify-between gap-6 shadow-lg text-[#0F172A]"
            >
              <div className="flex flex-col gap-3">
                <span className="text-[10px] font-mono font-bold text-[#A07A2E] tracking-widest">
                  {model.modelNumber}
                </span>
                <h3 className="text-base font-bold text-[#0F172A] leading-snug">
                  {model.title}
                </h3>
                <p className="text-xs text-[#475569] leading-relaxed">
                  {model.description}
                </p>
              </div>

              <div className="flex flex-col gap-3 pt-4 border-t border-[#DBE3E8]">
                <div className="flex flex-col gap-1">
                  <span className="text-[9px] font-mono font-bold text-[#64748B] uppercase">
                    {model.consequenceTitle}
                  </span>
                  <p className="text-[11px] text-[#334155] leading-normal">
                    {model.consequenceText}
                  </p>
                </div>

                {/* Status Badges */}
                <div className="pt-1">
                  {model.statusType === "published" && (
                    <div
                      className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md text-[10px] font-mono font-bold tracking-wider w-full justify-center"
                      style={{
                        backgroundColor: "#EAF5F0",
                        border: "1px solid #1E7A5A",
                        color: "#1E7A5A",
                      }}
                    >
                      <Check className="w-3 h-3 text-[#1E7A5A]" />
                      {model.statusText}
                    </div>
                  )}

                  {model.statusType === "readiness" && (
                    <div
                      className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md text-[10px] font-mono font-bold tracking-wider w-full justify-center"
                      style={{
                        backgroundColor: "#FBF2DF",
                        border: "1px solid #9C6B12",
                        color: "#9C6B12",
                      }}
                    >
                      <AlertCircle
                        className="w-3 h-3"
                        style={{ color: "#9C6B12" }}
                      />
                      {model.statusText}
                    </div>
                  )}

                  {model.statusType === "applies" && (
                    <div
                      className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md text-[10px] font-mono font-bold tracking-wider w-full justify-center"
                      style={{
                        backgroundColor: "#EFF2F4",
                        border: "1px solid #5D6B75",
                        color: "#5D6B75",
                      }}
                    >
                      <ShieldAlert
                        className="w-3 h-3"
                        style={{ color: "#5D6B75" }}
                      />
                      {model.statusText}
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Main Graphic / Image */}
        <div className="w-full flex justify-center">
          <div className="w-full max-w-6xl">
            <Image
              src="/deployment/12.png"
              alt="Encryption and key control lifecycle architecture graphic"
              width={1250}
              height={700}
              className="w-full h-auto object-contain"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
