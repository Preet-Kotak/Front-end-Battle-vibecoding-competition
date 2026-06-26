import { useRef, useEffect } from 'react';

export function CtaSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { el.classList.add('animate-reveal'); observer.disconnect(); } },
      { threshold: 0.12 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="cta"
      ref={sectionRef}
      aria-label="Call to Action"
      className="site-section relative overflow-hidden px-6 py-16 md:py-24 opacity-0"
    >
      <div className="section-divider mb-12 md:mb-16" />

      <div className="relative mx-auto max-w-2xl text-center">
        <h2
          className="text-display gradient-text mb-5"
          style={{ fontSize: 'clamp(36px, 5.5vw, 64px)' }}
        >
          Ready to transform your data stack?
        </h2>
        <p className="mb-10 text-lg leading-relaxed" style={{ color: 'rgba(217,232,226,0.5)' }}>
          Join 2,400+ engineering teams shipping data products faster.
          Start free — no credit card, no infrastructure setup required.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-3">
          <a id="cta-primary" href="#pricing" className="btn-primary">
            Start building for free
          </a>
          <a id="cta-demo" href="#features" className="btn-ghost">
            See how it works
          </a>
        </div>
      </div>
    </section>
  );
}
