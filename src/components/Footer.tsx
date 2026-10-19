import React from 'react';
import { Link } from 'react-router-dom';
import { Download, ShieldCheck, Mail, MessageSquare, AlertCircle } from 'lucide-react';
import { APP_CONFIG } from '../data/content';

export const Footer: React.FC = () => {
  return (
    <footer className="relative bg-[#020E08] border-t border-[#163B27] pt-16 pb-12 overflow-hidden text-[#A9C1B3]">
      {/* Decorative radial gradient */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-64 bg-[#20D77A]/5 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-12">
          
          {/* Brand Info */}
          <div className="lg:col-span-2 space-y-4">
            <Link to="/" className="inline-flex items-center gap-3">
              <img src="/logo.svg" alt="AG Rider Logo" className="w-10 h-10" />
              <div>
                <span className="text-xl font-bold tracking-tight text-white font-heading">
                  AG <span className="text-[#20D77A]">rider</span>
                </span>
                <span className="text-[11px] tracking-wider text-[#A9C1B3] uppercase block font-medium">
                  Driver Assist
                </span>
              </div>
            </Link>
            
            <p className="text-sm text-[#748D7D] max-w-sm leading-relaxed">
              AG Rider is an Android accessibility assistance application designed for eligible professional drivers who experience motor, coordination, or situational interaction difficulties on ride-request interfaces.
            </p>

            <div className="flex items-center gap-3 pt-2">
              <a
                href={APP_CONFIG.downloadPath}
                download={APP_CONFIG.downloadFileName}
                className="inline-flex items-center gap-2 px-4 py-2 bg-[#0A2418] hover:bg-[#103424] text-[#20D77A] border border-[#20D77A]/30 rounded-xl text-xs font-semibold transition-all hover:border-[#20D77A]"
              >
                <Download className="w-4 h-4" />
                <span>Direct APK (v{APP_CONFIG.version})</span>
              </a>
              <span className="flex items-center gap-1.5 text-xs text-[#748D7D]">
                <ShieldCheck className="w-4 h-4 text-[#20D77A]" />
                {APP_CONFIG.apkSize}
              </span>
            </div>
          </div>

          {/* Column 1: Application */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-white mb-4 font-heading">
              Application
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link to="/features" className="hover:text-[#20D77A] transition-colors">
                  Features Overview
                </Link>
              </li>
              <li>
                <Link to="/how-it-works" className="hover:text-[#20D77A] transition-colors">
                  How It Works
                </Link>
              </li>
              <li>
                <Link to="/accessibility" className="hover:text-[#20D77A] transition-colors">
                  Accessibility Service
                </Link>
              </li>
              <li>
                <Link to="/download" className="hover:text-[#20D77A] transition-colors flex items-center gap-1.5 text-[#20D77A] font-semibold">
                  <Download className="w-3.5 h-3.5" />
                  <span>Download APK</span>
                </Link>
              </li>
              <li>
                <Link to="/faq" className="hover:text-[#20D77A] transition-colors">
                  Help & FAQs
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 2: Legal & Transparency */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-white mb-4 font-heading">
              Legal & Policies
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link to="/privacy-policy" className="hover:text-[#20D77A] transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/terms-and-conditions" className="hover:text-[#20D77A] transition-colors">
                  Terms & Conditions
                </Link>
              </li>
              <li>
                <Link to="/disclaimer" className="hover:text-[#20D77A] transition-colors">
                  Disclaimer & Affiliation
                </Link>
              </li>
              <li>
                <Link to="/accessibility#responsible-use" className="hover:text-[#20D77A] transition-colors">
                  Responsible Use Policy
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Contact & Support */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-white mb-4 font-heading">
              Official Support
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link to="/contact" className="hover:text-[#20D77A] transition-colors">
                  Support Portal
                </Link>
              </li>
              <li className="flex items-center gap-2 text-xs text-[#748D7D] pt-1">
                <Mail className="w-4 h-4 text-[#20D77A]" />
                <span>{APP_CONFIG.supportEmail}</span>
              </li>
              <li className="flex items-center gap-2 text-xs text-[#748D7D]">
                <MessageSquare className="w-4 h-4 text-[#20D77A]" />
                <span>{APP_CONFIG.telegramHandle}</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Disclaimer Note Box */}
        <div className="p-4 rounded-xl bg-[#071E14] border border-[#163B27] mb-8 text-xs text-[#748D7D] leading-relaxed flex items-start gap-3">
          <AlertCircle className="w-4 h-4 text-[#20D77A] shrink-0 mt-0.5" />
          <p>
            <strong className="text-[#A9C1B3]">Independent Application Disclaimer:</strong> AG Rider is an independent assistive utility developed to assist eligible drivers with on-screen interface touch accessibility. AG Rider is not affiliated with, endorsed by, sponsored by, or associated with Rapido, Ola, Uber, or any other third-party platform. All brand names are property of their respective trademark holders and referenced strictly for compatibility description.
          </p>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-[#163B27] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#748D7D]">
          <p>© {new Date().getFullYear()} AG Rider. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <Link to="/privacy-policy" className="hover:text-[#A9C1B3] transition-colors">Privacy</Link>
            <Link to="/terms-and-conditions" className="hover:text-[#A9C1B3] transition-colors">Terms</Link>
            <Link to="/disclaimer" className="hover:text-[#A9C1B3] transition-colors">Disclaimer</Link>
            <Link to="/download" className="hover:text-[#20D77A] text-[#20D77A] font-medium transition-colors">Get APK</Link>
          </div>
        </div>

      </div>
    </footer>
  );
};
