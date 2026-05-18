export default function OGImagePage() {
  return (
    <div
      style={{
        width: 1200,
        height: 630,
        background: '#0B1D2D',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        fontFamily: "'Poppins', sans-serif",
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Subtle grid */}
      <div style={{
        position: 'absolute', inset: 0,
        backgroundImage: 'linear-gradient(rgba(45,91,255,0.07) 1px, transparent 1px), linear-gradient(90deg, rgba(45,91,255,0.07) 1px, transparent 1px)',
        backgroundSize: '60px 60px',
      }} />
      {/* Glow */}
      <div style={{
        position: 'absolute',
        top: '50%', left: '50%',
        transform: 'translate(-50%, -60%)',
        width: 700, height: 400,
        background: 'radial-gradient(ellipse, rgba(45,91,255,0.12) 0%, transparent 70%)',
        borderRadius: '50%',
      }} />

      {/* Content */}
      <div style={{ position: 'relative', textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 0 }}>

        {/* Logo mark */}
        <div style={{ marginBottom: 32 }}>
          <svg width="72" height="72" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="40" height="40" rx="9" fill="#0B1D2D" />
            <rect x="0.5" y="0.5" width="39" height="39" rx="8.5" stroke="rgba(45,91,255,0.4)" />
            <text x="7" y="28" fontSize="18" fontWeight="700" fill="white" fontFamily="sans-serif">BG</text>
            <path d="M5.5 29.5 L11.5 35.5 L34.5 14" stroke="#D4AF37" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>

        {/* Wordmark */}
        <div style={{ display: 'flex', alignItems: 'baseline', gap: 0, marginBottom: 20 }}>
          <span style={{ fontSize: 64, fontWeight: 700, color: 'white', letterSpacing: '-1px', lineHeight: 1 }}>Bank</span>
          <span style={{ fontSize: 64, fontWeight: 700, color: '#2D5BFF', letterSpacing: '-1px', lineHeight: 1 }}>Grade</span>
        </div>

        {/* Divider */}
        <div style={{ width: 48, height: 2, background: 'rgba(212,175,55,0.5)', borderRadius: 2, marginBottom: 24 }} />

        {/* Tagline */}
        <p style={{ fontSize: 22, fontWeight: 500, color: 'rgba(255,255,255,0.55)', letterSpacing: '0.01em', margin: 0 }}>
          Know Your BankGrade Before the Market Does.
        </p>

        {/* Sub */}
        <p style={{ fontSize: 14, fontWeight: 400, color: 'rgba(255,255,255,0.28)', marginTop: 14, letterSpacing: '0.12em', textTransform: 'uppercase' }}>
          Middle Market Financing Intelligence
        </p>
      </div>
    </div>
  );
}
