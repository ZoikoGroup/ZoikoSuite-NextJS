import React from "react";

export default function CommonTasksSection() {
  const tasks = [
    {
      title: "Set up your first governed workflow",
      action: "Get started",
    },
    {
      title: "Configure an approval matrix",
      action: "Configure",
    },
    {
      title: "Map controls to policy requirements",
      action: "Govern",
    },
    {
      title: "Troubleshoot delayed evidence exports",
      action: "Troubleshoot",
    },
  ];

  return (
    <section className="w-full bg-[#F7F5F0] py-16 px-6 md:px-12 flex items-center justify-center font-sans">
      <div className="max-w-6xl w-full flex flex-col items-start">
        {/* Section Label / Subtitle */}
        <div className="flex items-center gap-2 mb-3">
          <span className="text-[#C29B38] text-xs font-bold tracking-[0.2em] uppercase">
            02 / COMMON TASKS
          </span>
        </div>

        {/* Section Heading */}
        <h2 className="text-3xl sm:text-4xl font-bold text-[#111827] leading-[1.2] tracking-tight mb-10">
          Common tasks
        </h2>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full">
          {tasks.map((task, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100/80 border-l-[3px] border-l-[#C29B38] flex flex-col"
            >
              {/* Task Title */}
              <h3 className="text-[#111827] font-semibold text-[15px] leading-snug tracking-tight">
                {task.title}
              </h3>

              {/* Action / Link */}
              <div>
                <a
                  href="#"
                  className="text-[#5A6D79] hover:text-[#111827] text-[13px] font-medium transition-colors"
                >
                  {task.action}
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
