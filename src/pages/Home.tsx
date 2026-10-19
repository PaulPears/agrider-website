import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Download, 
  ChevronRight, 
  ShieldCheck, 
  Sliders, 
  Accessibility, 
  Smartphone, 
  CheckCircle2, 
  AlertCircle,
  HelpCircle,
  Cpu,
  Layers,
  ArrowRight
} from 'lucide-react';
import { RadarBackground } from '../components/RadarBackground';
import { PhoneMockup } from '../components/PhoneMockup';
import { APP_CONFIG, FEATURES, FAQ_DATA } from '../data/content';

export const Home: React.FC = () => {
  return (
    <div className="relative pt-24 pb-16 overflow-hidden">
      
      {/* =========================================================================
          HERO SECTION
          ========================================================================= */}
      <section className="relative min-h-[85vh] flex items-center pt-8 pb-16 lg:py-20">
        
        {/* Background Image with Dark Emerald Overlay */}
        <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
          <img 
            src="/images/hero_bike_rider.jpg" 
            alt="Motorcycle rider in night city with neon green accents" 
            className="w-full h-full object-cover object-center opacity-25 scale-105 filter blur-[1px]"
          />
          {/* Gradients blending into theme */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#03150D] via-[#03150D]/85 to-[#03150D]/70" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#03150D] via-transparent to-[#03150D]" />
        </div>

        {/* Radar concentric circular graphics */}
        <RadarBackground size="lg" className="top-10 right-0 lg:right-10" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            
            {/* Left Column: Headlines & CTAs */}
            <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
              
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0A2418] border border-[#20D77A]/35 text-xs text-[#8AE7B6]">
                <span className="w-2 h-2 rounded-full bg-[#20D77A] animate-pulse" />
                <span className="font-semibold uppercase tracking-wider">Driver Assist Technology</span>
                <span className="text-[#748D7D]">•</span>
                <span className="text-[#F3F8F4]">v{APP_CONFIG.version} Released</span>
              </div>

              {/* Main Headline */}
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white font-heading leading-[1.12]">
                Ride Assistance. <br className="hidden sm:inline" />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#20D77A] to-[#8AE7B6]">
                  Made More Accessible.
                </span>
              </h1>

              {/* Tagline / Subtitle */}
              <p className="text-lg sm:text-xl text-[#A9C1B3] max-w-2xl mx-auto lg:mx-0 leading-relaxed font-light">
                AG Rider is designed to help eligible professional drivers interact with supported ride-request screens through accessibility assistance and configurable controls.
              </p>

              {/* CTA Group */}
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
                <Link
                  to="/download"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-2xl bg-[#20D77A] hover:bg-[#8AE7B6] text-[#03150D] font-extrabold text-base transition-all duration-200 shadow-xl shadow-[#20D77A]/20 hover:shadow-[#20D77A]/35 active:scale-95 cursor-pointer"
                >
                  <Download className="w-5 h-5 stroke-[2.5]" />
                  <span>Download the App</span>
                </Link>

                <Link
                  to="/features"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-4 rounded-2xl bg-[#0A2418] hover:bg-[#103424] text-[#F3F8F4] border border-[#20D77A]/30 hover:border-[#20D77A] font-semibold text-base transition-all"
                >
                  <span>Explore Features</span>
                  <ChevronRight className="w-4 h-4 text-[#20D77A]" />
                </Link>
              </div>

              {/* Trust Badges */}
              <div className="pt-4 grid grid-cols-2 sm:grid-cols-3 gap-3 max-w-lg mx-auto lg:mx-0 text-left">
                <div className="p-3 rounded-xl bg-[#071E14]/70 border border-[#163B27] flex items-center gap-2.5">
                  <ShieldCheck className="w-5 h-5 text-[#20D77A] shrink-0" />
                  <span className="text-xs text-[#A9C1B3] leading-snug">Android Accessibility Service</span>
                </div>
                <div className="p-3 rounded-xl bg-[#071E14]/70 border border-[#163B27] flex items-center gap-2.5">
                  <Sliders className="w-5 h-5 text-[#20D77A] shrink-0" />
                  <span className="text-xs text-[#A9C1B3] leading-snug">Fare & Radius Filter Controls</span>
                </div>
                <div className="col-span-2 sm:col-span-1 p-3 rounded-xl bg-[#071E14]/70 border border-[#163B27] flex items-center gap-2.5">
                  <Smartphone className="w-5 h-5 text-[#20D77A] shrink-0" />
                  <span className="text-xs text-[#A9C1B3] leading-snug">Direct APK No Bloatware</span>
                </div>
              </div>

            </div>

            {/* Right Column: Phone Mockup */}
            <div className="lg:col-span-5 flex justify-center">
              <PhoneMockup />
            </div>

          </div>
        </div>
      </section>


      {/* =========================================================================
          COCKPIT BANNER: BIKE POV VIEW
          ========================================================================= */}
      <section className="relative py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-3xl overflow-hidden border border-[#20D77A]/25 shadow-2xl bg-[#0A2418]">
          <div className="grid grid-cols-1 lg:grid-cols-12 items-center">
            
            {/* Image side */}
            <div className="lg:col-span-5 relative h-64 lg:h-80 overflow-hidden">
              <img 
                src="/images/driver_cockpit.jpg" 
                alt="Driver smartphone cockpit mounted on motorcycle" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t lg:bg-gradient-to-r from-transparent via-transparent to-[#0A2418]" />
            </div>

            {/* Content side */}
            <div className="lg:col-span-7 p-6 sm:p-10 space-y-4">
              <span className="text-xs font-bold tracking-widest text-[#20D77A] uppercase font-mono">
                Engineered for Road Realities
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-white font-heading">
                Fast, Focused, and Ready for Every Ride
              </h2>
              <p className="text-sm text-[#A9C1B3] leading-relaxed">
                When you are navigating congested streets and mounted motorcycle displays, vibration, sunlight, and tight response windows make tapping small touch targets difficult. AG Rider provides a reliable assistive layer so eligible drivers can operate with confidence.
              </p>
              <div className="flex flex-wrap gap-4 pt-2 text-xs text-[#8AE7B6]">
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-[#20D77A]" /> 0ms Response Optimization
                </span>
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-[#20D77A]" /> Configurable Thresholds
                </span>
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-[#20D77A]" /> Rapido & Ola Interface Context
                </span>
              </div>
            </div>

          </div>
        </div>
      </section>


      {/* =========================================================================
          KEY FEATURES OVERVIEW
          ========================================================================= */}
      <section className="py-20 relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-xs font-bold uppercase tracking-widest text-[#20D77A] font-mono">
            Core Capabilities
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white font-heading">
            Purpose-Built for Driver Accessibility
          </h2>
          <p className="text-base text-[#A9C1B3]">
            Every feature in AG Rider is tailored to assist eligible professional drivers in navigating ride-offer screens safely and efficiently.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {FEATURES.map((feat) => (
            <div 
              key={feat.id}
              className="p-6 rounded-2xl bg-[#0A2418] border border-[#163B27] hover:border-[#20D77A]/50 transition-all duration-300 hover:-translate-y-1 group flex flex-col justify-between"
            >
              <div>
                <div className="w-12 h-12 rounded-xl bg-[#071E14] border border-[#20D77A]/25 flex items-center justify-center text-[#20D77A] mb-5 group-hover:scale-110 transition-transform">
                  <Cpu className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2 font-heading">
                  {feat.title}
                </h3>
                <p className="text-xs text-[#8AE7B6] font-medium mb-3">
                  {feat.tagline}
                </p>
                <p className="text-sm text-[#A9C1B3] leading-relaxed mb-4">
                  {feat.description}
                </p>
              </div>

              <div className="pt-4 border-t border-[#163B27]/70 space-y-1.5">
                {feat.details.slice(0, 2).map((detail, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-xs text-[#748D7D]">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#20D77A] shrink-0" />
                    <span className="truncate">{detail}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Link
            to="/features"
            className="inline-flex items-center gap-2 text-sm font-semibold text-[#20D77A] hover:text-[#8AE7B6] group"
          >
            <span>View complete detailed feature specifications</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </section>


      {/* =========================================================================
          HOW IT WORKS (QUICK SEQUENCE)
          ========================================================================= */}
      <section className="py-20 bg-[#020E08] border-y border-[#163B27] relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <span className="text-xs font-bold uppercase tracking-widest text-[#20D77A] font-mono">
              Onboarding Process
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white font-heading">
              Get Started in Minutes
            </h2>
            <p className="text-base text-[#A9C1B3]">
              Simple, transparent setup with zero complex registration hurdles.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            
            <div className="p-6 rounded-2xl bg-[#0A2418] border border-[#163B27] relative">
              <span className="w-8 h-8 rounded-full bg-[#103424] text-[#20D77A] font-mono font-bold flex items-center justify-center text-sm mb-4 border border-[#20D77A]/30">
                01
              </span>
              <h3 className="text-base font-bold text-white mb-2 font-heading">Install APK</h3>
              <p className="text-xs text-[#A9C1B3] leading-relaxed">
                Download the verified official AG Rider Android package directly from this website.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#0A2418] border border-[#163B27] relative">
              <span className="w-8 h-8 rounded-full bg-[#103424] text-[#20D77A] font-mono font-bold flex items-center justify-center text-sm mb-4 border border-[#20D77A]/30">
                02
              </span>
              <h3 className="text-base font-bold text-white mb-2 font-heading">Mobile OTP Sign-In</h3>
              <p className="text-xs text-[#A9C1B3] leading-relaxed">
                Enter your 10-digit mobile number to receive a secure one-time SMS verification code.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#0A2418] border border-[#163B27] relative">
              <span className="w-8 h-8 rounded-full bg-[#103424] text-[#20D77A] font-mono font-bold flex items-center justify-center text-sm mb-4 border border-[#20D77A]/30">
                03
              </span>
              <h3 className="text-base font-bold text-white mb-2 font-heading">Grant Permissions</h3>
              <p className="text-xs text-[#A9C1B3] leading-relaxed">
                Review and toggle the Android Accessibility Service permission in your system settings.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#0A2418] border border-[#163B27] relative">
              <span className="w-8 h-8 rounded-full bg-[#103424] text-[#20D77A] font-mono font-bold flex items-center justify-center text-sm mb-4 border border-[#20D77A]/30">
                04
              </span>
              <h3 className="text-base font-bold text-white mb-2 font-heading">Configure & Drive</h3>
              <p className="text-xs text-[#A9C1B3] leading-relaxed">
                Set your fare and radius preferences on the Ride Deck, activate the assistant, and hit the road.
              </p>
            </div>

          </div>

          <div className="mt-10 text-center">
            <Link
              to="/how-it-works"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#0A2418] hover:bg-[#103424] text-sm text-[#F3F8F4] border border-[#163B27] hover:border-[#20D77A] font-medium transition-all"
            >
              <span>Read Full Step-by-Step Guide & Troubleshooting</span>
              <ChevronRight className="w-4 h-4 text-[#20D77A]" />
            </Link>
          </div>

        </div>
      </section>


      {/* =========================================================================
          ACCESSIBILITY & RESPONSIBLE USE SUMMARY
          ========================================================================= */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-br from-[#0A2418] to-[#071E14] border border-[#20D77A]/30 relative overflow-hidden">
          
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#20D77A] font-mono">
              <Accessibility className="w-4 h-4" />
              <span>Ethical & Safe Assistive Technology</span>
            </div>
            
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white font-heading">
              Accessibility and Responsible Use
            </h2>

            <p className="text-sm sm:text-base text-[#A9C1B3] leading-relaxed">
              AG Rider is intended for legitimate accessibility assistance. We emphasize road safety, respect for platform rules, and privacy. The app does not read your personal conversations, messages, or bank details, and all filter calculations occur directly on your Android device.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-4 text-xs text-[#8AE7B6]">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#20D77A] shrink-0" />
                <span>On-device UI interaction processing</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#20D77A] shrink-0" />
                <span>Easily revoked anytime in Android settings</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#20D77A]" />
                <span>Zero personal data sold or tracked</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#20D77A]" />
                <span>Always prioritize road driving safety</span>
              </div>
            </div>

            <div className="pt-4">
              <Link
                to="/accessibility"
                className="inline-flex items-center gap-2 text-sm font-semibold text-[#20D77A] hover:underline"
              >
                <span>Read our full Accessibility Declaration</span>
                <ChevronRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

        </div>
      </section>


      {/* =========================================================================
          COMMON QUESTIONS ACCORDION PREVIEW
          ========================================================================= */}
      <section className="py-16 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 space-y-3">
          <span className="text-xs font-bold uppercase tracking-widest text-[#20D77A] font-mono">
            Got Questions?
          </span>
          <h2 className="text-3xl font-bold text-white font-heading">
            Frequently Asked Questions
          </h2>
          <p className="text-sm text-[#A9C1B3]">
            Quick answers about AG Rider installation, compatibility, and assistive features.
          </p>
        </div>

        <div className="space-y-3">
          {FAQ_DATA.slice(0, 4).map((faq, index) => (
            <div key={index} className="p-5 rounded-2xl bg-[#0A2418] border border-[#163B27]">
              <h3 className="text-sm sm:text-base font-bold text-white mb-2 flex items-center gap-2">
                <HelpCircle className="w-4 h-4 text-[#20D77A] shrink-0" />
                <span>{faq.question}</span>
              </h3>
              <p className="text-xs sm:text-sm text-[#A9C1B3] leading-relaxed pl-6">
                {faq.answer}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-8 text-center">
          <Link
            to="/faq"
            className="inline-flex items-center gap-2 text-sm font-semibold text-[#20D77A] hover:text-[#8AE7B6]"
          >
            <span>View all 13 Driver FAQs & Support Topics</span>
            <ChevronRight className="w-4 h-4" />
          </Link>
        </div>
      </section>


      {/* =========================================================================
          DOWNLOAD CTA SECTION
          ========================================================================= */}
      <section className="py-20 relative overflow-hidden">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          
          <div className="p-8 sm:p-14 rounded-3xl bg-gradient-to-b from-[#0A2418] via-[#071E14] to-[#03150D] border-2 border-[#20D77A]/40 shadow-2xl space-y-6 relative overflow-hidden">
            
            <RadarBackground size="sm" className="top-0 left-0" />

            <img src="/logo.svg" alt="AG Rider Logo" className="w-16 h-16 mx-auto mb-2" />

            <h2 className="text-3xl sm:text-4xl font-extrabold text-white font-heading">
              Ready to Upgrade Your Ride Cockpit?
            </h2>

            <p className="text-base text-[#A9C1B3] max-w-xl mx-auto">
              Download the official AG Rider Android package today. Fast installation, clean interface, and dedicated accessibility assistance for every shift.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
              <Link
                to="/download"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-2xl bg-[#20D77A] hover:bg-[#8AE7B6] text-[#03150D] font-extrabold text-base shadow-lg shadow-[#20D77A]/25 transition-transform hover:scale-105 active:scale-95"
              >
                <Download className="w-5 h-5 stroke-[2.5]" />
                <span>Download AG Rider APK</span>
              </Link>

              <Link
                to="/about"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-4 rounded-2xl bg-[#071E14] text-[#F3F8F4] border border-[#163B27] hover:border-[#20D77A] text-sm font-semibold transition-colors"
              >
                <span>About Our Mission</span>
              </Link>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-4 text-xs text-[#748D7D] pt-4">
              <span>Version: v{APP_CONFIG.version}</span>
              <span>•</span>
              <span>Package Size: {APP_CONFIG.apkSize}</span>
              <span>•</span>
              <span>Compatibility: {APP_CONFIG.minAndroid}</span>
            </div>

          </div>

        </div>
      </section>

    </div>
  );
};
