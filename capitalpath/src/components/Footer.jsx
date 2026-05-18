import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-navy-950 border-t border-white/6 mt-auto">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-10">
          <div className="md:col-span-1">
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-7 h-7 bg-gradient-to-br from-blue-500 to-blue-600 rounded-md flex items-center justify-center">
                <span className="text-white font-bold text-xs">BG</span>
              </div>
              <span className="font-display font-semibold text-white">Bank<span className="text-blue-400">Grade</span></span>
            </div>
            <p className="text-slate-500 text-xs leading-relaxed mb-2">
              Know Your BankGrade. Finance with Confidence.
            </p>
            <p className="text-slate-600 text-xs leading-relaxed">
              Institutional-grade financing intelligence for middle market companies. Prototype only — not a licensed financial advisor.
            </p>
          </div>
          <div>
            <h4 className="text-xs font-semibold text-slate-500 uppercase tracking-wide mb-4">Platform</h4>
            <ul className="space-y-2.5">
              {[['Financing Request', '/intake'], ['Document Upload', '/upload'], ['Financial Assessment', '/assessment'], ['Lender Matches', '/lenders']].map(([label, href]) => (
                <li key={label}>
                  <Link to={href} className="text-sm text-slate-400 hover:text-white transition-colors font-medium">{label}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-xs font-semibold text-slate-500 uppercase tracking-wide mb-4">Solutions</h4>
            <ul className="space-y-2.5">
              {['Acquisition Finance', 'Growth Capital', 'Recapitalization', 'Equipment Lines', 'Real Estate', 'Working Capital'].map(s => (
                <li key={s} className="text-sm text-slate-400 font-medium">{s}</li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-xs font-semibold text-slate-500 uppercase tracking-wide mb-4">Advisory</h4>
            <ul className="space-y-2.5">
              {[['Advisor Dashboard', '/dashboard'], ['Lender Network', '/lenders']].map(([label, href]) => (
                <li key={label}>
                  <Link to={href} className="text-sm text-slate-400 hover:text-white transition-colors font-medium">{label}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="border-t border-white/6 pt-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-slate-600 text-xs">© 2025 BankGrade · Prototype · Not financial advice</p>
          <div className="flex gap-6">
            {['Privacy', 'Terms', 'Disclosures'].map(l => (
              <span key={l} className="text-slate-600 text-xs hover:text-slate-400 cursor-pointer transition-colors">{l}</span>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
