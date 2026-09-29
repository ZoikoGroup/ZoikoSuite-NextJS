import React from "react";

export default function FindYourPlanSection() {
  return (
    <section className="relative w-full bg-white py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Top Tag / Subheading */}
        <div className="flex items-center justify-center space-x-2 mb-4">
          <span className="h-[1px] w-6 bg-[#dfb36a]" />
          <span className="text-xs font-bold tracking-widest text-[#dfb36a] uppercase">
            FIND YOUR FIT
          </span>
          <span className="h-[1px] w-6 bg-[#dfb36a]" />
        </div>

        {/* Main Heading */}
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#0f172a] text-center mb-12 max-w-2xl mx-auto">
          Not sure which plan fits? Answer four questions.
        </h2>

        {/* Form Container */}
        <div className="max-w-3xl mx-auto bg-white rounded-2xl border border-[#E4E1D8] p-8 sm:p-12 shadow-sm">
          <form className="space-y-6">
            {/* Field 1 */}
            <div>
              <label className="block text-sm font-medium text-[#0f172a] mb-2">
                How many legal entities?
              </label>
              <div className="w-full bg-[#FBFAF7] border border-[#E4E1D8] rounded-xl px-4 py-3 text-sm text-[#0f172a]">
                1
              </div>
            </div>

            {/* Field 2 */}
            <div>
              <label className="block text-sm font-medium text-[#0f172a] mb-2">
                How many full platform users?
              </label>
              <div className="w-full bg-[#FBFAF7] border border-[#E4E1D8] rounded-xl px-4 py-3 text-sm text-[#0f172a]">
                1&ndash;5
              </div>
            </div>

            {/* Field 3 */}
            <div>
              <label className="block text-sm font-medium text-[#0f172a] mb-2">
                Do you need advanced approvals/automation?
              </label>
              <div className="w-full bg-[#FBFAF7] border border-[#E4E1D8] rounded-xl px-4 py-3 text-sm text-[#0f172a]">
                No
              </div>
            </div>

            {/* Field 4 */}
            <div>
              <label className="block text-sm font-medium text-[#0f172a] mb-2">
                Do you require SSO, group consolidation or custom governance?
              </label>
              <div className="w-full bg-[#FBFAF7] border border-[#E4E1D8] rounded-xl px-4 py-3 text-sm text-[#0f172a]">
                No
              </div>
            </div>

            {/* Submit Button */}
            <div className="pt-2">
              <button
                type="submit"
                className="w-full py-3.5 px-4 rounded-xl bg-[#dfb36a] text-[#0f172a] font-semibold text-sm hover:bg-[#d4a85c] transition-colors shadow-sm"
              >
                Find my plan
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
