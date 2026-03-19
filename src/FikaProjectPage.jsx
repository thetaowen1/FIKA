const scenarios = [
  {
    number: "01",
    title: "Street Food / Coffee",
    text: "A compact street café format that turns the platform into a visible, approachable point of sale for coffee, snacks, and daily service.",
    image: "/images/fika-street-food.jpg",
  },
  {
    number: "02",
    title: "Urban Delivery",
    text: "A modular cargo setup for efficient last-mile delivery, enabling small operators to move goods through dense urban environments with lower cost and greater flexibility.",
    image: "/images/fika-delivery.jpg",
  },
  {
    number: "03",
    title: "Mobile Repair Service",
    text: "A service-oriented configuration for on-site repair, maintenance, and support, bringing tools and capability directly to where the city needs them.",
    image: "/images/fika-auto-repair.jpg",
  },
  {
    number: "04",
    title: "Family Mobility",
    text: "A flexible everyday configuration that supports family transport, neighborhood movement, and shared daily life beyond commercial use.",
    image: "/images/fika-family.jpg",
  },
  {
    number: "05",
    title: "Outdoor Leisure",
    text: "A recreational setup that extends the platform into social, outdoor, and lifestyle use, showing how FIKA can move beyond utility into experience.",
    image: "/images/fika-leisure.jpg",
  },
];

const problemPoints = [
  "Food trucks cost $30k–$100k+",
  "Retail leases require long-term commitment",
  "Existing cargo bikes lack business functionality",
  "Many potential micro-businesses never start",
  "Starting a business should not require a $50k investment",
];

const conceptPoints = ["Modular", "Repairable", "Adaptable", "Low barrier to entry"];

const modularPoints = [
  "Swapped",
  "Upgraded",
  "Locally produced",
  "Open interface for third-party development",
];

const cargoBikeReasons = [
  "Infrastructure fit",
  "Lower regulatory barriers",
  "Lower operational cost",
  "Simple maintenance",
  "Works in dense cities",
  "Accessible entrepreneurship",
  "No license required in many regions",
  "No insurance required",
];

const businessModels = ["Purchase", "Subscription / Rental", "Module upgrades"];

const nextSteps = [
  "Prototype development",
  "Pilot testing",
  "Partner collaboration",
  "Open ecosystem",
];

function ArrowLeftIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-4 w-4">
      <path d="M19 12H5" />
      <path d="M12 19L5 12L12 5" />
    </svg>
  );
}

function DownloadIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-4 w-4">
      <path d="M12 4V15" />
      <path d="M17 10L12 15L7 10" />
      <path d="M5 20H19" />
    </svg>
  );
}

function LogoMark() {
  return (
    <div className="flex h-9 w-9 items-center justify-center border border-white/10 bg-background/60 text-sm font-semibold text-foreground">
      aoT
    </div>
  );
}

function SignalLabel({ children }) {
  return (
    <span className="mb-4 block font-mono text-[10px] uppercase tracking-[0.28em] text-signal">
      {children}
    </span>
  );
}

function BorderCorner() {
  return (
    <div className="pointer-events-none absolute left-0 top-0 h-14 w-14">
      <div className="absolute left-0 top-0 h-[2px] w-full bg-signal" />
      <div className="absolute left-0 top-0 h-full w-[2px] bg-signal" />
    </div>
  );
}

function Section({ children, className = "" }) {
  return (
    <section className={`border-b border-white/10 py-16 lg:py-20 ${className}`}>
      <div className="mx-auto max-w-[1400px] px-6 lg:px-8">{children}</div>
    </section>
  );
}

function StatCard({ title, text }) {
  return (
    <div className="border border-white/10 bg-background/60 p-5 md:p-6">
      <h3 className="text-base font-semibold text-foreground md:text-lg">{title}</h3>
      <p className="mt-2 text-sm leading-6 text-muted-foreground">{text}</p>
    </div>
  );
}

function MediaBlock({ src, alt, height = "h-[320px] md:h-[480px]" }) {
  return (
    <div className={`relative overflow-hidden border border-white/10 bg-background/60 ${height}`}>
      <BorderCorner />
      <img
        src={src}
        alt={alt}
        className="h-full w-full object-cover"
        onError={(e) => {
          e.currentTarget.style.display = "none";
          const next = e.currentTarget.nextElementSibling;
          if (next) next.style.display = "flex";
        }}
      />
      <div className="absolute inset-0 hidden items-center justify-center bg-background/80 p-6 text-center">
        <div>
          <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-signal">Image placeholder</p>
          <p className="mt-3 text-sm text-muted-foreground">{alt}</p>
        </div>
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
    </div>
  );
}

export default function FikaProjectPage() {
  return (
    <div id="top" className="min-h-screen bg-background text-foreground">
      <nav className="fixed left-0 right-0 top-0 z-50 border-b border-white/10 bg-background/90 backdrop-blur-xl">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-8">
          <div className="flex h-20 items-center justify-between">
            <a
              href="#top"
              className="group flex items-center gap-3 font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground transition-colors hover:text-signal"
            >
              <ArrowLeftIcon />
              Back to top
            </a>

            <a href="#top" className="flex items-center gap-3">
              <LogoMark />
              <span className="hidden text-lg font-semibold tracking-tight text-foreground sm:block">
                aoT Designs
              </span>
            </a>
          </div>
        </div>
      </nav>

      <section className="relative min-h-screen overflow-hidden border-b border-white/10">
        <div className="absolute inset-0">
          <img
            src="/images/fika-hero.jpg"
            alt="FIKA hero"
            className="h-full w-full object-cover"
            onError={(e) => {
              e.currentTarget.style.display = "none";
              const next = e.currentTarget.nextElementSibling;
              if (next) next.style.display = "block";
            }}
          />
          <div className="absolute inset-0 hidden bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.08),transparent_35%),linear-gradient(180deg,rgba(255,255,255,0.03),rgba(0,0,0,0.4))]" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/20 to-black/70" />
        </div>

        <div className="relative z-10 mx-auto flex min-h-screen max-w-[1400px] flex-col justify-end px-6 pb-14 pt-28 lg:px-8">
          <div>
            <SignalLabel>Project 01 / Modular Mobility</SignalLabel>
            <h1 className="text-5xl font-bold leading-[0.92] tracking-tight text-foreground md:text-7xl lg:text-[6.2rem]">
              FIKA
            </h1>
            <p className="mt-5 font-mono text-[11px] uppercase tracking-[0.22em] text-signal">
              A Modular Micro-Commerce Platform
            </p>
            <p className="mt-6 max-w-2xl text-base leading-8 text-muted-foreground md:text-lg">
              A modular cargo bike platform enabling mobile businesses, services, and urban mobility.
            </p>

            <div className="mt-10 flex justify-center">
              <a
                href="/fika-brief.pdf"
                download
                className="inline-flex items-center gap-3 border border-signal bg-signal px-10 py-5 font-mono text-base font-semibold uppercase tracking-[0.22em] text-black shadow-[0_0_0_1px_rgba(0,0,0,0.08),0_0_32px_rgba(255,103,31,0.28)] transition-all duration-200 hover:-translate-y-0.5 hover:scale-[1.02] hover:shadow-[0_0_0_1px_rgba(0,0,0,0.1),0_0_44px_rgba(255,103,31,0.4)] active:translate-y-0 active:scale-[0.99]"
              >
                <DownloadIcon />
                Download the FIKA Brief
              </a>
            </div>
          </div>
        </div>
      </section>

      <section id="overview" className="border-b border-white/10">
        <div className="mx-auto grid max-w-[1400px] grid-cols-1 gap-8 px-6 py-10 md:grid-cols-3 lg:px-8 lg:py-12">
          <div>
            <div className="mb-2 font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">Category</div>
            <div className="text-sm text-muted-foreground">Mobility Design / Platform Strategy</div>
          </div>
          <div>
            <div className="mb-2 font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">Project Frame</div>
            <div className="text-sm text-muted-foreground">Cargo bike, micro-commerce, modular business system</div>
          </div>
          <div>
            <div className="mb-2 font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">Intent</div>
            <div className="text-sm text-muted-foreground">Lower the barrier for small urban businesses through a flexible platform model.</div>
          </div>
        </div>
      </section>

      <Section>
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[0.86fr_1.14fr]">
          <div>
            <SignalLabel>Problem</SignalLabel>
            <h2 className="max-w-xl text-3xl font-bold leading-[1.02] tracking-tight text-foreground md:text-5xl">
              Why these scenarios don’t exist today
            </h2>
          </div>
          <div className="space-y-6">
            <p className="max-w-2xl text-base leading-8 text-muted-foreground md:text-lg">
              These five scenarios rarely emerge at small scale because entry barriers are too high. Cost, regulation, and infrastructure prevent lightweight businesses from existing in the city.
            </p>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              {problemPoints.map((item) => (
                <div key={item} className="border border-white/10 bg-background/60 p-5 text-sm leading-7 text-muted-foreground">
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </Section>

      <Section>
        <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-[1.02fr_0.98fr] lg:gap-12">
          <MediaBlock src="/images/fika-delivery.jpg" alt="FIKA delivery scene" />
          <div>
            <SignalLabel>Concept</SignalLabel>
            <h2 className="max-w-xl text-3xl font-bold leading-[1.02] tracking-tight text-foreground md:text-5xl">
              A system that enables all five scenarios
            </h2>
            <p className="mt-6 max-w-xl text-base leading-8 text-muted-foreground md:text-lg">
              FIKA is designed as a shared base that can transform into all five scenarios. Instead of designing five separate products, one platform supports multiple roles.
            </p>
            <div className="mt-8 grid max-w-xl grid-cols-2 gap-4">
              {conceptPoints.map((item) => (
                <div key={item} className="border border-white/10 bg-background/60 px-5 py-4 font-mono text-[10px] uppercase tracking-[0.18em] text-signal">
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </Section>

      <Section>
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2 lg:gap-8">
          <div className="border border-white/10 bg-background/60 p-7 md:p-9">
            <SignalLabel>Modular system</SignalLabel>
            <h2 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl">
              The system behind the five scenarios
            </h2>
            <div className="mt-8 overflow-hidden border border-white/10 bg-white">
              <img
                src="/images/fika-exploded-diagram.png"
                alt="FIKA exploded modular system diagram"
                className="h-full w-full object-contain"
                onError={(e) => {
                  e.currentTarget.style.display = "none";
                  const next = e.currentTarget.nextElementSibling;
                  if (next) next.style.display = "flex";
                }}
              />
              <div className="hidden h-[280px] items-center justify-center bg-background/50 px-6 text-center md:h-[360px]">
                <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-muted-foreground">
                  Add image: /images/fika-exploded-diagram.png
                </p>
              </div>
            </div>
          </div>

          <div className="border border-white/10 bg-background/60 p-7 md:p-9">
            <SignalLabel>System logic</SignalLabel>
            <p className="text-base leading-8 text-muted-foreground">
              Each scenario is enabled by interchangeable modules. The same base platform can shift between use cases without being replaced.
            </p>
            <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
              {modularPoints.map((item) => (
                <div key={item} className="border border-white/10 bg-background/50 p-5 text-sm leading-6 text-foreground">
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </Section>

      <Section className="overflow-hidden">
        <div className="mb-10">
          <SignalLabel>Scenarios</SignalLabel>
          <h2 className="text-3xl font-bold tracking-tight text-foreground md:text-5xl">
            Five scenarios. One flexible platform.
          </h2>
        </div>

        <div className="mb-8 border border-white/10 bg-background/60">
          <div className="relative aspect-[16/9] w-full overflow-hidden">
            <img
              src={scenarios[0].image}
              alt={scenarios[0].title}
              className="h-full w-full object-cover"
              onError={(e) => {
                e.currentTarget.style.display = "none";
                const next = e.currentTarget.nextElementSibling;
                if (next) next.style.display = "flex";
              }}
            />
            <div className="absolute inset-0 hidden items-center justify-center bg-background/80 p-6 text-center">
              <div>
                <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-signal">Scenario image</p>
                <p className="mt-3 text-sm text-muted-foreground">{scenarios[0].title}</p>
              </div>
            </div>
            <div className="absolute inset-0 bg-gradient-to-b from-black/10 to-black/80" />
            <div className="absolute bottom-6 left-6 max-w-2xl md:bottom-10 md:left-10">
              <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-signal/90">Scenario {scenarios[0].number}</p>
              <h3 className="mt-4 text-3xl font-bold leading-tight text-white md:text-5xl">{scenarios[0].title}</h3>
              <p className="mt-4 text-base text-white/80 md:text-lg">{scenarios[0].text}</p>
            </div>
          </div>
        </div>

        <div className="grid gap-5 md:grid-cols-2">
          {scenarios.slice(1).map((scenario) => (
            <article key={scenario.title} className="border border-white/10 bg-background/60">
              <div className="relative aspect-[16/9] w-full overflow-hidden">
                <img
                  src={scenario.image}
                  alt={scenario.title}
                  className="h-full w-full object-cover"
                  onError={(e) => {
                    e.currentTarget.style.display = "none";
                    const next = e.currentTarget.nextElementSibling;
                    if (next) next.style.display = "flex";
                  }}
                />
                <div className="absolute inset-0 hidden items-center justify-center bg-background/80 p-6 text-center">
                  <div>
                    <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-signal">Scenario image</p>
                    <p className="mt-3 text-sm text-muted-foreground">{scenario.title}</p>
                  </div>
                </div>
                <div className="absolute inset-0 bg-gradient-to-b from-black/10 to-black/80" />
                <div className="absolute bottom-5 left-5 md:bottom-6 md:left-6">
                  <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-signal/90">Scenario {scenario.number}</p>
                  <h3 className="mt-2 text-xl font-bold text-white md:text-2xl">{scenario.title}</h3>
                </div>
              </div>
              <div className="p-5">
                <p className="text-sm leading-7 text-muted-foreground md:text-base">{scenario.text}</p>
              </div>
            </article>
          ))}
        </div>
      </Section>

      <Section>
        <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-[1.02fr_0.98fr] lg:gap-12">
          <div className="order-2 lg:order-1">
            <MediaBlock src="/images/fika-street-food.jpg" alt="FIKA street food scene" />
          </div>
          <div className="order-1 lg:order-2">
            <SignalLabel>Why cargo bikes</SignalLabel>
            <h2 className="max-w-2xl text-3xl font-bold tracking-tight text-foreground md:text-5xl">
              Why these scenarios are possible with cargo bikes
            </h2>
            <p className="mt-6 max-w-xl text-base leading-8 text-muted-foreground md:text-lg">
              Cargo bikes make these scenarios viable: they fit infrastructure, reduce cost, and remove regulatory friction that prevents small operators from starting.
            </p>
            <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
              {cargoBikeReasons.map((item) => (
                <div key={item} className="border border-white/10 bg-background/60 p-4 text-sm leading-6 text-muted-foreground">
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </Section>

      <Section>
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2 lg:gap-8">
          <div className="border border-white/10 bg-background/60 p-7 md:p-9">
            <SignalLabel>Business model</SignalLabel>
            <h2 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl">
              How these scenarios scale
            </h2>
            <p className="mt-6 text-base leading-8 text-muted-foreground">
              Each scenario can start small and evolve by switching modules, allowing businesses to grow without replacing the platform.
            </p>
            <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-3">
              {businessModels.map((item) => (
                <div key={item} className="border border-white/10 bg-background/50 p-5">
                  <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-signal">Model</p>
                  <p className="mt-3 text-sm leading-6 text-foreground">{item}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="border border-white/10 bg-background/60 p-7 md:p-9">
            <SignalLabel>Development path</SignalLabel>
            <h2 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl">
              From scenarios to real deployment
            </h2>
            <p className="mt-6 text-base leading-8 text-muted-foreground">
              Next step is validating these scenarios through prototypes, pilot programs, and real-world deployment.
            </p>
            <div className="mt-8 space-y-4">
              {nextSteps.map((item, index) => (
                <div key={item} className="flex items-start gap-4 border border-white/10 bg-background/50 p-5">
                  <span className="mt-1 font-mono text-[10px] uppercase tracking-[0.22em] text-signal">0{index + 1}</span>
                  <p className="text-sm leading-6 text-foreground md:text-base">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Section>

      <Section className="border-b-0">
        <div className="mb-12 flex justify-center">
          <a
            href="/fika-brief.pdf"
            download
            className="inline-flex items-center gap-3 border border-signal bg-signal px-10 py-5 font-mono text-base font-semibold uppercase tracking-[0.22em] text-black shadow-[0_0_0_1px_rgba(0,0,0,0.08),0_0_32px_rgba(255,103,31,0.28)] transition-all duration-200 hover:-translate-y-0.5 hover:scale-[1.02] hover:shadow-[0_0_0_1px_rgba(0,0,0,0.1),0_0_44px_rgba(255,103,31,0.4)] active:translate-y-0 active:scale-[0.99]"
          >
            <DownloadIcon />
            Download the FIKA Brief
          </a>
        </div>
        <div className="flex flex-col gap-8 border border-white/10 bg-background/60 p-8 md:p-10 lg:flex-row lg:items-end lg:justify-between lg:p-12">
          <div>
            <SignalLabel>Contact</SignalLabel>
            <h2 className="text-3xl font-bold tracking-tight text-foreground md:text-5xl">
              Let’s build this together
            </h2>
            <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-3">
              <StatCard title="Industry feedback" text="Open to perspective from mobility, retail, and urban systems stakeholders." />
              <StatCard title="Pilot programs" text="Suitable for small-scale testing, live activation, and proof-of-concept rollout." />
              <StatCard title="Startup collaboration" text="Positioned for brand, platform, and manufacturing partnerships." />
            </div>
          </div>

          <div className="space-y-4 text-sm uppercase tracking-[0.2em] text-muted-foreground lg:min-w-[240px] lg:text-right">
            <div className="space-y-2">
              <p>Tao Wen</p>
              <p>aoT Designs</p>
              <a href="https://www.aotdesigns.com" className="inline-block transition-colors hover:text-signal">
                www.aotdesigns.com
              </a>
            </div>

            <a
              href="/fika-brief.pdf"
              download
              className="inline-flex items-center gap-3 border border-white/12 px-5 py-3 font-mono text-[10px] uppercase tracking-[0.18em] text-foreground transition-colors hover:bg-white/8 lg:ml-auto"
            >
              <DownloadIcon />
              Download the FIKA Brief
            </a>
          </div>
        </div>
      </Section>

      <footer className="border-t border-white/10">
        <div className="mx-auto flex max-w-[1400px] flex-col items-start justify-between gap-4 px-6 py-8 text-sm text-muted-foreground md:flex-row md:items-center lg:px-8">
          <p>© aoT Designs</p>
          <p className="font-mono text-[10px] uppercase tracking-[0.18em]">FIKA Project Page Preview</p>
        </div>
      </footer>
    </div>
  );
}
