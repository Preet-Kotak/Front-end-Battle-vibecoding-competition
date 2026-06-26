import type { BillingToggleProps } from '../../types';

export function BillingToggle({ value, onChange }: BillingToggleProps) {
  return (
    <div
      role="group"
      aria-label="Billing cycle"
      className="inline-flex items-center rounded-lg p-0.5"
      style={{ background: 'rgba(17,76,90,0.4)', border: '1px solid rgba(217,232,226,0.08)' }}
    >
      {(['monthly', 'annual'] as const).map((cycle) => (
        <button
          key={cycle}
          id={`billing-${cycle}`}
          aria-pressed={value === cycle}
          onClick={() => onChange(cycle)}
          className="relative flex items-center gap-2 rounded-md px-4 py-2 text-sm font-medium transition-all duration-150"
          style={value === cycle ? {
            background: 'rgba(241,246,244,0.1)',
            color: '#f1f6f4',
          } : {
            color: 'rgba(217,232,226,0.5)',
          }}
        >
          {cycle === 'monthly' ? 'Monthly' : 'Annual'}
          {cycle === 'annual' && (
            <span
              className="rounded-full px-1.5 py-px text-[10px] font-bold"
              style={value === 'annual'
                ? { background: 'rgba(255,153,50,0.2)', color: '#ff9932' }
                : { background: 'rgba(217,232,226,0.08)', color: 'rgba(217,232,226,0.4)' }}
            >
              –20%
            </span>
          )}
        </button>
      ))}
    </div>
  );
}
