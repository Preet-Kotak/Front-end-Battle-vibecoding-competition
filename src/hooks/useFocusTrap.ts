import { useEffect } from 'react';

/**
 * Traps keyboard Tab focus within the given container element while isActive is true.
 * When deactivated, removes the listener so focus is released back to the document.
 * Requirement 3.6 — keyboard focus trap for mobile menu.
 */
export function useFocusTrap(
  containerRef: React.RefObject<HTMLElement>,
  isActive: boolean
): void {
  useEffect(() => {
    if (!isActive || !containerRef.current) return;

    const focusableSelectors = [
      'a[href]',
      'button:not([disabled])',
      'input',
      'select',
      'textarea',
      '[tabindex]:not([tabindex="-1"])',
    ].join(', ');

    const el = containerRef.current;
    const focusable = Array.from(el.querySelectorAll<HTMLElement>(focusableSelectors));
    const first = focusable[0];
    const last = focusable[focusable.length - 1];

    // Move focus into the menu on open
    first?.focus();

    function handleKeyDown(e: KeyboardEvent) {
      if (e.key !== 'Tab') return;
      if (e.shiftKey) {
        if (document.activeElement === first) {
          e.preventDefault();
          last?.focus();
        }
      } else {
        if (document.activeElement === last) {
          e.preventDefault();
          first?.focus();
        }
      }
    }

    el.addEventListener('keydown', handleKeyDown);
    return () => el.removeEventListener('keydown', handleKeyDown);
  }, [isActive, containerRef]);
}
