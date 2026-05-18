import React, { useState } from 'react';
import { mockBorrowers, pipelineStats } from '../data/mockData';
import { BarChart2, TrendingUp, Filter, Search, ChevronRight, Bell, Settings, ArrowUpRight, Users, FileText, Clock, AlertCircle } from 'lucide-react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Cell } from 'recharts';

const stageColors = {
  'Lender Outreach': 'text-blue-400 bg-blue-500/10 border-blue-500/25',
  'Intake Complete': 'text-slate-400 bg-slate-500/10 border-slate-500/25',
  'Term Sheet Review': 'text-green-400 bg-green-500/10 border-green-500/25',
  'Document Review': 'text-amber-400 bg-amber-500/10 border-amber-500/25',
  'Assessment': 'text-purple-400 bg-purple-500/10 border-purple-500/25',
};

const scoreColor = (s) => s >= 80 ? 'text-green-400' : s >= 70 ? 'text-gold-400' : 'text-amber-500';

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
  { borrower: 'Ironwood Building', action: 'Schedule QoE kick-off call with advisors', priority: 'Medium' },
  { borrower: 'Stratos Food', action: 'Obtain updated borrowing base certificate', priority: 'Low' },
];

const priorityColors = { High: 'text-red-400 bg-red-500/10 border-red-500/25', Medium: 'text-amber-400 bg-amber-500/10 border-amber-500/25', Low: 'text-slate-400 bg-slate-500/10 border-slate-500/25' };

const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-navy-900 border border-navy-700 rounded-lg p-3 text-xs font-mono">
        <p className="text-slate-400 mb-1">{label}</p>
        <p className="text-gold-400">${payload[0].value}M requested</p>
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
    <div className="min-h-screen bg-navy-950 pt-16">
      {/* Dashboard top bar */}
      <div className="bg-navy-900/80 border-b border-navy-800/60 px-6 py-3 flex items-center justify-between">
        <div>
          <span className="text-xs font-mono text-gold-400 tracking-[0.2em] uppercase">ADVISOR PORTAL</span>
          <span className="text-slate-600 mx-3">·</span>
          <span className="text-xs font-mono text-slate-500">J. Harmon — Senior Advisor</span>
        </div>
        <div className="flex items-center gap-3">
          <button className="w-7 h-7 flex items-center justify-center text-slate-500 hover:text-white transition-colors relative">
            <Bell size={15} />
            <span className="absolute top-0.5 right-0.5 w-1.5 h-1.5 bg-gold-400 rounded-full" />
          </button>
          <button className="w-7 h-7 flex items-center justify-center text-slate-500 hover:text-white transition-colors">
            <Settings size={15} />
          </button>
          <div className="w-7 h-7 rounded-full bg-gold-400/20 border border-gold-400/30 flex items-center justify-center text-[11px] font-mono text-gold-400">JH</div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-8">
        {/* KPI Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {pipelineStats.map((stat) => (
            <div key={stat.label} className="glass-card rounded-xl p-5">
              <p className="text-xs font-mono text-slate-500 uppercase tracking-wider mb-2">{stat.label}</p>
              <p className="text-3xl font-display text-white font-500">{stat.value}</p>
              <p className="text-xs text-gold-400 font-mono mt-1">{stat.delta}</p>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
          {/* Pipeline by industry chart */}
          <div className="lg:col-span-2 glass-card rounded-xl p-6">
            <h2 className="text-xs font-mono text-slate-400 tracking-[0.15em] uppercase mb-5 flex items-center gap-2">
              <BarChart2 size={14} className="text-gold-400" /> Deal Pipeline by Industry ($M Requested)
            </h2>
            <ResponsiveContainer width="100%" height={180}>
              <BarChart data={industryData} barSize={28}>
                <XAxis dataKey="name" tick={{ fill: '#64748b', fontSize: 11, fontFamily: 'DM Mono' }} axisLine={false} tickLine={false} />
                <YAxis tick={{ fill: '#64748b', fontSize: 11, fontFamily: 'DM Mono' }} axisLine={false} tickLine={false} tickFormatter={v => `$${v}M`} />
                <Tooltip content={<CustomTooltip />} cursor={{ fill: 'rgba(37,77,148,0.15)' }} />
                <Bar dataKey="value" radius={[3, 3, 0, 0]}>
                  {industryData.map((_, i) => (
                    <Cell key={i} fill={i === 0 ? '#c9a84c' : '#1e3a6e'} />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>

          {/* Next best actions */}
          <div className="glass-card rounded-xl p-6">
            <h2 className="text-xs font-mono text-slate-400 tracking-[0.15em] uppercase mb-4 flex items-center gap-2">
              <AlertCircle size={14} className="text-gold-400" /> Next-Best Actions
            </h2>
            <div className="space-y-3">
              {nextActions.slice(0, 4).map((a, i) => (
                <div key={i} className="p-3 bg-navy-900/60 rounded-lg border border-navy-800/50">
                  <div className="flex items-start justify-between gap-2 mb-1">
                    <p className="text-[11px] text-white font-semibold">{a.borrower}</p>
                    <span className={`text-[9px] font-mono px-1.5 py-0.5 rounded border flex-shrink-0 ${priorityColors[a.priority]}`}>{a.priority}</span>
                  </div>
                  <p className="text-[11px] text-slate-400 leading-snug">{a.action}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Borrower table */}
        <div className="glass-card rounded-xl overflow-hidden">
          <div className="p-5 border-b border-navy-800/50 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
            <h2 className="text-xs font-mono text-slate-400 tracking-[0.15em] uppercase flex items-center gap-2">
              <FileText size={14} className="text-gold-400" /> Active Borrower Requests
              <span className="text-gold-400 ml-1">({filtered.length})</span>
            </h2>
            <div className="flex items-center gap-2">
              {/* Industry filter */}
              <select
                className="cp-input text-xs py-1.5 w-auto"
                value={industryFilter}
                onChange={e => setIndustryFilter(e.target.value)}
              >
                {industries.map(i => <option key={i} value={i}>{i}</option>)}
              </select>
              {/* Search */}
              <div className="relative">
                <Search size={13} className="absolute left-2.5 top-1/2 -translate-y-1/2 text-slate-500" />
                <input
                  type="text"
                  placeholder="Search..."
                  className="cp-input text-xs pl-7 py-1.5 w-44"
                  value={searchTerm}
                  onChange={e => setSearchTerm(e.target.value)}
                />
              </div>
            </div>
          </div>

          {/* Desktop table */}
          <div className="hidden md:block overflow-x-auto">
            <table className="w-full data-table">
              <thead>
                <tr>
                  <th>Company</th>
                  <th>Industry</th>
                  <th>Revenue</th>
                  <th>EBITDA</th>
                  <th>Ask</th>
                  <th>Type</th>
                  <th>Capital Fit</th>
                  <th>Stage</th>
                  <th>Advisor</th>
                  <th>Last Activity</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {filtered.map((b) => (
                  <tr key={b.id} className="cursor-pointer">
                    <td>
                      <div>
                        <p className="text-white font-semibold text-sm">{b.company}</p>
                        <p className="text-slate-600 text-[10px] font-mono">{b.id}</p>
                      </div>
                    </td>
                    <td className="text-xs text-slate-400">{b.industry}</td>
                    <td className="font-mono text-xs text-white">{b.revenue}</td>
                    <td className="font-mono text-xs text-white">{b.ebitda}</td>
                    <td className="font-mono text-xs text-gold-400 font-semibold">{b.amount}</td>
                    <td className="text-xs text-slate-400 max-w-[100px]">{b.type}</td>
                    <td>
                      <div className="flex items-center gap-2">
                        <span className={`text-lg font-display font-600 ${scoreColor(b.score)}`}>{b.score}</span>
                        <span className="text-[10px] text-slate-500 font-mono">{b.scoreLabel}</span>
                      </div>
                    </td>
                    <td>
                      <span className={`text-[10px] font-mono px-2 py-0.5 rounded border ${stageColors[b.stage] || 'text-slate-400 bg-slate-500/10 border-slate-500/25'}`}>
                        {b.stage}
                      </span>
                    </td>
                    <td className="text-xs text-slate-500">{b.advisor}</td>
                    <td className="text-[11px] text-slate-500 font-mono">{b.lastActivity}</td>
                    <td>
                      <ChevronRight size={14} className="text-slate-600" />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Mobile cards */}
          <div className="md:hidden divide-y divide-navy-800/50">
            {filtered.map(b => (
              <div key={b.id} className="p-4">
                <div className="flex justify-between items-start mb-3">
                  <div>
                    <p className="text-white font-semibold text-sm">{b.company}</p>
                    <p className="text-slate-500 text-xs">{b.industry}</p>
                  </div>
                  <span className={`text-[10px] font-mono px-2 py-0.5 rounded border ${stageColors[b.stage] || ''}`}>{b.stage}</span>
                </div>
                <div className="grid grid-cols-3 gap-2">
                  {[['Revenue', b.revenue], ['EBITDA', b.ebitda], ['Ask', b.amount]].map(([k, v]) => (
                    <div key={k}>
                      <p className="text-[10px] font-mono text-slate-500 uppercase">{k}</p>
                      <p className="text-xs font-mono text-white">{v}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
