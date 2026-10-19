import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Accessibility as AccessibilityIcon, 
  ShieldCheck, 
  Lock, 
  Eye, 
  CheckCircle2, 
  AlertCircle, 
  Download,
  Smartphone,
  ChevronRight
} from 'lucide-react';
import { RadarBackground } from '../components/RadarBackground';
import { APP_CONFIG } from '../data/content';

export const Accessibility: React.FC = () => {
  return (
    <div className="pt-28 pb-20 relative">
      <RadarBackground size="lg" className="top-10 left-10" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0A2418] border border-[#20D77A]/30 text-xs text-[#8AE7B6]">
            <AccessibilityIcon className="w-3.5 h-3.5" />
            <span>Accessibility Declaration & Compliance</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white font-heading tracking-tight">
            Assistive Technology <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#20D77A] to-[#8AE7B6]">
              Built for Driver Inclusion
            </span>
          </h1>
          <p className="text-base sm:text-lg text-[#A9C1B3] leading-relaxed">
            Understanding why AG Rider requests Android Accessibility Service access, how your privacy is strictly safeguarded, and how you retain complete control over your device.
          </p>
        </div>

        {/* Section 1: Purpose & Target Audience */}
        <div className="p-8 sm:p-10 rounded-3xl bg-[#0A2418] border border-[#163B27] space-y-4 mb-8">
          <h2 className="text-2xl font-bold text-white font-heading flex items-center gap-3">
            <AccessibilityIcon className="w-6 h-6 text-[#20D77A]" />
            <span>The Assistive Purpose of AG Rider</span>
          </h2>
          <p className="text-sm sm:text-base text-[#A9C1B3] leading-relaxed">
            AG Rider is specifically designed for eligible commercial and two-wheeler drivers who experience physical motor, coordination, fine tremor, or situational difficulties that make rapidly locating and tapping small on-screen buttons challenging.
          </p>
          <p className="text-sm sm:text-base text-[#A9C1B3] leading-relaxed">
            During heavy traffic, motorcycle vibration, rain, or bright sunlight, interacting with small touch targets creates dangerous cognitive distraction. By utilizing the official Android Accessibility API, AG Rider acts as a digital prosthetic assistant that triggers the Accept button on supported ride screens without requiring frantic physical taps.
          </p>
        </div>

        {/* Section 2: How Accessibility Service is Used */}
        <div className="p-8 sm:p-10 rounded-3xl bg-[#0A2418] border border-[#163B27] space-y-6 mb-8">
          <h2 className="text-2xl font-bold text-white font-heading flex items-center gap-3">
            <ShieldCheck className="w-6 h-6 text-[#20D77A]" />
            <span>What the Accessibility Service Does (and Does NOT Do)</span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            {/* What it DOES */}
            <div className="p-6 rounded-2xl bg-[#071E14] border border-[#20D77A]/25 space-y-3">
              <h3 className="text-base font-bold text-[#20D77A] flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-[#20D77A]" />
                <span>Authorized Assistive Tasks</span>
              </h3>
              <ul className="space-y-2 text-xs sm:text-sm text-[#A9C1B3]">
                <li className="flex items-start gap-2">
                  <span className="text-[#20D77A] font-bold">•</span>
                  <span>Detects incoming ride offer popups from supported applications.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#20D77A] font-bold">•</span>
                  <span>Reads visible on-screen fare & distance text to verify your filter criteria.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#20D77A] font-bold">•</span>
                  <span>Triggers the Accept click action when offer parameters match your settings.</span>
                </li>
              </ul>
            </div>

            {/* What it DOES NOT DO */}
            <div className="p-6 rounded-2xl bg-[#071E14] border border-red-500/20 space-y-3">
              <h3 className="text-base font-bold text-red-400 flex items-center gap-2">
                <Lock className="w-5 h-5 text-red-400" />
                <span>Strict Privacy Prohibitions</span>
              </h3>
              <ul className="space-y-2 text-xs sm:text-sm text-[#A9C1B3]">
                <li className="flex items-start gap-2">
                  <span className="text-red-400 font-bold">•</span>
                  <span>NEVER reads personal chats, SMS, WhatsApp messages, or emails.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-400 font-bold">•</span>
                  <span>NEVER accesses banking apps, passwords, or payment OTPs.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-400 font-bold">•</span>
                  <span>NEVER transmits screen recordings or personal photos to external servers.</span>
                </li>
              </ul>
            </div>

          </div>
        </div>

        {/* Section 3: Permission Revocation */}
        <div className="p-8 sm:p-10 rounded-3xl bg-[#0A2418] border border-[#163B27] space-y-4 mb-8">
          <h2 className="text-2xl font-bold text-white font-heading flex items-center gap-3">
            <Smartphone className="w-6 h-6 text-[#20D77A]" />
            <span>How to Manage or Revoke Permissions</span>
          </h2>
          <p className="text-sm text-[#A9C1B3] leading-relaxed">
            You maintain 100% control over your phone at all times. If you ever choose to disable the accessibility service or stop using AG Rider:
          </p>
          <ol className="list-decimal list-inside space-y-2 text-xs sm:text-sm text-[#8AE7B6] bg-[#071E14] p-4 rounded-2xl border border-[#163B27]">
            <li>Open your Android phone <strong>Settings</strong>.</li>
            <li>Scroll down and select <strong>Accessibility</strong>.</li>
            <li>Under <em>Installed Apps / Downloaded Services</em>, tap <strong>AG Rider</strong>.</li>
            <li>Toggle the switch to <strong>OFF</strong>. The assistant will immediately cease all background interaction.</li>
          </ol>
        </div>

        {/* Section 4: Responsible Use Notice */}
        <div id="responsible-use" className="p-8 sm:p-10 rounded-3xl bg-gradient-to-br from-[#071E14] to-[#03150D] border-2 border-[#20D77A]/40 space-y-4 mb-16">
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#20D77A] font-mono">
            <AlertCircle className="w-4 h-4" />
            <span>Mandatory Safe Driving Notice</span>
          </div>
          <h2 className="text-2xl font-bold text-white font-heading">
            Responsible Driver Conduct & Road Safety
          </h2>
          <p className="text-sm sm:text-base text-[#A9C1B3] leading-relaxed">
            AG Rider is an accessibility aid designed to minimize physical screen touching so drivers can keep their attention focused on the roadway. Users remain exclusively responsible for operating their vehicle safely, maintaining required commercial permits, abiding by municipal traffic statutes, and respecting customer service standards of third-party platforms.
          </p>
          <p className="text-xs text-[#748D7D] leading-relaxed">
            AG Rider does not provide medical diagnoses or claim to cure medical conditions. Use of the software does not replace mandatory physical driving competence requirements.
          </p>
        </div>

        {/* Bottom CTA */}
        <div className="text-center p-8 rounded-3xl bg-[#0A2418] border border-[#163B27] flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="text-left space-y-1">
            <h3 className="text-xl font-bold text-white font-heading">Download AG Rider APK</h3>
            <p className="text-xs text-[#A9C1B3]">Verified safe, privacy-first accessibility driver tool.</p>
          </div>
          <Link
            to="/download"
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-[#20D77A] text-[#03150D] font-bold text-sm shadow hover:bg-[#8AE7B6] transition-all shrink-0"
          >
            <Download className="w-4 h-4 stroke-[2.5]" />
            <span>Get APK Download</span>
          </Link>
        </div>

      </div>
    </div>
  );
};
