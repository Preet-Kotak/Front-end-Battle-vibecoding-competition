import { useState, useRef } from 'react';
import { IconCube16Solid, IconXMark } from '../../icons';
import { MobileMenu } from './MobileMenu';

const NAV_LINKS = [
  { href: '#features',     label: 'Features'  },
  { href: '#pricing',      label: 'Pricing'   },
  { href: '#testimonials', label: 'Customers' },
];

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const hamburgerRef = useRef<HTMLButtonElement>(null);

  return (
    <>
      <header
        className="fixed top-0 left-0 right-0 z-50"
        style={{
          background: 'rgba(23, 43, 54, 0.7)',
          backdropFilter: 'blur(20px)',
          WebkitBackdropFilter: 'blur(20px)',
          borderBottom: '1px solid rgba(217,232,226,0.07)',
        }}
      >
        <nav
          className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4"
          aria-label="Primary navigation"
        >
          {/* Logo */}
          <a href="#hero" className="flex items-center gap-2.5 group" aria-label="DataFlow AI home">
            <span className="text-[#ff9932] transition-all duration-150 group-hover:drop-shadow-[0_0_8px_rgba(255,153,50,0.6)]">
              <IconCube16Solid width={24} height={24} aria-hidden />
            </span>
            <span className="font-barlow text-[17px] font-bold tracking-tight text-[#f1f6f4]">
              DataFlow<span className="text-[#ff9932]"> AI</span>
            </span>
          </a>

          {/* Desktop nav links — centered */}
          <ul className="hidden items-center gap-7 md:flex absolute left-1/2 -translate-x-1/2" role="list">
            {NAV_LINKS.map(({ href, label }) => (
              <li key={href}>
                <a
                  href={href}
                  className="text-sm font-medium text-[#d9e8e2]/70 transition-colors duration-150 hover:text-[#f1f6f4]"
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>

          {/* Right side CTA */}
          <div className="hidden items-center gap-3 md:flex">
            <a
              href="#"
              className="text-sm font-medium text-[#d9e8e2]/70 transition-colors duration-150 hover:text-[#f1f6f4]"
            >
              Log in
            </a>
            <a
              href="#pricing"
              id="header-cta"
              className="btn-primary text-sm"
            >
              Get started
            </a>
          </div>

          {/* Mobile hamburger */}
          <button
            ref={hamburgerRef}
            id="mobile-menu-toggle"
            aria-controls="mobile-menu"
            aria-expanded={mobileOpen}
            aria-label={mobileOpen ? 'Close navigation menu' : 'Open navigation menu'}
            onClick={() => setMobileOpen((p) => !p)}
            className="flex items-center justify-center rounded-lg p-2 text-[#d9e8e2]/70 hover:text-[#f1f6f4] md:hidden"
          >
            {mobileOpen ? (
              <IconXMark width={20} height={20} aria-hidden />
            ) : (
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
                <path d="M3 5.5h14M3 10h14M3 14.5h14" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
              </svg>
            )}
          </button>
        </nav>
      </header>

      <MobileMenu
        isOpen={mobileOpen}
        onClose={() => setMobileOpen(false)}
        anchorRef={hamburgerRef}
      />
    </>
  );
}
