import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Shield, BarChart2, Users, Clock, Building2, Landmark, Briefcase, TrendingUp, RotateCcw, Wrench, Home, CheckCircle } from 'lucide-react';
import Ticker from '../components/Ticker';

const solutions = [
  { icon: Briefcase, label: 'Acquisition Financing', desc: 'Debt structuring and bankability assessment for M&A transactions in the $10M–$150M range.' },
  { icon: RotateCcw, label: 'Refinancing', desc: 'Understand your financing readiness before approaching lenders for improved terms or extended maturities.' },
  { icon: TrendingUp, label: 'Growth Capital', desc: 'Leverage your balance sheet for organic expansion. Know your lender fit before you go to market.' },
  { icon: Wrench, label: 'Equipment Financing', desc: 'Asset-backed structures for capital equipment, fleet, and manufacturing capacity.' },
  { icon: BarChart2, label: 'Recapitalization', desc: 'Balance sheet optimization through combined ownership restructuring and leverage review.' },
  { icon: Home, label: 'Real Estate Financing', desc: 'Owner-operator and investor financing across CRE bridge, construction, and permanent debt.' },
  { icon: Landmark, label: 'Working Capital', desc: 'ABL facilities, revolving credit, and borrowing base structures for operating liquidity.' },
  { icon: Building2, label: 'Sponsor Finance', desc: 'Platform acquisitions, dividend recaps, and add-on transactions for PE-backed companies.' },
];

const stats = [
  { value: '$2.4B+', label: 'Financing Placed' },
  { value: '180+', label: 'Lender Relationships' },
  { value: '94%', label: 'Close Rate' },
  { value: '38 days', label: 'Avg. Time to Term Sheet' },
];

const steps = [
  { num: '01', title: 'Complete Financing Profile', desc: 'A structured intake covering your company, financials, and capital objectives. Approximately 10 minutes.' },
  { num: '02', title: 'Upload Financials Confidentially', desc: 'Securely share your financials in a bank-ready environment. Encrypted and never shared without your consent.' },
  { num: '03', title: 'Receive Your BankGrade Report', desc: 'Your grade, eligible financing range, likely structures, indicative pricing, key risks, and recommended next steps.' },
  { num: '04', title: 'Review Lender Fit', desc: 'See which lender types — banks, direct lenders, credit funds — align with your credit profile before going to market.' },
  { num: '05', title: 'Request Advisor Guidance', desc: 'Speak with a BankGrade Advisor to identify lenders and navigate your capital raise from start to close.' },
];

const pillars = [
  { icon: Shield, label: 'Confidential by Design', desc: 'Your data is never shared without explicit consent.' },
  { icon: BarChart2, label: 'Institutional Standard', desc: 'Assessments grounded in real lender credit criteria.' },
  { icon: Users, label: '180+ Lender Relationships', desc: 'Coverage across every structure, size, and lender type.' },
  { icon: Clock, label: '38-Day Average', desc: 'From financing profile to executed term sheet.' },
];

const gradeScale = [
  { grade: 'A', label: 'Exceptional', sub: 'Strong credit, multiple lender options at competitive terms', color: 'text-green-400', bar: 'bg-green-500' },
  { grade: 'B+', label: 'Good', sub: 'Solid profile, bankable across most structures', color: 'text-blue-400', bar: 'bg-blue-500' },
  { grade: 'B', label: 'Adequate', sub: 'Financeable with targeted lender strategy', color: 'text-gold-400', bar: 'bg-gold-400' },
  { grade: 'C+', label: 'Marginal', sub: 'Requires credit improvement or alternative structures', color: 'text-amber-400', bar: 'bg-amber-500' },
  { grade: 'C', label: 'Substandard', sub: 'Significant lender hesitation; restructuring may be required', color: 'text-red-400', bar: 'bg-red-500' },
];

export default function HomePage() {
  return (
    <div className="min-h-screen bg-navy-950 pt-16">
      <Ticker />

      {/* ── Hero ── */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div
            className="absolute inset-0 opacity-[0.022]"
            style={{
              backgroundImage: `linear-gradient(rgba(45,91,255,0.9) 1px, transparent 1px), linear-gradient(90deg, rgba(45,91,255,0.9) 1px, transparent 1px)`,
              backgroundSize: '64px 64px',
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-navy-950" />
          <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-blue-500/7 rounded-full blur-[160px]" />
        </div>

        <div className="relative max-w-7xl mx-auto px-6 pt-20 pb-20">
          <div className="max-w-3xl">
            <p className="text-xs font-semibold text-slate-500 tracking-[0.2em] uppercase mb-6 animate-fade-in">
              Middle Market Corporate Lending Intelligence
            </p>

            <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-semibold text-white leading-[1.08] mb-7 animate-fade-in-up">
              Know Your BankGrade{' '}
              <br className="hidden md:block" />
              <span className="gold-shimmer">Before the Market Does.</span>
            </h1>

            <p className="text-slate-400 text-lg leading-relaxed max-w-xl mb-10 animate-fade-in-up delay-100">
              Confidential financing intelligence for middle market companies — bankability assessment, lender-fit analysis, and corporate lending guidance before you engage the market.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 animate-fade-in-up delay-200">
              <Link
                to="/intake"
                className="inline-flex items-center justify-center gap-2 bg-blue-500 hover:bg-blue-400 text-white font-semibold text-sm px-7 py-3.5 rounded-md transition-all duration-200 shadow-lg shadow-blue-500/20"
              >
                Get Your Free BankGrade
                <ArrowRight size={15} />
              </Link>
              <Link
                to="/assessment"
                className="inline-flex items-center justify-center gap-2 text-slate-400 hover:text-white text-sm px-7 py-3.5 rounded-md transition-all duration-200 font-medium border border-white/8 hover:border-white/20"
              >
                View Sample Report
              </Link>
            </div>

            <div className="mt-14 pt-10 border-t border-white/6 grid grid-cols-2 md:grid-cols-4 gap-8 animate-fade-in-up delay-300">
              {stats.map((s) => (
                <div key={s.label}>
                  <div className="text-2xl font-display font-semibold text-white mb-1">{s.value}</div>
                  <div className="text-xs font-medium text-slate-500 tracking-wide">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── What is a BankGrade ── */}
      <section className="py-20 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <p className="text-xs font-semibold text-slate-500 tracking-[0.18em] uppercase mb-5">What is a BankGrade?</p>
              <h2 className="font-display text-4xl text-white font-semibold mb-5 leading-tight">
                Your credit profile,<br />assessed before lenders are.
              </h2>
              <p className="text-slate-400 text-sm leading-relaxed mb-6">
                A BankGrade is an institutional-quality financing readiness assessment — the same evaluation framework a credit committee applies when reviewing a deal. It tells you where your company stands, which structures you qualify for, and what lenders will require before a single diligence request is sent.
              </p>
              <p className="text-slate-500 text-sm leading-relaxed">
                Most middle market companies enter lender conversations without this context. BankGrade closes that information gap — confidentially, and at no cost.
              </p>
            </div>

            {/* Grade scale — informational only, no CTA */}
            <div className="glass-card rounded-2xl p-6 divide-y divide-white/5">
              <div className="pb-4">
                <p className="text-[11px] font-semibold text-slate-500 tracking-[0.15em] uppercase">BankGrade Scale</p>
              </div>
              {gradeScale.map((g, i) => (
                <div key={g.grade} className="flex items-center gap-4 py-3.5">
                  <span className={`text-2xl font-display font-bold w-9 flex-shrink-0 ${g.color}`}>{g.grade}</span>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1.5">
                      <span className="text-sm text-white font-semibold">{g.label}</span>
                      {g.grade === 'B+' && (
                        <span className="text-[9px] font-bold text-blue-400 border border-blue-500/40 px-1.5 py-0.5 rounded-sm tracking-wide uppercase">Sample</span>
                      )}
                    </div>
                    <div className="w-full bg-navy-900 rounded-full h-0.5">
                      <div className={`h-0.5 rounded-full ${g.bar}`} style={{ width: `${[92, 75, 58, 40, 22][i]}%` }} />
                    </div>
                  </div>
                  <span className="text-xs text-slate-500 hidden md:block max-w-[140px] text-right leading-snug">{g.sub}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Solutions ── */}
      <section id="solutions" className="py-20 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-10">
            <p className="text-xs font-semibold text-slate-500 tracking-[0.18em] uppercase mb-4">Financing Structures</p>
            <h2 className="font-display text-4xl text-white font-semibold">
              Corporate lending guidance<br />across every structure
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-white/5 rounded-xl overflow-hidden border border-white/5">
            {solutions.map((sol) => (
              <div
                key={sol.label}
                className="bg-navy-950 p-6 hover:bg-navy-900/60 transition-colors duration-200 group"
              >
                <div className="w-8 h-8 rounded-lg border border-white/8 flex items-center justify-center mb-4 group-hover:border-blue-500/30 transition-colors">
                  <sol.icon size={15} className="text-slate-500 group-hover:text-blue-400 transition-colors" />
                </div>
                <h3 className="text-white text-sm font-semibold mb-2">{sol.label}</h3>
                <p className="text-slate-500 text-xs leading-relaxed">{sol.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── How it works ── */}
      <section className="py-20 border-t border-white/5 bg-navy-900/20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-10">
            <p className="text-xs font-semibold text-slate-500 tracking-[0.18em] uppercase mb-4">The Process</p>
            <h2 className="font-display text-4xl text-white font-semibold">From profile to term sheet</h2>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 relative">
            <div className="hidden lg:block absolute top-7 left-[3.5rem] right-[3.5rem] h-px bg-gradient-to-r from-transparent via-white/8 to-transparent" />
            {steps.map((step) => (
              <div key={step.num} className="relative">
                <div className="flex lg:flex-col items-start gap-4 lg:gap-0">
                  <div className="flex-shrink-0 w-14 h-14 rounded-full bg-navy-950 border border-white/10 flex items-center justify-center relative z-10">
                    <span className="text-slate-500 font-semibold text-xs">{step.num}</span>
                  </div>
                  <div className="lg:mt-5">
                    <h3 className="text-white text-sm font-semibold mb-2">{step.title}</h3>
                    <p className="text-slate-500 text-xs leading-relaxed">{step.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Pillars ── */}
      <section className="py-20 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
            {pillars.map((p) => (
              <div key={p.label}>
                <div className="w-9 h-9 rounded-lg border border-white/8 flex items-center justify-center mb-4">
                  <p.icon size={16} className="text-slate-500" />
                </div>
                <h3 className="text-white font-semibold text-sm mb-2">{p.label}</h3>
                <p className="text-slate-500 text-xs leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>

          {/* Single, restrained closing CTA — not a banner, just a line */}
          <div className="mt-16 pt-10 border-t border-white/5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
            <div>
              <p className="text-white font-semibold text-sm mb-1">Ready to know where you stand?</p>
              <p className="text-slate-500 text-xs">Complete a financing profile and receive your BankGrade at no cost.</p>
            </div>
            <Link
              to="/intake"
              className="flex-shrink-0 inline-flex items-center gap-2 bg-blue-500 hover:bg-blue-400 text-white font-semibold text-sm px-6 py-3 rounded-md transition-all shadow-md shadow-blue-500/15"
            >
              Get Your Free BankGrade <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
