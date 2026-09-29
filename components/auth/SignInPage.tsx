"use client";

import { useState } from "react";
import Image from "next/image";
import { Check } from "lucide-react";

const FEATURES = [
  "Accounting + finance in one workspace",
  "Governed workflows, not ad-hoc approvals",
  "Role-aware access from day one",
  "Audit trails & evidence built in",
];

export default function SignInPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <main className="flex w-full bg-[#F7F5F0] font-sans text-[#14202E]">
      {/* Left panel */}
      <section className="flex w-full flex-col px-6 pb-10 pt-10 sm:px-10 lg:w-[52.4%] lg:pb-10 lg:pl-[110px] lg:pr-[41px] lg:pt-[10px]">
        <div className="w-full max-w-[604px]">
          {/* <Image
            src="/logo.png"
            alt="ZoikoSuite"
            width={116}
            height={40}
            priority
            className="h-10 w-auto"
          /> */}

          <div className="mt-[66px]">
            <h1 className="text-[28px] font-bold leading-[34px] tracking-[-0.01em] text-[#14202E]">
              Start your ZoikoSuite workspace.
            </h1>
            <p className="mt-3 max-w-[440px] text-[15px] leading-[21px] text-[#6B7280]">
              Get 30 days of Professional access to explore ZoikoSuite. No
              credit card required.
            </p>

            {/* Social buttons */}
            <div className="mt-7 flex flex-col gap-[10px]">
              <button
                type="button"
                className="flex h-12 w-full items-center justify-center gap-2 rounded-[10px] border border-[#E7E3D8] bg-white text-[16px] font-semibold text-[#14202E] shadow-[0_1px_2px_rgba(20,32,46,0.04)] transition-colors hover:bg-[#FCFBF8] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#CFA855]"
              >
                <Image
                  src="/auth/microsoft.png"
                  alt=""
                  width={18}
                  height={18}
                  className="h-[18px] w-[18px]"
                />
                <span>Continue with Microsoft</span>
              </button>

              <button
                type="button"
                className="flex h-12 w-full items-center justify-center gap-2 rounded-[10px] border border-[#E7E3D8] bg-white text-[16px] font-semibold text-[#14202E] shadow-[0_1px_2px_rgba(20,32,46,0.04)] transition-colors hover:bg-[#FCFBF8] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#CFA855]"
              >
                <Image
                  src="/auth/google.png"
                  alt=""
                  width={18}
                  height={18}
                  className="h-[18px] w-[18px]"
                />
                <span>Continue with Google</span>
              </button>
            </div>

            {/* Divider */}
            <div className="relative mt-[31px] flex items-center justify-center">
              <div className="absolute inset-x-0 top-1/2 h-px bg-[#E7E3D8]" />
              <span className="relative bg-[#F7F5F0] px-3 text-[12px] leading-none text-[#8A8F98]">
                or
              </span>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="mt-[26px]">
              <label
                htmlFor="email"
                className="mb-1.5 block text-[13px] font-semibold leading-4 text-[#14202E]"
              >
                Work email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="h-11 w-full rounded-[10px] border border-[#E7E3D8] bg-[#FBFAF6] px-4 text-[15px] text-[#14202E] outline-none transition-shadow focus:border-[#CFA855] focus:ring-2 focus:ring-[#CFA855]/30"
              />

              <label
                htmlFor="password"
                className="mb-1.5 mt-4 block text-[13px] font-semibold leading-4 text-[#14202E]"
              >
                Password
              </label>
              <div className="relative">
                <input
                  id="password"
                  name="password"
                  type={showPassword ? "text" : "password"}
                  autoComplete="current-password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="h-11 w-full rounded-[10px] border border-[#E7E3D8] bg-[#FBFAF6] pl-4 pr-16 text-[15px] text-[#14202E] outline-none transition-shadow focus:border-[#CFA855] focus:ring-2 focus:ring-[#CFA855]/30"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword((prev) => !prev)}
                  aria-label={showPassword ? "Hide password" : "Show password"}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-[12px] font-bold text-[#14202E] focus:outline-none focus-visible:underline"
                >
                  {showPassword ? "Hide" : "Show"}
                </button>
              </div>

              <button
                type="submit"
                className="mt-5 h-12 w-full rounded-[10px] bg-[#CFA855] text-[16px] font-semibold text-white shadow-[0_1px_2px_rgba(20,32,46,0.08)] transition-colors hover:bg-[#C39B47] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#14202E]/40 focus-visible:ring-offset-2 focus-visible:ring-offset-[#F7F5F0]"
              >
                Sign In
              </button>
            </form>

            <p className="mt-6 flex items-center justify-center gap-2 text-[13px] leading-none text-[#6B7280]">
              <span>Create Account</span>
              <a
                href="/sign-up"
                className="font-bold text-[#1E3A5F] hover:underline"
              >
                Sign up
              </a>
            </p>
          </div>
        </div>
      </section>

      {/* Right panel */}
      <aside className="relative hidden flex-1 overflow-hidden lg:block">
        <Image
          src="/auth/signin.png"
          alt=""
          fill
          priority
          sizes="48vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-[#124869CC]" />

        <div className="relative z-10 flex h-full flex-col justify-center pl-[19px] pr-3 pt-[18px]">
          <p className="text-[11px] font-semibold uppercase leading-none tracking-[0.1em] text-[#D9A441]">
            Trusted operating foundation
          </p>

          <h2 className="mt-9 text-[24px] font-bold leading-[33px] tracking-[-0.01em] text-white">
            Everything you need to run finance, workforce, and operations —
            under one governed layer.
          </h2>

          <ul className="mt-5 flex flex-col gap-3">
            {FEATURES.map((feature) => (
              <li
                key={feature}
                className="flex items-center gap-2 text-[13px] leading-[18px] text-white/70"
              >
                <Check
                  className="h-3 w-3 shrink-0 text-[#D9A441]"
                  strokeWidth={3}
                  aria-hidden="true"
                />
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </div>
      </aside>
    </main>
  );
}
