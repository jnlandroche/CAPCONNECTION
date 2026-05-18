import React from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRight, Shield, Lock, TrendingUp, BarChart2,
  CheckCircle, AlertTriangle, Building2, Landmark,
  Briefcase, RotateCcw, Wrench, Users, Clock,
  CreditCard, Globe, Layers, PieChart,
} from 'lucide-react';
import Ticker from '../components/Ticker';

const financingTypes = [
  { icon: RotateCcw,  label: 'Revolvers / LOC',         desc: 'Flexible revolving credit and lines of credit for operating liquidity and working capital needs.' },
  { icon: Briefcase,  label: 'Acquisition Financing',    desc: 'Senior and subordinated debt structures for M&A transactions from $10M to $250M.' },
  { icon: Wrench,     label: 'Equipment Financing',      desc: 'Asset-backed lending for capital equipment, fleet, manufacturing, and technology assets.' },
  { icon: Layers,     label: 'ABL / Asset-Based',        desc: 'Borrowing base facilities collateralized by receivables, inventory, and eligible assets.' },
  { icon: Building2,  label: 'Sponsor Finance',          desc: 'Platform acquisitions, dividend recapitalizations, and add-on transactions for PE-backed companies.' },
  { icon: Globe,      label: 'Treasury Management',      desc: 'Cash management, liquidity optimization, and hedging strategies for institutional borrowers.' },
  { icon: Landmark,   label: 'Commercial Real Estate',   desc: 'Bridge, construction, and permanent debt for owner-operators and institutional investors.' },
  { icon: PieChart,   label: 'Private Credit',           desc: 'Direct lending, mezzanine, and structured credit from institutional non-bank capital providers.' },
  { icon: Users,      label: 'ESOP Financing',           desc: 'Leveraged ESOP transaction financing for ownership transitions and buyouts.' },
];

const steps = [
  {
    num: '01', title: 'Upload Financials',
    items: ['Financial statements (3 years)', 'Business tax returns', 'Debt schedule', 'AR / AP aging', 'Ownership information'],
    desc: 'Securely upload your financial data in a bank-grade encrypted environment. Your files are never shared without explicit written consent.'
  },
  {
    num: '02', title: 'Receive Your BankGrade™',
    desc: 'Our institutional credit framework evaluates your company the same way a commercial lender or credit committee would — producing a letter-grade score with detailed commentary.'
  },
  {
    num: '03', title: 'Understand Financing Eligibility',
    items: ['Estimated debt capacity', 'Likely lender appetite', 'Leverage tolerance range', 'Eligible financing structures'],
    desc: 'Know precisely what capital you can access, from which type of lender, and at what terms — before you approach a single bank or credit fund.'
  },
  {
    num: '04', title: 'Connect with Capital',
    desc: 'Optionally engage a BANKABLE advisor to facilitate introductions to banks, direct lenders, and private credit providers aligned with your profile.'
  },
];

const pillars = [
  { value: '$10MM–$500MM', label: 'Revenue Focus' },
  { value: '180+', label: 'Lender Relationships' },
  { value: '94%', label: 'Term Sheet Rate' },
  { value: '38 days', label: 'Avg. Time to Close' },
];

const stats = [
  { value: '$2.4B+', label: 'Financing Placed' },
  { value: '180+', label: 'Lender Relationships' },
  { value: '94%', label: 'Close Rate' },
  { value: '38 days', label: 'Avg. Time to Term Sheet' },
];

function HeroDashboard() {
  return (
    <div className="glass-card rounded-xl overflow-hidden shadow-2xl shadow-black/40" style={{ border: '1px solid rgba(200,164,93,0.15)' }}>
      {/* Dashboard header */}
      <div className="flex items-center justify-between px-5 py-3 border-b border-white/6" style={{ background: 'rgba(6,13,24,0.7)' }}>
        <div className="flex items-center gap-2">
          <img src="/bankable-logo.png" alt="BANKABLE" className="h-5 w-auto object-contain" style={{ filter: 'brightness(1.05)' }} />
          <span className="text-[11px] font-semibold text-silver-500 tracking-wide">BankGrade™ Report</span>
        </div>
        <div className="flex items-center gap-1.5">
          <div className="w-2 h-2 rounded-full bg-green-400" />
          <span className="text-[10px] text-silver-600 font-medium">Live Analysis</span>
        </div>
      </div>

      <div className="p-5">
        {/* Company + Score */}
        <div className="flex items-start justify-between mb-5">
          <div>
            <p className="text-[10px] font-semibold text-silver-600 tracking-widest uppercase mb-1">Meridian Capital Group</p>
            <p className="text-xs text-silver-600">Industrial Distribution · $142M Revenue</p>
          </div>
          <div className="text-right">
            <div className="inline-flex flex-col items-center justify-center w-16 h-16 rounded-xl border" style={{ background: 'rgba(200,164,93,0.08)', borderColor: 'rgba(200,164,93,0.25)' }}>
              <span className="text-2xl font-bold leading-none" style={{ color: '#C8A45D' }}>A–</span>
              <span className="text-[9px] text-silver-600 mt-0.5">Grade</span>
            </div>
          </div>
        </div>

        {/* Key metrics */}
        <div className="grid grid-cols-2 gap-2 mb-4">
          {[
            { label: 'Bank Readiness', value: '88 / 100' },
            { label: 'Debt Capacity', value: '$18MM – $25MM' },
            { label: 'Leverage Range', value: '3.5x – 4.5x EBITDA' },
            { label: 'Pricing (Indicative)', value: 'SOFR + 200–275' },
          ].map(m => (
            <div key={m.label} className="rounded-lg px-3 py-2.5" style={{ background: 'rgba(6,13,24,0.5)', border: '1px solid rgba(183,189,199,0.07)' }}>
              <p className="text-[9px] font-semibold text-silver-600 uppercase tracking-wide mb-0.5">{m.label}</p>
              <p className="text-xs font-semibold text-white font-mono">{m.value}</p>
            </div>
          ))}
        </div>

        {/* Financing options */}
        <div className="mb-3">
          <p className="text-[10px] font-semibold text-silver-600 uppercase tracking-wide mb-2">Likely Financing Options</p>
          <div className="space-y-1.5">
            {['Revolving Line of Credit', 'Acquisition Financing', 'Equipment Financing', 'Working Capital LOC'].map(f => (
              <div key={f} className="flex items-center gap-2">
                <CheckCircle size={11} className="flex-shrink-0" style={{ color: '#C8A45D' }} />
                <span className="text-xs text-silver-400">{f}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Concerns */}
        <div className="pt-3 border-t border-white/5">
          <p className="text-[10px] font-semibold text-silver-600 uppercase tracking-wide mb-2">Potential Concerns</p>
          <div className="space-y-1.5">
            {['Customer concentration', 'Limited recurring revenue', 'Working capital volatility'].map(c => (
              <div key={c} className="flex items-center gap-2">
                <AlertTriangle size={10} className="flex-shrink-0 text-amber-400" />
                <span className="text-xs text-silver-500">{c}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Footer CTA */}
      <div className="px-5 py-3 border-t border-white/5 flex items-center justify-between" style={{ background: 'rgba(6,13,24,0.4)' }}>
        <p className="text-[10px] text-silver-600">Report generated · Confidential</p>
        <span className="text-[10px] font-semibold px-2 py-1 rounded" style={{ background: 'rgba(200,164,93,0.12)', color: '#C8A45D' }}>Full Report Available</span>
      </div>
    </div>
  );
}

export default function HomePage() {
  return (
    <div className="min-h-screen bg-navy-900 pt-16">
      <Ticker />

      {/* ── Hero ── */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute inset-0 opacity-[0.018]" style={{
            backgroundImage: 'linear-gradient(rgba(183,189,199,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(183,189,199,0.6) 1px, transparent 1px)',
            backgroundSize: '72px 72px',
          }} />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-navy-900" />
          <div className="absolute top-1/3 left-1/4 w-[600px] h-[400px] rounded-full blur-[180px]" style={{ background: 'radial-gradient(ellipse, rgba(200,164,93,0.06) 0%, transparent 70%)' }} />
          <div className="absolute top-1/4 right-1/4 w-[500px] h-[350px] rounded-full blur-[180px]" style={{ background: 'radial-gradient(ellipse, rgba(183,189,199,0.04) 0%, transparent 70%)' }} />
        </div>

        <div className="relative max-w-7xl mx-auto px-6 pt-14 pb-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left */}
            <div>
              <p className="text-[11px] font-semibold tracking-[0.22em] uppercase mb-5 animate-fade-in" style={{ color: '#C8A45D' }}>
                Institutional Credit Intelligence
              </p>
              <h1 className="font-display text-4xl md:text-5xl font-semibold text-white leading-[1.1] mb-5 animate-fade-in-up">
                How Bankable Is<br />
                <span className="gold-shimmer">Your Business?</span>
              </h1>
              <p className="text-sm md:text-base leading-relaxed mb-8 animate-fade-in-up delay-100" style={{ color: '#B7BDC7' }}>
                Upload your financials and instantly understand how lenders, banks, and private credit providers evaluate your business — before you sit across the table from them.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 mb-10 animate-fade-in-up delay-200">
                <Link to="/intake" className="inline-flex items-center justify-center gap-2 font-semibold text-sm px-6 py-3.5 rounded transition-all duration-200" style={{ background: '#C8A45D', color: '#0B1F33' }}>
                  Get My BankGrade™ <ArrowRight size={15} />
                </Link>
                <Link to="/assessment" className="inline-flex items-center justify-center gap-2 text-sm px-6 py-3.5 rounded transition-all duration-200 font-medium border" style={{ borderColor: 'rgba(183,189,199,0.2)', color: '#B7BDC7' }}
                  onMouseEnter={e => { e.currentTarget.style.color = 'white'; e.currentTarget.style.borderColor = 'rgba(183,189,199,0.4)'; }}
                  onMouseLeave={e => { e.currentTarget.style.color = '#B7BDC7'; e.currentTarget.style.borderColor = 'rgba(183,189,199,0.2)'; }}
                >
                  See Sample Report
                </Link>
              </div>

              {/* Stats row */}
              <div className="pt-8 border-t border-white/5 grid grid-cols-2 md:grid-cols-4 gap-5 animate-fade-in-up delay-300">
                {stats.map(s => (
                  <div key={s.label}>
                    <div className="text-xl font-display font-semibold text-white mb-0.5">{s.value}</div>
                    <div className="text-[11px] tracking-wide" style={{ color: '#8A9099' }}>{s.label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right — Dashboard mockup */}
            <div className="animate-fade-in-up delay-200 lg:pl-4">
              <HeroDashboard />
            </div>
          </div>
        </div>
      </section>

      {/* ── How It Works ── */}
      <section id="how-it-works" className="py-14 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-10">
            <p className="text-[11px] font-semibold tracking-[0.2em] uppercase mb-2" style={{ color: '#C8A45D' }}>The Process</p>
            <h2 className="font-display text-3xl font-semibold text-white">How It Works</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((step, i) => (
              <div key={step.num} className="glass-card rounded-xl p-6 flex flex-col gap-4 hover:border-gold-500/20 transition-all duration-300" style={{ borderColor: i === 0 ? 'rgba(200,164,93,0.15)' : undefined }}>
                <div className="flex items-center gap-3">
                  <span className="text-2xl font-display font-bold" style={{ color: '#C8A45D', opacity: 0.7 }}>{step.num}</span>
                  <h3 className="text-sm font-semibold text-white">{step.title}</h3>
                </div>
                <p className="text-xs leading-relaxed" style={{ color: '#8A9099' }}>{step.desc}</p>
                {step.items && (
                  <ul className="space-y-1.5 mt-auto">
                    {step.items.map(item => (
                      <li key={item} className="flex items-start gap-2 text-xs" style={{ color: '#B7BDC7' }}>
                        <span className="mt-1 w-1 h-1 rounded-full flex-shrink-0" style={{ background: '#C8A45D' }} />
                        {item}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Financing Types ── */}
      <section id="solutions" className="py-14 border-t border-white/5" style={{ background: 'rgba(6,13,24,0.3)' }}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-10">
            <p className="text-[11px] font-semibold tracking-[0.2em] uppercase mb-2" style={{ color: '#C8A45D' }}>Capital Markets Coverage</p>
            <h2 className="font-display text-3xl font-semibold text-white">Financing Structures</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-px" style={{ background: 'rgba(183,189,199,0.06)', borderRadius: 12, overflow: 'hidden', border: '1px solid rgba(183,189,199,0.06)' }}>
            {financingTypes.map((f) => (
              <div key={f.label} className="p-6 group cursor-default transition-all duration-200" style={{ background: '#0B1F33' }}
                onMouseEnter={e => e.currentTarget.style.background = 'rgba(16,40,68,0.9)'}
                onMouseLeave={e => e.currentTarget.style.background = '#0B1F33'}
              >
                <div className="w-8 h-8 rounded border flex items-center justify-center mb-4 transition-all duration-200" style={{ borderColor: 'rgba(183,189,199,0.12)', background: 'rgba(6,13,24,0.6)' }}>
                  <f.icon size={14} style={{ color: '#8A9099' }} />
                </div>
                <h3 className="text-sm font-semibold text-white mb-2">{f.label}</h3>
                <p className="text-xs leading-relaxed" style={{ color: '#6B7785' }}>{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Why BANKABLE ── */}
      <section className="py-14 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
            <div>
              <p className="text-[11px] font-semibold tracking-[0.2em] uppercase mb-3" style={{ color: '#C8A45D' }}>Why BANKABLE</p>
              <h2 className="font-display text-3xl font-semibold text-white mb-4">
                Built by people who<br />understand credit.
              </h2>
              <p className="text-sm leading-relaxed mb-4" style={{ color: '#B7BDC7' }}>
                BANKABLE is designed around how real commercial lenders, credit committees, and institutional capital providers actually evaluate companies — not how they describe it in a brochure.
              </p>
              <p className="text-sm leading-relaxed" style={{ color: '#6B7785' }}>
                Our framework mirrors the underwriting standards used by regional banks, money center institutions, direct lenders, and private credit funds evaluating middle market borrowers between $10M and $500M in revenue.
              </p>
              <div className="mt-8">
                <Link to="/intake" className="inline-flex items-center gap-2 text-sm font-semibold" style={{ color: '#C8A45D' }}>
                  Start your BankGrade™ assessment <ArrowRight size={14} />
                </Link>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {pillars.map(p => (
                <div key={p.label} className="glass-card rounded-xl p-6 text-center">
                  <div className="text-2xl font-display font-bold text-white mb-1">{p.value}</div>
                  <div className="text-xs font-medium" style={{ color: '#8A9099' }}>{p.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Trust / Security ── */}
      <section className="py-14 border-t border-white/5" style={{ background: 'rgba(6,13,24,0.35)' }}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center mb-10">
            <p className="text-[11px] font-semibold tracking-[0.2em] uppercase mb-3" style={{ color: '#C8A45D' }}>Data Security</p>
            <h2 className="font-display text-3xl font-semibold text-white mb-4">
              Institutional-grade security.<br />No exceptions.
            </h2>
            <p className="text-sm leading-relaxed" style={{ color: '#B7BDC7' }}>
              Your financial data is encrypted at rest and in transit using institutional-grade standards. Files are stored in isolated, access-controlled environments and never shared with any third party without your explicit written consent.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { icon: Lock, label: '256-bit AES Encryption', desc: 'At rest and in transit' },
              { icon: Shield, label: 'SOC 2 Type II', desc: 'Compliance framework' },
              { icon: CheckCircle, label: 'Zero-Share Default', desc: 'Never shared without consent' },
              { icon: BarChart2, label: 'Institutional Standards', desc: 'Bank-level security protocols' },
            ].map(t => (
              <div key={t.label} className="glass-card rounded-xl p-5 text-center">
                <div className="w-10 h-10 rounded-lg flex items-center justify-center mx-auto mb-3" style={{ background: 'rgba(200,164,93,0.08)', border: '1px solid rgba(200,164,93,0.15)' }}>
                  <t.icon size={16} style={{ color: '#C8A45D' }} />
                </div>
                <h3 className="text-sm font-semibold text-white mb-1">{t.label}</h3>
                <p className="text-xs" style={{ color: '#6B7785' }}>{t.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Closing ── */}
      <section className="py-14 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div>
              <p className="text-white font-semibold text-base mb-1">See your business the way lenders do.</p>
              <p className="text-sm" style={{ color: '#6B7785' }}>Complete a financing profile and receive your BankGrade™ at no cost.</p>
            </div>
            <Link to="/intake" className="flex-shrink-0 inline-flex items-center gap-2 font-semibold text-sm px-6 py-3 rounded transition-all duration-200" style={{ background: '#C8A45D', color: '#0B1F33' }}>
              Get My BankGrade™ <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
