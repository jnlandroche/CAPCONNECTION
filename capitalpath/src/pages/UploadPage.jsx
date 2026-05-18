import React, { useState, useRef } from 'react';
import { Upload, FileText, CheckCircle2, Lock, Info } from 'lucide-react';

const docTypes = [
  {
    id: 'financials',
    label: '3-Year Financial Statements',
    desc: 'Audited or reviewed P&L, Balance Sheet, Cash Flow — FY-3, FY-2, FY-1',
    required: true,
  },
  {
    id: 'interim',
    label: 'Interim / YTD Statements',
    desc: 'Most recent month-end or quarter-end financials (unaudited OK)',
    required: true,
  },
  {
    id: 'tax',
    label: 'Business Tax Returns',
    desc: '3 most recent federal business tax returns (Form 1120 or 1065)',
    required: true,
  },
  {
    id: 'debt',
    label: 'Debt Schedule',
    desc: 'Complete list of all outstanding obligations: lender, balance, rate, maturity, collateral',
    required: true,
  },
  {
    id: 'arap',
    label: 'AR / AP Aging Report',
    desc: 'Accounts receivable and accounts payable aging as of most recent month-end',
    required: false,
  },
  {
    id: 'borrowing',
    label: 'Borrowing Base Certificate',
    desc: 'Current BBC if ABL or revolver facility exists',
    required: false,
  },
  {
    id: 'projections',
    label: 'Financial Projections',
    desc: '3–5 year pro forma model including EBITDA bridge and key assumptions',
    required: false,
  },
  {
    id: 'loi',
    label: 'LOI / Transaction Summary',
    desc: 'Letter of intent, purchase agreement, or CIM (for acquisition financing)',
    required: false,
  },
];

export default function UploadPage() {
  const [uploads, setUploads] = useState({});
  const [dragging, setDragging] = useState(null);
  const fileInputRefs = useRef({});

  const handleDrop = (e, docId) => {
    e.preventDefault();
    setDragging(null);
    const files = Array.from(e.dataTransfer.files);
    if (files.length > 0) {
      setUploads(u => ({ ...u, [docId]: { name: files[0].name, size: files[0].size, status: 'uploaded' } }));
    }
  };

  const handleFile = (e, docId) => {
    const file = e.target.files[0];
    if (file) {
      setUploads(u => ({ ...u, [docId]: { name: file.name, size: file.size, status: 'uploaded' } }));
    }
  };

  const formatSize = (bytes) => bytes > 1024 * 1024 ? `${(bytes / 1024 / 1024).toFixed(1)} MB` : `${(bytes / 1024).toFixed(0)} KB`;

  const required = docTypes.filter(d => d.required);
  const optional = docTypes.filter(d => !d.required);
  const completedRequired = required.filter(d => uploads[d.id]).length;

  return (
    <div className="min-h-screen pt-24 pb-16 px-6">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="mb-6">
          <p className="text-xs font-semibold text-gold-400 tracking-wide uppercase mb-2">Document Center</p>
          <h1 className="font-display text-4xl text-white font-500">Secure Document Upload</h1>
          <p className="text-slate-400 text-sm mt-2">Upload required documents to enable full lender outreach. All files are encrypted at rest and in transit.</p>
        </div>

        {/* Security badge */}
        <div className="flex items-center gap-3 my-5">
          <div className="flex items-center gap-2 bg-green-500/10 border border-green-500/20 rounded-full px-4 py-1.5">
            <Lock size={12} className="text-green-400" />
            <span className="text-green-400 text-xs font-medium">256-bit AES Encryption</span>
          </div>
          <div className="flex items-center gap-2 bg-navy-800/60 border border-navy-700 rounded-full px-4 py-1.5">
            <span className="text-slate-400 text-xs font-medium">SOC 2 Type II Compliant</span>
          </div>
        </div>

        {/* Progress */}
        <div className="glass-card rounded-xl p-5 mb-8 flex flex-col sm:flex-row items-start sm:items-center gap-4">
          <div className="flex-1">
            <p className="text-sm text-white font-semibold mb-1">
              {completedRequired} of {required.length} required documents uploaded
            </p>
            <div className="w-full bg-navy-900 rounded-full h-1.5 mt-2">
              <div
                className="bg-gold-400 h-1.5 rounded-full transition-all duration-500"
                style={{ width: `${(completedRequired / required.length) * 100}%` }}
              />
            </div>
          </div>
          <div className="text-2xl font-display text-gold-400 font-600">
            {Math.round((completedRequired / required.length) * 100)}%
          </div>
        </div>

        {/* Required docs */}
        <div className="mb-8">
          <h2 className="text-sm font-semibold text-slate-300 mb-4">Required Documents</h2>
          <div className="space-y-3">
            {required.map(doc => (
              <UploadCard
                key={doc.id}
                doc={doc}
                upload={uploads[doc.id]}
                dragging={dragging === doc.id}
                onDragOver={e => { e.preventDefault(); setDragging(doc.id); }}
                onDragLeave={() => setDragging(null)}
                onDrop={e => handleDrop(e, doc.id)}
                onFileChange={e => handleFile(e, doc.id)}
                fileInputRef={el => fileInputRefs.current[doc.id] = el}
                onBrowse={() => fileInputRefs.current[doc.id]?.click()}
                formatSize={formatSize}
              />
            ))}
          </div>
        </div>

        {/* Optional docs */}
        <div className="mb-10">
          <h2 className="text-sm font-semibold text-slate-300 mb-1">Supplemental Documents <span className="text-slate-500 font-normal">(Optional)</span></h2>
          <p className="text-xs text-slate-500 mb-4">Supporting materials that strengthen your credit package.</p>
          <div className="space-y-3">
            {optional.map(doc => (
              <UploadCard
                key={doc.id}
                doc={doc}
                upload={uploads[doc.id]}
                dragging={dragging === doc.id}
                onDragOver={e => { e.preventDefault(); setDragging(doc.id); }}
                onDragLeave={() => setDragging(null)}
                onDrop={e => handleDrop(e, doc.id)}
                onFileChange={e => handleFile(e, doc.id)}
                fileInputRef={el => fileInputRefs.current[doc.id] = el}
                onBrowse={() => fileInputRefs.current[doc.id]?.click()}
                formatSize={formatSize}
              />
            ))}
          </div>
        </div>

        {/* Prototype notice */}
        <div className="glass-card rounded-lg p-4 flex gap-3 border-blue-500/20">
          <Info size={16} className="text-blue-400 flex-shrink-0 mt-0.5" />
          <p className="text-xs text-slate-400 leading-relaxed">
            <strong className="text-blue-400">Prototype: </strong>
            No files are actually transmitted or stored. This upload interface demonstrates the data room workflow. In production, files would be encrypted and stored in an isolated, lender-permissioned environment.
          </p>
        </div>
      </div>
    </div>
  );
}

function UploadCard({ doc, upload, dragging, onDragOver, onDragLeave, onDrop, onFileChange, fileInputRef, onBrowse, formatSize }) {
  return (
    <div className={`glass-card rounded-xl transition-all duration-200 ${dragging ? 'border-gold-400/50 bg-gold-400/5' : upload ? 'border-green-500/30' : ''}`}>
      <div className="p-5 flex items-start gap-4">
        <div className={`w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 ${upload ? 'bg-green-500/15 border border-green-500/30' : 'bg-navy-800 border border-navy-700'}`}>
          {upload ? <CheckCircle2 size={18} className="text-green-400" /> : <FileText size={18} className="text-slate-500" />}
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 mb-0.5">
            <h3 className="text-sm font-semibold text-white">{doc.label}</h3>
            {doc.required && !upload && (
              <span className="text-[10px] font-semibold text-gold-400 bg-gold-400/10 border border-gold-400/20 rounded px-1.5 py-0.5">Required</span>
            )}
          </div>
          <p className="text-xs text-slate-500 mb-3">{doc.desc}</p>

          {upload ? (
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-2 bg-green-500/10 border border-green-500/20 rounded px-3 py-1.5 text-xs text-green-400">
                <CheckCircle2 size={12} />
                <span className="truncate max-w-[200px] font-medium">{upload.name}</span>
                <span className="text-green-500/60">· {formatSize(upload.size)}</span>
              </div>
              <button onClick={onBrowse} className="text-xs text-slate-500 hover:text-slate-300 transition-colors">Replace</button>
            </div>
          ) : (
            <div
              onDragOver={onDragOver}
              onDragLeave={onDragLeave}
              onDrop={onDrop}
              className={`border border-dashed rounded-lg p-4 text-center cursor-pointer transition-all ${
                dragging ? 'border-gold-400/60 bg-gold-400/5' : 'border-navy-700 hover:border-navy-600'
              }`}
              onClick={onBrowse}
            >
              <Upload size={16} className="text-slate-600 mx-auto mb-1" />
              <p className="text-xs text-slate-500">
                Drag & drop or <span className="text-gold-400 underline">browse files</span>
              </p>
              <p className="text-[10px] text-slate-600 mt-0.5">PDF, Excel, CSV, Word — max 50 MB</p>
            </div>
          )}
        </div>
      </div>
      <input
        type="file"
        className="hidden"
        ref={fileInputRef}
        onChange={onFileChange}
        accept=".pdf,.xlsx,.xls,.csv,.doc,.docx"
      />
    </div>
  );
}
