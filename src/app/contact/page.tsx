"use client";

import Link from "next/link";
import { useState } from "react";
import { motion } from "framer-motion";
import {
  Github,
  Linkedin,
  Mail,
  Phone,
  Copy,
  Check,
  ArrowUpRight,
  MapPin,
} from "lucide-react";

export default function ContactPage() {
  const [copied, setCopied] = useState("");

  const copy = async (text: string, key: string) => {
    await navigator.clipboard.writeText(text);
    setCopied(key);

    setTimeout(() => {
      setCopied("");
    }, 2000);
  };

  const interests = [
    "Trustworthy AI",
    "Medical AI",
    "Machine Learning",
    "Audio AI",
    "NLP",
  ];

  return (
    <main className="min-h-screen bg-[#09090B] text-white">

      <section className="relative mx-auto max-w-7xl px-6 py-32">

        {/* Background Glow */}

        <div className="absolute left-0 top-24 h-96 w-96 rounded-full bg-indigo-500/10 blur-[140px]" />

        <div className="relative grid gap-20 lg:grid-cols-[1fr_0.9fr]">

          {/* LEFT */}

          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-indigo-500">
              CONTACT
            </p>

            <h1 className="mt-6 text-5xl font-bold leading-tight tracking-tight md:text-6xl">
              Let&apos;s build AI
              <br />
              that people can trust.
            </h1>

            <p className="mt-10 max-w-xl text-lg leading-8 text-zinc-400">
              I&apos;m interested in research collaborations,
              graduate opportunities, and challenging
              machine learning problems where rigorous
              experimentation can create real-world impact.
            </p>

            {/* Location */}

            <div className="mt-16">

              <p className="text-sm uppercase tracking-[0.25em] text-zinc-500">
                Based In
              </p>

              <div className="mt-5 flex items-center gap-3">

                <MapPin className="h-5 w-5 text-indigo-400" />

                <span className="text-lg text-zinc-300">
                  Jaipur, Rajasthan, India
                </span>

              </div>

            </div>

            {/* Interests */}

            <div className="mt-16">

              <p className="text-sm uppercase tracking-[0.25em] text-zinc-500">
                Research Interests
              </p>

              <div className="mt-6 flex flex-wrap gap-3">

                {interests.map((interest) => (
                  <span
                    key={interest}
                    className="rounded-full border border-indigo-500/20 bg-indigo-500/5 px-4 py-2 text-sm text-zinc-300"
                  >
                    {interest}
                  </span>
                ))}

              </div>

            </div>

          </motion.div>

          {/* RIGHT */}

          <motion.div
            initial={{ opacity: 0, x: 25 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="h-fit rounded-3xl border border-zinc-800 bg-zinc-950 overflow-hidden self-start"
          >

            {/* GitHub */}

            <Link
              href="https://github.com/tusharr-bansal"
              target="_blank"
              className="group flex items-center justify-between border-b border-zinc-800 p-8 transition hover:bg-[#111118]"
            >
              <div className="flex items-center gap-5">

                <Github className="h-6 w-6 text-indigo-400" />

                <div>

                  <p className="text-sm uppercase tracking-widest text-zinc-500">
                    GitHub
                  </p>

                  <p className="mt-2 text-lg text-white">
                    github.com/tusharr-bansal
                  </p>

                </div>

              </div>

              <ArrowUpRight className="text-zinc-600 transition group-hover:text-indigo-400" />

            </Link>

            {/* LinkedIn */}

            <Link
              href="https://linkedin.com/in/tusharr-bansal"
              target="_blank"
              className="group flex items-center justify-between border-b border-zinc-800 p-8 transition hover:bg-[#111118]"
            >
              <div className="flex items-center gap-5">

                <Linkedin className="h-6 w-6 text-indigo-400" />

                <div>

                  <p className="text-sm uppercase tracking-widest text-zinc-500">
                    LinkedIn
                  </p>

                  <p className="mt-2 text-lg text-white">
                    linkedin.com/in/tusharr-bansal
                  </p>

                </div>

              </div>

              <ArrowUpRight className="text-zinc-600 transition group-hover:text-indigo-400" />

            </Link>

            {/* Email */}

            <button
              onClick={() => copy("tusharbansal030@gmail.com", "email")}
              className="group flex w-full items-center justify-between border-b border-zinc-800 p-8 text-left transition hover:bg-[#111118]"
            >
              <div className="flex items-center gap-5">

                <Mail className="h-6 w-6 text-indigo-400" />

                <div>

                  <p className="text-sm uppercase tracking-widest text-zinc-500">
                    Email
                  </p>

                  <p className="mt-2 text-lg text-white">
                    tusharbansal030@gmail.com
                  </p>

                </div>

              </div>

              <div className="flex items-center gap-2">

                {copied === "email" ? (
                  <>
                    <Check className="h-5 w-5 text-indigo-400" />
                    <span className="text-sm text-indigo-400">
                      Copied
                    </span>
                  </>
                ) : (
                  <>
                    <Copy className="h-5 w-5 text-zinc-500 group-hover:text-indigo-400" />
                    <span className="text-sm text-zinc-500 group-hover:text-indigo-400">
                      Copy
                    </span>
                  </>
                )}

              </div>

            </button>

            {/* Phone */}

            <button
              onClick={() => copy("+918209100349", "phone")}
              className="group flex w-full items-center justify-between p-8 text-left transition hover:bg-[#111118]"
            >
              <div className="flex items-center gap-5">

                <Phone className="h-6 w-6 text-indigo-400" />

                <div>

                  <p className="text-sm uppercase tracking-widest text-zinc-500">
                    Phone
                  </p>

                  <p className="mt-2 text-lg text-white">
                    +91 82091 00349
                  </p>

                </div>

              </div>

              <div className="flex items-center gap-2">

                {copied === "phone" ? (
                  <>
                    <Check className="h-5 w-5 text-indigo-400" />
                    <span className="text-sm text-indigo-400">
                      Copied
                    </span>
                  </>
                ) : (
                  <>
                    <Copy className="h-5 w-5 text-zinc-500 group-hover:text-indigo-400" />
                    <span className="text-sm text-zinc-500 group-hover:text-indigo-400">
                      Copy
                    </span>
                  </>
                )}

              </div>

            </button>

          </motion.div>

        </div>

      </section>

    </main>
  );
}