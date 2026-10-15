
"use client";

import { useState } from "react";

type Project = {
  number: string;
  name: string;
  category: string;
  description: string;
  tools: string[];
  documentationUrl: string;
};

const projects: Project[] = [
  {
    number: "01",
    name: "ResponseOne DevSecOps & SOAR",
    category: "DEVSECOPS / AUTOMATION",
    description:
      "A security pipeline integrating code analysis, dependency scanning, secret detection, web application testing and automated security alert delivery.",
    tools: [
      "GitHub Actions",
      "Semgrep",
      "Trivy",
      "Gitleaks",
      "OWASP ZAP",
      "Shuffle SOAR",
    ],
    documentationUrl: "", // Paste your Notion URL here
  },
  {
    number: "02",
    name: "Email(Forensic) Analysis",
    category: "THREAT INVESTIGATION",
    description:
      "An investigation into suspicious email indicators, supporting evidence analysis and security awareness recommendations. A 3-email phishing campaign was detected targeting the Finance department. All three emails were sent from the same source IP (185.234.219.101) using spoofed domains to impersonate the CFO and a vendor. ",
    tools: ["Email Headers", "Email Forensics", "Security Analysis"],
    documentationUrl: "https://app.notion.com/p/EMAIL-FORENSIC-ANALYSIS-3797b326d5b680d0b3eddc5e38efa7f5?source=copy_link",
  },
  {
    number: "03",
    name: "Vulnerability Assessment",
    category: "VULNERABILITY MANAGEMENT",
    description:
      "This project presents the findings of a vulnerability assessment conducted on the internal infrastructure of CyberTech Solutions. The assessment was carried out using Nessus Essentials and covered two scan types: a credentialed SSH scan targeting the Linux server, and a web application scan targeting the Nginx web server running on the same host. Patch management was subsequently performed using Ansible to remediate the most critical findings.",
    tools: ["Nessus", "Kali Linux", "Ansible", "Nginx"],
    documentationUrl: "https://app.notion.com/p/VULNERABILITY-MANAGEMENT-3617b326d5b680288636f47bea354954?source=copy_link",
  },
  {
    number: "04",
    name: "Audio Forensics: Operation CTF",
    category: "DIGITAL FORENSICS",
    description:
      "This project presents a digital audio-forensics investigation conducted to identify hidden information embedded within a WAV audio recording. The investigation was motivated by the challenge clue, “Not everything hidden makes a sound,” which indicated that the relevant information might not be detectable through conventional audio playback. The analysis therefore focused on examining the audio in both the time and frequency domains.",
    tools: ["Python", "Spectrogram Analysis", "Audio Analysis", "Technical Reporting"],
    documentationUrl: "https://app.notion.com/p/AUDIO-FORENSIC-3bc7b326d5b680da8719d023a7a21799?source=copy_link",
  },
  {
    number: "05",
    name: "Malware Analysis",
    category: "THREAT INVESTIGATION",
    description:
      "A Static and Dynamic(behavioral) analysis of an executable discovered on a corporate workstation in the Lending Division inside a sandbox environment, revealed AgentTesla as the Trojan and infostealer.",
    tools: ["ANY.RUN", "RedLine", "FakeNet-NG"],
    documentationUrl: "https://app.notion.com/p/AUDIO-FORENSIC-3bc7b326d5b680da8719d023a7a21799?source=copy_link",
  },
  {
    number: "06",
    name: "Phishing Simulation & Awareness",
    category: "AWARENESS AND RISK ASSESSMENT",
    description:
      "The Jumia Package Delivery campaign — impersonating a trusted Nigerian logistics brand (GIG Logistics) — achieved the highest interaction of the three simulations run, confirming delivery-themed lures remain highly effective. Encouragingly, no participant across any campaign submitted credentials. However, the platform still classified the group as High Risk, since clicking alone can enable malware delivery, session hijacking, and C2 communication without any credential exposure.",
    tools: ["herculessuite.io"],
    documentationUrl: "https://app.notion.com/p/AUDIO-FORENSIC-3bc7b326d5b680da8719d023a7a21799?source=copy_link",
  },
  {
    number: "07",
    name: "Threat Intelligence",
    category: "THREAT INVESTIGATION & HUNTING",
    description:
      "Findings of a structured threat intelligence exercise conducted using MISP, deployed via Docker. Using MISP's tagging, event correlation, and attribute search capabilities, IOCs associated with Callisto were systematically collected and analyzed; covering IP addresses, domains, file hashes, and malware names linked to the group..",
    tools: ["Kali-Linux", "MISP", "Docker"],
    documentationUrl: "https://app.notion.com/p/THREAT-INTELLIGENCE-34d7b326d5b680d194abf0fe0fb847cc?source=copy_link",
  },
   {
    number: "08",
    name: "Endpoint Protection, Vulnerability Management & Automated Remediation",
    category: "EDR & VULNERABILITY MANAGEMENT",
    description:
      "Eliminating enterprise visibility gaps, address widespread software vulnerabilities, establish automated patch deployment pipelines, and institute real-time threat monitoring across geographically dispersed branch offices, specifically covering the Head Office, Lagos Office, and Abuja Office.",
    tools: ["Action1", "Wazuh", "Zerotier"],
    documentationUrl: "https://app.notion.com/p/ENDPOINT-PROTECTION-VULNERABILITY-MANAGEMENT-AND-AUTOMATED-REMEDIATION-3c47b326d5b6809fa76ed5eb08ecd21d?source=copy_link",
  },
];

export default function Projects() {
  const [flippedProjects, setFlippedProjects] = useState<string[]>([]);

  function toggleCard(number: string) {
    setFlippedProjects((current) =>
      current.includes(number)
        ? current.filter((item) => item !== number)
        : [...current, number]
    );
  }

  return (
    <section
      id="projects"
      className="scroll-mt-24 px-4 py-14 sm:px-6 lg:px-8"
    >
      <div className="mx-auto max-w-7xl">
        <div className="mb-8">
          <p className="mb-2 text-xs font-semibold uppercase tracking-[0.28em] text-emerald-400">
            Practical Experience
          </p>

          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Featured <span className="text-blue-400">Projects</span>
          </h2>

          <p className="mt-3 max-w-2xl text-sm leading-6 text-slate-400 sm:text-base">
            Explore my hands-on security projects, tools and technical
            documentation.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-3">
          {projects.map((project) => {
            const isFlipped = flippedProjects.includes(project.number);

            return (
              <div
                key={project.number}
                className="h-[310px] [perspective:1200px]"
              >
                <div
                  className={`relative h-full w-full rounded-2xl transition-transform duration-700 [transform-style:preserve-3d] ${
                    isFlipped ? "[transform:rotateY(180deg)]" : ""
                  }`}
                >
                  {/* FRONT OF CARD */}
                  <button
                    type="button"
                    onClick={() => toggleCard(project.number)}
                    aria-label={`View details for ${project.name}`}
                    aria-pressed={isFlipped}
                    className="absolute inset-0 flex h-full w-full flex-col justify-between overflow-hidden rounded-2xl border border-slate-700/70 bg-slate-900/90 p-5 text-left shadow-lg transition-colors hover:border-blue-400/50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 [backface-visibility:hidden]"
                  >
                    <div className="absolute -right-10 -top-10 h-36 w-36 rounded-full bg-blue-500/[0.08] blur-2xl" />

                    <div className="relative flex items-center justify-between">
                      <span className="flex h-11 w-11 items-center justify-center rounded-xl border border-blue-400/20 bg-blue-400/10 text-blue-300">
                        <svg
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="1.6"
                          className="h-6 w-6"
                          aria-hidden="true"
                        >
                          <path
                            d="M12 3 20 6v5c0 5-3.5 8.5-8 10-4.5-1.5-8-5-8-10V6l8-3Z"
                            strokeLinejoin="round"
                          />
                          <path
                            d="m9 12 2 2 4-4"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </span>

                      <span className="text-xs font-medium tracking-widest text-slate-500">
                        PROJECT {project.number}
                      </span>
                    </div>

                    <div className="relative my-5">
                      <p className="mb-3 text-[10px] font-semibold tracking-[0.18em] text-emerald-400">
                        {project.category}
                      </p>

                      <h3 className="text-xl font-bold leading-7 text-white">
                        {project.name}
                      </h3>
                    </div>

                    <div className="relative flex items-center justify-between border-t border-slate-800 pt-4">
                      <span className="text-sm font-medium text-blue-300">
                        Tap to view
                      </span>
                      <span className="text-lg text-emerald-400" aria-hidden="true">
                        ↗
                      </span>
                    </div>
                  </button>

                  {/* BACK OF CARD */}
                  <div
                    aria-hidden={!isFlipped}
                    className="absolute inset-0 flex h-full flex-col overflow-hidden rounded-2xl border border-blue-400/30 bg-slate-900 p-5 shadow-lg [transform:rotateY(180deg)] [backface-visibility:hidden]"
                  >
                    <div className="mb-3 flex items-center justify-between gap-2">
                      <span className="text-[10px] font-semibold tracking-[0.16em] text-emerald-400">
                        PROJECT OVERVIEW
                      </span>

                      <button
                        type="button"
                        onClick={() => toggleCard(project.number)}
                        aria-label={`Flip ${project.name} back`}
                        tabIndex={isFlipped ? 0 : -1}
                        className="rounded-md px-2 py-1 text-xs text-slate-400 transition hover:bg-slate-800 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400"
                      >
                        ↩ Back
                      </button>
                    </div>

                    <h3 className="text-lg font-bold leading-6 text-white">
                      {project.name}
                    </h3>

                    <p className="mt-2 flex-1 overflow-y-auto text-xs leading-5 text-slate-400">
                      {project.description}
                    </p>

                    <div className="mb-4 mt-3">
                      <p className="mb-2 text-[10px] font-semibold uppercase tracking-widest text-slate-500">
                        Tools used
                      </p>

                      <div className="flex flex-wrap gap-1.5">
                        {project.tools.map((tool) => (
                          <span
                            key={tool}
                            className="rounded-md border border-blue-400/15 bg-blue-400/[0.07] px-2 py-1 text-[10px] text-blue-200"
                          >
                            {tool}
                          </span>
                        ))}
                      </div>
                    </div>

                    {project.documentationUrl.trim() ? (
                      <a
                        href={project.documentationUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        tabIndex={isFlipped ? 0 : -1}
                        onClick={(event) => event.stopPropagation()}
                        className="flex w-full items-center justify-center gap-2 rounded-lg bg-blue-600 px-3 py-3 text-center text-xs font-semibold text-white transition hover:bg-blue-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-300"
                      >
                        View Project Documentation
                        <span aria-hidden="true">↗</span>
                      </a>
                    ) : (
                      <p className="rounded-lg border border-slate-700 bg-slate-800/60 px-3 py-3 text-center text-xs text-slate-400">
                        Add your Notion link to enable documentation
                      </p>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
