import { IconArrowTrendingUp, IconArrowPath, IconChartPie, IconSearch, IconCog8Tooth } from '../../icons';

const WORKFLOW_STEPS = [
  { icon: <IconArrowPath width={13} height={13} aria-hidden />,       label: 'Ingest',    status: 'done',    color: '#34d399' },
  { icon: <IconCog8Tooth width={13} height={13} aria-hidden />,       label: 'Transform', status: 'done',    color: '#34d399' },
  { icon: <IconChartPie width={13} height={13} aria-hidden />,        label: 'Analyse',   status: 'running', color: '#ff9932' },
  { icon: <IconArrowTrendingUp width={13} height={13} aria-hidden />, label: 'Predict',   status: 'queued',  color: 'rgba(217,232,226,0.3)' },
];

const METRICS = [
  { val: '2,400+', sub: 'Teams'   },
  { val: '99.9%',  sub: 'Uptime'  },
  { val: '10×',    sub: 'Faster'  },
  { val: '<16ms',  sub: 'Latency' },
];

export function HeroSection() {
  return (
    <section
      id="hero"
      aria-label="Hero"
      className="site-section relative overflow-hidden px-4 pt-32 pb-0 sm:px-6"
    >
      {/* ── Hero text content ─────────────────────────────────────────────── */}
      <div className="relative mx-auto max-w-3xl text-center">

        {/* Badge */}
        <a
          href="#features"
          className="animate-fade-up mb-7 inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-semibold tracking-wide"
          style={{
            animationDelay: '0ms',
            background: 'rgba(255,153,50,0.07)',
            border: '1px solid rgba(255,153,50,0.18)',
            color: '#ffc880',
          }}
        >
          <span
            className="h-1.5 w-1.5 rounded-full bg-[#ff9932]"
            style={{ animation: 'pulse-dot 2s ease-in-out infinite' }}
            aria-hidden="true"
          />
          Real-time ML orchestration — now live
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
            <path d="M2.5 6h7M7 3.5l2.5 2.5L7 8.5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </a>

        {/* H1 */}
        <h1
          className="animate-fade-up text-display mb-5"
          style={{ fontSize: 'clamp(42px, 6.5vw, 84px)', animationDelay: '80ms' }}
        >
          <span className="gradient-text">Automate your data.</span>
          <br />
          <span style={{ color: '#f1f6f4' }}>Amplify your intelligence.</span>
        </h1>

        {/* Subtitle */}
        <p
          className="animate-fade-up mx-auto mb-8 max-w-lg text-base leading-relaxed sm:text-lg"
          style={{ color: 'rgba(217,232,226,0.50)', animationDelay: '160ms' }}
        >
          One unified platform for pipelines, ML models, and business workflows.
          Built for speed. Designed for scale.
        </p>

        {/* CTAs */}
        <div
          className="animate-fade-up mb-4 flex flex-wrap items-center justify-center gap-3"
          style={{ animationDelay: '240ms' }}
        >
          <a href="#pricing" id="hero-cta-primary" className="btn-primary">
            Get started free
          </a>
          <a href="#features" id="hero-cta-secondary" className="btn-ghost">
            <IconSearch width={14} height={14} aria-hidden />
            Explore platform
          </a>
        </div>

        {/* Social proof */}
        <p
          className="animate-fade-up mb-14 text-xs"
          style={{ color: 'rgba(217,232,226,0.28)', animationDelay: '300ms' }}
        >
          No credit card required · SOC 2 compliant · 14-day free trial
        </p>
      </div>

      {/* ── THE KEY PIECE — clean pipeline dashboard card ──────────────── */}
      <div
        className="animate-fade-up relative mx-auto w-full"
        style={{ maxWidth: '760px', animationDelay: '380ms' }}
      >
        <div className="hero-card">

          {/* Card top bar */}
          <div className="hero-card__topbar">
            <div className="flex items-center gap-1.5">
              <span className="hero-card__dot" style={{ background: '#3d5562' }} />
              <span className="hero-card__dot" style={{ background: '#3d5562' }} />
              <span className="hero-card__dot" style={{ background: '#3d5562' }} />
            </div>
            <div className="hero-card__title-pill">
              dataflow.ai · pipeline v2.4
            </div>
            <div className="flex items-center gap-1.5">
              <span
                className="h-1.5 w-1.5 rounded-full bg-emerald-400"
                style={{ animation: 'pulse-dot 2s ease-in-out infinite' }}
                aria-hidden="true"
              />
              <span className="text-xs" style={{ color: '#34d399' }}>Live</span>
            </div>
          </div>

          {/* ── Workflow steps ──────────────────────────────────────────── */}
          <div className="hero-card__section">
            <p className="hero-card__label">Active workflow — prod-daily-sync</p>

            {/* Step nodes */}
            <div className="flex items-start">
              {WORKFLOW_STEPS.map((step, i) => (
                <div key={step.label} className="flex flex-1 items-start">
                  <div className="flex flex-1 flex-col items-center">
                    {/* Node */}
                    <div
                      className="hero-card__node"
                      style={{
                        background:
                          step.status === 'done'    ? 'rgba(52,211,153,0.10)'   :
                          step.status === 'running' ? 'rgba(255,153,50,0.12)'   :
                          'rgba(217,232,226,0.04)',
                        borderColor:
                          step.status === 'done'    ? 'rgba(52,211,153,0.22)'   :
                          step.status === 'running' ? 'rgba(255,153,50,0.25)'   :
                          'rgba(217,232,226,0.09)',
                        color: step.color,
                      }}
                    >
                      {step.status === 'done' ? (
                        <svg width="13" height="13" viewBox="0 0 13 13" fill="none" aria-hidden="true">
                          <path d="M2.5 7l2.5 2.5 5-5" stroke="#34d399" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      ) : step.icon}
                    </div>
                    <p className="mt-2 text-center text-[11px] font-medium" style={{ color: step.status === 'queued' ? 'rgba(217,232,226,0.28)' : 'rgba(217,232,226,0.65)' }}>
                      {step.label}
                    </p>
                    <p className="text-[10px] capitalize" style={{ color: step.color, opacity: step.status === 'queued' ? 0.5 : 0.85 }}>
                      {step.status}
                    </p>
                  </div>
                  {/* Connector */}
                  {i < WORKFLOW_STEPS.length - 1 && (
                    <div className="mt-5 flex-1 px-1">
                      <div
                        className="h-px w-full"
                        style={{
                          background:
                            i < 1    ? '#34d399'                              :
                            i === 1  ? 'linear-gradient(90deg, #34d399, #ff9932)' :
                            'rgba(217,232,226,0.09)',
                        }}
                      />
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Progress bar */}
            <div className="mt-5">
              <div className="mb-1.5 flex items-center justify-between text-[11px]" style={{ color: 'rgba(217,232,226,0.38)' }}>
                <span>Overall progress</span>
                <span style={{ color: '#ff9932', fontWeight: 600 }}>58%</span>
              </div>
              <div className="h-0.5 overflow-hidden rounded-full" style={{ background: 'rgba(217,232,226,0.07)' }}>
                <div
                  className="h-full rounded-full"
                  style={{ width: '58%', background: 'linear-gradient(90deg, #34d399 0%, #ff9932 100%)' }}
                />
              </div>
            </div>
          </div>

          {/* ── Metric strip ─────────────────────────────────────────────── */}
          <div className="grid grid-cols-2 gap-2 sm:grid-cols-4 sm:gap-3">
            {METRICS.map(({ val, sub }) => (
              <div key={sub} className="hero-card__metric">
                <p className="font-barlow text-base sm:text-lg font-bold text-[#f1f6f4]">{val}</p>
                <p className="mt-0.5 text-[10px]" style={{ color: 'rgba(217,232,226,0.35)' }}>{sub}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom fade into next section */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -bottom-1 left-0 right-0 h-28"
          style={{ background: 'linear-gradient(to bottom, transparent 0%, #172b36 100%)' }}
        />
      </div>
    </section>
  );
}
