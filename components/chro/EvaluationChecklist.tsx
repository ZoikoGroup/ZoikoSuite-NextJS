"use client"
import React, { useState } from "react";

interface ChecklistItem {
  id: string;
  text: string;
}

export default function EvaluationChecklist() {
  const [checkedItems, setCheckedItems] = useState<Record<string, boolean>>({});

  const items: ChecklistItem[] = [
    {
      id: "item-1",
      text: "Source systems and decision owners",
    },
    {
      id: "item-2",
      text: "Employee-data purpose and minimization",
    },
    {
      id: "item-3",
      text: "HR versus payroll authority",
    },
    {
      id: "item-4",
      text: "Policy review and exception path",
    },
    {
      id: "item-5",
      text: "Evidence freshness and public capability support",
    },
  ];

  const toggleCheckbox = (id: string) => {
    setCheckedItems((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  return (
    <section className="w-full bg-[#FFFFFF] py-16 px-6 md:px-12 lg:px-24 flex items-center justify-center">
      <div className="max-w-7xl w-full flex flex-col items-start">
        {/* Top Tag */}
        <div className="text-[11px] sm:text-xs font-semibold tracking-widest text-[#B49347] uppercase mb-3">
          EVALUATION CHECKLIST
        </div>

        {/* Section Heading */}
        <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-bold text-[#1F2421] tracking-tight leading-[1.2] mb-3">
          What should your team validate?
        </h2>

        {/* Subtitle */}
        <p className="text-[#4B5563] text-sm sm:text-base mb-8">
          Local reading aid only; selections are not saved.
        </p>

        {/* Checklist Container Card */}
        <div className="w-full max-w-4xl bg-[#F0EEE6] rounded-2xl p-8 sm:p-12 border-l-4 border-[#B49347] shadow-sm">
          <div className="flex flex-col gap-6">
            {items.map((item) => {
              const isChecked = !!checkedItems[item.id];
              return (
                <label
                  key={item.id}
                  className="flex items-start gap-4 cursor-pointer group select-none"
                  onClick={() => toggleCheckbox(item.id)}
                >
                  {/* Custom Checkbox */}
                  <div
                    className={`w-5 h-5 rounded mt-0.5 flex items-center justify-center border transition-colors ${
                      isChecked
                        ? "bg-[#1F2421] border-[#1F2421] text-white"
                        : "bg-white border-gray-400 group-hover:border-gray-600"
                    }`}
                  >
                    {isChecked && (
                      <svg
                        className="w-3.5 h-3.5 stroke-[3]"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    )}
                  </div>

                  {/* Text */}
                  <span className="text-[#1F2421] text-base sm:text-lg leading-snug font-medium">
                    {item.text}
                  </span>
                </label>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
