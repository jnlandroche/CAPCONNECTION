import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Shield, BarChart2, Users, Clock, ChevronRight, Building2, Landmark, Briefcase, TrendingUp, RotateCcw, Wrench, Home } from 'lucide-react';
import Ticker from '../components/Ticker';

const solutions = [
  { icon: Briefcase, label: 'Acquisition Financing', desc: 'Debt structuring for sponsored and non-sponsored M&A transactions in the $10M–$150M range.' },
  { icon: RotateCcw, label: 'Refinancing', desc: 'Replace existing debt at improved terms, reduced pricing, or extended maturities.' },
  { icon: TrendingUp, label: 'Growth Capital', desc: 'Leverage your balance sheet to fund organic expansion without equity dilution.' },
  { icon: Wrench, label: 'Equipment Lines', desc: 'Asset-backed facilities for capital equipment, fleet, and manufacturing capacity.' },
  { icon: BarChart2, label: 'Recapitalization', desc: 'Balance sheet optimization — restructure ownership and leverage simultaneously.' },
  { icon: Home, label: 'Real Estate Financing', desc: 'CRE bridge, construction, and permanent debt for owner-operators and investors.' },
  { icon: Landmark, label: 'Working Capital', desc: 'ABL facilities, revolving credit, and borrowing base structures for liquidity.' },
  { icon: Building2, label: 'Sponsor Finance', desc: 'Platform and add-on acquisitions, dividend recaps, and LP liquidity solutions.' },
];

const stats = [
  { value: '$2.4B+', label: 'Financing Placed' },
  { value: '180+', label: 'Lender Relationships' },
  { value: '94%', label: 'Close Rate' },
  { value: '38 days', label: 'Avg. Time to Term Sheet' },
];

const steps = [
  { num: '01', title: 'Submit Intake', desc: 'Complete a structured financing request covering your company profile, financials, and capital objectives.' },
  { num: '02', title: 'AI Assessment', desc: 'Receive an institutional-grade Capital Fit Score with structure analysis, pricing guidance, and lender fit.' },
  { num: '03', title: 'Upload Documents', desc: 'Securely share financials, tax returns, projections, and deal documents in a bank-ready data room.' },
  { num: '04', title: 'Lender Outreach', desc: 'We engage our network of 180+ banks, credit funds, and direct lenders on your behalf.' },
  { num: '05', title: 'Compare Terms', desc: 'Review structured lender responses side-by-side and select the optimal capital structure.' },
];

export default function HomePage() {
  return (
    <div className="min-h-screen bg-navy-950 pt-16">
      <Ticker />

      {/* Hero */}
      <section className="relative flex items-center overflow-hidden">
        {/* Background grid */}
        <div className="absolute inset-0 pointer-events-none">
          <div
            className="absolute inset-0 opacity-[0.04]"
            style={{
              backgroundImage: `linear-gradient(rgba(201,168,76,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(201,168,76,0.5) 1px, transparent 1px)`,
              backgroundSize: '60px 60px',
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-navy-950" />
          <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-navy-700/15 rounded-full blur-[120px]" />
          <div className="absolute top-1/3 right-0 w-[400px] h-[400px] bg-gold-400/5 rounded-full blur-[100px]" />
        </div>

        <div className="relative max-w-7xl mx-auto px-6 py-16">
          <div className="max-w-4xl">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-gold-400/10 border border-gold-400/25 rounded-full px-4 py-1.5 mb-8 animate-fade-in">
              <span className="w-1.5 h-1.5 rounded-full bg-gold-400 animate-pulse" />
              <span className="text-gold-300 text-xs font-mono tracking-wider">MIDDLE MARKET ADVISORY PLATFORM</span>
            </div>

            <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-500 text-white leading-[1.1] mb-6 animate-fade-in-up">
              Corporate financing,{' '}
              <span className="gold-shimmer font-600">structured before</span>{' '}
              <br className="hidden md:block" />
              you ever walk into a bank.
            </h1>

            <p className="text-slate-400 text-lg md:text-xl leading-relaxed max-w-2xl mb-10 animate-fade-in-up delay-100">
              CapitalPath prepares middle market companies for institutional debt markets — with AI-powered assessments, structured lender outreach, and term sheet comparison. Close faster. Borrow smarter.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 animate-fade-in-up delay-200">
              <Link
                to="/intake"
                className="inline-flex items-center justify-center gap-2 bg-gold-400 hover:bg-gold-300 text-navy-950 font-semibold text-sm px-7 py-3.5 rounded transition-all duration-200 shadow-lg shadow-gold-400/20"
              >
                Start Financing Request
                <ArrowRight size={16} />
              </Link>
              <Link
                to="/assessment"
                className="inline-flex items-center justify-center gap-2 border border-navy-700 hover:border-navy-600 text-slate-300 hover:text-white text-sm px-7 py-3.5 rounded transition-all duration-200"
              >
                View Sample Assessment
              </Link>
            </div>

            {/* Stat row */}
            <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-6 animate-fade-in-up delay-300">
              {stats.map((s) => (
                <div key={s.label}>
                  <div className="text-2xl font-display font-600 text-white mb-1">{s.value}</div>
                  <div className="text-xs font-mono text-slate-500 tracking-wider uppercase">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Solutions grid */}
      <section id="solutions" className="py-14 border-t border-navy-800/40">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-8">
            <p className="text-xs font-mono text-gold-400 tracking-[0.2em] uppercase mb-3">FINANCING SOLUTIONS</p>
            <h2 className="font-display text-4xl text-white font-500">
              Capital structures for every<br />stage of growth
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {solutions.map((sol, i) => (
              <div
                key={sol.label}
                className="glass-card rounded-lg p-5 hover:border-gold-400/30 transition-all duration-300 group cursor-default"
                style={{ animationDelay: `${i * 0.06}s` }}
              >
                <div className="w-9 h-9 bg-navy-800 rounded border border-navy-700 flex items-center justify-center mb-4 group-hover:border-gold-400/40 transition-colors">
                  <sol.icon size={16} className="text-gold-400" />
                </div>
                <h3 className="text-white text-sm font-semibold mb-2">{sol.label}</h3>
                <p className="text-slate-500 text-xs leading-relaxed">{sol.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="py-14 bg-navy-900/30 border-y border-navy-800/30">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-8">
            <p className="text-xs font-mono text-gold-400 tracking-[0.2em] uppercase mb-3">HOW IT WORKS</p>
            <h2 className="font-display text-4xl text-white font-500">Bank-ready in five steps</h2>
          </div>
          <div className="relative">
            {/* Connector line */}
            <div className="hidden lg:block absolute top-8 left-[3.5rem] right-[3.5rem] h-px bg-gradient-to-r from-navy-800 via-gold-400/20 to-navy-800" />
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
              {steps.map((step, i) => (
                <div key={step.num} className="relative">
                  <div className="flex lg:flex-col items-start gap-4 lg:gap-3">
                    <div className="flex-shrink-0 w-14 h-14 rounded-full bg-navy-900 border border-navy-700 flex items-center justify-center relative z-10">
                      <span className="text-gold-400 font-mono text-sm font-500">{step.num}</span>
                    </div>
                    <div>
                      <h3 className="text-white text-sm font-semibold mb-1.5 lg:mt-3">{step.title}</h3>
                      <p className="text-slate-500 text-xs leading-relaxed">{step.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-14">
        <div className="max-w-7xl mx-auto px-6">
          <div className="relative rounded-xl overflow-hidden glass-card border-gold-400/20 p-12 text-center">
            <div className="absolute inset-0 bg-gradient-to-r from-navy-800/40 via-transparent to-navy-800/40" />
            <div className="relative">
              <p className="text-xs font-mono text-gold-400 tracking-[0.2em] uppercase mb-4">GET STARTED TODAY</p>
              <h2 className="font-display text-4xl md:text-5xl text-white font-500 mb-5">
                Know your capital structure<br />before you go to market.
              </h2>
              <p className="text-slate-400 max-w-xl mx-auto mb-8 text-sm leading-relaxed">
                Complete a 10-minute intake and receive an institutional-grade financing assessment — including Capital Fit Score, structure options, and lender recommendations.
              </p>
              <Link
                to="/intake"
                className="inline-flex items-center gap-2 bg-gold-400 hover:bg-gold-300 text-navy-950 font-semibold px-8 py-3.5 rounded transition-all duration-200 shadow-lg shadow-gold-400/20"
              >
                Begin Financing Request
                <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
