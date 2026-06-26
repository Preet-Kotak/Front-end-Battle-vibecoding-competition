import type { SvgIconProps } from '../types';

export function IconSearch({
  className,
  'aria-hidden': ariaHidden = true,
  'aria-label': ariaLabel,
  width = 20,
  height = 20,
}: SvgIconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 20 20"
      width={width}
      height={height}
      className={className}
      aria-hidden={ariaHidden}
      aria-label={ariaLabel}
    >
      <path
        fill="currentColor"
        d="M12.9 14.32a8 8 0 1 1 1.41-1.41l5.35 5.33l-1.42 1.42l-5.33-5.34zM8 14A6 6 0 1 0 8 2a6 6 0 0 0 0 12z"
      />
    </svg>
  );
}
