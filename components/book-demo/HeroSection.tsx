import Image from "next/image";
import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="w-full bg-[#08222F] px-4 sm:px-6 lg:px-8 pt-12 pb-10 sm:pt-16 sm:pb-14 overflow-hidden">
      <div className="max-w-[1200px] mx-auto lg:px-8 flex flex-col lg:flex-row items-center gap-10 lg:gap-14">
        <div className="w-full max-w-[600px] lg:max-w-none lg:w-[454px] shrink-0 flex flex-col gap-3.5">
          <div className="flex items-center gap-2.5">
            <span className="w-5 h-px bg-[#CDA85B]" />
            <span className="text-xs font-semibold tracking-wide text-[#CDA85B]">
              GOVERNED BUSINESS OPERATIONS
            </span>
          </div>

          <h1 className="text-[32px] sm:text-5xl font-bold text-white leading-tight sm:leading-[50.6px]">
            See ZoikoSuite work <br className="hidden sm:inline" />
            the way your <br className="hidden sm:inline" />
            business works.
          </h1>

          <p className="max-w-[460px] pt-[3px] text-base text-[#C7D3DA] leading-6">
            Explore a tailored walkthrough of accounting, finance and business
            operations across entities, teams and jurisdictions — with governed
            workflows, evidence and AI built into the operating layer.
          </p>

          <div className="pt-2 pb-1.5 flex flex-col min-[400px]:flex-row gap-3.5">
            <a
              href="#tailor-demo"
              className="min-h-12 px-6 py-3.5 inline-flex items-center justify-center rounded-[10px] bg-[#CDA85B] text-[#08222F] text-base font-semibold hover:bg-[#C8A24A] transition-colors"
            >
              Book a tailored demo
            </a>
            <Link
              href="/pricing"
              className="min-h-12 px-6 py-3.5 inline-flex items-center justify-center rounded-[10px] border border-white/35 text-white text-base font-semibold hover:bg-white/5 transition-colors"
            >
              Pricing
            </Link>
          </div>
        </div>

        <div className="w-full max-w-[600px] lg:max-w-none lg:flex-1">
          <Image
            src="/book-demo/hero-operations.webp"
            alt="Connected business operations flowing through a governed ZoikoSuite core"
            width={767}
            height={703}
            priority
            className="w-full h-auto"
          />
        </div>
      </div>
    </section>
  );
}
