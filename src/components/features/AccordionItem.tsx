import { useRef, useLayoutEffect } from 'react';
import type { AccordionItemProps } from '../../types';
import {
  IconArrowPath, IconArrowTrendingUp, IconChartPie,
  IconCog8Tooth, IconCube16Solid, IconLink,
  IconChevronDown, IconChevronUp, IconShield, IconBeaker, IconSearch,
} from '../../icons';

const ICON_MAP: Record<string, React.ComponentType<{ width?: number; height?: number; 'aria-hidden'?: boolean }>> = {
  'arrow-path':        IconArrowPath,
  'arrow-trending-up': IconArrowTrendingUp,
  'chart-pie':         IconChartPie,
  'cog-8-tooth':       IconCog8Tooth,
  'cube-16-solid':     IconCube16Solid,
  'link':              IconLink,
  'shield':            IconShield,
  'beaker':            IconBeaker,
  'search':            IconSearch,
  'bolt':              IconArrowTrendingUp, // fallback
};

const ACCENT_MAP: Record<string, string> = {
  'deep-saffron': '#ff9932',
  'forsythia':    '#ffc880',
  'mystic-mint':  '#d9e8e2',
};

export function AccordionItem({ feature, isOpen, onToggle }: AccordionItemProps) {
  const panelRef   = useRef<HTMLDivElement>(null);
  const buttonId   = `acc-btn-${feature.id}`;
  const panelId    = `acc-panel-${feature.id}`;
  const Icon       = ICON_MAP[feature.icon];
  const accent     = ACCENT_MAP[feature.accentColor] ?? '#ff9932';

  /**
   * Context Lock smooth-open fix:
   *
   * When the bento grid switches to accordion mid-hover, React mounts
   * AccordionItem with isOpen=true. At that point panelRef.current exists
   * but the browser hasn't painted yet — so we must read scrollHeight in a
   * useLayoutEffect (synchronous after DOM mutation, before paint) and then
   * kick off the CSS transition by toggling maxHeight in a rAF tick.
   *
   * This ensures the panel animates 0 → realHeight smoothly rather than
   * snapping open or using a hardcoded fallback.
   */
  useLayoutEffect(() => {
    const el = panelRef.current;
    if (!el) return;

    if (isOpen) {
      // Read real scrollHeight synchronously before paint
      const targetHeight = el.scrollHeight;
      // Start from 0 (override any inherited maxHeight)
      el.style.maxHeight = '0px';
      el.style.transition = 'none';

      // Kick off animation in the next frame after the 0px is painted
      requestAnimationFrame(() => {
        el.style.transition = 'max-height 300ms ease-in-out';
        el.style.maxHeight  = targetHeight + 'px';
      });
    } else {
      // Collapsing: animate from current height to 0
      el.style.transition = 'max-height 300ms ease-in-out';
      el.style.maxHeight  = '0px';
    }
  }, [isOpen]);

  return (
    <div
      className="overflow-hidden"
      style={{ borderBottom: '1px solid rgba(217,232,226,0.08)' }}
    >
      <button
        id={buttonId}
        aria-expanded={isOpen}
        aria-controls={panelId}
        onClick={onToggle}
        className="flex w-full items-center gap-4 py-5 text-left"
        style={{ transition: 'color 150ms ease-out' }}
      >
        {/* Icon */}
        <span
          className="flex-shrink-0 transition-all duration-150"
          style={{ color: isOpen ? accent : 'rgba(217,232,226,0.45)' }}
        >
          {Icon && <Icon width={18} height={18} aria-hidden />}
        </span>

        {/* Title */}
        <span
          className="flex-1 font-barlow font-bold transition-colors duration-150"
          style={{ color: isOpen ? '#f1f6f4' : 'rgba(241,246,244,0.75)' }}
        >
          {feature.title}
        </span>

        {/* Stat badge */}
        {feature.stat && (
          <span
            className="hidden sm:flex items-center gap-1 rounded-full px-2.5 py-0.5 text-[11px] font-semibold mr-2"
            style={{
              background: isOpen ? `${accent}18` : 'rgba(217,232,226,0.06)',
              color: isOpen ? accent : 'rgba(217,232,226,0.35)',
              border: `1px solid ${isOpen ? accent + '28' : 'rgba(217,232,226,0.08)'}`,
              transition: 'background 150ms ease-out, color 150ms ease-out',
            }}
          >
            {feature.stat.value}
          </span>
        )}

        {/* Chevron */}
        <span
          className="flex-shrink-0 transition-transform duration-200"
          style={{
            color: 'rgba(217,232,226,0.35)',
            transform: isOpen ? 'rotate(0deg)' : 'rotate(0deg)',
          }}
          aria-hidden="true"
        >
          {isOpen
            ? <IconChevronUp   width={16} height={16} aria-hidden />
            : <IconChevronDown width={16} height={16} aria-hidden />}
        </span>
      </button>

      {/* Panel — height is controlled entirely by useLayoutEffect above */}
      <div
        id={panelId}
        ref={panelRef}
        role="region"
        aria-labelledby={buttonId}
        style={{
          maxHeight: '0px',      // initial value; overridden by useLayoutEffect
          overflow:  'hidden',
        }}
      >
        <div className="pb-5 pl-[34px] pr-2">
          <p
            className="text-sm leading-relaxed mb-3"
            style={{ color: 'rgba(217,232,226,0.55)' }}
          >
            {feature.description}
          </p>
          {/* Tag pills if present */}
          {feature.tags && feature.tags.length > 0 && (
            <div className="flex flex-wrap gap-1.5">
              {feature.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-md px-2 py-0.5 text-[11px] font-medium"
                  style={{
                    background: `${accent}10`,
                    color: accent,
                    border: `1px solid ${accent}20`,
                  }}
                >
                  {tag}
                </span>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
