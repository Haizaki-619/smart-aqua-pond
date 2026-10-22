
import {
  Clock,
  Droplets,
  Fish,
  Info,
  LayoutDashboard,
  Settings,
  TriangleAlert,
  Waves,
} from "lucide-react";

const navigation = [
  { icon: LayoutDashboard, label: "Dashboard", href: "/", active: false },
  { icon: Waves, label: "Water Monitoring", href: "/water", active: false },
  { icon: Fish, label: "Fish Monitoring", href: "/fish", active: false },
  { icon: TriangleAlert, label: "Alerts & Treatment", href: "/treatment", active: true },
  { icon: Clock, label: "Feeding & Controls", href: "/feeding", active: false },
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
          <p className="text-sm font-semibold">Alerts & Treatment</p>
          <p className="mt-2 text-xs leading-5 text-teal-100/70">
            Review abnormal water conditions and possible signs of fish stress.
          </p>
        </div>
        <p className="mt-5 text-center text-[10px] text-teal-100/40">
          MARINE ECOSYSTEM PROJECT
        </p>
      </div>
    </aside>
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

function StatusPill({ children, color = "gray" }) {
  const styles = {
    gray: "bg-slate-100 text-slate-600",
    amber: "bg-amber-50 text-amber-700",
    red: "bg-red-50 text-red-700",
    blue: "bg-sky-50 text-sky-700",
    green: "bg-emerald-50 text-emerald-700",
  };

  return (
    <span
      className={`inline-flex items-center rounded-full px-2.5 py-1 text-xs font-semibold ${
        styles[color] || styles.gray
      }`}
    >
      {children}
    </span>
  );
}

function StepCard({ number, title, description }) {
  return (
    <div className="flex gap-3 rounded-xl border border-slate-100 p-4">
      <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-teal-50 text-sm font-bold text-teal-800">
        {number}
      </div>
      <div>
        <h3 className="text-sm font-semibold text-slate-700">{title}</h3>
        <p className="mt-1 text-sm leading-6 text-slate-500">{description}</p>
      </div>
    </div>
  );
}

function AlertRow({ title, description, status }) {
  const Icon = status === "Water" ? Droplets : Fish;

  return (
    <div className="flex flex-col gap-3 border-b border-slate-100 py-4 last:border-0 sm:flex-row sm:items-start sm:justify-between">
      <div className="flex items-start gap-3">
        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-slate-100 text-lg">
          <Icon size={20} aria-hidden="true" />
        </div>
        <div>
          <p className="text-sm font-semibold text-slate-700">{title}</p>
          <p className="mt-1 text-sm leading-5 text-slate-500">
            {description}
          </p>
        </div>
      </div>
      <StatusPill>{status === "Water" ? "Awaiting readings" : "Awaiting analysis"}</StatusPill>
    </div>
  );
}

export default function TreatmentPage() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-800">
      <div className="flex min-h-screen">
        <Sidebar />

        <main className="min-w-0 flex-1">
          {/* Header */}
          <header className="flex min-h-[76px] items-center justify-between gap-4 border-b border-slate-200 bg-white px-5 sm:px-8">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-teal-50 text-xl md:hidden">
                <TriangleAlert size={20} aria-hidden="true" />
              </div>
              <div>
                <p className="text-sm font-bold text-slate-800">
                  SMART Aqua Pond
                </p>
                <p className="mt-1 text-xs text-slate-500">
                  Alerts & Treatment
                </p>
              </div>
            </div>
            <StatusPill color="amber">Awaiting monitoring data</StatusPill>
          </header>

          <div className="mx-auto max-w-[1600px] p-5 sm:p-8 lg:p-10">
            {/* Page introduction */}
            <div className="mb-8">
              <a
                href="/"
                className="mb-4 inline-flex items-center gap-2 text-sm font-medium text-teal-700 hover:text-teal-900"
              >
                ← Back to Dashboard
              </a>

              <p className="mb-2 text-xs font-bold uppercase tracking-[0.18em] text-teal-700">
                POND HEALTH
              </p>
              <h1 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
                Alerts & Treatment
              </h1>
              <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-500">
                Review abnormal water measurements and possible signs of fish
                stress, then follow appropriate assessment and treatment steps.
              </p>
            </div>

            {/* Monitoring status */}
            <div className="mb-8 rounded-2xl border border-amber-200 bg-amber-50 p-5">
              <div className="flex items-start gap-3">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white text-xl">
                  <Info size={20} aria-hidden="true" />
                </div>
                <div>
                  <h2 className="text-sm font-bold text-amber-900">
                    Alert monitoring is not connected yet
                  </h2>
                  <p className="mt-2 text-sm leading-6 text-amber-800">
                    Live alerts require water-quality readings or fish-analysis
                    results. No actual pond condition can be assessed until
                    those data sources are available.
                  </p>
                </div>
              </div>
            </div>

            {/* Alert summary cards */}
            <section className="mb-9">
              <SectionHeading
                title="Alert Summary"
                subtitle="Overview of available monitoring results"
              />

              <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
                <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                  <p className="text-sm text-slate-500">Water Alerts</p>
                  <p className="mt-3 text-3xl font-bold text-slate-800">--</p>
                  <p className="mt-2 text-xs text-slate-400">
                    Awaiting water measurements
                  </p>
                </div>

                <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                  <p className="text-sm text-slate-500">Fish Stress Alerts</p>
                  <p className="mt-3 text-3xl font-bold text-slate-800">--</p>
                  <p className="mt-2 text-xs text-slate-400">
                    Awaiting camera analysis
                  </p>
                </div>

                <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                  <p className="text-sm text-slate-500">Treatment Status</p>
                  <p className="mt-3 text-xl font-bold text-slate-800">
                    Not configured
                  </p>
                  <p className="mt-2 text-xs text-slate-400">
                    No treatment equipment connected
                  </p>
                </div>
              </div>
            </section>

            {/* Alert list */}
            <section className="mb-9 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
              <SectionHeading
                title="Recent Alerts"
                subtitle="Water-quality abnormalities and possible signs of fish stress"
              />

              <AlertRow
                title="Water Quality Monitoring"
                description="Abnormal readings can be listed here after measurements become available and are compared with suitable thresholds."
                status="Water"
              />

              <AlertRow
                title="Possible Fish Stress"
                description="Possible changes in behavior, body color, or physical appearance can be listed after camera analysis is implemented."
                status="Fish"
              />

              <p className="mt-4 text-xs leading-5 text-slate-400">
                These are monitoring categories, not actual alerts. No abnormal
                conditions have been confirmed by this prototype.
              </p>
            </section>

            {/* Treatment procedure */}
            <section className="mb-9 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
              <SectionHeading
                title="Immediate Treatment Steps"
                subtitle="Assessment and response when abnormal conditions or possible fish stress are suspected"
              />

              <div className="space-y-3">
                <StepCard
                  number="1"
                  title="Test Water Parameters"
                  description="Check for toxic spikes in ammonia, nitrite, and nitrate, abnormal pH, or improper water temperature."
                />

                <StepCard
                  number="2"
                  title="Assess the Results"
                  description="Verify measurements and compare them with appropriate guidance for the fish species and pond conditions."
                />

                <StepCard
                  number="3"
                  title="Consider a Partial Water Change"
                  description="When water parameters are unstable or high, a 10–25% partial water change may be appropriate using temperature-matched, dechlorinated water."
                />

                <StepCard
                  number="4"
                  title="Reassess Pond Conditions"
                  description="Recheck the water parameters and observe the fish after corrective action to help determine whether further attention is needed."
                />
              </div>

              <div className="mt-5 rounded-xl border border-amber-100 bg-amber-50 p-4">
                <p className="text-sm font-semibold text-amber-900">
                  Treatment safety
                </p>
                <p className="mt-1 text-sm leading-6 text-amber-800">
                  Treatment must depend on verified measurements and
                  appropriate fish-care guidance. The system should not
                  automatically change pond water or activate equipment
                  without suitable controls and safeguards.
                </p>
              </div>
            </section>

            {/* Sensors and actuators */}
            <section className="mb-9 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
              <SectionHeading
                title="Sensors and Actuators for Stress Relief"
                subtitle="Planned equipment support, subject to the final hardware design"
              />

              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div className="rounded-xl border border-slate-100 p-4">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-sky-50 text-xl">
                      <Droplets size={20} aria-hidden="true" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-slate-700">
                        Water Monitoring Sensors
                      </p>
                      <p className="mt-1 text-xs text-slate-500">
                        Provide measurements for assessment
                      </p>
                    </div>
                  </div>
                  <div className="mt-4">
                    <StatusPill>Not configured</StatusPill>
                  </div>
                </div>

                <div className="rounded-xl border border-slate-100 p-4">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-teal-50 text-xl">
                      <Settings size={20} aria-hidden="true" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-slate-700">
                        Treatment Actuators
                      </p>
                      <p className="mt-1 text-xs text-slate-500">
                        Support appropriate corrective actions if implemented
                      </p>
                    </div>
                  </div>
                  <div className="mt-4">
                    <StatusPill>Not configured</StatusPill>
                  </div>
                </div>
              </div>
            </section>

            {/* Footer */}
            <footer className="border-t border-slate-200 pt-5 text-xs leading-5 text-slate-400">
              <p>SMART Aqua Pond · Marine Ecosystem Project</p>
              <p className="mt-1">
                Alerts and treatment prototype · Live monitoring and equipment
                controls are not connected
              </p>
            </footer>
          </div>
        </main>
      </div>
    </div>
  );
}
