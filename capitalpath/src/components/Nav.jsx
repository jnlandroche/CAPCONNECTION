import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, TrendingUp, ChevronDown } from 'lucide-react';

const navLinks = [
  { label: 'Solutions', href: '/#solutions' },
  { label: 'Financing Request', href: '/intake' },
  { label: 'Document Upload', href: '/upload' },
  { label: 'Assessment', href: '/assessment' },
  { label: 'Lender Comparison', href: '/lenders' },
];

export default function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isActive = (href) => location.pathname === href;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-navy-950/95 backdrop-blur-md border-b border-navy-800/60 shadow-lg shadow-black/30'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2.5 group">
          <div className="w-8 h-8 bg-gradient-to-br from-gold-400 to-gold-500 rounded-sm flex items-center justify-center shadow-lg">
            <TrendingUp size={16} className="text-navy-950" strokeWidth={2.5} />
          </div>
          <span className="font-display font-600 text-white text-lg tracking-tight">
            Capital<span className="text-gold-400">Path</span>
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-0.5">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              to={link.href}
              className={`px-4 py-2 text-[13px] font-semibold tracking-wide transition-all duration-150 ${
                isActive(link.href)
                  ? 'text-white'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* CTA + Dashboard */}
        <div className="hidden md:flex items-center gap-3">
          <Link
            to="/dashboard"
            className="text-sm text-slate-400 hover:text-slate-200 transition-colors px-3 py-1.5"
          >
            Advisor Portal
          </Link>
          <Link
            to="/intake"
            className="text-sm bg-gold-400 hover:bg-gold-300 text-navy-950 font-semibold px-4 py-2 rounded transition-all duration-200 shadow-md"
          >
            Start Request
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden text-slate-400 hover:text-white p-1"
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-navy-900/98 backdrop-blur-md border-b border-navy-800 px-6 py-4 flex flex-col gap-2 animate-fade-in">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              to={link.href}
              onClick={() => setOpen(false)}
              className="text-slate-300 hover:text-white py-2.5 text-sm border-b border-navy-800/50"
            >
              {link.label}
            </Link>
          ))}
          <Link
            to="/dashboard"
            onClick={() => setOpen(false)}
            className="text-slate-400 py-2.5 text-sm"
          >
            Advisor Portal
          </Link>
          <Link
            to="/intake"
            onClick={() => setOpen(false)}
            className="mt-2 bg-gold-400 text-navy-950 font-semibold text-center py-2.5 rounded text-sm"
          >
            Start Financing Request
          </Link>
        </div>
      )}
    </header>
  );
}
