import React, { useState } from 'react';
import { 
  Mail, 
  MessageSquare, 
  ShieldAlert, 
  Send, 
  CheckCircle2, 
  AlertCircle, 
  Clock, 
  Info 
} from 'lucide-react';
import { RadarBackground } from '../components/RadarBackground';
import { APP_CONFIG } from '../data/content';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: 'Technical Issue',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg('');

    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setErrorMsg('Please complete all required fields.');
      return;
    }

    // Prepare mailto link as fallback to ensure message actually reaches support
    const subjectLine = encodeURIComponent(`[AG Rider Support] ${formData.subject} - ${formData.name}`);
    const bodyContent = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone}\nSubject: ${formData.subject}\n\nMessage:\n${formData.message}`
    );

    window.open(`mailto:${APP_CONFIG.supportEmail}?subject=${subjectLine}&body=${bodyContent}`, '_blank');
    setSubmitted(true);
  };

  return (
    <div className="pt-28 pb-20 relative">
      <RadarBackground size="lg" className="top-10 right-10" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0A2418] border border-[#20D77A]/30 text-xs text-[#8AE7B6]">
            <Mail className="w-4 h-4 text-[#20D77A]" />
            <span>Driver Assistance & Help Center</span>
          </div>
          
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white font-heading tracking-tight">
            Contact & Official <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#20D77A] to-[#8AE7B6]">
              Technical Support
            </span>
          </h1>

          <p className="text-sm sm:text-base text-[#A9C1B3] leading-relaxed">
            Need help configuring AG Rider, troubleshooting permissions, or providing feedback? Reach out to our dedicated support team.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Left: Contact Form */}
          <div className="lg:col-span-7 p-8 sm:p-10 rounded-3xl bg-[#0A2418] border border-[#163B27] relative">
            <h2 className="text-2xl font-bold text-white mb-2 font-heading">
              Send a Support Request
            </h2>
            <p className="text-xs text-[#A9C1B3] mb-6">
              Fill out the form below. We will launch your email client with your message pre-formatted.
            </p>

            {submitted ? (
              <div className="p-6 rounded-2xl bg-[#071E14] border border-[#20D77A]/40 text-center space-y-3">
                <CheckCircle2 className="w-12 h-12 text-[#20D77A] mx-auto" />
                <h3 className="text-lg font-bold text-white">Support Inquiry Launched!</h3>
                <p className="text-xs text-[#A9C1B3] leading-relaxed">
                  Your default email client has been opened with your inquiry prepared for <strong className="text-[#8AE7B6]">{APP_CONFIG.supportEmail}</strong>. You may also contact us directly on Telegram for rapid real-time assistance.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-3 px-4 py-2 text-xs font-semibold rounded-xl bg-[#103424] text-[#20D77A] border border-[#20D77A]/30"
                >
                  Send another inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                {errorMsg && (
                  <div className="p-3 rounded-xl bg-red-900/30 border border-red-500/40 text-xs text-red-300 flex items-center gap-2">
                    <AlertCircle className="w-4 h-4 shrink-0" />
                    <span>{errorMsg}</span>
                  </div>
                )}

                <div>
                  <label className="block text-xs font-medium text-[#A9C1B3] mb-1">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Ramesh Kumar"
                    className="w-full px-4 py-3 rounded-xl bg-[#071E14] border border-[#163B27] focus:border-[#20D77A] text-white text-sm focus:outline-none"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-medium text-[#A9C1B3] mb-1">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="driver@example.com"
                      className="w-full px-4 py-3 rounded-xl bg-[#071E14] border border-[#163B27] focus:border-[#20D77A] text-white text-sm focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-[#A9C1B3] mb-1">
                      Phone Number (Optional)
                    </label>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="+91 98765 43210"
                      className="w-full px-4 py-3 rounded-xl bg-[#071E14] border border-[#163B27] focus:border-[#20D77A] text-white text-sm focus:outline-none"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-medium text-[#A9C1B3] mb-1">
                    Inquiry Topic
                  </label>
                  <select
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-[#071E14] border border-[#163B27] focus:border-[#20D77A] text-white text-sm focus:outline-none"
                  >
                    <option value="Technical Issue">Technical / Assistant Not Responding</option>
                    <option value="Permissions Help">Accessibility Permission Setup</option>
                    <option value="Filters Configuration">Fare & Distance Filters Question</option>
                    <option value="APK Installation">APK Download / Installation Issue</option>
                    <option value="General Question">General Feedback or Question</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-medium text-[#A9C1B3] mb-1">
                    Message / Issue Description *
                  </label>
                  <textarea
                    rows={4}
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Please specify your phone model (e.g. Redmi 12, Samsung M14) and Android version if reporting a technical glitch..."
                    className="w-full px-4 py-3 rounded-xl bg-[#071E14] border border-[#163B27] focus:border-[#20D77A] text-white text-sm focus:outline-none"
                  />
                </div>

                {/* Privacy and Security Warning */}
                <div className="p-3 rounded-xl bg-[#03150D] border border-[#163B27] text-[11px] text-[#748D7D] flex items-start gap-2">
                  <ShieldAlert className="w-4 h-4 text-[#20D77A] shrink-0 mt-0.5" />
                  <span>
                    <strong>Security Reminder:</strong> Never share SMS OTP codes, passwords, or payment card numbers. Our support will never ask for private credentials.
                  </span>
                </div>

                <button
                  type="submit"
                  className="w-full py-4 rounded-xl bg-[#20D77A] hover:bg-[#8AE7B6] text-[#03150D] font-bold text-sm flex items-center justify-center gap-2 shadow-lg shadow-[#20D77A]/20 transition-all cursor-pointer"
                >
                  <Send className="w-4 h-4 stroke-[2.5]" />
                  <span>Submit Support Request</span>
                </button>
              </form>
            )}
          </div>

          {/* Right: Direct Channels & Guidance */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Channel Card 1: Email */}
            <div className="p-6 rounded-2xl bg-[#0A2418] border border-[#163B27] space-y-3">
              <div className="w-10 h-10 rounded-xl bg-[#071E14] border border-[#20D77A]/30 flex items-center justify-center text-[#20D77A]">
                <Mail className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-white font-heading">Direct Email Support</h3>
              <p className="text-xs text-[#A9C1B3]">
                Send technical error logs, screenshots, and setup questions directly to our inbox.
              </p>
              <a
                href={`mailto:${APP_CONFIG.supportEmail}`}
                className="text-sm font-mono font-semibold text-[#20D77A] hover:underline block"
              >
                {APP_CONFIG.supportEmail}
              </a>
            </div>

            {/* Channel Card 2: Telegram */}
            <div className="p-6 rounded-2xl bg-[#0A2418] border border-[#163B27] space-y-3">
              <div className="w-10 h-10 rounded-xl bg-[#071E14] border border-[#20D77A]/30 flex items-center justify-center text-[#20D77A]">
                <MessageSquare className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-white font-heading">Telegram Driver Channel</h3>
              <p className="text-xs text-[#A9C1B3]">
                Connect with the support team for real-time guidance and assistance.
              </p>
              <span className="text-sm font-mono font-semibold text-[#8AE7B6]">
                {APP_CONFIG.telegramHandle}
              </span>
            </div>

            {/* Technical Bug Report Guidance */}
            <div className="p-6 rounded-2xl bg-[#071E14] border border-[#163B27] space-y-3 text-xs text-[#A9C1B3]">
              <h4 className="text-sm font-bold text-white flex items-center gap-2 font-heading">
                <Info className="w-4 h-4 text-[#20D77A]" />
                <span>Tips for Faster Support Resolution</span>
              </h4>
              <p className="leading-relaxed">
                When reporting an issue with the Accessibility assistant, please include:
              </p>
              <ul className="space-y-1.5 list-disc list-inside text-[#748D7D]">
                <li>Your phone brand and model (e.g., Vivo T2, Poco M6)</li>
                <li>Your Android version (e.g., Android 13 or 14)</li>
                <li>Whether battery optimization was whitelisted</li>
                <li>Screenshot of the issue if visible</li>
              </ul>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
};
