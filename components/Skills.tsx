
const skillCategories = [
  {
    number: "01",
    title: "Security Operations & Blue Team",
    description: "Monitoring, analyzing and responding to security events.",
    skills: ["Alert Triage", "Log Analysis", "Incident Response", "SIEM Monitoring"],
    tools: ["Wazuh", "Ubuntu", "Security Logs"],
    color: "blue",
  },
  {
    number: "02",
    title: "DevSecOps & CI/CD",
    description: "Integrating security checks into development workflows.",
    skills: ["Git & GitHub", "Git Workflow Management", "CI/CD Automation", "Security Gates"],
    tools: ["Git", "GitHub Actions", "Docker"],
    color: "green",
  },
  {
    number: "03",
    title: "SOAR & Security Automation",
    description: "Connecting security alerts to automated response workflows.",
    skills: ["SOAR Workflows", "Alert Automation", "Webhook Integration", "Email Notifications"],
    tools: ["Shuffle SOAR", "Webhooks", "Gmail API"],
    color: "blue",
  },
  {
    number: "04",
    title: "Vulnerability Assessment",
    description: "Identifying weaknesses and supporting remediation.",
    skills: ["Vulnerability Scanning", "Risk Prioritization", "Remediation", "Security Reporting"],
    tools: ["Nessus", "Ansible", "Kali Linux"],
    color: "blue",
  },
  {
    number: "05",
    title: "Application Security & Testing",
    description: "Checking source code, dependencies, secrets and web applications.",
    skills: ["SAST", "DAST", "Dependency Scanning", "Secrets Detection"],
    tools: ["Semgrep", "OWASP ZAP", "Trivy", "Gitleaks"],
    color: "green",
  },
  {
    number: "06",
    title: "Linux, Networking & Virtualization",
    description: "Working with security labs and system environments.",
    skills: ["Linux Administration", "Network Fundamentals", "Lab Configuration", "Troubleshooting"],
    tools: ["Ubuntu", "Kali Linux", "VirtualBox", "Docker"],
    color: "blue",
  },
  {
    number: "07",
    title: "Digital Forensics & Investigation",
    description: "Examining digital evidence and investigating suspicious activity.",
    skills: ["Email Forensics", "Audio Forensics", "Evidence Analysis", "Anomaly Identification"],
    tools: ["Email Headers", "Spectrogram Analysis", "Security Logs"],
    color: "red",
  },
  {
    number: "08",
    title: "Data Analysis & Technical Reporting",
    description: "Using data to identify patterns and communicate findings.",
    skills: ["Statistical Analysis", "Data Interpretation", "Visualization", "Technical Documentation"],
    tools: ["R", "RStudio", "Python", "CSV Datasets"],
    color: "green",
  },
];

const accentStyles = {
  blue: {
    icon: "border-blue-400/20 bg-blue-400/10 text-blue-300",
    line: "bg-blue-400",
    tool: "border-blue-400/15 bg-blue-400/[0.06] text-blue-200",
  },
  green: {
    icon: "border-emerald-400/20 bg-emerald-400/10 text-emerald-300",
    line: "bg-emerald-400",
    tool: "border-emerald-400/15 bg-emerald-400/[0.06] text-emerald-200",
  },
  red: {
    icon: "border-red-400/20 bg-red-400/10 text-red-300",
    line: "bg-red-400",
    tool: "border-red-400/15 bg-red-400/[0.06] text-red-200",
  },
};

export default function Skills() {
  return (
    <section
      id="skills"
      className="relative scroll-mt-24 overflow-hidden px-4 py-14 sm:px-6 lg:px-8"
    >
      <div className="pointer-events-none absolute left-1/2 top-24 h-72 w-72 -translate-x-1/2 rounded-full bg-blue-500/[0.06] blur-3xl" />

      <div className="relative mx-auto max-w-7xl">
        <div className="mb-8 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Skills <span className="text-blue-400">&amp; Expertise</span>
            </h2>
            <p className="mt-3 max-w-2xl text-sm leading-6 text-slate-400 sm:text-base">
              Security, automation and analytical skills developed through
              hands-on labs, technical projects and continuous learning.
            </p>
          </div>

          <div className="flex w-fit items-center gap-2 rounded-full border border-emerald-400/20 bg-emerald-400/[0.06] px-3 py-2 text-xs text-emerald-300">
            <span className="h-2 w-2 rounded-full bg-emerald-400" />
            Practical learning
          </div>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {skillCategories.map((category) => {
            const accent =
              accentStyles[category.color as keyof typeof accentStyles];

            return (
              <article
                key={category.number}
                className="group relative flex h-full flex-col overflow-hidden rounded-xl border border-slate-700/70 bg-slate-900/75 p-4 transition duration-300 hover:-translate-y-1 hover:border-blue-400/40 hover:bg-slate-900 sm:p-5"
              >
                <div
                  className={`absolute left-0 top-0 h-[2px] w-12 transition-all duration-300 group-hover:w-full ${accent.line}`}
                />

                <div className="mb-4 flex items-start justify-between gap-3">
                  <div
                    className={`flex h-10 w-10 items-center justify-center rounded-lg border text-sm font-bold ${accent.icon}`}
                  >
                    {category.number}
                  </div>
                  <span className="mt-1 text-[10px] font-medium uppercase tracking-widest text-slate-600">
                    Skill set
                  </span>
                </div>

                <h3 className="text-base font-semibold leading-6 text-slate-100">
                  {category.title}
                </h3>

                <p className="mt-2 min-h-[60px] text-xs leading-5 text-slate-400">
                  {category.description}
                </p>

                <div className="my-4 h-px bg-slate-800" />

                <p className="mb-2 text-[10px] font-semibold uppercase tracking-[0.18em] text-slate-500">
                  Skills
                </p>

                <ul className="mb-5 space-y-2">
                  {category.skills.map((skill) => (
                    <li
                      key={skill}
                      className="flex items-start gap-2 text-xs leading-5 text-slate-300"
                    >
                      <span className="mt-[7px] h-1.5 w-1.5 shrink-0 rounded-full bg-blue-400" />
                      <span
                        className={
                          skill === "Threat Hunting"
                            ? "text-red-400"
                            : ""
                        }
                      >
                        {skill}
                      </span>
                    </li>
                  ))}
                </ul>

                <div className="mt-auto">
                  <p className="mb-2 text-[10px] font-semibold uppercase tracking-[0.18em] text-slate-500">
                    Tools used
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {category.tools.map((tool) => (
                      <span
                        key={tool}
                        className={`rounded-md border px-2 py-1 text-[10px] font-medium ${accent.tool}`}
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
