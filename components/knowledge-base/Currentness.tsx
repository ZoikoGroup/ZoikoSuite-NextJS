export default function Currentness() {
  return (
    <section
      className="
        w-full max-w-[1440px] mx-auto
        px-4 sm:px-6 lg:px-20
        py-12 sm:py-16 lg:py-20
        bg-color-white-solid
      "
      style={{
        backgroundColor:
          "var(--color-color-white-solid, var(--color-white-solid, #FFFFFF))",
      }}
    >
      <div
        className="
          w-full max-w-[1280px] mx-auto
          px-0 sm:px-4 lg:px-12
          flex flex-col justify-start items-start
          gap-8 sm:gap-10
        "
      >
        {/* Heading */}
        <div className="self-stretch flex flex-col justify-start items-start gap-3">
          {/* Eyebrow */}
          <div className="self-stretch">
            <div
              className="
                text-color-orange-40
                text-xs font-normal
                leading-5 tracking-wider
              "
              style={{
                color:
                  "var(--color-color-orange-40, var(--color-orange-40, #A67C2E))",
              }}
            >
              07 / CURRENTNESS
            </div>
          </div>

          {/* Title */}
          <div className="self-stretch pt-px">
            <h2
              className="
                text-color-azure-14
                text-2xl sm:text-3xl
                font-semibold
                leading-8 sm:leading-10
              "
              style={{
                color:
                  "var(--color-color-azure-14, var(--color-azure-14, #16262F))",
              }}
            >
              Status, version &amp; currentness states
            </h2>
          </div>

          {/* Description */}
          <div className="w-full max-w-[562.31px]">
            <p
              className="
                text-color-azure-41
                text-sm sm:text-base
                font-normal
                leading-6 sm:leading-7
              "
              style={{
                color:
                  "var(--color-color-azure-41, var(--color-azure-41, #698CA1))",
              }}
            >
              Current, review-due, deprecated, superseded, and withdrawn
              states can never be mistaken for one another.
            </p>
          </div>
        </div>

        {/* Cards */}
        <div
          className="
            self-stretch
            grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4
            gap-4
            items-stretch
          "
        >
          {/* Published Current */}
          <div
            className="
              w-full min-h-[168px]
              p-5 sm:p-6
              bg-color-white-solid
              rounded-2xl
              outline outline-1 outline-offset-[-1px]
              outline-color-azure-88
              flex flex-col
              justify-start items-start
              gap-2
            "
            style={{
              backgroundColor:
                "var(--color-color-white-solid, var(--color-white-solid, #FFFFFF))",
              outlineColor:
                "var(--color-color-azure-88, var(--color-azure-88, #D9E2E6))",
            }}
          >
            <StatusBadge
              label="Published current"
              background="var(--color-color-grey-94, var(--color-grey-94, #F1F4EF))"
              color="var(--color-color-spring-green-30, var(--color-spring-green-30, #4C9B6D))"
            />

            <div className="pt-1.5 sm:pt-[5px]">
              <p
                className="text-color-azure-41 text-sm font-normal leading-6"
                style={{
                  color:
                    "var(--color-color-azure-41, var(--color-azure-41, #698CA1))",
                }}
              >
                Read and perform the fix normally.
              </p>
            </div>
          </div>

          {/* Review Due */}
          <div
            className="
              w-full min-h-[168px]
              p-5 sm:p-6
              bg-color-white-solid
              rounded-2xl
              outline outline-1 outline-offset-[-1px]
              outline-color-azure-88
              flex flex-col
              justify-start items-start
              gap-2
            "
            style={{
              backgroundColor:
                "var(--color-color-white-solid, var(--color-white-solid, #FFFFFF))",
              outlineColor:
                "var(--color-color-azure-88, var(--color-azure-88, #D9E2E6))",
            }}
          >
            <StatusBadge
              label="Review due"
              background="var(--color-color-grey-93-3, var(--color-grey-93-3, #F7F1E7))"
              color="var(--color-color-orange-34, var(--color-orange-34, #B87925))"
            />

            <div className="pt-1.5 sm:pt-[5px]">
              <p
                className="text-color-azure-41 text-sm font-normal leading-6"
                style={{
                  color:
                    "var(--color-color-azure-41, var(--color-azure-41, #698CA1))",
                }}
              >
                Read with caution; not known to be incorrect.
              </p>
            </div>
          </div>

          {/* Deprecated */}
          <div
            className="
              w-full min-h-[168px]
              p-5 sm:p-6
              bg-color-white-solid
              rounded-2xl
              outline outline-1 outline-offset-[-1px]
              outline-color-azure-88
              flex flex-col
              justify-start items-start
              gap-2
            "
            style={{
              backgroundColor:
                "var(--color-color-white-solid, var(--color-white-solid, #FFFFFF))",
              outlineColor:
                "var(--color-color-azure-88, var(--color-azure-88, #D9E2E6))",
            }}
          >
            <StatusBadge
              label="Deprecated"
              background="var(--color-color-grey-95-4, var(--color-grey-95-4, #F8EEEE))"
              color="var(--color-color-red-39, var(--color-red-39, #C94B4B))"
            />

            <div className="pt-1.5 sm:pt-[5px]">
              <p
                className="text-color-azure-41 text-sm font-normal leading-6"
                style={{
                  color:
                    "var(--color-color-azure-41, var(--color-azure-41, #698CA1))",
                }}
              >
                Persistent warning; open replacement if available.
              </p>
            </div>
          </div>

          {/* Superseded */}
          <div
            className="
              w-full min-h-[168px]
              p-5 sm:p-6
              bg-color-white-solid
              rounded-2xl
              outline outline-1 outline-offset-[-1px]
              outline-color-azure-88
              flex flex-col
              justify-start items-start
              gap-2
            "
            style={{
              backgroundColor:
                "var(--color-color-white-solid, var(--color-white-solid, #FFFFFF))",
              outlineColor:
                "var(--color-color-azure-88, var(--color-azure-88, #D9E2E6))",
            }}
          >
            <StatusBadge
              label="Superseded"
              background="var(--color-color-grey-95-2, var(--color-grey-95-2, #F2F5F6))"
              color="var(--color-color-azure-41-2, var(--color-azure-41-2, #698CA1))"
            />

            <div className="pt-1.5 sm:pt-[5px]">
              <p
                className="text-color-azure-41 text-sm font-normal leading-6"
                style={{
                  color:
                    "var(--color-color-azure-41, var(--color-azure-41, #698CA1))",
                }}
              >
                Historical banner routes to current guidance.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* Status Badge */
function StatusBadge({
  label,
  background,
  color,
}: {
  label: string;
  background: string;
  color: string;
}) {
  return (
    <div
      className="
        w-full
        min-h-7
        px-2.5
        rounded-[5px]
        flex items-center
        outline outline-1 outline-offset-[-1px]
      "
      style={{
        backgroundColor: background,
        outlineColor: color,
      }}
    >
      <div
        className="size-1.5 shrink-0 rounded-full mr-1.5"
        style={{
          backgroundColor: color,
        }}
      />

      <span
        className="
          text-xs font-medium
          uppercase leading-4
          tracking-wide
          break-words
        "
        style={{
          color,
        }}
      >
        {label}
      </span>
    </div>
  );
}