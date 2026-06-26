import type { TestimonialCardProps } from '../../types';

export function TestimonialCard({ testimonial, isVisible, direction, isAnimating }: TestimonialCardProps) {
  const enterClass = direction === 'next' ? 'animate-slide-in-right' : 'animate-slide-in-left';
  const exitClass  = direction === 'next' ? 'animate-slide-out-left' : 'animate-slide-out-right';
  const animClass  = isAnimating ? exitClass : isVisible ? enterClass : '';

  return (
    <figure
      aria-hidden={!isVisible}
      className={['flex flex-col gap-8', animClass].join(' ')}
    >
      {/* Large opening quote */}
      <div
        aria-hidden="true"
        className="font-barlow select-none leading-none"
        style={{ fontSize: '80px', color: 'rgba(255,153,50,0.2)', lineHeight: 1 }}
      >
        "
      </div>

      <blockquote
        className="text-xl leading-relaxed font-medium"
        style={{ color: 'rgba(241,246,244,0.9)', letterSpacing: '-0.01em' }}
      >
        {testimonial.quote}
      </blockquote>

      {/* Author row */}
      <figcaption className="flex items-center gap-4">
        {/* Avatar initial */}
        <div
          className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full text-sm font-bold"
          style={{
            background: 'rgba(255,153,50,0.12)',
            color: '#ff9932',
            border: '1px solid rgba(255,153,50,0.2)',
          }}
          aria-hidden="true"
        >
          {testimonial.author.charAt(0)}
        </div>
        <div>
          <h3 className="text-sm font-semibold text-[#f1f6f4]">{testimonial.author}</h3>
          <p className="text-sm" style={{ color: 'rgba(217,232,226,0.45)' }}>
            {testimonial.role} · {testimonial.company}
          </p>
        </div>
      </figcaption>
    </figure>
  );
}
