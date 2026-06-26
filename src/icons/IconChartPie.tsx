import type { SvgIconProps } from '../types';

export function IconChartPie({
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
      <g
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
      >
        <path d="M10.5 6a7.5 7.5 0 1 0 7.5 7.5h-7.5V6Z" />
        <path d="M13.5 10.5H21A7.5 7.5 0 0 0 13.5 3v7.5Z" />
      </g>
    </svg>
  );
}
