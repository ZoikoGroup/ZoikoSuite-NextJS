import Image from "next/image";

export default function TrustSection() {
  return (
    <section className="w-full bg-[#F6F5F0] px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
      <div className="max-w-[1200px] mx-auto lg:px-8 flex flex-col items-center gap-5">
        <div className="max-w-[640px] flex flex-col gap-3.5">
          <div className="flex items-center justify-center gap-2.5">
            <span className="w-5 h-px bg-[#B8913F]" />
            <span className="text-xs font-semibold tracking-wide text-[#B8913F]">
              TRUST &amp; IMPLEMENTATION
            </span>
          </div>
          <h2 className="text-center text-2xl sm:text-3xl font-bold text-[#101E2B] leading-9">
            What the demo does — and doesn&apos;t — assume about your data.
          </h2>
        </div>

        <Image
          src="/book-demo/data-trust.webp"
          alt="Sample data flows into the demo while your real records, documents and systems stay out"
          width={1136}
          height={568}
          className="w-full h-auto rounded-2xl"
        />
      </div>
    </section>
  );
}
