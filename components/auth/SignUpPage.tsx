"use client";

import { useState } from "react";
import Image from "next/image";
import { Check } from "lucide-react";

/**
 * Sizing model
 * ------------
 * Every dimension is expressed in "u" units (--u), where 1u = 1px of the
 * 830 x 602 Figma frame. On lg+ screens 1u = viewport height / 602, so the
 * whole page always fits the user's screen with no vertical scroll.
 * The unit never drops below 1.5px, so text stays readable; on short screens
 * the page scrolls a little instead of shrinking. Below lg it is fixed at 1.5px.
 */

const FEATURES = [
  "Accounting + finance in one workspace",
  "Governed workflows, not ad-hoc approvals",
  "Role-aware access from day one",
  "Audit trails & evidence built in",
];

const STEPS = [
  {
    title: "Verify your work email",
    description: "A single-use link, valid for a limited time.",
  },
  {
    title: "We create your workspace",
    description: "One organization, one primary workspace, with you as Owner.",
  },
  {
    title: "Your 30-day trial starts",
    description: "Professional entitlements, applied server-side.",
  },
  {
    title: "Set up or explore sample data",
    description:
      "Configure your real organization, or look around safely first.",
  },
];

const COUNTRIES = [
  "India",
  "United States",
  "United Kingdom",
  "Canada",
  "Australia",
  "United Arab Emirates",
  "Singapore",
  "Germany",
];

const labelCls =
  "mb-[calc(var(--u)*3)] block text-[length:calc(var(--u)*9.5)] font-semibold leading-[calc(var(--u)*12)] text-[#14202E]";

const inputCls =
  "h-[calc(var(--u)*28)] w-full rounded-[calc(var(--u)*5)] border border-[#E7E3D8] bg-[#FBFAF6] px-[calc(var(--u)*8)] text-[length:calc(var(--u)*11)] text-[#14202E] outline-none transition-shadow focus:border-[#CFA855] focus:ring-2 focus:ring-[#CFA855]/30";

const socialBtnCls =
  "flex h-[calc(var(--u)*30)] w-full items-center justify-center gap-[calc(var(--u)*5)] rounded-[calc(var(--u)*5)] border border-[#E7E3D8] bg-white text-[length:calc(var(--u)*11)] font-semibold text-[#14202E] shadow-[0_1px_2px_rgba(20,32,46,0.04)] transition-colors hover:bg-[#FCFBF8] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#CFA855]";

const checkboxCls =
  "peer h-[calc(var(--u)*9)] w-[calc(var(--u)*9)] shrink-0 cursor-pointer appearance-none rounded-[calc(var(--u)*1.5)] border border-[#B9B5A8] bg-white checked:border-[#CFA855] checked:bg-[#CFA855] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#CFA855]/60";

export default function SignUpPage() {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    company: "",
    country: "",
  });
  const [showPassword, setShowPassword] = useState(false);
  const [acceptedTerms, setAcceptedTerms] = useState(false);
  const [wantsUpdates, setWantsUpdates] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <main className="flex min-h-screen w-full flex-col bg-[#F7F5F0] font-sans text-[#14202E] [--u:1.5px] lg:flex-row lg:[--u:max(calc(100dvh/602),1.5px)]">
      {/* Left panel */}
      <section className="flex w-full flex-col px-6 pb-10 pt-[calc(var(--u)*25)] lg:w-[51.2%] lg:px-0 lg:pb-10 lg:pl-[calc(var(--u)*48)]">
        <div className="w-full max-w-[calc(var(--u)*354)]">
          {/* <Image
            src="/logo.png"
            alt="ZoikoSuite"
            width={132}
            height={48}
            priority
            className="h-[calc(var(--u)*24)] w-auto"
          /> */}

          <h1 className="mt-[calc(var(--u)*37)] text-[length:calc(var(--u)*19)] font-bold leading-[calc(var(--u)*22)] tracking-[-0.01em] text-[#14202E]">
            Start your ZoikoSuite workspace.
          </h1>
          <p className="mt-[calc(var(--u)*7)] max-w-[calc(var(--u)*300)] text-[length:calc(var(--u)*9.5)] leading-[calc(var(--u)*14)] text-[#6B7280]">
            Get 30 days of Professional access to explore ZoikoSuite. No credit
            card required.
          </p>

          {/* Social buttons */}
          <div className="mt-[calc(var(--u)*16)] flex flex-col gap-[calc(var(--u)*6)]">
            <button type="button" className={socialBtnCls}>
              <Image
                src="/auth/microsoft.png"
                alt=""
                width={22}
                height={22}
                className="h-[calc(var(--u)*11)] w-[calc(var(--u)*11)]"
              />
              <span>Continue with Microsoft</span>
            </button>
            <button type="button" className={socialBtnCls}>
              <Image
                src="/auth/google.png"
                alt=""
                width={22}
                height={22}
                className="h-[calc(var(--u)*11)] w-[calc(var(--u)*11)]"
              />
              <span>Continue with Google</span>
            </button>
          </div>

          {/* Divider */}
          <div className="relative mt-[calc(var(--u)*13)] flex h-[calc(var(--u)*10)] items-center justify-center">
            <div className="absolute inset-x-0 top-1/2 h-px bg-[#E7E3D8]" />
            <span className="relative bg-[#F7F5F0] px-[calc(var(--u)*6)] text-[length:calc(var(--u)*8.5)] leading-none text-[#8A8F98]">
              or
            </span>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="mt-[calc(var(--u)*13)]">
            <div className="mb-[calc(var(--u)*9)] grid grid-cols-2 gap-[calc(var(--u)*7)]">
              <div>
                <label htmlFor="firstName" className={labelCls}>
                  First name
                </label>
                <input
                  id="firstName"
                  name="firstName"
                  type="text"
                  autoComplete="given-name"
                  value={form.firstName}
                  onChange={handleChange}
                  className={inputCls}
                />
              </div>
              <div>
                <label htmlFor="lastName" className={labelCls}>
                  Last name
                </label>
                <input
                  id="lastName"
                  name="lastName"
                  type="text"
                  autoComplete="family-name"
                  value={form.lastName}
                  onChange={handleChange}
                  className={inputCls}
                />
              </div>
            </div>

            <div className="mb-[calc(var(--u)*9)]">
              <label htmlFor="email" className={labelCls}>
                Work email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                value={form.email}
                onChange={handleChange}
                className={inputCls}
              />
            </div>

            <div className="mb-[calc(var(--u)*9)]">
              <label htmlFor="password" className={labelCls}>
                Password
              </label>
              <div className="relative">
                <input
                  id="password"
                  name="password"
                  type={showPassword ? "text" : "password"}
                  autoComplete="new-password"
                  value={form.password}
                  onChange={handleChange}
                  className={`${inputCls} pr-[calc(var(--u)*36)]`}
                />
                <button
                  type="button"
                  onClick={() => setShowPassword((prev) => !prev)}
                  aria-label={showPassword ? "Hide password" : "Show password"}
                  className="absolute right-[calc(var(--u)*8)] top-1/2 -translate-y-1/2 text-[length:calc(var(--u)*8.5)] font-bold text-[#14202E] focus:outline-none focus-visible:underline"
                >
                  {showPassword ? "Hide" : "Show"}
                </button>
              </div>
            </div>

            <div className="mb-[calc(var(--u)*9)]">
              <label htmlFor="company" className={labelCls}>
                Company / organization
              </label>
              <input
                id="company"
                name="company"
                type="text"
                autoComplete="organization"
                value={form.company}
                onChange={handleChange}
                className={inputCls}
              />
            </div>

            <div>
              <label htmlFor="country" className={labelCls}>
                Country / primary market
              </label>
              <select
                id="country"
                name="country"
                value={form.country}
                onChange={handleChange}
                className={`${inputCls} appearance-none`}
              >
                <option value="">Select...</option>
                {COUNTRIES.map((country) => (
                  <option key={country} value={country}>
                    {country}
                  </option>
                ))}
              </select>
            </div>

            {/* Checkboxes */}
            <div className="mt-[calc(var(--u)*10)] flex flex-col gap-[calc(var(--u)*11)]">
              <label className="flex cursor-pointer items-center gap-[calc(var(--u)*6)] pl-[calc(var(--u)*2)] text-[length:calc(var(--u)*9)] leading-[calc(var(--u)*12)] text-[#6B7280]">
                <span className="relative flex shrink-0">
                  <input
                    type="checkbox"
                    checked={acceptedTerms}
                    onChange={(e) => setAcceptedTerms(e.target.checked)}
                    required
                    className={checkboxCls}
                  />
                  <Check
                    strokeWidth={4}
                    aria-hidden="true"
                    className="pointer-events-none absolute inset-0 hidden h-full w-full p-px text-white peer-checked:block"
                  />
                </span>
                <span>
                  By creating a workspace, you agree to the ZoikoSuite{" "}
                  <a
                    href="/terms"
                    className="font-bold text-[#1E3A5F] hover:underline"
                  >
                    Terms
                  </a>{" "}
                  acknowledge the{" "}
                  <a
                    href="/privacy"
                    className="font-bold text-[#1E3A5F] hover:underline"
                  >
                    Privacy Notice
                  </a>
                </span>
              </label>

              <label className="flex cursor-pointer items-center gap-[calc(var(--u)*6)] pl-[calc(var(--u)*2)] text-[length:calc(var(--u)*9)] leading-[calc(var(--u)*12)] text-[#6B7280]">
                <span className="relative flex shrink-0">
                  <input
                    type="checkbox"
                    checked={wantsUpdates}
                    onChange={(e) => setWantsUpdates(e.target.checked)}
                    className={checkboxCls}
                  />
                  <Check
                    strokeWidth={4}
                    aria-hidden="true"
                    className="pointer-events-none absolute inset-0 hidden h-full w-full p-px text-white peer-checked:block"
                  />
                </span>
                <span>Send me relevant ZoikoSuite updates. (optional)</span>
              </label>
            </div>

            <button
              type="submit"
              className="mt-[calc(var(--u)*10)] h-[calc(var(--u)*30)] w-full rounded-[calc(var(--u)*5)] bg-[#CFA855] text-[length:calc(var(--u)*11)] font-semibold text-white shadow-[0_1px_2px_rgba(20,32,46,0.08)] transition-colors hover:bg-[#C39B47] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#14202E]/40 focus-visible:ring-offset-2 focus-visible:ring-offset-[#F7F5F0]"
            >
              Create workspace
            </button>
          </form>

          <p className="mt-[calc(var(--u)*10)] flex items-center justify-center gap-[calc(var(--u)*3)] text-[length:calc(var(--u)*9.5)] leading-[calc(var(--u)*12)] text-[#6B7280]">
            <span>Already have an account?</span>
            <a
              href="/sign-in"
              className="font-bold text-[#1E3A5F] hover:underline"
            >
              Sign In
            </a>
          </p>
        </div>
      </section>

      {/* Right panel */}
      <aside className="relative hidden flex-1 overflow-hidden lg:block">
        <Image
          src="/auth/signup.png"
          alt=""
          fill
          priority
          sizes="49vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-[#124869CC]" />

        <div className="relative z-10 flex h-full flex-col justify-center pl-[calc(var(--u)*12)] pr-[calc(var(--u)*12)]">
          <p className="text-[length:calc(var(--u)*8)] font-semibold uppercase leading-[calc(var(--u)*10)] tracking-[0.1em] text-[#D9A441]">
            Trusted operating foundation
          </p>

          <h2 className="mt-[calc(var(--u)*21)] text-[length:calc(var(--u)*15.5)] font-bold leading-[calc(var(--u)*20)] tracking-[-0.01em] text-white">
            Everything you need to run finance, workforce, and
            <br />
            operations — under one governed layer.
          </h2>

          <ul className="mt-[calc(var(--u)*11)] flex flex-col gap-[calc(var(--u)*5.3)]">
            {FEATURES.map((feature) => (
              <li
                key={feature}
                className="flex items-center gap-[calc(var(--u)*7)] text-[length:calc(var(--u)*9)] leading-[calc(var(--u)*14)] text-white/75"
              >
                <Check
                  strokeWidth={3}
                  aria-hidden="true"
                  className="h-[calc(var(--u)*8)] w-[calc(var(--u)*8)] shrink-0 text-[#D9A441]"
                />
                <span>{feature}</span>
              </li>
            ))}
          </ul>

          <h3 className="mt-[calc(var(--u)*32)] text-[length:calc(var(--u)*8)] font-bold uppercase leading-[calc(var(--u)*10)] tracking-[0.08em] text-white">
            What happens next
          </h3>

          <ol className="mt-[calc(var(--u)*12)] flex flex-col">
            {STEPS.map((step, index) => {
              const isLast = index === STEPS.length - 1;
              return (
                <li
                  key={step.title}
                  className={`relative flex items-start gap-[calc(var(--u)*9)] ${
                    isLast ? "" : "h-[calc(var(--u)*42)]"
                  }`}
                >
                  {!isLast && (
                    <span
                      aria-hidden="true"
                      className="absolute left-[calc(var(--u)*7.5)] top-[calc(var(--u)*16)] h-[calc(var(--u)*26)] w-px bg-white/35"
                    />
                  )}
                  <span className="relative z-10 flex h-[calc(var(--u)*16)] w-[calc(var(--u)*16)] shrink-0 items-center justify-center rounded-full bg-white text-[length:calc(var(--u)*8.5)] font-bold leading-none text-[#14202E]">
                    {index + 1}
                  </span>
                  <div className="pt-[calc(var(--u)*1)]">
                    <p className="text-[length:calc(var(--u)*9.5)] font-bold leading-[calc(var(--u)*12)] text-white">
                      {step.title}
                    </p>
                    <p className="mt-[calc(var(--u)*3)] text-[length:calc(var(--u)*8.5)] leading-[calc(var(--u)*11)] text-white/70">
                      {step.description}
                    </p>
                  </div>
                </li>
              );
            })}
          </ol>
        </div>
      </aside>
    </main>
  );
}
