import { useState, useRef, useEffect } from 'react';
import { FEATURES } from '../../data/features';
import { BentoGrid } from '../features/BentoGrid';
import { AccordionList } from '../features/AccordionList';
import { useBreakpoint } from '../../hooks/useBreakpoint';

export function FeatureShowcase() {
  const [activeIndex, setActiveIndex] = useState(0);
  const isDesktop    = useBreakpoint(768);
  const sectionRef   = useRef<HTMLElement>(null);
  const accordionRef = useRef<HTMLDivElement>(null);

  // ── Scroll reveal ────────────────────────────────────────────────────────
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

  /**
   * Context Lock Constraint — FB Round 1 Feature 2:
   *
   * When the viewport crosses the desktop→mobile breakpoint while a bento
   * card is active (hovered/focused), the SAME activeIndex is already live
   * in state (shared between both views). The AccordionItem's useLayoutEffect
   * detects isOpen=true on mount and animates 0→scrollHeight smoothly.
   *
   * Additionally, we programmatically scroll the now-open accordion panel
   * into the viewport so the user can see the context that transferred.
   * This fires 350ms after the layout switch — enough time for the accordion
   * transition (300ms ease-in-out) to complete.
   */
  useEffect(() => {
    if (isDesktop) return; // only run when switching TO mobile
    if (activeIndex < 0) return;

    const timer = setTimeout(() => {
      const accordionEl = accordionRef.current;
      if (!accordionEl) return;
      // Find the open accordion item button by its id
      const openButton = accordionEl.querySelector<HTMLElement>(
        `#acc-btn-${activeIndex}`
      );
      openButton?.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }, 350); // let the 300ms accordion transition finish first

    return () => clearTimeout(timer);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isDesktop]); // only re-run when breakpoint flips, not on every activeIndex change

  return (
    <section
      id="features"
      ref={sectionRef}
      aria-label="Platform Features"
      className="site-section px-6 py-16 md:py-24 opacity-0"
    >
      {/* Divider */}
      <div className="section-divider mb-12 md:mb-16" />

      <div className="mx-auto max-w-6xl">
        {/* Section header */}
        <div className="mb-10 md:mb-16 text-center">
          <p className="mb-3 text-sm font-medium tracking-widest uppercase" style={{ color: '#ff9932' }}>
            Platform capabilities
          </p>
          <h2 className="text-display gradient-text mx-auto max-w-2xl" style={{ fontSize: 'clamp(36px, 5vw, 56px)' }}>
            Everything your data stack needs
          </h2>
          <p className="mt-4 mx-auto max-w-lg text-base leading-relaxed" style={{ color: 'rgba(217,232,226,0.55)' }}>
            Nine core modules. One unified platform. Zero infrastructure headaches.
          </p>
        </div>

        {/* Desktop: Bento Grid */}
        <div className={isDesktop ? 'block' : 'hidden'}>
          <BentoGrid features={FEATURES} activeIndex={activeIndex} onActiveChange={setActiveIndex} />
        </div>

        {/* Mobile: Accordion — ref used for scroll-into-view on context lock */}
        <div ref={accordionRef} className={isDesktop ? 'hidden' : 'block'}>
          <AccordionList features={FEATURES} activeIndex={activeIndex} onActiveChange={setActiveIndex} />
        </div>
      </div>
    </section>
  );
}
