import React from "react";

export default function ErrorsNeverSilentlyDefaultToAcceptanceSection() {
  const rows = [
    {
      failure: "Consent service unavailable",
      safeBehavior:
        "Necessary only in consent-required context; no optional activation.",
      userMessage:
        '"We could not load optional preferences. Necessary technologies remain active. Retry."',
    },
    {
      failure: "Save failed",
      safeBehavior:
        "Keep previous effective state; do not assume new acceptance.",
      userMessage:
        '"Your changes were not saved. Your previous settings remain in effect."',
    },
    {
      failure: "Signal detector error",
      safeBehavior: "Do not claim no signal; mark unknown.",
      userMessage: '"We could not verify your browser privacy signal."',
    },
    {
      failure: "Storage blocked",
      safeBehavior:
        "Choice may be session-only; necessary-only default on next load if no proof.",
      userMessage: '"Your browser may not allow us to remember this choice."',
    },
  ] as const;

  return (
    <section className="relative w-full bg-[#0A1D34] py-20 px-6 md:px-12 lg:px-20 overflow-hidden font-sans">
      <div className="max-w-6xl mx-auto flex flex-col items-start w-full">
        {/* Header Section */}
        <div className="mb-12 w-full">
          {/* Subtitle (Eye tag size: xs) */}
          <span className="text-[#C8A24A] text-xs font-semibold tracking-[0.2em] uppercase mb-3 block">
            ERROR, DEGRADED & SAFE-FALLBACK BEHAVIOR
          </span>

          {/* Main Headline (32px for lg devices) */}
          <h1 className="text-3xl lg:text-[32px] font-bold text-white leading-tight tracking-tight">
            Errors never silently default to acceptance
          </h1>
        </div>

        {/* Semantic HTML Table inside a rounded card */}
        <div
          style={{ borderRadius: "14px" }}
          className="w-full overflow-x-auto bg-[#0A1D34] border border-[#DCD6C8] shadow-sm"
        >
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-[#DCD6C8] text-xs font-semibold tracking-[0.15em] text-[#0A1D34] uppercase bg-[#F6F1E6]">
                <th className="py-4 px-6 font-semibold border-r border-[#DCD6C8] last:border-r-0 w-1/4">
                  Failure
                </th>
                <th className="py-4 px-6 font-semibold border-r border-[#DCD6C8] last:border-r-0 w-5/12">
                  Safe Behavior
                </th>
                <th className="py-4 px-6 font-semibold w-5/12">User Message</th>
              </tr>
            </thead>
            <tbody>
              {rows.map((row, index) => (
                <tr
                  key={index}
                  className="border-b last:border-b-0 border-[#DCD6C8] bg-[#0A1D34]"
                >
                  <td className="py-6 px-6 text-white text-base font-semibold tracking-tight align-top border-r border-[#DCD6C8]">
                    {row.failure}
                  </td>
                  <td className="py-6 px-6 text-gray-300 font-light leading-relaxed text-[15.5px] align-top border-r border-[#DCD6C8]">
                    {row.safeBehavior}
                  </td>
                  <td className="py-6 px-6 text-gray-300 font-light leading-relaxed text-[15.5px] align-top">
                    {row.userMessage}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
