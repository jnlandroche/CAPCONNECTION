import React, { useState } from 'react';
import { mockLenders } from '../data/mockData';
import { ArrowUpDown, Filter, Download, ChevronDown } from 'lucide-react';

const statusStyles = {
  'Term Sheet': 'bg-green-500/15 text-green-400 border-green-500/30',
  'Diligence': 'bg-amber-500/15 text-amber-400 border-amber-500/30',
  'Indicative': 'bg-blue-500/15 text-blue-400 border-blue-500/30',
  'Passed': 'bg-red-500/15 text-red-400 border-red-500/30',
};

export default function LendersPage() {
  const [selected, setSelected] = useState(null);
  const [filter, setFilter] = useState('All');

  const statuses = ['All', 'Term Sheet', 'Diligence', 'Indicative', 'Passed'];
  const filtered = filter === 'All' ? mockLenders : mockLenders.filter(l => l.status === filter);

  return (
    <div className="min-h-screen pt-24 pb-16 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
          <div>
            <p className="text-xs font-mono text-gold-400 tracking-[0.2em] uppercase mb-2">LENDER RESPONSE TRACKING</p>
            <h1 className="font-display text-4xl text-white font-500">Term Sheet Comparison</h1>
            <p className="text-slate-400 text-sm mt-1.5">Meridian Distribution Group · $55M Senior Financing · Active Outreach</p>
          </div>
          <div className="flex items-center gap-2">
            <button className="flex items-center gap-2 text-xs text-slate-400 hover:text-white border border-navy-700 hover:border-navy-600 px-3 py-2 rounded transition-all font-mono">
              <Download size={13} /> Export
            </button>
          </div>
        </div>

        {/* Filter tabs */}
        <div className="flex items-center gap-1 mb-6 bg-navy-900/50 border border-navy-800 rounded-lg p-1 w-fit">
          {statuses.map(s => (
            <button
              key={s}
              onClick={() => setFilter(s)}
              className={`px-3.5 py-1.5 rounded text-xs font-mono transition-all ${
                filter === s ? 'bg-navy-700 text-white' : 'text-slate-500 hover:text-slate-300'
              }`}
            >
              {s}
            </button>
          ))}
        </div>

        {/* Summary cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-6">
          {[
            { label: 'Lenders Engaged', value: mockLenders.length.toString() },
            { label: 'Term Sheets', value: mockLenders.filter(l => l.status === 'Term Sheet').length.toString() },
            { label: 'In Diligence', value: mockLenders.filter(l => l.status === 'Diligence').length.toString() },
            { label: 'Best Spread', value: 'SOFR+225' },
          ].map(stat => (
            <div key={stat.label} className="glass-card rounded-lg p-4 text-center">
              <p className="text-2xl font-display text-white font-500">{stat.value}</p>
              <p className="text-xs font-mono text-slate-500 uppercase tracking-wider mt-1">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* Desktop table */}
        <div className="glass-card rounded-xl overflow-hidden hidden md:block">
          <table className="w-full data-table">
            <thead>
              <tr>
                <th className="text-left">Lender</th>
                <th className="text-left">Structure</th>
                <th className="text-left">Hold Amount</th>
                <th className="text-left">Pricing</th>
                <th className="text-left">Fees</th>
                <th className="text-left">Covenants</th>
                <th className="text-left">Timeline</th>
                <th className="text-left">Status</th>
              </tr>
            </thead>
            <tbody>
              {filtered.map((lender) => (
                <tr
                  key={lender.id}
                  className={`cursor-pointer ${selected === lender.id ? 'bg-navy-700/30' : ''}`}
                  onClick={() => setSelected(selected === lender.id ? null : lender.id)}
                >
                  <td className="font-semibold text-white">{lender.name}</td>
                  <td className="text-blue-300 font-mono text-xs">{lender.structure}</td>
                  <td className="text-white font-mono text-xs">{lender.hold}</td>
                  <td className="text-gold-400 font-mono text-xs font-semibold">{lender.pricing}</td>
                  <td className="font-mono text-xs text-slate-400">{lender.fees}</td>
                  <td className="font-mono text-xs text-slate-400 max-w-[160px]">{lender.covenants}</td>
                  <td className="font-mono text-xs text-slate-400">{lender.timeline}</td>
                  <td>
                    <span className={`text-[10px] font-mono px-2 py-0.5 rounded border ${statusStyles[lender.status] || 'bg-slate-500/15 text-slate-400 border-slate-500/30'}`}>
                      {lender.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Mobile cards */}
        <div className="md:hidden space-y-3">
          {filtered.map(lender => (
            <div key={lender.id} className="glass-card rounded-xl p-5">
              <div className="flex items-start justify-between mb-3">
                <div>
                  <h3 className="text-white font-semibold text-sm">{lender.name}</h3>
                  <p className="text-blue-300 font-mono text-xs mt-0.5">{lender.structure}</p>
                </div>
                <span className={`text-[10px] font-mono px-2 py-0.5 rounded border ${statusStyles[lender.status] || ''}`}>
                  {lender.status}
                </span>
              </div>
              <div className="grid grid-cols-2 gap-3">
                {[
                  ['Hold', lender.hold],
                  ['Pricing', lender.pricing],
                  ['Fees', lender.fees],
                  ['Timeline', lender.timeline],
                ].map(([k, v]) => (
                  <div key={k}>
                    <p className="text-[10px] font-mono text-slate-500 uppercase tracking-wider">{k}</p>
                    <p className="text-xs text-white font-mono mt-0.5">{v}</p>
                  </div>
                ))}
              </div>
              <div className="mt-3 pt-3 border-t border-navy-800">
                <p className="text-[10px] font-mono text-slate-500 uppercase tracking-wider mb-1">Covenants</p>
                <p className="text-xs text-slate-400 font-mono">{lender.covenants}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Comparison note */}
        <div className="mt-6 glass-card rounded-lg p-4 border-gold-400/10">
          <p className="text-xs text-slate-500 font-mono leading-relaxed">
            DISCLOSURE: All lender responses are mock / illustrative data for prototype purposes. Indicative terms do not represent actual loan offers. Pricing indexed to SOFR as of illustration date. Actual terms subject to credit approval, due diligence, and market conditions.
          </p>
        </div>
      </div>
    </div>
  );
}
