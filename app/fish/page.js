
const navigation = [
  { icon: "▦", label: "Dashboard", href: "/", active: false },
  { icon: "≋", label: "Water Monitoring", href: "/water", active: false },
  { icon: "🐟", label: "Fish Monitoring", href: "/fish", active: true },
  { icon: "⚠", label: "Alerts & Treatment", href: "/treatment", active: false },
  { icon: "◷", label: "Feeding & Controls", href: "/feeding", active: false },
];

function Sidebar() {
  return (
    <aside className="hidden w-64 shrink-0 flex-col bg-[#103f43] text-white md:flex">
      <div className="border-b border-white/10 px-5 py-7">
        <a href="/" className="flex items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-teal-400/15 text-2xl">
            🐟
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
                {item.icon}
              </span>
              {item.label}
            </a>
          ))}
        </nav>
      </div>

      <div className="mt-auto p-5">
        <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
          <p className="text-sm font-semibold">Fish Monitoring</p>
          <p className="mt-2 text-xs leading-5 text-teal-100/70">
            Observe fish varieties, habitat conditions, and possible signs
            of stress.
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
    green: "bg-emerald-50 text-emerald-700",
    blue: "bg-sky-50 text-sky-700",
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

function InformationCard({ icon, title, description }) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
      <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-teal-50 text-xl">
        {icon}
      </div>
      <h3 className="text-sm font-bold text-slate-800">{title}</h3>
      <p className="mt-2 text-sm leading-6 text-slate-500">{description}</p>
      <div className="mt-4 border-t border-slate-100 pt-3">
        <StatusPill>Awaiting setup</StatusPill>
      </div>
    </div>
  );
}

export default function FishMonitoringPage() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-800">
      <div className="flex min-h-screen">
        <Sidebar />

        <main className="min-w-0 flex-1">
          {/* Header */}
          <header className="flex min-h-[76px] items-center justify-between gap-4 border-b border-slate-200 bg-white px-5 sm:px-8">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-teal-50 text-xl md:hidden">
                🐟
              </div>
              <div>
                <p className="text-sm font-bold text-slate-800">
                  SMART Aqua Pond
                </p>
                <p className="mt-1 text-xs text-slate-500">
                  Fish Monitoring
                </p>
              </div>
            </div>

            <StatusPill color="amber">Awaiting hardware</StatusPill>
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
                FISH & HABITAT
              </p>

              <h1 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
                Fish Monitoring
              </h1>

              <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-500">
                Monitor the pond habitat, identify fish varieties, and
                examine possible signs of fish stress through camera-based
                observation and image analysis.
              </p>
            </div>

            {/* Camera connection notice */}
            <div className="mb-8 flex flex-col gap-3 rounded-2xl border border-amber-200 bg-amber-50 p-4 sm:flex-row sm:items-center sm:justify-between sm:p-5">
              <div className="flex items-start gap-3">
                <span className="text-xl">ⓘ</span>
                <div>
                  <p className="text-sm font-semibold text-amber-900">
                    Camera feed is not available
                  </p>
                  <p className="mt-1 text-sm leading-5 text-amber-800">
                    Live footage and image analysis will be available after
                    the camera and required software are configured.
                  </p>
                </div>
              </div>
              <StatusPill color="amber">Not connected</StatusPill>
            </div>

            {/* Camera preview */}
            <section className="mb-9 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
              <SectionHeading
                title="Habitat Camera Monitoring"
                subtitle="Observe the fishpond environment through the camera"
              />

              <div className="relative flex min-h-72 flex-col items-center justify-center overflow-hidden rounded-2xl bg-[#103f43] px-6 py-10 text-center sm:min-h-80">
                <div className="absolute -right-12 -top-12 h-56 w-56 rounded-full border border-white/10" />
                <div className="absolute -bottom-20 -left-12 h-64 w-64 rounded-full border border-white/10" />
                <div className="absolute right-1/4 top-1/3 h-32 w-32 rounded-full border border-white/5" />

                <div className="relative mb-4 flex h-16 w-16 items-center justify-center rounded-2xl border border-white/10 bg-white/10 text-3xl">
                  📷
                </div>

                <h3 className="relative text-base font-semibold text-white">
                  Camera Preview
                </h3>

                <p className="relative mt-2 max-w-md text-sm leading-6 text-teal-100/75">
                  The pond camera view will appear here when a compatible
                  camera is connected and its feed is made available to the
                  system.
                </p>

                <span className="relative mt-5 rounded-full bg-white/10 px-3 py-1.5 text-xs font-medium text-teal-100">
                  Waiting for camera setup
                </span>
              </div>

              <div className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-3">
                <div className="rounded-xl bg-slate-50 p-4">
                  <p className="text-xs text-slate-500">Camera connection</p>
                  <p className="mt-2 text-sm font-semibold text-slate-700">
                    Not configured
                  </p>
                </div>
                <div className="rounded-xl bg-slate-50 p-4">
                  <p className="text-xs text-slate-500">Latest image</p>
                  <p className="mt-2 text-sm font-semibold text-slate-700">
                    Not available
                  </p>
                </div>
                <div className="rounded-xl bg-slate-50 p-4">
                  <p className="text-xs text-slate-500">Habitat assessment</p>
                  <p className="mt-2 text-sm font-semibold text-slate-700">
                    Pending
                  </p>
                </div>
              </div>
            </section>

            {/* Fish identification */}
            <section className="mb-9">
              <SectionHeading
                title="Fish Variety Identification"
                subtitle="Identify possible fish varieties from camera images using a suitable image-recognition model"
              />

              <div className="grid grid-cols-1 gap-5 lg:grid-cols-2">
                <InformationCard
                  icon="🐠"
                  title="Fish Variety"
                  description="The identified fish variety and any available recognition results will appear here after image analysis is implemented."
                />

                <InformationCard
                  icon="🔎"
                  title="Identification Results"
                  description="The interface can display the model's prediction and confidence information when the selected recognition library supports them."
                />
              </div>
            </section>

            {/* Stress detection */}
            <section className="mb-9">
              <SectionHeading
                title="Fish Stress Detection"
                subtitle="Examine visual indicators that may suggest fish stress"
              />

              <div className="grid grid-cols-1 gap-5 lg:grid-cols-3">
                <InformationCard
                  icon="🏊"
                  title="Behavior Changes"
                  description="Observe unusual swimming, movement, or behavior compared with expected patterns."
                />

                <InformationCard
                  icon="🎨"
                  title="Body Color Changes"
                  description="Examine visible changes in coloration that may warrant further assessment."
                />

                <InformationCard
                  icon="🔬"
                  title="Physical Appearance"
                  description="Flag visible changes in physical appearance for closer observation."
                />
              </div>

              <div className="mt-5 rounded-2xl border border-sky-100 bg-sky-50 p-5">
                <div className="flex items-start gap-3">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white text-xl">
                    🧠
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-sky-900">
                      Open-Source Image Analysis
                    </h3>
                    <p className="mt-2 text-sm leading-6 text-sky-800">
                      A suitable open-source computer vision library may be
                      integrated to analyze fish images and flag possible
                      signs of stress. Actual detection depends on the
                      selected model, image quality, and validation.
                    </p>
                    <div className="mt-3">
                      <StatusPill color="blue">
                        Analysis not configured
                      </StatusPill>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Monitoring results */}
            <section className="mb-9 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
              <SectionHeading
                title="Fish Monitoring Results"
                subtitle="Review available identification and stress-analysis results"
              />

              <div className="overflow-x-auto">
                <table className="w-full min-w-[600px] text-left text-sm">
                  <thead>
                    <tr className="border-b border-slate-200 text-xs uppercase tracking-wide text-slate-500">
                      <th className="px-4 py-3 font-semibold">Observation</th>
                      <th className="px-4 py-3 font-semibold">Result</th>
                      <th className="px-4 py-3 font-semibold">Status</th>
                      <th className="px-4 py-3 font-semibold">Recorded</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      "Fish variety identification",
                      "Behavior analysis",
                      "Body color analysis",
                      "Physical appearance analysis",
                    ].map((observation) => (
                      <tr
                        key={observation}
                        className="border-b border-slate-100 last:border-0"
                      >
                        <td className="px-4 py-4 font-medium text-slate-700">
                          {observation}
                        </td>
                        <td className="px-4 py-4 text-slate-500">
                          No result
                        </td>
                        <td className="px-4 py-4">
                          <StatusPill>Awaiting setup</StatusPill>
                        </td>
                        <td className="px-4 py-4 text-slate-400">
                          Not available
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <p className="mt-4 text-xs leading-5 text-slate-400">
                No fish has been classified or assessed by this prototype.
                Results will appear when image analysis is implemented.
              </p>
            </section>

            {/* Follow-up information */}
            <section className="mb-9 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
              <SectionHeading
                title="Fish Stress Response"
                subtitle="Review possible next steps when unusual fish behavior or appearance is observed"
              />

              <div className="rounded-xl border border-slate-100 p-4 sm:p-5">
                <ol className="space-y-4">
                  <li className="flex gap-3">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-teal-50 text-sm font-bold text-teal-800">
                      1
                    </span>
                    <div>
                      <p className="text-sm font-semibold text-slate-700">
                        Review the observation
                      </p>
                      <p className="mt-1 text-sm leading-6 text-slate-500">
                        Check the available images and verify whether the
                        behavior or appearance is unusual.
                      </p>
                    </div>
                  </li>

                  <li className="flex gap-3">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-teal-50 text-sm font-bold text-teal-800">
                      2
                    </span>
                    <div>
                      <p className="text-sm font-semibold text-slate-700">
                        Check water conditions
                      </p>
                      <p className="mt-1 text-sm leading-6 text-slate-500">
                        Review water temperature, pH, ammonia, nitrite, and
                        nitrate to help investigate possible causes.
                      </p>
                    </div>
                  </li>

                  <li className="flex gap-3">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-teal-50 text-sm font-bold text-teal-800">
                      3
                    </span>
                    <div>
                      <p className="text-sm font-semibold text-slate-700">
                        Follow appropriate treatment guidance
                      </p>
                      <p className="mt-1 text-sm leading-6 text-slate-500">
                        Use verified findings and suitable fish-care guidance
                        to decide whether corrective action is necessary.
                      </p>
                    </div>
                  </li>
                </ol>
              </div>

              <div className="mt-4 rounded-xl border border-amber-100 bg-amber-50 p-4">
                <p className="text-sm font-semibold text-amber-900">
                  Important
                </p>
                <p className="mt-1 text-sm leading-6 text-amber-800">
                  Visual changes alone do not confirm fish stress or its
                  cause. This interface does not diagnose fish or initiate
                  treatment automatically.
                </p>
              </div>
            </section>

            <footer className="border-t border-slate-200 pt-5 text-xs leading-5 text-slate-400">
              <p>SMART Aqua Pond · Marine Ecosystem Project</p>
              <p className="mt-1">
                Fish monitoring prototype · Camera and image analysis
                integration pending
              </p>
            </footer>
          </div>
        </main>
      </div>
    </div>
  );
}
