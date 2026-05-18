import React, { useState, useRef } from 'react';
import { Upload, FileText, CheckCircle2, Lock, Info } from 'lucide-react';

const docTypes = [
  { id: 'financials', label: '3-Year Financial Statements', desc: 'Audited or reviewed P&L, Balance Sheet, Cash Flow — FY-3, FY-2, FY-1', required: true },
  { id: 'interim', label: 'Interim / YTD Statements', desc: 'Most recent month-end or quarter-end financials (unaudited OK)', required: true },
  { id: 'tax', label: 'Business Tax Returns', desc: '3 most recent federal business tax returns (Form 1120 or 1065)', required: true },
  { id: 'debt', label: 'Debt Schedule', desc: 'Complete list of all outstanding obligations: lender, balance, rate, maturity, collateral', required: true },
  { id: 'arap', label: 'AR / AP Aging Report', desc: 'Accounts receivable and accounts payable aging as of most recent month-end', required: false },
  { id: 'borrowing', label: 'Borrowing Base Certificate', desc: 'Current BBC if ABL or revolver facility exists', required: false },
  { id: 'projections', label: 'Financial Projections', desc: '3–5 year pro forma model including EBITDA bridge and key assumptions', required: false },
  { id: 'loi', label: 'LOI / Transaction Summary', desc: 'Letter of intent, purchase agreement, or CIM (for acquisition financing)', required: false },
];

function UploadCard({ doc, upload, dragging, onDragOver, onDragLeave, onDrop, onFileChange, fileInputRef, onBrowse, formatSize }) {
  return (
    <div className="glass-card rounded-xl transition-all duration-200" style={{
      borderColor: dragging ? 'rgba(200,164,93,0.35)' : upload ? 'rgba(74,222,128,0.2)' : undefined,
      background: dragging ? 'rgba(200,164,93,0.03)' : undefined,
    }}>
      <div className="p-5 flex items-start gap-4">
        <div className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0" style={{
          background: upload ? 'rgba(74,222,128,0.08)' : 'rgba(6,13,24,0.6)',
          border: upload ? '1px solid rgba(74,222,128,0.2)' : '1px solid rgba(183,189,199,0.1)',
        }}>
          {upload
            ? <CheckCircle2 size={18} style={{ color: '#4ADE80' }} />
            : <FileText size={18} style={{ color: '#525D6A' }} />}
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 mb-0.5">
            <h3 className="text-sm font-semibold text-white">{doc.label}</h3>
            {doc.required && !upload && (
              <span className="text-[10px] font-semibold px-1.5 py-0.5 rounded" style={{ background: 'rgba(200,164,93,0.08)', border: '1px solid rgba(200,164,93,0.2)', color: '#C8A45D' }}>Required</span>
            )}
          </div>
          <p className="text-xs mb-3" style={{ color: '#525D6A' }}>{doc.desc}</p>

          {upload ? (
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-2 px-3 py-1.5 rounded text-xs" style={{ background: 'rgba(74,222,128,0.08)', border: '1px solid rgba(74,222,128,0.18)', color: '#4ADE80' }}>
                <CheckCircle2 size={12} />
                <span className="truncate max-w-[200px] font-medium">{upload.name}</span>
                <span style={{ color: 'rgba(74,222,128,0.5)' }}>· {formatSize(upload.size)}</span>
              </div>
              <button onClick={onBrowse} className="text-xs transition-colors" style={{ color: '#525D6A' }}>Replace</button>
            </div>
          ) : (
            <div onDragOver={onDragOver} onDragLeave={onDragLeave} onDrop={onDrop} onClick={onBrowse}
              className="border border-dashed rounded-lg p-4 text-center cursor-pointer transition-all"
              style={{ borderColor: dragging ? 'rgba(200,164,93,0.4)' : 'rgba(183,189,199,0.12)' }}>
              <Upload size={15} className="mx-auto mb-1.5" style={{ color: '#525D6A' }} />
              <p className="text-xs" style={{ color: '#525D6A' }}>
                Drag & drop or <span style={{ color: '#C8A45D', textDecoration: 'underline' }}>browse files</span>
              </p>
              <p className="text-[10px] mt-0.5" style={{ color: '#3D4752' }}>PDF, Excel, CSV, Word — max 50 MB</p>
            </div>
          )}
        </div>
      </div>
      <input type="file" className="hidden" ref={fileInputRef} onChange={onFileChange} accept=".pdf,.xlsx,.xls,.csv,.doc,.docx" />
    </div>
  );
}

export default function UploadPage() {
  const [uploads, setUploads] = useState({});
  const [dragging, setDragging] = useState(null);
  const fileInputRefs = useRef({});

  const handleDrop = (e, docId) => {
    e.preventDefault();
    setDragging(null);
    const files = Array.from(e.dataTransfer.files);
    if (files.length) setUploads(u => ({ ...u, [docId]: { name: files[0].name, size: files[0].size } }));
  };
  const handleFile = (e, docId) => {
    const file = e.target.files[0];
    if (file) setUploads(u => ({ ...u, [docId]: { name: file.name, size: file.size } }));
  };
  const formatSize = (bytes) => bytes > 1024 * 1024 ? `${(bytes / 1024 / 1024).toFixed(1)} MB` : `${(bytes / 1024).toFixed(0)} KB`;

  const required = docTypes.filter(d => d.required);
  const optional = docTypes.filter(d => !d.required);
  const completedRequired = required.filter(d => uploads[d.id]).length;
  const pct = Math.round((completedRequired / required.length) * 100);

  const cardProps = (doc) => ({
    doc,
    upload: uploads[doc.id],
    dragging: dragging === doc.id,
    onDragOver: e => { e.preventDefault(); setDragging(doc.id); },
    onDragLeave: () => setDragging(null),
    onDrop: e => handleDrop(e, doc.id),
    onFileChange: e => handleFile(e, doc.id),
    fileInputRef: el => { fileInputRefs.current[doc.id] = el; },
    onBrowse: () => fileInputRefs.current[doc.id]?.click(),
    formatSize,
  });

  return (
    <div className="min-h-screen pt-24 pb-16 px-6" style={{ background: '#0B1F33' }}>
      <div className="max-w-3xl mx-auto">
        <div className="mb-6">
          <p className="text-[11px] font-semibold tracking-[0.2em] uppercase mb-2" style={{ color: '#C8A45D' }}>Document Center</p>
          <h1 className="font-display text-4xl text-white font-semibold">Secure Document Upload</h1>
          <p className="text-sm mt-2" style={{ color: '#8A9099' }}>Upload financials confidentially to enable your full BankGrade™ assessment. All files are encrypted at rest and in transit.</p>
        </div>

        {/* Security badges */}
        <div className="flex flex-wrap items-center gap-2 mb-6">
          {[
            { icon: Lock, label: '256-bit AES Encryption', c: 'rgba(74,222,128,0.08)', bc: 'rgba(74,222,128,0.2)', t: '#4ADE80' },
            { label: 'SOC 2 Type II Framework', c: 'rgba(6,13,24,0.6)', bc: 'rgba(183,189,199,0.1)', t: '#8A9099' },
            { label: 'Zero-Share Default', c: 'rgba(6,13,24,0.6)', bc: 'rgba(183,189,199,0.1)', t: '#8A9099' },
          ].map((b, i) => (
            <div key={i} className="flex items-center gap-2 rounded-full px-3.5 py-1.5 text-xs font-medium" style={{ background: b.c, border: `1px solid ${b.bc}`, color: b.t }}>
              {b.icon && <b.icon size={11} />}
              {b.label}
            </div>
          ))}
        </div>

        {/* Progress */}
        <div className="glass-card rounded-xl p-5 mb-8 flex flex-col sm:flex-row items-start sm:items-center gap-4">
          <div className="flex-1">
            <p className="text-sm font-semibold text-white mb-2">
              {completedRequired} of {required.length} required documents uploaded
            </p>
            <div className="w-full rounded-full h-1" style={{ background: 'rgba(6,13,24,0.8)' }}>
              <div className="h-1 rounded-full transition-all duration-500" style={{ width: `${pct}%`, background: '#C8A45D' }} />
            </div>
          </div>
          <div className="text-2xl font-display font-semibold" style={{ color: '#C8A45D' }}>{pct}%</div>
        </div>

        <div className="mb-8">
          <h2 className="text-sm font-semibold text-white mb-4">Required Documents</h2>
          <div className="space-y-3">
            {required.map(doc => <UploadCard key={doc.id} {...cardProps(doc)} />)}
          </div>
        </div>

        <div className="mb-10">
          <h2 className="text-sm font-semibold text-white mb-1">
            Supplemental Documents <span className="font-normal" style={{ color: '#525D6A' }}>(Optional)</span>
          </h2>
          <p className="text-xs mb-4" style={{ color: '#525D6A' }}>Supporting materials that strengthen your credit package and improve lender confidence.</p>
          <div className="space-y-3">
            {optional.map(doc => <UploadCard key={doc.id} {...cardProps(doc)} />)}
          </div>
        </div>

        <div className="glass-card rounded-lg p-4 flex gap-3" style={{ borderColor: 'rgba(200,164,93,0.1)' }}>
          <Info size={15} className="flex-shrink-0 mt-0.5" style={{ color: '#C8A45D' }} />
          <p className="text-xs leading-relaxed" style={{ color: '#6B7785' }}>
            <strong style={{ color: '#8A9099' }}>Prototype Notice: </strong>
            No files are actually transmitted or stored. This interface demonstrates the bank-ready data room workflow. In production, files would be encrypted, stored in an isolated environment, and shared only upon your explicit written instruction.
          </p>
        </div>
      </div>
    </div>
  );
}
