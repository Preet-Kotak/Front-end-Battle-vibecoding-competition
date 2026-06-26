import { useRef, useEffect } from 'react';
import type { CodePreviewProps } from '../../types';

export function CodePreview({ lines }: CodePreviewProps) {
  const textRef  = useRef<HTMLSpanElement>(null);
  const indexRef = useRef(0);

  useEffect(() => {
    const el = textRef.current;
    if (!el || lines.length === 0) return;
    let cancelled = false;

    async function cycle() {
      while (!cancelled) {
        const el = textRef.current;
        if (!el) break;
        el.textContent = lines[indexRef.current];
        const anim = el.animate(
          [{ opacity: 0 }, { opacity: 1, offset: 0.15 }, { opacity: 1, offset: 0.85 }, { opacity: 0 }],
          { duration: 2400, easing: 'ease-in-out', fill: 'forwards' }
        );
        await anim.finished;
        if (cancelled) break;
        indexRef.current = (indexRef.current + 1) % lines.length;
      }
    }

    cycle();
    return () => {
      cancelled = true;
      textRef.current?.getAnimations().forEach((a) => a.cancel());
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [lines]);

  return (
    <div
      role="region"
      aria-label="Live code preview"
      className="rounded-xl px-5 py-4 font-mono text-sm"
      style={{
        background: 'rgba(15, 26, 32, 0.8)',
        border: '1px solid rgba(217,232,226,0.08)',
        backdropFilter: 'blur(10px)',
      }}
    >
      {/* Terminal dots */}
      <div className="mb-3 flex gap-1.5">
        <span className="h-2.5 w-2.5 rounded-full" style={{ background: 'rgba(255,255,255,0.12)' }} />
        <span className="h-2.5 w-2.5 rounded-full" style={{ background: 'rgba(255,255,255,0.12)' }} />
        <span className="h-2.5 w-2.5 rounded-full" style={{ background: 'rgba(255,255,255,0.12)' }} />
      </div>
      {/* Code line */}
      <div className="flex items-center gap-2.5" style={{ color: 'rgba(217,232,226,0.4)' }}>
        <span className="select-none text-xs" style={{ color: '#ff9932' }}>›</span>
        <span ref={textRef} style={{ color: 'rgba(241,246,244,0.9)' }} />
        <span
          className="inline-block h-3.5 w-px animate-pulse"
          style={{ background: '#ff9932', opacity: 0.8 }}
          aria-hidden="true"
        />
      </div>
    </div>
  );
}
