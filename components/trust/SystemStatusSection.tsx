import SectionHead from "./SectionHead";
import { C, FONT, STATUS_WIDGET_IMG } from "./tokens";

export default function SystemStatusSection() {
  return (
    <section className="w-full flex justify-center" style={{ background: C.grey96 }}>
      <div className="w-full max-w-[1200px] px-8 py-[91px] flex flex-col gap-6">
        <div className="flex flex-col justify-end gap-4">
          <SectionHead
            eyebrow="SYSTEM STATUS"
            title="Current service state belongs to the status system."
          />
          <p className="w-full lg:w-[600px] pr-1 pt-3.5 pb-5 text-base leading-6 whitespace-nowrap" style={{ color: C.grey58, fontFamily: FONT }}>
            Not to marketing copy — this widget never hard-codes &quot;All
            <br />
            systems operational.&quot;
          </p>
        </div>

        <img
          src={STATUS_WIDGET_IMG}
          alt="Live service status"
          className="w-full h-[568px] object-cover rounded-2xl"
          style={{ border: `1px solid ${C.azure21}` }}
        />
      </div>
    </section>
  );
}
