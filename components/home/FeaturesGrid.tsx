"use client";

import React from "react";
import { motion } from "framer-motion";
import { ShieldCheck, FileText, Globe, Lock, Layers } from "lucide-react";

const cardsData = [
  {
    icon: ShieldCheck,
    title: "Governance-first architecture",
    tag: "CURRENT ARCHITECTURE",
  },
  {
    icon: FileText,
    title: "Audit-defensible evidence",
    tag: "CURRENT ARCHITECTURE · PHASED DELIVERY",
  },
  {
    icon: Globe,
    title: "Data residency controls",
    tag: "ARCHITECTURE TARGET · AVAILABILITY BY DEPLOYMENT",
  },
  {
    icon: Lock,
    title: "Security framework readiness",
    tag: "READINESS — NOT YET CERTIFIED",
  },
  {
    icon: Layers,
    title: "Deployment choice",
    tag: "AVAILABILITY STATUS REQUIRED",
  },
] as const;

export default function FeaturesGrid() {
  return (
    <section className="w-full bg-[#0F476A] py-16 px-6 flex items-center justify-center">
      <div className="max-w-[1280px] w-full flex justify-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 border border-[#1E5B80] rounded-2xl overflow-hidden bg-[#0F476A]"
        >
          {cardsData.map((item, index) => {
            const IconComponent = item.icon;
            return (
              <div
                key={index}
                style={{
                  width: "243.61px",
                  height: "148.56px",
                }}
                className="flex flex-col justify-between p-4 border-b lg:border-b-0 lg:border-r border-[#1E5B80] last:border-r-0 hover:bg-[#124d73] transition-colors duration-200 box-border"
              >
                {/* Top Row: Icon and Title */}
                <div>
                  <div className="text-[#D0AA55] mb-2">
                    <IconComponent className="w-7 h-7 stroke-[1.5]" />
                  </div>
                  <h3 className="text-white font-medium text-[15px] leading-snug tracking-tight line-clamp-2">
                    {item.title}
                  </h3>
                </div>

                {/* Bottom Row: Tag */}
                <div>
                  <span className="text-[9px] font-medium tracking-[.5px] text-[#D0AA55] uppercase block leading-tight">
                    {item.tag}
                  </span>
                </div>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
