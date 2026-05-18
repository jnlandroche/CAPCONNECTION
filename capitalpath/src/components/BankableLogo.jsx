import React from 'react';

/**
 * BANKABLE logo — SVG recreation matching the brand mark:
 * · Silver/chrome circular ring
 * · Three gold bar-chart columns inside (left to right, ascending)
 * · Bold gold diagonal sweep arc cutting across the circle (lower-left → upper-right)
 * · "BANKABLE" metallic wordmark in wide-tracked bold Poppins
 */
export default function BankableLogo({ height = 40, className = '' }) {
  // viewBox is 240 wide × 60 tall (icon ~60×60, gap 10, text ~170)
  const vW = 240, vH = 60;
  const aspect = vW / vH;
  const w = height * aspect;

  // Icon centre & ring
  const cx = 30, cy = 30, r = 26;

  return (
    <svg
      width={w}
      height={height}
      viewBox={`0 0 ${vW} ${vH}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      role="img"
      aria-label="BANKABLE"
    >
      <defs>
        {/* Silver/chrome ring gradient */}
        <linearGradient id="bl-ring" x1="10" y1="4" x2="50" y2="56" gradientUnits="userSpaceOnUse">
          <stop offset="0%"   stopColor="#E8EAEE" />
          <stop offset="35%"  stopColor="#B7BDC7" />
          <stop offset="65%"  stopColor="#D4D8E2" />
          <stop offset="100%" stopColor="#8A9099" />
        </linearGradient>

        {/* Gold bar gradient */}
        <linearGradient id="bl-gold" x1="0" y1="0" x2="0" y2="1" gradientUnits="objectBoundingBox">
          <stop offset="0%"   stopColor="#E8CE88" />
          <stop offset="50%"  stopColor="#C8A45D" />
          <stop offset="100%" stopColor="#A8843D" />
        </linearGradient>

        {/* Gold sweep arc gradient (fades to transparent at tail) */}
        <linearGradient id="bl-sweep" x1="4" y1="52" x2="56" y2="8" gradientUnits="userSpaceOnUse">
          <stop offset="0%"   stopColor="#C8A45D" stopOpacity="0.15" />
          <stop offset="40%"  stopColor="#D4B876" stopOpacity="0.9" />
          <stop offset="100%" stopColor="#E8CE88" />
        </linearGradient>

        {/* Wordmark chrome gradient */}
        <linearGradient id="bl-text" x1="0" y1="0" x2="0" y2="1" gradientUnits="objectBoundingBox">
          <stop offset="0%"   stopColor="#FFFFFF" />
          <stop offset="45%"  stopColor="#E8EAF0" />
          <stop offset="100%" stopColor="#B7BDC7" />
        </linearGradient>

        {/* Clip to circle interior for bars */}
        <clipPath id="bl-clip">
          <circle cx={cx} cy={cy} r={r - 1.5} />
        </clipPath>
      </defs>

      {/* ── Outer chrome ring ── */}
      <circle
        cx={cx} cy={cy} r={r}
        stroke="url(#bl-ring)"
        strokeWidth="3"
        fill="none"
      />

      {/* ── Bar chart columns (clipped inside ring) ── */}
      <g clipPath="url(#bl-clip)">
        {/* Short left bar */}
        <rect x="11" y="35" width="7" height="18" rx="1.5" fill="url(#bl-gold)" opacity="0.8" />
        {/* Medium centre bar */}
        <rect x="21" y="26" width="7" height="27" rx="1.5" fill="url(#bl-gold)" opacity="0.9" />
        {/* Tall right bar */}
        <rect x="31" y="17" width="7" height="36" rx="1.5" fill="url(#bl-gold)" />
      </g>

      {/* ── Diagonal gold sweep arc ──
           Sweeps from bottom-left of ring, curves upward to exit top-right.
           Uses a cubic bezier for the elegant curved sweep. */}
      <path
        d="M 6 50 C 12 38, 28 20, 55 7"
        stroke="url(#bl-sweep)"
        strokeWidth="3.5"
        strokeLinecap="round"
        fill="none"
      />

      {/* ── Arrow tip at the end of the sweep ── */}
      <path
        d="M 51 4 L 57 8 L 50 11"
        stroke="#D4B876"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
        opacity="0.9"
      />

      {/* ── "BANKABLE" wordmark ── */}
      <text
        x="72"
        y="39"
        fontFamily="'Poppins', 'Segoe UI', system-ui, sans-serif"
        fontSize="25"
        fontWeight="700"
        letterSpacing="2.5"
        fill="url(#bl-text)"
      >
        BANKABLE
      </text>
    </svg>
  );
}
