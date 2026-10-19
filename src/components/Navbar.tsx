import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Download, Menu, X, ShieldCheck } from 'lucide-react';
import { APP_CONFIG } from '../data/content';

interface NavbarProps {
  onOpenDownload?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenDownload }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { label: 'Home', path: '/' },
    { label: 'About', path: '/about' },
    { label: 'Features', path: '/features' },
    { label: 'How It Works', path: '/how-it-works' },
    { label: 'Accessibility', path: '/accessibility' },
    { label: 'FAQ', path: '/faq' },
    { label: 'Contact', path: '/contact' },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-[#03150D]/90 backdrop-blur-md border-b border-[#20D77A]/15 py-3 shadow-lg shadow-black/40' 
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <div className="relative">
              <img 
                src="/logo.svg" 
                alt="AG Rider Logo" 
                className="w-10 h-10 transition-transform duration-300 group-hover:scale-105"
              />
              <span className="absolute -inset-1 rounded-xl bg-[#20D77A]/20 blur-sm opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <span className="text-xl font-bold tracking-tight text-white font-heading">
                  AG <span className="text-[#20D77A]">rider</span>
                </span>
                <span className="hidden sm:inline-block text-[10px] tracking-widest uppercase font-mono px-1.5 py-0.5 rounded bg-[#103424] text-[#8AE7B6] border border-[#20D77A]/30 font-semibold">
                  APK
                </span>
              </div>
              <span className="text-[10px] tracking-wider text-[#A9C1B3] uppercase block font-medium">
                Driver Assist
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.path;
              return (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-all ${
                    isActive
                      ? 'text-[#20D77A] bg-[#0A2418] border border-[#20D77A]/30'
                      : 'text-[#A9C1B3] hover:text-[#F3F8F4] hover:bg-[#071E14]'
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          {/* Action CTA & Mobile Toggle */}
          <div className="flex items-center gap-3">
            <Link
              to="/download"
              className="relative inline-flex items-center justify-center gap-2 px-4 py-2 text-sm font-semibold text-[#03150D] bg-[#20D77A] hover:bg-[#8AE7B6] rounded-xl shadow-md transition-all duration-200 hover:shadow-[#20D77A]/25 hover:shadow-lg active:scale-95 cursor-pointer"
            >
              <Download className="w-4 h-4 stroke-[2.5]" />
              <span>Download APK</span>
              <span className="hidden sm:inline-block text-[11px] font-mono opacity-80 pl-1 border-l border-[#03150D]/30">
                v{APP_CONFIG.version}
              </span>
            </Link>

            {/* Mobile Hamburger Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl text-[#A9C1B3] hover:text-white bg-[#0A2418] border border-[#163B27] lg:hidden focus:outline-none focus:ring-2 focus:ring-[#20D77A]/50"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-x-0 top-[65px] p-4 bg-[#03150D]/95 backdrop-blur-xl border-b border-[#20D77A]/20 shadow-2xl transition-all">
          <div className="flex flex-col gap-1.5 py-2">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.path;
              return (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`px-4 py-2.5 rounded-xl text-base font-medium transition-all ${
                    isActive
                      ? 'text-[#20D77A] bg-[#0A2418] border border-[#20D77A]/30 font-semibold'
                      : 'text-[#A9C1B3] hover:text-white hover:bg-[#071E14]'
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
            
            <div className="pt-3 mt-2 border-t border-[#163B27] flex flex-col gap-2">
              <Link
                to="/download"
                className="w-full flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-[#20D77A] text-[#03150D] font-bold text-base shadow-lg shadow-[#20D77A]/20 active:scale-98"
              >
                <Download className="w-5 h-5 stroke-[2.5]" />
                <span>Download AG Rider APK</span>
              </Link>
              <div className="flex items-center justify-center gap-1.5 text-xs text-[#748D7D] pt-1">
                <ShieldCheck className="w-4 h-4 text-[#20D77A]" />
                <span>Verified Safe & Clean • {APP_CONFIG.apkSize}</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
