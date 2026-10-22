
"use client";

import {
  Clock,
  Droplets,
  Fish,
  FlaskConical,
  Info,
  LayoutDashboard,
  Leaf,
  Microscope,
  Search,
  Thermometer,
  TriangleAlert,
  TrendingUp,
  Waves,
} from "lucide-react";
import { useState } from "react";

const initialParameters = [
  {
    name: "Water Temperature",
    key: "temperature",
    icon: Thermometer,
    unit: "°C",
    description: "Water temperature",
    color: "bg-orange-50",
    iconColor: "text-orange-700",
  },
  {
    name: "pH Level",
    key: "ph",
    icon: Droplets,
    unit: "pH",
    description: "Acidity or alkalinity",
    color: "bg-sky-50",
    iconColor: "text-sky-700",
  },
  {
    name: "Ammonia",
    key: "ammonia",
    icon: FlaskConical,
    unit: "mg/L",
    description: "Ammonia concentration",
    color: "bg-purple-50",
    iconColor: "text-purple-700",
  },
  {
    name: "Nitrite",
    key: "nitrite",
    icon: Microscope,
    unit: "mg/L",
    description: "Nitrite concentration",
    color: "bg-pink-50",
    iconColor: "text-pink-700",
  },
];

const navigation = [
  { icon: LayoutDashboard, label: "Dashboard", href: "/" },
  { icon: Waves, label: "Water Monitoring", href: "/water", active: true },
  { icon: Fish, label: "Fish Monitoring", href: "/fish" },
  { icon: TriangleAlert, label: "Alerts & Treatment", href: "/treatment" },
  { icon: Clock, label: "Feeding & Controls", href: "/feeding" },
];

function Sidebar() {
  return (
    <aside className="hidden w-64 shrink-0 flex-col bg-[#103f43] text-white md:flex">
      <div className="border-b border-white/10 px-5 py-7">
        <a href="/" className="flex items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-teal-400/15 text-2xl">
            <Fish size={22} aria-hidden="true" />
          </div>
          <div>
            <h1 className="text-sm font-bold tracking-wide">SMART AQUA</h1>
            <p className="mt-1 text-xs tracking-[0.16em] text-teal-200">
              POND SYSTEM
            </p>
          </div>
        </a>
      </div>

      <div className="px-4 pt-7">
        <p className="mb-3 px-3 text-[10px] font-bold uppercase tracking-[0.2em] text-teal-200/70">
          Monitoring System
        </p>
        <nav className="space-y-1.5">
          {navigation.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className={`flex items-center gap-3 rounded-xl px-3 py-3 text-sm transition ${
                item.active
                  ? "bg-teal-500 font-semibold text-white"
                  : "text-teal-50/75 hover:bg-white/10 hover:text-white"
              }`}
            >
              <span className="flex w-6 items-center justify-center text-lg">
                <item.icon size={18} aria-hidden="true" />
              </span>
              {item.label}
            </a>
          ))}
        </nav>
      </div>

      <div className="mt-auto p-5">
        <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
          <p className="text-sm font-semibold">Water Quality</p>
          <p className="mt-2 text-xs leading-5 text-teal-100/70">
            Monitor essential water parameters to help assess pond conditions.
          </p>
        </div>
        <p className="mt-5 text-center text-[10px] text-teal-100/40">
          MARINE ECOSYSTEM PROJECT
        </p>
      </div>
    </aside>
  );
}

function ParameterCard({ parameter }) {
  const Icon = parameter.icon;

  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:shadow-md">
      <div className="flex items-start justify-between gap-3">
        <div>
          <p className="text-sm font-medium text-slate-500">
            {parameter.name}
          </p>
          <div className="mt-4 flex items-baseline gap-1.5">
            <span className="text-3xl font-bold tracking-tight text-slate-800">
              --
            </span>
            <span className="text-xs text-slate-500">{parameter.unit}</span>
          </div>
        </div>
        <div
          className={`flex h-11 w-11 items-center justify-center rounded-xl text-xl ${parameter.color} ${parameter.iconColor}`}
        >
          <Icon size={22} aria-hidden="true" />
        </div>
      </div>

      <div className="mt-4 border-t border-slate-100 pt-3">
        <p className="text-xs text-slate-500">{parameter.description}</p>
        <p className="mt-1 text-xs text-slate-400">Awaiting sensor data</p>
      </div>
    </div>
  );
}

function SectionHeading({ title, subtitle }) {
  return (
    <div className="mb-5">
      <h2 className="text-base font-bold text-slate-800">{title}</h2>
      <p className="mt-1 text-sm leading-5 text-slate-500">{subtitle}</p>
    </div>
  );
}

export default function WaterQualityPage() {
  const [selectedPeriod, setSelectedPeriod] = useState("24 hours");

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800">
      <div className="flex min-h-screen">
        <Sidebar />

        <main className="min-w-0 flex-1">
          {/* Header */}
          <header className="flex min-h-[76px] items-center justify-between gap-4 border-b border-slate-200 bg-white px-5 sm:px-8">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-teal-50 text-xl md:hidden">
                <Droplets size={20} aria-hidden="true" />
              </div>
              <div>
                <p className="text-sm font-bold text-slate-800">
                  SMART Aqua Pond
                </p>
                <p className="mt-1 text-xs text-slate-500">
                  Water Quality Monitoring
                </p>
              </div>
            </div>

            <span className="rounded-full bg-amber-50 px-3 py-1.5 text-xs font-semibold text-amber-700">
              Awaiting hardware
            </span>
          </header>

          <div className="mx-auto max-w-[1600px] p-5 sm:p-8 lg:p-10">
            {/* Page title */}
            <div className="mb-8">
              <a
                href="/"
                className="mb-4 inline-flex items-center gap-2 text-sm font-medium text-teal-700 hover:text-teal-900"
              >
                ← Back to Dashboard
              </a>

              <p className="mb-2 text-xs font-bold uppercase tracking-[0.18em] text-teal-700">
                MONITORING
              </p>
              <h1 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
                Water Quality Monitoring
              </h1>
              <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-500">
                Monitor essential parameters for fishpond production and review
                measurements that may affect fish health.
              </p>
            </div>

            {/* Connection notice */}
            <div className="mb-8 flex flex-col gap-3 rounded-2xl border border-amber-200 bg-amber-50 p-4 sm:flex-row sm:items-center sm:justify-between sm:p-5">
              <div className="flex items-start gap-3">
                <Info size={20} aria-hidden="true" />
                <div>
                  <p className="text-sm font-semibold text-amber-900">
                    Sensor readings are not available yet
                  </p>
                  <p className="mt-1 text-sm leading-5 text-amber-800">
                    Values will appear when the required sensors or testing
                    methods and backend connection are configured.
                  </p>
                </div>
              </div>
              <span className="shrink-0 self-start rounded-full bg-white px-3 py-1.5 text-xs font-semibold text-amber-800 sm:self-center">
                No live data
              </span>
            </div>

            {/* Parameter cards */}
            <section className="mb-9">
              <SectionHeading
                title="Essential Water Parameters"
                subtitle="Current readings for the main water-quality measurements"
              />

              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-3">
                {initialParameters.map((parameter) => (
                  <ParameterCard
                    key={parameter.key}
                    parameter={parameter}
                  />
                ))}
              </div>
            </section>

            {/* Optional additional measurement */}
            <section className="mb-9 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
              <SectionHeading
                title="Additional Water Measurements"
                subtitle="Other measurements may be added based on the final hardware design"
              />

              <div className="flex flex-col gap-4 rounded-xl border border-dashed border-slate-300 bg-slate-50 p-4 sm:flex-row sm:items-center sm:justify-between">
                <div className="flex items-center gap-3">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-sky-50 text-xl">
                    <Waves size={22} aria-hidden="true" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-slate-700">
                      Dissolved Oxygen
                    </p>
                    <p className="mt-1 text-xs leading-5 text-slate-500">
                      Optional measurement if a suitable sensor is selected.
                    </p>
                  </div>
                </div>
                <span className="self-start rounded-full bg-slate-200 px-3 py-1.5 text-xs font-semibold text-slate-600 sm:self-center">
                  Not configured
                </span>
              </div>
            </section>

            {/* History */}
            <section className="mb-9 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
              <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-start">
                <SectionHeading
                  title="Water Parameter History"
                  subtitle="Review changes in recorded water measurements over time"
                />

                <div className="flex shrink-0 flex-wrap gap-2">
                  {["24 hours", "7 days", "30 days"].map((period) => (
                    <button
                      key={period}
                      type="button"
                      onClick={() => setSelectedPeriod(period)}
                      className={`rounded-lg px-3 py-2 text-xs font-semibold transition ${
                        selectedPeriod === period
                          ? "bg-teal-700 text-white"
                          : "border border-slate-200 bg-white text-slate-600 hover:bg-slate-50"
                      }`}
                    >
                      {period}
                    </button>
                  ))}
                </div>
              </div>

              <div className="relative flex min-h-64 items-center justify-center overflow-hidden rounded-xl bg-slate-50 p-5">
                <div className="absolute inset-5 flex flex-col justify-between">
                  {[1, 2, 3, 4, 5].map((line) => (
                    <div
                      key={line}
                      className="border-t border-dashed border-slate-200"
                    />
                  ))}
                </div>

                <div className="relative max-w-sm text-center">
                  <div className="mx-auto mb-3 flex h-14 w-14 items-center justify-center rounded-2xl bg-white text-2xl shadow-sm">
                    <TrendingUp size={24} aria-hidden="true" />
                  </div>
                  <h3 className="text-sm font-semibold text-slate-700">
                    No historical readings
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-slate-500">
                    Data for the selected period ({selectedPeriod}) will be
                    displayed here when measurements have been collected and
                    stored.
                  </p>
                </div>
              </div>

              <p className="mt-3 text-xs text-slate-400">
                The period selector is a frontend preview; it does not retrieve
                historical data yet.
              </p>
            </section>

            {/* Assessment */}
            <section className="mb-9 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
              <SectionHeading
                title="Water Quality Assessment"
                subtitle="Review measurements and identify conditions that may require attention"
              />

              <div className="rounded-xl border border-slate-100 p-4 sm:p-5">
                <div className="flex items-start gap-3">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-teal-50 text-xl">
                    <Search size={20} aria-hidden="true" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-slate-700">
                      Assessment pending
                    </p>
                    <p className="mt-2 text-sm leading-6 text-slate-500">
                      Water conditions cannot be assessed until measurements
                      are available. When readings are collected, they can be
                      compared with appropriate guidance for the fish species
                      being raised.
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-4 rounded-xl border border-sky-100 bg-sky-50 p-4">
                <p className="text-sm font-semibold text-sky-900">
                  When abnormal conditions are suspected
                </p>
                <ul className="mt-2 list-disc space-y-1.5 pl-5 text-sm leading-6 text-sky-800">
                  <li>Verify the water measurements.</li>
                  <li>Check for abnormal temperature or pH.</li>
                  <li>
                    Test ammonia, nitrite, and nitrate using the methods
                    available to the project.
                  </li>
                  <li>
                    Follow appropriate fish-care guidance before taking
                    corrective action.
                  </li>
                </ul>
              </div>
            </section>

            {/* Latest update */}
            <section className="mb-9 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
              <SectionHeading
                title="Data Update Status"
                subtitle="Information about the availability and freshness of measurements"
              />

              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div className="rounded-xl bg-slate-50 p-4">
                  <p className="text-xs text-slate-500">
                    Latest measurement
                  </p>
                  <p className="mt-2 text-sm font-semibold text-slate-700">
                    Not available
                  </p>
                </div>
                <div className="rounded-xl bg-slate-50 p-4">
                  <p className="text-xs text-slate-500">
                    Data source status
                  </p>
                  <p className="mt-2 text-sm font-semibold text-slate-700">
                    Awaiting integration
                  </p>
                </div>
              </div>
            </section>

            <footer className="border-t border-slate-200 pt-5 text-xs leading-5 text-slate-400">
              <p>SMART Aqua Pond · Marine Ecosystem Project</p>
              <p className="mt-1">
                Water monitoring prototype · Live readings and history are not
                connected
              </p>
            </footer>
          </div>
        </main>
      </div>
    </div>
  );
}
