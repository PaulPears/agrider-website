import React, { useState, useEffect } from 'react';
import QRCode from 'qrcode';
import { 
  Download as DownloadIcon, 
  ShieldCheck, 
  CheckCircle2, 
  Smartphone, 
  Copy, 
  Check, 
  QrCode, 
  AlertTriangle, 
  FileCheck,
  RefreshCw
} from 'lucide-react';
import { RadarBackground } from '../components/RadarBackground';
import { APP_CONFIG } from '../data/content';

export const Download: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const [downloadStarted, setDownloadStarted] = useState(false);
  const [qrCodeDataUrl, setQrCodeDataUrl] = useState<string>('');

  useEffect(() => {
    // Generate real scannable QR code directing mobile devices to the download page
    const mobileDownloadUrl = `${APP_CONFIG.siteUrl}/download`;
    QRCode.toDataURL(mobileDownloadUrl, {
      width: 240,
      margin: 1,
      color: {
        dark: '#03150D',
        light: '#FFFFFF',
      },
    })
      .then((url) => setQrCodeDataUrl(url))
      .catch((err) => console.error('Failed to generate QR code', err));
  }, []);

  const handleCopyHash = () => {
    navigator.clipboard.writeText(APP_CONFIG.sha256);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleDownloadClick = () => {
    setDownloadStarted(true);
    // Trigger download
    const link = document.createElement('a');
    link.href = APP_CONFIG.downloadPath;
    link.download = APP_CONFIG.downloadFileName;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="pt-28 pb-20 relative">
      <RadarBackground size="lg" className="top-10 right-10" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0A2418] border border-[#20D77A]/30 text-xs text-[#8AE7B6]">
            <ShieldCheck className="w-4 h-4 text-[#20D77A]" />
            <span>Official Android APK Download Center</span>
          </div>
          
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white font-heading tracking-tight">
            Download AG Rider <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#20D77A] to-[#8AE7B6]">
              Latest Official Release
            </span>
          </h1>

          <p className="text-base sm:text-lg text-[#A9C1B3] leading-relaxed">
            Get the full-featured AG Rider APK directly on your Android phone. Fast download, zero unnecessary bloatware, and instant driver setup.
          </p>
        </div>

        {/* PRIMARY DOWNLOAD CARD */}
        <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-br from-[#0A2418] via-[#071E14] to-[#03150D] border-2 border-[#20D77A]/40 shadow-2xl relative overflow-hidden mb-12">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left: APK details and Action Button */}
            <div className="lg:col-span-8 space-y-6">
              
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 rounded-2xl bg-[#0B291B] border border-[#20D77A]/40 flex items-center justify-center p-2.5 neon-glow shrink-0">
                  <img src="/logo.svg" alt="AG Rider Logo" className="w-full h-full" />
                </div>
                <div>
                  <h2 className="text-2xl sm:text-3xl font-extrabold text-white font-heading">
                    AG Rider Android APK
                  </h2>
                  <div className="flex flex-wrap items-center gap-2 text-xs text-[#8AE7B6] mt-1 font-mono">
                    <span className="px-2 py-0.5 rounded bg-[#103424] border border-[#20D77A]/25">
                      v{APP_CONFIG.version}
                    </span>
                    <span>•</span>
                    <span>{APP_CONFIG.apkSize}</span>
                    <span>•</span>
                    <span>{APP_CONFIG.minAndroid}</span>
                  </div>
                </div>
              </div>

              {/* Big CTA */}
              <div>
                <button
                  onClick={handleDownloadClick}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-10 py-5 rounded-2xl bg-[#20D77A] hover:bg-[#8AE7B6] text-[#03150D] font-extrabold text-lg shadow-xl shadow-[#20D77A]/30 transition-all duration-200 transform hover:scale-[1.02] active:scale-[0.98] cursor-pointer"
                >
                  <DownloadIcon className="w-6 h-6 stroke-[2.5]" />
                  <span>Download APK Now ({APP_CONFIG.apkSize})</span>
                </button>

                {downloadStarted && (
                  <div className="mt-3 p-3 rounded-xl bg-[#103424] border border-[#20D77A]/40 flex items-center gap-2.5 text-xs text-[#8AE7B6] animate-fade-in">
                    <CheckCircle2 className="w-4 h-4 text-[#20D77A] shrink-0" />
                    <span>Download initiated! Check your browser downloads notification.</span>
                  </div>
                )}
              </div>

              {/* Security Pill */}
              <div className="flex flex-wrap items-center gap-4 text-xs text-[#748D7D] pt-2">
                <span className="flex items-center gap-1.5 text-[#A9C1B3]">
                  <ShieldCheck className="w-4 h-4 text-[#20D77A]" />
                  100% Verified Safe & Clean
                </span>
                <span>•</span>
                <span>Signed Android Package</span>
                <span>•</span>
                <span>Direct Official Server</span>
              </div>

            </div>

            {/* Right: QR Code for Mobile Scanning */}
            <div className="lg:col-span-4 p-6 rounded-2xl bg-[#03150D]/80 border border-[#163B27] text-center flex flex-col items-center justify-center">
              <div className="p-3 bg-white rounded-2xl mb-3 shadow-xl flex items-center justify-center min-w-[144px] min-h-[144px]">
                {qrCodeDataUrl ? (
                  <img 
                    src={qrCodeDataUrl} 
                    alt="Scan to Download AG Rider APK on Mobile" 
                    className="w-[124px] h-[124px] rounded"
                  />
                ) : (
                  <div className="w-[124px] h-[124px] flex items-center justify-center text-xs text-[#03150D] font-mono animate-pulse">
                    Loading QR...
                  </div>
                )}
              </div>
              <span className="text-xs font-bold text-white flex items-center gap-1.5">
                <QrCode className="w-3.5 h-3.5 text-[#20D77A]" />
                Scan to Download on Phone
              </span>
              <span className="text-[10px] text-[#8AE7B6]/80 mt-0.5">
                Point phone camera to open download page
              </span>
            </div>

          </div>

        </div>

        {/* 3-STEP INSTALLATION GUIDE */}
        <div className="p-8 sm:p-10 rounded-3xl bg-[#0A2418] border border-[#163B27] mb-12 space-y-6">
          <div className="flex items-center gap-3">
            <Smartphone className="w-6 h-6 text-[#20D77A]" />
            <h3 className="text-xl sm:text-2xl font-bold text-white font-heading">
              How to Install the APK on Android
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            <div className="p-5 rounded-2xl bg-[#071E14] border border-[#163B27] space-y-3">
              <span className="w-8 h-8 rounded-full bg-[#103424] text-[#20D77A] font-bold flex items-center justify-center font-mono text-sm border border-[#20D77A]/30">
                1
              </span>
              <h4 className="text-base font-bold text-white font-heading">Tap Downloaded File</h4>
              <p className="text-xs text-[#A9C1B3] leading-relaxed">
                When the browser finishes downloading, tap the notification or navigate to your phone's <strong>Downloads</strong> folder and tap <code className="text-[#8AE7B6]">{APP_CONFIG.downloadFileName}</code>.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-[#071E14] border border-[#163B27] space-y-3">
              <span className="w-8 h-8 rounded-full bg-[#103424] text-[#20D77A] font-bold flex items-center justify-center font-mono text-sm border border-[#20D77A]/30">
                2
              </span>
              <h4 className="text-base font-bold text-white font-heading">Allow Unknown Apps</h4>
              <p className="text-xs text-[#A9C1B3] leading-relaxed">
                If Android displays a security dialog saying <em>"For your security, your phone is not allowed to install unknown apps"</em>, click <strong>Settings</strong> and enable <strong>Allow from this source</strong>.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-[#071E14] border border-[#163B27] space-y-3">
              <span className="w-8 h-8 rounded-full bg-[#103424] text-[#20D77A] font-bold flex items-center justify-center font-mono text-sm border border-[#20D77A]/30">
                3
              </span>
              <h4 className="text-base font-bold text-white font-heading">Install & Launch</h4>
              <p className="text-xs text-[#A9C1B3] leading-relaxed">
                Tap <strong>Install</strong>. Once completed, tap <strong>Open</strong>, enter your 10-digit mobile number, and verify the one-time SMS code to access your Ride Deck!
              </p>
            </div>

          </div>

          {/* Chrome warning tip */}
          <div className="p-4 rounded-xl bg-[#071E14] border border-amber-500/20 flex items-start gap-3 text-xs text-[#A9C1B3]">
            <AlertTriangle className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
            <div>
              <strong className="text-white">Notice about Chrome "File might be harmful" warning:</strong>
              <p className="text-[#748D7D] mt-0.5">
                Google Chrome automatically shows this standard prompt for any direct APK downloaded outside the Play Store. AG Rider is 100% clean and free of spyware or adware. Simply tap <strong>"Download anyway"</strong> to proceed.
              </p>
            </div>
          </div>
        </div>

        {/* SHA-256 INTEGRITY VERIFICATION */}
        <div className="p-6 rounded-2xl bg-[#071E14] border border-[#163B27] flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <FileCheck className="w-5 h-5 text-[#20D77A] shrink-0" />
            <div>
              <div className="text-xs text-white font-semibold">Package SHA-256 Checksum:</div>
              <div className="text-xs text-[#748D7D] font-mono break-all">
                {APP_CONFIG.sha256}
              </div>
            </div>
          </div>
          <button
            onClick={handleCopyHash}
            className="px-4 py-2 rounded-xl bg-[#0A2418] hover:bg-[#103424] text-[#8AE7B6] border border-[#20D77A]/30 flex items-center gap-1.5 text-xs font-semibold shrink-0 transition-colors"
          >
            {copied ? <Check className="w-4 h-4 text-[#20D77A]" /> : <Copy className="w-4 h-4" />}
            <span>{copied ? 'Hash Copied!' : 'Copy Checksum'}</span>
          </button>
        </div>

      </div>
    </div>
  );
};
