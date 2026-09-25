import React from "react";
import { FONT_GEORGIA, FONT_INTER } from "./data";

/**
 * Shared building blocks for the California Privacy Notice page:
 * reading-frame clause shell, heading, and the label/detail notice table.
 */

export function ClauseSection({
  id,
  title,
  intro,
  noBorder = false,
  className,
  children,
}: {
  id: string;
  title: string;
  intro?: React.ReactNode;
  noBorder?: boolean;
  className?: string;
  children?: React.ReactNode;
}) {
  return (
    <section
      id={id}
      aria-labelledby={`${id}-title`}
      className={`scroll-mt-[120px] w-full pt-6 pb-0 flex flex-col gap-3 ${
        noBorder ? "" : "border-t border-[#DCD6C8]"
      } ${className || ""}`}
      style={{ fontFamily: FONT_INTER }}
    >
      <h2
        id={`${id}-title`}
        className="text-[19px] font-bold leading-[28px] tracking-[-0.19px] text-[#16223A]"
        style={{ fontFamily: FONT_GEORGIA }}
      >
        {title}
      </h2>
      {intro && (
        <p className="w-full text-sm font-normal leading-5 text-[#4B5872]">
          {intro}
        </p>
      )}
      {children}
    </section>
  );
}

const ROW_GRIDS: Record<number, string> = {
  2: "lg:grid lg:grid-cols-[240px_minmax(0,1fr)]",
  6: "lg:grid lg:grid-cols-[1.4fr_1.5fr_0.9fr_1fr_1.1fr_0.9fr]",
};

/**
 * Responsive label/detail table. Stacks cells below lg; uses the header row
 * and column grid from lg up. `boxed` renders the rounded, fully bordered
 * variant used by the personal-information disclosure matrix.
 */
export function CpnTable({
  columns,
  rows,
  boxed = false,
}: {
  columns: string[];
  rows: React.ReactNode[][];
  boxed?: boolean;
}) {
  const rowGrid = ROW_GRIDS[columns.length] ?? ROW_GRIDS[2];

  return (
    <div
      role="table"
      aria-label={columns.join(", ")}
      className={
        boxed
          ? "w-full overflow-hidden rounded-lg border border-[#DCD6C8]"
          : "w-full"
      }
    >
      {/* Header row */}
      <div
        role="row"
        className={`hidden ${rowGrid} ${
          boxed ? "bg-[#F6F1E6]" : "border-t border-b border-[#DCD6C8]"
        }`}
      >
        {columns.map((col, i) => (
          <div
            key={col}
            role="columnheader"
            className={`${
              boxed ? "px-2.5 py-2.5" : "py-3 pr-4"
            } text-xs font-bold uppercase leading-4 tracking-tight text-[#16223A] ${
              boxed && i < columns.length - 1
                ? "lg:border-r lg:border-[#DCD6C8]"
                : ""
            }`}
          >
            {col}
          </div>
        ))}
      </div>

      {/* Data rows */}
      {rows.map((cells, rowIndex) => (
        <div
          key={rowIndex}
          role="row"
          className={`flex flex-col ${rowGrid} ${
            boxed
              ? "border-t border-[#DCD6C8]"
              : rowIndex > 0
              ? "border-t border-[#DCD6C8] py-3"
              : "py-3"
          } text-xs leading-5`}
        >
          {cells.map((cell, colIndex) => (
            <div
              key={colIndex}
              role="cell"
              className={`${boxed ? "px-2.5 py-2.5" : "pr-4"} ${
                boxed && colIndex < cells.length - 1
                  ? "lg:border-r lg:border-[#DCD6C8]"
                  : ""
              } ${
                !boxed && colIndex === 0
                  ? "font-bold text-[#16223A]"
                  : "font-normal text-[#4B5872]"
              }`}
            >
              {cell}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}
