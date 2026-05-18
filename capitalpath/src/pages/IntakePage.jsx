import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, ChevronLeft, Check, ArrowRight } from 'lucide-react';

const steps = ['Company Profile', 'Financials', 'Current Debt', 'Financing Need', 'Summary'];

const industries = [
  'Business Services', 'B2B Software / SaaS', 'Healthcare Services', 'Industrial Distribution',
  'Manufacturing', 'Food & Beverage', 'Building Materials', 'Transportation & Logistics',
  'Media & Technology', 'Consumer Products', 'Financial Services', 'Real Estate', 'Other',
];
const lenders = [
  'Major National Bank (JPM, BofA, WF, Citi)', 'Regional Bank', 'Community Bank',
  'Direct Lender / BDC', 'Credit Union', 'No Current Lender', 'Multiple / Syndicated', 'Other',
];
const structures = [
  'Acquisition Financing', 'Recapitalization', 'Refinancing', 'Growth Capital',
  'Working Capital / ABL', 'Equipment Financing', 'Real Estate', 'Other',
];
const timelines = ['< 30 days', '30–60 days', '60–90 days', '90–180 days', '> 180 days / Planning Stage'];

const initialForm = {
  companyName: '', website: '', state: '', entityType: '', yearFounded: '', employees: '',
  revenue: '', ebitda: '', industry: '', ownershipType: '',
  currentLender: '', currentDebt: '', creditFacility: '', maturityDate: '',
  financingType: '', requestedAmount: '', useOfProceeds: '', timeline: '', narrative: '',
};

const states = ['Alabama','Alaska','Arizona','Arkansas','California','Colorado','Connecticut','Delaware','Florida','Georgia','Idaho','Illinois','Indiana','Iowa','Kansas','Kentucky','Louisiana','Maine','Maryland','Massachusetts','Michigan','Minnesota','Mississippi','Missouri','Montana','Nebraska','Nevada','New Hampshire','New Jersey','New Mexico','New York','North Carolina','North Dakota','Ohio','Oklahoma','Oregon','Pennsylvania','Rhode Island','South Carolina','South Dakota','Tennessee','Texas','Utah','Vermont','Virginia','Washington','West Virginia','Wisconsin','Wyoming'];

export default function IntakePage() {
  const [step, setStep] = useState(0);
  const [form, setForm] = useState(initialForm);
  const [submitted, setSubmitted] = useState(false);

  const update = (f, v) => setForm(prev => ({ ...prev, [f]: v }));

  const Input = ({ field, label, placeholder, type = 'text' }) => (
    <div>
      <label className="block text-xs font-medium mb-1.5" style={{ color: '#8A9099' }}>{label}</label>
      <input type={type} className="cp-input" placeholder={placeholder} value={form[field]} onChange={e => update(field, e.target.value)} />
    </div>
  );
  const Select = ({ field, label, options }) => (
    <div>
      <label className="block text-xs font-medium mb-1.5" style={{ color: '#8A9099' }}>{label}</label>
      <select className="cp-input" value={form[field]} onChange={e => update(field, e.target.value)}>
        <option value="">— Select —</option>
        {options.map(o => <option key={o} value={o}>{o}</option>)}
      </select>
    </div>
  );
  const Textarea = ({ field, label, placeholder, rows = 4 }) => (
    <div>
      <label className="block text-xs font-medium mb-1.5" style={{ color: '#8A9099' }}>{label}</label>
      <textarea className="cp-input resize-none" rows={rows} placeholder={placeholder} value={form[field]} onChange={e => update(field, e.target.value)} />
    </div>
  );

  const stepContent = [
    <div className="grid grid-cols-1 md:grid-cols-2 gap-5" key="s0">
      <Input field="companyName" label="Legal Company Name" placeholder="Meridian Distribution Group, LLC" />
      <Input field="website" label="Website" placeholder="www.company.com" />
      <Select field="state" label="State of Incorporation / HQ" options={states} />
      <Select field="entityType" label="Entity Type" options={['LLC', 'C-Corporation', 'S-Corporation', 'Partnership', 'LLP', 'Sole Proprietorship', 'Other']} />
      <Input field="yearFounded" label="Year Founded" placeholder="2009" type="number" />
      <Select field="employees" label="Number of Employees" options={['1–25', '26–100', '101–250', '251–500', '501–1,000', '1,001–2,500', '2,500+']} />
      <Select field="industry" label="Primary Industry" options={industries} />
      <Select field="ownershipType" label="Ownership Type" options={['Founder / Family Owned', 'Private Equity Backed', 'Management Buyout', 'ESOP', 'Publicly Traded', 'Other']} />
    </div>,

    <div className="grid grid-cols-1 md:grid-cols-2 gap-5" key="s1">
      <div className="md:col-span-2 glass-card rounded-lg p-4" style={{ borderColor: 'rgba(200,164,93,0.12)' }}>
        <p className="text-xs font-semibold mb-1" style={{ color: '#C8A45D' }}>Guidance</p>
        <p className="text-xs" style={{ color: '#8A9099' }}>Enter your most recent full fiscal year or trailing twelve months. All figures in USD. This information generates your BankGrade™ assessment.</p>
      </div>
      <Input field="revenue" label="Annual Revenue (TTM)" placeholder="$42,000,000" />
      <Input field="ebitda" label="Adjusted EBITDA (TTM)" placeholder="$6,800,000" />
      <Select field="revenueGrowth" label="Revenue Growth (YoY)" options={['Declining > 10%', 'Declining 0–10%', 'Flat (±2%)', 'Growing 1–10%', 'Growing 10–25%', 'Growing 25%+']} />
      <Select field="ebitdaMargin" label="EBITDA Margin" options={['< 5%', '5–10%', '10–15%', '15–20%', '20–25%', '> 25%']} />
      <Select field="revenueType" label="Revenue Characteristics" options={['Project / One-time', 'Product Sales', 'Contract / Recurring', 'Subscription (ARR/MRR)', 'Government / Regulated', 'Mixed']} />
      <Select field="customerConcentration" label="Top Customer Revenue Share" options={['< 10%', '10–25%', '25–40%', '40–60%', '> 60%']} />
      <Select field="fy1Revenue" label="Prior Year Revenue (FY-1)" options={['< $10M', '$10–25M', '$25–50M', '$50–100M', '$100–200M', '$200–500M', '> $500M']} />
      <Select field="fy2Revenue" label="Prior Year Revenue (FY-2)" options={['< $10M', '$10–25M', '$25–50M', '$50–100M', '$100–200M', '$200–500M', '> $500M']} />
    </div>,

    <div className="grid grid-cols-1 md:grid-cols-2 gap-5" key="s2">
      <Select field="currentLender" label="Primary Lender / Bank" options={lenders} />
      <Select field="currentDebt" label="Total Existing Debt (Approx.)" options={['None', '< $1M', '$1–5M', '$5–15M', '$15–30M', '$30–75M', '> $75M']} />
      <Select field="creditFacility" label="Type of Current Facility" options={['None', 'Revolving Credit Line', 'Term Loan A', 'Term Loan B', 'Equipment Loan', 'Real Estate Mortgage', 'SBA Loan', 'Multiple Facilities', 'Other']} />
      <Input field="maturityDate" label="Existing Facility Maturity" placeholder="MM/YYYY" />
      <div className="md:col-span-2">
        <Textarea field="debtNotes" label="Additional Debt / Notes" placeholder="Describe any subordinated debt, seller notes, earnouts, or other obligations..." rows={3} />
      </div>
      <Select field="creditHistory" label="Credit History" options={['Clean — no defaults or modifications', 'Minor covenant waiver (resolved)', 'Past amendment / restructure', 'Current issues (explain in narrative)']} />
      <Select field="collateral" label="Primary Collateral Available" options={['Accounts Receivable / Inventory', 'Real Estate', 'Equipment & Machinery', 'Intellectual Property', 'Enterprise Value / Cash Flow', 'Mixed', 'Minimal Tangible Assets']} />
    </div>,

    <div className="grid grid-cols-1 md:grid-cols-2 gap-5" key="s3">
      <Select field="financingType" label="Type of Financing" options={structures} />
      <Input field="requestedAmount" label="Requested Amount ($)" placeholder="$35,000,000" />
      <Select field="timeline" label="Target Close Timeline" options={timelines} />
      <Select field="useOfProceeds" label="Primary Use of Proceeds" options={['Acquisition Purchase Price', 'Refinance Existing Debt', 'Shareholder Liquidity / Dividend Recap', 'Capital Expenditures', 'Organic Working Capital', 'Platform + Add-on Acquisitions', 'Real Estate Purchase', 'Other']} />
      <Select field="sponsorInvolved" label="Private Equity Sponsor Involved?" options={['No — founder / family transaction', 'Yes — lead sponsor', 'Yes — co-investor / minority', 'Evaluating PE partnership']} />
      <Select field="lenderPreference" label="Lender Type Preference" options={['Bank (lowest cost)', 'Direct Lender (speed & flexibility)', 'No preference — show all options', 'Open to insurance / credit fund']} />
      <div className="md:col-span-2">
        <Textarea field="narrative" label="Transaction Narrative / Business Summary" placeholder="Describe the company, the transaction, the strategic rationale, and key credit considerations..." rows={6} />
      </div>
    </div>,

    <div key="s4" className="space-y-4">
      <div className="glass-card rounded-lg p-6">
        <h3 className="text-sm font-semibold text-white mb-4">Financing Profile Summary</h3>
        <div className="grid grid-cols-2 gap-x-8 gap-y-3">
          {[['Company', form.companyName], ['Industry', form.industry], ['Revenue', form.revenue], ['EBITDA', form.ebitda], ['Financing Type', form.financingType], ['Requested Amount', form.requestedAmount], ['Timeline', form.timeline], ['Current Lender', form.currentLender]].map(([k, v]) => (
            <div key={k}>
              <span className="text-xs font-medium" style={{ color: '#6B7785' }}>{k}</span>
              <p className="text-sm text-white mt-0.5">{v || '—'}</p>
            </div>
          ))}
        </div>
      </div>
      {form.narrative && (
        <div className="glass-card rounded-lg p-5">
          <p className="text-xs font-medium mb-2" style={{ color: '#6B7785' }}>Transaction Narrative</p>
          <p className="text-sm leading-relaxed" style={{ color: '#B7BDC7' }}>{form.narrative}</p>
        </div>
      )}
      <div className="glass-card rounded-lg p-4" style={{ borderColor: 'rgba(200,164,93,0.1)' }}>
        <p className="text-xs leading-relaxed" style={{ color: '#8A9099' }}>
          <span className="font-semibold" style={{ color: '#C8A45D' }}>Prototype Notice: </span>
          This intake will not be transmitted to any lender or advisor. Submitting will route you to a sample BankGrade™ Report demonstrating the platform's assessment output.
        </p>
      </div>
    </div>,
  ];

  if (submitted) {
    return (
      <div className="min-h-screen flex items-center justify-center px-6 pt-20" style={{ background: '#0B1F33' }}>
        <div className="text-center max-w-md animate-fade-in-up">
          <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6" style={{ background: 'rgba(200,164,93,0.1)', border: '1px solid rgba(200,164,93,0.25)' }}>
            <Check size={28} style={{ color: '#C8A45D' }} />
          </div>
          <h2 className="font-display text-3xl text-white font-semibold mb-3">Profile Received</h2>
          <p className="text-sm mb-8 leading-relaxed" style={{ color: '#8A9099' }}>
            Your financing profile for <strong className="text-white">{form.companyName || 'your company'}</strong> has been submitted. Your BankGrade™ Report is ready.
          </p>
          <div className="flex gap-3 justify-center">
            <Link to="/assessment" className="font-semibold text-sm px-6 py-3 rounded transition-all flex items-center gap-2" style={{ background: '#C8A45D', color: '#0B1F33' }}>
              View BankGrade™ Report <ArrowRight size={15} />
            </Link>
            <Link to="/upload" className="border font-medium text-sm px-6 py-3 rounded transition-all" style={{ borderColor: 'rgba(183,189,199,0.2)', color: '#B7BDC7' }}>
              Upload Documents
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-24 pb-16 px-6" style={{ background: '#0B1F33' }}>
      <div className="max-w-3xl mx-auto">
        <div className="mb-8">
          <p className="text-[11px] font-semibold tracking-[0.2em] uppercase mb-2" style={{ color: '#C8A45D' }}>Financing Profile</p>
          <h1 className="font-display text-4xl text-white font-semibold">Tell us about your company</h1>
          <p className="text-sm mt-2" style={{ color: '#8A9099' }}>Complete all sections for the most accurate BankGrade™ assessment. Confidential — never shared without consent.</p>
        </div>

        {/* Progress */}
        <div className="flex items-center gap-0 mb-10">
          {steps.map((s, i) => (
            <React.Fragment key={s}>
              <div className="flex items-center gap-2 flex-shrink-0">
                <button onClick={() => i <= step && setStep(i)}
                  className="w-7 h-7 rounded-full flex items-center justify-center text-xs font-semibold transition-all"
                  style={{
                    background: i < step ? 'rgba(200,164,93,0.15)' : i === step ? '#C8A45D' : 'rgba(6,13,24,0.8)',
                    border: i < step ? '1px solid rgba(200,164,93,0.4)' : i === step ? 'none' : '1px solid rgba(183,189,199,0.15)',
                    color: i < step ? '#C8A45D' : i === step ? '#0B1F33' : '#6B7785',
                  }}>
                  {i < step ? <Check size={12} /> : i + 1}
                </button>
                <span className="text-xs hidden sm:block font-medium" style={{ color: i === step ? 'white' : '#4A5568' }}>{s}</span>
              </div>
              {i < steps.length - 1 && (
                <div className="flex-1 h-px mx-2" style={{ background: i < step ? 'rgba(200,164,93,0.25)' : 'rgba(183,189,199,0.08)' }} />
              )}
            </React.Fragment>
          ))}
        </div>

        <div className="glass-card rounded-xl p-6 md:p-8 mb-6 animate-fade-in">
          <h2 className="text-white font-semibold mb-6 flex items-center gap-2.5">
            <span className="w-6 h-6 rounded-full flex items-center justify-center text-[11px] font-bold" style={{ background: 'rgba(200,164,93,0.1)', border: '1px solid rgba(200,164,93,0.25)', color: '#C8A45D' }}>{step + 1}</span>
            {steps[step]}
          </h2>
          {stepContent[step]}
        </div>

        <div className="flex justify-between items-center">
          <button onClick={() => setStep(s => Math.max(0, s - 1))} disabled={step === 0}
            className="flex items-center gap-2 text-sm font-medium transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
            style={{ color: '#8A9099' }}>
            <ChevronLeft size={16} /> Previous
          </button>
          {step < steps.length - 1 ? (
            <button onClick={() => setStep(s => Math.min(steps.length - 1, s + 1))}
              className="flex items-center gap-2 font-semibold text-sm px-6 py-2.5 rounded transition-all"
              style={{ background: '#C8A45D', color: '#0B1F33' }}>
              Continue <ChevronRight size={16} />
            </button>
          ) : (
            <button onClick={() => setSubmitted(true)}
              className="flex items-center gap-2 font-semibold text-sm px-6 py-2.5 rounded transition-all"
              style={{ background: '#C8A45D', color: '#0B1F33' }}>
              Generate My BankGrade™ <ArrowRight size={16} />
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
