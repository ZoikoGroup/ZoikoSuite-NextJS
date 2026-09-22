import React from "react";

export default function CourseDetail() {
  return (
    <section className="w-full bg-white">
      <div
        className="
          mx-auto
          flex
          w-full
          max-w-[1280px]
          flex-col
          items-center
          gap-10
          px-5
          py-12
          sm:px-8
          sm:py-16
          lg:px-12
          lg:py-20
        "
      >
        {/* HEADER */}
        <div className="flex w-full flex-col items-start gap-3">
          <div className="w-full">
            <span
              className="
                text-xs
                font-normal
                leading-5
                tracking-[0.12em]
                text-[#C28A27]
              "
            >
              05 / COURSE DETAIL
            </span>
          </div>

          <div className="w-full">
            <h2
              className="
                text-2xl
                font-semibold
                leading-8
                text-[#193B4A]
                sm:text-3xl
                sm:leading-10
              "
            >
              Course detail template
            </h2>
          </div>
        </div>

        {/* COURSE DETAIL IMAGE */}
        <div className="w-full">
          <img
            src="/training-academy/image1.png"
            alt="Course detail template"
            className="
              block
              h-auto
              w-full
              rounded-2xl
              border
              border-[#D7E2E6]
              object-cover
              lg:h-[611px]
              lg:w-full
            "
          />
        </div>
      </div>
    </section>
  );
}