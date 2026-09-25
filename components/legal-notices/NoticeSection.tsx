import React from "react";
import { FONT_GEORGIA, FONT_INTER } from "./data";

/**
 * Shared building blocks for the Legal Notices page sections:
 * banded section shell, section heading, and the label/detail notice table.
 */

const BAND_TONES = {
  cream: "bg-[#F6F1E6]",
  white: "bg-white",
} as const;

export function NoticeSection({
  id,
  tone,
  eyebrow,
  title,
  description,
  children,
}: {
  id: string;
  tone: keyof typeof BAND_TONES;
  eyebrow: string;
  title: React.ReactNode;
  description?: React.ReactNode;
  children: React.ReactNode;
}) {
  return (
    <section
      id={id}
      aria-labelledby={`${id}-title`}
      className={`relative w-full overflow-hidden py-16 px-6 md:px-12 md:py-20 lg:px-20 ${BAND_TONES[tone]}`}
      style={{ fontFamily: FONT_INTER }}
    >
      <div className="mx-auto flex w-full max-w-[1180px] flex-col items-start">
        <div className="mb-10 w-full">
          <span className="mb-3 block text-xs font-bold uppercase leading-4 tracking-wider text-[#A8843A]">
            {eyebrow}
          </span>
          <h2
            id={`${id}-title`}
            className="w-full text-2xl font-bold leading-tight tracking-tight text-[#16223A]"
            style={{ fontFamily: FONT_GEORGIA }}
          >
            {title}
          </h2>
          {description && (
            <p className="mt-4 w-full text-sm font-normal leading-6 text-[#4B5872]">
              {description}
            </p>
          )}
        </div>
        {children}
      </div>
    </section>
  );
}

const ROW_GRIDS: Record<number, string> = {
  2: "lg:grid lg:grid-cols-[240px_minmax(0,1fr)_minmax(0,1fr)]",
  3: "lg:grid lg:grid-cols-[240px_380px_minmax(0,1fr)]",
};

/**
 * Responsive label/detail table. Stacks cells below lg; uses the header row
 * and column grid from lg up. `boxed` renders the rounded, fully bordered
 * variant used by the identity and formal-routing tables.
 */
export function NoticeTable({
  columns,
  rows,
  boxed = false,
  layout = "default",
}: {
  columns: string[];
  rows: React.ReactNode[][];
  boxed?: boolean;
  layout?: "default" | "equal";
}) {
  let rowGrid = ROW_GRIDS[columns.length] ?? ROW_GRIDS[2];
  if (columns.length === 3 && layout === "equal") {
    rowGrid = "lg:grid lg:grid-cols-[240px_minmax(0,1fr)_minmax(0,1fr)]";
  }

  const headerCells = (keyPrefix: string) =>
    columns.map((col, i) => (
      <div
        key={`${keyPrefix}-${col}`}
        role="columnheader"
        className={`px-3.5 py-2.5 text-xs font-bold uppercase leading-5 tracking-wide text-[#4B5872] ${
          i < columns.length - 1 ? (boxed ? "lg:border-r lg:border-[#DCD6C8]" : "lg:border-r lg:border-[#DCD6C8]") : ""
        }`}
      >
        {col}
      </div>
    ));

  return (
    <div
      role="table"
      aria-label={columns.join(", ")}
      className={
        boxed
          ? "w-full overflow-hidden rounded-lg border border-[#DCD6C8]"
          : "w-full border-t border-[#DCD6C8]"
      }
    >
      {/* Header row */}
      <div
        role="row"
        className={`hidden ${rowGrid} ${boxed ? "bg-[#F6F1E6]" : "border-b border-[#DCD6C8] pt-3 pb-2.5"}`}
      >
        {headerCells("header")}
      </div>

      {/* Data rows */}
      {rows.map((cells, rowIndex) => (
        <div
          key={rowIndex}
          role="row"
          className={`flex flex-col ${rowGrid} ${
            boxed ? "border-t border-[#DCD6C8]" : rowIndex === 0 ? "" : "border-t border-[#DCD6C8]"
          } ${boxed ? "" : "py-4"} text-xs font-normal leading-5 text-[#16223A]`}
        >
          {cells.map((cell, colIndex) => (
            <div
              key={colIndex}
              role="cell"
              className={`${boxed ? "px-3.5 py-3" : "pr-6"} ${
                boxed && colIndex < cells.length - 1 ? "lg:border-r lg:border-[#DCD6C8]" : ""
              } ${colIndex === 0 ? "font-bold" : ""}`}
            >
              {cell}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}
