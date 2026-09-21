"use client";

export default function ActivityRegistry() {
  return (
    <section className="w-full bg-[#F5F7F7]">
      <div className="mx-auto w-full max-w-[1440px] px-5 py-16 sm:px-8 sm:py-20 lg:px-14 lg:py-28">
        <div className="mx-auto flex w-full max-w-[1320px] flex-col gap-10 px-0 lg:gap-14 lg:px-12">

          {/* Heading */}
          <div className="flex w-full flex-col items-start">

            {/* Label */}
            <div className="flex h-5 items-center gap-2.5 pt-2.5">
              <div className="h-[1.5px] w-4 bg-orange-400" />

              <span className="text-xs font-medium uppercase leading-5 tracking-widest text-orange-400">
                Privacy control plane
              </span>
            </div>

            {/* Title */}
            <h2
              className="
                mt-4
                text-3xl font-semibold leading-tight
                text-[#073B47]
                sm:text-4xl
                lg:text-5xl lg:leading-[49.28px]
              "
            >
              Processing activity registry
            </h2>

            {/* Description */}
            <p
              className="
                mt-4
                max-w-[690px]
                text-base font-normal leading-7
                text-[#5B7178]
                sm:text-lg
                lg:text-xl lg:leading-8
              "
            >
              Purpose, owner, data classes, lawful-basis reference, transfer
              context, retention and review state in one governed record.
              Synthetic data throughout.
            </p>
          </div>

          {/* Image */}
          <div className="w-full overflow-hidden rounded-2xl border border-[#DCEAEE] shadow-[0px_30px_70px_-34px_rgba(8,34,47,0.50)]">
            <img
              src="/privacy-architecture/activity-registry.png"
              alt="Processing activity registry"
              className="block h-auto w-full object-cover"
            />
          </div>

        </div>
      </div>
    </section>
  );
}