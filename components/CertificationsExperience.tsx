
type Certification = {
  name: string;
  issuer: string;
  date: string;
  verifyUrl: string;
};

const certifications: Certification[] = [
  {
    name: "Introduction to Cybersecurity",
    issuer: "Cisco Networking Academy",
    date: "February, 2026",
    verifyUrl: "https://drive.google.com/file/d/1Ea1BXRVoZr_6ZPdBTFwMMloNW2Z2hOKF/view?usp=drive_link",
  },
  {
    name: "Cyberops Associate",
    issuer: "CyBlack SOC Academy through Cisco Networking Academy",
    date: "July, 2026",
    verifyUrl: "https://drive.google.com/file/d/16Jkgc_kVxJIEWmiARjLy3shDMGNR6j9h/view?usp=drive_link",
  },
  {
    name: "Google Cybersecurity Professional Certificate",
    issuer: "Google through Coursera",
    date: "July, 2026",
    verifyUrl: "https://www.coursera.org/account/accomplishments/specialization/certificate/EI6ZHG8GUOBU",
  },
  {
    name: "Security Operation Center Training",
    issuer: "CyBlack SOC Academy",
    date: "August, 2026",
    verifyUrl: "https://drive.google.com/file/d/1SXt-NG421Opxr4VNQsh8yKwI561cvIsN/view?usp=drive_link",
  },
];

const experiences = [
  {
    role: "SOC Academy Intern",
    organization: "CyBlack SOC Academy",
    period: "April – August 2026",
    description:
      "Developed practical cybersecurity skills through SOC training including SIEM labs and SOAR platforms, such as log monitoring, network analysis, Alert Triage,  security monitoring exercises. My personal skill was also developed such as Interpersonal relationship, Team collaboration.",
  },
  {
    role: "Intern",
    organization: "EXPADOX LAB",
    period: "August 2026 – Present",
    description:
      "An intern with personal projects that developed my skill in Automation response, Endpoint detection and response, Automation Response, as endpoint monitoring with tools like wazuh.",
  },
];

export default function CertificationsExperience() {
  return (
    <section
      id="certifications"
      className="scroll-mt-24 px-4 py-14 sm:px-6 lg:px-8"
    >
      <div className="mx-auto max-w-5xl">
        <div className="mb-9">
          <p className="mb-2 text-xs font-semibold uppercase tracking-[0.28em] text-emerald-400">
            Credentials & Professional Journey
          </p>

          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Certifications <span className="text-blue-400">&amp; Experience</span>
          </h2>

          <p className="mt-3 text-sm leading-6 text-slate-400 sm:text-base">
            Professional credentials, continuous learning and practical
            experience in cybersecurity.
          </p>
        </div>

        {/* CERTIFICATIONS */}
        <div className="mb-12">
          <h3 className="mb-4 text-lg font-semibold text-slate-100">
            Certifications
          </h3>

          <div className="border-t border-slate-800">
            {certifications.map((cert, index) => (
              <div
                key={`${cert.name}-${index}`}
                className="flex items-center gap-4 border-b border-slate-800 py-4"
              >
                <div className="min-w-0 flex-1">
                  <h4 className="text-sm font-medium text-slate-100 sm:text-base">
                    {cert.name}
                  </h4>
                  <p className="mt-1 text-xs text-slate-400 sm:text-sm">
                    {cert.issuer} · {cert.date}
                  </p>
                </div>

                {cert.verifyUrl.trim() ? (
                  <a
                    href={cert.verifyUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="shrink-0 text-xs font-semibold text-blue-400 transition hover:text-emerald-400 sm:text-sm"
                  >
                    Verify ↗
                  </a>
                ) : (
                  <span className="shrink-0 text-xs text-slate-600">
                    Add link
                  </span>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* EXPERIENCE */}
        <div>
          <h3 className="mb-5 text-lg font-semibold text-slate-100">
            Experience
          </h3>

          <div className="border-l border-blue-400/30 pl-5 sm:pl-6">
            {experiences.map((experience, index) => (
              <div
                key={`${experience.organization}-${index}`}
                className="relative pb-8 last:pb-0"
              >
                <span className="absolute -left-[25px] top-1.5 h-2.5 w-2.5 rounded-full border-2 border-blue-400 bg-slate-950 sm:-left-[31px]" />

                <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
                  <div>
                    <h4 className="font-semibold text-slate-100">
                      {experience.role}
                    </h4>
                    <p className="mt-1 text-sm text-blue-300">
                      {experience.organization}
                    </p>
                  </div>

                  <span className="text-xs text-slate-400 sm:text-right">
                    {experience.period}
                  </span>
                </div>

                <p className="mt-3 max-w-3xl text-sm leading-6 text-slate-400">
                  {experience.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
