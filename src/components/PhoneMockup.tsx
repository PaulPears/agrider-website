import React, { useState } from 'react';
import { Smartphone, CheckCircle2, ShieldCheck, Sliders, Play, Award } from 'lucide-react';

interface PhoneMockupProps {
  className?: string;
}

export const PhoneMockup: React.FC<PhoneMockupProps> = ({ className = '' }) => {
  const [activeTab, setActiveTab] = useState<'signin' | 'deck' | 'filters'>('signin');

  return (
    <div className={`relative flex flex-col items-center ${className}`}>
      
      {/* Ambient background glow */}
      <div className="absolute -inset-4 bg-gradient-to-tr from-[#20D77A]/20 via-[#20D77A]/10 to-transparent rounded-[50px] blur-2xl pointer-events-none" />

      {/* Screen Mode Switcher Pills */}
      <div className="relative z-20 flex items-center gap-1.5 p-1 mb-4 rounded-xl bg-[#071E14] border border-[#163B27] text-xs">
        <button
          onClick={() => setActiveTab('signin')}
          className={`px-3 py-1.5 rounded-lg transition-all font-medium ${
            activeTab === 'signin' 
              ? 'bg-[#20D77A] text-[#03150D] shadow font-bold' 
              : 'text-[#A9C1B3] hover:text-white'
          }`}
        >
          Sign In Screen
        </button>
        <button
          onClick={() => setActiveTab('deck')}
          className={`px-3 py-1.5 rounded-lg transition-all font-medium ${
            activeTab === 'deck' 
              ? 'bg-[#20D77A] text-[#03150D] shadow font-bold' 
              : 'text-[#A9C1B3] hover:text-white'
          }`}
        >
          Ride Deck
        </button>
        <button
          onClick={() => setActiveTab('filters')}
          className={`px-3 py-1.5 rounded-lg transition-all font-medium ${
            activeTab === 'filters' 
              ? 'bg-[#20D77A] text-[#03150D] shadow font-bold' 
              : 'text-[#A9C1B3] hover:text-white'
          }`}
        >
          Filters HUD
        </button>
      </div>

      {/* Phone Frame */}
      <div className="relative w-[300px] sm:w-[330px] rounded-[44px] p-3 bg-gradient-to-b from-[#163B27] to-[#0A2418] shadow-2xl border-4 border-[#103424]">
        
        {/* Inner Phone Bezel */}
        <div className="relative rounded-[36px] bg-[#03150D] overflow-hidden border border-[#20D77A]/20 shadow-inner min-h-[580px] flex flex-col">
          
          {/* Top Speaker / Dynamic Island */}
          <div className="pt-3 pb-2 px-6 flex items-center justify-between text-[11px] text-[#A9C1B3] font-mono z-20">
            <span>5:42</span>
            <div className="w-20 h-4 bg-black rounded-full mx-auto" />
            <div className="flex items-center gap-1">
              <span>5G</span>
              <div className="w-4 h-2 rounded-sm border border-[#A9C1B3] flex items-center p-0.5">
                <div className="w-full h-full bg-[#20D77A]" />
              </div>
            </div>
          </div>

          {/* SCREEN CONTENT BASED ON ACTIVE TAB */}
          {activeTab === 'signin' && (
            <div className="flex-1 flex flex-col justify-between p-4 relative overflow-hidden">
              {/* Direct genuine app screenshot */}
              <img 
                src="/images/app_signin.png" 
                alt="AG Rider Actual Sign-in Screen" 
                className="w-full h-full object-contain rounded-2xl shadow-lg"
              />
            </div>
          )}

          {activeTab === 'deck' && (
            <div className="flex-1 p-4 flex flex-col justify-between text-left">
              {/* Header */}
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <img src="/logo.svg" alt="Logo" className="w-7 h-7" />
                    <div>
                      <h4 className="text-sm font-bold text-white font-heading">Ride Deck</h4>
                      <p className="text-[10px] text-[#8AE7B6]">Cockpit View</p>
                    </div>
                  </div>
                  <span className="px-2 py-0.5 rounded-full text-[10px] bg-[#20D77A]/15 text-[#20D77A] border border-[#20D77A]/30 font-semibold flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#20D77A] animate-ping" />
                    Active
                  </span>
                </div>

                {/* Status Card */}
                <div className="p-3.5 rounded-2xl bg-[#0A2418] border border-[#20D77A]/25 mb-3">
                  <div className="flex items-center justify-between text-xs mb-1">
                    <span className="text-[#A9C1B3]">Assistant Status</span>
                    <span className="text-[#20D77A] font-bold">READY</span>
                  </div>
                  <div className="text-xl font-bold text-white font-mono flex items-baseline gap-1">
                    42 <span className="text-xs font-sans text-[#748D7D] font-normal">Accepted Today</span>
                  </div>
                  <div className="mt-2 pt-2 border-t border-[#163B27] flex items-center justify-between text-[11px] text-[#A9C1B3]">
                    <span>Avg Response:</span>
                    <span className="font-mono text-[#8AE7B6]">0ms Instant</span>
                  </div>
                </div>

                {/* Quick Toggles */}
                <div className="space-y-2">
                  <div className="p-2.5 rounded-xl bg-[#071E14] border border-[#163B27] flex items-center justify-between text-xs">
                    <div className="flex items-center gap-2">
                      <Play className="w-3.5 h-3.5 text-[#20D77A]" />
                      <span className="text-white font-medium">Auto-Assist Touch</span>
                    </div>
                    <span className="text-[10px] px-2 py-0.5 rounded bg-[#20D77A] text-[#03150D] font-bold">ON</span>
                  </div>

                  <div className="p-2.5 rounded-xl bg-[#071E14] border border-[#163B27] flex items-center justify-between text-xs">
                    <div className="flex items-center gap-2">
                      <ShieldCheck className="w-3.5 h-3.5 text-[#20D77A]" />
                      <span className="text-white font-medium">Accessibility Engine</span>
                    </div>
                    <span className="text-[10px] text-[#20D77A]">Connected</span>
                  </div>
                </div>
              </div>

              {/* Bottom Info */}
              <div className="p-3 rounded-xl bg-[#103424]/50 border border-[#20D77A]/20 text-[11px] text-[#A9C1B3]">
                <p className="flex items-center gap-1.5 text-white font-semibold mb-0.5">
                  <Award className="w-3.5 h-3.5 text-[#20D77A]" />
                  Rapido & Ola Support
                </p>
                <p className="text-[10px] text-[#748D7D]">Ready for incoming ride request popups.</p>
              </div>
            </div>
          )}

          {activeTab === 'filters' && (
            <div className="flex-1 p-4 flex flex-col justify-between text-left">
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <Sliders className="w-5 h-5 text-[#20D77A]" />
                  <h4 className="text-sm font-bold text-white font-heading">Ride Filters</h4>
                </div>

                {/* Filter 1 */}
                <div className="p-3 rounded-xl bg-[#0A2418] border border-[#163B27] mb-2.5">
                  <div className="flex items-center justify-between text-xs mb-1">
                    <span className="text-[#A9C1B3]">Min Fare Filter</span>
                    <span className="text-[#20D77A] font-bold font-mono">₹60</span>
                  </div>
                  <div className="w-full bg-[#03150D] h-2 rounded-full overflow-hidden">
                    <div className="bg-[#20D77A] h-full w-[45%]" />
                  </div>
                  <div className="flex justify-between text-[10px] text-[#748D7D] mt-1">
                    <span>₹0 (Off)</span>
                    <span>₹200</span>
                  </div>
                </div>

                {/* Filter 2 */}
                <div className="p-3 rounded-xl bg-[#0A2418] border border-[#163B27] mb-2.5">
                  <div className="flex items-center justify-between text-xs mb-1">
                    <span className="text-[#A9C1B3]">Max Pickup Radius</span>
                    <span className="text-[#20D77A] font-bold font-mono">2.5 km</span>
                  </div>
                  <div className="w-full bg-[#03150D] h-2 rounded-full overflow-hidden">
                    <div className="bg-[#20D77A] h-full w-[35%]" />
                  </div>
                  <div className="flex justify-between text-[10px] text-[#748D7D] mt-1">
                    <span>0.5 km</span>
                    <span>10 km</span>
                  </div>
                </div>

                {/* Filter 3 */}
                <div className="p-3 rounded-xl bg-[#0A2418] border border-[#163B27]">
                  <div className="flex items-center justify-between text-xs mb-1">
                    <span className="text-[#A9C1B3]">Max Drop Distance</span>
                    <span className="text-[#20D77A] font-bold font-mono">15 km</span>
                  </div>
                  <div className="w-full bg-[#03150D] h-2 rounded-full overflow-hidden">
                    <div className="bg-[#20D77A] h-full w-[60%]" />
                  </div>
                  <div className="flex justify-between text-[10px] text-[#748D7D] mt-1">
                    <span>5 km</span>
                    <span>40 km</span>
                  </div>
                </div>
              </div>

              <div className="p-2.5 rounded-xl bg-[#071E14] text-center text-[11px] text-[#8AE7B6]">
                Filters auto-save instantly on device
              </div>
            </div>
          )}

          {/* Bottom Navigation Indicator Bar */}
          <div className="pb-2 pt-1 flex justify-center">
            <div className="w-24 h-1 bg-[#20D77A]/40 rounded-full" />
          </div>

        </div>
      </div>

      {/* Trust pill below phone */}
      <div className="mt-4 flex items-center gap-2 text-xs text-[#A9C1B3] bg-[#0A2418] px-4 py-1.5 rounded-full border border-[#20D77A]/20">
        <CheckCircle2 className="w-4 h-4 text-[#20D77A]" />
        <span>Authentic in-app interface captured from AG Rider</span>
      </div>

    </div>
  );
};
