import React from "react";

export default function ScopeIsMandatorySection() {
  const scopeDimensions = [
    {
      dimension: "Legal entity",
      treatment: "Name the entity covered by the artifact.",
    },
    {
      dimension: "Product / service",
      treatment: "Specify ZoikoSuite platform or named modules/services.",
    },
    {
      dimension: "Environment",
      treatment: "Production, corporate environment, supporting systems, or specific service boundary.",
    },
    {
      dimension: "Deployment",
      treatment: "Multi-tenant, dedicated, single-tenant, sovereign/customer-controlled when covered.",
    },
    {
      dimension: "Region / location",
      treatment: "Stated only when the artifact itself defines it.",
    },
    {
      dimension: "Period",
      treatment: "Certificate validity or report observation period.",
    },
    {
      dimension: "Criteria / categories",
      treatment: "Criteria/categories included, stated explicitly.",
    },
    {
      dimension: "Exclusions",
      treatment: "Excluded products, controls, regions, or dependencies shown explicitly.",
    },
    {
      dimension: "Customer responsibilities",
      treatment: "Complementary user-entity controls shown where applicable and approved.",
    },
  ];

  return (
    <section className="w-full bg-color-grey-95-12 py-16 lg:py-24 flex justify-center">
      <div className="w-full max-w-[1200px] px-6 sm:px-8 flex flex-col justify-start items-start gap-9">
        {/* Header */}
        <div className="self-stretch flex flex-col md:flex-row md:justify-between md:items-end gap-6">
          <div className="flex flex-col justify-start items-start gap-3.5">
            <div className="self-stretch inline-flex justify-start items-center gap-2.5">
              <div className="w-5 h-px bg-color-orange-48" />
              <span className="text-color-orange-48 text-xs font-semibold font-['Inter'] tracking-wider uppercase">
                SCOPE IS MANDATORY
              </span>
            </div>
            <div className="self-stretch flex flex-col justify-start items-start">
              <h2 className="text-color-azure-12-4 text-2xl sm:text-3xl font-bold font-['Inter'] leading-tight">
                A badge without scope can mislead.
              </h2>
            </div>
          </div>
          <div className="max-w-md pt-2">
            <p className="text-color-grey-44 text-sm sm:text-base font-normal font-['Inter'] leading-6">
              Enough boundary information to know whether an assurance actually
              applies to the service, legal entity, deployment, region, and period
              being evaluated.
            </p>
          </div>
        </div>

        {/* Scope Table */}
        <div className="self-stretch w-full overflow-x-auto rounded-xl border border-color-orange-87 bg-color-white-solid shadow-xs">
          <table className="w-full min-w-[700px] border-collapse text-left">
            <thead>
              <tr className="border-b-2 border-color-orange-87 bg-color-grey-95-12">
                <th className="w-1/3 sm:w-72 p-3.5 text-color-grey-44 text-xs font-bold font-['Inter'] uppercase tracking-tight">
                  Scope dimension
                </th>
                <th className="p-3.5 text-color-grey-44 text-xs font-bold font-['Inter'] uppercase tracking-tight">
                  Required treatment
                </th>
              </tr>
            </thead>
            <tbody>
              {scopeDimensions.map((item, idx) => (
                <tr
                  key={idx}
                  className="border-b border-color-orange-87 last:border-b-0 hover:bg-amber-50/10 transition-colors"
                >
                  <td className="p-3.5 align-middle font-bold text-xs text-color-azure-12-4">
                    {item.dimension}
                  </td>
                  <td className="p-3.5 align-middle text-xs text-color-azure-12-4 leading-relaxed font-normal">
                    {item.treatment}
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
