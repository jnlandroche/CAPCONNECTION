import React, { useState } from 'react';
import { mockBorrowers, pipelineStats } from '../data/mockData';
import { BarChart2, Search, ChevronRight, Bell, Settings, FileText, AlertCircle } from 'lucide-react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Cell } from 'recharts';

const stageStyles = {
  'Lender Outreach': { bg: 'rgba(200,164,93,0.08)', border: 'rgba(200,164,93,0.25)', text: '#C8A45D' },
  'Intake Complete': { bg: 'rgba(183,189,199,0.06)', border: 'rgba(183,189,199,0.2)', text: '#B7BDC7' },
  'Term Sheet Review': { bg: 'rgba(34,197,94,0.07)', border: 'rgba(34,197,94,0.2)', text: '#4ADE80' },
  'Document Review': { bg: 'rgba(245,158,11,0.07)', border: 'rgba(245,158,11,0.2)', text: '#FBBF24' },
  'Assessment': { bg: 'rgba(168,130,200,0.07)', border: 'rgba(168,130,200,0.2)', text: '#C084FC' },
};

const gradeColor = (score) =>
  score >= 85 ? '#4ADE80' : score >= 75 ? '#C8A45D' : score >= 65 ? '#FBBF24' : '#F87171';

const industryData = [
  { name: 'Ind. Dist.', value: 55 },
  { name: 'Healthcare', value: 38 },
  { name: 'SaaS', value: 22 },
  { name: 'Bldg Mat.', value: 70 },
  { name: 'F&B', value: 45 },
];

const nextActions = [
  { borrower: 'Meridian Distribution', action: 'Follow up with Arcadia — term sheet expires in 6 days', priority: 'High' },
  { borrower: 'Apex Technology', action: 'Request updated Q3 financials before Pinnacle call', priority: 'High' },
  { borrower: 'Cascade Healthcare', action: 'Send management presentation to First Regional', priority: 'Medium' },
  { borrower: 'Ironwood Building', action: 'Schedule QoE kick-off call with advisors', priority: 'Low' },
];

const priorityStyle = {
  High:   { bg: 'rgba(239,68,68,0.08)', border: 'rgba(239,68,68,0.2)', text: '#F87171' },
  Medium: { bg: 'rgba(245,158,11,0.08)', border: 'rgba(245,158,11,0.2)', text: '#FBBF24' },
  Low:    { bg: 'rgba(183,189,199,0.06)', border: 'rgba(183,189,199,0.15)', text: '#8A9099' },
};

const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload?.length) {
    return (
      <div className="rounded-lg p-3 text-xs" style={{ background: '#0B1F33', border: '1px solid rgba(183,189,199,0.12)' }}>
        <p className="mb-1" style={{ color: '#8A9099' }}>{label}</p>
        <p className="font-semibold" style={{ color: '#C8A45D' }}>${payload[0].value}M requested</p>
      </div>
    );
  }
  return null;
};

export default function DashboardPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [industryFilter, setIndustryFilter] = useState('All');

  const industries = ['All', ...new Set(mockBorrowers.map(b => b.industry))];
  const filtered = mockBorrowers.filter(b =>
    (industryFilter === 'All' || b.industry === industryFilter) &&
    (b.company.toLowerCase().includes(searchTerm.toLowerCase()) || b.industry.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  return (
    <div className="min-h-screen pt-16" style={{ background: '#0B1F33' }}>
      {/* Top sub-bar */}
      <div className="px-6 py-2.5 flex items-center justify-between border-b" style={{ background: 'rgba(6,13,24,0.7)', borderColor: 'rgba(183,189,199,0.07)' }}>
        <div className="flex items-center gap-3">
          <span className="text-[11px] font-semibold tracking-[0.18em] uppercase" style={{ color: '#C8A45D' }}>BANKABLE Advisor Portal</span>
          <span style={{ color: 'rgba(183,189,199,0.2)' }}>·</span>
          <span className="text-[11px] font-medium" style={{ color: '#525D6A' }}>J. Harmon — Senior Advisor</span>
        </div>
        <div className="flex items-center gap-3">
          <button className="relative w-7 h-7 flex items-center justify-center transition-colors" style={{ color: '#525D6A' }}>
            <Bell size={15} />
            <span className="absolute top-0.5 right-0.5 w-1.5 h-1.5 rounded-full" style={{ background: '#C8A45D' }} />
          </button>
          <button className="w-7 h-7 flex items-center justify-center transition-colors" style={{ color: '#525D6A' }}>
            <Settings size={15} />
          </button>
          <div className="w-7 h-7 rounded-full flex items-center justify-center text-[11px] font-bold" style={{ background: 'rgba(200,164,93,0.1)', border: '1px solid rgba(200,164,93,0.25)', color: '#C8A45D' }}>JH</div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-8">
        {/* KPI stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {pipelineStats.map((stat) => (
            <div key={stat.label} className="glass-card rounded-xl p-5">
              <p className="text-[10px] font-semibold uppercase tracking-[0.15em] mb-2" style={{ color: '#525D6A' }}>{stat.label}</p>
              <p className="text-3xl font-display text-white font-semibold">{stat.value}</p>
              <p className="text-[11px] font-medium mt-1" style={{ color: '#C8A45D' }}>{stat.delta}</p>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 mb-8">
          {/* Chart */}
          <div className="lg:col-span-2 glass-card rounded-xl p-6">
            <h2 className="text-sm font-semibold text-white mb-5 flex items-center gap-2">
              <BarChart2 size={14} style={{ color: '#C8A45D' }} /> Deal Pipeline by Industry ($M Requested)
            </h2>
            <ResponsiveContainer width="100%" height={180}>
              <BarChart data={industryData} barSize={28}>
                <XAxis dataKey="name" tick={{ fill: '#525D6A', fontSize: 11, fontFamily: 'Poppins' }} axisLine={false} tickLine={false} />
                <YAxis tick={{ fill: '#525D6A', fontSize: 11, fontFamily: 'Poppins' }} axisLine={false} tickLine={false} tickFormatter={v => `$${v}M`} />
                <Tooltip content={<CustomTooltip />} cursor={{ fill: 'rgba(200,164,93,0.04)' }} />
                <Bar dataKey="value" radius={[3, 3, 0, 0]}>
                  {industryData.map((_, i) => (
                    <Cell key={i} fill={i === 0 ? '#C8A45D' : 'rgba(183,189,199,0.08)'} />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>

          {/* Actions */}
          <div className="glass-card rounded-xl p-6">
            <h2 className="text-sm font-semibold text-white mb-4 flex items-center gap-2">
              <AlertCircle size={14} style={{ color: '#C8A45D' }} /> Priority Actions
            </h2>
            <div className="space-y-3">
              {nextActions.map((a, i) => {
                const ps = priorityStyle[a.priority];
                return (
                  <div key={i} className="p-3 rounded-lg" style={{ background: 'rgba(6,13,24,0.5)', border: '1px solid rgba(183,189,199,0.06)' }}>
                    <div className="flex items-start justify-between gap-2 mb-1">
                      <p className="text-[11px] font-semibold text-white">{a.borrower}</p>
                      <span className="text-[9px] font-semibold px-1.5 py-0.5 rounded flex-shrink-0" style={{ background: ps.bg, border: `1px solid ${ps.border}`, color: ps.text }}>{a.priority}</span>
                    </div>
                    <p className="text-[11px] leading-snug" style={{ color: '#6B7785' }}>{a.action}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Client pipeline table */}
        <div className="glass-card rounded-xl overflow-hidden">
          <div className="p-5 border-b border-white/5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
            <h2 className="text-sm font-semibold text-white flex items-center gap-2">
              <FileText size={14} style={{ color: '#C8A45D' }} /> Active Client Pipeline
              <span className="text-[11px] font-normal" style={{ color: '#C8A45D' }}>({filtered.length})</span>
            </h2>
            <div className="flex items-center gap-2">
              <select className="cp-input text-xs py-1.5 w-auto" value={industryFilter} onChange={e => setIndustryFilter(e.target.value)}>
                {industries.map(i => <option key={i} value={i}>{i}</option>)}
              </select>
              <div className="relative">
                <Search size={12} className="absolute left-2.5 top-1/2 -translate-y-1/2" style={{ color: '#525D6A' }} />
                <input type="text" placeholder="Search..." className="cp-input text-xs pl-7 py-1.5 w-44" value={searchTerm} onChange={e => setSearchTerm(e.target.value)} />
              </div>
            </div>
          </div>

          {/* Desktop */}
          <div className="hidden md:block overflow-x-auto">
            <table className="w-full data-table">
              <thead>
                <tr>
                  {['Company', 'Industry', 'Revenue', 'EBITDA', 'Ask', 'Type', 'BankGrade™', 'Stage', 'Advisor', 'Last Activity', ''].map(h => (
                    <th key={h}>{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {filtered.map(b => {
                  const ss = stageStyles[b.stage] || stageStyles['Intake Complete'];
                  return (
                    <tr key={b.id} className="cursor-pointer">
                      <td>
                        <p className="text-white font-semibold text-sm">{b.company}</p>
                        <p className="text-[10px] font-mono mt-0.5" style={{ color: '#525D6A' }}>{b.id}</p>
                      </td>
                      <td className="text-xs" style={{ color: '#8A9099' }}>{b.industry}</td>
                      <td className="font-mono text-xs text-white">{b.revenue}</td>
                      <td className="font-mono text-xs text-white">{b.ebitda}</td>
                      <td className="font-mono text-xs font-semibold" style={{ color: '#C8A45D' }}>{b.amount}</td>
                      <td className="text-xs max-w-[100px]" style={{ color: '#8A9099' }}>{b.type}</td>
                      <td>
                        <div className="flex items-center gap-1.5">
                          <span className="text-xl font-display font-bold" style={{ color: gradeColor(b.score) }}>{b.grade}</span>
                          <span className="text-[10px] font-medium" style={{ color: '#525D6A' }}>{b.scoreLabel}</span>
                        </div>
                      </td>
                      <td>
                        <span className="text-[10px] font-semibold px-2 py-0.5 rounded" style={{ background: ss.bg, border: `1px solid ${ss.border}`, color: ss.text }}>{b.stage}</span>
                      </td>
                      <td className="text-xs font-medium" style={{ color: '#6B7785' }}>{b.advisor}</td>
                      <td className="text-[11px]" style={{ color: '#525D6A' }}>{b.lastActivity}</td>
                      <td><ChevronRight size={14} style={{ color: '#4A5568' }} /></td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>

          {/* Mobile */}
          <div className="md:hidden divide-y" style={{ borderColor: 'rgba(183,189,199,0.05)' }}>
            {filtered.map(b => {
              const ss = stageStyles[b.stage] || stageStyles['Intake Complete'];
              return (
                <div key={b.id} className="p-4">
                  <div className="flex justify-between items-start mb-3">
                    <div>
                      <p className="text-white font-semibold text-sm">{b.company}</p>
                      <p className="text-xs mt-0.5" style={{ color: '#525D6A' }}>{b.industry}</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-xl font-display font-bold" style={{ color: gradeColor(b.score) }}>{b.grade}</span>
                      <span className="text-[10px] font-semibold px-2 py-0.5 rounded" style={{ background: ss.bg, border: `1px solid ${ss.border}`, color: ss.text }}>{b.stage}</span>
                    </div>
                  </div>
                  <div className="grid grid-cols-3 gap-2">
                    {[['Revenue', b.revenue], ['EBITDA', b.ebitda], ['Ask', b.amount]].map(([k, v]) => (
                      <div key={k}>
                        <p className="text-[10px] font-medium uppercase tracking-wide" style={{ color: '#525D6A' }}>{k}</p>
                        <p className="text-xs font-mono text-white mt-0.5">{v}</p>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
