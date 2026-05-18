import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { mockAssessment } from '../data/mockData';
import { ArrowRight, AlertTriangle, CheckCircle, Info, TrendingUp, Shield, Users, ChevronRight } from 'lucide-react';

const severityColor = { High: 'text-red-400', Medium: 'text-amber-400', Low: 'text-blue-400' };
const severityBg = { High: 'bg-red-500/10 border-red-500/25', Medium: 'bg-amber-500/10 border-amber-500/25', Low: 'bg-blue-500/10 border-blue-500/25' };
const fitColor = { Primary: 'text-green-400 bg-green-500/10 border-green-500/25', Secondary: 'text-blue-400 bg-blue-500/10 border-blue-500/25', Consider: 'text-amber-400 bg-amber-500/10 border-amber-500/25', Supplemental: 'text-slate-400 bg-slate-500/10 border-slate-500/25' };

function ScoreRing({ score }) {
  const [animated, setAnimated] = useState(false);
  useEffect(() => { setTimeout(() => setAnimated(true), 200); }, []);

  const circumference = 2 * Math.PI * 40;
  const offset = circumference - (score / 100) * circumference;
  const color = score >= 80 ? '#22c55e' : score >= 65 ? '#c9a84c' : '#f97316';

  return (
    <div className="relative w-32 h-32">
      <svg className="w-32 h-32 -rotate-90" viewBox="0 0 100 100">
        <circle cx="50" cy="50" r="40" fill="none" stroke="#1e3a6e" strokeWidth="8" />
        <circle
          cx="50" cy="50" r="40" fill="none"
          stroke={color} strokeWidth="8" strokeLinecap="round"
          strokeDasharray={circumference}
          strokeDashoffset={animated ? offset : circumference}
          style={{ transition: 'stroke-dashoffset 1.2s cubic-bezier(0.4,0,0.2,1)' }}
        />
      </svg>
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <span className="text-3xl font-display font-600 text-white">{score}</span>
        <span className="text-[10px] font-mono text-slate-400 tracking-wider uppercase mt-0.5">Score</span>
      </div>
    </div>
  );
}

function LikelihoodBar({ value }) {
  const widths = { High: '80%', Moderate: '50%', Low: '25%' };
  const colors = { High: 'bg-green-500', Moderate: 'bg-gold-400', Low: 'bg-slate-500' };
  return (
    <div className="flex items-center gap-2 mt-1">
      <div className="flex-1 bg-navy-900 rounded-full h-1">
        <div className={`h-1 rounded-full transition-all duration-700 ${colors[value] || 'bg-slate-500'}`} style={{ width: widths[value] || '30%' }} />
      </div>
      <span className={`text-[11px] font-mono flex-shrink-0 ${value === 'High' ? 'text-green-400' : value === 'Moderate' ? 'text-gold-400' : 'text-slate-500'}`}>{value}</span>
    </div>
  );
}

export default function AssessmentPage() {
  const a = mockAssessment;

  return (
    <div className="min-h-screen pt-24 pb-16 px-6">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <p className="text-xs font-mono text-gold-400 tracking-[0.2em] uppercase mb-2">AI FINANCING ASSESSMENT</p>
          <h1 className="font-display text-4xl text-white font-500">Capital Fit Analysis</h1>
          <p className="text-slate-400 text-sm mt-1.5">Meridian Distribution Group · Intake ID CP-2024-001 · Generated {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</p>
        </div>

        {/* Score banner */}
        <div className="glass-card rounded-xl p-7 mb-6 flex flex-col md:flex-row items-center gap-8 border-gold-400/15">
          <ScoreRing score={a.score} />
          <div className="flex-1 text-center md:text-left">
            <div className="flex items-center gap-3 justify-center md:justify-start mb-2">
              <span className="font-display text-3xl text-white font-500">{a.scoreLabel}</span>
              <span className="text-xs font-mono bg-green-500/15 border border-green-500/30 text-green-400 px-2.5 py-1 rounded-full tracking-wider">BANKABLE</span>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed max-w-lg">
              This company demonstrates a strong capital profile suitable for institutional lender engagement. EBITDA quality, revenue stability, and leverage headroom align with middle market credit standards. A well-prepared financing package is expected to attract competitive term sheets.
            </p>
          </div>
          <div className="flex md:flex-col gap-6 md:gap-3 text-center">
            <div>
              <p className="text-xs font-mono text-slate-500 uppercase tracking-wider mb-1">Leverage Range</p>
              <p className="text-white font-semibold font-mono">{a.leverage.min} – {a.leverage.max}</p>
            </div>
            <div>
              <p className="text-xs font-mono text-slate-500 uppercase tracking-wider mb-1">Pricing Range</p>
              <p className="text-white font-semibold font-mono text-sm">{a.pricing.min}</p>
              <p className="text-slate-500 text-xs font-mono">to {a.pricing.max}</p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
          {/* Likely Structures */}
          <div className="glass-card rounded-xl p-6">
            <h2 className="text-xs font-mono text-slate-400 tracking-[0.15em] uppercase mb-5 flex items-center gap-2">
              <TrendingUp size={14} className="text-gold-400" /> Likely Capital Structures
            </h2>
            <div className="space-y-4">
              {a.structures.map((s) => (
                <div key={s.name} className="pb-4 border-b border-navy-800/50 last:border-0 last:pb-0">
                  <div className="flex justify-between items-start mb-0.5">
                    <h3 className="text-sm text-white font-medium">{s.name}</h3>
                  </div>
                  <LikelihoodBar value={s.likelihood} />
                  <p className="text-xs text-slate-500 mt-1.5">{s.notes}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Covenant Expectations */}
          <div className="glass-card rounded-xl p-6">
            <h2 className="text-xs font-mono text-slate-400 tracking-[0.15em] uppercase mb-5 flex items-center gap-2">
              <Shield size={14} className="text-gold-400" /> Indicative Covenant Framework
            </h2>
            <div className="space-y-3">
              {a.covenants.map((c, i) => (
                <div key={i} className="flex items-center gap-3 p-3 bg-navy-900/60 rounded-lg border border-navy-800/50">
                  <div className="w-1.5 h-1.5 rounded-full bg-gold-400/60 flex-shrink-0" />
                  <span className="text-sm text-slate-300 font-mono">{c}</span>
                </div>
              ))}
            </div>
            <div className="mt-4 p-3 bg-blue-500/8 border border-blue-500/20 rounded-lg">
              <p className="text-xs text-slate-400">
                <span className="text-blue-400 font-semibold">Note: </span>
                Covenants subject to lender type. Direct lenders typically offer cov-lite or incurrence-only packages; banks impose maintenance covenants quarterly.
              </p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
          {/* Key Risks */}
          <div className="glass-card rounded-xl p-6">
            <h2 className="text-xs font-mono text-slate-400 tracking-[0.15em] uppercase mb-5 flex items-center gap-2">
              <AlertTriangle size={14} className="text-gold-400" /> Key Credit Risks
            </h2>
            <div className="space-y-3">
              {a.risks.map((r, i) => (
                <div key={i} className={`flex items-start gap-3 p-3 rounded-lg border ${severityBg[r.severity]}`}>
                  <span className={`text-[10px] font-mono font-600 px-1.5 py-0.5 rounded flex-shrink-0 mt-0.5 ${severityColor[r.severity]} bg-current/10 border border-current/30`}>
                    {r.severity.toUpperCase()}
                  </span>
                  <div>
                    <p className="text-sm text-white font-medium mb-0.5">{r.label}</p>
                    <p className="text-xs text-slate-400">{r.note}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Lender Fit */}
          <div className="glass-card rounded-xl p-6">
            <h2 className="text-xs font-mono text-slate-400 tracking-[0.15em] uppercase mb-5 flex items-center gap-2">
              <Users size={14} className="text-gold-400" /> Lender Fit Profile
            </h2>
            <div className="space-y-3">
              {a.lenderFit.map((l, i) => (
                <div key={i} className="p-3 bg-navy-900/60 rounded-lg border border-navy-800/50">
                  <div className="flex items-center justify-between mb-1">
                    <h3 className="text-sm text-white font-medium">{l.type}</h3>
                    <span className={`text-[10px] font-mono px-2 py-0.5 rounded border ${fitColor[l.fit]}`}>{l.fit}</span>
                  </div>
                  <p className="text-xs text-slate-500">{l.reason}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Recommendations */}
        <div className="glass-card rounded-xl p-6 mb-6">
          <h2 className="text-xs font-mono text-slate-400 tracking-[0.15em] uppercase mb-5 flex items-center gap-2">
            <CheckCircle size={14} className="text-gold-400" /> Preparation Recommendations
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
            {a.recommendations.map((rec, i) => (
              <div key={i} className="flex items-start gap-3 p-3 bg-navy-900/50 rounded-lg border border-navy-800/40">
                <span className="w-5 h-5 rounded-full bg-gold-400/15 border border-gold-400/30 flex items-center justify-center text-[10px] font-mono text-gold-400 font-600 flex-shrink-0 mt-0.5">
                  {i + 1}
                </span>
                <p className="text-xs text-slate-300 leading-relaxed">{rec}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="flex flex-col sm:flex-row gap-3 items-center justify-between glass-card rounded-xl p-5 border-gold-400/15">
          <div>
            <p className="text-white font-semibold text-sm">Ready to engage lenders?</p>
            <p className="text-slate-400 text-xs mt-0.5">Review comparative term sheets from our lender network.</p>
          </div>
          <div className="flex gap-3">
            <Link to="/upload" className="text-sm border border-navy-700 text-slate-300 hover:text-white px-5 py-2.5 rounded transition-all">
              Upload Docs
            </Link>
            <Link to="/lenders" className="text-sm bg-gold-400 hover:bg-gold-300 text-navy-950 font-semibold px-5 py-2.5 rounded transition-all flex items-center gap-1.5">
              View Lender Comparison <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
