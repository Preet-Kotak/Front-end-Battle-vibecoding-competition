import { useState } from 'react';
import type { CurrencyCode, CurrencySwitcherProps } from '../../types';

const CURRENCIES: { code: CurrencyCode; symbol: string; label: string }[] = [
  { code: 'USD', symbol: '$', label: 'US Dollar'    },
  { code: 'EUR', symbol: '€', label: 'Euro'         },
  { code: 'INR', symbol: '₹', label: 'Indian Rupee' },
];

export function CurrencySwitcher({ onCurrencyChange }: CurrencySwitcherProps) {
  const [currencyCode, setCurrencyCode] = useState<CurrencyCode>('USD');

  function handleClick(code: CurrencyCode) {
    setCurrencyCode(code);
    onCurrencyChange(code);
  }

  return (
    <div
      role="group"
      aria-label="Currency selector"
      className="inline-flex items-center rounded-lg p-0.5"
      style={{ background: 'rgba(17,76,90,0.4)', border: '1px solid rgba(217,232,226,0.08)' }}
    >
      {CURRENCIES.map(({ code, symbol, label }) => (
        <button
          key={code}
          id={`currency-${code.toLowerCase()}`}
          aria-pressed={currencyCode === code}
          aria-label={`${label} (${symbol})`}
          onClick={() => handleClick(code)}
          className="rounded-md px-3 py-2 text-sm font-medium transition-all duration-150"
          style={currencyCode === code ? {
            background: 'rgba(241,246,244,0.1)',
            color: '#f1f6f4',
          } : {
            color: 'rgba(217,232,226,0.5)',
          }}
        >
          {symbol} {code}
        </button>
      ))}
    </div>
  );
}
