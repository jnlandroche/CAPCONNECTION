import React from 'react';

export default function BankableLogo({ height = 40, className = '' }) {
  const scale = height / 52;
  const markSize = 52 * scale;
  const totalWidth = (52 + 8 + 150) * scale;

  return (
    <svg
      width={totalWidth}
      height={height}
      viewBox={`0 0 210 52`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="BANKABLE"
    >
      <defs>
        <linearGradient id="goldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#D4B876" />
          <stop offset="50%" stopColor="#C8A45D" />
          <stop offset="100%" stopColor="#A8843D" />
        </linearGradient>
        <linearGradient id="silverGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#D4D8E2" />
          <stop offset="50%" stopColor="#B7BDC7" />
          <stop offset="100%" stopColor="#8A9099" />
        </linearGradient>
        <linearGradient id="sweepGrad" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#C8A45D" />
          <stop offset="100%" stopColor="#D4B876" stopOpacity="0.4" />
        </linearGradient>
        <linearGradient id="textGrad" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#FFFFFF" />
          <stop offset="40%" stopColor="#E8EAF0" />
          <stop offset="100%" stopColor="#B7BDC7" />
        </linearGradient>
      </defs>

      {/* ── Icon mark (52×52 viewBox space) ── */}

      {/* Outer silver ring */}
      <circle
        cx="26"
        cy="26"
        r="23"
        stroke="url(#silverGrad)"
        strokeWidth="2.5"
        fill="none"
        strokeOpacity="0.85"
      />

      {/* Bar chart — three bars, left to right increasing height */}
      {/* Left bar (short) */}
      <rect x="10" y="28" width="6" height="10" rx="1.2" fill="url(#goldGrad)" opacity="0.75" />
      {/* Center bar (medium) */}
      <rect x="19" y="21" width="6" height="17" rx="1.2" fill="url(#goldGrad)" opacity="0.9" />
      {/* Right bar (tall) */}
      <rect x="28" y="14" width="6" height="24" rx="1.2" fill="url(#goldGrad)" />

      {/* Gold sweep arc — top-right quadrant, like a momentum arrow */}
      <path
        d="M 26 3 A 23 23 0 0 1 47.9 33"
        stroke="url(#sweepGrad)"
        strokeWidth="3"
        strokeLinecap="round"
        fill="none"
      />
      {/* Arrowhead at end of sweep */}
      <path
        d="M 45.5 28 L 48.5 33.5 L 43.5 33"
        stroke="#C8A45D"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />

      {/* ── Wordmark "BANKABLE" ── */}
      <text
        x="60"
        y="33"
        fontFamily="'Poppins', 'Segoe UI', system-ui, sans-serif"
        fontSize="22"
        fontWeight="600"
        letterSpacing="3"
        fill="url(#textGrad)"
      >
        BANKABLE
      </text>
    </svg>
  );
}
