import { useState, useEffect } from 'react';

/**
 * Returns true when the viewport width is ≥ the given pixel value.
 * Uses window.matchMedia + change listener (no ResizeObserver needed for a single breakpoint).
 * Requirement 7.4 — no external breakpoint hooks or libraries.
 */
export function useBreakpoint(px: number): boolean {
  const [matches, setMatches] = useState<boolean>(() => {
    if (typeof window === 'undefined') return false;
    return window.matchMedia(`(min-width: ${px}px)`).matches;
  });

  useEffect(() => {
    if (typeof window === 'undefined') return;
    const mq = window.matchMedia(`(min-width: ${px}px)`);
    const handler = (e: MediaQueryListEvent) => setMatches(e.matches);
    mq.addEventListener('change', handler);
    return () => mq.removeEventListener('change', handler);
  }, [px]);

  return matches;
}
