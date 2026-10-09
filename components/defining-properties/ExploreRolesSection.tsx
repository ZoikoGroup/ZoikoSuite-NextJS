import React from "react";

interface RoleCard {
  title: string;
  status: string;
}

export default function ExploreRolesSection() {
  const roles: RoleCard[] = [
    {
      title: "CIO perspective",
      status: "Route pending \u2014 not a live link.",
    },
    {
      title: "CHRO perspective",
      status: "Route pending \u2014 not a live link.",
    },
    {
      title: "COO perspective",
      status: "Route pending \u2014 not a live link.",
    },
    {
      title: "Controller perspective",
      status: "Route pending \u2014 not a live link.",
    },
    {
      title: "Board perspective",
      status: "Route pending \u2014 not a live link.",
    },
  ];

  return (
    <section className="w-full bg-[#F6F5F0] py-20 px-6 md:px-12 lg:px-24 flex items-center justify-center">
      <div className="max-w-7xl w-full flex flex-col items-start">
        {/* Section Heading */}
        <div className="mb-12 max-w-5xl">
          <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-bold text-[#1F2421] tracking-tight leading-[1.2]">
            Continue exploring the roles that shape governed operations.
          </h2>
        </div>

        {/* Grid of Role Cards */}
        <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {roles.map((role, index) => (
            <div
              key={index}
              className="bg-[#FBFAF7] rounded-2xl border border-[dashed] border-[#CFCABB] p-8 shadow-sm flex flex-col justify-between"
            >
              <div className="flex flex-col items-start">
                <h3 className="text-xl font-bold text-[#1F2421] tracking-tight mb-2">
                  {role.title}
                </h3>
                <p className="text-[#4B5563] text-sm">{role.status}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
