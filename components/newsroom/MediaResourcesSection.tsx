import React from "react";
import Link from "next/link";

export default function MediaResourcesSection() {
  const cards = [
    {
      title: "Company fact sheet",
      description: "Version, owner, approved claims, review date.",
      href: "/about",
    },
    {
      title: "Logo pack",
      description: "Approved variants, usage terms, trademark guidance.",
      href: "/trademark-guidelines",
    },
    {
      title: "Product screenshots",
      description: "Version/date, caption, publication rights.",
      href: "/platform-tour",
    },
    {
      title: "Executive bios",
      description: "Verified title, approved bio, portrait rights.",
      href: "/leadership",
    },
  ] as const;

  return (
    <section className="relative w-full bg-white py-20 px-6 md:px-12 lg:px-20 overflow-hidden font-sans">
      <div className="max-w-6xl mx-auto flex flex-col items-start">
        {/* Header Section */}
        <div className="max-w-3xl mb-12">
          {/* Subtitle (Eye tag size: xs) */}
          <span className="text-[#A8843A] text-xs font-semibold tracking-[0.2em] uppercase mb-3 block">
            MEDIA RESOURCES
          </span>

          {/* Main Headline (32px for lg devices) */}
          <h1 className="text-3xl lg:text-[32px] font-bold text-[#0b1329] leading-tight tracking-tight">
            Governed, current, versioned assets
          </h1>
        </div>

        {/* 4-Column Grid Section */}
        <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {cards.map((card, index) => (
            <Link
              key={index}
              href={card.href}
              style={{ borderRadius: "14px" }}
              className="w-full p-8 border border-[#E5E0D5] bg-white shadow-sm flex flex-col items-start justify-center min-h-[160px] relative hover:border-[#A8843A] transition-colors"
            >
              <h3 className="text-lg font-semibold tracking-tight text-[#0b1329] mb-3">
                {card.title}
              </h3>
              <p className="text-gray-600 font-light leading-relaxed text-[16.5px]">
                {card.description}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
