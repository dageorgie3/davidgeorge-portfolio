
"use client";

const contactLinks = [
  {
    name: "Phone",
    detail: "08100675022",
    href: "tel:+2348100675022",
    icon: "📞",
  },
  {
    name: "Email",
    detail: "dageorgie3@gmail.com",
    href: "mailto:dageorgie3@gmail.com",
    icon: "✉️",
  },
  {
    name: "LinkedIn",
    detail: "Connect professionally",
    href: "https://www.linkedin.com/in/david-george-socanalyst",
    icon: "in",
  },
  {
    name: "Instagram",
    detail: "Connect with me Socially",
    href: "https://www.instagram.com/celebrityshoemaker_",
    icon: "◎",
  },
  {
    name: "X",
    detail: "Follow my updates",
    href: "https://x.com/DAVEEDFootwears",
    icon: "𝕏",
  },
];

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-[#071323] px-6 py-24 text-white"
    >
      <div className="pointer-events-none absolute left-1/2 top-20 h-72 w-72 -translate-x-1/2 rounded-full bg-blue-500/10 blur-[100px]" />

      <div className="relative mx-auto max-w-5xl">
        <div className="mb-12 text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-green-400">
            Let&apos;s Connect
          </p>

          <h2 className="mb-4 text-4xl font-bold md:text-5xl">
            Get to <span className="text-blue-400">Meet Me</span>
          </h2>

          <p className="mx-auto max-w-2xl leading-7 text-gray-400">
            Have an opportunity, a project, or an idea to discuss?
            I&apos;d be happy to hear from you. Choose your preferred
            way to connect with me below.
          </p>
        </div>

        <div className="mx-auto grid max-w-4xl grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {contactLinks.map((item) => (
            <a
              key={item.name}
              href={item.href}
              target={
                item.name === "Phone" || item.name === "Email"
                  ? undefined
                  : "_blank"
              }
              rel={
                item.name === "Phone" || item.name === "Email"
                  ? undefined
                  : "noopener noreferrer"
              }
              className="group flex items-center gap-4 rounded-2xl border border-blue-400/15 bg-[#0b1b2d]/80 p-5 transition duration-300 hover:-translate-y-1 hover:border-blue-400/60 hover:bg-blue-500/10 hover:shadow-[0_0_25px_rgba(59,130,246,0.12)]"
            >
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-blue-400/20 bg-blue-500/10 text-lg font-bold text-blue-400 transition group-hover:bg-blue-500/20">
                {item.icon}
              </span>

              <span className="min-w-0">
                <span className="block font-semibold text-white">
                  {item.name}
                </span>
                <span className="mt-1 block break-words text-sm text-gray-400 group-hover:text-blue-200">
                  {item.detail}
                </span>
              </span>
            </a>
          ))}
        </div>

        <div className="mt-20 border-t border-white/10 pt-8 text-center">
          <p className="text-sm text-gray-400">
            &copy; {new Date().getFullYear()} David George.
            All rights reserved.
          </p>

          <div className="mt-3 flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-sm text-gray-400">
            <a
              href="mailto:dageorgie3@gmail.com"
              className="transition hover:text-blue-400"
            >
              dageorgie3@gmail.com
            </a>

            <span className="hidden text-gray-600 sm:inline">|</span>

            <a
              href="tel:+23480100675022"
              className="transition hover:text-blue-400"
            >
              08100675022
            </a>
          </div>

          <p className="mt-4 text-xs tracking-wide text-gray-500">
            Cybersecurity · SOC Analysis · Data Analytics
          </p>

          <a
            href="#home"
            className="mt-6 inline-block text-sm text-blue-400 transition hover:text-blue-300"
          >
            ↑ Back to Top
          </a>
        </div>
      </div>
    </section>
  );
}
