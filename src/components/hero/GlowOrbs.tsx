/** GlowOrbs — Raycast-style bottom-center spotlight */
export function GlowOrbs() {
  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
      {/* Primary spotlight — deep-saffron, bottom-center */}
      <div
        className="animate-orb-pulse absolute bottom-[-20%] left-1/2 -translate-x-1/2"
        style={{
          width: '900px',
          height: '500px',
          background: 'radial-gradient(ellipse, rgba(255,153,50,0.18) 0%, rgba(255,153,50,0.06) 45%, transparent 70%)',
          filter: 'blur(40px)',
        }}
      />
      {/* Secondary — forsythia, slightly offset */}
      <div
        className="animate-orb-pulse absolute bottom-[-30%] left-[40%]"
        style={{
          width: '600px',
          height: '400px',
          background: 'radial-gradient(ellipse, rgba(255,200,128,0.10) 0%, transparent 65%)',
          filter: 'blur(60px)',
          animationDelay: '-3.5s',
        }}
      />
    </div>
  );
}
