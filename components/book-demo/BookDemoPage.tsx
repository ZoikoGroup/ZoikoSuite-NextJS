"use client";

import React, { useState } from "react";
import Image from "next/image";
import {
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  Check,
  Calendar as CalendarIcon,
  Clock,
  User,
  FileText,
  Plus,
} from "lucide-react";

/* -------------------------------------------------------------------------- */
/* Types                                                                      */
/* -------------------------------------------------------------------------- */

type Step = 1 | 2 | 3 | 4;

type FormData = {
  firstName: string;
  lastName: string;
  workEmail: string;
  company: string;
  role: string;
  country: string;
  companySize: string;
  phone: string;
};

type SelectOption = {
  label: string;
  value: string;
};

type FieldConfig = {
  name: keyof FormData;
  label: string;
  type?: string;
  placeholder?: string;
  colSpan?: string;
};

type SelectConfig = {
  name: keyof FormData;
  label: string;
  placeholder: string;
  options: SelectOption[];
};

/* -------------------------------------------------------------------------- */
/* Constants                                                                  */
/* -------------------------------------------------------------------------- */

const STEPS = ["You & business", "Priorities", "Schedule"];

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

const PRIORITY_DETAILS = [
  {
    label: "Legal Entities",
    options: [
      { label: "Select a range", value: "" },
      { label: "1 - 5", value: "1-5" },
      { label: "6 - 20", value: "6-20" },
      { label: "20+", value: "20+" },
    ],
  },
  {
    label: "Operating countries",
    options: [
      { label: "Select a range", value: "" },
      { label: "1 country", value: "1" },
      { label: "2 - 5 countries", value: "2-5" },
      { label: "5+ countries", value: "5+" },
    ],
  },
  {
    label: "Current finance system ( optional )",
    options: [
      { label: "Select or skip", value: "" },
      { label: "NetSuite", value: "NetSuite" },
      { label: "QuickBooks", value: "QuickBooks" },
      { label: "SAP", value: "SAP" },
    ],
  },
  {
    label: "Timing",
    options: [
      { label: "Select a timeframe", value: "" },
      { label: "Immediate", value: "Immediate" },
      { label: "1 - 3 months", value: "1-3 months" },
      { label: "3+ months", value: "3+ months" },
    ],
  },
];

const TIME_SLOTS = [
  { time: "09:00 AM", duration: "30 min" },
  { time: "10:00 AM", duration: "30 min" },
  { time: "11:00 AM", duration: "30 min" },
  { time: "02:00 PM", duration: "30 min" },
  { time: "03:00 PM", duration: "30 min" },
  { time: "04:00 PM", duration: "30 min" },
];

const CALENDAR_DATES = Array.from({ length: 30 }, (_, i) => i + 1);

/* -------------------------------------------------------------------------- */
/* Step 1 Configuration                                                       */
/* -------------------------------------------------------------------------- */

const INPUT_FIELDS: FieldConfig[] = [
  {
    name: "firstName",
    label: "First name",
  },
  {
    name: "lastName",
    label: "Last name",
  },
  {
    name: "workEmail",
    label: "Work email",
    type: "email",
    colSpan: "col-span-2",
  },
  {
    name: "company",
    label: "Company or organization",
  },
];

const SELECT_FIELDS: SelectConfig[] = [
  {
    name: "role",
    label: "Your role",
    placeholder: "Select your role",
    options: [
      { label: "Executive", value: "Executive" },
      { label: "Manager", value: "Manager" },
      {
        label: "Individual Contributor",
        value: "Individual Contributor",
      },
    ],
  },
  {
    name: "country",
    label: "Country or primary operating market",
    placeholder: "Select a country",
    options: [
      { label: "United States", value: "United States" },
      { label: "India", value: "India" },
      { label: "United Kingdom", value: "United Kingdom" },
      { label: "Canada", value: "Canada" },
    ],
  },
  {
    name: "companySize",
    label: "Company size",
    placeholder: "Select company size",
    options: [
      { label: "1 - 50 employees", value: "1-50" },
      { label: "51 - 200 employees", value: "51-200" },
      { label: "201 - 1000 employees", value: "201-1000" },
      { label: "1000+ employees", value: "1000+" },
    ],
  },
];

/* -------------------------------------------------------------------------- */
/* Reusable Components                                                        */
/* -------------------------------------------------------------------------- */

function Stepper({ currentStep }: { currentStep: Step }) {
  return (
    <div className="grid grid-cols-3 gap-3 mb-5 border-b border-[#F3F4F6] pb-4">
      {STEPS.map((step, index) => {
        const stepNumber = index + 1;
        const isActive = stepNumber <= currentStep;

        return (
          <div key={step}>
            <div
              className={`h-1 rounded-full w-full ${
                isActive ? "bg-[#D4AF37]" : "bg-[#6E7E8E]"
              }`}
            />

            <div
              className={`text-xs font-semibold mt-1 ${
                isActive ? "text-[#0B132B]" : "text-[#9CA3AF]"
              }`}
            >
              {stepNumber}. {step}
            </div>
          </div>
        );
      })}
    </div>
  );
}

function SelectField({
  label,
  value,
  placeholder,
  options,
  onChange,
  small = false,
}: {
  label: string;
  value: string;
  placeholder?: string;
  options: SelectOption[];
  onChange: (value: string) => void;
  small?: boolean;
}) {
  return (
    <div>
      <label
        className={`block font-medium text-[#4B5563] mb-1 ${
          small ? "text-[11px]" : "text-xs"
        }`}
      >
        {label}
      </label>

      <div className="relative">
        <select
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className={`w-full bg-white border border-[#D1D5DB] rounded-[16px] text-[#6B7280] appearance-none focus:outline-none focus:border-[#D4AF37] ${
            small ? "h-9 px-3 text-xs" : "h-11 px-3.5 text-sm"
          }`}
        >
          {placeholder && <option value="">{placeholder}</option>}

          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>

        <ChevronDown
          className={`absolute text-[#9CA3AF] pointer-events-none ${
            small ? "right-3 top-2.5 w-3.5 h-3.5" : "right-3.5 top-3.5 w-4 h-4"
          }`}
        />
      </div>
    </div>
  );
}

function TextInput({
  label,
  value,
  type = "text",
  placeholder,
  onChange,
  colSpan = "",
}: {
  label: string;
  value: string;
  type?: string;
  placeholder?: string;
  onChange: (value: string) => void;
  colSpan?: string;
}) {
  return (
    <div className={colSpan}>
      <label className="block text-xs font-medium text-[#4B5563] mb-1.5">
        {label}
      </label>

      <input
        type={type}
        value={value}
        placeholder={placeholder}
        onChange={(e) => onChange(e.target.value)}
        className="w-full h-11 px-3.5 bg-white border border-[#D1D5DB] rounded-[16px] text-sm text-[#111827] placeholder:text-[#16223A80] focus:outline-none focus:border-[#D4AF37]"
      />
    </div>
  );
}

function NavigationButtons({
  onBack,
  onNext,
  nextLabel = "Next",
}: {
  onBack?: () => void;
  onNext: () => void;
  nextLabel?: string;
}) {
  return (
    <div className="flex justify-between items-center pt-2">
      {onBack ? (
        <button
          onClick={onBack}
          className="border border-[#D1D5DB] hover:bg-[#F9FAFB] text-[#0B132B] font-medium px-6 py-2.5 rounded-xl text-sm transition-all"
        >
          Back
        </button>
      ) : (
        <div />
      )}

      <button
        onClick={onNext}
        className="bg-[#C8A24A] hover:bg-[#C5A028] text-white font-medium px-8 py-2.5 rounded-[16px] text-sm transition-all shadow-md"
      >
        {nextLabel}
      </button>
    </div>
  );
}

function PriorityCard({
  label,
  selected,
  onClick,
}: {
  label: string;
  selected: boolean;
  onClick: () => void;
}) {
  return (
    <div
      onClick={onClick}
      className="flex items-center space-x-3 px-3.5 py-2.5 rounded-[16px] border border-[#16223A1A] bg-white cursor-pointer transition-all"
    >
      <div
        className={`w-4 h-4 rounded flex items-center justify-center border ${
          selected ? "bg-[#124869] border-[#0E28431A]" : "border-[#0E28431A]"
        }`}
      >
        {selected && <Check className="w-3 h-3 text-white" />}
      </div>

      <span className="text-xs text-[#111827] font-medium">{label}</span>
    </div>
  );
}

function TimeSlot({
  time,
  duration,
  selected,
  onClick,
}: {
  time: string;
  duration: string;
  selected: boolean;
  onClick: () => void;
}) {
  return (
    <div
      onClick={onClick}
      className={`flex items-center justify-between px-3.5 py-2.5 rounded-[16px] border cursor-pointer transition-all ${
        selected
          ? "border-[#D4AF37] bg-[#FDFBF7]"
          : "border-[#E5E7EB] bg-white hover:border-[#D1D5DB]"
      }`}
    >
      <span className="text-xs font-semibold text-[#111827]">{time}</span>

      <span className="text-[10px] text-[#6B7280]">{duration}</span>
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/* Main Component                                                             */
/* -------------------------------------------------------------------------- */

export default function BookDemoPage() {
  const [currentStep, setCurrentStep] = useState<Step>(1);

  /* ------------------------------- Step 1 -------------------------------- */

  const [formData, setFormData] = useState<FormData>({
    firstName: "Jimmy",
    lastName: "Jostar",
    workEmail: "jimmy@company.com",
    company: "Xyz",
    role: "",
    country: "",
    companySize: "",
    phone: "",
  });

  const updateFormData = (field: keyof FormData, value: string) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  /* ------------------------------- Step 2 -------------------------------- */

  const [selectedPriorities, setSelectedPriorities] = useState<string[]>([
    "Accounting & close",
    "Payroll / Workforce",
  ]);

  const [priorityDetails, setPriorityDetails] = useState<
    Record<string, string>
  >({
    "Legal Entities": "",
    "Operating countries": "",
    "Current finance system ( optional )": "",
    Timing: "",
  });

  const [customNote, setCustomNote] = useState("");

  const togglePriority = (priority: string) => {
    setSelectedPriorities((prev) => {
      if (prev.includes(priority)) {
        return prev.filter((item) => item !== priority);
      }

      if (prev.length >= 5) {
        return prev;
      }

      return [...prev, priority];
    });
  };

  const updatePriorityDetail = (field: string, value: string) => {
    setPriorityDetails((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  /* ------------------------------- Step 3 -------------------------------- */

  const [selectedDate, setSelectedDate] = useState(17);
  const [selectedTime, setSelectedTime] = useState("09:00 AM");

  const [timezone, setTimezone] = useState(
    "(GMT-8) Pacific Time - US & Canada",
  );

  const [colleagueEmail, setColleagueEmail] = useState("");
  const [colleagues, setColleagues] = useState<string[]>([]);

  const [agreedPrivacy, setAgreedPrivacy] = useState(false);
  const [subscribeUpdates, setSubscribeUpdates] = useState(false);

  const addColleague = () => {
    const email = colleagueEmail.trim();

    if (!email || colleagues.includes(email)) {
      return;
    }

    setColleagues((prev) => [...prev, email]);
    setColleagueEmail("");
  };

  /* ----------------------------- Navigation ------------------------------ */

  const handleNext = () => {
    if (currentStep < 4) {
      setCurrentStep((prev) => (prev + 1) as Step);
    }
  };

  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep((prev) => (prev - 1) as Step);
    }
  };

  return (
    <div className="bg-[#F6F5F0] font-sans text-[#111827] min-h-screen flex flex-col justify-between overflow-hidden select-none p-6 md:px-12 lg:px-16">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center max-w-6xl mx-auto w-full my-auto">
        {/* ------------------------------------------------------------------ */}
        {/* Left Side                                                         */}
        {/* ------------------------------------------------------------------ */}

        <div className="lg:col-span-5 flex flex-col justify-center space-y-6">
          <div className="space-y-2">
            <div className="flex items-center space-x-2">
              <div className="w-6 h-[1px] bg-[#CDA85B]" />

              <span className="text-xs font-semibold uppercase tracking-widest text-[#CDA85B]">
                TAILOR YOUR DEMO
              </span>
            </div>

            <h1 className="text-4xl lg:text-[44px] font-extrabold text-[#0B132B] tracking-tight leading-[1.15]">
              Tailor your
              <br />
              Zoikosuite demo
            </h1>

            <p className="text-sm text-[#4B5563] pt-1">
              Tells us only what we need to make the session useful.
            </p>
          </div>

          <div className="relative w-full max-w-[350px] h-[320px] flex items-center justify-center">
            <Image
              src="/book/1.png"
              alt="Dashboard Preview Graphic"
              fill
              className="object-contain drop-shadow-xl"
              priority
            />
          </div>
        </div>

        {/* ------------------------------------------------------------------ */}
        {/* Right Side                                                        */}
        {/* ------------------------------------------------------------------ */}

        <div className="lg:col-span-7 bg-white rounded-2xl shadow-xl border border-[#EFECE6] p-8 relative flex flex-col justify-between">
          {/* ================================================================ */}
          {/* STEP 1                                                          */}
          {/* ================================================================ */}

          {currentStep === 1 && (
            <div className="flex flex-col h-full justify-between space-y-6">
              <div>
                <Stepper currentStep={currentStep} />

                <div className="grid grid-cols-2 gap-4">
                  {/* Text Inputs */}
                  {INPUT_FIELDS.map((field) => (
                    <TextInput
                      key={field.name}
                      label={field.label}
                      type={field.type}
                      value={formData[field.name]}
                      onChange={(value) => updateFormData(field.name, value)}
                      colSpan={field.colSpan}
                    />
                  ))}

                  {/* Select Inputs */}
                  {SELECT_FIELDS.map((field) => (
                    <SelectField
                      key={field.name}
                      label={field.label}
                      value={formData[field.name]}
                      placeholder={field.placeholder}
                      options={field.options}
                      onChange={(value) => updateFormData(field.name, value)}
                    />
                  ))}

                  {/* Phone */}
                  <div className="col-span-2">
                    <label className="block text-xs font-medium text-[#4B5563] mb-1.5">
                      Phone ( optional )
                    </label>

                    <div className="flex gap-2">
                      <div className="relative w-24">
                        <select className="w-full h-11 px-3 bg-white border border-[#D1D5DB] rounded-[16px] text-sm text-[#111827] appearance-none focus:outline-none">
                          <option>+1</option>
                          <option>+91</option>
                          <option>+44</option>
                        </select>

                        <ChevronDown className="absolute right-2.5 top-3.5 w-4 h-4 text-[#9CA3AF] pointer-events-none" />
                      </div>

                      <input
                        type="text"
                        placeholder="Phone number"
                        value={formData.phone}
                        onChange={(e) =>
                          updateFormData("phone", e.target.value)
                        }
                        className="flex-1 h-11 px-3.5 bg-white border border-[#D1D5DB] rounded-[16px] text-sm text-[#111827] placeholder:text-[#16223A80] focus:outline-none focus:border-[#D4AF37]"
                      />
                    </div>
                  </div>
                </div>
              </div>

              <NavigationButtons onNext={handleNext} nextLabel="Continue" />
            </div>
          )}

          {/* ================================================================ */}
          {/* STEP 2                                                          */}
          {/* ================================================================ */}

          {currentStep === 2 && (
            <div className="flex flex-col h-full justify-between space-y-4">
              <div>
                <Stepper currentStep={currentStep} />

                <div className="text-xs font-medium text-[#111827] mb-3">
                  Demo priorities{" "}
                  <span className="text-[#6B7280]">- choose up to 5</span>
                </div>

                <div className="grid grid-cols-2 gap-2.5 mb-4">
                  {PRIORITIES.map((priority) => (
                    <PriorityCard
                      key={priority}
                      label={priority}
                      selected={selectedPriorities.includes(priority)}
                      onClick={() => togglePriority(priority)}
                    />
                  ))}
                </div>

                <div className="grid grid-cols-2 gap-3 mb-3">
                  {PRIORITY_DETAILS.map((field) => (
                    <SelectField
                      key={field.label}
                      label={field.label}
                      value={priorityDetails[field.label]}
                      options={field.options}
                      onChange={(value) =>
                        updatePriorityDetail(field.label, value)
                      }
                      small
                    />
                  ))}
                </div>

                <div>
                  <label className="block text-[11px] font-medium text-[#4B5563] mb-1">
                    What would make this demo useful for you? ( optional )
                  </label>

                  <textarea
                    rows={2}
                    value={customNote}
                    onChange={(e) => setCustomNote(e.target.value)}
                    placeholder="For example: We close in 12 days across four entities and want to see how approvals and reconciliation evidence work together."
                    className="w-full p-2.5 bg-white border border-[#D1D5DB] rounded-[16px] text-xs text-[#111827] placeholder:text-[#16223A80] focus:outline-none focus:border-[#D4AF37] resize-none"
                  />
                </div>
              </div>

              <NavigationButtons onBack={handleBack} onNext={handleNext} />
            </div>
          )}

          {/* ================================================================ */}
          {/* STEP 3                                                          */}
          {/* ================================================================ */}

          {currentStep === 3 && (
            <div className="flex flex-col h-full justify-between space-y-4">
              <div>
                <Stepper currentStep={currentStep} />

                <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
                  {/* Calendar */}
                  <div className="md:col-span-7 space-y-4">
                    <SelectField
                      label="Your timezone"
                      value={timezone}
                      options={[
                        {
                          label: "(GMT-8) Pacific Time - US & Canada",
                          value: "(GMT-8) Pacific Time - US & Canada",
                        },
                        {
                          label: "(GMT-5) Eastern Time - US & Canada",
                          value: "(GMT-5) Eastern Time - US & Canada",
                        },
                        {
                          label: "(GMT+0) London - United Kingdom",
                          value: "(GMT+0) London - United Kingdom",
                        },
                        {
                          label: "(GMT+5:30) New Delhi - India",
                          value: "(GMT+5:30) New Delhi - India",
                        },
                      ]}
                      onChange={setTimezone}
                      small
                    />

                    <div className="border border-[#E5E7EB] rounded-xl p-3 bg-white">
                      <div className="flex justify-between items-center mb-3">
                        <button className="p-1 rounded hover:bg-gray-100">
                          <ChevronLeft className="w-4 h-4 text-[#4B5563]" />
                        </button>

                        <span className="text-xs font-bold text-[#111827]">
                          September 2026
                        </span>

                        <button className="p-1 rounded hover:bg-gray-100">
                          <ChevronRight className="w-4 h-4 text-[#4B5563]" />
                        </button>
                      </div>

                      <div className="grid grid-cols-7 text-center text-[10px] font-semibold text-[#9CA3AF] mb-2">
                        {["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"].map(
                          (day) => (
                            <span key={day}>{day}</span>
                          ),
                        )}
                      </div>

                      <div className="grid grid-cols-7 text-center text-xs gap-y-1">
                        {/* September 2026 starts on Tuesday */}
                        <span />
                        <span />
                        <span />

                        {CALENDAR_DATES.map((date) => {
                          const selected = selectedDate === date;

                          return (
                            <span
                              key={date}
                              onClick={() => setSelectedDate(date)}
                              className={`py-1 rounded-full font-semibold cursor-pointer ${
                                selected
                                  ? "bg-[#D4AF37] text-white"
                                  : "text-[#4B5563]"
                              }`}
                            >
                              {String(date).padStart(2, "0")}
                            </span>
                          );
                        })}
                      </div>

                      <div className="mt-3 pt-2 border-t border-[#F3F4F6] flex items-center space-x-1.5 text-[10px] text-[#6B7280]">
                        <CalendarIcon className="w-3 h-3 text-[#9CA3AF]" />

                        <span>Times shown in {timezone}</span>
                      </div>
                    </div>
                  </div>

                  {/* Time Slots */}
                  <div className="md:col-span-5 space-y-3">
                    <div className="text-[11px] font-medium text-[#4B5563]">
                      Available times for Thu, Sep {selectedDate}
                    </div>

                    <div className="space-y-2 max-h-[220px] overflow-y-auto pr-1">
                      {TIME_SLOTS.map((slot) => (
                        <TimeSlot
                          key={slot.time}
                          time={slot.time}
                          duration={slot.duration}
                          selected={selectedTime === slot.time}
                          onClick={() => setSelectedTime(slot.time)}
                        />
                      ))}
                    </div>
                  </div>
                </div>

                {/* Invite Colleagues */}
                <div className="mt-4 space-y-3">
                  <div>
                    <label className="block text-[11px] font-medium text-[#4B5563] mb-1">
                      Invite Colleagues ( optional )
                    </label>

                    <div className="flex gap-2">
                      <input
                        type="email"
                        value={colleagueEmail}
                        onChange={(e) => setColleagueEmail(e.target.value)}
                        placeholder="Colleague@company.com"
                        className="flex-1 h-9 px-3 bg-white border border-[#D1D5DB] rounded-[16px] text-xs text-[#111827] placeholder:text-[#16223A80] focus:outline-none focus:border-[#D4AF37]"
                      />

                      <button
                        onClick={addColleague}
                        className="px-4 h-9 border border-[#D1D5DB] rounded-[16px] text-xs font-medium text-[#111827] hover:bg-gray-50 flex items-center space-x-1"
                      >
                        <Plus className="w-3.5 h-3.5" />
                        <span>Add</span>
                      </button>
                    </div>

                    {colleagues.length > 0 && (
                      <div className="flex flex-wrap gap-1.5 mt-2">
                        {colleagues.map((email) => (
                          <span
                            key={email}
                            className="bg-[#F3F4F6] text-[#111827] text-[10px] px-2 py-0.5 rounded-md"
                          >
                            {email}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>

                  {/* Agreements */}
                  <div className="space-y-2 pt-1">
                    <label className="flex items-start space-x-2.5 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={agreedPrivacy}
                        onChange={(e) => setAgreedPrivacy(e.target.checked)}
                        className="mt-0.5 rounded border-[#D1D5DB] text-[#D4AF37] focus:ring-0"
                      />

                      <span className="text-[11px] text-[#4B5563] leading-tight">
                        I have read the Privacy Notice and agree that ZoikoSuite
                        may process my details to arrange and tailor this demo.{" "}
                        <span className="text-[#D4AF37]">( required )</span>
                      </span>
                    </label>

                    <label className="flex items-start space-x-2.5 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={subscribeUpdates}
                        onChange={(e) => setSubscribeUpdates(e.target.checked)}
                        className="mt-0.5 rounded border-[#D1D5DB] text-[#D4AF37] focus:ring-0"
                      />

                      <span className="text-[11px] text-[#4B5563] leading-tight">
                        Send me relevant ZoikoSuite updates.{" "}
                        <span className="text-[#9CA3AF]">
                          ( optional - not required to book )
                        </span>
                      </span>
                    </label>
                  </div>
                </div>
              </div>

              <NavigationButtons onBack={handleBack} onNext={handleNext} />
            </div>
          )}

          {/* ================================================================ */}
          {/* STEP 4                                                          */}
          {/* ================================================================ */}

          {currentStep === 4 && (
            <div className="flex flex-col h-full justify-between space-y-6 py-2">
              {/* Success */}
              <div className="flex flex-col items-center text-center space-y-3">
                <img src="/book/success.png" />

                <div className="space-y-1">
                  <h2 className="text-xl font-bold text-[#111827]">
                    Your ZoikoSuite Demo is Booked
                  </h2>

                  <p className="text-xs text-[#6B7280]">
                    Tell us only what we need to make the session useful.
                  </p>
                </div>
              </div>

              {/* Booking Details */}
              <div className="border border-[#E5E7EB] rounded-xl bg-white divide-y divide-[#F3F4F6]">
                <div className="flex items-start space-x-3 p-3.5">
                  <CalendarIcon className="w-4 h-4 text-[#4B5563] mt-0.5" />

                  <div>
                    <div className="text-[10px] text-[#6B7280]">When</div>

                    <div className="text-xs font-semibold text-[#111827]">
                      Thu, Sep {selectedDate}, 2026 at {selectedTime} (
                      {timezone})
                    </div>
                  </div>
                </div>

                <div className="flex items-start space-x-3 p-3.5">
                  <Clock className="w-4 h-4 text-[#4B5563] mt-0.5" />

                  <div>
                    <div className="text-[10px] text-[#6B7280]">Length</div>

                    <div className="text-xs font-semibold text-[#111827]">
                      30 min · Video Meeting
                    </div>
                  </div>
                </div>

                <div className="flex items-start space-x-3 p-3.5">
                  <User className="w-4 h-4 text-[#4B5563] mt-0.5" />

                  <div>
                    <div className="text-[10px] text-[#6B7280]">Host</div>

                    <div className="text-xs font-semibold text-[#111827]">
                      ZoikoSuite Specialist
                    </div>
                  </div>
                </div>

                <div className="flex items-start space-x-3 p-3.5">
                  <FileText className="w-4 h-4 text-[#4B5563] mt-0.5" />

                  <div>
                    <div className="text-[10px] text-[#6B7280]">Agenda</div>

                    <div className="text-xs font-semibold text-[#111827]">
                      {selectedPriorities.length > 0
                        ? selectedPriorities.join(" · ")
                        : "Accounting & close · Payroll / Workforce"}
                    </div>
                  </div>
                </div>
              </div>

              {/* Actions */}
              <div className="flex items-center justify-between pt-2">
                <button className="bg-[#C8A24A] hover:bg-[#C5A028] text-white font-medium px-5 py-2.5 rounded-xl text-xs transition-all shadow-sm">
                  Add to calendar
                </button>

                <div className="flex space-x-2">
                  <button className="border border-[#D1D5DB] hover:bg-[#F9FAFB] text-[#0B132B] font-medium px-5 py-2.5 rounded-xl text-xs transition-all">
                    Reschedule
                  </button>

                  <button
                    onClick={() => setCurrentStep(1)}
                    className="border border-[#D1D5DB] hover:bg-[#F9FAFB] text-[#0B132B] font-medium px-5 py-2.5 rounded-xl text-xs transition-all"
                  >
                    Cancel
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* ---------------------------------------------------------------- */}
          {/* Footer                                                          */}
          {/* ---------------------------------------------------------------- */}

          <div className="flex flex-col items-center justify-center space-y-1.5 pt-4">
            <div className="text-[11px] text-[#16223A99]">
              Booking a demo never creates an account, starts a trial or asks
              for payment details.
            </div>

            <a
              href="/"
              className="text-xs font-semibold text-[#124869] underline hover:text-[#D4AF37] transition-colors"
            >
              Back in Website
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
