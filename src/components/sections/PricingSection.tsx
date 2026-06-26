import { useState, useRef, useEffect, useCallback } from 'react';
import { PRICE_MATRIX } from '../../data/pricing';
import { computePrice, formatPrice } from '../../utils/pricingCalc';
import type { BillingCycle, CurrencyCode } from '../../types';
import { PricingCard } from '../pricing/PricingCard';
import { BillingToggle } from '../pricing/BillingToggle';
import { CurrencySwitcher } from '../pricing/CurrencySwitcher';

const { tiers, billingMultipliers, regionalTariffs, currencySymbols } = PRICE_MATRIX;

export function PricingSection() {
  const [billingCycle, setBillingCycle] = useState<BillingCycle>('monthly');
  const activeCurrencyRef = useRef<CurrencyCode>('USD');

  const priceAmountRefs   = [useRef<HTMLSpanElement>(null), useRef<HTMLSpanElement>(null), useRef<HTMLSpanElement>(null)] as const;
  const currencySymbolRefs = [useRef<HTMLSpanElement>(null), useRef<HTMLSpanElement>(null), useRef<HTMLSpanElement>(null)] as const;
  const sectionRef = useRef<HTMLElement>(null);

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

  const updatePrices = useCallback((cycle: BillingCycle, currency: CurrencyCode) => {
    requestAnimationFrame(() => {
      tiers.forEach((tier, i) => {
        const amount = computePrice(tier.basePrice, billingMultipliers[cycle], regionalTariffs[currency]);
        if (priceAmountRefs[i].current)   priceAmountRefs[i].current!.textContent = formatPrice(amount, currency);
        if (currencySymbolRefs[i].current) currencySymbolRefs[i].current!.textContent = currencySymbols[currency];
      });
    });
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function handleBillingChange(cycle: BillingCycle) {
    setBillingCycle(cycle);
    updatePrices(cycle, activeCurrencyRef.current);
  }
  function handleCurrencyChange(currency: CurrencyCode) {
    activeCurrencyRef.current = currency;
    updatePrices(billingCycle, currency);
  }

  return (
    <section id="pricing" ref={sectionRef} aria-label="Pricing" className="site-section px-6 py-16 md:py-24 opacity-0">
      <div className="section-divider mb-12 md:mb-16" />

      <div className="mx-auto max-w-5xl">
        {/* Centered header */}
        <div className="mb-8 md:mb-12 text-center">
          <p className="mb-3 text-sm font-medium uppercase tracking-widest" style={{ color: '#ff9932' }}>
            Simple pricing
          </p>
          <h2 className="text-display gradient-text" style={{ fontSize: 'clamp(32px, 4.5vw, 52px)' }}>
            Plans that scale with you
          </h2>
          <p className="mt-4 text-base" style={{ color: 'rgba(217,232,226,0.5)' }}>
            Start free. No hidden fees, no vendor lock-in.
          </p>
        </div>

        {/* Controls row — centered */}
        <div className="mb-10 flex flex-wrap items-center justify-center gap-3">
          <BillingToggle value={billingCycle} onChange={handleBillingChange} />
          <CurrencySwitcher onCurrencyChange={handleCurrencyChange} />
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
          {tiers.map((tier, i) => (
            <PricingCard
              key={tier.id}
              tier={tier}
              priceAmountRef={priceAmountRefs[i]}
              currencySymbolRef={currencySymbolRefs[i]}
            />
          ))}
        </div>

        <p className="mt-8 text-center text-sm" style={{ color: 'rgba(217,232,226,0.3)' }}>
          All plans include a 14-day free trial · No credit card required
        </p>
      </div>
    </section>
  );
}
