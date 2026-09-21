"use client";

const RequirementBadge = ({
  children,
  orange = false,
}: {
  children: React.ReactNode;
  orange?: boolean;
}) => {
  return (
    <span
      className={`inline-flex items-center rounded-full px-3 py-1.5 text-[12px] font-medium ${
        orange
          ? "bg-orange-50 text-orange-500"
          : "bg-[#EAF3F5] text-[#073B47]"
      }`}
    >
      {children}
    </span>
  );
};

const InfoCard = ({
  title,
  items,
  badge,
  danger = false,
}: {
  title: string;
  items: string[];
  badge: string;
  danger?: boolean;
}) => {
  return (
    <div
      className={`h-full rounded-xl bg-white p-6 sm:p-7 lg:p-8 ${
        danger ? "border-l-2 border-[#D94A4A]" : "border border-[#DCEAEE]"
      }`}
    >
      <h3
        className={`text-[20px] sm:text-[22px] font-semibold leading-[1.3] ${
          danger ? "text-[#D94A4A]" : "text-[#073B47]"
        }`}
      >
        {title}
      </h3>

      <div className="mt-6 space-y-4">
        {items.map((item, index) => (
          <div key={index} className="flex items-start gap-3">
            <span
              className={`mt-[7px] h-1.5 w-1.5 shrink-0 rounded-full ${
                danger ? "bg-[#D94A4A]" : "bg-[#6B8790]"
              }`}
            />

            <p className="text-[15px] sm:text-[16px] leading-[1.6] text-[#5B7178]">
              {item}
            </p>
          </div>
        ))}
      </div>

      <div className="mt-7">
        <RequirementBadge orange={danger}>{badge}</RequirementBadge>
      </div>
    </div>
  );
};

export default function DeletionHold() {
  return (
    <section className="w-full bg-[#F5F7F7]">
      <div className="mx-auto w-full max-w-[1320px] px-5 py-16 sm:px-8 sm:py-20 lg:px-12 lg:py-24">
        {/* Heading */}
        <div className="max-w-[850px]">
          <h2 className="text-[32px] font-semibold leading-[1.15] tracking-[-0.02em] text-[#073B47] sm:text-[40px] lg:text-[48px]">
            Deletion is not a button when a hold exists
          </h2>

          <p className="mt-5 max-w-[800px] text-[16px] leading-[1.7] text-[#5B7178] sm:text-[18px]">
            Retention rules and preservation obligations conflict regularly.
            The system surfaces the conflict and names an owner rather than
            resolving it silently in either direction.
          </p>
        </div>

        {/* Cards - 2 columns */}
        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:mt-14">
          <InfoCard
            title="Access model"
            items={[
              "Least privilege by role, attribute and entity scope",
              "Purpose recorded before access to restricted data",
              "Segregation conflicts evaluated before the action is offered",
              "Every access to restricted data retained as an event",
            ]}
            badge="Architecture requirement"
          />

          <InfoCard
            title="Privileged and emergency access"
            items={[
              "Time-bound rather than standing",
              "Requires a recorded reason at the point of elevation",
              "Produces its own evidence record independent of the action taken",
              "Reviewed after the fact by someone other than the user",
            ]}
            badge="Implementation status required"
            danger
          />
        </div>

        {/* Bottom Image */}
        <div className="mt-8 sm:mt-10 lg:mt-12">
          <div className="overflow-hidden rounded-xl border-2 border-[#D94A4A] bg-white">
            <img
              src="/privacy-architecture/deletion-hold.png"
              alt="Access, retention, deletion and legal hold architecture"
              className="h-auto w-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}