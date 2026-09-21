"use client";

export default function RightsOperations() {
  return (
    <section className="w-full bg-[#F5F7F7]">
      <div className="mx-auto flex w-full max-w-[1440px] flex-col items-start px-5 py-16 sm:px-8 sm:py-20 lg:px-14 lg:py-28">
        <div className="flex w-full max-w-[1320px] flex-col items-start gap-10 lg:gap-14 lg:px-12">
          {/* Header */}
          <div className="flex w-full flex-col items-start">
            <div className="flex flex-col items-start gap-4 pt-2.5">
              {/* Eyebrow */}
              <div className="flex items-center gap-2.5">
                <div className="h-[1.5px] w-4 bg-orange-400" />

                <span className="text-xs font-medium uppercase leading-5 tracking-widest text-orange-400">
                  Data subject rights operations
                </span>
              </div>

              {/* Heading */}
              <h2 className="w-full text-3xl font-semibold leading-tight text-[#073B47] sm:text-4xl lg:text-5xl lg:leading-[49.28px]">
                A rights request is a governed
                <br className="hidden sm:block" />
                workflow, not a switch
              </h2>
            </div>

            {/* Description */}
            <p className="mt-4 max-w-[690px] text-base font-normal leading-7 text-[#5B7178] sm:text-lg lg:text-xl lg:leading-8">
              Identity verification, scope resolution, conflict checks and a
              human decision. Oversimplifying this is how rights processes fail
              in practice.
            </p>
          </div>

          {/* Image - no box */}
          <img
            src="/privacy-architecture/rights-operations.png"
            alt="Data subject rights operations workflow"
            className="h-auto w-full rounded-2xl object-cover"
          />
        </div>
      </div>
    </section>
  );
}