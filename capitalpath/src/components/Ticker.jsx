import React from 'react';
import { tickerData } from '../data/mockData';

export default function Ticker() {
  const doubled = [...tickerData, ...tickerData];
  return (
    <div className="overflow-hidden h-8 flex items-center border-b" style={{ background: 'rgba(6,13,24,0.9)', borderColor: 'rgba(183,189,199,0.07)' }}>
      <div className="overflow-hidden flex-1">
        <div className="ticker-track flex items-center">
          {doubled.map((item, i) => (
            <span key={i} className="text-[11px] px-5 flex-shrink-0 flex items-center gap-5">
              <span className="tracking-wide flex items-center gap-1.5">
                <span className="font-normal" style={{ color: '#525D6A' }}>{item.label}</span>
                <span className="font-semibold font-mono" style={{ color: '#B7BDC7' }}>{item.value}</span>
              </span>
              <span className="w-px h-3 flex-shrink-0" style={{ background: 'rgba(183,189,199,0.1)' }} />
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
