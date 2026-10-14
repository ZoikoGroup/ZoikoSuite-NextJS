"use client";

import React, { useState } from "react";

interface EnterpriseInquiryFormProps {
  selectedRole?: string;
}

export default function EnterpriseInquiryForm({
  selectedRole,
}: EnterpriseInquiryFormProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    organization: "",
    interest: selectedRole ? `${selectedRole} priorities` : "",
    request: "",
    phone: "",
    timeframe: "",
    seatCount: "",
  });

  const [isOptionalOpen, setIsOptionalOpen] = useState(false);
  const [isPreviewOpen, setIsPreviewOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  // Sync if selectedRole prop changes
  React.useEffect(() => {
    if (selectedRole) {
      setTimeout(() => {
        setFormData((prev) => ({
          ...prev,
          interest: selectedRole,
        }));
      }, 0);
    }
  }, [selectedRole]);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.organization || !formData.request) {
      alert("Please fill in all required fields marked with *");
      return;
    }
    setIsPreviewOpen(true);
  };

  const handleConfirm = () => {
    setIsPreviewOpen(false);
    setSubmitted(true);
  };

  return (
    <section id="inquiry" className="bg-[#F6F5EF] py-[82px] px-6 sm:px-12 lg:px-[120px] font-sans">
      <div className="w-full max-w-[1200px] mx-auto px-0 md:px-[36px]">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_minmax(0,636px)] gap-[40px] lg:gap-[60px] items-center">
          {/* Left Column: Form Intro & Notes */}
          <div className="flex flex-col gap-[19.7px]">
            {/* Eyebrow */}
            <div className="flex items-center gap-[10px]">
              <span className="w-[23px] h-[2px] bg-[#D9B364] flex-shrink-0" />
              <span className="font-bold text-[11px] leading-[18.15px] tracking-[0.17em] uppercase text-[#13303B]">
                Let’s begin
              </span>
            </div>

            {/* H2 */}
            <h2
              id="formheading"
              className="font-semibold text-[30px] sm:text-[34px] lg:text-[36px] leading-[1.15] lg:leading-[41.4px] tracking-[-0.035em] text-[#13303B]"
            >
              Tell us what you’re
              <br />
              looking to evaluate.
            </h2>

            {/* Lead */}
            <p className="font-normal text-[14px] leading-[23.1px] text-[#64757C]">
              A little context helps us understand your priorities. You can
              share additional requirements as your evaluation develops.
            </p>

            {/* Preview Note */}
            <div className="border-t border-[#DCE4E4] pt-[26.29px] pb-[18px] flex flex-col gap-[3.8px]">
              <strong className="font-bold text-[12px] leading-[19.8px] text-[#13303B]">
                Local design preview
              </strong>
              <p className="font-normal text-[12px] leading-[19.8px] text-[#64757C]">
                This form lets you prepare and review an inquiry. It does not
                send
                <br className="hidden sm:inline" />
                information to ZoikoSuite. A verified intake service and
                privacy notice
                <br className="hidden sm:inline" />
                are needed before launch.
              </p>
            </div>

            {/* Caution Note */}
            <p className="font-normal text-[12px] leading-[19.8px] text-[#64757C]">
              Please do not include personal employee records, payroll files,
              <br className="hidden sm:inline" />
              payment details, passwords, or confidential documents.
            </p>
          </div>

          {/* Right Column: Form Card */}
          <form
            id="salesform"
            onSubmit={handleSubmit}
            className="w-full max-w-[636px] bg-white border border-[#DCE4E4] rounded-[8px] p-[24px] sm:p-[35px] pb-[40px] sm:pb-[55px] flex flex-col gap-[24px] shadow-sm"
          >
            {submitted ? (
              <div className="py-12 px-6 text-center flex flex-col items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-[#1C7A78]/10 text-[#1C7A78] flex items-center justify-center text-xl font-bold">
                  ✓
                </div>
                <h3 className="font-bold text-[21px] leading-[24.15px] text-[#13303B]">
                  Inquiry Review Prepared
                </h3>
                <p className="font-normal text-[14px] leading-[23.1px] text-[#64757C] max-w-md">
                  Thank you, {formData.name}. Your inquiry parameters for{" "}
                  <strong>{formData.organization}</strong> have been configured for preview.
                </p>
                <button
                  type="button"
                  onClick={() => setSubmitted(false)}
                  className="mt-2 text-[#1C7A78] text-xs font-semibold hover:underline"
                >
                  Edit inquiry details
                </button>
              </div>
            ) : (
              <>
                {/* Fields Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-[21px]">
                  {/* Full Name */}
                  <div className="flex flex-col gap-[7px]">
                    <label
                      htmlFor="name"
                      className="font-semibold text-[12px] leading-[19.8px] text-[#13303B]"
                    >
                      Full name *
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      placeholder="Your full name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-[12px] py-[15px] bg-white border border-[#CBD7D9] rounded-[10px] font-normal text-[14px] text-[#13303B] placeholder-[#829196] focus:outline-none focus:border-[#1C7A78] transition-colors"
                    />
                  </div>

                  {/* Work Email */}
                  <div className="flex flex-col gap-[7px]">
                    <label
                      htmlFor="email"
                      className="font-semibold text-[12px] leading-[19.8px] text-[#13303B]"
                    >
                      Work email *
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      placeholder="you@organization.com"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-[12px] py-[15px] bg-white border border-[#CBD7D9] rounded-[10px] font-normal text-[14px] text-[#13303B] placeholder-[#829196] focus:outline-none focus:border-[#1C7A78] transition-colors"
                    />
                  </div>

                  {/* Organization Name (Span 2) */}
                  <div className="sm:col-span-2 flex flex-col gap-[7px]">
                    <label
                      htmlFor="org"
                      className="font-semibold text-[12px] leading-[19.8px] text-[#13303B]"
                    >
                      Organization name *
                    </label>
                    <input
                      id="org"
                      name="organization"
                      type="text"
                      required
                      placeholder="Your organization"
                      value={formData.organization}
                      onChange={handleChange}
                      className="w-full px-[12px] py-[15px] bg-white border border-[#CBD7D9] rounded-[10px] font-normal text-[14px] text-[#13303B] placeholder-[#829196] focus:outline-none focus:border-[#1C7A78] transition-colors"
                    />
                  </div>

                  {/* Area of Interest (Span 2) */}
                  <div className="sm:col-span-2 flex flex-col gap-[7px]">
                    <label
                      htmlFor="interest"
                      className="font-semibold text-[12px] leading-[19.8px] text-[#13303B]"
                    >
                      Area of interest *
                    </label>
                    <select
                      id="interest"
                      name="interest"
                      required
                      value={formData.interest}
                      onChange={handleChange}
                      className="w-full px-[16px] pr-[28px] py-[14px] bg-white border border-[#CBD7D9] rounded-[10px] font-normal text-[14px] text-[#13303B] focus:outline-none focus:border-[#1C7A78] transition-colors cursor-pointer"
                    >
                      <option value="">Select an evaluation topic</option>
                      <option value="Business & operating priorities">
                        Business & operating priorities
                      </option>
                      <option value="Workforce & payroll evaluation">
                        Workforce & payroll evaluation
                      </option>
                      <option value="Technology & integrations">
                        Technology & integrations
                      </option>
                      <option value="Governance, security & compliance">
                        Governance, security & compliance
                      </option>
                      <option value="Enterprise deployment & procurement">
                        Enterprise deployment & procurement
                      </option>
                      <option value="Executive & cross-functional alignment">
                        Executive & cross-functional alignment
                      </option>
                      <option value="CIO / IT">CIO / IT priorities</option>
                      <option value="CHRO / People">
                        CHRO / People workforce
                      </option>
                      <option value="COO / Operations">
                        COO / Operations strategy
                      </option>
                      <option value="Finance / Controller">
                        Finance / Controller controls
                      </option>
                      <option value="Procurement / Executive">
                        Procurement / Executive evaluation
                      </option>
                      <option value="Other business leaders">
                        Other business priorities
                      </option>
                    </select>
                  </div>

                  {/* Your Request (Span 2) */}
                  <div className="sm:col-span-2 flex flex-col gap-[7px]">
                    <label
                      htmlFor="request"
                      className="font-semibold text-[12px] leading-[19.8px] text-[#13303B]"
                    >
                      Your request *
                    </label>
                    <textarea
                      id="request"
                      name="request"
                      rows={4}
                      required
                      minLength={20}
                      maxLength={1500}
                      placeholder="Tell us about your goals and the questions you’d like to explore."
                      value={formData.request}
                      onChange={handleChange}
                      className="w-full px-[12px] py-[11px] min-h-[120px] bg-white border border-[#CBD7D9] rounded-[10px] font-normal text-[14px] text-[#13303B] placeholder-[#829196] focus:outline-none focus:border-[#1C7A78] transition-colors resize-y"
                    />
                    <small
                      id="requesthelp"
                      className="font-normal text-[11px] leading-[18.15px] text-[#64757C] pt-[2px]"
                    >
                      20–1,500 characters. Share general requirements only; avoid
                      sensitive information.
                    </small>
                  </div>
                </div>

                {/* Details Optional Accordion */}
                <div className="border-y border-[#DCE4E4] rounded-[10px] transition-colors">
                  <button
                    type="button"
                    onClick={() => setIsOptionalOpen(!isOptionalOpen)}
                    className="w-full px-[10px] py-[15px] flex items-center justify-between text-left cursor-pointer group focus:outline-none"
                  >
                    <span className="font-normal text-[12px] leading-[19.8px] text-[#13303B]">
                      Add optional context
                    </span>
                    <span className="font-normal text-[12px] leading-[19.8px] text-[#13303B] select-none">
                      {isOptionalOpen ? "−" : "+"}
                    </span>
                  </button>

                  {isOptionalOpen && (
                    <div className="px-[10px] pb-[16px] grid grid-cols-1 sm:grid-cols-2 gap-[14px]">
                      <div className="flex flex-col gap-[4px]">
                        <label className="text-[11px] font-semibold text-[#13303B]">
                          Phone number
                        </label>
                        <input
                          type="tel"
                          name="phone"
                          placeholder="+1 (555) 000-0000"
                          value={formData.phone}
                          onChange={handleChange}
                          className="px-[10px] py-[10px] bg-white border border-[#CBD7D9] rounded-[8px] text-[13px] text-[#13303B] placeholder-[#829196] focus:outline-none focus:border-[#1C7A78]"
                        />
                      </div>

                      <div className="flex flex-col gap-[4px]">
                        <label className="text-[11px] font-semibold text-[#13303B]">
                          Target timeframe
                        </label>
                        <input
                          type="text"
                          name="timeframe"
                          placeholder="e.g. Q1 2027 or immediate"
                          value={formData.timeframe}
                          onChange={handleChange}
                          className="px-[10px] py-[10px] bg-white border border-[#CBD7D9] rounded-[8px] text-[13px] text-[#13303B] placeholder-[#829196] focus:outline-none focus:border-[#1C7A78]"
                        />
                      </div>

                      <div className="sm:col-span-2 flex flex-col gap-[4px]">
                        <label className="text-[11px] font-semibold text-[#13303B]">
                          Estimated user count / scope
                        </label>
                        <input
                          type="text"
                          name="seatCount"
                          placeholder="e.g. 500+ employees across 3 regions"
                          value={formData.seatCount}
                          onChange={handleChange}
                          className="px-[10px] py-[10px] bg-white border border-[#CBD7D9] rounded-[8px] text-[13px] text-[#13303B] placeholder-[#829196] focus:outline-none focus:border-[#1C7A78]"
                        />
                      </div>
                    </div>
                  )}
                </div>

                {/* Form Bottom Row */}
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 pt-2">
                  <p className="font-normal text-[11px] leading-[18.15px] text-[#64757C]">
                    Required fields are marked *. Details stay on this
                    <br className="hidden sm:inline" />
                    page during your preview.
                  </p>

                  <button
                    type="submit"
                    suppressHydrationWarning
                    className="inline-flex items-center justify-center gap-[25px] px-[22px] py-[13.7px] bg-[#D9B364] text-[#082632] rounded-[5px] border border-transparent font-semibold text-[13px] leading-[21.45px] hover:bg-[#cda653] transition-colors shadow-sm cursor-pointer"
                  >
                    <span>Review inquiry</span>
                    <svg
                      className="w-3.5 h-3.5 shrink-0"
                      viewBox="0 0 14 14"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M3.5 10.5L10.5 3.5M10.5 3.5H5.5M10.5 3.5V8.5"
                        stroke="currentColor"
                        strokeWidth="2.2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </button>
                </div>
              </>
            )}
          </form>
        </div>
      </div>

      {/* Inquiry Review Modal */}
      {isPreviewOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4 backdrop-blur-xs">
          <div className="bg-white rounded-[10px] max-w-lg w-full p-6 shadow-2xl border border-[#DCE4E4] flex flex-col gap-4 animate-in fade-in zoom-in-95 duration-200">
            <div className="flex items-center justify-between border-b border-[#DCE4E4] pb-3">
              <h3 className="font-bold text-[18px] text-[#13303B]">
                Inquiry Preview
              </h3>
              <button
                type="button"
                onClick={() => setIsPreviewOpen(false)}
                className="text-[#64757C] hover:text-[#13303B] text-xl font-bold p-1"
              >
                ✕
              </button>
            </div>

            <div className="flex flex-col gap-3 text-[13px] text-[#64757C] py-2">
              <p>
                <strong className="text-[#13303B]">Name:</strong> {formData.name}
              </p>
              <p>
                <strong className="text-[#13303B]">Email:</strong> {formData.email}
              </p>
              <p>
                <strong className="text-[#13303B]">Organization:</strong>{" "}
                {formData.organization}
              </p>
              <p>
                <strong className="text-[#13303B]">Area of interest:</strong>{" "}
                {formData.interest || "Not specified"}
              </p>
              <div className="border-t border-[#DCE4E4] pt-2">
                <strong className="text-[#13303B]">Request details:</strong>
                <p className="mt-1 whitespace-pre-wrap text-[#13303B] bg-[#F6F5EF] p-3 rounded-[6px]">
                  {formData.request}
                </p>
              </div>
              {formData.phone && (
                <p>
                  <strong className="text-[#13303B]">Phone:</strong> {formData.phone}
                </p>
              )}
              {formData.timeframe && (
                <p>
                  <strong className="text-[#13303B]">Timeframe:</strong>{" "}
                  {formData.timeframe}
                </p>
              )}
              {formData.seatCount && (
                <p>
                  <strong className="text-[#13303B]">Scope:</strong>{" "}
                  {formData.seatCount}
                </p>
              )}
            </div>

            <div className="flex items-center justify-end gap-3 pt-3 border-t border-[#DCE4E4]">
              <button
                type="button"
                onClick={() => setIsPreviewOpen(false)}
                className="px-4 py-2 border border-[#CBD7D9] rounded-[5px] text-xs font-semibold text-[#13303B] hover:bg-gray-50"
              >
                Back to Edit
              </button>
              <button
                type="button"
                onClick={handleConfirm}
                className="px-5 py-2 bg-[#D9B364] text-[#082632] rounded-[5px] text-xs font-bold hover:bg-[#cda653]"
              >
                Confirm Preview
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
