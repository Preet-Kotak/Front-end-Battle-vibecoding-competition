import { useRef } from 'react';
import type { BentoCardProps } from '../../types';
import {
  IconArrowPath, IconArrowTrendingUp, IconChartPie,
  IconCog8Tooth, IconCube16Solid, IconLink,
} from '../../icons';

const ICON_MAP: Record<string, React.ComponentType<{ width?: number; height?: number; 'aria-hidden'?: boolean; className?: string }>> = {
  'arrow-path':        IconArrowPath,
  'arrow-trending-up': IconArrowTrendingUp,
  'chart-pie':         IconChartPie,
  'cog-8-tooth':       IconCog8Tooth,
  'cube-16-solid':     IconCube16Solid,
  'link':              IconLink,
};

const ACCENT_MAP: Record<string, string> = {
  'deep-saffron': '#ff9932',
  'forsythia':    '#ffc880',
  'mystic-mint':  '#d9e8e2',
};

export function BentoCard({ feature, isActive, onHover }: BentoCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const Icon = ICON_MAP[feature.icon];
  const accent = ACCENT_MAP[feature.accentColor] ?? '#ff9932';

  const spanClass = feature.span === 'wide' ? 'col-span-2' : '';

  function handleMouseEnter() {
    if (cardRef.current) cardRef.current.style.willChange = 'transform';
    onHover();
  }
  function handleTransitionEnd() {
    if (cardRef.current) cardRef.current.style.willChange = '';
  }

  return (
    <div
      ref={cardRef}
      role="article"
      aria-label={feature.title}
      onMouseEnter={handleMouseEnter}
      onTransitionEnd={handleTransitionEnd}
      className={[
        spanClass,
        'card-base group relative flex flex-col gap-5 overflow-hidden p-6 cursor-default',
        isActive ? 'border-[rgba(255,153,50,0.25)] shadow-[0_0_32px_rgba(255,153,50,0.08)]' : '',
      ].join(' ')}
    >
      {/* Top accent line when active */}
      {isActive && (
        <div
          className="absolute top-0 left-6 right-6 h-px"
          style={{ background: `linear-gradient(90deg, transparent, ${accent}60, transparent)` }}
          aria-hidden="true"
        />
      )}

      {/* Icon — minimal, just color, no bg box */}
      <div style={{ color: accent }}>
        {Icon && <Icon width={22} height={22} aria-hidden />}
      </div>

      {/* Content */}
      <div className="flex flex-col gap-2">
        <h3 className="font-barlow text-base font-bold text-[#f1f6f4]">
          {feature.title}
        </h3>
        <p className="text-sm leading-relaxed" style={{ color: 'rgba(217,232,226,0.6)' }}>
          {feature.description}
        </p>
      </div>

      {/* Subtle hover glow */}
      <div
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{ background: `radial-gradient(circle at 30% 30%, ${accent}08 0%, transparent 60%)` }}
        aria-hidden="true"
      />
    </div>
  );
}
