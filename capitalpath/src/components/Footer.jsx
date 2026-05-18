import React from 'react';
import { Link } from 'react-router-dom';
import { TrendingUp } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-navy-950 border-t border-navy-800/50 mt-auto">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-10">
          <div className="md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-7 h-7 bg-gradient-to-br from-gold-400 to-gold-500 rounded-sm flex items-center justify-center">
                <TrendingUp size={14} className="text-navy-950" strokeWidth={2.5} />
              </div>
              <span className="font-display text-white">Capital<span className="text-gold-400">Path</span></span>
            </div>
            <p className="text-slate-500 text-xs leading-relaxed">
              Institutional-grade financing advisory for middle market companies. Prototype only — not a licensed financial advisor.
            </p>
          </div>
          <div>
            <h4 className="text-xs font-semibold text-slate-500 uppercase tracking-wide mb-4">Platform</h4>
            <ul className="space-y-2.5">
              {[['Financing Request', '/intake'], ['Document Upload', '/upload'], ['Financial Assessment', '/assessment'], ['Lender Comparison', '/lenders']].map(([label, href]) => (
                <li key={label}>
                  <Link to={href} className="text-sm text-slate-400 hover:text-white transition-colors">{label}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-xs font-semibold text-slate-500 uppercase tracking-wide mb-4">Solutions</h4>
            <ul className="space-y-2.5">
              {['Acquisition Finance', 'Growth Capital', 'Recapitalization', 'Equipment Lines', 'Real Estate', 'Working Capital'].map(s => (
                <li key={s} className="text-sm text-slate-400">{s}</li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-xs font-semibold text-slate-500 uppercase tracking-wide mb-4">Advisory</h4>
            <ul className="space-y-2.5">
              {[['Advisor Dashboard', '/dashboard'], ['Lender Network', '/lenders']].map(([label, href]) => (
                <li key={label}>
                  <Link to={href} className="text-sm text-slate-400 hover:text-white transition-colors">{label}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="border-t border-navy-800/50 pt-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-slate-600 text-xs">© 2025 CapitalPath · Prototype · Not financial advice</p>
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
