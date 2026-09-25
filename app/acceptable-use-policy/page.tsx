import { Metadata } from "next";
import {
  AcceptableUseHero,
  AtAGlanceRuleMap,
  PolicyScope,
  AccountIdentity,
  SecurityAbuse,
  AutomationApis,
  FraudDeception,
  HarmfulConduct,
  PrivacyPersonalData,
  IntellectualProperty,
  AiAgents,
  RestrictedUse,
  ReportingAbuse,
  EnforcementModel,
  NoticeAppeal,
  FrequentlyAskedAup
} from "@/components/acceptable-use-policy";

export const metadata: Metadata = {
  title: "Acceptable Use Policy | ZoikoSuite",
  description: "Use ZoikoSuite responsibly, securely, and lawfully.",
};

export default function AcceptableUsePolicyPage() {
  return (
    <main className="flex min-h-screen flex-col w-full bg-color-grey-98-8">
      <AcceptableUseHero />
      <AtAGlanceRuleMap />
      <PolicyScope />
      <AccountIdentity />
      <SecurityAbuse />
      <AutomationApis />
      <FraudDeception />
      <HarmfulConduct />
      <PrivacyPersonalData />
      <IntellectualProperty />
      <AiAgents />
      <RestrictedUse />
      <ReportingAbuse />
      <EnforcementModel />
      <NoticeAppeal />
      <FrequentlyAskedAup />
    </main>
  );
}
