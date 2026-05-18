import React from 'react';
import { Link } from 'react-router-dom';
import { BankGradeIcon } from './BankGradeLogo';

export default function Footer() {
  return (
    <footer className="bg-navy-950 border-t border-white/6 mt-auto">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-10">
          <div className="md:col-span-1">
            <div className="flex items-center gap-2.5 mb-4">
              <BankGradeIcon size={32} />
              <span className="font-display font-semibold text-white">Bank<span className="text-blue-400">Grade</span></span>
            </div>
            <p className="text-slate-500 text-xs leading-relaxed mb-1">Know Your BankGrade. Finance with Confidence.</p>
            <p className="text-slate-600 text-xs leading-relaxed">
              Middle market financing intelligence and corporate lending guidance. Prototype only — not a licensed financial advisor.
            </p>
          </div>
          <div>
            <h4 className="text-xs font-semibold text-slate-500 uppercase tracking-wide mb-4">Platform</h4>
            <ul className="space-y-2.5">
              {[
                ['Get Your BankGrade', '/intake'],
                ['Upload Documents', '/upload'],
                ['BankGrade Report', '/assessment'],
                ['Financing Options', '/lenders'],
              ].map(([label, href]) => (
                <li key={label}>
                  <Link to={href} className="text-sm text-slate-400 hover:text-white transition-colors font-medium">{label}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-xs font-semibold text-slate-500 uppercase tracking-wide mb-4">Financing Types</h4>
            <ul className="space-y-2.5">
              {['Acquisition Financing', 'Growth Capital', 'Recapitalization', 'Equipment Lines', 'Working Capital', 'Refinancing'].map(s => (
                <li key={s} className="text-sm text-slate-400 font-medium">{s}</li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-xs font-semibold text-slate-500 uppercase tracking-wide mb-4">Advisory</h4>
            <ul className="space-y-2.5">
              {[
                ['BankGrade Advisor Dashboard', '/dashboard'],
                ['Financing Options', '/lenders'],
              ].map(([label, href]) => (
                <li key={label}>
                  <Link to={href} className="text-sm text-slate-400 hover:text-white transition-colors font-medium">{label}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Disclaimer */}
        <div className="border-t border-white/6 pt-6 mb-4">
          <p className="text-slate-600 text-xs leading-relaxed max-w-4xl">
            <span className="text-slate-500 font-semibold">Disclaimer: </span>
            BankGrade reports are provided for informational purposes only and do not represent a commitment to lend, offer of credit, or formal credit approval. All data and assessments are illustrative and based on mock information. BankGrade is a prototype platform and does not constitute financial, legal, or investment advice.
          </p>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
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
