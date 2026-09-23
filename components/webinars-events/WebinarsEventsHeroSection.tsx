import React from "react";

export default function WebinarsEventsHeroSection() {
  return (
    <section className="w-full bg-white py-14 md:py-20 px-6 md:px-12 lg:px-16">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
        {/* Left Column */}
        <div className="lg:col-span-6 flex flex-col items-start">
          <div className="flex items-center gap-2.5 mb-4">
            <span className="w-5 h-[2px] bg-[#d0aa55]" />
            <span className="font-mono text-[11.5px] font-medium tracking-[0.15em] uppercase text-[#a07a2e]">
              WEBINARS &amp; EVENTS
            </span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-[44px] font-bold text-[#16262f] leading-[1.18] tracking-tight mb-5">
            Join conversations built
            <br className="hidden sm:inline" /> around real operating
            <br className="hidden sm:inline" /> questions.
          </h1>

          <p className="text-[#5a6d79] text-sm sm:text-[15.8px] leading-relaxed max-w-xl">
            Explore approved ZoikoSuite webinars and events for product learning,
            practical guidance, executive evaluation, and deeper conversations.
            Dates, speakers, formats, access, and replay availability are shown
            only when confirmed by the event source.
          </p>
        </div>

        {/* Right Column: Hero Graphic */}
        <div className="lg:col-span-6 flex justify-center lg:justify-end">
          <div className="w-full max-w-[596px] rounded-xl overflow-hidden shadow-sm">
            <img
              src="/webinars-events/hero-event-panel.png"
              alt="Featured Webinar Panel"
              className="w-full h-auto object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
