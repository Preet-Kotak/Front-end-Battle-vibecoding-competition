import type { PriceMatrix } from '../types';
export { computePrice, formatPrice } from '../utils/pricingCalc';

export const PRICE_MATRIX: PriceMatrix = {
  tiers: [
    {
      id: 'starter',
      label: 'Starter',
      basePrice: 29, // USD/month
      features: ['5 pipelines', '10 GB data', 'Email support', 'Basic analytics'],
      highlighted: false,
    },
    {
      id: 'pro',
      label: 'Pro',
      basePrice: 99,
      features: ['Unlimited pipelines', '1 TB data', 'Priority support', 'Advanced ML'],
      highlighted: true,
    },
    {
      id: 'enterprise',
      label: 'Enterprise',
      basePrice: 299,
      features: ['Custom limits', 'SLA guarantee', 'Dedicated CSM', 'On-prem option'],
      highlighted: false,
    },
  ],
  billingMultipliers: {
    monthly: 1.0,
    annual:  0.8, // 20% discount
  },
  regionalTariffs: {
    USD: 1.0,
    EUR: 0.92,
    INR: 83.5,
  },
  currencySymbols: {
    USD: '$',
    EUR: '€',
    INR: '₹',
  },
};
