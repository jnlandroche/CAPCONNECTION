import React, { useState } from 'react';
import { mockLenders } from '../data/mockData';
import { Download, MessageSquare } from 'lucide-react';
import { Link } from 'react-router-dom';

const statusStyles = {
  'Term Sheet': { bg: 'rgba(34,197,94,0.08)', border: 'rgba(34,197,94,0.25)', text: '#4ADE80' },
  'Diligence':  { bg: 'rgba(245,158,11,0.08)', border: 'rgba(245,158,11,0.25)', text: '#FBBF24' },
  'Indicative': { bg: 'rgba(183,189,199,0.06)', border: 'rgba(183,189,199,0.2)', text: '#B7BDC7' },
  'Passed':     { bg: 'rgba(239,68,68,0.08)', border: 'rgba(239,68,68,0.2)', text: '#F87171' },
};

export default function LendersPage() {
  const [filter, setFilter] = useState('All');
  const statuses = ['All', 'Term Sheet', 'Diligence', 'Indicative', 'Passed'];
  const filtered = filter === 'All' ? mockLenders : mockLenders.filter(l => l.status === filter);

  return (
    <div className="min-h-screen pt-24 pb-16 px-6" style={{ background: '#0B1F33' }}>
      <div className="max-w-7xl mx-auto">

        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
          <div>
            <p className="text-[11px] font-semibold tracking-[0.2em] uppercase mb-2" style={{ color: '#C8A45D' }}>Lender-Fit Intelligence</p>
            <h1 className="font-display text-4xl text-white font-semibold">Financing Options</h1>
            <p className="text-sm mt-1.5" style={{ color: '#8A9099' }}>Meridian Capital Group · $55M Senior Financing · BankGrade™ B+ · Active Outreach</p>
          </div>
          <div className="flex items-center gap-2">
            <button className="flex items-center gap-2 text-xs font-medium border px-3 py-2 rounded transition-all" style={{ borderColor: 'rgba(183,189,199,0.15)', color: '#8A9099' }}>
              <Download size={13} /> Export
            </button>
            <Link to="/intake" className="flex items-center gap-2 text-xs font-semibold px-4 py-2 rounded transition-all" style={{ background: '#C8A45D', color: '#0B1F33' }}>
              <MessageSquare size={13} /> Speak with an Advisor
            </Link>
          </div>
        </div>

        {/* Filter tabs */}
        <div className="flex items-center gap-1 mb-6 rounded-lg p-1 w-fit" style={{ background: 'rgba(6,13,24,0.6)', border: '1px solid rgba(183,189,199,0.08)' }}>
          {statuses.map(s => (
            <button key={s} onClick={() => setFilter(s)}
              className="px-3.5 py-1.5 rounded text-xs font-medium transition-all"
              style={{ background: filter === s ? 'rgba(183,189,199,0.1)' : 'transparent', color: filter === s ? 'white' : '#6B7785' }}
            >{s}</button>
          ))}
        </div>

        {/* Summary cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-6">
          {[
            ['Lenders Engaged', mockLenders.length],
            ['Term Sheets', mockLenders.filter(l => l.status === 'Term Sheet').length],
            ['In Diligence', mockLenders.filter(l => l.status === 'Diligence').length],
            ['Best Spread', 'SOFR+225'],
          ].map(([label, value]) => (
            <div key={label} className="glass-card rounded-xl p-4 text-center">
              <p className="text-xl font-display text-white font-semibold">{value}</p>
              <p className="text-xs font-medium mt-1" style={{ color: '#6B7785' }}>{label}</p>
            </div>
          ))}
        </div>

        {/* Desktop table */}
        <div className="glass-card rounded-xl overflow-hidden hidden md:block mb-6">
          <table className="w-full data-table">
            <thead>
              <tr>
                {['Lender', 'Structure', 'Hold Amount', 'Pricing', 'Fees', 'Covenants', 'Timeline', 'Status'].map(h => (
                  <th key={h} className="text-left">{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {filtered.map(lender => {
                const st = statusStyles[lender.status] || statusStyles['Indicative'];
                return (
                  <tr key={lender.id} className="cursor-pointer">
                    <td className="font-semibold text-white">{lender.name}</td>
                    <td className="text-xs" style={{ color: '#B7BDC7' }}>{lender.structure}</td>
                    <td className="font-mono text-xs text-white">{lender.hold}</td>
                    <td className="font-mono text-xs font-semibold" style={{ color: '#C8A45D' }}>{lender.pricing}</td>
                    <td className="font-mono text-xs" style={{ color: '#8A9099' }}>{lender.fees}</td>
                    <td className="text-xs max-w-[160px]" style={{ color: '#8A9099' }}>{lender.covenants}</td>
                    <td className="text-xs" style={{ color: '#8A9099' }}>{lender.timeline}</td>
                    <td>
                      <span className="text-[10px] font-semibold px-2 py-0.5 rounded" style={{ background: st.bg, border: `1px solid ${st.border}`, color: st.text }}>
                        {lender.status}
                      </span>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>

        {/* Mobile cards */}
        <div className="md:hidden space-y-3 mb-6">
          {filtered.map(lender => {
            const st = statusStyles[lender.status] || statusStyles['Indicative'];
            return (
              <div key={lender.id} className="glass-card rounded-xl p-5">
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <h3 className="text-white font-semibold text-sm">{lender.name}</h3>
                    <p className="text-xs mt-0.5 font-medium" style={{ color: '#8A9099' }}>{lender.structure}</p>
                  </div>
                  <span className="text-[10px] font-semibold px-2 py-0.5 rounded" style={{ background: st.bg, border: `1px solid ${st.border}`, color: st.text }}>{lender.status}</span>
                </div>
                <div className="grid grid-cols-2 gap-3">
                  {[['Hold', lender.hold], ['Pricing', lender.pricing], ['Fees', lender.fees], ['Timeline', lender.timeline]].map(([k, v]) => (
                    <div key={k}>
                      <p className="text-[10px] font-medium uppercase tracking-wide mb-0.5" style={{ color: '#6B7785' }}>{k}</p>
                      <p className="text-xs font-mono text-white">{v}</p>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Advisor CTA */}
        <div className="glass-card rounded-xl p-5 mb-4 flex flex-col sm:flex-row items-center justify-between gap-4" style={{ borderColor: 'rgba(200,164,93,0.12)' }}>
          <div>
            <p className="text-white font-semibold text-sm">Want help evaluating these options?</p>
            <p className="text-xs mt-0.5" style={{ color: '#6B7785' }}>A BANKABLE advisor can help identify the right lenders and navigate your process from start to close.</p>
          </div>
          <Link to="/intake" className="flex-shrink-0 text-sm font-semibold px-5 py-2.5 rounded transition-all flex items-center gap-2" style={{ background: '#C8A45D', color: '#0B1F33' }}>
            <MessageSquare size={14} /> Speak with an Advisor
          </Link>
        </div>

        <div className="glass-card rounded-lg p-4" style={{ borderColor: 'rgba(183,189,199,0.06)' }}>
          <p className="text-xs leading-relaxed" style={{ color: '#6B7785' }}>
            <span className="font-semibold" style={{ color: '#8A9099' }}>Disclosure: </span>
            All lender responses are illustrative and for prototype purposes only. Indicative terms do not represent a commitment to lend, offer of credit, or formal credit approval.
          </p>
        </div>
      </div>
    </div>
  );
}
