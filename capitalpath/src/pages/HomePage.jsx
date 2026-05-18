import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Shield, BarChart2, Users, Clock, Building2, Landmark, Briefcase, TrendingUp, RotateCcw, Wrench, Home, CheckCircle, Star } from 'lucide-react';
import Ticker from '../components/Ticker';

const solutions = [
  { icon: Briefcase, label: 'Acquisition Financing', desc: 'Bankability assessment and lender-fit intelligence for sponsored and non-sponsored M&A in the $10M–$150M range.' },
  { icon: RotateCcw, label: 'Refinancing', desc: 'Understand your financing readiness before approaching lenders — and identify the best path to improved terms.' },
  { icon: TrendingUp, label: 'Growth Capital', desc: 'Know your BankGrade before seeking growth debt — avoid mismatched lender conversations that cost time.' },
  { icon: Wrench, label: 'Equipment Financing', desc: 'Asset-backed readiness assessment for capital equipment, fleet, and manufacturing capacity expansion.' },
  { icon: BarChart2, label: 'Recapitalization', desc: 'Financing readiness review for balance sheet optimization — restructure ownership and leverage intelligently.' },
  { icon: Home, label: 'Real Estate Financing', desc: 'Corporate lending guidance for CRE bridge, construction, and permanent debt for owner-operators.' },
  { icon: Landmark, label: 'Working Capital', desc: 'Lender-fit intelligence for ABL facilities, revolving credit, and borrowing base structures.' },
  { icon: Building2, label: 'Sponsor Finance', desc: 'Middle market financing intelligence for platform acquisitions, dividend recaps, and add-on transactions.' },
];

const stats = [
  { value: '$2.4B+', label: 'Financing Placed' },
  { value: '180+', label: 'Lender Relationships' },
  { value: '94%', label: 'Close Rate' },
  { value: '38 days', label: 'Avg. Time to Term Sheet' },
];

const steps = [
  { num: '01', title: 'Complete Financing Profile', desc: 'Answer a structured set of questions about your company, financials, and capital objectives. Takes under 10 minutes.' },
  { num: '02', title: 'Upload Financials Confidentially', desc: 'Securely share your financials in a bank-ready environment. Files are encrypted and never shared without your consent.' },
  { num: '03', title: 'Receive Your BankGrade Report', desc: 'Your free report shows your grade, eligible financing range, likely structures, indicative pricing, risks, and next steps.' },
  { num: '04', title: 'Review Lender Fit', desc: 'See which lender types align with your credit profile — banks, direct lenders, credit funds — before you go to market.' },
  { num: '05', title: 'Request Advisor Guidance', desc: 'Speak with a BankGrade Advisor who can identify potential lenders and guide your capital raise from start to close.' },
];

const pillars = [
  { icon: Shield, label: 'Confidential by Design', desc: 'Your data is never shared without explicit consent.' },
  { icon: BarChart2, label: 'Financing Intelligence', desc: 'Bankability assessment grounded in real lender standards.' },
  { icon: Users, label: 'Lender-Fit Matching', desc: '180+ lender relationships across every structure and size.' },
  { icon: Clock, label: 'Results-Driven', desc: 'Average 38 days from profile to term sheet.' },
];

const gradeScale = [
  { grade: 'A', label: 'Exceptional', color: 'text-green-400', bg: 'bg-green-500/10 border-green-500/20' },
  { grade: 'B+', label: 'Good', color: 'text-blue-400', bg: 'bg-blue-500/10 border-blue-500/20' },
  { grade: 'B', label: 'Adequate', color: 'text-gold-400', bg: 'bg-gold-400/10 border-gold-400/20' },
  { grade: 'C+', label: 'Marginal', color: 'text-amber-400', bg: 'bg-amber-500/10 border-amber-500/20' },
  { grade: 'C', label: 'Substandard', color: 'text-red-400', bg: 'bg-red-500/10 border-red-500/20' },
];

export default function HomePage() {
  return (
    <div className="min-h-screen bg-navy-950 pt-16">
      <Ticker />

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div
            className="absolute inset-0 opacity-[0.025]"
            style={{
              backgroundImage: `linear-gradient(rgba(45,91,255,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(45,91,255,0.8) 1px, transparent 1px)`,
              backgroundSize: '60px 60px',
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-navy-950" />
          <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[900px] h-[500px] bg-blue-500/8 rounded-full blur-[140px]" />
          <div className="absolute top-1/3 right-0 w-[400px] h-[400px] bg-gold-400/5 rounded-full blur-[100px]" />
        </div>

        <div className="relative max-w-7xl mx-auto px-6 py-16">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/25 rounded-full px-4 py-1.5 mb-8 animate-fade-in">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse" />
              <span className="text-blue-300 text-xs font-semibold tracking-wider uppercase">Middle Market Financing Intelligence</span>
            </div>

            <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-semibold text-white leading-[1.1] mb-6 animate-fade-in-up">
              Know Your BankGrade{' '}
              <br className="hidden md:block" />
              <span className="gold-shimmer">Before the Market Does.</span>
            </h1>

            <p className="text-slate-400 text-lg md:text-xl leading-relaxed max-w-2xl mb-3 animate-fade-in-up delay-100">
              Confidential financing intelligence for middle market companies seeking acquisition financing, refinancing, working capital, equipment financing, growth capital, and recapitalizations.
            </p>
            <p className="text-slate-500 text-base mb-10 animate-fade-in-up delay-200 font-medium">Finance with Confidence.</p>

            <div className="flex flex-col sm:flex-row gap-3 animate-fade-in-up delay-200">
              <Link
                to="/intake"
                className="inline-flex items-center justify-center gap-2 bg-blue-500 hover:bg-blue-400 text-white font-semibold text-sm px-7 py-3.5 rounded-md transition-all duration-200 shadow-lg shadow-blue-500/25"
              >
                Get Your Free BankGrade
                <ArrowRight size={16} />
              </Link>
              <Link
                to="/assessment"
                className="inline-flex items-center justify-center gap-2 border border-white/12 hover:border-white/25 text-slate-300 hover:text-white text-sm px-7 py-3.5 rounded-md transition-all duration-200 font-medium"
              >
                See Sample Report
              </Link>
            </div>

            <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6 animate-fade-in-up delay-300">
              {stats.map((s) => (
                <div key={s.label}>
                  <div className="text-2xl font-display font-semibold text-white mb-1">{s.value}</div>
                  <div className="text-xs font-medium text-slate-500 tracking-wide uppercase">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Grade preview strip */}
      <section className="border-y border-white/6 bg-navy-900/40 py-8">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-5">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-gold-400/20 to-gold-400/5 border border-gold-400/30 flex items-center justify-center">
                <span className="text-2xl font-display font-bold text-gold-400">B+</span>
              </div>
              <div>
                <p className="text-white font-semibold text-sm">Your BankGrade™ Report is Ready</p>
                <p className="text-slate-400 text-xs mt-0.5">
                  Indicative Financing Capacity: <span className="text-white font-semibold">$18MM – $28MM</span>
                  {' · '}Bank Readiness Score: <span className="text-white font-semibold">82 / 100</span>
                  {' · '}Pricing: <span className="text-white font-semibold">SOFR + 225–325</span>
                </p>
              </div>
            </div>
            <div className="flex items-center gap-6 text-xs text-slate-400">
              {['Confidential', 'Objective', 'Bank-Grade Insight'].map(p => (
                <div key={p} className="flex items-center gap-1.5">
                  <CheckCircle size={13} className="text-blue-400" />
                  <span className="font-medium">{p}</span>
                </div>
              ))}
            </div>
            <Link to="/intake" className="flex-shrink-0 bg-blue-500 hover:bg-blue-400 text-white font-semibold text-sm px-5 py-2.5 rounded-md transition-all">
              Get Your BankGrade
            </Link>
          </div>
        </div>
      </section>

      {/* What is BankGrade */}
      <section className="py-14 border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-xs font-semibold text-blue-400 tracking-wide uppercase mb-3">What is a BankGrade?</p>
              <h2 className="font-display text-4xl text-white font-semibold mb-4">
                Your bankability score,<br />before lenders see it.
              </h2>
              <p className="text-slate-400 text-sm leading-relaxed mb-6">
                A BankGrade is an institutional-quality financing readiness assessment — the same lens a credit committee uses to evaluate your company. It tells you exactly where you stand, what structures you qualify for, and what lenders will want to see before you spend a day in due diligence.
              </p>
              <div className="space-y-3">
                {[
                  'Bankability assessment based on real lender credit standards',
                  'Financing readiness score from A to D (letter grade system)',
                  'Lender-fit intelligence — which lender types match your profile',
                  'Corporate lending guidance with actionable next steps',
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-2.5">
                    <CheckCircle size={15} className="text-blue-400 flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-slate-300">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="glass-card rounded-2xl p-6">
              <p className="text-xs font-semibold text-slate-500 uppercase tracking-wide mb-4">BankGrade Scale</p>
              <div className="space-y-2.5 mb-6">
                {gradeScale.map(g => (
                  <div key={g.grade} className={`flex items-center gap-3 px-3 py-2.5 rounded-lg border ${g.bg}`}>
                    <span className={`text-xl font-display font-bold w-8 text-center ${g.color}`}>{g.grade}</span>
                    <div className="flex-1">
                      <span className="text-sm text-white font-medium">{g.label}</span>
                    </div>
                    {g.grade === 'B+' && (
                      <span className="text-[10px] font-semibold text-blue-400 bg-blue-500/15 border border-blue-500/30 px-2 py-0.5 rounded-full">Your Score</span>
                    )}
                  </div>
                ))}
              </div>
              <Link to="/intake" className="w-full block text-center bg-blue-500 hover:bg-blue-400 text-white font-semibold text-sm py-3 rounded-md transition-all">
                Get Your Free BankGrade
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Solutions grid */}
      <section id="solutions" className="py-14 border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-8">
            <p className="text-xs font-semibold text-blue-400 tracking-wide uppercase mb-3">Middle Market Financing Intelligence</p>
            <h2 className="font-display text-4xl text-white font-semibold">
              Corporate lending guidance<br />across every structure
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {solutions.map((sol, i) => (
              <div
                key={sol.label}
                className="glass-card rounded-lg p-5 hover:border-blue-500/30 transition-all duration-300 group cursor-default"
                style={{ animationDelay: `${i * 0.06}s` }}
              >
                <div className="w-9 h-9 bg-navy-800 rounded-lg border border-white/8 flex items-center justify-center mb-4 group-hover:border-blue-500/40 transition-colors">
                  <sol.icon size={16} className="text-blue-400" />
                </div>
                <h3 className="text-white text-sm font-semibold mb-2">{sol.label}</h3>
                <p className="text-slate-500 text-xs leading-relaxed">{sol.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="py-14 bg-navy-900/30 border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-8">
            <p className="text-xs font-semibold text-blue-400 tracking-wide uppercase mb-3">How It Works</p>
            <h2 className="font-display text-4xl text-white font-semibold">From profile to term sheet in five steps</h2>
          </div>
          <div className="relative">
            <div className="hidden lg:block absolute top-8 left-[3.5rem] right-[3.5rem] h-px bg-gradient-to-r from-navy-800 via-blue-500/20 to-navy-800" />
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
              {steps.map((step) => (
                <div key={step.num} className="relative">
                  <div className="flex lg:flex-col items-start gap-4 lg:gap-3">
                    <div className="flex-shrink-0 w-14 h-14 rounded-full bg-navy-900 border border-navy-700 flex items-center justify-center relative z-10">
                      <span className="text-blue-400 font-semibold text-sm">{step.num}</span>
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

      {/* Pillars */}
      <section className="py-14 border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {pillars.map((p) => (
              <div key={p.label} className="text-center">
                <div className="w-11 h-11 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center mx-auto mb-3">
                  <p.icon size={18} className="text-blue-400" />
                </div>
                <h3 className="text-white font-semibold text-sm mb-1">{p.label}</h3>
                <p className="text-slate-500 text-xs leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-14">
        <div className="max-w-7xl mx-auto px-6">
          <div className="relative rounded-xl overflow-hidden glass-card border-blue-500/20 p-12 text-center">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 via-transparent to-blue-500/5" />
            <div className="relative">
              <p className="text-xs font-semibold text-blue-400 tracking-wide uppercase mb-4">Free · Confidential · No Commitment</p>
              <h2 className="font-display text-4xl md:text-5xl text-white font-semibold mb-5">
                Know your BankGrade<br />before you go to market.
              </h2>
              <p className="text-slate-400 max-w-xl mx-auto mb-8 text-sm leading-relaxed">
                Complete a 10-minute financing profile and receive an institutional-grade bankability assessment — including your BankGrade, eligible financing range, likely structures, indicative pricing, and recommended next steps.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <Link
                  to="/intake"
                  className="inline-flex items-center gap-2 bg-blue-500 hover:bg-blue-400 text-white font-semibold px-8 py-3.5 rounded-md transition-all duration-200 shadow-lg shadow-blue-500/25"
                >
                  Get Your Free BankGrade
                  <ArrowRight size={16} />
                </Link>
                <Link
                  to="/assessment"
                  className="inline-flex items-center gap-2 border border-white/12 hover:border-white/25 text-slate-300 hover:text-white px-8 py-3.5 rounded-md transition-all duration-200 font-medium text-sm"
                >
                  See Sample Report
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
