
import {
  CalendarDays,
  Clock,
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
  { icon: TriangleAlert, label: "Alerts & Treatment", href: "/treatment", active: false },
  { icon: Clock, label: "Feeding & Controls", href: "/feeding", active: true },
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
          <p className="text-sm font-semibold">Feeding & Controls</p>
          <p className="mt-2 text-xs leading-5 text-teal-100/70">
            Review feeding schedules and monitor the readiness of the
            automatic fish feeder.
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

function SummaryCard({ title, value, description, icon: Icon }) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
      <div className="flex items-start justify-between gap-3">
        <div>
          <p className="text-sm text-slate-500">{title}</p>
          <p className="mt-3 text-2xl font-bold text-slate-800">{value}</p>
          <p className="mt-2 text-xs leading-5 text-slate-400">
            {description}
          </p>
        </div>
        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-teal-50 text-xl">
          <Icon size={20} aria-hidden="true" />
        </div>
      </div>
    </div>
  );
}

function DetailRow({ title, description, status }) {
  const Icon = title === "Automatic Feeding" ? Clock : Settings;

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
      <StatusPill>{status}</StatusPill>
    </div>
  );
}

function SchedulePlaceholder() {
  return (
    <tr>
      <td colSpan={3} className="px-4 py-10 text-center">
        <CalendarDays className="mx-auto" size={32} aria-hidden="true" />
        <p className="mt-3 text-sm font-semibold text-slate-700">
          No feeding schedule configured
        </p>
        <p className="mt-1 text-xs leading-5 text-slate-400">
          Feeding times and quantities can be added after the feeder
          requirements are finalized.
        </p>
      </td>
    </tr>
  );
}

export default function FeedingPage() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-800">
      <div className="flex min-h-screen">
        <Sidebar />

        <main className="min-w-0 flex-1">
          {/* Header */}
          <header className="flex min-h-[76px] items-center justify-between gap-4 border-b border-slate-200 bg-white px-5 sm:px-8">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-teal-50 text-xl md:hidden">
                <Fish size={20} aria-hidden="true" />
              </div>
              <div>
                <p className="text-sm font-bold text-slate-800">
                  SMART Aqua Pond
                </p>
                <p className="mt-1 text-xs text-slate-500">
                  Feeding & Controls
                </p>
              </div>
            </div>

            <StatusPill color="amber">Awaiting hardware setup</StatusPill>
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
                FEEDING MANAGEMENT
              </p>

              <h1 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
                Feeding & Controls
              </h1>

              <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-500">
                Review the fish-feeding schedule, check feeder readiness,
                and monitor feeding records. Actual feeder operation will
                be available after the hardware and backend are connected.
              </p>
            </div>

            {/* Hardware notice */}
            <div className="mb-8 rounded-2xl border border-amber-200 bg-amber-50 p-5">
              <div className="flex items-start gap-3">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white text-xl">
                  <Info size={20} aria-hidden="true" />
                </div>
                <div>
                  <h2 className="text-sm font-bold text-amber-900">
                    Fish feeder is not connected yet
                  </h2>
                  <p className="mt-2 text-sm leading-6 text-amber-800">
                    Feeding schedules, feeder status, and feeding records
                    cannot be confirmed until the actual equipment and
                    data connection are configured.
                  </p>
                </div>
              </div>
            </div>

            {/* Summary cards */}
            <section className="mb-9">
              <SectionHeading
                title="Feeding Overview"
                subtitle="Summary of the available feeding information"
              />

              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-3">
                <SummaryCard
                  title="Feeder Status"
                  value="Not configured"
                  description="Awaiting hardware connection"
                  icon={Settings}
                />

                <SummaryCard
                  title="Next Feeding"
                  value="--"
                  description="No schedule available"
                  icon={Clock}
                />

                <SummaryCard
                  title="Today's Feedings"
                  value="--"
                  description="Awaiting feeding records"
                  icon={Fish}
                />
              </div>
            </section>

            {/* Feeding schedule */}
            <section className="mb-9 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
              <SectionHeading
                title="Feeding Schedule"
                subtitle="Planned times and quantities for automatic fish feeding"
              />

              <div className="overflow-x-auto">
                <table className="w-full min-w-[520px] text-left text-sm">
                  <thead>
                    <tr className="border-b border-slate-200 bg-slate-50 text-slate-500">
                      <th className="px-4 py-3 font-semibold">Feeding Time</th>
                      <th className="px-4 py-3 font-semibold">Feed Amount</th>
                      <th className="px-4 py-3 font-semibold">Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    <SchedulePlaceholder />
                  </tbody>
                </table>
              </div>

              <div className="mt-5 rounded-xl border border-slate-100 bg-slate-50 p-4">
                <p className="text-sm font-semibold text-slate-700">
                  Automatic Feeding
                </p>
                <p className="mt-1 text-sm leading-6 text-slate-500">
                  The system can follow a configured feeding schedule
                  after the feeder, suitable feeding quantities, and
                  operating safeguards have been established.
                </p>
              </div>
            </section>

            {/* Feeder controls */}
            <section className="mb-9 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
              <SectionHeading
                title="Feeder Controls"
                subtitle="Planned manual and automatic feeding options"
              />

              <div className="mb-5 rounded-xl border border-dashed border-slate-300 bg-slate-50 p-6 text-center">
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-xl bg-teal-50 text-2xl">
                  <Settings size={24} aria-hidden="true" />
                </div>

                <h3 className="mt-4 text-sm font-bold text-slate-700">
                  Controls are unavailable
                </h3>

                <p className="mx-auto mt-2 max-w-md text-sm leading-6 text-slate-500">
                  Connect and configure the feeder hardware and backend
                  before enabling feeding commands.
                </p>

                <button
                  type="button"
                  disabled
                  className="mt-5 cursor-not-allowed rounded-xl bg-slate-200 px-5 py-3 text-sm font-semibold text-slate-500"
                  title="Feeder hardware is not configured"
                >
                  Feed Now — Unavailable
                </button>
              </div>

              <DetailRow
                title="Automatic Feeding"
                description="Follow the configured feeding schedule when the system is ready."
                status="Not configured"
              />

              <DetailRow
                title="Manual Feeding"
                description="Allow an authorized user to initiate feeding when hardware and safety checks are ready."
                status="Unavailable"
              />
            </section>

            {/* Feeding history */}
            <section className="mb-9 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
              <SectionHeading
                title="Feeding History"
                subtitle="Records of feeding events received from the system"
              />

              <div className="overflow-x-auto">
                <table className="w-full min-w-[560px] text-left text-sm">
                  <thead>
                    <tr className="border-b border-slate-200 bg-slate-50 text-slate-500">
                      <th className="px-4 py-3 font-semibold">Date & Time</th>
                      <th className="px-4 py-3 font-semibold">Feeding Mode</th>
                      <th className="px-4 py-3 font-semibold">Feed Amount</th>
                      <th className="px-4 py-3 font-semibold">Result</th>
                    </tr>
                  </thead>

                  <tbody>
                    <tr>
                      <td
                        colSpan={4}
                        className="px-4 py-10 text-center text-sm text-slate-500"
                      >
                        No feeding history available.
                        <p className="mt-1 text-xs text-slate-400">
                          Records will appear after feeding data is received.
                        </p>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* Integration notes */}
            <section className="mb-9 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
              <SectionHeading
                title="Equipment & Integration Status"
                subtitle="Current readiness of the planned feeding functions"
              />

              <DetailRow
                title="Feeder Hardware"
                description="The feeder model and supported control method have not been finalized."
                status="Not configured"
              />

              <DetailRow
                title="Backend Connection"
                description="A backend connection is required to receive feeder status and save feeding records."
                status="Pending"
              />

              <DetailRow
                title="Feeding Schedule"
                description="Feeding times and quantities must be set according to the selected fish species and its requirements."
                status="Not configured"
              />
            </section>

            {/* Footer */}
            <footer className="border-t border-slate-200 pt-5 text-xs leading-5 text-slate-400">
              <p>SMART Aqua Pond · Marine Ecosystem Project</p>
              <p className="mt-1">
                Feeding management prototype · Live equipment controls are
                not connected
              </p>
            </footer>
          </div>
        </main>
      </div>
    </div>
  );
}
