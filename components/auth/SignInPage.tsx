// "use client";

// import { useState } from "react";
// import Image from "next/image";
// import { Check } from "lucide-react";

// const FEATURES = [
//   "Accounting + finance in one workspace",
//   "Governed workflows, not ad-hoc approvals",
//   "Role-aware access from day one",
//   "Audit trails & evidence built in",
// ];

// export default function SignInPage() {
//   const [showPassword, setShowPassword] = useState(false);
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");

//   const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
//     e.preventDefault();
//   };

//   return (
//     <main className="flex w-full bg-[#F7F5F0] font-sans text-[#14202E]">
//       {/* Left panel */}
//       <section className="flex w-full flex-col px-6 pb-10 pt-10 sm:px-10 lg:w-[52.4%] lg:pb-10 lg:pl-[110px] lg:pr-[41px] lg:pt-[10px]">
//         <div className="w-full max-w-[604px]">
//           {/* <Image
//             src="/logo.png"
//             alt="ZoikoSuite"
//             width={116}
//             height={40}
//             priority
//             className="h-10 w-auto"
//           /> */}

//           <div className="mt-[66px]">
//             <h1 className="text-[28px] font-bold leading-[34px] tracking-[-0.01em] text-[#14202E]">
//               Start your ZoikoSuite workspace.
//             </h1>
//             <p className="mt-3 max-w-[440px] text-[15px] leading-[21px] text-[#6B7280]">
//               Get 30 days of Professional access to explore ZoikoSuite. No
//               credit card required.
//             </p>

//             {/* Social buttons */}
//             <div className="mt-7 flex flex-col gap-[10px]">
//               <button
//                 type="button"
//                 className="flex h-12 w-full items-center justify-center gap-2 rounded-[10px] border border-[#E7E3D8] bg-white text-[16px] font-semibold text-[#14202E] shadow-[0_1px_2px_rgba(20,32,46,0.04)] transition-colors hover:bg-[#FCFBF8] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#CFA855]"
//               >
//                 <Image
//                   src="/auth/microsoft.png"
//                   alt=""
//                   width={18}
//                   height={18}
//                   className="h-[18px] w-[18px]"
//                 />
//                 <span>Continue with Microsoft</span>
//               </button>

//               <button
//                 type="button"
//                 className="flex h-12 w-full items-center justify-center gap-2 rounded-[10px] border border-[#E7E3D8] bg-white text-[16px] font-semibold text-[#14202E] shadow-[0_1px_2px_rgba(20,32,46,0.04)] transition-colors hover:bg-[#FCFBF8] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#CFA855]"
//               >
//                 <Image
//                   src="/auth/google.png"
//                   alt=""
//                   width={18}
//                   height={18}
//                   className="h-[18px] w-[18px]"
//                 />
//                 <span>Continue with Google</span>
//               </button>
//             </div>

//             {/* Divider */}
//             <div className="relative mt-[31px] flex items-center justify-center">
//               <div className="absolute inset-x-0 top-1/2 h-px bg-[#E7E3D8]" />
//               <span className="relative bg-[#F7F5F0] px-3 text-[12px] leading-none text-[#8A8F98]">
//                 or
//               </span>
//             </div>

//             {/* Form */}
//             <form onSubmit={handleSubmit} className="mt-[26px]">
//               <label
//                 htmlFor="email"
//                 className="mb-1.5 block text-[13px] font-semibold leading-4 text-[#14202E]"
//               >
//                 Work email
//               </label>
//               <input
//                 id="email"
//                 name="email"
//                 type="email"
//                 autoComplete="email"
//                 value={email}
//                 onChange={(e) => setEmail(e.target.value)}
//                 className="h-11 w-full rounded-[10px] border border-[#E7E3D8] bg-[#FBFAF6] px-4 text-[15px] text-[#14202E] outline-none transition-shadow focus:border-[#CFA855] focus:ring-2 focus:ring-[#CFA855]/30"
//               />

//               <label
//                 htmlFor="password"
//                 className="mb-1.5 mt-4 block text-[13px] font-semibold leading-4 text-[#14202E]"
//               >
//                 Password
//               </label>
//               <div className="relative">
//                 <input
//                   id="password"
//                   name="password"
//                   type={showPassword ? "text" : "password"}
//                   autoComplete="current-password"
//                   value={password}
//                   onChange={(e) => setPassword(e.target.value)}
//                   className="h-11 w-full rounded-[10px] border border-[#E7E3D8] bg-[#FBFAF6] pl-4 pr-16 text-[15px] text-[#14202E] outline-none transition-shadow focus:border-[#CFA855] focus:ring-2 focus:ring-[#CFA855]/30"
//                 />
//                 <button
//                   type="button"
//                   onClick={() => setShowPassword((prev) => !prev)}
//                   aria-label={showPassword ? "Hide password" : "Show password"}
//                   className="absolute right-4 top-1/2 -translate-y-1/2 text-[12px] font-bold text-[#14202E] focus:outline-none focus-visible:underline"
//                 >
//                   {showPassword ? "Hide" : "Show"}
//                 </button>
//               </div>

//               <button
//                 type="submit"
//                 className="mt-5 h-12 w-full rounded-[10px] bg-[#CFA855] text-[16px] font-semibold text-white shadow-[0_1px_2px_rgba(20,32,46,0.08)] transition-colors hover:bg-[#C39B47] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#14202E]/40 focus-visible:ring-offset-2 focus-visible:ring-offset-[#F7F5F0]"
//               >
//                 Sign In
//               </button>
//             </form>

//             <p className="mt-6 flex items-center justify-center gap-2 text-[13px] leading-none text-[#6B7280]">
//               <span>Create Account</span>
//               <a
//                 href="/sign-up"
//                 className="font-bold text-[#1E3A5F] hover:underline"
//               >
//                 Sign up
//               </a>
//             </p>
//           </div>
//         </div>
//       </section>

//       {/* Right panel */}
//       <aside className="relative hidden flex-1 overflow-hidden lg:block">
//         <Image
//           src="/auth/signin.png"
//           alt=""
//           fill
//           priority
//           sizes="48vw"
//           className="object-cover"
//         />
//         <div className="absolute inset-0 bg-[#124869CC]" />

//         <div className="relative z-10 flex h-full flex-col justify-center pl-[19px] pr-3 pt-[18px]">
//           <p className="text-[11px] font-semibold uppercase leading-none tracking-[0.1em] text-[#D9A441]">
//             Trusted operating foundation
//           </p>

//           <h2 className="mt-9 text-[24px] font-bold leading-[33px] tracking-[-0.01em] text-white">
//             Everything you need to run finance, workforce, and operations —
//             under one governed layer.
//           </h2>

//           <ul className="mt-5 flex flex-col gap-3">
//             {FEATURES.map((feature) => (
//               <li
//                 key={feature}
//                 className="flex items-center gap-2 text-[13px] leading-[18px] text-white/70"
//               >
//                 <Check
//                   className="h-3 w-3 shrink-0 text-[#D9A441]"
//                   strokeWidth={3}
//                   aria-hidden="true"
//                 />
//                 <span>{feature}</span>
//               </li>
//             ))}
//           </ul>
//         </div>
//       </aside>
//     </main>
//   );
// }

"use client";

/**
 * Sign-in page (place at app/sign-in/page.tsx)
 *
 * Images expected in /public/auth/:
 *   /auth/login.png      left-side background
 *   /auth/microsoft.png  Microsoft button logo
 *   /auth/google.png     Google button logo
 */

import React, { useEffect, useId, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowRight,
  Building2,
  ChevronDown,
  CircleAlert,
  KeyRound,
  LayoutGrid,
  Lock,
  Mail,
  MessageSquare,
  ShieldCheck,
  Smartphone,
  X,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

/* ------------------------------------------------------------------ */
/*  Editable content                                                   */
/* ------------------------------------------------------------------ */

const userCategories = [
  "Accountant",
  "Business owner",
  "Agent",
  "Bureau",
  "Authorized adviser",
  "Administrator",
];

const highlights: { icon: LucideIcon; title: string; desc: string }[] = [
  {
    icon: ShieldCheck,
    title: "Secure by design",
    desc: "Enterprise-grade identity and access controls.",
  },
  {
    icon: Building2,
    title: "Built for complex organizations",
    desc: "Businesses, accounting practices, bureaus and authorized advisers.",
  },
  {
    icon: LayoutGrid,
    title: "One identity. Multiple workspaces.",
    desc: "Access the organizations and clients you are authorized to manage.",
  },
];

/** Edit the `href` of any help option here. */
const helpOptions: {
  icon: LucideIcon;
  title: string;
  desc: string;
  href: string;
}[] = [
  {
    icon: Lock,
    title: "I forgot my password",
    desc: "We'll send reset instructions if the address is eligible.",
    href: "/forgot-password",
  },
  {
    icon: Smartphone,
    title: "I can't access my verification method",
    desc: "Use a recovery option or ask your administrator.",
    href: "/account-recovery",
  },
  {
    icon: Building2,
    title: "Enterprise SSO isn't working",
    desc: "Temporary provider issues and administrator contacts.",
    href: "/sso-help",
  },
  {
    icon: CircleAlert,
    title: "My account is locked, or my invitation isn't working",
    desc: "We'll verify it's you through a controlled path.",
    href: "/account-locked",
  },
  {
    icon: Mail,
    title: "I don't know which email to use",
    desc: "Your administrator can confirm the address on your account.",
    href: "/find-my-email",
  },
  {
    icon: MessageSquare,
    title: "Contact support",
    desc: "Talk to the ZoikoSuite support team.",
    href: "/support",
  },
];

/* ------------------------------------------------------------------ */
/*  Help modal                                                         */
/* ------------------------------------------------------------------ */

function HelpModal({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) {
  const titleId = useId();
  const closeRef = useRef<HTMLButtonElement>(null);

  // Escape to close + lock body scroll while open
  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    const original = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    closeRef.current?.focus();
    return () => {
      document.body.style.overflow = original;
      window.removeEventListener("keydown", onKey);
    };
  }, [isOpen, onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          key="help-modal"
          className="fixed inset-0 z-[70] flex items-center justify-center p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.18 }}
          role="dialog"
          aria-modal="true"
          aria-labelledby={titleId}
        >
          <div
            className="absolute inset-0 bg-[#0F2B48]/50 backdrop-blur-[2px]"
            onClick={onClose}
            aria-hidden="true"
          />

          <motion.div
            initial={{ opacity: 0, y: 12, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 12, scale: 0.98 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="relative w-full max-w-[680px] max-h-[96dvh] overflow-y-auto overscroll-contain rounded-2xl bg-white p-5 sm:p-6 shadow-2xl"
          >
            <div className="flex items-start justify-between gap-4">
              <div>
                <h2
                  id={titleId}
                  className="text-[22px] font-semibold leading-7 text-[#0F2B48] font-['Inter']"
                >
                  Need help signing in?
                </h2>
                <p className="mt-2 text-[13px] leading-5 text-[#6B7A8D] font-['Inter']">
                  Choose what&apos;s happening and we&apos;ll take you to the
                  right place.
                </p>
              </div>
              <button
                ref={closeRef}
                type="button"
                onClick={onClose}
                aria-label="Close"
                className="shrink-0 w-10 h-10 flex items-center justify-center rounded-lg border border-[#E3EAF3] text-[#0F2B48] hover:bg-[#F4F7FB] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#2F5FA8]"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <ul className="mt-4 grid gap-2.5 sm:grid-cols-2">
              {helpOptions.map(({ icon: Icon, title, desc, href }) => (
                <li key={title} className="flex">
                  <Link
                    href={href}
                    onClick={onClose}
                    className="group flex w-full items-start gap-3 rounded-xl border border-[#E3EAF3] bg-white px-3.5 py-3 hover:border-[#C9A227]/60 hover:bg-[#FBFCFE] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#2F5FA8]"
                  >
                    <span className="shrink-0 w-9 h-9 rounded-lg bg-[#E8EEF7] flex items-center justify-center text-[#2F5FA8] group-hover:bg-[#C9A227] group-hover:text-white transition-colors">
                      <Icon className="w-4 h-4" strokeWidth={1.75} />
                    </span>
                    <span className="flex flex-col gap-0.5">
                      <span className="text-sm font-semibold leading-5 text-[#0F2B48] font-['Inter']">
                        {title}
                      </span>
                      <span className="text-xs leading-5 text-[#6B7A8D] font-['Inter']">
                        {desc}
                      </span>
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

/* ------------------------------------------------------------------ */
/*  Small building blocks                                              */
/* ------------------------------------------------------------------ */

function AltButton({
  children,
  onClick,
}: {
  children: React.ReactNode;
  onClick?: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="h-11 min-w-0 whitespace-nowrap rounded-lg border border-[#E3EAF3] bg-white px-2 flex items-center justify-center gap-2 text-[12.5px] font-medium text-[#0F2B48] font-['Inter'] hover:bg-[#F4F7FB] hover:border-[#CBD6E4] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#2F5FA8]"
    >
      {children}
    </button>
  );
}

/* ------------------------------------------------------------------ */
/*  Page                                                               */
/* ------------------------------------------------------------------ */

export default function SignInPage() {
  const [category, setCategory] = useState("");
  const [email, setEmail] = useState("");
  const [errors, setErrors] = useState<{ category?: string; email?: string }>(
    {},
  );
  const [submitting, setSubmitting] = useState(false);
  const [helpOpen, setHelpOpen] = useState(false);

  const categoryId = useId();
  const emailId = useId();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const next: typeof errors = {};
    if (!category) next.category = "Select how you're signing in.";
    if (!email.trim()) next.email = "Enter your work email.";
    else if (!/^\S+@\S+\.\S+$/.test(email.trim()))
      next.email = "Enter a valid email address.";
    setErrors(next);
    if (Object.keys(next).length) return;

    setSubmitting(true);
    try {
      // TODO: call your auth endpoint here, e.g.
      // await fetch("/api/auth/identify", { method: "POST", body: JSON.stringify({ category, email }) })
      console.log({ category, email });
    } finally {
      setSubmitting(false);
    }
  };

  const startProvider = (provider: "microsoft" | "google" | "passkey" | "sso") => {
    // TODO: hook up your providers
    console.log("start sign-in with", provider);
  };

  return (
    <main className="min-h-dvh lg:h-dvh lg:overflow-hidden grid lg:grid-cols-[minmax(0,45fr)_minmax(0,55fr)] bg-white font-['Inter']">
      {/* ============ LEFT: brand panel ============ */}
      <section className="relative hidden lg:flex flex-col justify-center overflow-hidden bg-[#0F2B48] px-12 xl:px-16 py-16">
        <Image
          src="/auth/login.png"
          alt=""
          fill
          priority
          sizes="50vw"
          className="object-cover opacity-50"
        />
        {/* Navy wash keeps the copy readable over the photo */}
        <div
          className="absolute inset-0 bg-gradient-to-b from-[#0F2B48]/80 via-[#0F2B48]/70 to-[#0F2B48]/90"
          aria-hidden="true"
        />

        <div className="relative max-w-[440px]">
          <p className="text-[10px] font-semibold uppercase tracking-[0.12em] text-[#D9A03F]">
            One platform. Every stakeholder.
          </p>

          <h1 className="mt-5 text-[34px] font-semibold leading-[42px] text-white">
            Sign in to ZoikoSuite
          </h1>

          <p className="mt-3 text-sm leading-6 text-[#C7D3E1]">
            Accounting, finance, billing, reporting and business controls —
            built for accountants, businesses, agents, bureaus and more.
          </p>

          <ul className="mt-8 flex flex-col gap-5">
            {highlights.map(({ icon: Icon, title, desc }) => (
              <li key={title} className="flex items-start gap-3">
                <span className="shrink-0 w-8 h-8 rounded-lg bg-white/10 border border-white/15 flex items-center justify-center text-[#E4B95F]">
                  <Icon className="w-4 h-4" strokeWidth={1.75} />
                </span>
                <span className="flex flex-col gap-0.5">
                  <span className="text-sm font-semibold leading-5 text-white">
                    {title}
                  </span>
                  <span className="text-xs leading-5 text-[#B8C5D6]">
                    {desc}
                  </span>
                </span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ============ RIGHT: form ============ */}
      <section className="flex items-center justify-center bg-white px-4 py-6 sm:px-8 lg:overflow-hidden">
        <div className="w-full max-w-[540px]">
          {/* Logo on small screens, where the brand panel is hidden */}
          <Link href="/" className="lg:hidden mb-6 flex">
            <Image
              src="/logo.png"
              alt="Zoiko Suite Logo"
              width={140}
              height={40}
              className="h-auto w-[130px] object-contain object-left"
              priority
            />
          </Link>

          <div className="rounded-2xl border border-[#E3EAF3] bg-white p-6 sm:p-7 shadow-[0_8px_24px_rgba(18,54,94,0.06)]">
            <h2 className="text-[22px] font-semibold leading-7 text-[#0F2B48]">
              Welcome back
            </h2>
            <p className="mt-2 text-[13px] leading-5 text-[#6B7A8D]">
              Sign in securely to ZoikoSuite.
            </p>

            <form onSubmit={handleSubmit} noValidate className="mt-4">
              {/* User category */}
              <label
                htmlFor={categoryId}
                className="block text-xs font-medium text-[#0F2B48]"
              >
                I am signing in as <span className="text-[#C0392B]">*</span>
              </label>
              <div className="relative mt-2">
                <select
                  id={categoryId}
                  value={category}
                  onChange={(e) => {
                    setCategory(e.target.value);
                    setErrors((p) => ({ ...p, category: undefined }));
                  }}
                  aria-invalid={!!errors.category}
                  aria-describedby={`${categoryId}-hint`}
                  className={`h-11 w-full appearance-none rounded-lg border bg-white pl-4 pr-10 text-[13px] focus:outline-none focus:border-[#2F5FA8] focus:ring-2 focus:ring-[#2F5FA8]/20 transition-colors ${
                    errors.category ? "border-[#C0392B]" : "border-[#DCE4EE]"
                  } ${category ? "text-[#0F2B48]" : "text-[#9AA6B5]"}`}
                >
                  <option value="" disabled>
                    Select your user category
                  </option>
                  {userCategories.map((c) => (
                    <option key={c} value={c} className="text-[#0F2B48]">
                      {c}
                    </option>
                  ))}
                </select>
                <ChevronDown className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-[#9AA6B5]" />
              </div>
              {errors.category ? (
                <p className="mt-1.5 text-[11px] text-[#C0392B]" role="alert">
                  {errors.category}
                </p>
              ) : (
                <p
                  id={`${categoryId}-hint`}
                  className="mt-1.5 text-[11px] leading-4 text-[#6B7A8D]"
                >
                  This sets how we route you. It does not grant any access on
                  its own.
                </p>
              )}

              {/* Work email */}
              <label
                htmlFor={emailId}
                className="mt-3.5 block text-xs font-medium text-[#0F2B48]"
              >
                Work email <span className="text-[#C0392B]">*</span>
              </label>
              <input
                id={emailId}
                type="email"
                inputMode="email"
                autoComplete="username"
                placeholder="name@company.com"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  setErrors((p) => ({ ...p, email: undefined }));
                }}
                aria-invalid={!!errors.email}
                className={`mt-2 h-11 w-full rounded-lg border bg-white px-4 text-[13px] text-[#0F2B48] placeholder:text-[#9AA6B5] focus:outline-none focus:border-[#2F5FA8] focus:ring-2 focus:ring-[#2F5FA8]/20 transition-colors ${
                  errors.email ? "border-[#C0392B]" : "border-[#DCE4EE]"
                }`}
              />
              {errors.email && (
                <p className="mt-1.5 text-[11px] text-[#C0392B]" role="alert">
                  {errors.email}
                </p>
              )}

              <button
                type="submit"
                disabled={submitting}
                className="mt-4 h-11 w-full rounded-lg bg-[#C9A227] flex items-center justify-center gap-2 text-sm font-semibold text-white hover:bg-[#B8921F] disabled:opacity-60 disabled:cursor-not-allowed transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#C9A227]"
              >
                {submitting ? "Continuing…" : "Continue"}
                <ArrowRight className="w-4 h-4" strokeWidth={2.25} />
              </button>
            </form>

            {/* Divider */}
            <div className="my-4 flex items-center gap-3" aria-hidden="true">
              <span className="h-px flex-1 bg-[#E3EAF3]" />
              <span className="text-[11px] text-[#9AA6B5]">or continue with</span>
              <span className="h-px flex-1 bg-[#E3EAF3]" />
            </div>

            {/* Alternative sign-in methods */}
            <div className="grid grid-cols-2 gap-3">
              <AltButton onClick={() => startProvider("microsoft")}>
                <Image
                  src="/auth/microsoft.png"
                  alt=""
                  width={16}
                  height={16}
                  className="w-4 h-4 shrink-0 object-contain"
                />
                Continue with Microsoft
              </AltButton>
              <AltButton onClick={() => startProvider("google")}>
                <Image
                  src="/auth/google.png"
                  alt=""
                  width={16}
                  height={16}
                  className="w-4 h-4 shrink-0 object-contain"
                />
                Continue with Google
              </AltButton>
              <AltButton onClick={() => startProvider("passkey")}>
                <KeyRound className="w-4 h-4 shrink-0 text-[#0F2B48]" strokeWidth={1.75} />
                Continue with a passkey
              </AltButton>
              <AltButton onClick={() => startProvider("sso")}>
                Continue with Enterprise SSO
              </AltButton>
            </div>

            {/* Footer links */}
            <div className="mt-4 pt-4 border-t border-[#E3EAF3] flex flex-wrap items-center justify-between gap-x-4 gap-y-2 text-xs">
              <button
                type="button"
                onClick={() => setHelpOpen(true)}
                className="font-semibold text-[#2F5FA8] hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-[#2F5FA8] rounded"
              >
                Need help signing in?
              </button>
              <p className="text-[#6B7A8D]">
                New to ZoikoSuite?{" "}
                <Link
                  href="/sign-up"
                  className="font-semibold text-[#2F5FA8] hover:underline"
                >
                  Create account →
                </Link>
              </p>
            </div>
          </div>
        </div>
      </section>

      <HelpModal isOpen={helpOpen} onClose={() => setHelpOpen(false)} />
    </main>
  );
}
