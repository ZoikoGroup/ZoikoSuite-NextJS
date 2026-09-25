import type { Metadata } from "next";
import {
  TrademarkHeroSection,
  BrandRelationshipMapSection,
  PublicTrademarkRegistrySection,
  WordmarksSection,
  LogosVisualMarksSection,
  SymbolsAttributionSection,
  EditorialMediaSection,
  PartnersCoBrandingSection,
  DeveloperIntegrationNamingSection,
  ScreenshotsDemoSection,
  DomainsSocialAdsSection,
  AiGeneratedBrandUseSection,
  ProhibitedUsesSection,
  BrandPermissionCenterSection,
  ReportMisuseSection,
  AssetLibrarySection,
  TrademarkFaqSection,
} from "@/components/trademark-guidelines";

export const metadata: Metadata = {
  title: "Trademark Guidelines | ZoikoSuite",
  description:
    "Guidance for customers, partners, media, developers, and other third parties on referring to ZoikoSuite and using approved brand assets without creating confusion about ownership, endorsement, affiliation, or source.",
};

export default function TrademarkGuidelinesPage() {
  return (
    <div className="w-full min-h-screen bg-[#FBFAF7]">
      {/* 1. HERO */}
      <TrademarkHeroSection />

      {/* 2. BRAND RELATIONSHIP MAP */}
      <BrandRelationshipMapSection />

      {/* 3. PUBLIC TRADEMARK REGISTRY */}
      <PublicTrademarkRegistrySection />

      {/* 4. WORDMARKS, PRODUCT NAMES & WRITTEN REFERENCES */}
      <WordmarksSection />

      {/* 5. LOGOS, ICONS & VISUAL MARKS */}
      <LogosVisualMarksSection />

      {/* 6. TRADEMARK SYMBOLS & ATTRIBUTION */}
      <SymbolsAttributionSection />

      {/* 7. EDITORIAL, MEDIA, COMMENTARY & COMPARATIVE REFERENCES */}
      <EditorialMediaSection />

      {/* 8. PARTNERS, CUSTOMERS, RESELLERS & CO-BRANDING */}
      <PartnersCoBrandingSection />

      {/* 9. DEVELOPER, API, APP & INTEGRATION NAMING */}
      <DeveloperIntegrationNamingSection />

      {/* 10. PRODUCT SCREENSHOTS, UI & DEMO MATERIALS */}
      <ScreenshotsDemoSection />

      {/* 11. DOMAINS, SOCIAL HANDLES, PAID ADVERTISING & SEARCH */}
      <DomainsSocialAdsSection />

      {/* 12. AI-GENERATED, SYNTHETIC & AUTOMATED BRAND USE */}
      <AiGeneratedBrandUseSection />

      {/* 13. PROHIBITED OR MISLEADING USES */}
      <ProhibitedUsesSection />

      {/* 14. BRAND PERMISSION CENTER */}
      <BrandPermissionCenterSection />

      {/* 15. REPORT TRADEMARK OR BRAND MISUSE */}
      <ReportMisuseSection />

      {/* 16. APPROVED BRAND ASSET LIBRARY */}
      <AssetLibrarySection />

      {/* 17. FREQUENTLY ASKED */}
      <TrademarkFaqSection />
    </div>
  );
}
