
export default function About() {
  return (
    <section
      id="about"
      className="scroll-mt-28 px-6 py-16 md:px-10 md:py-20"
    >
      <div className="mx-auto max-w-7xl">
        {/* Section heading */}
        <div className="mb-10">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-green-400">
            Get to know me
          </p>

          <h2 className="text-4xl font-bold text-white md:text-5xl">
            About Me<span className="text-green-400">.</span>
          </h2>

          <p className="mt-3 text-slate-400">
            Physics Graduate · Cybersecurity Enthusiast ·  SOC Analyst
          </p>
        </div>

        {/* Main content */}
        <div className="grid items-start gap-8 lg:grid-cols-[1.5fr_1fr]">
          {/* Biography */}
          <div className="rounded-2xl border border-green-500/20 bg-[#0a1828] p-6 md:p-8">
            <h3 className="mb-5 text-xl font-semibold text-green-400">
              My Background
            </h3>

            <div className="space-y-4 leading-7 text-slate-300">
              <p>
                I am a Physics graduate with a growing specialization in
                Cybersecurity, focused on Security Operations Centre (SOC)
                analysis, threat investigation, and incident response.
              </p>

              <p>
                My background in Physics has strengthened my analytical
                thinking, statistical reasoning, and problem-solving
                abilities. I apply these skills to investigating security
                events, identifying suspicious activities, and interpreting
                technical data.
              </p>

              <p>
                Through hands-on labs and cybersecurity projects, I am
                developing practical skills in Linux environments, network
                analysis, vulnerability assessment, security monitoring,
                and SOC, SIEM, and SOAR workflows.
              </p>

              <p>
                My interest lies in alert triage, threat hunting,
                malware analysis, incident response, amongst many more. My goal is to help
                organizations detect threats, respond effectively to security
                incidents, and strengthen their overall security posture.
              </p>

               <p>
                Amongst Technical skills, i also take pride in my soft skills, including effective communication, 
                teamwork, and adaptability, which are essential for collaborating with cross-functional teams and responding to dynamic security challenges.
              </p>


              <p>
                I remain committed to continuous learning, practical
                experimentation, and building the skills needed to contribute
                to secure and resilient digital environments.
              </p>
            </div>
          </div>

          {/* Highlight cards */}
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-1">
            {/* Cybersecurity card */}
            <div className="group rounded-2xl border border-green-500/20 bg-[#0a1828] p-6 transition duration-300 hover:border-green-400/60 hover:shadow-[0_0_25px_rgba(34,197,94,0.08)]">
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl border border-green-500/30 bg-green-500/10">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.7"
                  className="h-6 w-6 text-green-400"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 3 20 6v5c0 5-3.5 8-8 10-4.5-2-8-5-8-10V6l8-3Z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m9 12 2 2 4-4"
                  />
                </svg>
              </div>

              <h3 className="mb-2 text-lg font-bold text-white">
                Cybersecurity
              </h3>

              <p className="text-sm leading-6 text-slate-400">
                Developing practical skills in alert triage, threat
                investigation, vulnerability assessment, automation response,and security
                operations.
              </p>

              <div className="mt-4 flex flex-wrap gap-2">
                {["SOC", "SIEM", "SOAR", "Incident Response"].map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-green-500/20 bg-green-500/5 px-3 py-1 text-xs text-green-300"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>

            {/* Analytics card */}
            <div className="group rounded-2xl border border-blue-500/20 bg-[#0a1828] p-6 transition duration-300 hover:border-blue-400/60 hover:shadow-[0_0_25px_rgba(59,130,246,0.08)]">
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl border border-blue-500/30 bg-blue-500/10">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.7"
                  className="h-6 w-6 text-blue-400"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 19V5m0 14h16"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M8 16v-5m4 5V7m4 9v-8m4 8v-4"
                  />
                </svg>
              </div>

              <h3 className="mb-2 text-lg font-bold text-white">
                Analytical Thinking
              </h3>

              <p className="text-sm leading-6 text-slate-400">
                Applying my Physics background, statistical reasoning, and
                problem-solving skills to interpret data and investigate
                complex technical problems.
              </p>

              <div className="mt-4 flex flex-wrap gap-2">
                {["Data Analysis", "Statistics", "Problem Solving"].map(
                  (item) => (
                    <span
                      key={item}
                      className="rounded-full border border-blue-500/20 bg-blue-500/5 px-3 py-1 text-xs text-blue-300"
                    >
                      {item}
                    </span>
                  )
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
