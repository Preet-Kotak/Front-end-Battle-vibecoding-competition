import { forwardRef } from 'react';
import type { PricingCardProps } from '../../types';

export const PricingCard = forwardRef<HTMLDivElement, PricingCardProps>(
  function PricingCard({ tier, priceAmountRef, currencySymbolRef }) {
    return (
      <div
        aria-label={`${tier.label} pricing tier`}
        className="relative flex flex-col rounded-2xl p-7 transition-all duration-150"
        style={{
          background: tier.highlighted
            ? 'rgba(255,153,50,0.06)'
            : 'rgba(17,76,90,0.2)',
          border: tier.highlighted
            ? '1px solid rgba(255,153,50,0.3)'
            : '1px solid rgba(217,232,226,0.08)',
        }}
      >
        {/* Popular badge */}
        {tier.highlighted && (
          <div className="absolute -top-3 left-1/2 -translate-x-1/2">
            <span
              className="rounded-full px-3 py-0.5 text-xs font-semibold"
              style={{ background: 'rgba(255,153,50,0.15)', color: '#ff9932', border: '1px solid rgba(255,153,50,0.25)' }}
            >
              Most popular
            </span>
          </div>
        )}

        {/* Tier */}
        <p
          className="mb-1 text-xs font-semibold uppercase tracking-widest"
          style={{ color: tier.highlighted ? '#ff9932' : 'rgba(217,232,226,0.5)' }}
        >
          {tier.label}
        </p>

        {/* Price */}
        <div className="mt-4 mb-6 flex items-end gap-1">
          <span
            ref={currencySymbolRef}
            className="mb-1.5 text-xl font-medium"
            style={{ color: 'rgba(241,246,244,0.6)' }}
            aria-hidden="true"
          >
            $
          </span>
          <span
            ref={priceAmountRef}
            className="font-barlow text-5xl font-bold tabular-nums text-[#f1f6f4]"
          >
            {tier.basePrice}
          </span>
          <span className="mb-1.5 text-sm" style={{ color: 'rgba(217,232,226,0.4)' }}>/mo</span>
        </div>

        {/* Divider */}
        <div className="mb-6 h-px" style={{ background: 'rgba(217,232,226,0.07)' }} />

        {/* Features */}
        <ul className="mb-8 flex flex-col gap-3" role="list">
          {tier.features.map((feat) => (
            <li key={feat} className="flex items-start gap-2.5 text-sm" style={{ color: 'rgba(217,232,226,0.7)' }}>
              <svg className="mt-0.5 flex-shrink-0" width="15" height="15" viewBox="0 0 15 15" fill="none" aria-hidden="true">
                <path d="M3.5 7.5l3 3 5-5" stroke="#ff9932" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              {feat}
            </li>
          ))}
        </ul>

        {/* CTA */}
        <a
          href="#"
          id={`pricing-cta-${tier.id}`}
          className="mt-auto block rounded-xl py-2.5 text-center text-sm font-semibold transition-all duration-150"
          style={tier.highlighted ? {
            background: '#f1f6f4',
            color: '#172b36',
          } : {
            background: 'transparent',
            border: '1px solid rgba(217,232,226,0.15)',
            color: 'rgba(217,232,226,0.8)',
          }}
        >
          {tier.id === 'enterprise' ? 'Contact sales' : 'Get started'}
        </a>
      </div>
    );
  }
);
