"use client";

export default function ClaimGovernance() {
  return (
    <section className="w-full bg-[#F5F7F7]">
      <div className="mx-auto w-full max-w-[1440px] px-5 py-16 sm:px-8 sm:py-20 lg:px-14 lg:py-28">
        <div className="mx-auto flex w-full max-w-[1320px] flex-col gap-4 px-0 lg:px-12">

          {/* Heading Content */}
          <div className="flex w-full flex-col items-start pb-8 sm:pb-10">

            <div className="flex w-full flex-col items-start gap-4 pt-2.5">

              {/* Label */}
              <div className="flex h-5 items-center gap-2.5">
                <div className="h-[1.5px] w-4 bg-orange-400" />

                <div className="text-xs font-medium uppercase leading-5 tracking-widest text-orange-400">
                  Privacy claim governance
                </div>
              </div>

              {/* Heading */}
              <div className="w-full">
                <h2
                  className="
                    text-3xl font-semibold leading-tight
                    text-[#073B47]
                    sm:text-4xl
                    lg:text-5xl lg:leading-[49.28px]
                  "
                >
                  Six claim classes, and six
                  <br className="hidden sm:block" />
                  phrases never used
                </h2>
              </div>
            </div>

            {/* Description */}
            <div className="mt-4 w-full max-w-[690px] pr-0 lg:pr-14">
              <p
                className="
                  text-base font-normal leading-7
                  text-[#5B7178]
                  sm:text-lg
                  lg:text-xl lg:leading-8
                "
              >
                Every public privacy statement carries a claim class, owner,
                evidence source, review date and publication status.
              </p>
            </div>
          </div>

          {/* Image */}
          <div className="w-full overflow-hidden rounded-xl border border-[#DCEAEE]">
            <img
              src="/privacy-architecture/claim-governance.png"
              alt="Privacy claim governance"
              className="
                block
                h-auto
                w-full
                object-cover
              "
            />
          </div>

        </div>
      </div>
    </section>
  );
}