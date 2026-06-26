import type { TestimonialNavProps } from '../../types';
import { IconChevronLeft, IconChevronRight } from '../../icons';

export function TestimonialNav({ total, activeIndex, onPrev, onNext }: TestimonialNavProps) {
  return (
    <div className="flex items-center justify-between">
      {/* Dot indicators */}
      <div className="flex items-center gap-2" role="tablist" aria-label="Testimonial navigation">
        {Array.from({ length: total }, (_, i) => (
          <div
            key={i}
            role="tab"
            aria-selected={i === activeIndex}
            aria-label={`Testimonial ${i + 1}`}
            className="rounded-full transition-all duration-300"
            style={{
              width:  i === activeIndex ? '24px' : '6px',
              height: '6px',
              background: i === activeIndex ? '#ff9932' : 'rgba(217,232,226,0.2)',
            }}
          />
        ))}
      </div>

      {/* Buttons */}
      <div className="flex items-center gap-2">
        <button
          id="testimonial-prev"
          aria-label="Previous testimonial"
          onClick={onPrev}
          className="flex h-9 w-9 items-center justify-center rounded-lg transition-all duration-150"
          style={{ border: '1px solid rgba(217,232,226,0.1)', color: 'rgba(217,232,226,0.5)' }}
          onMouseEnter={(e) => { (e.currentTarget as HTMLButtonElement).style.borderColor = 'rgba(217,232,226,0.25)'; (e.currentTarget as HTMLButtonElement).style.color = '#f1f6f4'; }}
          onMouseLeave={(e) => { (e.currentTarget as HTMLButtonElement).style.borderColor = 'rgba(217,232,226,0.1)'; (e.currentTarget as HTMLButtonElement).style.color = 'rgba(217,232,226,0.5)'; }}
        >
          <IconChevronLeft width={16} height={16} aria-hidden />
        </button>
        <button
          id="testimonial-next"
          aria-label="Next testimonial"
          onClick={onNext}
          className="flex h-9 w-9 items-center justify-center rounded-lg transition-all duration-150"
          style={{ border: '1px solid rgba(217,232,226,0.1)', color: 'rgba(217,232,226,0.5)' }}
          onMouseEnter={(e) => { (e.currentTarget as HTMLButtonElement).style.borderColor = 'rgba(217,232,226,0.25)'; (e.currentTarget as HTMLButtonElement).style.color = '#f1f6f4'; }}
          onMouseLeave={(e) => { (e.currentTarget as HTMLButtonElement).style.borderColor = 'rgba(217,232,226,0.1)'; (e.currentTarget as HTMLButtonElement).style.color = 'rgba(217,232,226,0.5)'; }}
        >
          <IconChevronRight width={16} height={16} aria-hidden />
        </button>
      </div>
    </div>
  );
}
