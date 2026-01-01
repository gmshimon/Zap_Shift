"use client";

import { useState } from "react";

type TabKey = "story" | "mission" | "success" | "team";

type TabContent = {
  key: TabKey;
  label: string;
  summary: string;
  paragraphs: string[];
  stats: { label: string; value: string }[];
  focus: string[];
};

const tabs: TabContent[] = [
  {
    key: "story",
    label: "Story",
    summary: "How we began and why we still obsess over on-time delivery.",
    paragraphs: [
      "We started with a simple promise: make parcel delivery fast, reliable, and stress-free. Years later, that promise still shapes how we hire riders, build routes, and measure success.",
      "Our local teams and smart routing keep deliveries on schedule while real-time tracking keeps senders and receivers informed at every step.",
      "Whether it is a personal gift or a time-sensitive business shipment, we treat every handoff as critical and improve constantly based on rider feedback and customer scorecards.",
    ],
    stats: [
      { label: "On-time deliveries", value: "98%" },
      { label: "Avg. response time", value: "5 min" },
      { label: "Weekly parcels moved", value: "12K+" },
    ],
    focus: [
      "Clear tracking updates so customers never wonder where a parcel is.",
      "Friendly, trained riders who handle packages with care.",
      "Fast support that fixes issues before they become problems.",
    ],
  },
  {
    key: "mission",
    label: "Mission",
    summary: "Our purpose and the standards we hold ourselves to.",
    paragraphs: [
      "Our mission is to connect people and businesses with delivery that feels effortless. Speed matters, but so does confidence at every mile.",
      "We design every process around transparency: real-time visibility, proactive communication, and a support team you can reach quickly.",
      "We reinvest in rider safety, training, and tools so we can keep improving service while staying responsible to the communities we serve.",
    ],
    stats: [
      { label: "Cities served", value: "50+" },
      { label: "Repeat senders", value: "76%" },
      { label: "Safety training hours", value: "1.2K/yr" },
    ],
    focus: [
      "Build trust with predictable pickup and drop windows.",
      "Operate responsibly with efficient routes and less waste.",
      "Listen first, then ship better with every release and training cycle.",
    ],
  },
  {
    key: "success",
    label: "Success",
    summary: "Moments we are proud of and how we measure progress.",
    paragraphs: [
      "Consistency is our best marketing. Hitting delivery promises month after month is how we earned the loyalty of thousands of senders.",
      "Operational playbooks keep us steady even when volume spikes. We review misses weekly and fix root causes, not just symptoms.",
      "We celebrate wins like new coverage zones and happier receivers, but success to us is a steady curve of better service and faster answers.",
    ],
    stats: [
      { label: "Customer CSAT", value: "4.8/5" },
      { label: "Pickup reliability", value: "97%" },
      { label: "New zones 2024", value: "18" },
    ],
    focus: [
      "Keep commitments realistic, then beat them.",
      "Use data to prevent delays, not just report them.",
      "Keep humans in the loop for empathy where it matters.",
    ],
  },
  {
    key: "team",
    label: "Team & Others",
    summary: "The people and partners who make delivery smooth.",
    paragraphs: [
      "Our riders, support specialists, and ops leads work together to keep every handoff smooth. Training and mentorship keep skills sharp.",
      "We partner with local hubs for faster pickups and greener last-mile routes, sharing standards so customers get a consistent experience.",
      "Culture-wise, we value candor and care. When teams feel supported, customers feel it in every interaction.",
    ],
    stats: [
      { label: "People across teams", value: "450+" },
      { label: "Average tenure", value: "3.2 yrs" },
      { label: "Local partners", value: "120+" },
    ],
    focus: [
      "Invest in rider safety gear and fair routes.",
      "Grow leaders from within through coaching and clear paths.",
      "Partner only with hubs that match our service standards.",
    ],
  },
];

const AboutPage = () => {
  const [activeTab, setActiveTab] = useState<TabKey>("story");
  const content = tabs.find((tab) => tab.key === activeTab) ?? tabs[0];

  return (
    <section>
      <div className="relative overflow-hidden rounded-3xl border border-white/60 bg-white ">
        <div className="relative px-6 py-10 sm:px-10 lg:px-12 lg:py-14">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
            <div className="max-w-3xl space-y-3">
              <h1 className="text-3xl font-semibold text-slate-900 sm:text-4xl lg:text-5xl">
                About Us
              </h1>
              <p className="text-sm text-slate-600 sm:text-base">
                Enjoy fast, reliable parcel delivery with real-time tracking and zero hassle. From
                personal packages to business shipments, we deliver on time, every time.
              </p>
              <div className="flex flex-wrap gap-2 text-xs font-semibold uppercase tracking-[0.16em] text-slate-500">
                <span className="rounded-full bg-slate-100 px-3 py-1 text-slate-700">
                  Real-time tracking
                </span>
                <span className="rounded-full bg-slate-100 px-3 py-1 text-slate-700">
                  Customer-first
                </span>
                <span className="rounded-full bg-slate-100 px-3 py-1 text-slate-700">
                  Nationwide reach
                </span>
              </div>
            </div>
          </div>

          <div className="mt-10 space-y-8 sm:mt-12">
            <div className="overflow-x-auto">
              <div className="flex min-w-[320px] items-center gap-3 border-b border-slate-200 pb-3">
                {tabs.map((tab) => {
                  const isActive = tab.key === activeTab;
                  return (
                    <button
                      key={tab.key}
                      type="button"
                      aria-pressed={isActive}
                      onClick={() => setActiveTab(tab.key)}
                      className={`whitespace-nowrap rounded-2xl px-4 py-2 text-sm font-semibold transition ${
                        isActive
                          ? "bg-[#b6d35e] text-slate-900 shadow-sm shadow-lime-500/30"
                          : "text-slate-500 hover:bg-slate-50 hover:text-slate-800"
                      }`}
                    >
                      {tab.label}
                    </button>
                  );
                })}
              </div>
            </div>

            <div className="grid gap-8 lg:grid-cols-[1.2fr,0.9fr] lg:items-start">
              <div className="space-y-6">
                <p className="text-sm font-semibold uppercase tracking-[0.12em] text-lime-700">
                  {content.summary}
                </p>
                <div className="space-y-5 text-base leading-relaxed text-slate-700">
                  {content.paragraphs.map((paragraph, index) => (
                    <p key={index} className="rounded-2xl bg-slate-50/80 px-4 py-3">
                      {paragraph}
                    </p>
                  ))}
                </div>
                <div className="grid gap-3 sm:grid-cols-2">
                  {content.focus.map((item) => (
                    <div
                      key={item}
                      className="flex items-start gap-3 rounded-2xl border border-slate-100 bg-white/80 p-4 shadow-sm shadow-slate-900/5"
                    >
                      <span className="mt-1 inline-flex h-6 w-6 items-center justify-center rounded-full bg-[#b6d35e]/20 text-xs font-semibold text-slate-900">
                        ✓
                      </span>
                      <p className="text-sm text-slate-700">{item}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutPage;
