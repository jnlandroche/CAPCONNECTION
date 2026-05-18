import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { mockAssessment } from '../data/mockData';
import { ArrowRight, AlertTriangle, CheckCircle, TrendingUp, Shield, Users, Star, MessageSquare } from 'lucide-react';

const severityBg = {
  High:   'rgba(239,68,68,0.08)',
  Medium: 'rgba(245,158,11,0.08)',
  Low:    'rgba(183,189,199,0.06)',
};
const severityBorder = {
  High:   'rgba(239,68,68,0.2)',
  Medium: 'rgba(245,158,11,0.2)',
  Low:    'rgba(183,189,199,0.12)',
};
const severityText = { High: '#F87171', Medium: '#FBBF24', Low: '#8A9099' };
const fitColor = {
  Primary:     { bg: 'rgba(200,164,93,0.08)', border: 'rgba(200,164,93,0.25)', text: '#C8A45D' },
  Secondary:   { bg: 'rgba(183,189,199,0.06)', border: 'rgba(183,189,199,0.2)', text: '#B7BDC7' },
  Consider:    { bg: 'rgba(245,158,11,0.06)', border: 'rgba(245,158,11,0.2)', text: '#FBBF24' },
  Supplemental:{ bg: 'rgba(107,119,133,0.06)', border: 'rgba(107,119,133,0.15)', text: '#6B7785' },
};

function GradeRing({ grade, score }) {
  const [animated, setAnimated] = useState(false);
  useEffect(() => { setTimeout(() => setAnimated(true), 200); }, []);
  const r = 44;
  const circ = 2 * Math.PI * r;
  const offset = circ - (score / 100) * circ;
  return (
    <div className="relative w-36 h-36 flex-shrink-0">
      <svg className="w-36 h-36 -rotate-90" viewBox="0 0 100 100">
        <circle cx="50" cy="50" r={r} fill="none" stroke="rgba(183,189,199,0.08)" strokeWidth="6" />
        <circle cx="50" cy="50" r={r} fill="none" stroke="#C8A45D" strokeWidth="6" strokeLinecap="round"
          strokeDasharray={circ} strokeDashoffset={animated ? offset : circ}
          style={{ transition: 'stroke-dashoffset 1.4s cubic-bezier(0.4,0,0.2,1)' }} />
      </svg>
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <span className="text-4xl font-display font-bold leading-none" style={{ color: '#C8A45D' }}>{grade}</span>
        <span className="text-[10px] font-medium mt-1 text-center px-2 leading-tight" style={{ color: '#8A9099' }}>BankGrade™</span>
      </div>
    </div>
  );
}

function LikelihoodBar({ value }) {
  const w = { High: '82%', Moderate: '50%', Low: '25%' };
  const c = { High: '#C8A45D', Moderate: '#B7BDC7', Low: '#6B7785' };
  return (
    <div className="flex items-center gap-2 mt-1">
      <div className="flex-1 rounded-full h-0.5" style={{ background: 'rgba(183,189,199,0.1)' }}>
        <div className="h-0.5 rounded-full transition-all duration-700" style={{ width: w[value], background: c[value] }} />
      </div>
      <span className="text-[11px] font-medium flex-shrink-0" style={{ color: c[value] }}>{value}</span>
    </div>
  );
}

export default function AssessmentPage() {
  const a = mockAssessment;
  return (
    <div className="min-h-screen pt-24 pb-16 px-6" style={{ background: '#0B1F33' }}>
      <div className="max-w-5xl mx-auto">

        <div className="mb-8">
          <p className="text-[11px] font-semibold tracking-[0.2em] uppercase mb-2" style={{ color: '#C8A45D' }}>BankGrade™ Report</p>
          <h1 className="font-display text-4xl text-white font-semibold">Your BankGrade™ is Ready</h1>
          <p className="text-sm mt-1.5" style={{ color: '#8A9099' }}>
            Meridian Capital Group · Report ID BG-2024-001 · Generated {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
          </p>
        </div>

        {/* Grade banner */}
        <div className="glass-card rounded-xl p-7 mb-6 flex flex-col md:flex-row items-center gap-8" style={{ borderColor: 'rgba(200,164,93,0.15)' }}>
          <GradeRing grade={a.grade} score={a.bankReadinessScore} />
          <div className="flex-1 text-center md:text-left">
            <div className="flex items-center gap-3 justify-center md:justify-start mb-2">
              <span className="font-display text-2xl text-white font-semibold">{a.gradeLabel}</span>
              <span className="text-xs font-semibold px-2.5 py-1 rounded-full" style={{ background: 'rgba(200,164,93,0.1)', border: '1px solid rgba(200,164,93,0.25)', color: '#C8A45D' }}>Bankable</span>
            </div>
            <p className="text-sm leading-relaxed max-w-lg mb-5" style={{ color: '#8A9099' }}>
              This company demonstrates a strong capital profile suitable for institutional lender engagement. EBITDA quality, revenue stability, and leverage headroom align with middle market credit standards.
            </p>
            <div className="flex flex-wrap gap-3 justify-center md:justify-start">
              {[
                ['Bank Readiness Score', `${a.bankReadinessScore} / 100`],
                ['Indicative Financing Capacity', `${a.financingCapacity.min} – ${a.financingCapacity.max}`],
                ['Indicative Pricing', `${a.pricing.min} – ${a.pricing.max.replace('SOFR + ', '')}`],
              ].map(([k, v]) => (
                <div key={k} className="rounded-lg px-4 py-2.5" style={{ background: 'rgba(6,13,24,0.7)', border: '1px solid rgba(183,189,199,0.08)' }}>
                  <p className="text-[10px] font-semibold uppercase tracking-wide mb-0.5" style={{ color: '#6B7785' }}>{k}</p>
                  <p className="text-white font-bold text-lg font-mono">{v}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
          {/* Structures */}
          <div className="glass-card rounded-xl p-6">
            <h2 className="text-sm font-semibold text-white mb-5 flex items-center gap-2">
              <TrendingUp size={14} style={{ color: '#C8A45D' }} /> Likely Capital Structures
            </h2>
            <div className="space-y-4">
              {a.structures.map(s => (
                <div key={s.name} className="pb-4 border-b last:border-0 last:pb-0" style={{ borderColor: 'rgba(183,189,199,0.06)' }}>
                  <h3 className="text-sm text-white font-medium mb-0.5">{s.name}</h3>
                  <LikelihoodBar value={s.likelihood} />
                  <p className="text-xs mt-1.5" style={{ color: '#6B7785' }}>{s.notes}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Strengths + Risks */}
          <div className="glass-card rounded-xl p-6">
            <h2 className="text-sm font-semibold text-white mb-4 flex items-center gap-2">
              <Star size={14} style={{ color: '#C8A45D' }} /> Key Credit Strengths
            </h2>
            <div className="space-y-2.5 mb-5">
              {a.strengths.map((s, i) => (
                <div key={i} className="flex items-start gap-3 p-3 rounded-lg" style={{ background: 'rgba(200,164,93,0.05)', border: '1px solid rgba(200,164,93,0.12)' }}>
                  <CheckCircle size={13} className="flex-shrink-0 mt-0.5" style={{ color: '#C8A45D' }} />
                  <div>
                    <p className="text-sm text-white font-medium mb-0.5">{s.label}</p>
                    <p className="text-xs" style={{ color: '#6B7785' }}>{s.note}</p>
                  </div>
                </div>
              ))}
            </div>
            <h2 className="text-sm font-semibold text-white mb-3 flex items-center gap-2">
              <AlertTriangle size={14} style={{ color: '#C8A45D' }} /> Primary Credit Risks
            </h2>
            <div className="space-y-2.5">
              {a.risks.map((r, i) => (
                <div key={i} className="flex items-start gap-3 p-3 rounded-lg" style={{ background: severityBg[r.severity], border: `1px solid ${severityBorder[r.severity]}` }}>
                  <span className="text-[10px] font-semibold flex-shrink-0 mt-0.5" style={{ color: severityText[r.severity] }}>{r.severity}</span>
                  <div>
                    <p className="text-sm text-white font-medium mb-0.5">{r.label}</p>
                    <p className="text-xs" style={{ color: '#8A9099' }}>{r.note}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
          {/* Covenants */}
          <div className="glass-card rounded-xl p-6">
            <h2 className="text-sm font-semibold text-white mb-4 flex items-center gap-2">
              <Shield size={14} style={{ color: '#C8A45D' }} /> Indicative Covenant Framework
            </h2>
            <div className="space-y-2">
              {a.covenants.map((c, i) => (
                <div key={i} className="flex items-center gap-3 p-3 rounded-lg" style={{ background: 'rgba(6,13,24,0.5)', border: '1px solid rgba(183,189,199,0.06)' }}>
                  <div className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: '#C8A45D', opacity: 0.6 }} />
                  <span className="text-sm" style={{ color: '#B7BDC7' }}>{c}</span>
                </div>
              ))}
            </div>
            <div className="mt-4 p-3 rounded-lg" style={{ background: 'rgba(200,164,93,0.05)', border: '1px solid rgba(200,164,93,0.12)' }}>
              <p className="text-xs" style={{ color: '#8A9099' }}><span className="font-semibold" style={{ color: '#C8A45D' }}>Note: </span>{a.pricing.note}</p>
            </div>
          </div>

          {/* Lender Fit */}
          <div className="glass-card rounded-xl p-6">
            <h2 className="text-sm font-semibold text-white mb-4 flex items-center gap-2">
              <Users size={14} style={{ color: '#C8A45D' }} /> Lender Fit Profile
            </h2>
            <div className="space-y-3">
              {a.lenderFit.map((l, i) => (
                <div key={i} className="p-3 rounded-lg" style={{ background: 'rgba(6,13,24,0.5)', border: '1px solid rgba(183,189,199,0.06)' }}>
                  <div className="flex items-center justify-between mb-1">
                    <h3 className="text-sm text-white font-medium">{l.type}</h3>
                    <span className="text-[10px] font-semibold px-2 py-0.5 rounded" style={{ background: fitColor[l.fit].bg, border: `1px solid ${fitColor[l.fit].border}`, color: fitColor[l.fit].text }}>{l.fit}</span>
                  </div>
                  <p className="text-xs" style={{ color: '#6B7785' }}>{l.reason}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Next Steps */}
        <div className="glass-card rounded-xl p-6 mb-6">
          <h2 className="text-sm font-semibold text-white mb-4 flex items-center gap-2">
            <CheckCircle size={14} style={{ color: '#C8A45D' }} /> Recommended Next Steps
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
            {a.recommendations.map((rec, i) => (
              <div key={i} className="flex items-start gap-3 p-3 rounded-lg" style={{ background: 'rgba(6,13,24,0.5)', border: '1px solid rgba(183,189,199,0.06)' }}>
                <span className="w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-bold flex-shrink-0 mt-0.5" style={{ background: 'rgba(200,164,93,0.1)', border: '1px solid rgba(200,164,93,0.2)', color: '#C8A45D' }}>{i + 1}</span>
                <p className="text-xs leading-relaxed" style={{ color: '#B7BDC7' }}>{rec}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTAs */}
        <div className="glass-card rounded-xl p-5 flex flex-col sm:flex-row items-center justify-between gap-4" style={{ borderColor: 'rgba(200,164,93,0.12)' }}>
          <div>
            <p className="text-white font-semibold text-sm">Ready to explore financing options?</p>
            <p className="text-xs mt-0.5" style={{ color: '#6B7785' }}>Compare lender types and indicative terms across our network.</p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Link to="/upload" className="text-sm border font-medium px-5 py-2.5 rounded transition-all" style={{ borderColor: 'rgba(183,189,199,0.2)', color: '#B7BDC7' }}>Upload Docs</Link>
            <Link to="/lenders" className="text-sm font-medium px-5 py-2.5 rounded transition-all flex items-center gap-1.5" style={{ border: '1px solid rgba(200,164,93,0.3)', color: '#C8A45D' }}>
              Financing Options <ArrowRight size={13} />
            </Link>
            <Link to="/intake" className="text-sm font-semibold px-5 py-2.5 rounded transition-all flex items-center gap-1.5" style={{ background: '#C8A45D', color: '#0B1F33' }}>
              <MessageSquare size={13} /> Speak with an Advisor
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
