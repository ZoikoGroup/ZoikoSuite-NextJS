import React from "react";

import {
  Hero,
  CommonTasks,
  ByDomain,
  TaskAndType,
  Library,
  ArticleTemplate,
  Currentness,
  RelatedSupport,
  EvaluatingZoikoSuite,
  FAQ,
} from "@/components/knowledge-base";

export default function Page() {
  return (
    <main>
      <Hero />
      <CommonTasks />
      <ByDomain />
      <TaskAndType />
      <Library />
      <ArticleTemplate />
      <Currentness />
      <RelatedSupport />
      <EvaluatingZoikoSuite />
      <FAQ />
    </main>
  );
}