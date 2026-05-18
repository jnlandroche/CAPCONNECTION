import React from 'react';
import { tickerData } from '../data/mockData';

export default function Ticker() {
  const doubled = [...tickerData, ...tickerData];
  return (
    <div className="bg-navy-950 border-b border-white/6 overflow-hidden h-9 flex items-center">
      <div className="overflow-hidden flex-1 relative">
        <div className="ticker-track flex items-center">
          {doubled.map((item, i) => (
            <span key={i} className="text-[11px] font-body text-slate-400 px-5 flex-shrink-0 flex items-center gap-5">
              <span className="tracking-wide">
                <span className="text-slate-500 font-normal">{item.label}&ensp;</span>
                <span className="text-slate-300 font-medium">{item.value}</span>
              </span>
              <span className="w-px h-3 bg-white/10 flex-shrink-0" />
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
