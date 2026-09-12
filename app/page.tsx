import type { Metadata } from "next";

import HomePage from "./home/page";

export const metadata: Metadata = {
  title: "ZoikoSuite | AI Accounting & Global Compliance Software",
  description:
    "ZoikoSuite is AI Accounting & Global Compliance Software for multi-jurisdiction operations, offering secure, audit-ready accounting, HR, payroll and tax.",
};

export default function Home() {
  return (
    <main>
      <HomePage />
    </main>
  );
}
