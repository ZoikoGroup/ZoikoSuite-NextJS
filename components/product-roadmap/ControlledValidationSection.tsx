"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";

interface ValidationCard {
  id: string;
  category: string;
  title: string;
  items: string[];
}

const validationCards: ValidationCard[] = [
  {
    id: "card-1",
    category: "Entry criteria",
    title: "What qualifies a participant",
    items: [
      "Organization fit",
      "use case",
      "region and deployment",
      "technical readiness",
      "data, privacy, and security review",
      "implementation capacity",
      "feedback agreement",
      "contract or terms where required.",
    ],
  },
  {
    id: "card-2",
    category: "Participant commitments",
    title: "What we ask of you",
    items: [
      "A named owner",
      "an approved environment",
      "testing",
      "issue reporting",
      "feedback",
      "tolerance for change",
      "operational support contacts.",
    ],
  },
  {
    id: "card-3",
    category: "Our commitments",
    title: "What we owe you",
    items: [
      "Defined scope",
      "documentation",
      "a support route",
      "telemetry and privacy disclosure",
      "issue handling",
      "change notice",
      "exit and rollback terms.",
    ],
  },
];

export default function ControlledValidationSection() {
  const [selectedId, setSelectedId] = useState<string>("card-1");

  return (
    <section className="w-full bg-[#08222F] text-white py-16 lg:py-24 px-6 lg:px-24 font-sans antialiased">
      <div className="max-w-6xl mx-auto flex flex-col space-y-12">
        {/* Header Grid: 2 Columns */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Eyebrow + Title */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
            className="lg:col-span-7 flex flex-col space-y-3"
          >
            {/* Eyebrow Header */}
            <div className="flex items-center gap-3">
              <div className="w-6 h-[2px] bg-[#c5a059]" />
              <span className="text-xs uppercase tracking-[0.2em] font-mono font-semibold text-[#c5a059]">
                EARLY ACCESS AND PILOT PROGRAMS
              </span>
            </div>

            {/* Title */}
            <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-bold tracking-tight text-white leading-[1.15]">
              Controlled validation &mdash; not general availability
            </h2>
          </motion.div>

          {/* Right Column: Paragraph */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
            className="lg:col-span-5 lg:pt-8"
          >
            <p className="text-sm sm:text-base text-[#9ba4b5] leading-relaxed font-normal">
              Early access is limited, may change, may be withdrawn, and does
              not guarantee graduation to a released capability.
            </p>
          </motion.div>
        </div>

        {/* 3 Columns Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {validationCards.map((card) => {
            const isSelected = selectedId === card.id;

            return (
              <motion.div
                key={card.id}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
                onClick={() => setSelectedId(card.id)}
                className={`bg-[#0C2A38] rounded-2xl p-6 sm:p-8 border transition-all duration-200 cursor-pointer flex flex-col space-y-4 ${
                  isSelected
                    ? "border-[#1E3A4A] hover:border-[#2A4D60]"
                    : "border-[#1E3A4A] hover:border-[#2A4D60]"
                }`}
              >
                {/* Category Header */}
                <span className="text-[10px] sm:text-[11px] font-mono font-semibold tracking-widest text-[#c5a059] uppercase block">
                  {card.category}
                </span>

                {/* Card Title */}
                <h3 className="text-lg sm:text-xl font-bold text-white tracking-tight">
                  {card.title}
                </h3>

                {/* Card Content Text (Joined with middle dots) */}
                <p className="text-xs sm:text-sm text-[#9ba4b5] leading-relaxed font-normal">
                  {card.items.join(" · ")}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
