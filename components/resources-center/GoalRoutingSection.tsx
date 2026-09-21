"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";

interface GoalRoute {
  number: string;
  title: React.ReactNode;
  description: React.ReactNode;
  href: string;
}

const goalRoutes: GoalRoute[] = [
  {
    number: "01",
    title: "Evaluate ZoikoSuite",
    description: (
      <>
        Executive Briefs + Case<br />Studies
      </>
    ),
    href: "#executive-evaluation",
  },
  {
    number: "02",
    title: "Build or implement",
    description: (
      <>
        Documentation + Knowledge<br />Base
      </>
    ),
    href: "#documentation-knowledge",
  },
  {
    number: "03",
    title: "Learn and enable a team",
    description: (
      <>
        Training Academy + Webinars<br />& Events
      </>
    ),
    href: "#learning-events",
  },
  {
    number: "04",
    title: (
      <>
        Find ideas & reusable<br />material
      </>
    ),
    description: (
      <>
        Blog & Insights + Templates &<br />Tools
      </>
    ),
    href: "#insights-tools",
  },
  {
    number: "05",
    title: "Get help",
    description: (
      <>
        Support Center + Knowledge<br />Base
      </>
    ),
    href: "#faq",
  },
];

export default function GoalRoutingSection() {
  return (
    <section
      id="goal-routing"
      className="w-full bg-[#F7F5F0] py-16 sm:py-24 px-4 sm:px-6 lg:px-14 flex justify-center"
    >
      <div className="max-w-[1320px] w-full flex flex-col">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-start mb-10 sm:mb-14"
        >
          <div className="flex items-center gap-2 mb-3">
            <span className="w-4 h-[1.5px] bg-[#C5A059]" />
            <div className="self-stretch justify-center text-[#C5A059] text-xs font-normal font-['JetBrains_Mono'] leading-4 tracking-wider uppercase">
              04 / GOAL ROUTING
            </div>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-semibold tracking-tight text-[#1E293B] leading-tight font-['Archivo']">
            Start with what you need to do
          </h2>
        </motion.div>

        {/* Route cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5">
          {goalRoutes.map((route, index) => {
            const isCard3 = index === 2; // "Learn and enable a team"
            return (
              <motion.div
                key={route.number}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
              >
                <Link
                  href={route.href}
                  className="self-stretch h-48 relative bg-white rounded-2xl border border-stone-200 outline outline-1 outline-offset-[-1px] outline-stone-200 hover:shadow-md transition-all duration-200 block overflow-hidden group"
                >
                  <div className="size-9 left-[27px] top-[27px] absolute bg-[#F7F9FA] rounded-lg inline-flex justify-center items-center">
                    <div className="text-center justify-center text-[#0F476A] text-sm font-normal font-['JetBrains_Mono'] leading-6">
                      {route.number}
                    </div>
                  </div>
                  <div className="w-[calc(100%-54px)] left-[27px] top-[73px] absolute inline-flex flex-col justify-start items-start">
                    <div
                      className={`justify-center text-[#1E293B] text-base font-semibold font-['Archivo'] leading-5 ${
                        isCard3 ? "whitespace-nowrap" : ""
                      }`}
                    >
                      {route.title}
                    </div>
                  </div>
                  <div className="w-[calc(100%-54px)] left-[27px] top-[115px] absolute inline-flex flex-col justify-start items-start">
                    <div className="justify-center text-[#475569] text-xs font-normal font-['Archivo'] leading-5">
                      {route.description}
                    </div>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}