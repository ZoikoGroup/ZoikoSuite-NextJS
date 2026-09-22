import React from "react";

export default function LessonViewer() {
  return (
    <section className="w-full bg-[#F5F5F3]">
      <div
        className="
          mx-auto
          w-full
          max-w-[1440px]
          px-5
          py-12
          sm:px-8
          sm:py-16
          lg:px-20
          lg:py-20
        "
      >
        <div
          className="
            mx-auto
            flex
            w-full
            max-w-[1280px]
            flex-col
            items-start
            gap-10
            lg:px-12
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
                06 / LESSON VIEWER
              </span>
            </div>

            <div className="w-full pt-px">
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
                Lesson / module viewer
              </h2>
            </div>

            <div className="w-full max-w-[562px]">
              <p
                className="
                  text-base
                  font-normal
                  leading-7
                  text-[#58727D]
                "
              >
                Course outline on the left, accessible content and media in the
                center, with a knowledge check and previous/next controls.
              </p>
            </div>
          </div>

          {/* LESSON VIEWER IMAGE */}
          <div className="w-full">
            <img
              src="/training-academy/image2.png"
              alt="Lesson and module viewer"
              className="
                block
                h-auto
                w-full
                rounded-2xl
                border
                border-[#D7E2E6]
                object-cover
                lg:h-[841.48px]
              "
            />
          </div>
        </div>
      </div>
    </section>
  );
}