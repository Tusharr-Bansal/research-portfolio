"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  ExternalLink,
  Database,
  Server,
  Layers3,
  Cpu,
} from "lucide-react";

const stack = [
  {
    icon: Layers3,
    title: "Frontend",
    value: "Vue.js",
  },
  {
    icon: Server,
    title: "Backend",
    value: "Flask REST API",
  },
  {
    icon: Database,
    title: "Database",
    value: "SQLite",
  },
  {
    icon: Cpu,
    title: "Infrastructure",
    value: "Redis + Celery",
  },
];

const screenshots = [
  {
    title: "Admin Dashboard",
    image: "/projects/hms/admin.png",
  },
  {
    title: "Doctor Dashboard",
    image: "/projects/hms/doctor-dashboard.png",
  },
  {
    title: "Patient Dashboard",
    image: "/projects/hms/patient-dashboard.png",
  },
  {
    title: "Appointment Management",
    image: "/projects/hms/appointment.png",
  },
];

export default function HospitalManagementSystemPage() {
  return (
    <main className="bg-[#09090B] text-white">

      {/* HERO */}

      <section className="mx-auto max-w-6xl px-6 pt-28 pb-24">

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-xs font-semibold uppercase tracking-[0.35em] text-indigo-500"
        >
          Engineering Project
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mt-6 text-5xl font-bold tracking-tight md:text-6xl"
        >
          Distributed Hospital
          <br />
          Management System
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="mt-10 max-w-3xl text-lg leading-8 text-zinc-400"
        >
          A production-oriented hospital management platform
          designed to streamline patient records, appointment
          scheduling, treatment history, and administrative
          workflows through a scalable full-stack architecture.
        </motion.p>

        <Link
          href="https://github.com/Tusharr-Bansal/hospital-management-system"
          target="_blank"
          className="mt-10 inline-flex items-center gap-2 rounded-full border border-zinc-700 px-6 py-3 transition hover:border-indigo-500 hover:text-indigo-400"
        >
          View Source

          <ExternalLink className="h-5 w-5" />
        </Link>

      </section>

      {/* PROBLEM + SOLUTION */}

      <section className="mx-auto max-w-6xl px-6 py-20">

        <div className="grid gap-8 lg:grid-cols-2">

          <div className="rounded-3xl border border-zinc-800 bg-zinc-950 p-8">

            <p className="text-xs uppercase tracking-[0.3em] text-indigo-500">
              Problem
            </p>

            <h2 className="mt-5 text-3xl font-semibold">
              Fragmented hospital workflows
            </h2>

            <p className="mt-6 leading-8 text-zinc-400">
              Traditional hospital operations often rely on
              disconnected systems for appointments,
              patient records, treatment history, and
              administrative tasks. This results in duplicated
              data, inefficient scheduling, and limited
              visibility across different user roles.
            </p>

          </div>

          <div className="rounded-3xl border border-zinc-800 bg-zinc-950 p-8">

            <p className="text-xs uppercase tracking-[0.3em] text-indigo-500">
              Solution
            </p>

            <h2 className="mt-5 text-3xl font-semibold">
              Unified healthcare platform
            </h2>

            <p className="mt-6 leading-8 text-zinc-400">
              The application integrates role-based
              dashboards for administrators, doctors,
              and patients while supporting appointment
              scheduling, medical history, caching,
              asynchronous jobs, and RESTful APIs
              through a single platform.
            </p>

          </div>

        </div>

      </section>

      {/* TECH STACK */}

      <section className="mx-auto max-w-6xl px-6 py-20">

        <p className="text-xs uppercase tracking-[0.35em] text-indigo-500">
          Technology Stack
        </p>

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">

          {stack.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className="rounded-3xl border border-zinc-800 bg-zinc-950 p-8"
              >
                <Icon className="h-8 w-8 text-indigo-400" />

                <p className="mt-8 text-sm uppercase tracking-wider text-zinc-500">
                  {item.title}
                </p>

                <h3 className="mt-2 text-xl font-semibold">
                  {item.value}
                </h3>

              </div>
            );
          })}

        </div>

      </section>

      {/* GALLERY */}

      <section className="mx-auto max-w-6xl px-6 py-20">

        <p className="text-xs uppercase tracking-[0.35em] text-indigo-500">
          Project Gallery
        </p>

        <h2 className="mt-5 text-4xl font-semibold">
          Application Screens
        </h2>

        <div className="mt-12 grid gap-8 md:grid-cols-2">

          {screenshots.map((screen) => (
            <div
              key={screen.title}
              className="overflow-hidden rounded-3xl border border-zinc-800 bg-zinc-950"
            >

              <img
                src={screen.image}
                alt={screen.title}
                className="aspect-video w-full object-cover transition duration-500 hover:scale-105"
              />

              <div className="border-t border-zinc-800 p-6">

                <h3 className="text-lg font-medium">
                  {screen.title}
                </h3>

              </div>

            </div>
          ))}

        </div>

      </section>

    </main>
  );
}