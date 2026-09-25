import React from 'react';

export const EnforcementModel = () => {
  return (
    <section className="w-full px-8 py-12 md:px-32 bg-color-white-solid flex justify-center">
      <div className="w-full max-w-[1180px] flex flex-col justify-start items-start gap-3">
        <div className="self-stretch pb-[0.59px] flex flex-col justify-start items-start">
          <div className="self-stretch justify-center text-color-orange-44 text-xs font-bold font-['Inter'] uppercase leading-4 tracking-wider">
            ENFORCEMENT &amp; REMEDIATION MODEL
          </div>
        </div>
        <div className="w-full max-w-[720px] flex flex-col justify-start items-start">
          <div className="justify-center text-color-azure-16-2 text-2xl font-bold font-['Georgia'] leading-10">
            Nine stages, from detection to closure
          </div>
        </div>
        
        {/* Stages */}
        <div className="self-stretch pt-4 flex flex-col justify-start items-start">
          <div className="self-stretch pt-3 pb-3.5 border-t border-color-orange-82 flex flex-col md:flex-row justify-start md:items-center gap-5">
            <div className="w-full md:w-56 pb-[0.80px] flex flex-col justify-start items-start">
              <div className="justify-center text-color-azure-37-2 text-xs font-bold font-['Inter'] leading-5">Detection / report</div>
            </div>
            <div className="w-full md:w-80 flex flex-col justify-start items-start">
              <div className="self-stretch justify-center text-color-azure-37-2 text-xs font-normal font-['Inter'] leading-5">Issue detected by system, administrator, user, third party, or internal team.</div>
            </div>
            <div className="flex-1 flex flex-col justify-start items-start">
              <div className="self-stretch justify-center text-color-azure-37-2 text-xs font-normal font-['Inter'] leading-5">Creates an evidence-linked case.</div>
            </div>
          </div>
          
          <div className="self-stretch pt-3 pb-3.5 border-t border-color-orange-82 flex flex-col md:flex-row justify-start md:items-center gap-5">
            <div className="w-full md:w-56 pb-[0.80px] flex flex-col justify-start items-start">
              <div className="justify-center text-color-azure-37-2 text-xs font-bold font-['Inter'] leading-5">Triage</div>
            </div>
            <div className="w-full md:w-80 flex flex-col justify-start items-start">
              <div className="self-stretch justify-center text-color-azure-37-2 text-xs font-normal font-['Inter'] leading-5">Assess scope, severity, credibility, affected services, immediate risk.</div>
            </div>
            <div className="flex-1 flex flex-col justify-start items-start">
              <div className="self-stretch justify-center text-color-azure-37-2 text-xs font-normal font-['Inter'] leading-5">Severity + jurisdiction + customer context.</div>
            </div>
          </div>

          <div className="self-stretch pt-3 pb-3.5 border-t border-color-orange-82 flex flex-col md:flex-row justify-start md:items-center gap-5">
            <div className="w-full md:w-56 pb-[0.80px] flex flex-col justify-start items-start">
              <div className="justify-center text-color-azure-37-2 text-xs font-bold font-['Inter'] leading-5">Containment</div>
            </div>
            <div className="w-full md:w-80 flex flex-col justify-start items-start">
              <div className="self-stretch justify-center text-color-azure-37-2 text-xs font-normal font-['Inter'] leading-5">Temporary restriction may occur to protect people, data, systems, or evidence.</div>
            </div>
            <div className="flex-1 flex flex-col justify-start items-start">
              <div className="self-stretch justify-center text-color-azure-37-2 text-xs font-normal font-['Inter'] leading-5">Emergency-action authority and audit event.</div>
            </div>
          </div>

          <div className="self-stretch pt-3 pb-3.5 border-t border-color-orange-82 flex flex-col md:flex-row justify-start md:items-center gap-5">
            <div className="w-full md:w-56 pb-[0.80px] flex flex-col justify-start items-start">
              <div className="justify-center text-color-azure-37-2 text-xs font-bold font-['Inter'] leading-5">Decision</div>
            </div>
            <div className="w-full md:w-80 flex flex-col justify-start items-start">
              <div className="self-stretch justify-center text-color-azure-37-2 text-xs font-normal font-['Inter'] leading-5">No violation / warning / remediation / restriction / suspension / termination / escalation.</div>
            </div>
            <div className="flex-1 flex flex-col justify-start items-start">
              <div className="self-stretch justify-center text-color-azure-37-2 text-xs font-normal font-['Inter'] leading-5">Maker-checker for material actions.</div>
            </div>
          </div>

          <div className="self-stretch pt-3 pb-3.5 border-t border-color-orange-82 flex flex-col md:flex-row justify-start md:items-center gap-5">
            <div className="w-full md:w-56 pb-[0.80px] flex flex-col justify-start items-start">
              <div className="justify-center text-color-azure-37-2 text-xs font-bold font-['Inter'] leading-5">Notice</div>
            </div>
            <div className="w-full md:w-80 flex flex-col justify-start items-start">
              <div className="self-stretch justify-center text-color-azure-37-2 text-xs font-normal font-['Inter'] leading-5">Explains action and relevant policy basis where legally/operationally appropriate.</div>
            </div>
            <div className="flex-1 flex flex-col justify-start items-start">
              <div className="self-stretch justify-center text-color-azure-37-2 text-xs font-normal font-['Inter'] leading-5">Avoids disclosing sensitive detection methods.</div>
            </div>
          </div>

          <div className="self-stretch pt-3 pb-3.5 border-t border-color-orange-82 flex flex-col md:flex-row justify-start md:items-center gap-5">
            <div className="w-full md:w-56 pb-[0.80px] flex flex-col justify-start items-start">
              <div className="justify-center text-color-azure-37-2 text-xs font-bold font-['Inter'] leading-5">Appeal / review</div>
            </div>
            <div className="w-full md:w-80 flex flex-col justify-start items-start">
              <div className="self-stretch justify-center text-color-azure-37-2 text-xs font-normal font-['Inter'] leading-5">Eligible users may request review where offered.</div>
            </div>
            <div className="flex-1 flex flex-col justify-start items-start">
              <div className="self-stretch justify-center text-color-azure-37-2 text-xs font-normal font-['Inter'] leading-5">Independent reviewer for material actions where feasible.</div>
            </div>
          </div>

          <div className="self-stretch pt-3 pb-3.5 border-t border-b border-color-orange-82 flex flex-col md:flex-row justify-start md:items-center gap-5">
            <div className="w-full md:w-56 pb-[0.80px] flex flex-col justify-start items-start">
              <div className="justify-center text-color-azure-37-2 text-xs font-bold font-['Inter'] leading-5">Closure / retention</div>
            </div>
            <div className="w-full md:w-80 flex flex-col justify-start items-start">
              <div className="self-stretch justify-center text-color-azure-37-2 text-xs font-normal font-['Inter'] leading-5">Records final state, rationale, and evidence retention.</div>
            </div>
            <div className="flex-1 flex flex-col justify-start items-start">
              <div className="self-stretch justify-center text-color-azure-37-2 text-xs font-normal font-['Inter'] leading-5">Follows legal hold, privacy, and audit requirements.</div>
            </div>
          </div>
        </div>

        {/* Factors */}
        <div className="self-stretch pt-6 pb-[0.59px] flex flex-col justify-start items-start">
          <div className="self-stretch justify-center text-color-orange-44 text-xs font-bold font-['Inter'] uppercase leading-4 tracking-wider">
            ENFORCEMENT FACTORS
          </div>
        </div>
        <div className="self-stretch pt-3.5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 items-stretch">
          <div className="px-4 pt-3.5 pb-4 bg-color-white-solid rounded-lg outline outline-1 outline-offset-[-1px] outline-color-orange-82 flex flex-col justify-start items-start gap-1.5 h-full">
            <div className="self-stretch pb-[0.80px] flex flex-col justify-start items-start">
              <div className="self-stretch justify-center text-color-azure-16-2 text-xs font-bold font-['Inter'] leading-5">Severity of harm</div>
            </div>
            <div className="self-stretch flex flex-col justify-start items-start">
              <div className="self-stretch justify-center text-color-azure-37-2 text-xs font-normal font-['Inter'] leading-5">People safety, customer data, financial loss, service integrity, legal exposure.</div>
            </div>
          </div>
          
          <div className="px-4 pt-3.5 pb-4 bg-color-white-solid rounded-lg outline outline-1 outline-offset-[-1px] outline-color-orange-82 flex flex-col justify-start items-start gap-1.5 h-full">
            <div className="self-stretch pb-[0.80px] flex flex-col justify-start items-start">
              <div className="self-stretch justify-center text-color-azure-16-2 text-xs font-bold font-['Inter'] leading-5">Intent / knowledge</div>
            </div>
            <div className="self-stretch flex flex-col justify-start items-start">
              <div className="self-stretch justify-center text-color-azure-37-2 text-xs font-normal font-['Inter'] leading-5">Accidental misconfiguration vs. deliberate abuse or repeated evasion.</div>
            </div>
          </div>

          <div className="px-4 pt-3.5 pb-4 bg-color-white-solid rounded-lg outline outline-1 outline-offset-[-1px] outline-color-orange-82 flex flex-col justify-start items-start gap-1.5 h-full">
            <div className="self-stretch pb-[0.80px] flex flex-col justify-start items-start">
              <div className="self-stretch justify-center text-color-azure-16-2 text-xs font-bold font-['Inter'] leading-5">Scale / duration</div>
            </div>
            <div className="self-stretch flex flex-col justify-start items-start">
              <div className="self-stretch justify-center text-color-azure-37-2 text-xs font-normal font-['Inter'] leading-5">Single event vs. repeated, automated, high-volume, or persistent behavior.</div>
            </div>
          </div>

          <div className="px-4 pt-3.5 pb-4 bg-color-white-solid rounded-lg outline outline-1 outline-offset-[-1px] outline-color-orange-82 flex flex-col justify-start items-start gap-1.5 h-full">
            <div className="self-stretch pb-[0.80px] flex flex-col justify-start items-start">
              <div className="self-stretch justify-center text-color-azure-16-2 text-xs font-bold font-['Inter'] leading-5">Customer/admin response</div>
            </div>
            <div className="self-stretch flex flex-col justify-start items-start">
              <div className="self-stretch justify-center text-color-azure-37-2 text-xs font-normal font-['Inter'] leading-5">Prompt remediation and cooperation vs. obstruction or recurrence.</div>
            </div>
          </div>

          <div className="px-4 pt-3.5 pb-4 bg-color-white-solid rounded-lg outline outline-1 outline-offset-[-1px] outline-color-orange-82 flex flex-col justify-start items-start gap-1.5 h-full">
            <div className="self-stretch pb-[0.80px] flex flex-col justify-start items-start">
              <div className="self-stretch justify-center text-color-azure-16-2 text-xs font-bold font-['Inter'] leading-5">Prior history</div>
            </div>
            <div className="self-stretch flex flex-col justify-start items-start">
              <div className="self-stretch justify-center text-color-azure-37-2 text-xs font-normal font-['Inter'] leading-5">Relevant prior warnings, sanctions, or validated incidents.</div>
            </div>
          </div>

          <div className="px-4 pt-3.5 pb-4 bg-color-white-solid rounded-lg outline outline-1 outline-offset-[-1px] outline-color-orange-82 flex flex-col justify-start items-start gap-1.5 h-full">
            <div className="self-stretch pb-[0.80px] flex flex-col justify-start items-start">
              <div className="self-stretch justify-center text-color-azure-16-2 text-xs font-bold font-['Inter'] leading-5">Contractual context</div>
            </div>
            <div className="self-stretch flex flex-col justify-start items-start">
              <div className="self-stretch justify-center text-color-azure-37-2 text-xs font-normal font-['Inter'] leading-5">Enterprise agreement, negotiated terms, dedicated deployment, support obligations.</div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
