export default function OGImagePage() {
  return (
    <div style={{
      width: 1200, height: 630,
      background: '#0B1F33',
      display: 'flex', flexDirection: 'column',
      alignItems: 'center', justifyContent: 'center',
      fontFamily: "'Poppins', sans-serif",
      position: 'relative', overflow: 'hidden',
    }}>
      {/* Grid */}
      <div style={{
        position: 'absolute', inset: 0,
        backgroundImage: 'linear-gradient(rgba(183,189,199,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(183,189,199,0.04) 1px, transparent 1px)',
        backgroundSize: '72px 72px',
      }} />
      {/* Glow */}
      <div style={{
        position: 'absolute', top: '30%', left: '50%',
        transform: 'translate(-50%, -60%)',
        width: 1000, height: 600,
        background: 'radial-gradient(ellipse, rgba(200,164,93,0.07) 0%, transparent 65%)',
        borderRadius: '50%',
      }} />

      {/* Content */}
      <div style={{ position: 'relative', textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>

        {/* Logo */}
        <div style={{ marginBottom: 36 }}>
          <img src="/bankable-logo.png" alt="BANKABLE" style={{ height: 72, objectFit: 'contain' }} />
        </div>

        {/* Gold rule */}
        <div style={{ width: 48, height: 2, background: '#C8A45D', borderRadius: 2, marginBottom: 32, opacity: 0.7 }} />

        {/* Tagline */}
        <p style={{ fontSize: 30, fontWeight: 500, color: 'rgba(255,255,255,0.65)', letterSpacing: '0.01em', margin: 0, lineHeight: 1.4 }}>
          See Your Business the Way Lenders Do.
        </p>

        {/* Sub */}
        <p style={{ fontSize: 13, fontWeight: 500, color: '#C8A45D', marginTop: 24, letterSpacing: '0.22em', textTransform: 'uppercase', opacity: 0.8 }}>
          Institutional Credit Intelligence · BankGrade™
        </p>
      </div>

      {/* Corner watermark */}
      <div style={{ position: 'absolute', bottom: 32, right: 40, display: 'flex', alignItems: 'center', gap: 8 }}>
        <div style={{ width: 1, height: 28, background: 'rgba(183,189,199,0.15)' }} />
        <span style={{ fontSize: 11, color: 'rgba(183,189,199,0.3)', letterSpacing: '0.1em', fontWeight: 500 }}>BANKABLE · Middle Market Advisory</span>
      </div>
    </div>
  );
}
