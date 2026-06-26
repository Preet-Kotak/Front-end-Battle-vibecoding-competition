// ── Shared primitives ──────────────────────────────────────────────────────

export interface SvgIconProps {
  className?: string;
  'aria-hidden'?: boolean;
  'aria-label'?: string;
  width?: number | string;
  height?: number | string;
}

// ── Feature data ───────────────────────────────────────────────────────────

export type FeatureIcon =
  | 'chart-pie'
  | 'cog-8-tooth'
  | 'arrow-path'
  | 'arrow-trending-up'
  | 'cube-16-solid'
  | 'link'
  | 'search'
  | 'shield'
  | 'bolt'
  | 'beaker';

export type BentoSpan = 'normal' | 'wide' | 'tall'; // CSS grid span

export type BentoVisual =
  | 'sparkline'
  | 'rings'
  | 'tags'
  | 'pipeline'
  | 'globe'
  | 'code'
  | 'bars'
  | 'none';

export interface FeatureStat {
  value: string;
  label: string;
}

export interface Feature {
  id: number;
  title: string;
  description: string;
  icon: FeatureIcon;
  span: BentoSpan;
  accentColor: string;
  stat?: FeatureStat;       // optional top-right badge
  visual?: BentoVisual;     // mini visual widget inside card
  tags?: string[];          // tag cloud for tags visual
}

// ── Pricing data ───────────────────────────────────────────────────────────

export type BillingCycle = 'monthly' | 'annual';
export type CurrencyCode = 'USD' | 'EUR' | 'INR';

export interface PriceTier {
  id: 'starter' | 'pro' | 'enterprise';
  label: string;
  basePrice: number; // USD monthly base
  features: string[];
  highlighted: boolean;
}

export interface PriceMatrix {
  tiers: PriceTier[];
  billingMultipliers: Record<BillingCycle, number>; // monthly: 1.0, annual: 0.80
  regionalTariffs: Record<CurrencyCode, number>;     // USD: 1.0, EUR: 0.92, INR: 83.5
  currencySymbols: Record<CurrencyCode, string>;     // USD: '$', EUR: '€', INR: '₹'
}

// ── Testimonial data ───────────────────────────────────────────────────────

export interface Testimonial {
  id: number;
  quote: string;
  author: string;
  role: string;
  company: string;
  avatarUrl?: string;
}

// ── Pricing component refs ─────────────────────────────────────────────────

export interface PriceRefs {
  amountNodes: React.RefObject<HTMLSpanElement>[];
  symbolNodes: React.RefObject<HTMLSpanElement>[];
}

// ── Component prop interfaces ──────────────────────────────────────────────

export interface HeaderProps {} // no props – self-contained with internal state for mobileOpen

export interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  anchorRef: React.RefObject<HTMLButtonElement>;
}

export interface BentoGridProps {
  features: Feature[];
  activeIndex: number;
  onActiveChange: (index: number) => void;
}

export interface BentoCardProps {
  feature: Feature;
  isActive: boolean;
  onHover: () => void;
}

export interface AccordionListProps {
  features: Feature[];
  activeIndex: number;
  onActiveChange: (index: number) => void;
}

export interface AccordionItemProps {
  feature: Feature;
  isOpen: boolean;
  onToggle: () => void;
}

export interface PricingCardProps {
  tier: PriceTier;
  priceAmountRef: React.RefObject<HTMLSpanElement>;
  currencySymbolRef: React.RefObject<HTMLSpanElement>;
}

export interface BillingToggleProps {
  value: BillingCycle;
  onChange: (cycle: BillingCycle) => void;
}

export interface CurrencySwitcherProps {
  onCurrencyChange: (code: CurrencyCode) => void;
}

export interface TestimonialCardProps {
  testimonial: Testimonial;
  isVisible: boolean;
  direction: 'next' | 'prev';
  isAnimating: boolean;
}

export interface TestimonialNavProps {
  total: number;
  activeIndex: number;
  onPrev: () => void;
  onNext: () => void;
}

export interface CodePreviewProps {
  lines: string[];
}

export interface GlowOrbsProps {} // purely presentational, no props

export interface MetaManagerProps {
  title: string;
  description: string;
  ogImage: string;
  ogUrl: string;
}
