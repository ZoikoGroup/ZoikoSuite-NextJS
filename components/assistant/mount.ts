// Where the ZoikoSuite Assistant appears on the public website, and the page
// context it sends.
//
// It is the anonymous public assistant (Docs 01-11): it calls the site's own
// /public-ai/v1/* (app/public-ai/v1/[...path]/route.ts) with credentials
// "omit", never reads cookies, the page's DOM or the visitor's account, and
// account or live-platform questions are refused (Doc 02 X01).
//
// It shows on every public page except the credential forms: a chat beside a
// password field invites pasting secrets (Doc 06 §20, Doc 02 T17).

export const EXCLUDED_PATHS = ["/sign-in", "/sign-up"];

// Doc 02 §22 page families, by the page's first path segment. The service
// accepts only these values (Doc 05 page_context enum); anything else is
// "other", which opens with the four Homepage chips. Never the raw URL.
const PAGE_CONTEXT: Record<string, string> = {
  "": "home",
  home: "home",
  pricing: "pricing",
  // Platform / capabilities
  platform: "core_modules",
  "platform-overview": "core_modules",
  "platform-foundation": "core_modules",
  "platform-tour": "core_modules",
  "core-modules": "core_modules",
  "governance-platform": "core_modules",
  "governed-business-operations": "core_modules",
  "how-it-works": "core_modules",
  "evidence-architecture": "core_modules",
  "workforce-and-payroll": "core_modules",
  // Trust / security
  trust: "trust",
  "trust-center": "trust",
  "trust-policies": "trust",
  "trust-system-status": "trust",
  "security-overview": "trust",
  certifications: "trust",
  "data-residency": "trust",
  "privacy-architecture": "trust",
  "privacy-data-protection": "trust",
  "subprocessor-list": "trust",
  dpa: "trust",
  // Support Center
  "support-center": "support",
  "knowledge-base": "support",
  documentation: "support",
  "regional-support": "support",
  // Demo
  "book-demo": "demo",
  "enterprise-sales": "demo",
  "european-enterprise-sales": "demo",
};

export function isAssistantPath(pathname: string, excluded: string[] = EXCLUDED_PATHS): boolean {
  if (!pathname.startsWith("/")) return false;
  return !excluded.some((p) => pathname === p || pathname.startsWith(`${p}/`));
}

export function pageContextFor(pathname: string): string {
  const first = pathname.replace(/^\/+/, "").split("/")[0] ?? "";
  return PAGE_CONTEXT[first] ?? "other";
}
