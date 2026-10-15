
export default function ResumePage() {
  return (
    <main className="min-h-screen bg-slate-950 px-3 py-6 sm:px-6">
      <div className="mx-auto max-w-6xl">
        <div className="mb-5 flex flex-wrap items-center justify-between gap-3">
          <div>
            <h1 className="text-xl font-bold text-white sm:text-2xl">
              CV <span className="text-blue-400">/ Resume</span>
            </h1>
            <p className="mt-1 text-sm text-slate-400">
              David George · Professional Profile
            </p>
          </div>

          <div className="flex gap-3">
            <a
              href="/portfolio#resume"
              className="rounded-lg border border-slate-700 px-4 py-2 text-sm text-slate-200 hover:border-blue-400"
            >
              Back to Portfolio
            </a>

            <a
              href="/my_CV.pdf"
              download="David-George-CV.pdf"
              className="rounded-lg bg-blue-600 px-4 py-2 text-sm font-semibold text-white hover:bg-blue-500"
            >
              Download
            </a>
          </div>
        </div>

        <div className="overflow-hidden rounded-xl border border-slate-800 bg-slate-900">
          <iframe
            src="/my_CV.pdf#view=FitH"
            title="David George CV"
            className="h-[75vh] min-h-[600px] w-full sm:h-[85vh]"
          />
        </div>

        <p className="mt-3 text-center text-xs text-slate-500">
          If the document does not display in your browser, use the Download
          button to view it on your device.
        </p>
      </div>
    </main>
  );
}
