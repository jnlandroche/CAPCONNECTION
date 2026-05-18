import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Shield, BarChart2, Users, Clock, Building2, Landmark, Briefcase, TrendingUp, RotateCcw, Wrench, Home } from 'lucide-react';
import Ticker from '../components/Ticker';

const solutions = [
  { icon: Briefcase, label: 'Acquisition Financing', desc: 'Debt structuring and bankability assessment for M&A in the $10M–$150M range.' },
  { icon: RotateCcw, label: 'Refinancing', desc: 'Financing readiness review before approaching lenders for improved terms or extended maturities.' },
  { icon: TrendingUp, label: 'Growth Capital', desc: 'Leverage your balance sheet for organic expansion with a clear lender-fit picture.' },
  { icon: Wrench, label: 'Equipment Financing', desc: 'Asset-backed structures for capital equipment, fleet, and manufacturing capacity.' },
  { icon: BarChart2, label: 'Recapitalization', desc: 'Balance sheet optimization through ownership restructuring and leverage analysis.' },
  { icon: Home, label: 'Real Estate Financing', desc: 'Owner-operator and investor financing across CRE bridge, construction, and permanent debt.' },
  { icon: Landmark, label: 'Working Capital', desc: 'ABL facilities, revolving credit, and borrowing base structures for operating liquidity.' },
  { icon: Building2, label: 'Sponsor Finance', desc: 'Platform acquisitions, dividend recaps, and add-ons for PE-backed companies.' },
];

const stats = [
  { value: '$2.4B+', label: 'Financing Placed' },
  { value: '180+', label: 'Lender Relationships' },
  { value: '94%', label: 'Close Rate' },
  { value: '38 days', label: 'Avg. Time to Term Sheet' },
];

const steps = [
  { num: '01', title: 'Complete Financing Profile', desc: 'A structured intake covering your company, financials, and capital objectives.' },
  { num: '02', title: 'Upload Financials Confidentially', desc: 'Encrypted and never shared without your explicit consent.' },
  { num: '03', title: 'Receive Your BankGrade Report', desc: 'Grade, financing range, structures, pricing, risks, and next steps.' },
  { num: '04', title: 'Review Lender Fit', desc: 'See which lender types align with your credit profile before going to market.' },
  { num: '05', title: 'Request Advisor Guidance', desc: 'A BankGrade Advisor guides your capital raise from profile to close.' },
];

const pillars = [
  { icon: Shield, label: 'Confidential by Design', desc: 'Your data is never shared without explicit consent.' },
  { icon: BarChart2, label: 'Institutional Standard', desc: 'Assessments grounded in real lender credit criteria.' },
  { icon: Users, label: '180+ Lender Relationships', desc: 'Coverage across every structure, size, and lender type.' },
  { icon: Clock, label: '38-Day Average', desc: 'From financing profile to executed term sheet.' },
];

const gradeScale = [
  { grade: 'A',  label: 'Exceptional', sub: 'Multiple lender options at competitive terms', color: 'text-green-400', bar: 'bg-green-500', w: '92%' },
  { grade: 'B+', label: 'Good',        sub: 'Bankable across most structures',              color: 'text-blue-400',  bar: 'bg-blue-500',  w: '75%' },
  { grade: 'B',  label: 'Adequate',    sub: 'Financeable with a targeted lender strategy',  color: 'text-gold-400',  bar: 'bg-gold-400',  w: '58%' },
  { grade: 'C+', label: 'Marginal',    sub: 'Requires credit improvement or restructuring', color: 'text-amber-400', bar: 'bg-amber-500', w: '38%' },
  { grade: 'C',  label: 'Substandard', sub: 'Significant lender hesitation likely',         color: 'text-red-400',   bar: 'bg-red-500',   w: '20%' },
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
          <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-blue-500/7 rounded-full blur-[150px]" />
        </div>

        <div className="relative max-w-7xl mx-auto px-6 pt-14 pb-12">
          <div className="max-w-3xl">
            <p className="text-[11px] font-semibold text-slate-500 tracking-[0.22em] uppercase mb-5 animate-fade-in">
              Middle Market Corporate Lending Intelligence
            </p>

            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-semibold text-white leading-[1.08] mb-6 animate-fade-in-up">
              Know Your BankGrade{' '}
              <br className="hidden lg:block" />
              <span className="gold-shimmer">Before the Market Does.</span>
            </h1>

            <p className="text-slate-400 text-sm md:text-base leading-relaxed max-w-lg mb-8 animate-fade-in-up delay-100">
              Confidential financing intelligence for middle market companies — bankability assessment, lender-fit analysis, and corporate lending guidance before you engage the market.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 animate-fade-in-up delay-200">
              <Link
                to="/intake"
                className="inline-flex items-center justify-center gap-2 bg-blue-500 hover:bg-blue-400 text-white font-semibold text-sm px-6 py-3 rounded-md transition-all duration-200 shadow-lg shadow-blue-500/20"
              >
                Get Your Free BankGrade <ArrowRight size={15} />
              </Link>
              <Link
                to="/assessment"
                className="inline-flex items-center justify-center gap-2 text-slate-400 hover:text-white text-sm px-6 py-3 rounded-md transition-all duration-200 font-medium border border-white/8 hover:border-white/18"
              >
                View Sample Report
              </Link>
            </div>

            <div className="mt-10 pt-8 border-t border-white/6 grid grid-cols-2 md:grid-cols-4 gap-6 animate-fade-in-up delay-300">
              {stats.map((s) => (
                <div key={s.label}>
                  <div className="text-xl font-display font-semibold text-white mb-0.5">{s.value}</div>
                  <div className="text-xs text-slate-500 tracking-wide">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── What is a BankGrade ── */}
      <section className="py-12 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div className="lg:pt-1">
              <p className="text-[11px] font-semibold text-slate-500 tracking-[0.18em] uppercase mb-3">What is a BankGrade?</p>
              <h2 className="font-display text-3xl text-white font-semibold mb-4 leading-tight">
                Your credit profile, assessed<br />before lenders see it.
              </h2>
              <p className="text-slate-400 text-sm leading-relaxed mb-3">
                A BankGrade is an institutional-quality financing readiness assessment — the same evaluation framework a credit committee applies when reviewing a deal. It tells you where your company stands, which structures you qualify for, and what lenders will require before a single diligence request is sent.
              </p>
              <p className="text-slate-500 text-sm leading-relaxed">
                Most middle market companies enter lender conversations without this context. BankGrade closes that information gap — confidentially, and at no cost.
              </p>
            </div>

            <div className="glass-card rounded-xl divide-y divide-white/5">
              <div className="px-5 py-3">
                <p className="text-[10px] font-semibold text-slate-500 tracking-[0.15em] uppercase">BankGrade Scale</p>
              </div>
              {gradeScale.map((g) => (
                <div key={g.grade} className="flex items-center gap-4 px-5 py-3">
                  <span className={`text-xl font-display font-bold w-8 flex-shrink-0 ${g.color}`}>{g.grade}</span>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-xs text-white font-semibold">{g.label}</span>
                      {g.grade === 'B+' && (
                        <span className="text-[9px] font-bold text-blue-400 border border-blue-500/40 px-1.5 py-0.5 rounded-sm tracking-wide uppercase">Sample</span>
                      )}
                    </div>
                    <div className="w-full bg-navy-900 rounded-full h-0.5">
                      <div className={`h-0.5 rounded-full ${g.bar}`} style={{ width: g.w }} />
                    </div>
                  </div>
                  <span className="text-[11px] text-slate-500 hidden lg:block w-36 text-right leading-snug">{g.sub}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Solutions ── */}
      <section id="solutions" className="py-12 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-3 mb-6">
            <div>
              <p className="text-[11px] font-semibold text-slate-500 tracking-[0.18em] uppercase mb-2">Financing Structures</p>
              <h2 className="font-display text-3xl text-white font-semibold">Corporate lending guidance across every structure</h2>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-white/5 rounded-xl overflow-hidden border border-white/5">
            {solutions.map((sol) => (
              <div key={sol.label} className="bg-navy-950 p-5 hover:bg-navy-900/50 transition-colors duration-200 group">
                <div className="w-7 h-7 rounded border border-white/8 flex items-center justify-center mb-3 group-hover:border-blue-500/30 transition-colors">
                  <sol.icon size={13} className="text-slate-500 group-hover:text-blue-400 transition-colors" />
                </div>
                <h3 className="text-white text-sm font-semibold mb-1.5">{sol.label}</h3>
                <p className="text-slate-500 text-xs leading-relaxed">{sol.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── How it works ── */}
      <section className="py-12 border-t border-white/5 bg-navy-900/25">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-2 mb-8">
            <div>
              <p className="text-[11px] font-semibold text-slate-500 tracking-[0.18em] uppercase mb-2">The Process</p>
              <h2 className="font-display text-3xl text-white font-semibold">From profile to term sheet</h2>
            </div>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 relative">
            <div className="hidden lg:block absolute top-6 left-[3rem] right-[3rem] h-px bg-gradient-to-r from-transparent via-white/8 to-transparent" />
            {steps.map((step) => (
              <div key={step.num} className="relative flex lg:flex-col items-start gap-4 lg:gap-0">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-navy-950 border border-white/10 flex items-center justify-center z-10">
                  <span className="text-slate-500 font-semibold text-xs">{step.num}</span>
                </div>
                <div className="lg:mt-4">
                  <h3 className="text-white text-sm font-semibold mb-1.5">{step.title}</h3>
                  <p className="text-slate-500 text-xs leading-relaxed">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Pillars + closing CTA ── */}
      <section className="py-12 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-10">
            {pillars.map((p) => (
              <div key={p.label}>
                <div className="w-8 h-8 rounded border border-white/8 flex items-center justify-center mb-3">
                  <p.icon size={14} className="text-slate-500" />
                </div>
                <h3 className="text-white font-semibold text-sm mb-1">{p.label}</h3>
                <p className="text-slate-500 text-xs leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>

          <div className="pt-8 border-t border-white/5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div>
              <p className="text-white font-semibold text-sm mb-0.5">Ready to know where you stand?</p>
              <p className="text-slate-500 text-xs">Complete a financing profile and receive your BankGrade at no cost.</p>
            </div>
            <Link
              to="/intake"
              className="flex-shrink-0 inline-flex items-center gap-2 bg-blue-500 hover:bg-blue-400 text-white font-semibold text-sm px-5 py-2.5 rounded-md transition-all shadow-md shadow-blue-500/15"
            >
              Get Your Free BankGrade <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
