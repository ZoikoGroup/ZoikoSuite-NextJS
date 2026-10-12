"use client";

import React, { useState } from "react";

interface MediaEnquiriesFormProps {
  selectedCategory?: string;
}

export default function MediaEnquiriesForm({
  selectedCategory,
}: MediaEnquiriesFormProps) {
  const [formData, setFormData] = useState({
    enquiryType: selectedCategory || "",
    name: "",
    email: "",
    outlet: "",
    role: "",
    region: "",
    subject: "",
    request: "",
    deadline: "",
    timezone: "",
    publicationUrl: "",
    publishDate: "",
  });

  const [isOptionalOpen, setIsOptionalOpen] = useState(false);
  const [isPreviewOpen, setIsPreviewOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  React.useEffect(() => {
    if (selectedCategory) {
      setFormData((prev) => ({ ...prev, enquiryType: selectedCategory }));
    }
  }, [selectedCategory]);

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
    if (
      !formData.enquiryType ||
      !formData.name ||
      !formData.email ||
      !formData.outlet ||
      !formData.region ||
      !formData.subject ||
      !formData.request
    ) {
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
        <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,0.72fr)_minmax(0,1.28fr)] gap-[40px] lg:gap-[60px] items-start">
          {/* Left Column: Form Intro & Safety Callouts */}
          <aside className="flex flex-col gap-[19.6px]">
            {/* Eyebrow */}
            <div className="flex items-center gap-[10px]">
              <span className="w-[23px] h-[2px] bg-[#D9B364] flex-shrink-0" />
              <span className="font-bold text-[11px] leading-[18.15px] tracking-[0.17em] uppercase text-[#13303B]">
                Your media request
              </span>
            </div>

            {/* H2 */}
            <h2
              id="formheading"
              className="font-semibold text-[30px] sm:text-[34px] lg:text-[36px] leading-[1.15] lg:leading-[41.4px] tracking-[-0.035em] text-[#13303B]"
            >
              Tell us what
              <br />
              you’re working on.
            </h2>

            {/* Lead */}
            <p className="font-normal text-[14px] leading-[23.1px] text-[#64757C]">
              Provide your editorial question and a little context.
              <br className="hidden sm:inline" />
              Independent journalists can identify themselves in the
              <br className="hidden sm:inline" />
              organization / outlet field.
            </p>

            {/* Safety Callout 1 */}
            <div className="bg-color-grey-95-26 rounded-[5px] p-[24px] pt-[28.4px] flex flex-col gap-[6.8px]">
              <strong className="font-bold text-[14px] leading-[23.1px] text-[#13303B]">
                Before you send
              </strong>
              <p className="font-normal text-[12px] leading-[19.8px] text-[#13303B]">
                Please avoid including passwords, financial account
                <br className="hidden sm:inline" />
                information, or sensitive personal records. File uploads are
                <br className="hidden sm:inline" />
                unavailable in this preview.
              </p>
            </div>

            {/* Safety Callout 2 */}
            <div className="bg-color-grey-95-26 rounded-[5px] p-[24px] pt-[28.4px] flex flex-col gap-[6.8px]">
              <strong className="font-bold text-[14px] leading-[23.1px] text-[#13303B]">
                Timing and permission
              </strong>
              <p className="font-normal text-[12px] leading-[19.8px] text-[#13303B]">
                A requested deadline does not guarantee turnaround. An
                <br className="hidden sm:inline" />
                enquiry does not confirm an interview, speaker appearance,
                <br className="hidden sm:inline" />
                statement, or rights to use an asset.
              </p>
            </div>

            {/* Safety Callout 3 */}
            <div className="bg-color-grey-95-26 rounded-[5px] p-[24px] pt-[28.4px] flex flex-col gap-[6.8px]">
              <strong className="font-bold text-[14px] leading-[23.1px] text-[#13303B]">
                Editorial enquiries only
              </strong>
              <p className="font-normal text-[12px] leading-[19.8px] text-[#13303B]">
                This channel is not a designated method for serving legal
                <br className="hidden sm:inline" />
                notices. For other needs,{" "}
                <a
                  href="#routes"
                  className="underline text-[#1C7A78] hover:text-[#13303B]"
                >
                  choose a dedicated contact
                </a>
                .
              </p>
            </div>

            {/* Preview Note */}
            <div className="border-t border-[#DCE4E4] pt-[26.4px] pb-[18px] flex flex-col gap-[3.8px]">
              <strong className="font-bold text-[12px] leading-[19.8px] text-[#13303B]">
                Local design preview
              </strong>
              <p className="font-normal text-[12px] leading-[19.8px] text-[#64757C]">
                Review a media enquiry without sending or saving it. A verified intake
                <br className="hidden sm:inline" />
                service and approved privacy notice must be connected before
                <br className="hidden sm:inline" />
                launch.
              </p>
            </div>
          </aside>

          {/* Right Column: Media Form */}
          <form
            id="mediaform"
            onSubmit={handleSubmit}
            className="w-full bg-white border border-[#DCE4E4] rounded-[8px] p-[24px] sm:p-[35px] pb-[40px] sm:pb-[55px] flex flex-col gap-[23px] shadow-sm"
          >
            {submitted ? (
              <div className="py-12 px-6 text-center flex flex-col items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-[#1C7A78]/10 text-[#1C7A78] flex items-center justify-center text-xl font-bold">
                  ✓
                </div>
                <h3 className="font-bold text-[21px] leading-[24.15px] text-[#13303B]">
                  Media Enquiry Preview Prepared
                </h3>
                <p className="font-normal text-[14px] leading-[23.1px] text-[#64757C] max-w-md">
                  Thank you, {formData.name}. Your press request regarding{" "}
                  <strong>&quot;{formData.subject}&quot;</strong> for{" "}
                  <strong>{formData.outlet}</strong> has been configured for preview.
                </p>
                <button
                  type="button"
                  onClick={() => setSubmitted(false)}
                  className="mt-2 text-[#1C7A78] text-xs font-semibold hover:underline"
                >
                  Edit enquiry details
                </button>
              </div>
            ) : (
              <>
                {/* Field 1: Enquiry Type */}
                <div className="flex flex-col gap-[7px]">
                  <label
                    htmlFor="interest"
                    className="font-semibold text-[12px] leading-[19.8px] text-[#13303B]"
                  >
                    Enquiry type *
                  </label>
                  <select
                    id="interest"
                    name="enquiryType"
                    required
                    value={formData.enquiryType}
                    onChange={handleChange}
                    className="w-full px-[16px] pr-[28px] py-[14px] bg-white border border-[#CBD7D9] rounded-[4px] font-normal text-[14px] text-[#13303B] focus:outline-none focus:border-[#1C7A78] transition-colors cursor-pointer"
                  >
                    <option value="">Select a media request type</option>
                    <option value="Press Questions & Fact Checks">
                      Press Questions & Fact Checks
                    </option>
                    <option value="Interviews & Spokesperson Requests">
                      Interviews & Spokesperson Requests
                    </option>
                    <option value="News Releases & Company Information">
                      News Releases & Company Information
                    </option>
                    <option value="Images, Logos & Media Assets">
                      Images, Logos & Media Assets
                    </option>
                    <option value="Events, Speaking & Broadcast">
                      Events, Speaking & Broadcast
                    </option>
                    <option value="Corrections & Sensitive Media Requests">
                      Corrections & Sensitive Media Requests
                    </option>
                    <option value="Other editorial enquiry">
                      Other editorial enquiry
                    </option>
                  </select>
                </div>

                {/* Row 2: Name & Email */}
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

                  {/* Email */}
                  <div className="flex flex-col gap-[7px]">
                    <label
                      htmlFor="email"
                      className="font-semibold text-[12px] leading-[19.8px] text-[#13303B]"
                    >
                      Work / professional email *
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      placeholder="you@example.com"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-[12px] py-[15px] bg-white border border-[#CBD7D9] rounded-[10px] font-normal text-[14px] text-[#13303B] placeholder-[#829196] focus:outline-none focus:border-[#1C7A78] transition-colors"
                    />
                  </div>
                </div>

                {/* Field 3: Outlet / Organization */}
                <div className="flex flex-col gap-[7px]">
                  <label
                    htmlFor="outlet"
                    className="font-semibold text-[12px] leading-[19.8px] text-[#13303B]"
                  >
                    Organization / outlet *
                  </label>
                  <input
                    id="outlet"
                    name="outlet"
                    type="text"
                    required
                    placeholder="Publication, broadcaster, or independent journalist"
                    value={formData.outlet}
                    onChange={handleChange}
                    className="w-full px-[12px] py-[15px] bg-white border border-[#CBD7D9] rounded-[10px] font-normal text-[14px] text-[#13303B] placeholder-[#829196] focus:outline-none focus:border-[#1C7A78] transition-colors"
                  />
                </div>

                {/* Row 4: Role & Region */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-[21px]">
                  {/* Role */}
                  <div className="flex flex-col gap-[7px]">
                    <label
                      htmlFor="role"
                      className="font-semibold text-[12px] leading-[19.8px] text-[#13303B]"
                    >
                      Role / job title{" "}
                      <span className="font-normal text-[#64757C]">(optional)</span>
                    </label>
                    <input
                      id="role"
                      name="role"
                      type="text"
                      placeholder="Your role"
                      value={formData.role}
                      onChange={handleChange}
                      className="w-full px-[12px] py-[15px] bg-white border border-[#CBD7D9] rounded-[10px] font-normal text-[14px] text-[#13303B] placeholder-[#829196] focus:outline-none focus:border-[#1C7A78] transition-colors"
                    />
                  </div>

                  {/* Region */}
                  <div className="flex flex-col gap-[7px]">
                    <label
                      htmlFor="region"
                      className="font-semibold text-[12px] leading-[19.8px] text-[#13303B]"
                    >
                      Country / region *
                    </label>
                    <input
                      id="region"
                      name="region"
                      type="text"
                      required
                      placeholder="Your country or region"
                      value={formData.region}
                      onChange={handleChange}
                      className="w-full px-[12px] py-[15px] bg-white border border-[#CBD7D9] rounded-[10px] font-normal text-[14px] text-[#13303B] placeholder-[#829196] focus:outline-none focus:border-[#1C7A78] transition-colors"
                    />
                    <small
                      id="regionhelp"
                      className="font-normal text-[11px] leading-[18.15px] text-[#3D4378] opacity-80"
                    >
                      Used for routing context.
                    </small>
                  </div>
                </div>

                {/* Field 5: Subject */}
                <div className="flex flex-col gap-[7px]">
                  <label
                    htmlFor="subject"
                    className="font-semibold text-[12px] leading-[19.8px] text-[#13303B]"
                  >
                    Subject *
                  </label>
                  <input
                    id="subject"
                    name="subject"
                    type="text"
                    required
                    placeholder="A concise subject for your request"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-[12px] py-[15px] bg-white border border-[#CBD7D9] rounded-[10px] font-normal text-[14px] text-[#13303B] placeholder-[#829196] focus:outline-none focus:border-[#1C7A78] transition-colors"
                  />
                </div>

                {/* Field 6: Request Details */}
                <div className="flex flex-col gap-[7px]">
                  <label
                    htmlFor="request"
                    className="font-semibold text-[12px] leading-[19.8px] text-[#13303B]"
                  >
                    Request details *
                  </label>
                  <textarea
                    id="request"
                    name="request"
                    rows={4}
                    required
                    minLength={20}
                    maxLength={4000}
                    placeholder="Share your editorial question, background, and intended use."
                    value={formData.request}
                    onChange={handleChange}
                    className="w-full px-[12px] py-[11px] min-h-[120px] bg-white border border-[#CBD7D9] rounded-[10px] font-normal text-[14px] text-[#13303B] placeholder-[#829196] focus:outline-none focus:border-[#1C7A78] transition-colors resize-y"
                  />
                  <small
                    id="requesthelp"
                    className="font-normal text-[11px] leading-[18.15px] text-[#64757C]"
                  >
                    20–4,000 characters. Avoid sensitive personal or confidential
                    records.
                  </small>
                </div>

                {/* Optional Details Accordion */}
                <div className="border-y border-[#DCE4E4] transition-colors">
                  <button
                    type="button"
                    onClick={() => setIsOptionalOpen(!isOptionalOpen)}
                    className="w-full py-[15px] flex items-center justify-between text-left cursor-pointer group focus:outline-none"
                  >
                    <span className="font-normal text-[12px] leading-[19.8px] text-[#13303B]">
                      Add deadline and source context
                    </span>
                    <span className="font-normal text-[12px] leading-[19.8px] text-[#13303B] select-none">
                      {isOptionalOpen ? "−" : "+"}
                    </span>
                  </button>

                  {isOptionalOpen && (
                    <div className="pb-[18px] grid grid-cols-1 sm:grid-cols-2 gap-[14px]">
                      <div className="flex flex-col gap-[4px]">
                        <label className="text-[11px] font-semibold text-[#13303B]">
                          Requested deadline
                        </label>
                        <input
                          type="text"
                          name="deadline"
                          placeholder="e.g. Oct 15, 2026 at 5:00 PM"
                          value={formData.deadline}
                          onChange={handleChange}
                          className="px-[10px] py-[10px] bg-white border border-[#CBD7D9] rounded-[8px] text-[13px] text-[#13303B] placeholder-[#829196] focus:outline-none focus:border-[#1C7A78]"
                        />
                      </div>

                      <div className="flex flex-col gap-[4px]">
                        <label className="text-[11px] font-semibold text-[#13303B]">
                          Time zone
                        </label>
                        <input
                          type="text"
                          name="timezone"
                          placeholder="e.g. EST / GMT / CET"
                          value={formData.timezone}
                          onChange={handleChange}
                          className="px-[10px] py-[10px] bg-white border border-[#CBD7D9] rounded-[8px] text-[13px] text-[#13303B] placeholder-[#829196] focus:outline-none focus:border-[#1C7A78]"
                        />
                      </div>

                      <div className="flex flex-col gap-[4px]">
                        <label className="text-[11px] font-semibold text-[#13303B]">
                          Outlet website / Portfolio
                        </label>
                        <input
                          type="url"
                          name="publicationUrl"
                          placeholder="https://example.com"
                          value={formData.publicationUrl}
                          onChange={handleChange}
                          className="px-[10px] py-[10px] bg-white border border-[#CBD7D9] rounded-[8px] text-[13px] text-[#13303B] placeholder-[#829196] focus:outline-none focus:border-[#1C7A78]"
                        />
                      </div>

                      <div className="flex flex-col gap-[4px]">
                        <label className="text-[11px] font-semibold text-[#13303B]">
                          Planned publish date
                        </label>
                        <input
                          type="text"
                          name="publishDate"
                          placeholder="e.g. Next week or TBD"
                          value={formData.publishDate}
                          onChange={handleChange}
                          className="px-[10px] py-[10px] bg-white border border-[#CBD7D9] rounded-[8px] text-[13px] text-[#13303B] placeholder-[#829196] focus:outline-none focus:border-[#1C7A78]"
                        />
                      </div>
                    </div>
                  )}
                </div>

                {/* Bottom Row */}
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 pt-[1px]">
                  <p className="font-normal text-[11px] leading-[18.15px] text-[#64757C]">
                    Required fields are marked *. No
                    <br className="hidden sm:inline" />
                    marketing consent is required to review
                    <br className="hidden sm:inline" />
                    your enquiry.
                  </p>

                  <button
                    type="submit"
                    className="inline-flex items-center justify-center gap-[12px] px-[16px] py-[13.7px] bg-[#D9B364] text-[#082632] rounded-[5px] border border-transparent font-semibold text-[13px] leading-[21.45px] hover:bg-[#cda653] transition-colors shadow-sm cursor-pointer"
                  >
                    <span>Review media enquiry</span>
                    <span className="font-semibold text-[13px] leading-[21.45px]">↗</span>
                  </button>
                </div>
              </>
            )}
          </form>
        </div>
      </div>

      {/* Review Modal */}
      {isPreviewOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4 backdrop-blur-xs">
          <div className="bg-white rounded-[10px] max-w-lg w-full p-6 shadow-2xl border border-[#DCE4E4] flex flex-col gap-4 animate-in fade-in zoom-in-95 duration-200">
            <div className="flex items-center justify-between border-b border-[#DCE4E4] pb-3">
              <h3 className="font-bold text-[18px] text-[#13303B]">
                Media Enquiry Review
              </h3>
              <button
                type="button"
                onClick={() => setIsPreviewOpen(false)}
                className="text-[#64757C] hover:text-[#13303B] text-xl font-bold p-1"
              >
                ✕
              </button>
            </div>

            <div className="flex flex-col gap-3 text-[13px] text-[#64757C] py-2 max-h-[70vh] overflow-y-auto">
              <p>
                <strong className="text-[#13303B]">Enquiry Type:</strong>{" "}
                {formData.enquiryType}
              </p>
              <p>
                <strong className="text-[#13303B]">Name:</strong> {formData.name}
              </p>
              <p>
                <strong className="text-[#13303B]">Email:</strong> {formData.email}
              </p>
              <p>
                <strong className="text-[#13303B]">Outlet / Organization:</strong>{" "}
                {formData.outlet}
              </p>
              {formData.role && (
                <p>
                  <strong className="text-[#13303B]">Role:</strong> {formData.role}
                </p>
              )}
              <p>
                <strong className="text-[#13303B]">Country / Region:</strong>{" "}
                {formData.region}
              </p>
              <p>
                <strong className="text-[#13303B]">Subject:</strong>{" "}
                {formData.subject}
              </p>
              <div className="border-t border-[#DCE4E4] pt-2">
                <strong className="text-[#13303B]">Request details:</strong>
                <p className="mt-1 whitespace-pre-wrap text-[#13303B] bg-[#F6F5EF] p-3 rounded-[6px]">
                  {formData.request}
                </p>
              </div>
              {formData.deadline && (
                <p>
                  <strong className="text-[#13303B]">Requested Deadline:</strong>{" "}
                  {formData.deadline} ({formData.timezone || "No timezone"})
                </p>
              )}
              {formData.publicationUrl && (
                <p>
                  <strong className="text-[#13303B]">Outlet URL:</strong>{" "}
                  {formData.publicationUrl}
                </p>
              )}
            </div>

            <div className="flex items-center justify-end gap-3 pt-3 border-t border-[#DCE4E4]">
              <button
                type="button"
                onClick={() => setIsPreviewOpen(false)}
                className="px-4 py-2 border border-[#CBD7D9] rounded-[5px] text-xs font-semibold text-[#13303B] hover:bg-gray-50 cursor-pointer"
              >
                Back to Edit
              </button>
              <button
                type="button"
                onClick={handleConfirm}
                className="px-5 py-2 bg-[#D9B364] text-[#082632] rounded-[5px] text-xs font-bold hover:bg-[#cda653] cursor-pointer"
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
