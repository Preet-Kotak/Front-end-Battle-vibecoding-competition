import { useEffect, useRef } from 'react';
import type { MobileMenuProps } from '../../types';
import { useFocusTrap } from '../../hooks/useFocusTrap';
import { IconXMark } from '../../icons';

const NAV_LINKS = [
  { href: '#features',     label: 'Features'  },
  { href: '#pricing',      label: 'Pricing'   },
  { href: '#testimonials', label: 'Customers' },
];

export function MobileMenu({ isOpen, onClose, anchorRef }: MobileMenuProps) {
  const menuRef = useRef<HTMLDivElement>(null);
  useFocusTrap(menuRef, isOpen);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => { if (e.key === 'Escape' && isOpen) { onClose(); anchorRef.current?.focus(); } };
    document.addEventListener('keydown', handler);
    return () => document.removeEventListener('keydown', handler);
  }, [isOpen, onClose, anchorRef]);

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  return (
    <div
      ref={menuRef}
      id="mobile-menu"
      role="dialog"
      aria-modal="true"
      aria-label="Navigation menu"
      className="fixed inset-0 z-40 flex flex-col transition-transform duration-200"
      style={{
        background: 'rgba(23, 43, 54, 0.97)',
        backdropFilter: 'blur(24px)',
        transform: isOpen ? 'translateX(0)' : 'translateX(100%)',
        borderLeft: '1px solid rgba(217,232,226,0.07)',
      }}
    >
      {/* Header */}
      <div
        className="flex items-center justify-between px-6 py-4"
        style={{ borderBottom: '1px solid rgba(217,232,226,0.06)' }}
      >
        <span className="font-barlow text-base font-bold text-[#f1f6f4]">DataFlow AI</span>
        <button
          id="mobile-menu-close"
          onClick={onClose}
          aria-label="Close menu"
          className="rounded-lg p-1.5 transition-colors duration-150"
          style={{ color: 'rgba(217,232,226,0.5)' }}
          onMouseEnter={(e) => { (e.currentTarget as HTMLButtonElement).style.color = '#f1f6f4'; }}
          onMouseLeave={(e) => { (e.currentTarget as HTMLButtonElement).style.color = 'rgba(217,232,226,0.5)'; }}
        >
          <IconXMark width={20} height={20} aria-hidden />
        </button>
      </div>

      {/* Links */}
      <nav className="flex flex-1 flex-col gap-1 px-4 pt-6">
        {NAV_LINKS.map(({ href, label }) => (
          <a
            key={href}
            href={href}
            onClick={onClose}
            className="rounded-xl px-4 py-3 text-base font-medium transition-colors duration-150"
            style={{ color: 'rgba(217,232,226,0.7)' }}
            onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.color = '#f1f6f4'; (e.currentTarget as HTMLAnchorElement).style.background = 'rgba(217,232,226,0.05)'; }}
            onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.color = 'rgba(217,232,226,0.7)'; (e.currentTarget as HTMLAnchorElement).style.background = 'transparent'; }}
          >
            {label}
          </a>
        ))}
      </nav>

      {/* CTA */}
      <div className="px-6 py-6" style={{ borderTop: '1px solid rgba(217,232,226,0.06)' }}>
        <a href="#pricing" onClick={onClose} className="btn-primary w-full justify-center">
          Get started free
        </a>
      </div>
    </div>
  );
}
