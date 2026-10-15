import Image from "next/image";
import Navbar from "@/components/Navbar";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import CertificationsExperience from "@/components/CertificationsExperience";
import CVResume from "@/components/CVResume";
import Contact from "@/components/Contact";

export default function Portfolio() {
  return (
    <main className="min-h-screen bg-[#081225] text-white">

      <Navbar />

      {/* ================= HOME SECTION ================= */}

      <section
        id="home"
        className="min-h-screen flex items-center justify-center px-10 pt-[160px] pb-20"
      >
        <div className="max-w-7xl w-full grid lg:grid-cols-2 gap-20 items-center">

          {/* LEFT */}

          <div>

            <p className="text-green-400 uppercase tracking-[0.4em] mb-3">
              Welcome
            </p>

            <h1 className="text-6xl font-black leading-tight">
              I'm
              <span className="block text-blue-400 mt-1">
                David George
              </span>
            </h1>

            <p className="mt-3 text-xl text-gray-300 leading-9">
              I am a passionate cybersecurity analyst with a strong interest
              in alert triage, threat investigation, malware analysis,
              incident response, and strengthening the security posture of
              organizations.
            </p>

            <div className="flex gap-5 mt-6">

              <a
                href="/my_CV.pdf"
                download
                className="rounded-lg bg-green-500 px-7 py-3 font-bold text-black hover:scale-105 transition inline-block"
              >
                Download CV/Resume
              </a>
              <a
                href="#contact"
                className="rounded-lg border border-green-500 px-7 py-3 text-green-400 hover:bg-green-500 hover:text-black transition inline-block"
              >
                Contact Me
              </a>
            </div>

          </div>

          {/* RIGHT */}

          <div className="flex justify-center">

            <div className="relative h-[470px] w-[470px]">

              {/* Green glow behind the portrait */}
              <div className="absolute inset-0 rounded-full bg-green-500 blur-[120px] opacity-20"></div>

              {/* Professional portrait */}
              <div className="relative h-full w-full overflow-hidden rounded-full border-4 border-green-400 shadow-[0_0_70px_rgba(34,197,94,0.35)]">

                <Image
                  src="/profile.jpg"
                  alt="David George"
                  fill
                  priority
                  className="object-cover"
                />

              </div>

             </div>

          </div>

        </div>
      </section>
     

      {/* ================= DASHBOARD CARDS ================= */}

      <section className="pb-12">

        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-5">

          {/* Certifications */}

          <div className="rounded-2xl border border-green-500/30 bg-[#0a1828] p-2">

            <p className="text-gray-400 uppercase">
              Active certificate & Certifications
            </p>

            <h2 className="text-6xl font-black text-blue-400 mt-2">
              4
            </h2>

            <p className="mt-2 text-gray-300">
              Professional certifications completed.
            </p>

          </div>

          {/* Threat Overview */}

          <div className="rounded-2xl border border-green-500/30 bg-[#0a1828] p-2">

            <h2 className="text-2xl font-bold mb-3">
              Threat Overview
            </h2>

            <div className="space-y-4">

              <div className="flex justify-between">
                <span className="text-red-500">Critical</span>
                <span>1</span>
              </div>

              <div className="flex justify-between">
                <span className="text-orange-400">High</span>
                <span>4</span>
              </div>

              <div className="flex justify-between">
                <span className="text-yellow-400">Medium</span>
                <span>9</span>
              </div>

              <div className="flex justify-between">
                <span className="text-green-400">Low</span>
                <span>21</span>
              </div>

            </div>

          </div>

        </div>

      </section>

       {/* ================= ABOUT SECTION ================= */}
       <About />

       {/* ================= SKILLS SECTION ================= */}
       <Skills />

       {/* ================= PROJECTS SECTION ================= */}
       <Projects />

       {/* ================= CERTIFICATIONSEXPERIENCE SECTION ================= */}
       <CertificationsExperience />

       {/* ================= CVResume SECTION ================= */}
       <CVResume />

       {/* ================= CONTACT SECTION ================= */}
       <Contact />

    </main>
  );
}