import React from "react";

export default function EnterpriseSection() {
  return (
    <section className="relative w-full bg-[#FFFFFF] py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Top Tag / Subheading */}
        <div className="flex items-center justify-center space-x-2 mb-4">
          <span className="h-[1px] w-6 bg-[#dfb36a]" />
          <span className="text-xs font-bold tracking-widest text-[#dfb36a] uppercase">
            ENTERPRISE
          </span>
          <span className="h-[1px] w-6 bg-[#dfb36a]" />
        </div>

        {/* Main Heading */}
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#0f172a] text-center mb-4 max-w-3xl mx-auto">
          Complex structure should not mean fragmented systems.
        </h2>

        {/* Subtitle */}
        <p className="text-sm sm:text-base text-[#64748b] text-center mb-12 max-w-3xl mx-auto leading-relaxed">
          For multi-entity groups, regulated operations and organizations with
          advanced governance requirements: consolidation, intercompany
          controls, SSO/SCIM, custom frameworks, enterprise integration,
          data-policy options and contracted service levels.
        </p>

        {/* Form Container */}
        <div className="max-w-3xl mx-auto bg-white rounded-2xl border border-[#E4E1D8] p-8 sm:p-12 shadow-sm">
          <form className="space-y-6">
            {/* Field 1: Business email */}
            <div>
              <label className="block text-sm font-medium text-[#0f172a] mb-2">
                Business email
              </label>
              <div className="w-full bg-[#FBFAF7] border border-[#E4E1D8] rounded-xl px-4 py-3 text-sm text-[#0f172a] min-h-[46px]" />
            </div>

            {/* Field 2: Organization */}
            <div>
              <label className="block text-sm font-medium text-[#0f172a] mb-2">
                Organization
              </label>
              <div className="w-full bg-[#FBFAF7] border border-[#E4E1D8] rounded-xl px-4 py-3 text-sm text-[#0f172a] min-h-[46px]" />
            </div>

            {/* Field 3: Country */}
            <div>
              <label className="block text-sm font-medium text-[#0f172a] mb-2">
                Country
              </label>
              <div className="w-full bg-[#FBFAF7] border border-[#E4E1D8] rounded-xl px-4 py-3 text-sm text-[#0f172a]">
                United States
              </div>
            </div>

            {/* Field 4: Approximate users/entities */}
            <div>
              <label className="block text-sm font-medium text-[#0f172a] mb-2">
                Approximate users/entities
              </label>
              <div className="w-full bg-[#FBFAF7] border border-[#E4E1D8] rounded-xl px-4 py-3 text-sm text-[#0f172a]">
                25&ndash;100 users
              </div>
            </div>

            {/* Field 5: Primary requirement */}
            <div>
              <label className="block text-sm font-medium text-[#0f172a] mb-2">
                Primary requirement
              </label>
              <div className="w-full bg-[#FBFAF7] border border-[#E4E1D8] rounded-xl px-4 py-3 text-sm text-[#94a3b8]">
                e.g. multi-entity consolidation, SSO
              </div>
            </div>

            {/* Action Buttons */}
            <div className="pt-2 space-y-3">
              <button
                type="submit"
                className="w-full py-3.5 px-4 rounded-xl bg-[#dfb36a] text-[#0f172a] font-semibold text-sm hover:bg-[#d4a85c] transition-colors shadow-sm"
              >
                Talk to an enterprise specialist
              </button>

              <a
                href="#"
                className="w-full inline-flex items-center justify-center py-3.5 px-4 rounded-xl bg-white text-[#0f172a] font-medium text-sm border border-[#101E2B40] hover:bg-[#FBFAF7] transition-colors"
              >
                Book a demo
              </a>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
