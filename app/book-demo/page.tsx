import {
  HeroSection,
  WhatYouSeeSection,
  ProductPreviewSection,
  TailorDemoSection,
  TrustSection,
  FAQSection,
} from "@/components/book-demo";

export default function BookDemoPage() {
  return (
    <main>
      <HeroSection />
      <WhatYouSeeSection />
      <ProductPreviewSection />
      <TailorDemoSection />
      <TrustSection />
      <FAQSection />
    </main>
  );
}
