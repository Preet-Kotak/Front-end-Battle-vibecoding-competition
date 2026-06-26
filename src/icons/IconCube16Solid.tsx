import type { SvgIconProps } from '../types';

export function IconCube16Solid({
  className,
  'aria-hidden': ariaHidden = true,
  'aria-label': ariaLabel,
  width = 16,
  height = 16,
}: SvgIconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 16 16"
      width={width}
      height={height}
      className={className}
      aria-hidden={ariaHidden}
      aria-label={ariaLabel}
    >
      <path
        fill="currentColor"
        d="M8.372 1.349a.75.75 0 0 0-.744 0l-4.81 2.748L8 7.131l5.182-3.034zM14 5.357L8.75 8.43v6.005l4.872-2.784A.75.75 0 0 0 14 11zm-6.75 9.078V8.43L2 5.357V11c0 .27.144.518.378.651z"
      />
    </svg>
  );
}
