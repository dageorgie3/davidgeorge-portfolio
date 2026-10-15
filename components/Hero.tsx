"use client";

import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { useState } from "react";

export default function Hero() {
  const [finished, setFinished] = useState(false);

  return (
    <main className="relative flex h-screen items-center justify-center overflow-hidden">

      {/* Background */}

      <div className="absolute inset-0 bg-gradient-to-br from-[#020617] via-[#0f172a] to-[#1d4ed8]" />

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.22),transparent_30%),radial-gradient(circle_at_bottom_left,rgba(59,130,246,0.30),transparent_35%)]" />

      <div className="absolute h-[700px] w-[700px] rounded-full bg-blue-500/20 blur-3xl animate-pulse left-[-200px] top-[-200px]" />

      <div className="absolute h-[600px] w-[600px] rounded-full bg-white/10 blur-3xl right-[-150px] bottom-[-150px]" />

      {/* Content */}

      <section className="relative z-10 text-center px-6">

        {/* Hi I'm */}

        <motion.h2
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: .8 }}
          className="text-4xl md:text-6xl font-light text-white"
        >
          Hi, I'm
        </motion.h2>

        {/* David George */}

        <motion.h1
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{
            delay: .8,
            duration: 1,
            ease: "easeOut",
          }}
          className="origin-center text-6xl md:text-8xl font-black text-white mt-5"
        >
          David George
        </motion.h1>

        {/* Typing */}

        {!finished && (
          <motion.div
            className="mt-12 text-3xl font-semibold"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2 }}
          >
            <TypeAnimation
              sequence={[
                "Cybersecurity Analyst",
                1200,
                "Data Analyst",
                1200,
                "SOC Analyst",
                1200,
                "Threat Hunter",
                1200,
                "Malware Analyst",
                1500,
                () => setFinished(true),
              ]}
              wrapper="span"
              speed={40}
              repeat={0}
              className="text-blue-400"
            />
          </motion.div>
        )}

        {/* Final Skills */}

        <AnimatePresence>

          {finished && (

            <motion.div
              initial={{ opacity:0,y:20 }}
              animate={{ opacity:1,y:0 }}
              className="mt-12 flex flex-wrap justify-center gap-3 text-xl md:text-2xl font-semibold"
            >

              <span className="text-blue-400">
                Cybersecurity Analyst
              </span>

              <span className="text-gray-400">|</span>

              <span className="text-white">
                Data Analyst
              </span>

              <span className="text-gray-400">|</span>

              <span className="text-blue-400">
                SOC Analyst
              </span>

              <span className="text-gray-400">|</span>

              <span className="text-red-500">
                Threat Hunter
              </span>

              <span className="text-gray-400">|</span>

              <span className="text-blue-400">
                Malware Analyst
              </span>

            </motion.div>

          )}

        </AnimatePresence>

        {/* Button */}

        <AnimatePresence>

          {finished && (

            <Link href="/portfolio">
            <motion.button
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ delay: 0.4 }}
                className="origin-center mt-16 rounded-full bg-white px-10 py-4 text-lg font-bold text-black hover:scale-105 transition duration-300"
            >
                EXPLORE PORTFOLIO →
            </motion.button>
        </Link>

          )}

        </AnimatePresence>

      </section>

    </main>
  );
}