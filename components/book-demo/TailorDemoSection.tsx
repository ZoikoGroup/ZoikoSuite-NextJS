"use client";

import { useState } from "react";
import Image from "next/image";
import {
  Calendar as CalendarIcon,
  Check,
  CheckCircle2,
  ChevronDown,
  Clock,
  FileText,
  Plus,
  User,
} from "lucide-react";

type Step = 1 | 2 | 3 | 4;

type FormData = {
  firstName: string;
  lastName: string;
  workEmail: string;
  company: string;
  role: string;
  country: string;
  companySize: string;
  phoneCode: string;
  phone: string;
};

type SelectOption = { label: string; value: string };

const STEPS = ["You & business", "Priorities", "Schedule"];

const ROLE_OPTIONS: SelectOption[] = [
  { label: "Executive", value: "Executive" },
  { label: "Finance leader", value: "Finance leader" },
  { label: "Manager", value: "Manager" },
  { label: "Individual contributor", value: "Individual contributor" },
];

const COUNTRY_OPTIONS: SelectOption[] = [
  { label: "United States", value: "United States" },
  { label: "United Kingdom", value: "United Kingdom" },
  { label: "India", value: "India" },
  { label: "Canada", value: "Canada" },
];

const SIZE_OPTIONS: SelectOption[] = [
  { label: "1 - 50 employees", value: "1-50" },
  { label: "51 - 200 employees", value: "51-200" },
  { label: "201 - 1000 employees", value: "201-1000" },
  { label: "1000+ employees", value: "1000+" },
];

const PHONE_CODES: SelectOption[] = [
  { label: "+1", value: "+1" },
  { label: "+44", value: "+44" },
  { label: "+91", value: "+91" },
];

const PRIORITIES = [
  "Accounting & close",
  "Billing / AR",
  "Procurement / AP",
  "Banking / Treasury",
  "Tax / Compliance",
  "Payroll / Workforce",
  "Contracts / Commercial",
  "Reporting / Analytics",
  "Governed AI",
  "Integrations / Migration",
];

const PRIORITY_DETAILS: { label: string; options: SelectOption[] }[] = [
  {
    label: "Legal entities",
    options: [
      { label: "1 - 5", value: "1-5" },
      { label: "6 - 20", value: "6-20" },
      { label: "20+", value: "20+" },
    ],
  },
  {
    label: "Operating countries",
    options: [
      { label: "1 country", value: "1" },
      { label: "2 - 5 countries", value: "2-5" },
      { label: "5+ countries", value: "5+" },
    ],
  },
  {
    label: "Current finance system ( optional )",
    options: [
      { label: "NetSuite", value: "NetSuite" },
      { label: "QuickBooks", value: "QuickBooks" },
      { label: "SAP", value: "SAP" },
      { label: "Other", value: "Other" },
    ],
  },
  {
    label: "Timing",
    options: [
      { label: "Immediate", value: "Immediate" },
      { label: "1 - 3 months", value: "1-3 months" },
      { label: "3+ months", value: "3+ months" },
    ],
  },
];

const TIMEZONES: SelectOption[] = [
  { label: "(GMT-8) Pacific Time - US & Canada", value: "PT" },
  { label: "(GMT-5) Eastern Time - US & Canada", value: "ET" },
  { label: "(GMT+0) London - United Kingdom", value: "GMT" },
  { label: "(GMT+5:30) New Delhi - India", value: "IST" },
];

const TIME_SLOTS = ["09:00 AM", "10:00 AM", "11:00 AM", "02:00 PM", "03:00 PM", "04:00 PM"];

const WEEKDAYS = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

/** Next 10 weekdays starting tomorrow. */
function getUpcomingDates() {
  const dates: Date[] = [];
  const cursor = new Date();
  while (dates.length < 10) {
    cursor.setDate(cursor.getDate() + 1);
    const day = cursor.getDay();
    if (day !== 0 && day !== 6) dates.push(new Date(cursor));
  }
  return dates;
}

const inputClass =
  "w-full h-10 px-3 bg-white rounded-2xl border border-[#16223A]/10 text-sm font-medium text-[#16223A] placeholder:text-[#16223A]/50 focus:outline-none focus:border-[#C8A24A]";

const labelClass = "block mb-1.5 text-xs font-medium text-[#16223A]/50";

function Field({
  label,
  className = "",
  children,
}: {
  label: string;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <label className={`block ${className}`}>
      <span className={labelClass}>{label}</span>
      {children}
    </label>
  );
}

function Select({
  value,
  placeholder,
  options,
  onChange,
}: {
  value: string;
  placeholder?: string;
  options: SelectOption[];
  onChange: (value: string) => void;
}) {
  return (
    <div className="relative">
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className={`${inputClass} pr-9 appearance-none cursor-pointer ${
          value ? "" : "text-[#16223A]/50"
        }`}
      >
        {placeholder && <option value="">{placeholder}</option>}
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      <ChevronDown className="absolute right-3 top-2.5 w-5 h-5 text-[#16223A]/40 pointer-events-none" />
    </div>
  );
}

function Stepper({ currentStep }: { currentStep: Step }) {
  return (
    <div className="grid grid-cols-3 gap-4 sm:gap-7">
      {STEPS.map((step, index) => {
        const isActive = index + 1 <= currentStep;
        return (
          <div key={step} className="flex flex-col gap-2">
            <span
              className={`h-1 rounded-2xl ${isActive ? "bg-[#C8A24A]" : "bg-[#6E7E8E]"}`}
            />
            <span
              className={`text-xs font-medium ${
                isActive ? "text-[#0E2843]" : "text-[#0E2843]/60"
              }`}
            >
              {index + 1}. {step}
            </span>
          </div>
        );
      })}
    </div>
  );
}

function StepActions({
  onBack,
  nextLabel,
  disabled = false,
}: {
  onBack?: () => void;
  nextLabel: string;
  disabled?: boolean;
}) {
  return (
    <div className="flex items-center justify-between gap-3 pt-2">
      {onBack ? (
        <button
          type="button"
          onClick={onBack}
          className="h-11 px-6 rounded-2xl border border-[#16223A]/15 text-base font-medium text-[#16223A] hover:bg-white transition-colors cursor-pointer"
        >
          Back
        </button>
      ) : (
        <span />
      )}
      <button
        type="submit"
        disabled={disabled}
        className="h-11 flex-1 max-w-44 sm:flex-none sm:w-44 rounded-2xl bg-[#C8A24A] shadow-[0_0_4px_rgba(0,0,0,0.25)] text-base font-medium text-white hover:bg-[#B8913F] disabled:opacity-50 disabled:cursor-not-allowed transition-colors cursor-pointer"
      >
        {nextLabel}
      </button>
    </div>
  );
}

export default function TailorDemoSection() {
  const [currentStep, setCurrentStep] = useState<Step>(1);

  const [formData, setFormData] = useState<FormData>({
    firstName: "",
    lastName: "",
    workEmail: "",
    company: "",
    role: "",
    country: "",
    companySize: "",
    phoneCode: "+1",
    phone: "",
  });

  const [selectedPriorities, setSelectedPriorities] = useState<string[]>([]);
  const [priorityDetails, setPriorityDetails] = useState<Record<string, string>>({});
  const [customNote, setCustomNote] = useState("");

  const [dates] = useState(getUpcomingDates);
  const [selectedDate, setSelectedDate] = useState(0);
  const [selectedTime, setSelectedTime] = useState(TIME_SLOTS[0]);
  const [timezone, setTimezone] = useState(TIMEZONES[0].value);
  const [colleagueEmail, setColleagueEmail] = useState("");
  const [colleagues, setColleagues] = useState<string[]>([]);
  const [agreedPrivacy, setAgreedPrivacy] = useState(false);
  const [subscribeUpdates, setSubscribeUpdates] = useState(false);

  const updateField = (field: keyof FormData, value: string) =>
    setFormData((prev) => ({ ...prev, [field]: value }));

  const togglePriority = (priority: string) =>
    setSelectedPriorities((prev) => {
      if (prev.includes(priority)) return prev.filter((item) => item !== priority);
      if (prev.length >= 5) return prev;
      return [...prev, priority];
    });

  const addColleague = () => {
    const email = colleagueEmail.trim();
    if (!email || colleagues.includes(email)) return;
    setColleagues((prev) => [...prev, email]);
    setColleagueEmail("");
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (currentStep < 4) setCurrentStep((prev) => (prev + 1) as Step);
  };

  const handleBack = () => setCurrentStep((prev) => (prev - 1) as Step);

  const timezoneLabel = TIMEZONES.find((tz) => tz.value === timezone)?.label;
  const formatDate = (date: Date) =>
    date.toLocaleDateString("en-US", { weekday: "short", month: "short", day: "numeric" });

  return (
    <section
      id="tailor-demo"
      className="w-full bg-white px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-18 scroll-mt-20"
    >
      <div className="max-w-[1200px] mx-auto flex flex-col lg:flex-row gap-8 lg:gap-10 xl:gap-14">
        <div className="w-full lg:w-[320px] xl:w-[384px] shrink-0 flex flex-col">
          <div className="flex items-center gap-2.5">
            <span className="w-5 h-px bg-[#CDA85B]" />
            <span className="text-xs font-semibold tracking-wide text-[#CDA85B]">
              TAILOR YOUR DEMO
            </span>
          </div>
          <h2 className="mt-5 sm:mt-7 text-[32px] sm:text-5xl lg:text-[40px] xl:text-5xl font-bold text-[#0E2843] leading-tight sm:leading-[50.6px]">
            Tailor your
            <br />
            Zoikosuite demo
          </h2>
          <p className="mt-4 text-base text-[#0E2843]/60 leading-6">
            Tells us only what we need to make the session useful.
          </p>
          <Image
            src="/book-demo/tailor-demo.webp"
            alt="Dashboard with calendar, reports and team icons"
            width={395}
            height={409}
            className="hidden lg:block mt-8 xl:mt-auto w-[280px] xl:w-[340px] h-auto"
          />
        </div>

        <div className="w-full lg:flex-1 flex flex-col items-center gap-4">
          <form
            onSubmit={handleSubmit}
            className="w-full p-4 sm:p-5 bg-[#F6F5F0] rounded-2xl flex flex-col gap-6"
          >
            {currentStep < 4 && <Stepper currentStep={currentStep} />}

            {currentStep === 1 && (
              <>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 xl:gap-x-14 gap-y-5">
                  <Field label="First name">
                    <input
                      required
                      autoComplete="given-name"
                      value={formData.firstName}
                      onChange={(e) => updateField("firstName", e.target.value)}
                      placeholder="Jimmy"
                      className={inputClass}
                    />
                  </Field>
                  <Field label="Last name">
                    <input
                      required
                      autoComplete="family-name"
                      value={formData.lastName}
                      onChange={(e) => updateField("lastName", e.target.value)}
                      placeholder="Jostar"
                      className={inputClass}
                    />
                  </Field>
                  <Field label="Work email" className="sm:col-span-2">
                    <input
                      required
                      type="email"
                      autoComplete="email"
                      value={formData.workEmail}
                      onChange={(e) => updateField("workEmail", e.target.value)}
                      placeholder="jimmy@company.com"
                      className={inputClass}
                    />
                  </Field>
                  <Field label="Company or organization">
                    <input
                      required
                      autoComplete="organization"
                      value={formData.company}
                      onChange={(e) => updateField("company", e.target.value)}
                      placeholder="Xyz"
                      className={inputClass}
                    />
                  </Field>
                  <Field label="Your role">
                    <Select
                      value={formData.role}
                      placeholder="Select your role"
                      options={ROLE_OPTIONS}
                      onChange={(value) => updateField("role", value)}
                    />
                  </Field>
                  <Field label="Country or primary operating market">
                    <Select
                      value={formData.country}
                      placeholder="Select a country"
                      options={COUNTRY_OPTIONS}
                      onChange={(value) => updateField("country", value)}
                    />
                  </Field>
                  <Field label="Company size">
                    <Select
                      value={formData.companySize}
                      placeholder="Select company size"
                      options={SIZE_OPTIONS}
                      onChange={(value) => updateField("companySize", value)}
                    />
                  </Field>
                  <div>
                    <span className={labelClass}>Phone ( optional )</span>
                    <div className="flex gap-4">
                      <div className="w-20 shrink-0">
                        <Select
                          value={formData.phoneCode}
                          options={PHONE_CODES}
                          onChange={(value) => updateField("phoneCode", value)}
                        />
                      </div>
                      <input
                        type="tel"
                        autoComplete="tel-national"
                        aria-label="Phone number"
                        value={formData.phone}
                        onChange={(e) => updateField("phone", e.target.value)}
                        placeholder="Phone number"
                        className={inputClass}
                      />
                    </div>
                  </div>
                </div>
                <StepActions nextLabel="Continue" />
              </>
            )}

            {currentStep === 2 && (
              <>
                <div className="flex flex-col gap-3">
                  <span className="text-xs font-medium text-[#16223A]">
                    Demo priorities{" "}
                    <span className="text-[#16223A]/50">— choose up to 5</span>
                  </span>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {PRIORITIES.map((priority) => {
                      const selected = selectedPriorities.includes(priority);
                      return (
                        <button
                          key={priority}
                          type="button"
                          aria-pressed={selected}
                          onClick={() => togglePriority(priority)}
                          className={`flex items-center gap-3 px-3.5 py-2.5 rounded-2xl border bg-white text-left cursor-pointer transition-colors ${
                            selected ? "border-[#C8A24A]" : "border-[#16223A]/10"
                          }`}
                        >
                          <span
                            className={`w-4 h-4 shrink-0 rounded flex items-center justify-center border ${
                              selected
                                ? "bg-[#0E2843] border-[#0E2843]"
                                : "border-[#16223A]/20"
                            }`}
                          >
                            {selected && <Check className="w-3 h-3 text-white" />}
                          </span>
                          <span className="text-sm font-medium text-[#16223A]">
                            {priority}
                          </span>
                        </button>
                      );
                    })}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 xl:gap-x-14 gap-y-5">
                  {PRIORITY_DETAILS.map((detail) => (
                    <Field key={detail.label} label={detail.label}>
                      <Select
                        value={priorityDetails[detail.label] ?? ""}
                        placeholder="Select"
                        options={detail.options}
                        onChange={(value) =>
                          setPriorityDetails((prev) => ({ ...prev, [detail.label]: value }))
                        }
                      />
                    </Field>
                  ))}
                </div>

                <Field label="What would make this demo useful for you? ( optional )">
                  <textarea
                    rows={3}
                    value={customNote}
                    onChange={(e) => setCustomNote(e.target.value)}
                    placeholder="For example: We close in 12 days across four entities and want to see how approvals and reconciliation evidence work together."
                    className={`${inputClass} h-auto py-2.5 resize-none`}
                  />
                </Field>

                <StepActions
                  onBack={handleBack}
                  nextLabel="Continue"
                  disabled={selectedPriorities.length === 0}
                />
              </>
            )}

            {currentStep === 3 && (
              <>
                <Field label="Your timezone">
                  <Select value={timezone} options={TIMEZONES} onChange={setTimezone} />
                </Field>

                <div className="flex flex-col gap-3">
                  <span className="text-xs font-medium text-[#16223A]/50">Pick a date</span>
                  <div className="grid grid-cols-3 sm:grid-cols-5 gap-2.5">
                    {dates.map((date, index) => (
                      <button
                        key={date.toISOString()}
                        type="button"
                        aria-pressed={selectedDate === index}
                        onClick={() => setSelectedDate(index)}
                        className={`py-2 rounded-2xl border text-center cursor-pointer transition-colors ${
                          selectedDate === index
                            ? "bg-[#C8A24A] border-[#C8A24A] text-white"
                            : "bg-white border-[#16223A]/10 text-[#16223A]"
                        }`}
                      >
                        <span className="block text-[11px] font-medium opacity-70">
                          {WEEKDAYS[date.getDay()]}
                        </span>
                        <span className="block text-sm font-semibold">
                          {date.toLocaleDateString("en-US", { month: "short", day: "numeric" })}
                        </span>
                      </button>
                    ))}
                  </div>
                </div>

                <div className="flex flex-col gap-3">
                  <span className="text-xs font-medium text-[#16223A]/50">
                    Available times for {formatDate(dates[selectedDate])}
                  </span>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
                    {TIME_SLOTS.map((time) => (
                      <button
                        key={time}
                        type="button"
                        aria-pressed={selectedTime === time}
                        onClick={() => setSelectedTime(time)}
                        className={`flex flex-wrap items-center justify-between gap-x-2 px-3.5 py-2.5 rounded-2xl border cursor-pointer transition-colors ${
                          selectedTime === time
                            ? "border-[#C8A24A] bg-white"
                            : "border-[#16223A]/10 bg-white hover:border-[#16223A]/25"
                        }`}
                      >
                        <span className="text-sm font-semibold text-[#16223A]">{time}</span>
                        <span className="text-[11px] text-[#16223A]/50">30 min</span>
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <span className={labelClass}>Invite colleagues ( optional )</span>
                  <div className="flex gap-2">
                    <input
                      type="email"
                      aria-label="Colleague email"
                      value={colleagueEmail}
                      onChange={(e) => setColleagueEmail(e.target.value)}
                      onKeyDown={(e) => {
                        if (e.key === "Enter") {
                          e.preventDefault();
                          addColleague();
                        }
                      }}
                      placeholder="colleague@company.com"
                      className={inputClass}
                    />
                    <button
                      type="button"
                      onClick={addColleague}
                      className="shrink-0 h-10 px-4 rounded-2xl border border-[#16223A]/15 bg-white text-sm font-medium text-[#16223A] flex items-center gap-1 cursor-pointer"
                    >
                      <Plus className="w-4 h-4" />
                      Add
                    </button>
                  </div>
                  {colleagues.length > 0 && (
                    <div className="flex flex-wrap gap-1.5 mt-2">
                      {colleagues.map((email) => (
                        <span
                          key={email}
                          className="px-2 py-0.5 rounded-md bg-white text-xs text-[#16223A]"
                        >
                          {email}
                        </span>
                      ))}
                    </div>
                  )}
                </div>

                <div className="flex flex-col gap-2">
                  <label className="flex items-start gap-2.5 cursor-pointer">
                    <input
                      type="checkbox"
                      required
                      checked={agreedPrivacy}
                      onChange={(e) => setAgreedPrivacy(e.target.checked)}
                      className="mt-0.5 accent-[#C8A24A]"
                    />
                    <span className="text-xs text-[#16223A]/70 leading-5">
                      I have read the Privacy Notice and agree that ZoikoSuite may
                      process my details to arrange and tailor this demo.{" "}
                      <span className="text-[#B8913F]">( required )</span>
                    </span>
                  </label>
                  <label className="flex items-start gap-2.5 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={subscribeUpdates}
                      onChange={(e) => setSubscribeUpdates(e.target.checked)}
                      className="mt-0.5 accent-[#C8A24A]"
                    />
                    <span className="text-xs text-[#16223A]/70 leading-5">
                      Send me relevant ZoikoSuite updates.{" "}
                      <span className="text-[#16223A]/50">( optional )</span>
                    </span>
                  </label>
                </div>

                <StepActions onBack={handleBack} nextLabel="Book demo" />
              </>
            )}

            {currentStep === 4 && (
              <div className="flex flex-col gap-6">
                <div className="flex flex-col items-center text-center gap-2">
                  <CheckCircle2 className="w-12 h-12 text-[#C8A24A]" />
                  <h3 className="text-xl font-bold text-[#0E2843]">
                    Your ZoikoSuite demo is booked
                  </h3>
                  <p className="text-sm text-[#16223A]/60">
                    A confirmation is on its way to {formData.workEmail}.
                  </p>
                </div>

                <div className="bg-white rounded-2xl border border-[#16223A]/10 divide-y divide-[#16223A]/10">
                  {[
                    {
                      icon: CalendarIcon,
                      label: "When",
                      value: `${formatDate(dates[selectedDate])} at ${selectedTime} ${timezoneLabel}`,
                    },
                    { icon: Clock, label: "Length", value: "30 min · Video meeting" },
                    { icon: User, label: "Host", value: "ZoikoSuite specialist" },
                    { icon: FileText, label: "Agenda", value: selectedPriorities.join(" · ") },
                  ].map(({ icon: Icon, label, value }) => (
                    <div key={label} className="flex items-start gap-3 p-3.5">
                      <Icon className="w-4 h-4 mt-0.5 text-[#16223A]/60" />
                      <div>
                        <div className="text-[11px] text-[#16223A]/50">{label}</div>
                        <div className="text-sm font-semibold text-[#16223A]">{value}</div>
                      </div>
                    </div>
                  ))}
                </div>

                <button
                  type="button"
                  onClick={() => setCurrentStep(1)}
                  className="self-center h-11 px-6 rounded-2xl border border-[#16223A]/15 text-sm font-medium text-[#16223A] hover:bg-white transition-colors cursor-pointer"
                >
                  Book another demo
                </button>
              </div>
            )}
          </form>

          <p className="text-center text-xs font-medium text-[#16223A]/60">
            Booking a demo never creates an account, starts a trial or asks for
            payment details.
          </p>
        </div>
      </div>
    </section>
  );
}
