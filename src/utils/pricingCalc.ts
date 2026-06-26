import type { CurrencyCode } from '../types';

/**
 * Computes the final display price.
 * Formula: Math.round(basePrice × billingMultiplier × regionalTariff)
 *
 * @param basePrice       - USD monthly base (positive number)
 * @param billingMultiplier - 1.0 for monthly, 0.80 for annual
 * @param regionalTariff  - 1.0 (USD), 0.92 (EUR), 83.5 (INR)
 * @returns Non-negative integer price
 */
export function computePrice(
  basePrice: number,
  billingMultiplier: number,
  regionalTariff: number
): number {
  if (basePrice < 0 || billingMultiplier <= 0 || regionalTariff <= 0) {
    console.warn('[computePrice] Invalid inputs:', { basePrice, billingMultiplier, regionalTariff });
    return 0;
  }
  return Math.round(basePrice * billingMultiplier * regionalTariff);
}

/**
 * Formats a computed price amount as a locale-appropriate string.
 * No decimal places at these price points.
 */
export function formatPrice(amount: number, _currency?: CurrencyCode): string {
  return amount.toLocaleString();
}
