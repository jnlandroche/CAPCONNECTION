import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'How It Works', href: '/#how-it-works' },
  { label: 'Solutions', href: '/#solutions' },
  { label: 'BankGrade™', href: '/assessment' },
];

export default function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 32);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => { setOpen(false); }, [location.pathname]);

  const isActive = (href) => href === '/' ? location.pathname === '/' : location.pathname === href;

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? 'bg-navy-900/95 backdrop-blur-md border-b border-white/6 shadow-xl shadow-black/30' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">

        {/* Logo */}
        <Link to="/" className="flex items-center gap-2.5 group flex-shrink-0">
          <img
            src="/bankable-logo-cropped.png"
            alt="BANKABLE"
            className="w-auto object-contain"
            style={{ filter: 'brightness(1.1)', height: '42px' }}
          />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              to={link.href}
              className={`px-4 py-2 text-[13px] font-medium tracking-wide transition-colors duration-150 whitespace-nowrap ${
                isActive(link.href)
                  ? 'text-white'
                  : 'text-silver-600 hover:text-white'
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Right side */}
        <div className="hidden md:flex items-center gap-3">
          <Link
            to="/dashboard"
            className="text-[13px] text-silver-600 hover:text-white transition-colors font-medium px-3 py-1.5 whitespace-nowrap"
          >
            Advisor Portal
          </Link>
          <Link
            to="/intake"
            className="text-[13px] bg-gold-500 hover:bg-gold-400 text-navy-900 font-semibold px-5 py-2.5 rounded transition-all duration-200 whitespace-nowrap"
          >
            Get My BankGrade™
          </Link>
        </div>

        {/* Mobile toggle */}
        <button
          className="lg:hidden text-silver-500 hover:text-white p-1 transition-colors"
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile drawer */}
      {open && (
        <div className="lg:hidden bg-navy-900/98 backdrop-blur-md border-b border-white/6 px-6 py-5 flex flex-col gap-1 animate-fade-in">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              to={link.href}
              onClick={() => setOpen(false)}
              className="text-silver-400 hover:text-white py-2.5 text-sm font-medium border-b border-white/5 transition-colors"
            >
              {link.label}
            </Link>
          ))}
          <Link
            to="/dashboard"
            onClick={() => setOpen(false)}
            className="text-silver-600 py-2.5 text-sm font-medium"
          >
            Advisor Portal
          </Link>
          <Link
            to="/intake"
            onClick={() => setOpen(false)}
            className="mt-3 bg-gold-500 text-navy-900 font-semibold text-center py-3 rounded text-sm"
          >
            Get My BankGrade™
          </Link>
        </div>
      )}
    </header>
  );
}
