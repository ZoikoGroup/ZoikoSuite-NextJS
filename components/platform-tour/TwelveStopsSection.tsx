"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronRight, ArrowRight, ChevronDown, Check } from "lucide-react";

export default function TwelveStopsSection() {
  const [showExplanation, setShowExplanation] = useState(false);

  return (
    <section id="guided-tour" className="w-full bg-white text-[#0f172a] py-14 lg:py-20 px-6 lg:px-20 flex justify-center">
      <div className="max-w-[1240px] w-full flex flex-col">
        {/* Mobile Tour Path Banner */}
        <div className="lg:hidden w-full mb-8 bg-[#fdfaf3] border border-[#d8b568] rounded-xl p-4 flex items-center justify-between gap-3 shadow-xs">
          <div className="flex items-center gap-2">
            <span className="text-[10px] font-mono font-bold tracking-[0.12em] text-[#a87a22] uppercase">
              ACTIVE TOUR PATH
            </span>
            <span className="text-xs text-[#526471]">
              Full platform Tour (12 stops)
            </span>
          </div>
          <a
            href="#choose-tour-path"
            className="px-3.5 py-1.5 rounded-full bg-[#0f476a] text-white text-[11px] font-semibold hover:bg-[#0c3955] transition-colors shrink-0 shadow-xs"
          >
            Switch path
          </a>
        </div>

        {/* Header Grid: Left Eyebrow & Title, Right Explanation */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start mb-8 lg:mb-12">
          {/* Left Column: Eyebrow + Title */}
          <div className="lg:col-span-6 flex flex-col">
            <div className="flex items-center gap-2 mb-3">
              <span className="w-5 h-[2px] bg-[#c5a059]" />
              <span className="text-[10.5px] font-semibold tracking-[0.2em] text-[#c5a059] uppercase">
                GUIDED TOUR
              </span>
            </div>
            <h2 className="text-2xl sm:text-4xl lg:text-[40px] font-bold text-[#08222F] tracking-tight leading-[1.15]">
              Twelve stops, one action
            </h2>
          </div>

          {/* Right Column: Explanatory paragraph */}
          <div className="lg:col-span-6 flex items-center lg:pt-3">
            <p className="text-[#566573] text-[13.5px] sm:text-sm leading-relaxed max-w-[500px]">
              Every stop states what it proves, which fields to inspect, and
              where its boundary lies. All twelve summaries and transcripts are
              present on this page whether or not JavaScript is enabled.
            </p>
          </div>
        </div>

        {/* Desktop View: Large 12 Stops Isometric Panorama Graphic (unchanged) */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="hidden lg:block w-full rounded-2xl overflow-hidden border border-[#dce6ec] bg-[#f9fbfd] shadow-sm"
        >
          <Image
            src="/platform-tour/pt3.png"
            alt="Twelve stops of the governed business operations platform tour"
            width={1256}
            height={652}
            className="w-full h-auto object-contain block"
          />
        </motion.div>

        {/* Mobile View: Interactive Guided Step Card matching reference */}
        <div className="lg:hidden w-full flex flex-col rounded-2xl border border-[#d6e2e9] bg-white overflow-hidden shadow-md">
          {/* Top Bar with Step, Time & Actions */}
          <div className="flex flex-wrap items-center justify-between gap-2 px-4 py-3 bg-[#08222F] text-white">
            <div className="flex items-center gap-2">
              <span className="text-[11px] font-mono text-[#8fa7b7]">
                09:41
              </span>
              <span className="text-[10px] font-mono text-[#4ba2d2] font-semibold tracking-[0.1em] uppercase">
                STOP 1 OF 12
              </span>
              <span className="text-xs font-semibold text-white">
                Command Center
              </span>
            </div>
            <div className="flex items-center gap-1.5">
              <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full border border-[#d8b568] bg-[#1a2f3a] text-[9px] font-mono font-bold text-[#e6c173] uppercase">
                <span className="w-1 h-1 rounded-full bg-[#e6c173]" />
                SYNTHETIC TOUR – NO LIVE DATA
              </span>
              <button className="px-2 py-0.5 rounded border border-[#2b4c62] text-[10px] font-mono text-[#9bb3c4] hover:bg-[#123146]">
                Tour map
              </button>
              <button className="px-2 py-0.5 rounded border border-[#2b4c62] text-[10px] font-mono text-[#9bb3c4] hover:bg-[#123146]">
                Exit
              </button>
            </div>
          </div>

          {/* Subheading & Objective Text */}
          <div className="p-4 sm:p-5 border-b border-[#eef2f5]">
            <div className="flex items-center gap-2 mb-1.5">
              <span className="text-[10.5px] font-mono font-bold text-[#a67a24] uppercase tracking-wider">
                STOP 01
              </span>
              <span className="text-sm font-bold text-[#08222F]">
                Command Center
              </span>
            </div>
            <p className="text-xs text-[#526471] leading-relaxed">
              Ensure enterprise scope and context. Follow action arrivals across four functions and two entities, with its priority visible in real time.
            </p>
          </div>

          {/* Interactive Inner Mock Screen Terminal (ZoikoSuite Command Center) */}
          <div className="p-4 bg-[#f8fafc] border-b border-[#eef2f5]">
            <div className="rounded-xl overflow-hidden border border-[#213f52] bg-[#0c1f2b] shadow-sm">
              {/* Terminal Title Bar */}
              <div className="flex items-center justify-between px-3.5 py-2 bg-[#0e2736] border-b border-[#1b3546]">
                <span className="text-[9.5px] font-mono tracking-wider text-[#557b91] uppercase">
                  ZOIKO - COMMAND CENTER • ENTERPRISE OPERATIONS
                </span>
                <div className="flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#3d5d70]" />
                  <span className="w-1.5 h-1.5 rounded-full bg-[#3d5d70]" />
                  <span className="w-1.5 h-1.5 rounded-full bg-[#3d5d70]" />
                </div>
              </div>

              {/* Filter Tabs */}
              <div className="flex items-center gap-2 p-2.5 bg-white border-b border-[#e5ecf0] overflow-x-auto text-[10.5px]">
                <span className="px-2.5 py-1 rounded bg-[#eef3f6] text-[#08222F] font-semibold border border-[#d6e2e9]">
                  ALL • NorthStar Holdings
                </span>
                <span className="px-2.5 py-1 rounded bg-white text-[#64748b] border border-[#e5ecf0]">
                  ENT-UK • UK Ltd
                </span>
                <span className="px-2.5 py-1 rounded bg-white text-[#64748b] border border-[#e5ecf0]">
                  SCOPE: GLOBAL OPS
                </span>
              </div>

              {/* Command Center Action Table */}
              <div className="overflow-x-auto bg-white">
                <table className="w-full min-w-[560px] text-left border-collapse text-[11px]">
                  <thead>
                    <tr className="border-b border-[#eef2f5] bg-[#fafcfe] text-[9.5px] font-mono uppercase text-[#738896]">
                      <th className="py-2 px-3 font-semibold">ACTION ID</th>
                      <th className="py-2 px-3 font-semibold">OBJECT</th>
                      <th className="py-2 px-3 font-semibold">ENTITY</th>
                      <th className="py-2 px-3 font-semibold">OWNER</th>
                      <th className="py-2 px-3 font-semibold">DUE</th>
                      <th className="py-2 px-3 font-semibold">PROGRESS</th>
                      <th className="py-2 px-3 font-semibold">STATUS</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-[#edf2f6]">
                    {/* Active highlighted row: ACT-001 */}
                    <tr className="bg-[#fefbf3] font-medium text-[#08222F]">
                      <td className="py-2.5 px-3">
                        <span className="inline-block px-1.5 py-0.5 rounded border border-[#e8bf6a] bg-[#faedd0] font-mono text-[10px] text-[#a06810] font-bold">
                          ACT-001
                        </span>
                        <div className="text-[9px] text-[#8c9ba5] font-normal">HIGH RISK</div>
                      </td>
                      <td className="py-2.5 px-3">
                        <div className="font-semibold text-[#08222F]">Supplier bank detail change</div>
                        <div className="text-[9px] text-[#738896]">PAY-1002 • Acme Ind</div>
                      </td>
                      <td className="py-2.5 px-3 text-[#526471]">NorthStar UK Ltd</td>
                      <td className="py-2.5 px-3 text-[#526471]">D. Taylor</td>
                      <td className="py-2.5 px-3 font-mono text-[10px] text-[#738896]">
                        11 Aug 17:00
                      </td>
                      <td className="py-2.5 px-3">
                        <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded bg-[#faedd0] text-[#a06810] text-[9.5px] font-semibold">
                          ▲ 2 of 4 done
                        </span>
                      </td>
                      <td className="py-2.5 px-3">
                        <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded border border-[#b2ddca] bg-[#eef8f3] text-[#1b7952] text-[9.5px] font-bold">
                          ● RUNNING
                        </span>
                      </td>
                    </tr>

                    {/* Row 2: ACT-002 */}
                    <tr className="text-[#334756] hover:bg-[#fafcfe]">
                      <td className="py-2 px-3">
                        <span className="inline-block px-1.5 py-0.5 rounded border border-[#d6e2e9] bg-[#f1f5f8] font-mono text-[10px] text-[#526471]">
                          ACT-002
                        </span>
                      </td>
                      <td className="py-2 px-3">VAT Return presentation</td>
                      <td className="py-2 px-3 text-[#64748b]">NorthStar EU BV</td>
                      <td className="py-2 px-3 text-[#64748b]">J. Talbot</td>
                      <td className="py-2 px-3 font-mono text-[10px] text-[#8c9ba5]">12 Aug</td>
                      <td className="py-2 px-3">
                        <span className="text-[9.5px] text-[#1b7952] font-semibold">✓ Complete</span>
                      </td>
                      <td className="py-2 px-3">
                        <span className="text-[9.5px] text-[#1b7952] font-semibold">● ACTIVE</span>
                      </td>
                    </tr>

                    {/* Row 3: ACT-003 */}
                    <tr className="text-[#334756] hover:bg-[#fafcfe]">
                      <td className="py-2 px-3">
                        <span className="inline-block px-1.5 py-0.5 rounded border border-[#d6e2e9] bg-[#f1f5f8] font-mono text-[10px] text-[#526471]">
                          ACT-003
                        </span>
                      </td>
                      <td className="py-2 px-3">Aggregated payroll update</td>
                      <td className="py-2 px-3 text-[#64748b]">NorthStar UK Ltd</td>
                      <td className="py-2 px-3 text-[#64748b]">M. Vance</td>
                      <td className="py-2 px-3 font-mono text-[10px] text-[#8c9ba5]">14 Aug</td>
                      <td className="py-2 px-3">
                        <span className="text-[9.5px] text-[#1b7952] font-semibold">✓ In progress</span>
                      </td>
                      <td className="py-2 px-3">
                        <span className="text-[9.5px] text-[#a06810] font-semibold">● REVIEW</span>
                      </td>
                    </tr>

                    {/* Row 4: ACT-004 */}
                    <tr className="text-[#334756] hover:bg-[#fafcfe]">
                      <td className="py-2 px-3">
                        <span className="inline-block px-1.5 py-0.5 rounded border border-[#d6e2e9] bg-[#f1f5f8] font-mono text-[10px] text-[#526471]">
                          ACT-004
                        </span>
                      </td>
                      <td className="py-2 px-3">Capital asset asset check</td>
                      <td className="py-2 px-3 text-[#64748b]">UK Global Logistics Dev Ltd</td>
                      <td className="py-2 px-3 text-[#64748b]">G. Sanders</td>
                      <td className="py-2 px-3 font-mono text-[10px] text-[#8c9ba5]">15 Aug</td>
                      <td className="py-2 px-3">
                        <span className="text-[9.5px] text-[#1b7952] font-semibold">✓ Complete</span>
                      </td>
                      <td className="py-2 px-3">
                        <span className="text-[9.5px] text-[#1b7952] font-semibold">● CLEAR</span>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>

              {/* Table Note */}
              <div className="p-2.5 bg-white border-t border-[#edf2f6]">
                <p className="text-[9px] font-mono text-[#8c9ba5]">
                  All synthetic items, timestamps or counterparty data appear as mock signs; differing on a single tour action.
                </p>
              </div>
            </div>
          </div>

          {/* Three Interactive Feature Checks */}
          <div className="p-4 sm:p-5 flex flex-col gap-2.5 border-b border-[#eef2f5]">
            <div className="flex items-start gap-3 p-2.5 rounded-xl border border-[#e2edf3] bg-[#f7fbfd]">
              <span className="w-5 h-5 rounded-md bg-[#0f476a] text-white flex items-center justify-center shrink-0 mt-0.5">
                <Check className="w-3 h-3 stroke-[2.5]" />
              </span>
              <div>
                <h5 className="text-xs font-bold text-[#08222F]">Inspect action priority status</h5>
                <p className="text-[11px] text-[#64748b]">Four distinct active items across different enterprise units.</p>
              </div>
            </div>

            <div className="flex items-start gap-3 p-2.5 rounded-xl border border-[#e2edf3] bg-[#f7fbfd]">
              <span className="w-5 h-5 rounded-md bg-[#0f476a] text-white flex items-center justify-center shrink-0 mt-0.5">
                <Check className="w-3 h-3 stroke-[2.5]" />
              </span>
              <div>
                <h5 className="text-xs font-bold text-[#08222F]">View governance progress</h5>
                <p className="text-[11px] text-[#64748b]">Events, owners and due dates update as operations proceed.</p>
              </div>
            </div>

            <div className="flex items-start gap-3 p-2.5 rounded-xl border border-[#e2edf3] bg-[#f7fbfd]">
              <span className="w-5 h-5 rounded-md bg-[#0f476a] text-white flex items-center justify-center shrink-0 mt-0.5">
                <Check className="w-3 h-3 stroke-[2.5]" />
              </span>
              <div>
                <h5 className="text-xs font-bold text-[#08222F]">Contextual details</h5>
                <p className="text-[11px] text-[#64748b]">Filterable metrics and structured live notes.</p>
              </div>
            </div>
          </div>

          {/* Golden Explanatory Card (WHAT THIS PROVES) */}
          <div className="p-4 sm:p-5 bg-[#fdfaf3] border-b border-[#ecd7a9]">
            <div className="text-[10px] font-mono font-bold uppercase tracking-wider text-[#a87a22] mb-1.5">
              WHAT THIS PROVES
            </div>
            <p className="text-xs text-[#526471] leading-relaxed mb-3 font-medium">
              Real-time enterprise overview with entity and function context across governance layers. Each path start establishes boundary context before execution steps can proceed.
            </p>
            <div className="text-[10.5px] font-semibold text-[#08222F] mb-1.5">
              FIELDS TO INSPECT:
            </div>
            <ul className="flex flex-col gap-1 text-[11px] text-[#566573] mb-3 list-disc pl-4">
              <li>Priority indicator for material actions</li>
              <li>Elapsed vs due timestamps</li>
              <li>Two distinct assigned enterprise owners</li>
              <li>Progress meter vs documented requirements</li>
            </ul>

            {/* Red Warning Boundary Note */}
            <div className="p-2.5 rounded-lg bg-[#fef2f2] border border-[#fecaca] text-[10.5px] text-[#b91c1c] leading-relaxed mb-3">
              <span className="font-bold">BOUNDARY:</span> Not dynamic client data or live cloud systems; fully mock data created for safe synthetic tour playback only.
            </div>

            <a
              href="/platform-overview"
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#0f476a] hover:underline"
            >
              <span>Operating intelligence</span>
              <ArrowRight className="w-3 h-3" />
            </a>
          </div>

          {/* View Transcript Accordion Toggle */}
          <div className="p-4 border-b border-[#eef2f5]">
            <button
              onClick={() => setShowExplanation(!showExplanation)}
              className="flex items-center gap-2 text-xs font-semibold text-[#08222F] hover:text-[#0f476a] cursor-pointer"
            >
              <ChevronDown
                className={`w-3.5 h-3.5 transition-transform duration-200 ${
                  showExplanation ? "rotate-180" : ""
                }`}
              />
              <span>View transcript</span>
            </button>
            <AnimatePresence>
              {showExplanation && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  className="overflow-hidden pt-3 text-[11.5px] font-mono text-[#526471] bg-[#fafcfe] p-3 rounded-lg border border-[#e5ecf0] mt-2"
                >
                  <p>
                    [09:41:02] Command Center initialized with scope: NorthStar Holdings (GRP-HLD-001).
                    <br />
                    [09:41:15] Action ACT-001 flagged as Priority 1 (Bank Detail Revision).
                    <br />
                    [09:41:28] Contextual bindings verified: ENT-UK-001, Accounts Payable.
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Bottom Stepper Actions: Previous Stop / Next Stop / Jump Dropdown */}
          <div className="p-4 sm:p-5 bg-white flex flex-col sm:flex-row items-center justify-between gap-3 border-b border-[#eef2f5]">
            <div className="flex items-center gap-2 w-full sm:w-auto">
              <button
                disabled
                className="px-4 py-2 rounded-full border border-[#d6e2e9] text-xs font-semibold text-[#a0b0bb] cursor-not-allowed"
              >
                Previous stop
              </button>
              <button className="px-5 py-2 rounded-full bg-[#0f476a] text-white text-xs font-semibold hover:bg-[#0c3955] transition-colors shadow-xs">
                Next stop
              </button>
              <select className="px-3 py-2 rounded-full border border-[#d6e2e9] text-xs font-semibold text-[#526471] bg-white">
                <option>Jump to stop</option>
                <option>Stop 1 - Command Center</option>
                <option>Stop 2 - Context Resolution</option>
                <option>Stop 3 - Policy Evaluation</option>
              </select>
            </div>
            <span className="text-[10px] text-[#8c9ba5] font-mono text-center sm:text-right">
              All twelve stops stay reachable from the Tour Map, whichever path you pick.
            </span>
          </div>

          {/* Stepper Footer Summary Bar */}
          <div className="px-4 py-3 bg-[#f8fafc] flex items-center justify-between text-[10px] font-mono text-[#64748b]">
            <div>
              <span className="font-semibold text-[#08222F]">STOP 1 OF 12</span> • TOPIC: ENTERPRISE OVERVIEW
            </div>
            <div className="flex items-center gap-2">
              <button className="hover:text-[#08222F]">Tour map</button>
              <span>•</span>
              <button className="hover:text-[#08222F]">Restart</button>
              <span>•</span>
              <button className="hover:text-[#08222F]">View all stops</button>
            </div>
          </div>
        </div>

        {/* Bottom Disclaimer on Mobile */}
        <p className="lg:hidden text-[9.5px] text-[#8c9ba5] leading-relaxed mt-4">
          Every step is reproducible in a sandboxed synthetic environment; no live customer systems or records are contacted. Inspect each stop to review exact inputs, policy definitions and audit manifest outputs.
        </p>
      </div>
    </section>
  );
}
