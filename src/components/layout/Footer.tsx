import { IconCube16Solid, IconLink } from '../../icons';

type FooterLink = { label: string; href: string; external?: boolean };
const FOOTER_LINKS: Record<string, FooterLink[]> = {
  Product:   [
    { label: 'Features',     href: '#features' },
    { label: 'Pricing',      href: '#pricing'  },
    { label: 'Integrations', href: '#' },
    { label: 'Changelog',    href: '#' },
  ],
  Resources: [
    { label: 'Documentation', href: '#', external: true },
    { label: 'API Reference',  href: '#', external: true },
    { label: 'Blog',           href: '#', external: true },
    { label: 'Status',         href: '#', external: true },
  ],
  Company: [
    { label: 'About',    href: '#' },
    { label: 'Careers',  href: '#' },
    { label: 'Security', href: '#' },
    { label: 'Privacy',  href: '#' },
  ],
};

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer
      className="border-t px-6 pt-16 pb-10"
      style={{ borderColor: 'rgba(217,232,226,0.07)', background: '#172b36' }}
    >
      <div className="mx-auto max-w-6xl">
        <div className="grid grid-cols-2 gap-12 md:grid-cols-4 mb-16">

          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <a href="#hero" className="mb-5 flex items-center gap-2 group" aria-label="DataFlow AI home">
              <span className="text-[#ff9932] transition-all duration-150 group-hover:drop-shadow-[0_0_6px_rgba(255,153,50,0.5)]">
                <IconCube16Solid width={22} height={22} aria-hidden />
              </span>
              <span className="font-barlow text-base font-bold text-[#f1f6f4]">
                DataFlow<span className="text-[#ff9932]"> AI</span>
              </span>
            </a>
            <p className="text-sm leading-relaxed" style={{ color: 'rgba(217,232,226,0.4)', maxWidth: '200px' }}>
              The intelligent data platform for modern engineering teams.
            </p>
          </div>

          {/* Nav columns */}
          {Object.entries(FOOTER_LINKS).map(([group, links]) => (
            <div key={group}>
              <nav aria-label={`Footer ${group}`}>
                <p
                  className="mb-4 text-xs font-semibold uppercase tracking-widest"
                  style={{ color: 'rgba(217,232,226,0.3)' }}
                >
                  {group}
                </p>
                <ul className="flex flex-col gap-2.5" role="list">
                  {links.map(({ label, href, external }) => (
                    <li key={label}>
                      <a
                        href={href}
                        rel={external ? 'noopener noreferrer' : undefined}
                        target={external ? '_blank' : undefined}
                        className="flex items-center gap-1 text-sm transition-colors duration-150"
                        style={{ color: 'rgba(217,232,226,0.45)' }}
                        onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.color = '#f1f6f4'; }}
                        onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.color = 'rgba(217,232,226,0.45)'; }}
                      >
                        {label}
                        {external && <IconLink width={11} height={11} aria-hidden className="opacity-40" />}
                      </a>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div
          className="flex flex-col items-center justify-between gap-4 border-t pt-8 md:flex-row"
          style={{ borderColor: 'rgba(217,232,226,0.06)' }}
        >
          <p className="text-sm" style={{ color: 'rgba(217,232,226,0.25)' }}>
            © {year} DataFlow AI, Inc. All rights reserved.
          </p>
          <div className="flex items-center gap-5">
            {['Terms', 'Privacy', 'Cookies'].map((item) => (
              <a
                key={item}
                href="#"
                className="text-sm transition-colors duration-150"
                style={{ color: 'rgba(217,232,226,0.25)' }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.color = 'rgba(217,232,226,0.6)'; }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.color = 'rgba(217,232,226,0.25)'; }}
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
