
"use client";

import CyberTyping from "./CyberTyping";
import Link from "next/link";
import { useEffect, useState } from "react";

const navItems = [
  { label: "Home", href: "#home", id: "home" },
  { label: "About", href: "#about", id: "about" },
  { label: "Skills", href: "#skills", id: "skills" },
  { label: "Projects", href: "#projects", id: "projects" },
  {
    label: "Certifications",
    href: "#certifications",
    id: "certifications",
  },
  { label: "CV/Resume", href: "#resume", id: "resume" },
  { label: "Contact", href: "#contact", id: "contact" },
];

export default function Navbar() {
  const [active, setActive] = useState("Home");

  const roles = [
    { text: "Cybersecurity Analyst", color: "text-blue-400" },
    { text: "Threat Hunter", color: "text-red-500" },
    { text: "SOC Analyst", color: "text-cyan-400" },
    { text: "Data Analyst", color: "text-white" },
    { text: "Alert Triage", color: "text-yellow-400" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const pageBottom =
        window.innerHeight + scrollPosition >=
        document.documentElement.scrollHeight - 5;

      if (pageBottom) {
        setActive("Contact");
        return;
      }

      let currentSection = "Home";

      for (const item of navItems) {
        const section = document.getElementById(item.id);

        if (section && section.getBoundingClientRect().top <= 180) {
          currentSection = item.label;
        }
      }

      setActive(currentSection);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, []);

  return (
    <header className="fixed top-0 left-0 w-full z-50 backdrop-blur-xl bg-[#071323]/90 border-b border-green-500/20">
      <div className="max-w-7xl mx-auto px-8 py-5 flex justify-between items-center">
        {/* LEFT: LOGO AND ROLE ANIMATION */}
        <div className="w-72 relative flex flex-col items-start">
          <div className="absolute -left-5 -top-5 h-24 w-24 animate-spin-slow opacity-20">
            <div className="h-full w-full rotate-45 rounded-xl border-2 border-green-400" />
          </div>

          <div className="relative">
            <div className="absolute left-0 top-0 h-1 w-full animate-scan bg-green-300/70 blur-sm" />

            <div className="absolute inset-0 rounded-xl bg-green-400 blur-2xl opacity-20" />

            <div className="relative px-6 py-3 rounded-xl border border-green-400/50 bg-[#07141f] shadow-[0_0_40px_rgba(34,197,94,0.35)]">
              <h1 className="text-6xl font-black tracking-widest text-green-400 drop-shadow-[0_0_18px_#22c55e]">
                DG
              </h1>
            </div>
          </div>

          <div className="mt-3 h-6 text-sm font-semibold">
            <CyberTyping roles={roles} />
          </div>
        </div>

        {/* CENTER: AVAILABILITY STATUS */}
        <div className="hidden xl:flex flex-col items-start">
          <span className="uppercase text-xs tracking-widest text-gray-400 mb-2">
            STATUS
          </span>

          <div className="flex items-center gap-3">
            <div className="w-5 h-5 rounded-full bg-green-500 animate-pulse" />
            <span className="font-semibold text-green-400">
              Available for Roles
            </span>
          </div>

          <div className="flex items-center gap-3 mt-2 opacity-40">
            <div className="w-5 h-5 rounded-full border border-white" />
            <span>Unavailable</span>
          </div>
        </div>

        {/* RIGHT: NAVIGATION */}
        <nav className="flex gap-8">
          {navItems.map((item) => (
            <Link
              key={item.id}
              href={item.href}
              onClick={() => setActive(item.label)}
              aria-current={active === item.label ? "location" : undefined}
              className="relative transition duration-300"
            >
              <span
                className={
                  active === item.label
                    ? "text-green-400"
                    : "text-white hover:text-green-300"
                }
              >
                {item.label}
              </span>

              {active === item.label && (
                <div className="absolute -bottom-3 left-0 h-[2px] w-full bg-white rounded-full" />
              )}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
