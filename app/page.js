
const navigation = [
  { icon: "▦", label: "Dashboard", href: "/" },
  { icon: "≋", label: "Water Monitoring", href: "/water" },
  { icon: "🐟", label: "Fish Monitoring", href: "/fish" },
  { icon: "⚠", label: "Alerts & Treatment", href: "/treatment" },
  { icon: "◷", label: "Feeding & Controls", href: "/feeding" },
];

function SectionTitle({ title, subtitle, action }) {
  return (
    <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
      <div>
        <h2 className="text-base font-bold text-slate-800">{title}</h2>
        {subtitle && (
          <p className="mt-1 text-sm text-slate-500">{subtitle}</p>
        )}
      </div>
      {action && (
        <a
          href={action.href}
          className="text-sm font-semibold text-teal-700 transition hover:text-teal-900"
        >
          {action.label} →
        </a>
      )}
    </div>
  );
}

function MetricCard({ icon, label, value, unit, description, accent }) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md">
      <div className="flex items-start justify-between gap-3">
        <div>
          <p className="text-sm font-medium text-slate-500">{label}</p>
          <div className="mt-3 flex items-baseline gap-1.5">
            <span className="text-3xl font-bold tracking-tight text-slate-800">
              {value}
            </span>
            {unit && (
              <span className="text-sm font-medium text-slate-500">
                {unit}
              </span>
            )}
          </div>
        </div>
        <div
          className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl text-xl ${accent}`}
        >
          {icon}
        </div>
      </div>
      <div className="mt-4 flex items-center gap-2 border-t border-slate-100 pt-3">
        <span className="h-2 w-2 rounded-full bg-slate-400" />
        <p className="text-xs text-slate-500">{description}</p>
      </div>
    </div>
  );
}

function EmptyState({ icon, title, description }) {
  return (
    <div className="flex min-h-48 flex-col items-center justify-center px-5 py-8 text-center">
      <div className="mb-3 flex h-14 w-14 items-center justify-center rounded-2xl bg-teal-50 text-2xl">
        {icon}
      </div>
      <h3 className="text-sm font-semibold text-slate-700">{title}</h3>
      <p className="mt-2 max-w-xs text-sm leading-6 text-slate-500">
        {description}
      </p>
    </div>
  );
}

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-800">
      <div className="flex min-h-screen">
        {/* Sidebar */}
        <aside className="flex w-64 shrink-0 flex-col bg-[#103f43] text-white max-lg:w-56 max-md:hidden">
          <div className="border-b border-white/10 px-6 py-7">
            <div className="flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-teal-400/15 text-2xl">
                🐟
              </div>
              <div>
                <h1 className="text-sm font-bold tracking-wide">
                  SMART AQUA
                </h1>
                <p className="mt-1 text-xs tracking-[0.18em] text-teal-200">
                  POND SYSTEM
                </p>
              </div>
            </div>
          </div>

          <div className="px-4 pt-7">
            <p className="mb-3 px-3 text-[10px] font-bold uppercase tracking-[0.2em] text-teal-200/70">
              Main Menu
            </p>
            <nav className="space-y-1.5">
              {navigation.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className={`flex items-center gap-3 rounded-xl px-3 py-3 text-sm transition ${
                    item.active
                      ? "bg-teal-500 font-semibold text-white shadow-lg shadow-black/10"
                      : "text-teal-50/75 hover:bg-white/10 hover:text-white"
                  }`}
                >
                  <span className="flex w-6 items-center justify-center text-lg">
                    {item.icon}
                  </span>
                  {item.label}
                </a>
              ))}
            </nav>
          </div>

          <div className="mt-auto p-5">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
              <div className="mb-3 flex h-9 w-9 items-center justify-center rounded-xl bg-teal-400/15 text-lg">
                ♧
              </div>
              <p className="text-sm font-semibold">Healthy pond, healthy fish</p>
              <p className="mt-2 text-xs leading-5 text-teal-100/65">
                Monitor water conditions and support better fish care.
              </p>
            </div>
            <p className="mt-5 text-center text-[10px] text-teal-100/40">
              SMART AQUA POND · PROTOTYPE
            </p>
          </div>
        </aside>

        {/* Main content */}
        <main id="dashboard" className="min-w-0 flex-1">
          {/* Top bar */}
          <header className="sticky top-0 z-10 flex min-h-[76px] items-center justify-between gap-4 border-b border-slate-200 bg-white/95 px-5 backdrop-blur sm:px-8 lg:px-10">
            <div className="flex items-center gap-3">
              <div className="hidden h-10 w-10 items-center justify-center rounded-xl bg-teal-50 text-xl text-teal-800 max-md:flex">
                🐟
              </div>
              <div>
                <p className="text-sm font-bold text-slate-800">
                  SMART Aqua Pond
                </p>
                <p className="mt-0.5 text-xs text-slate-500">
                  Marine Ecosystem Monitoring
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="hidden text-right sm:block">
                <p className="text-xs font-semibold text-slate-700">
                  System Status
                </p>
                <p className="mt-1 flex items-center justify-end gap-1.5 text-xs text-slate-500">
                  <span className="h-2 w-2 rounded-full bg-amber-400" />
                  Setup in progress
                </p>
              </div>
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-teal-100 text-lg">
                👤
              </div>
            </div>
          </header>

          {/* Dashboard body */}
          <div className="mx-auto max-w-[1600px] p-5 sm:p-8 lg:p-10">
            {/* Page heading */}
            <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
              <div>
                <p className="mb-2 text-xs font-bold uppercase tracking-[0.18em] text-teal-700">
                  OVERVIEW
                </p>
                <h1 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
                  Dashboard
                </h1>
                <p className="mt-2 max-w-xl text-sm leading-6 text-slate-500">
                  Monitor your pond environment, fish condition, and system
                  activity in one place.
                </p>
              </div>
              <div className="rounded-xl border border-slate-200 bg-white px-4 py-2.5 shadow-sm">
                <p className="text-xs text-slate-500">Data connection</p>
                <p className="mt-1 flex items-center gap-2 text-sm font-semibold text-slate-700">
                  <span className="h-2 w-2 rounded-full bg-amber-400" />
                  Awaiting hardware
                </p>
              </div>
            </div>

            {/* Metric cards */}
            <div className="mb-8 grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-3">
              <MetricCard
                icon="🌡️"
                label="Water Temperature"
                value="--"
                unit="°C"
                description="Awaiting sensor data"
                accent="bg-orange-50"
              />
              <MetricCard
                icon="💧"
                label="Water pH Level"
                value="--"
                description="Awaiting sensor data"
                accent="bg-sky-50"
              />
              <MetricCard
                icon="🐟"
                label="Fish Monitoring"
                value="Pending"
                description="Camera not connected"
                accent="bg-teal-50"
              />
            </div>

            {/* Middle row */}
            <div className="mb-8 grid grid-cols-1 gap-6 xl:grid-cols-5">
              {/* Water quality chart placeholder */}
              <section
                id="water"
                className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm xl:col-span-3"
              >
                <div className="border-b border-slate-100 p-5 sm:p-6">
                  <SectionTitle
                    title="Water Quality Overview"
                    subtitle="Water parameter trends over time"
                  />
                  <div className="flex flex-wrap gap-4 text-xs text-slate-500">
                    <span className="flex items-center gap-2">
                      <span className="h-2.5 w-2.5 rounded-full bg-teal-600" />
                      Temperature
                    </span>
                    <span className="flex items-center gap-2">
                      <span className="h-2.5 w-2.5 rounded-full bg-sky-500" />
                      pH Level
                    </span>
                  </div>
                </div>

                <div className="p-5 sm:p-6">
                  <div className="relative flex min-h-52 items-center justify-center overflow-hidden rounded-xl bg-slate-50">
                    <div className="absolute inset-0 flex flex-col justify-between p-5">
                      {[1, 2, 3, 4].map((line) => (
                        <div
                          key={line}
                          className="border-t border-dashed border-slate-200"
                        />
                      ))}
                    </div>
                    <div className="relative mx-5 max-w-xs text-center">
                      <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-white text-xl shadow-sm">
                        ↗
                      </div>
                      <p className="text-sm font-semibold text-slate-700">
                        No readings available yet
                      </p>
                      <p className="mt-2 text-xs leading-5 text-slate-500">
                        The chart will display water-quality trends after
                        sensors and data storage are connected.
                      </p>
                    </div>
                  </div>
                  <p className="mt-3 text-xs text-slate-400">
                    Chart preview · No real sensor readings
                  </p>
                </div>
              </section>

              {/* Fish camera placeholder */}
              <section
                id="fish"
                className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm xl:col-span-2"
              >
                <div className="p-5 sm:p-6">
                  <SectionTitle
                    title="Fish Monitoring"
                    subtitle="Camera and visual observation"
                    action={{ label: "View details", href: "/fish" }}
                  />

                  <div className="relative flex min-h-52 flex-col items-center justify-center overflow-hidden rounded-xl bg-[#103f43] px-5 py-8 text-center">
                    <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full border border-white/5" />
                    <div className="absolute -bottom-14 -left-8 h-44 w-44 rounded-full border border-white/5" />
                    <div className="relative mb-4 flex h-16 w-16 items-center justify-center rounded-2xl border border-white/10 bg-white/10 text-3xl">
                      📷
                    </div>
                    <p className="relative text-sm font-semibold text-white">
                      Camera feed unavailable
                    </p>
                    <p className="relative mt-2 max-w-xs text-xs leading-5 text-teal-100/70">
                      Live pond footage and fish-condition analysis will appear
                      here when the camera is connected.
                    </p>
                    <span className="relative mt-4 rounded-full bg-white/10 px-3 py-1.5 text-[11px] font-medium text-teal-100">
                      Awaiting camera setup
                    </span>
                  </div>

                  <div className="mt-4 flex items-center justify-between rounded-xl bg-slate-50 p-3">
                    <div>
                      <p className="text-xs font-medium text-slate-600">
                        Fish condition analysis
                      </p>
                      <p className="mt-1 text-xs text-slate-400">
                        Detection not configured
                      </p>
                    </div>
                    <span className="rounded-lg bg-slate-200 px-2.5 py-1.5 text-xs font-semibold text-slate-600">
                      Pending
                    </span>
                  </div>
                </div>
              </section>
            </div>

            {/* Bottom row */}
            <div className="grid grid-cols-1 gap-6 xl:grid-cols-2">
              {/* Recent alerts */}
              <section
                id="alerts"
                className="rounded-2xl border border-slate-200 bg-white shadow-sm"
              >
                <div className="border-b border-slate-100 p-5 sm:p-6">
                  <SectionTitle
                    title="Recent Alerts"
                    subtitle="Notifications requiring attention"
                    action={{
                      label: "View all",
                      href: "/treatment",
                    }}
                  />
                </div>
                <EmptyState
                  icon="🔔"
                  title="No alerts to display"
                  description="Water-quality warnings and fish-condition alerts will appear here when monitoring is operational."
                />
              </section>

              {/* Device status */}
              <section className="rounded-2xl border border-slate-200 bg-white shadow-sm">
                <div className="border-b border-slate-100 p-5 sm:p-6">
                  <SectionTitle
                    title="Device Status"
                    subtitle="Connected monitoring and control equipment"
                  />
                </div>

                <div className="divide-y divide-slate-100 px-5 sm:px-6">
                  {[
                    {
                      icon: "🌡️",
                      name: "Water Sensors",
                      detail: "Temperature and pH",
                    },
                    {
                      icon: "📷",
                      name: "Pond Camera",
                      detail: "Visual fish monitoring",
                    },
                    {
                      icon: "⚙️",
                      name: "Control Equipment",
                      detail: "Feeder and other actuators",
                    },
                  ].map((device) => (
                    <div
                      key={device.name}
                      className="flex items-center justify-between gap-3 py-4"
                    >
                      <div className="flex min-w-0 items-center gap-3">
                        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-slate-100 text-lg">
                          {device.icon}
                        </div>
                        <div className="min-w-0">
                          <p className="text-sm font-semibold text-slate-700">
                            {device.name}
                          </p>
                          <p className="mt-1 text-xs text-slate-500">
                            {device.detail}
                          </p>
                        </div>
                      </div>
                      <span className="shrink-0 rounded-full bg-slate-100 px-2.5 py-1.5 text-[10px] font-semibold text-slate-500">
                        Not configured
                      </span>
                    </div>
                  ))}
                </div>

                <div className="mx-5 mb-5 rounded-xl bg-amber-50 p-3 sm:mx-6">
                  <p className="text-xs leading-5 text-amber-800">
                    Device connections will be configured after the hardware
                    components are finalized.
                  </p>
                </div>
              </section>
            </div>

            {/* Feeding and controls */}
            <section
              id="feeding"
              className="mt-8 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6"
            >
              <SectionTitle
                title="Feeding & Controls"
                subtitle="Manage feeding schedules and pond equipment"
              />
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div className="flex items-start gap-4 rounded-xl border border-slate-100 p-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-orange-50 text-xl">
                    🐠
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-slate-700">
                      Automatic Fish Feeder
                    </p>
                    <p className="mt-1 text-xs leading-5 text-slate-500">
                      Feeding schedules and manual controls will be available
                      after the feeder is selected and connected.
                    </p>
                    <span className="mt-3 inline-block rounded-full bg-slate-100 px-2.5 py-1 text-[10px] font-semibold text-slate-500">
                      Not configured
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-4 rounded-xl border border-slate-100 p-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-sky-50 text-xl">
                    💧
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-slate-700">
                      Pond Treatment Controls
                    </p>
                    <p className="mt-1 text-xs leading-5 text-slate-500">
                      Appropriate treatment recommendations and equipment
                      controls will depend on measured water conditions.
                    </p>
                    <span className="mt-3 inline-block rounded-full bg-slate-100 px-2.5 py-1 text-[10px] font-semibold text-slate-500">
                      Not configured
                    </span>
                  </div>
                </div>
              </div>
            </section>

            {/* Footer */}
            <footer className="mt-8 flex flex-col justify-between gap-2 border-t border-slate-200 pt-5 text-xs text-slate-400 sm:flex-row">
              <p>SMART Aqua Pond · Marine Ecosystem Project</p>
              <p>Frontend prototype · Awaiting live data integration</p>
            </footer>
          </div>
        </main>
      </div>
    </div>
  );
}
