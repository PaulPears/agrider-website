import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Download, 
  Smartphone, 
  Sliders, 
  ToggleRight, 
  CheckCircle2, 
  AlertTriangle, 
  Wrench, 
  BatteryCharging, 
  Lock 
} from 'lucide-react';
import { RadarBackground } from '../components/RadarBackground';
import { APP_CONFIG } from '../data/content';

export const HowItWorks: React.FC = () => {
  const steps = [
    {
      num: '01',
      title: 'Download and Install the APK',
      desc: `Download ${APP_CONFIG.downloadFileName} directly from this official website. Open the downloaded file from your notifications or File Manager and permit "Install unknown apps" if prompted by your Android system.`,
      tip: 'Download only from our official website to ensure verified security and integrity.'
    },
    {
      num: '02',
      title: 'Mobile OTP Sign-In',
      desc: 'Launch AG Rider on your phone. Enter your 10-digit registered Indian mobile number (+91). You will receive an instantaneous SMS code. Enter the 4-digit code to complete authentication.',
      tip: 'Optional referral code can be entered at this step if provided by another driver.'
    },
    {
      num: '03',
      title: 'Review Accessibility Guidelines',
      desc: 'The app presents an on-screen overview of why Accessibility Service capabilities are utilized. Read the operational guidelines to understand how the assistive layer detects offer popups.',
      tip: 'AG Rider never accesses your private messages, camera, contacts, or financial logins.'
    },
    {
      num: '04',
      title: 'Enable Android Accessibility Service',
      desc: 'Tap the setup shortcut in the app to open your phone’s system settings (Settings → Accessibility → Installed Services → AG Rider). Toggle the switch to ON and confirm system authorization.',
      tip: 'This allows the app to detect incoming ride dialogs and assist with the Accept button.'
    },
    {
      num: '05',
      title: 'Configure Fare and Distance Limits',
      desc: 'Open the Ride Deck. Set your Minimum and Maximum Fare sliders according to your earnings targets. Adjust your maximum pickup radius and maximum drop distance limits.',
      tip: 'Setting any filter value to 0 turns off that specific restriction.'
    },
    {
      num: '06',
      title: 'Activate Assistant and Start Riding',
      desc: 'Toggle the main Assistant switch on the Ride Deck to ACTIVE. Minimize AG Rider and open your driver partner app. AG Rider will now operate in the assistive foreground layer.',
      tip: 'Monitor the accepted ride counter and tap latency directly on your Ride Deck.'
    }
  ];

  const troubleshooting = [
    {
      issue: 'SMS OTP Code Not Arriving',
      solution: 'Ensure your mobile number is typed correctly with 10 digits without leading 0. Check cellular network signal and wait 60 seconds before tapping Resend OTP. Ensure SMS inbox is not full.'
    },
    {
      issue: 'Assistant Disables Itself Unexpectedly',
      solution: 'This occurs when Android battery optimization kills background services. Open Phone Settings → Apps → AG Rider → Battery → select "Unrestricted" or "Don\'t optimize".'
    },
    {
      issue: 'Accessibility Service Turned Off After Reboot',
      solution: 'Certain custom Android skins (MIUI, ColorOS, FunTouch) toggle accessibility off upon device reboot. Simply reopen AG Rider and tap "Enable Service" to restore it.'
    },
    {
      issue: 'Accept Button Not Triggering',
      solution: 'Confirm that incoming ride offers match all your configured fare and distance thresholds. If an offer is below your minimum fare or outside your pickup radius, the assistant intentionally ignores it.'
    }
  ];

  return (
    <div className="pt-28 pb-20 relative">
      <RadarBackground size="lg" className="top-10 right-10" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0A2418] border border-[#20D77A]/30 text-xs text-[#8AE7B6]">
            <span>Setup & Workflow Guide</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white font-heading tracking-tight">
            How AG Rider Works: <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#20D77A] to-[#8AE7B6]">
              From Install to Ride
            </span>
          </h1>
          <p className="text-base sm:text-lg text-[#A9C1B3] leading-relaxed">
            Follow this clear step-by-step walkthrough to install, configure, and activate your driver accessibility assistant.
          </p>
        </div>

        {/* Steps Timeline */}
        <div className="space-y-6 mb-20">
          {steps.map((step, idx) => (
            <div 
              key={idx}
              className="p-6 sm:p-8 rounded-3xl bg-[#0A2418] border border-[#163B27] hover:border-[#20D77A]/30 transition-all flex flex-col md:flex-row items-start gap-6"
            >
              <div className="w-14 h-14 rounded-2xl bg-[#071E14] border border-[#20D77A]/40 flex items-center justify-center text-[#20D77A] font-mono font-extrabold text-xl shrink-0">
                {step.num}
              </div>
              <div className="space-y-2 flex-1">
                <h3 className="text-xl font-bold text-white font-heading">
                  {step.title}
                </h3>
                <p className="text-sm text-[#A9C1B3] leading-relaxed">
                  {step.desc}
                </p>
                <div className="inline-flex items-center gap-2 text-xs text-[#8AE7B6] bg-[#071E14] px-3 py-1.5 rounded-lg border border-[#163B27] mt-1">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#20D77A]" />
                  <span><strong>Driver Tip:</strong> {step.tip}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Troubleshooting Section */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-8">
            <Wrench className="w-6 h-6 text-[#20D77A]" />
            <h2 className="text-2xl sm:text-3xl font-bold text-white font-heading">
              Driver Troubleshooting Guide
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {troubleshooting.map((item, i) => (
              <div key={i} className="p-6 rounded-2xl bg-[#071E14] border border-[#163B27] space-y-2.5">
                <h4 className="text-base font-bold text-white flex items-center gap-2 font-heading">
                  <AlertTriangle className="w-4 h-4 text-amber-400 shrink-0" />
                  <span>{item.issue}</span>
                </h4>
                <p className="text-xs sm:text-sm text-[#A9C1B3] leading-relaxed pl-6">
                  {item.solution}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center p-8 rounded-3xl bg-[#0A2418] border border-[#20D77A]/30 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="text-left space-y-1">
            <h3 className="text-xl font-bold text-white font-heading">Ready to configure your setup?</h3>
            <p className="text-xs text-[#A9C1B3]">Download the APK and complete the 2-minute setup.</p>
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
