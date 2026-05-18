import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-navy-950 border-t border-white/5 mt-auto">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-10">

          {/* Brand */}
          <div className="md:col-span-1">
            <img src="/bankable-logo.png" alt="BANKABLE" className="h-8 w-auto object-contain mb-4" style={{ filter: 'brightness(1.05)' }} />
            <p className="text-silver-600 text-xs leading-relaxed mb-1">See Your Business the Way Lenders Do.</p>
            <p className="text-silver-700 text-xs leading-relaxed mt-2">
              Institutional credit intelligence for middle market companies. Prototype platform — not a licensed financial advisor.
            </p>
          </div>

          {/* Platform */}
          <div>
            <h4 className="text-[10px] font-semibold text-silver-700 uppercase tracking-[0.15em] mb-4">Platform</h4>
            <ul className="space-y-2.5">
              {[['Get My BankGrade™', '/intake'], ['Upload Documents', '/upload'], ['BankGrade™ Report', '/assessment'], ['Financing Options', '/lenders']].map(([l, h]) => (
                <li key={l}><Link to={h} className="text-xs text-silver-600 hover:text-white transition-colors font-medium">{l}</Link></li>
              ))}
            </ul>
          </div>

          {/* Solutions */}
          <div>
            <h4 className="text-[10px] font-semibold text-silver-700 uppercase tracking-[0.15em] mb-4">Solutions</h4>
            <ul className="space-y-2.5">
              {['Acquisition Financing', 'Growth Capital', 'Recapitalization', 'Equipment Financing', 'Working Capital', 'Private Credit'].map(s => (
                <li key={s} className="text-xs text-silver-600 font-medium">{s}</li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-[10px] font-semibold text-silver-700 uppercase tracking-[0.15em] mb-4">Company</h4>
            <ul className="space-y-2.5">
              {[['Advisor Portal', '/dashboard'], ['Contact', '/intake']].map(([l, h]) => (
                <li key={l}><Link to={h} className="text-xs text-silver-600 hover:text-white transition-colors font-medium">{l}</Link></li>
              ))}
            </ul>
          </div>
        </div>

        {/* Disclaimer */}
        <div className="border-t border-white/5 pt-6 mb-5">
          <p className="text-silver-700 text-[11px] leading-relaxed max-w-4xl">
            <span className="text-silver-600 font-semibold">Disclaimer: </span>
            BankGrade™ reports are provided for informational purposes only and do not represent a commitment to lend, offer of credit, or formal credit approval. All assessments are illustrative and based on mock data. BANKABLE is a prototype platform and does not constitute financial, legal, or investment advice. Not affiliated with any bank or regulated lending institution.
          </p>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center gap-3">
          <p className="text-silver-700 text-[11px]">© 2025 BANKABLE · Prototype · Not financial advice</p>
          <div className="flex gap-6">
            {['Privacy', 'Terms', 'Disclosures', 'Contact'].map(l => (
              <span key={l} className="text-silver-700 text-[11px] hover:text-silver-500 cursor-pointer transition-colors">{l}</span>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
