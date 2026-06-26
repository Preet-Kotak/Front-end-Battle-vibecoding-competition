import type { SvgIconProps } from '../types';

export function IconLink({
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
        d="M13.19 8.688a4.5 4.5 0 0 1 1.242 7.244l-4.5 4.5a4.5 4.5 0 0 1-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 0 0-6.364-6.364l-4.5 4.5a4.5 4.5 0 0 0 1.242 7.244"
      />
    </svg>
  );
}
