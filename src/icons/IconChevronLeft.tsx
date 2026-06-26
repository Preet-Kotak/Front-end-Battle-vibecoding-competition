import type { SvgIconProps } from '../types';

export function IconChevronLeft({
  className,
  'aria-hidden': ariaHidden = true,
  'aria-label': ariaLabel,
  width = 24,
  height = 24,
}: SvgIconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width={width}
      height={height}
      className={className}
      aria-hidden={ariaHidden}
      aria-label={ariaLabel}
      fill="none"
    >
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M15.75 19.5L8.25 12l7.5-7.5"
      />
    </svg>
  );
}
