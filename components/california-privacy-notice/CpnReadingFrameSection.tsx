import React from "react";
import CpnSectionsNav from "./CpnSectionsNav";
import {
  ClauseSection,
  CpnTable,
} from "./NoticeSection";
import {
  AGENTS_MINORS_ROWS,
  CONDITIONAL_NOTE,
  CONTACT_TEXT,
  COOKIES_SECURITY_ROWS,
  MATRIX_HEADERS,
  MATRIX_ROWS,
  RETENTION_TEXT,
  RIGHTS,
  SALE_SHARING_ROWS,
  SCOPE_ROWS,
  SOURCES_PURPOSES_ROWS,
  SUBMIT_REQUEST_ROWS,
} from "./data";
import CpnFaqSection from "./CpnFaqSection";
import CpnRelatedDestinationsSection from "./CpnRelatedDestinationsSection";

export default function CpnReadingFrameSection() {
  return (
    <div className="w-full bg-white px-4 md:px-8 xl:px-0">
      <div className="mx-auto w-full max-w-[1130px] pt-[40px] pb-[80px] flex flex-col gap-[70px] lg:flex-row">
        {/* Section nav — stacked on tablet, sticky 260px rail on desktop */}
        <aside className="w-full pb-5 lg:pb-0 lg:w-[260px] lg:shrink-0">
          <div className="lg:sticky lg:top-[120px]">
            <CpnSectionsNav />
          </div>
        </aside>

        {/* Notice body */}
        <article className="w-full min-w-0 lg:flex-1 lg:max-w-[800px] flex flex-col gap-[70px]">
          <ClauseSection
            id="scope"
            title="Scope & Applicability"
            intro="This notice applies as determined by Legal-approved rules — not merely because a visitor is geolocated in California."
            noBorder
          >
            <CpnTable
              columns={["Field", "Value"]}
              rows={SCOPE_ROWS.map((r) => [r.field, r.value])}
            />
          </ClauseSection>

          <ClauseSection
            id="matrix"
            title="Personal Information Disclosure Matrix"
            intro="Every row below is sourced from the approved Privacy Data Map. No field defaults to “No” or “Not applicable” merely because it is unresolved."
          >
            <CpnTable
              columns={MATRIX_HEADERS}
              rows={MATRIX_ROWS.map((r) => [
                r.category,
                r.examples,
                r.collected,
                r.sources,
                r.purposes,
                r.soldShared,
              ])}
              boxed
            />
          </ClauseSection>

          <ClauseSection
            id="sources-purposes"
            title="Sources, Purposes & Disclosure Recipients"
          >
            <CpnTable
              columns={["Section", "Requirement"]}
              rows={SOURCES_PURPOSES_ROWS.map((r) => [r.section, r.requirement])}
            />
          </ClauseSection>

          <ClauseSection id="sale-sharing" title="Sale / Sharing, Sensitive Personal Information & Retention">
            <CpnTable
              columns={["Module", "Rule"]}
              rows={SALE_SHARING_ROWS.map((r) => [r.module, r.rule])}
            />
          </ClauseSection>

          <ClauseSection id="retention" title="Retention" intro={RETENTION_TEXT} />

          <ClauseSection
            id="rights"
            title="California Privacy Rights"
            intro="Sourced from the Rights & Choices Registry version tied to this notice's publication version."
          >
            <div className="pt-4 flex flex-col">
              {RIGHTS.map((right, i) => (
                <div
                  key={i}
                  className={`pt-4 pb-5 flex flex-col gap-1.5 ${
                    i > 0 ? "border-t border-[#DCD6C8]" : ""
                  }`}
                >
                  <h3 className="text-sm font-bold leading-6 text-[#123255]">
                    {right.label}
                  </h3>
                  <p className="text-xs leading-5 text-[#4B5872]">
                    <span className="font-bold text-[#16223A]">Who may use it:</span>{" "}
                    {right.who}
                  </p>
                  <p className="text-xs leading-5 text-[#4B5872]">
                    <span className="font-bold text-[#16223A]">What it does:</span> {right.what}
                  </p>
                  {right.limitations && (
                    <p className="text-xs leading-5 text-[#4B5872]">
                      <span className="font-bold text-[#16223A]">Limitations:</span>{" "}
                      {right.limitations}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </ClauseSection>

          <ClauseSection id="submit-request" title="How to Submit a Privacy Request">
            <CpnTable
              columns={["Element", "Requirement"]}
              rows={SUBMIT_REQUEST_ROWS.map((r) => [r.section, r.requirement])}
            />
          </ClauseSection>

          <ClauseSection
            id="agents-minors-incentives"
            title="Authorized Agents, Minors & Financial Incentives"
            intro={
              <>
                <span className="whitespace-nowrap">These are conditional modules — each appears only when the underlying program or eligibility exists and Legal has approved</span><br />
                the applicable wording.
              </>
            }
          >
            <CpnTable
              columns={["Module", "Requirement"]}
              rows={AGENTS_MINORS_ROWS.map((r) => [r.module, r.rule])}
            />
            <div className="mt-4 px-4 py-3 bg-[#EFE8D8] rounded-md border-l-[3px] border-[#A8843A]">
              <p className="text-xs italic leading-5 text-[#4B5872]">
                {CONDITIONAL_NOTE}
              </p>
            </div>
          </ClauseSection>

          <ClauseSection id="cookies-security-updates" title="Cookies, Security / Responsible AI & Updates">
            <CpnTable
              columns={["Area", "Requirement"]}
              rows={COOKIES_SECURITY_ROWS.map((r) => [r.area, r.requirement])}
            />
          </ClauseSection>

          <ClauseSection id="contact" title="Contact" intro={CONTACT_TEXT} className="-mb-[35px]" />

          <CpnFaqSection />

          <CpnRelatedDestinationsSection />
        </article>
      </div>
    </div>
  );
}
