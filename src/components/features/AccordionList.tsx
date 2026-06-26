import type { AccordionListProps } from '../../types';
import { AccordionItem } from './AccordionItem';

export function AccordionList({ features, activeIndex, onActiveChange }: AccordionListProps) {
  return (
    <div className="flex flex-col gap-3" aria-label="Feature accordion">
      {features.map((feature) => (
        <AccordionItem
          key={feature.id}
          feature={feature}
          isOpen={feature.id === activeIndex}
          onToggle={() =>
            onActiveChange(feature.id === activeIndex ? -1 : feature.id)
          }
        />
      ))}
    </div>
  );
}
