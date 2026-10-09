import React from "react";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

export default function WorkforceSection() {
  return (
    <section className="w-full bg-white py-16 px-6 md:px-12 lg:px-24 flex items-center justify-center">
      <div className="max-w-6xl w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Left Column: Text & CTA */}
        <div className="lg:col-span-5 flex flex-col items-start text-left">
          <h1 className="text-4xl sm:text-5xl lg:text-[52px] font-bold text-[#111827] tracking-tight leading-[1.15] mb-6">
            Make workforce decisions <br className="hidden sm:inline" />
            easier to govern.
          </h1>

          <p className="text-[#4B5563] text-base sm:text-lg leading-relaxed mb-8 max-w-lg">
            Understand the responsibilities, policy checkpoints and
            cross-functional handoffs leaders need to evaluate for more
            accountable workforce operations.
          </p>

          <a
            href="#context"
            className="inline-flex items-center justify-center px-6 py-3.5 rounded-lg bg-[#D0A644] hover:bg-[#C8963D] text-white font-medium text-base transition-colors shadow-sm group"
          >
            <span>Discuss evaluation context</span>
            <ArrowRight className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" />
          </a>
        </div>

        {/* Right Column: 3D Illustration / Image */}
        <div className="lg:col-span-7 flex justify-center lg:justify-end">
          <div className="relative w-full max-w-[680px] aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl shadow-blue-950/10 border border-gray-100 bg-[#F8FAFC]">
            <Image
              src="/chro/1.png"
              alt="Make workforce decisions easier to govern illustration"
              fill
              priority
              className="object-cover object-center"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
