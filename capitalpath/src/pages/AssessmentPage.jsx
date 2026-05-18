import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { mockAssessment } from '../data/mockData';
import { ArrowRight, AlertTriangle, CheckCircle, TrendingUp, Shield, Users, Star, MessageSquare } from 'lucide-react';

const severityBg = {
  High: 'bg-red-500/10 border-red-500/25',
  Medium: 'bg-amber-500/10 border-amber-500/25',
  Low: 'bg-blue-500/10 border-blue-500/25'
};
const severityText = {
  High: 'text-red-400',
  Medium: 'text-amber-400',
  Low: 'text-blue-400'
};
const fitColor = {
  Primary: 'text-green-400 bg-green-500/10 border-green-500/25',
  Secondary: 'text-blue-400 bg-blue-500/10 border-blue-500/25',
  Consider: 'text-amber-400 bg-amber-500/10 border-amber-500/25',
  Supplemental: 'text-slate-400 bg-slate-500/10 border-slate-500/25'
};

function GradeDisplay({ grade, gradeLabel, bankReadinessScore }) {
  const [animated, setAnimated] = useState(false);
  useEffect(() => { setTimeout(() => setAnimated(true), 200); }, []);
  const circumference = 2 * Math.PI * 44;
  const offset = circumference - (bankReadinessScore / 100) * circumference;

  return (
    <div className="relative w-36 h-36 flex-shrink-0">
      <svg className="w-36 h-36 -rotate-90" viewBox="0 0 100 100">
        <circle cx="50" cy="50" r="44" fill="none" stroke="rgba(45,91,255,0.1)" strokeWidth="6" />
        <circle
          cx="50" cy="50" r="44" fill="none"
          stroke="#d4af37" strokeWidth="6" strokeLinecap="round"
          strokeDasharray={circumference}
          strokeDashoffset={animated ? offset : circumference}
          style={{ transition: 'stroke-dashoffset 1.4s cubic-bezier(0.4,0,0.2,1)' }}
        />
      </svg>
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <span className="text-4xl font-display font-bold text-gold-400 leading-none">{grade}</span>
        <span className="text-[10px] font-medium text-slate-400 mt-1 text-center px-2 leading-tight">{gradeLabel}</span>
      </div>
    </div>
  );
}

function LikelihoodBar({ value }) {
  const widths = { High: '82%', Moderate: '50%', Low: '25%' };
  const colors = { High: 'bg-green-500', Moderate: 'bg-blue-500', Low: 'bg-slate-500' };
  const textColors = { High: 'text-green-400', Moderate: 'text-blue-400', Low: 'text-slate-500' };
  return (
    <div className="flex items-center gap-2 mt-1">
      <div className="flex-1 bg-navy-900 rounded-full h-1">
        <div className={`h-1 rounded-full transition-all duration-700 ${colors[value] || 'bg-slate-500'}`} style={{ width: widths[value] || '30%' }} />
      </div>
      <span className={`text-[11px] font-medium flex-shrink-0 ${textColors[value] || 'text-slate-500'}`}>{value}</span>
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
          <p className="text-xs font-semibold text-blue-400 tracking-wide uppercase mb-2">Your BankGrade Report</p>
          <h1 className="font-display text-4xl text-white font-semibold">Your BankGrade™ is Ready</h1>
          <p className="text-slate-400 text-sm mt-1.5">
            Meridian Distribution Group · Report ID BG-2024-001 · Generated {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
          </p>
        </div>

        {/* Grade banner */}
        <div className="glass-card rounded-xl p-7 mb-6 flex flex-col md:flex-row items-center gap-8 border-gold-400/15">
          <GradeDisplay grade={a.grade} gradeLabel={a.gradeLabel} bankReadinessScore={a.bankReadinessScore} />
          <div className="flex-1 text-center md:text-left">
            <div className="flex items-center gap-3 justify-center md:justify-start mb-2">
              <span className="font-display text-2xl text-white font-semibold">{a.gradeLabel}</span>
              <span className="text-xs font-semibold bg-green-500/15 border border-green-500/30 text-green-400 px-2.5 py-1 rounded-full">Bankable</span>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed max-w-lg mb-5">
              This company demonstrates a strong capital profile suitable for institutional lender engagement. EBITDA quality, revenue stability, and leverage headroom align with middle market credit standards.
            </p>
            <div className="flex flex-wrap gap-3 justify-center md:justify-start">
              <div className="bg-navy-900/60 rounded-lg px-4 py-2.5 border border-white/6">
                <p className="text-[10px] font-semibold text-slate-500 uppercase tracking-wide mb-0.5">Bank Readiness Score</p>
                <p className="text-white font-bold text-lg">{a.bankReadinessScore} <span className="text-slate-500 text-sm font-normal">/ 100</span></p>
              </div>
              <div className="bg-navy-900/60 rounded-lg px-4 py-2.5 border border-white/6">
                <p className="text-[10px] font-semibold text-slate-500 uppercase tracking-wide mb-0.5">Indicative Financing Capacity</p>
                <p className="text-white font-bold text-lg">{a.financingCapacity.min} <span className="text-slate-500 font-normal">–</span> {a.financingCapacity.max}</p>
              </div>
              <div className="bg-navy-900/60 rounded-lg px-4 py-2.5 border border-white/6">
                <p className="text-[10px] font-semibold text-slate-500 uppercase tracking-wide mb-0.5">Indicative Pricing</p>
                <p className="text-white font-bold text-lg font-mono">{a.pricing.min} – {a.pricing.max.replace('SOFR + ', '')}</p>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
          {/* Likely Structures */}
          <div className="glass-card rounded-xl p-6">
            <h2 className="text-sm font-semibold text-slate-200 mb-5 flex items-center gap-2">
              <TrendingUp size={15} className="text-blue-400" /> Likely Capital Structures
            </h2>
            <div className="space-y-4">
              {a.structures.map((s) => (
                <div key={s.name} className="pb-4 border-b border-white/5 last:border-0 last:pb-0">
                  <h3 className="text-sm text-white font-medium mb-0.5">{s.name}</h3>
                  <LikelihoodBar value={s.likelihood} />
                  <p className="text-xs text-slate-500 mt-1.5">{s.notes}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Key Credit Strengths */}
          <div className="glass-card rounded-xl p-6">
            <h2 className="text-sm font-semibold text-slate-200 mb-5 flex items-center gap-2">
              <Star size={15} className="text-blue-400" /> Key Credit Strengths
            </h2>
            <div className="space-y-3 mb-5">
              {a.strengths.map((s, i) => (
                <div key={i} className="flex items-start gap-3 p-3 bg-green-500/5 rounded-lg border border-green-500/15">
                  <CheckCircle size={14} className="text-green-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-sm text-white font-medium mb-0.5">{s.label}</p>
                    <p className="text-xs text-slate-500">{s.note}</p>
                  </div>
                </div>
              ))}
            </div>

            <h2 className="text-sm font-semibold text-slate-200 mb-3 flex items-center gap-2">
              <AlertTriangle size={15} className="text-blue-400" /> Primary Credit Risks
            </h2>
            <div className="space-y-2.5">
              {a.risks.map((r, i) => (
                <div key={i} className={`flex items-start gap-3 p-3 rounded-lg border ${severityBg[r.severity]}`}>
                  <span className={`text-[10px] font-semibold flex-shrink-0 mt-0.5 ${severityText[r.severity]}`}>
                    {r.severity}
                  </span>
                  <div>
                    <p className="text-sm text-white font-medium mb-0.5">{r.label}</p>
                    <p className="text-xs text-slate-400">{r.note}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
          {/* Covenant Framework */}
          <div className="glass-card rounded-xl p-6">
            <h2 className="text-sm font-semibold text-slate-200 mb-5 flex items-center gap-2">
              <Shield size={15} className="text-blue-400" /> Indicative Covenant Framework
            </h2>
            <div className="space-y-2.5">
              {a.covenants.map((c, i) => (
                <div key={i} className="flex items-center gap-3 p-3 bg-navy-900/60 rounded-lg border border-white/5">
                  <div className="w-1.5 h-1.5 rounded-full bg-blue-400/60 flex-shrink-0" />
                  <span className="text-sm text-slate-300">{c}</span>
                </div>
              ))}
            </div>
            <div className="mt-4 p-3 bg-blue-500/8 border border-blue-500/20 rounded-lg">
              <p className="text-xs text-slate-400">
                <span className="text-blue-400 font-semibold">Note: </span>
                {a.pricing.note}
              </p>
            </div>
          </div>

          {/* Lender Fit */}
          <div className="glass-card rounded-xl p-6">
            <h2 className="text-sm font-semibold text-slate-200 mb-5 flex items-center gap-2">
              <Users size={15} className="text-blue-400" /> Lender Fit Profile
            </h2>
            <div className="space-y-3">
              {a.lenderFit.map((l, i) => (
                <div key={i} className="p-3 bg-navy-900/60 rounded-lg border border-white/5">
                  <div className="flex items-center justify-between mb-1">
                    <h3 className="text-sm text-white font-medium">{l.type}</h3>
                    <span className={`text-[10px] font-semibold px-2 py-0.5 rounded border ${fitColor[l.fit]}`}>{l.fit}</span>
                  </div>
                  <p className="text-xs text-slate-500">{l.reason}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Recommended Next Steps */}
        <div className="glass-card rounded-xl p-6 mb-6">
          <h2 className="text-sm font-semibold text-slate-200 mb-5 flex items-center gap-2">
            <CheckCircle size={15} className="text-blue-400" /> Recommended Next Steps
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
            {a.recommendations.map((rec, i) => (
              <div key={i} className="flex items-start gap-3 p-3 bg-navy-900/50 rounded-lg border border-white/5">
                <span className="w-5 h-5 rounded-full bg-blue-500/15 border border-blue-500/30 flex items-center justify-center text-[10px] font-bold text-blue-400 flex-shrink-0 mt-0.5">
                  {i + 1}
                </span>
                <p className="text-xs text-slate-300 leading-relaxed">{rec}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-3 items-center justify-between glass-card rounded-xl p-5 border-blue-500/15">
          <div>
            <p className="text-white font-semibold text-sm">Ready to explore financing options?</p>
            <p className="text-slate-400 text-xs mt-0.5">Compare lender types and indicative terms from our network.</p>
          </div>
          <div className="flex flex-wrap gap-3 justify-end">
            <Link to="/upload" className="text-sm border border-white/12 text-slate-300 hover:text-white px-5 py-2.5 rounded-md transition-all font-medium">
              Upload Docs
            </Link>
            <Link to="/lenders" className="text-sm border border-blue-500/40 text-blue-400 hover:text-blue-300 hover:border-blue-400/60 px-5 py-2.5 rounded-md transition-all font-medium flex items-center gap-1.5">
              Explore Financing Options <ArrowRight size={14} />
            </Link>
            <Link to="/intake" className="text-sm bg-blue-500 hover:bg-blue-400 text-white font-semibold px-5 py-2.5 rounded-md transition-all flex items-center gap-1.5">
              <MessageSquare size={14} /> Speak with a BankGrade Advisor
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
