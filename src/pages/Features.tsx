import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Smartphone, 
  LayoutDashboard, 
  Sliders, 
  MapPin, 
  Accessibility, 
  BatteryCharging, 
  UserCheck, 
  ShieldCheck, 
  Download, 
  CheckCircle2,
  AlertCircle
} from 'lucide-react';
import { RadarBackground } from '../components/RadarBackground';
import { APP_CONFIG } from '../data/content';

export const Features: React.FC = () => {
  const featureList = [
    {
      icon: Smartphone,
      title: 'Mobile OTP Authentication',
      category: 'Security & Access',
      description: 'Streamlined driver access with no passwords required. Enter your 10-digit mobile number, receive a quick one-time SMS verification code, and start your session instantly.',
      highlights: [
        'Fast SMS-based OTP verification',
        'Optional referral code entry on onboarding',
        'Remembers driver session preferences safely on device',
        'Direct login without complex password management'
      ]
    },
    {
      icon: LayoutDashboard,
      title: 'Ride Deck Cockpit',
      category: 'Real-Time Interface',
      description: 'The primary operational dashboard in AG Rider. Monitor your active assistant state, daily accepted ride metrics, tap latency, and status at a single glance.',
      highlights: [
        'Single-tap Assistant Active / Paused toggle',
        'Session count of accepted rides today',
        '0ms low-latency touch response indicator',
        'Quick refresh and service diagnostics'
      ]
    },
    {
      icon: Sliders,
      title: 'Configurable Fare Filters',
      category: 'Economics & Preferences',
      description: 'Set clear minimum and maximum fare thresholds so you only accept trips that align with your vehicle fuel efficiency and financial targets.',
      highlights: [
        'Minimum Fare threshold setting (e.g. ₹50+)',
        'Maximum Fare threshold setting for short-distance preference',
        'Set to 0 to disable the fare filter constraint',
        'Instant on-device evaluation before triggering Accept'
      ]
    },
    {
      icon: MapPin,
      title: 'Geographic Radius & Distance Controls',
      category: 'Route Protection',
      description: 'Protect yourself from unprofitable long-distance pickups and unexpected deadhead trips with 3 dedicated distance filters.',
      highlights: [
        'Minimum Pickup Distance control',
        'Maximum Pickup Radius limit (e.g. cap at 3 km)',
        'Maximum Drop Distance threshold (e.g. cap at 20 km)',
        'Zero values disable specific radius restrictions'
      ]
    },
    {
      icon: Accessibility,
      title: 'Android Accessibility Service Engine',
      category: 'Assistive Core',
      description: 'The core assistive framework engineered to assist drivers who face motor coordination difficulties or intense handlebar vibrations when pressing accept.',
      highlights: [
        'Detects incoming ride offer dialogue boxes',
        'Triggers the on-screen Accept touch command reliably',
        'Configurable tap delay (from instant 0ms to custom milliseconds)',
        'Strictly local processing — no personal messages or photos are read'
      ]
    },
    {
      icon: BatteryCharging,
      title: 'Battery & Power Guidance',
      category: 'System Performance',
      description: 'Android manufacturers frequently terminate background services. AG Rider includes built-in guidance to configure battery management for uninterrupted operation.',
      highlights: [
        'Step-by-step guidance to disable OEM background task killers',
        'Ensures assistant does not stop during active ride shifts',
        'Low battery footprint optimized for standard Android devices',
        'Minimal RAM usage with zero screen overhead'
      ]
    },
    {
      icon: ShieldCheck,
      title: 'Supported Ride Interface Context',
      category: 'Compatibility',
      description: 'AG Rider provides touch assistance for supported ride-hailing interfaces referenced in the application, including Rapido and Ola.',
      highlights: [
        'Designed around popular driver application interface layouts',
        'Independent utility (not officially affiliated with Rapido or Ola)',
        'Responds to standard incoming popup dialogs',
        'Designed to keep driver eyes on the road'
      ]
    },
    {
      icon: UserCheck,
      title: 'Profile & Device Settings',
      category: 'Account Management',
      description: 'Check registered mobile details, review active permission statuses, view system diagnostics, and access legal policies with one tap.',
      highlights: [
        'Clear display of registered driver phone number',
        'Direct shortcuts to Android Accessibility system settings',
        'Quick links to Privacy Policy and Terms of Use',
        'One-tap secure logout and cache clearance'
      ]
    }
  ];

  return (
    <div className="pt-28 pb-20 relative">
      <RadarBackground size="lg" className="top-10 left-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0A2418] border border-[#20D77A]/30 text-xs text-[#8AE7B6]">
            <span>Capabilities & Specifications</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white font-heading tracking-tight">
            Engineered for <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#20D77A] to-[#8AE7B6]">
              Maximum Driver Accessibility
            </span>
          </h1>
          <p className="text-base sm:text-lg text-[#A9C1B3] leading-relaxed">
            Explore every built-in tool in AG Rider. Designed to reduce cognitive load, physical strain, and road distractions for eligible commercial drivers.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {featureList.map((feat, index) => {
            const Icon = feat.icon;
            return (
              <div 
                key={index}
                className="p-8 rounded-3xl bg-[#0A2418] border border-[#163B27] hover:border-[#20D77A]/40 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-xl bg-[#071E14] border border-[#20D77A]/30 flex items-center justify-center text-[#20D77A]">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-xs font-mono font-semibold uppercase tracking-wider text-[#8AE7B6] px-2.5 py-1 rounded-md bg-[#103424] border border-[#20D77A]/20">
                      {feat.category}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-white mb-3 font-heading">
                    {feat.title}
                  </h3>

                  <p className="text-sm text-[#A9C1B3] leading-relaxed mb-6">
                    {feat.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-[#163B27] space-y-2">
                  {feat.highlights.map((h, i) => (
                    <div key={i} className="flex items-center gap-2 text-xs text-[#8AE7B6]">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#20D77A] shrink-0" />
                      <span>{h}</span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Two-Wheeler Ergonomics Highlight Banner */}
        <div className="p-8 sm:p-10 rounded-3xl bg-gradient-to-r from-[#071E14] via-[#0A2418] to-[#03150D] border border-[#20D77A]/30 mb-12 shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-5 rounded-2xl overflow-hidden shadow-xl border border-[#163B27]">
              <img 
                src="/images/bike_taxi_rider.jpg" 
                alt="Two-wheeler delivery captain on motorbike" 
                className="w-full h-64 object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="lg:col-span-7 space-y-4">
              <span className="text-xs font-bold uppercase tracking-widest text-[#20D77A] font-mono">
                🏍️ Specialized for Two-Wheeler Captains
              </span>
              <h3 className="text-2xl sm:text-3xl font-bold text-white font-heading">
                Why Bike Captains Depend on AG Rider
              </h3>
              <p className="text-sm text-[#A9C1B3] leading-relaxed">
                Riding a motorcycle while monitoring incoming ride requests requires split-second decisions. AG Rider acts as your virtual co-pilot—automatically screening offers by fare and distance so you never have to fumble with riding gloves or take your eyes off chaotic city traffic.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1 text-xs text-[#8AE7B6]">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#20D77A] shrink-0" />
                  <span>Gloves-Safe Auto Accept</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#20D77A] shrink-0" />
                  <span>Handlebar Mount Vibration Resilient</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Disclaimer Callout */}
        <div className="p-6 rounded-2xl bg-[#071E14] border border-[#163B27] mb-12 flex items-start gap-4 text-xs text-[#748D7D] leading-relaxed">
          <AlertCircle className="w-5 h-5 text-[#20D77A] shrink-0 mt-0.5" />
          <p>
            <strong>Compatibility Note:</strong> Supported interfaces currently reference Rapido and Ola interfaces for touch accessibility assistance. Feature availability and responsiveness are subject to device hardware, Android OS version, active user permissions, and third-party application UI updates.
          </p>
        </div>

        {/* Bottom CTA */}
        <div className="text-center p-8 rounded-3xl bg-[#0A2418] border border-[#20D77A]/30 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="text-left space-y-1">
            <h3 className="text-xl font-bold text-white font-heading">Get the APK on Your Android Device</h3>
            <p className="text-xs text-[#A9C1B3]">Fast installation • Works on Android 8.0 and newer.</p>
          </div>
          <Link
            to="/download"
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-[#20D77A] text-[#03150D] font-bold text-sm shadow hover:bg-[#8AE7B6] transition-all shrink-0"
          >
            <Download className="w-4 h-4 stroke-[2.5]" />
            <span>Download APK Now</span>
          </Link>
        </div>

      </div>
    </div>
  );
};
