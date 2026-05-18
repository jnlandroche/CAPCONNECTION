import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
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

export default function IntakePage() {
  const [step, setStep] = useState(0);
  const [form, setForm] = useState(initialForm);
  const [submitted, setSubmitted] = useState(false);
  const navigate = useNavigate();

  const update = (field, value) => setForm(f => ({ ...f, [field]: value }));

  const Input = ({ field, label, placeholder, type = 'text' }) => (
    <div>
      <label className="block text-xs font-medium text-slate-400 mb-1.5">{label}</label>
      <input
        type={type}
        className="cp-input"
        placeholder={placeholder}
        value={form[field]}
        onChange={e => update(field, e.target.value)}
      />
    </div>
  );

  const Select = ({ field, label, options }) => (
    <div>
      <label className="block text-xs font-medium text-slate-400 mb-1.5">{label}</label>
      <select className="cp-input" value={form[field]} onChange={e => update(field, e.target.value)}>
        <option value="">— Select —</option>
        {options.map(o => <option key={o} value={o}>{o}</option>)}
      </select>
    </div>
  );

  const Textarea = ({ field, label, placeholder, rows = 4 }) => (
    <div>
      <label className="block text-xs font-medium text-slate-400 mb-1.5">{label}</label>
      <textarea
        className="cp-input resize-none"
        rows={rows}
        placeholder={placeholder}
        value={form[field]}
        onChange={e => update(field, e.target.value)}
      />
    </div>
  );

  const stepContent = [
    // Step 0: Company Profile
    <div className="grid grid-cols-1 md:grid-cols-2 gap-5" key="step0">
      <Input field="companyName" label="Legal Company Name" placeholder="Meridian Distribution Group, LLC" />
      <Input field="website" label="Website" placeholder="www.company.com" />
      <Select field="state" label="State of Incorporation / HQ" options={['Alabama','Alaska','Arizona','Arkansas','California','Colorado','Connecticut','Delaware','Florida','Georgia','Idaho','Illinois','Indiana','Iowa','Kansas','Kentucky','Louisiana','Maine','Maryland','Massachusetts','Michigan','Minnesota','Mississippi','Missouri','Montana','Nebraska','Nevada','New Hampshire','New Jersey','New Mexico','New York','North Carolina','North Dakota','Ohio','Oklahoma','Oregon','Pennsylvania','Rhode Island','South Carolina','South Dakota','Tennessee','Texas','Utah','Vermont','Virginia','Washington','West Virginia','Wisconsin','Wyoming']} />
      <Select field="entityType" label="Entity Type" options={['LLC', 'C-Corporation', 'S-Corporation', 'Partnership', 'LLP', 'Sole Proprietorship', 'Other']} />
      <Input field="yearFounded" label="Year Founded" placeholder="2009" type="number" />
      <Select field="employees" label="Number of Employees" options={['1–25', '26–100', '101–250', '251–500', '501–1,000', '1,001–2,500', '2,500+']} />
      <Select field="industry" label="Primary Industry" options={industries} />
      <Select field="ownershipType" label="Ownership Type" options={['Founder / Family Owned', 'Private Equity Backed', 'Management Buyout', 'ESOP', 'Publicly Traded', 'Other']} />
    </div>,

    // Step 1: Financials
    <div className="grid grid-cols-1 md:grid-cols-2 gap-5" key="step1">
      <div className="md:col-span-2 glass-card rounded-lg p-4 border-blue-500/15">
        <p className="text-xs font-semibold text-blue-400 mb-1">Guidance</p>
        <p className="text-xs text-slate-400">Enter your most recent full fiscal year (or trailing twelve months). All figures in USD. This information is used to generate your BankGrade assessment.</p>
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

    // Step 2: Current Debt
    <div className="grid grid-cols-1 md:grid-cols-2 gap-5" key="step2">
      <Select field="currentLender" label="Primary Lender / Bank" options={lenders} />
      <Select field="currentDebt" label="Total Existing Debt (Approx.)" options={['None', '< $1M', '$1–5M', '$5–15M', '$15–30M', '$30–75M', '> $75M']} />
      <Select field="creditFacility" label="Type of Current Facility" options={['None', 'Revolving Credit Line', 'Term Loan A', 'Term Loan B', 'Equipment Loan', 'Real Estate Mortgage', 'SBA Loan', 'Multiple Facilities', 'Other']} />
      <Input field="maturityDate" label="Existing Facility Maturity" placeholder="MM/YYYY" />
      <div className="md:col-span-2">
        <Textarea
          field="debtNotes"
          label="Additional Debt / Notes"
          placeholder="Describe any subordinated debt, seller notes, earnouts, or other obligations we should be aware of..."
          rows={3}
        />
      </div>
      <Select field="creditHistory" label="Credit History" options={['Clean — no defaults or modifications', 'Minor covenant waiver (resolved)', 'Past amendment / restructure', 'Current issues (explain in narrative)']} />
      <Select field="collateral" label="Primary Collateral Available" options={['Accounts Receivable / Inventory', 'Real Estate', 'Equipment & Machinery', 'Intellectual Property', 'Enterprise Value / Cash Flow', 'Mixed', 'Minimal Tangible Assets']} />
    </div>,

    // Step 3: Financing Need
    <div className="grid grid-cols-1 md:grid-cols-2 gap-5" key="step3">
      <Select field="financingType" label="Type of Financing" options={structures} />
      <Input field="requestedAmount" label="Requested Amount ($)" placeholder="$35,000,000" />
      <Select field="timeline" label="Target Close Timeline" options={timelines} />
      <Select field="useOfProceeds" label="Primary Use of Proceeds" options={['Acquisition Purchase Price', 'Refinance Existing Debt', 'Shareholder Liquidity / Dividend Recap', 'Capital Expenditures', 'Organic Working Capital', 'Platform + Add-on Acquisitions', 'Real Estate Purchase', 'Other']} />
      <Select field="sponsorInvolved" label="Private Equity Sponsor Involved?" options={['No — founder / family transaction', 'Yes — lead sponsor', 'Yes — co-investor / minority', 'Evaluating PE partnership']} />
      <Select field="lenderPreference" label="Lender Type Preference" options={['Bank (lowest cost)', 'Direct Lender (speed & flexibility)', 'No preference — show all options', 'Open to insurance / credit fund']} />
      <div className="md:col-span-2">
        <Textarea
          field="narrative"
          label="Transaction Narrative / Business Summary"
          placeholder="Describe the company, the transaction, the strategic rationale, and any key credit considerations we should understand before preparing your BankGrade assessment..."
          rows={6}
        />
      </div>
    </div>,

    // Step 4: Summary
    <div key="step4" className="space-y-4">
      <div className="glass-card rounded-lg p-6">
        <h3 className="text-sm font-semibold text-white mb-4">Financing Profile Summary</h3>
        <div className="grid grid-cols-2 gap-x-8 gap-y-3">
          {[
            ['Company', form.companyName || '—'],
            ['Industry', form.industry || '—'],
            ['Revenue', form.revenue || '—'],
            ['EBITDA', form.ebitda || '—'],
            ['Financing Type', form.financingType || '—'],
            ['Requested Amount', form.requestedAmount || '—'],
            ['Timeline', form.timeline || '—'],
            ['Current Lender', form.currentLender || '—'],
          ].map(([k, v]) => (
            <div key={k}>
              <span className="text-xs font-medium text-slate-500">{k}</span>
              <p className="text-sm text-white mt-0.5">{v}</p>
            </div>
          ))}
        </div>
      </div>
      {form.narrative && (
        <div className="glass-card rounded-lg p-5">
          <p className="text-xs font-medium text-slate-500 mb-2">Transaction Narrative</p>
          <p className="text-sm text-slate-300 leading-relaxed">{form.narrative}</p>
        </div>
      )}
      <div className="glass-card rounded-lg p-4 border-blue-500/20">
        <p className="text-xs text-slate-400 leading-relaxed">
          <span className="text-blue-400 font-semibold">Prototype Notice: </span>
          This intake will not be transmitted to any lender or advisor. Submitting will route you to a sample BankGrade Report demonstrating the platform's assessment output.
        </p>
      </div>
    </div>,
  ];

  if (submitted) {
    return (
      <div className="min-h-screen flex items-center justify-center px-6 pt-20">
        <div className="text-center max-w-md animate-fade-in-up">
          <div className="w-16 h-16 rounded-full bg-green-500/15 border border-green-500/30 flex items-center justify-center mx-auto mb-6">
            <Check size={28} className="text-green-400" />
          </div>
          <h2 className="font-display text-3xl text-white font-semibold mb-3">Financing Profile Received</h2>
          <p className="text-slate-400 text-sm mb-8 leading-relaxed">
            Your financing profile for <strong className="text-white">{form.companyName || 'your company'}</strong> has been submitted. Your BankGrade Report is ready.
          </p>
          <div className="flex gap-3 justify-center">
            <Link to="/assessment" className="bg-blue-500 hover:bg-blue-400 text-white font-semibold text-sm px-6 py-3 rounded-md transition-all flex items-center gap-2">
              View BankGrade Report <ArrowRight size={15} />
            </Link>
            <Link to="/upload" className="border border-white/12 text-slate-300 hover:text-white text-sm px-6 py-3 rounded-md transition-all font-medium">
              Upload Documents
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-24 pb-16 px-6">
      <div className="max-w-3xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <p className="text-xs font-semibold text-blue-400 tracking-wide uppercase mb-2">Financing Profile</p>
          <h1 className="font-display text-4xl text-white font-semibold">Tell us about your company</h1>
          <p className="text-slate-400 text-sm mt-2">Complete all sections for the most accurate bankability assessment. Confidential — never shared without your consent.</p>
        </div>

        {/* Progress */}
        <div className="flex items-center gap-0 mb-10">
          {steps.map((s, i) => (
            <React.Fragment key={s}>
              <div className="flex items-center gap-2 flex-shrink-0">
                <button
                  onClick={() => i <= step && setStep(i)}
                  className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-semibold transition-all ${
                    i < step ? 'bg-green-500/20 border border-green-500/50 text-green-400' :
                    i === step ? 'bg-blue-500 text-white' :
                    'bg-navy-800 border border-navy-700 text-slate-500'
                  }`}
                >
                  {i < step ? <Check size={12} /> : i + 1}
                </button>
                <span className={`text-xs hidden sm:block font-medium ${i === step ? 'text-white' : 'text-slate-600'}`}>
                  {s}
                </span>
              </div>
              {i < steps.length - 1 && (
                <div className={`flex-1 h-px mx-2 ${i < step ? 'bg-green-500/30' : 'bg-navy-800'}`} />
              )}
            </React.Fragment>
          ))}
        </div>

        {/* Step card */}
        <div className="glass-card rounded-xl p-6 md:p-8 mb-6 animate-fade-in">
          <h2 className="text-white font-semibold mb-6 flex items-center gap-2.5">
            <span className="w-6 h-6 rounded-full bg-blue-500/15 border border-blue-500/30 flex items-center justify-center text-[11px] font-bold text-blue-400">{step + 1}</span>
            {steps[step]}
          </h2>
          {stepContent[step]}
        </div>

        {/* Navigation */}
        <div className="flex justify-between items-center">
          <button
            onClick={() => setStep(s => Math.max(0, s - 1))}
            disabled={step === 0}
            className="flex items-center gap-2 text-sm text-slate-400 hover:text-white disabled:opacity-30 disabled:cursor-not-allowed transition-colors font-medium"
          >
            <ChevronLeft size={16} /> Previous
          </button>
          {step < steps.length - 1 ? (
            <button
              onClick={() => setStep(s => Math.min(steps.length - 1, s + 1))}
              className="flex items-center gap-2 bg-blue-500 hover:bg-blue-400 text-white font-semibold text-sm px-6 py-2.5 rounded-md transition-all"
            >
              Continue <ChevronRight size={16} />
            </button>
          ) : (
            <button
              onClick={() => setSubmitted(true)}
              className="flex items-center gap-2 bg-blue-500 hover:bg-blue-400 text-white font-semibold text-sm px-6 py-2.5 rounded-md transition-all shadow-lg shadow-blue-500/20"
            >
              Generate My BankGrade <ArrowRight size={16} />
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
