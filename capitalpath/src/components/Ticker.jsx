import React from 'react';
import { tickerData } from '../data/mockData';

export default function Ticker() {
  const doubled = [...tickerData, ...tickerData];
  return (
    <div className="bg-navy-900/80 border-b border-navy-800/60 overflow-hidden h-8 flex items-center">
      <div className="flex-shrink-0 bg-gold-400 text-navy-950 text-xs font-mono font-semibold px-3 h-full flex items-center tracking-widest z-10">
        MARKETS
      </div>
      <div className="overflow-hidden flex-1 relative">
        <div className="ticker-track flex">
          {doubled.map((item, i) => (
            <span key={i} className="text-xs font-mono text-slate-400 px-6 flex-shrink-0">
              <span className="text-slate-500 mr-1">◆</span>
              {item}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
