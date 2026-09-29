import type { Metadata } from "next";
import {
  CompanyHeroSection,
  RelationshipMapSection,
  CompanySnapshotSection,
  WhyWeExistSection,
  HowWeOperateSection,
  LeadershipSection,
  CompanyDestinationsSection,
  GlobalPresenceSection,
  PartnersEcosystemSection,
  CareersSection,
  NewsroomSection,
  OrganizationalContextSection,
  InvestorRelationsSection,
  SustainabilitySection,
  TrustGovernanceEthicsSection,
  FindYourPathSection,
  FaqSection,
} from "@/components/company";

export const metadata: Metadata = {
  title: "Company | ZoikoSuite",
  description:
    "Meet the organization behind ZoikoSuite — the platform, people, operating principles, and governance model shaping a more accountable way to run business.",
};

export default function CompanyPage() {
  return (
    <main className="w-full bg-color-white-solid">
      <CompanyHeroSection />
      <RelationshipMapSection />
      <CompanySnapshotSection />
      <WhyWeExistSection />
      <HowWeOperateSection />
      <LeadershipSection />
      <CompanyDestinationsSection />
      <GlobalPresenceSection />
      <PartnersEcosystemSection />
      <CareersSection />
      <NewsroomSection />
      <OrganizationalContextSection />
      <InvestorRelationsSection />
      <SustainabilitySection />
      <TrustGovernanceEthicsSection />
      <FindYourPathSection />
      <FaqSection />
    </main>
  );
}
