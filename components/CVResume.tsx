
export default function CVResume() {
  return (
    <section
      id="resume"
      className="scroll-mt-24 px-4 py-14 sm:px-6 lg:px-8"
    >
      <div className="mx-auto max-w-5xl">
        <div className="flex flex-col gap-6 rounded-2xl border border-slate-700/70 bg-slate-900/80 p-6 sm:flex-row sm:items-center sm:justify-between sm:p-8">
          <div className="flex items-start gap-4">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-blue-400/20 bg-blue-400/10 text-blue-300">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.6"
                className="h-6 w-6"
                aria-hidden="true"
              >
                <path d="M7 3h7l5 5v13H7a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2Z" />
                <path d="M14 3v6h5M9 14h6M9 17h6" />
              </svg>
            </div>

            <div>
              <p className="mb-2 text-xs font-semibold uppercase tracking-[0.25em] text-emerald-400">
                Professional Profile
              </p>

              <h2 className="text-2xl font-bold text-white sm:text-3xl">
                CV <span className="text-blue-400">/ Resume</span>
              </h2>

              <p className="mt-3 max-w-xl text-sm leading-6 text-slate-400">
                Explore my technical skills, cybersecurity projects,
                certifications and professional experience.
              </p>

              <p className="mt-2 text-xs text-slate-500">
                PDF document · Opens in your browser
              </p>
            </div>
          </div>

          <div className="flex shrink-0 flex-col gap-3 sm:min-w-40">
            <a
              href="/resume"
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-blue-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-blue-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-300"
            >
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                className="h-4 w-4"
                aria-hidden="true"
              >
                <path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7S2 12 2 12Z" />
                <circle cx="12" cy="12" r="3" />
              </svg>
              View CV
            </a>

            <a
              href="/my_CV.pdf"
              download="David-George-CV.pdf"
              className="inline-flex items-center justify-center gap-2 rounded-lg border border-slate-600 px-5 py-3 text-sm font-semibold text-slate-200 transition hover:border-emerald-400/50 hover:text-emerald-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-300"
            >
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                className="h-4 w-4"
                aria-hidden="true"
              >
                <path d="M12 3v12m-5-5 5 5 5-5M4 17v4h16v-4" />
              </svg>
              Download CV
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
