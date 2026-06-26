import { useState, useRef, useEffect, useCallback } from 'react';
import { TESTIMONIALS } from '../../data/testimonials';
import type { Testimonial } from '../../types';
import { useBreakpoint } from '../../hooks/useBreakpoint';

function Stars() {
  return (
    <div className="flex items-center gap-0.5" aria-label="5 stars">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg key={i} width="14" height="14" viewBox="0 0 14 14" fill="#ff9932" aria-hidden="true">
          <path d="M7 1l1.545 3.09L12 4.635l-2.5 2.41.59 3.41L7 8.9l-3.09 1.555.59-3.41L2 4.635l3.455-.545z"/>
        </svg>
      ))}
    </div>
  );
}

function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
  return (
    <article
      className="flex h-full flex-col gap-5 rounded-2xl p-6"
      style={{
        background: 'rgba(17, 76, 90, 0.22)',
        border: '1px solid rgba(217,232,226,0.08)',
        backdropFilter: 'blur(4px)',
      }}
      aria-label={`Testimonial from ${testimonial.author}`}
    >
      <Stars />
      <blockquote
        className="flex-1 text-base leading-relaxed"
        style={{ color: 'rgba(241,246,244,0.85)' }}
      >
        &ldquo;{testimonial.quote}&rdquo;
      </blockquote>
      <div className="flex items-center gap-3">
        <div
          className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full text-sm font-bold"
          style={{ background: 'rgba(255,153,50,0.12)', color: '#ff9932', border: '1px solid rgba(255,153,50,0.18)' }}
          aria-hidden="true"
        >
          {testimonial.author.charAt(0)}
        </div>
        <div>
          <p className="text-sm font-semibold text-[#f1f6f4]">{testimonial.author}</p>
          <p className="text-xs mt-0.5" style={{ color: 'rgba(217,232,226,0.42)' }}>
            {testimonial.role} · {testimonial.company}
          </p>
        </div>
      </div>
    </article>
  );
}

export function TestimonialSection() {
  const total = TESTIMONIALS.length;
  const isTablet  = useBreakpoint(640);   // ≥640px → show 2
  const isDesktop = useBreakpoint(1024);  // ≥1024px → show 3

  const visibleCount = isDesktop ? 3 : isTablet ? 2 : 1;
  const gapRem       = isDesktop ? 1 : 0.75; // gap in rem between cards

  const maxIndex     = total - visibleCount;  // max offset
  const [offset, setOffset] = useState(0);

  const sectionRef   = useRef<HTMLElement>(null);
  const animatingRef = useRef(false);

  // Clamp offset when visibleCount changes (e.g. resize)
  useEffect(() => {
    setOffset((prev) => Math.min(prev, Math.max(0, total - visibleCount)));
  }, [visibleCount, total]);

  // Scroll reveal
  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { el.classList.add('animate-reveal'); observer.disconnect(); } },
      { threshold: 0.08 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const slideTo = useCallback((nextOffset: number) => {
    if (animatingRef.current) return;
    animatingRef.current = true;
    setOffset(nextOffset);
    setTimeout(() => { animatingRef.current = false; }, 420);
  }, []);

  const prev = () => slideTo(Math.max(0, offset - 1));
  const next = () => slideTo(Math.min(maxIndex, offset + 1));

  const canPrev = offset > 0;
  const canNext = offset < maxIndex;

  // One step = card width + gap
  // card width = (100% - (n-1)*gap) / n
  // step = cardWidth + gap = (100% - (n-1)*gap)/n + gap = 100%/n + gap/n*(n-1) + gap/n = 100%/n + gap
  // So: translateX = -offset * (100%/n + gapRem rem)
  const stepCalc = `calc(${100 / visibleCount}% + ${gapRem}rem)`;
  const translateX = offset === 0 ? '0px' : `calc(-${offset} * ${stepCalc})`;

  const cardStyle = {
    flex: `0 0 calc((100% - ${(visibleCount - 1) * gapRem}rem) / ${visibleCount})`,
    minWidth: 0,
  };

  return (
    <section
      id="testimonials"
      ref={sectionRef}
      aria-label="Customer Testimonials"
      className="site-section px-4 sm:px-6 py-14 md:py-20 opacity-0"
    >
      <div className="section-divider mb-12 md:mb-16" />

      <div className="mx-auto max-w-6xl">
        {/* Header */}
        <div className="mb-10 text-center">
          <p className="mb-3 text-xs font-semibold uppercase tracking-widest" style={{ color: '#ff9932' }}>
            Customer stories
          </p>
          <h2 className="text-display gradient-text" style={{ fontSize: 'clamp(28px, 4vw, 48px)' }}>
            Loved by data teams worldwide
          </h2>
          <p className="mt-3 text-sm" style={{ color: 'rgba(217,232,226,0.45)' }}>
            Join 2,400+ teams already using DataFlow AI
          </p>
        </div>

        {/* Carousel viewport — clips overflow */}
        <div
          className="overflow-hidden"
          aria-live="polite"
          aria-atomic="true"
        >
          {/* Track — slides horizontally */}
          <div
            className="flex"
            style={{
              gap: `${gapRem}rem`,
              transform: `translateX(${translateX})`,
              transition: 'transform 400ms cubic-bezier(0.4, 0, 0.2, 1)',
              willChange: 'transform',
            }}
          >
            {TESTIMONIALS.map((t) => (
              <div key={t.id} style={cardStyle}>
                <TestimonialCard testimonial={t} />
              </div>
            ))}
          </div>
        </div>

        {/* Navigation row */}
        <div className="mt-8 flex items-center justify-between">
          {/* Dot indicators */}
          <div className="flex items-center gap-2" role="group" aria-label="Carousel position">
            {Array.from({ length: maxIndex + 1 }).map((_, i) => (
              <button
                key={i}
                onClick={() => slideTo(i)}
                aria-label={`Go to slide group ${i + 1}`}
                aria-current={i === offset ? 'true' : undefined}
                style={{
                  width: i === offset ? '24px' : '8px',
                  height: '8px',
                  borderRadius: '4px',
                  border: 'none',
                  cursor: 'pointer',
                  background: i === offset ? '#ff9932' : 'rgba(217,232,226,0.18)',
                  transition: 'width 200ms ease-out, background 200ms ease-out',
                  padding: 0,
                  flexShrink: 0,
                }}
              />
            ))}
          </div>

          {/* Prev / Next buttons */}
          <div className="flex items-center gap-2">
            <button
              onClick={prev}
              disabled={!canPrev}
              aria-label="Previous testimonials"
              style={{
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                width: '38px', height: '38px', borderRadius: '10px',
                border: '1px solid rgba(217,232,226,0.12)',
                background: 'rgba(217,232,226,0.04)',
                color: canPrev ? '#d9e8e2' : 'rgba(217,232,226,0.22)',
                cursor: canPrev ? 'pointer' : 'not-allowed',
                transition: 'background 150ms ease-out, color 150ms ease-out',
              }}
              onMouseEnter={(e) => { if (canPrev) (e.currentTarget as HTMLButtonElement).style.background = 'rgba(217,232,226,0.08)'; }}
              onMouseLeave={(e) => { (e.currentTarget as HTMLButtonElement).style.background = 'rgba(217,232,226,0.04)'; }}
            >
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                <path d="M10 12L6 8l4-4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
            <button
              onClick={next}
              disabled={!canNext}
              aria-label="Next testimonials"
              style={{
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                width: '38px', height: '38px', borderRadius: '10px',
                border: '1px solid rgba(217,232,226,0.12)',
                background: canNext ? 'rgba(255,153,50,0.08)' : 'rgba(217,232,226,0.04)',
                color: canNext ? '#ff9932' : 'rgba(217,232,226,0.22)',
                cursor: canNext ? 'pointer' : 'not-allowed',
                transition: 'background 150ms ease-out, color 150ms ease-out',
              }}
              onMouseEnter={(e) => { if (canNext) (e.currentTarget as HTMLButtonElement).style.background = 'rgba(255,153,50,0.14)'; }}
              onMouseLeave={(e) => { (e.currentTarget as HTMLButtonElement).style.background = canNext ? 'rgba(255,153,50,0.08)' : 'rgba(217,232,226,0.04)'; }}
            >
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                <path d="M6 4l4 4-4 4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </div>
        </div>

        {/* Trust logos strip */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-x-8 gap-y-3">
          {['FinTech Innovations', 'Global Logistics Corp', 'SaaS Scale-up', 'DataCo', 'CloudBase', 'Apex Capital'].map((name) => (
            <span
              key={name}
              className="text-sm font-medium"
              style={{ color: 'rgba(217,232,226,0.22)' }}
            >
              {name}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
