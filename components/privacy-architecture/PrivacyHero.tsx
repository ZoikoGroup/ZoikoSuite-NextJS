"use client";

export default function PrivacyHero() {
  return (
    <section className="w-full bg-[#062F39]">
      <div className="mx-auto flex w-full max-w-[1280px] flex-col gap-10 px-5 py-10 sm:px-8 lg:flex-row lg:items-start lg:gap-12 lg:px-10 lg:py-16">

        {/* Left Content */}
        <div className="flex w-full flex-col items-start lg:max-w-[600px]">

          {/* Eyebrow */}
          <div className="flex h-5 items-center gap-2.5">
            <div className="h-[1.5px] w-4 bg-orange-400" />

            <div className="text-xs font-medium uppercase tracking-widest leading-5 text-orange-400">
              Privacy Architecture
            </div>
          </div>

          {/* Heading */}
          <div className="pt-5">
            <h1
              className="
                max-w-[535px]
                text-[40px] font-bold leading-[1.12]
                text-white
                sm:text-[48px]
                lg:text-[60px] lg:leading-[67.2px]
              "
            >
              Privacy controls
              <br />
              that travel with the
              <br />
              data
            </h1>
          </div>

          {/* Description */}
          <div className="pt-5">
            <p
              className="
                max-w-[600px]
                text-base font-normal leading-7
                text-[#AFC3C9]
                sm:text-lg
              "
            >
              ZoikoSuite is designed to keep purpose, data classification,
              access, retention, residency, transfer context, AI-use
              boundaries and evidence attached to governed data across
              entities and jurisdictions.
            </p>
          </div>

          {/* Buttons */}
          <div className="flex w-full flex-col items-start gap-3 pt-6 sm:flex-row sm:flex-wrap">

            {/* Primary Button */}
            <button
              className="
                flex h-12 min-h-12 items-center justify-center
                rounded-full bg-orange-400
                px-6
                text-base font-semibold leading-6
                text-[#082F39]
                outline outline-1 outline-offset-[-1px]
                outline-orange-400
                transition-opacity hover:opacity-90
              "
            >
              <span>Talk to a solutions architect</span>
              <span className="ml-3 text-xs font-semibold">→</span>
            </button>

            {/* Secondary Button */}
            <button
              className="
                flex h-12 min-h-12 items-center justify-center
                rounded-full px-6
                text-base font-semibold leading-6
                text-[#E1E8EA]
                outline outline-1 outline-offset-[-1px]
                outline-[#6B8790]
                transition-colors hover:bg-white/5
              "
            >
              Request an enterprise privacy review
            </button>
          </div>
        </div>

        {/* Image */}
        <div className="w-full lg:flex-1">
          <img
            src="/privacy-architecture/hero.png"
            alt="Privacy Architecture"
            className="
              h-auto
              max-h-[640px]
              w-full
              rounded-xl
              border border-white/20
              object-cover
              object-center
            "
          />
        </div>
      </div>
    </section>
  );
}