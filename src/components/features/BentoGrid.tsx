import type { BentoGridProps } from '../../types';
import { BentoCard } from './BentoCard';

export function BentoGrid({ features, activeIndex, onActiveChange }: BentoGridProps) {
  return (
    <div
      className="grid grid-cols-3 gap-4 auto-rows-fr"
      aria-label="Feature grid"
    >
      {features.map((feature) => (
        <BentoCard
          key={feature.id}
          feature={feature}
          isActive={feature.id === activeIndex}
          onHover={() => onActiveChange(feature.id)}
        />
      ))}
    </div>
  );
}
