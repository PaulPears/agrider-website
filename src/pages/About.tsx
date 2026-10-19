import React from 'react';
import { Link } from 'react-router-dom';
import { ShieldCheck, Eye, HeartHandshake, Award, Smartphone, CheckCircle2, Download } from 'lucide-react';
import { RadarBackground } from '../components/RadarBackground';
import { APP_CONFIG } from '../data/content';

export const About: React.FC = () => {
  return (
    <div className="pt-28 pb-20 relative">
      <RadarBackground size="md" className="top-10 right-10" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0A2418] border border-[#20D77A]/30 text-xs text-[#8AE7B6]">
            <span>About AG Rider</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white font-heading tracking-tight">
            Technology That Supports <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#20D77A] to-[#8AE7B6]">
              Accessibility & Independence
            </span>
          </h1>
          <p className="text-base sm:text-lg text-[#A9C1B3] leading-relaxed">
            AG Rider is an Android accessibility assistance application engineered to help eligible professional drivers interact with supported ride-request interfaces reliably and safely.
          </p>
        </div>

        {/* Story / Mission Cards */}
        <div className="space-y-8 mb-16">
          
          {/* Card 1: The Challenge */}
          <div className="p-8 sm:p-10 rounded-3xl bg-[#0A2418] border border-[#163B27] space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-7 space-y-4">
                <div className="w-12 h-12 rounded-xl bg-[#071E14] border border-[#20D77A]/30 flex items-center justify-center text-[#20D77A]">
                  <Eye className="w-6 h-6" />
                </div>
                <h2 className="text-2xl font-bold text-white font-heading">
                  Why Driver Accessibility Matters on Two-Wheelers
                </h2>
                <p className="text-sm sm:text-base text-[#A9C1B3] leading-relaxed">
                  Operating a commercial motorcycle or scooter in high-density urban traffic presents significant physical demands. When smartphones are locked into handlebar mounts, riders face intense road vibrations, direct solar glare, wearing riding gloves, and tight 5-to-10 second acceptance windows on incoming ride offers.
                </p>
                <p className="text-sm sm:text-base text-[#A9C1B3] leading-relaxed">
                  For drivers who experience mild motor impairments, coordination hurdles, tremors, or eye strain, physically finding and pressing a small button on a vibrating screen within seconds can cause missed requests, unsafe driving distractions, and unnecessary stress.
                </p>
              </div>
              <div className="lg:col-span-5 rounded-2xl overflow-hidden border border-[#20D77A]/30 shadow-xl">
                <img 
                  src="/images/bike_handlebar_mount.jpg" 
                  alt="Bike handlebar mount in urban traffic" 
                  className="w-full h-60 sm:h-64 object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>
          </div>

          {/* Card 2: The Solution */}
          <div className="p-8 sm:p-10 rounded-3xl bg-[#0A2418] border border-[#163B27] space-y-4">
            <div className="w-12 h-12 rounded-xl bg-[#071E14] border border-[#20D77A]/30 flex items-center justify-center text-[#20D77A]">
              <Smartphone className="w-6 h-6" />
            </div>
            <h2 className="text-2xl font-bold text-white font-heading">
              What AG Rider Does
            </h2>
            <p className="text-sm sm:text-base text-[#A9C1B3] leading-relaxed">
              AG Rider utilizes standard Android Accessibility Service APIs to detect compatible ride-request screens and assist eligible drivers by triggering the Accept interaction according to the driver’s predetermined fare and distance parameters.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 text-xs text-[#8AE7B6]">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#20D77A]" />
                <span>Zero manual taps required during incoming offers</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#20D77A]" />
                <span>Driver remains 100% focused on road safety</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#20D77A]" />
                <span>Custom pickup and drop distance caps</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#20D77A]" />
                <span>Local device processing with zero data selling</span>
              </div>
            </div>
          </div>

          {/* Card 3: Responsible Use & Safety Commitment */}
          <div className="p-8 sm:p-10 rounded-3xl bg-gradient-to-br from-[#071E14] to-[#03150D] border border-[#20D77A]/30 space-y-4">
            <div className="w-12 h-12 rounded-xl bg-[#0A2418] border border-[#20D77A]/30 flex items-center justify-center text-[#20D77A]">
              <HeartHandshake className="w-6 h-6" />
            </div>
            <h2 className="text-2xl font-bold text-white font-heading">
              Commitment to Responsible & Ethical Operation
            </h2>
            <p className="text-sm sm:text-base text-[#A9C1B3] leading-relaxed">
              AG Rider is developed as an assistive accommodation tool. We strictly discourage any reckless use. Drivers must maintain valid licenses, follow municipal road safety regulations, never inspect phones while vehicles are in motion, and comply with all applicable platform partner guidelines.
            </p>
            <p className="text-sm text-[#748D7D] leading-relaxed">
              AG Rider operates independently. We do not manufacture false earnings claims or guarantee commercial outcomes. The app exists to provide assistive access for hardworking drivers.
            </p>
          </div>

        </div>

        {/* Bottom CTA */}
        <div className="text-center p-8 rounded-3xl bg-[#0A2418] border border-[#163B27] flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="text-left space-y-1">
            <h3 className="text-lg font-bold text-white font-heading">Experience AG Rider Today</h3>
            <p className="text-xs text-[#A9C1B3]">Download the verified Android APK package directly to your phone.</p>
          </div>
          <Link
            to="/download"
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-[#20D77A] text-[#03150D] font-bold text-sm shadow hover:bg-[#8AE7B6] transition-all shrink-0"
          >
            <Download className="w-4 h-4 stroke-[2.5]" />
            <span>Download APK</span>
          </Link>
        </div>

      </div>
    </div>
  );
};
