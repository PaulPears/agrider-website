import React, { useState } from 'react';
import { Download, CheckCircle2, ShieldCheck, X, Smartphone, AlertTriangle, Copy, Check } from 'lucide-react';
import { APP_CONFIG } from '../data/content';

interface DownloadModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const DownloadModal: React.FC<DownloadModalProps> = ({ isOpen, onClose }) => {
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const handleCopyChecksum = () => {
    navigator.clipboard.writeText(APP_CONFIG.sha256);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const triggerDirectDownload = () => {
    const link = document.createElement('a');
    link.href = APP_CONFIG.downloadPath;
    link.download = APP_CONFIG.downloadFileName;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fade-in">
      <div className="relative w-full max-w-xl p-6 sm:p-8 rounded-3xl bg-[#0A2418] border border-[#20D77A]/30 shadow-2xl text-[#F3F8F4] overflow-hidden">
        
        {/* Glow */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-[#20D77A]/10 rounded-full blur-3xl pointer-events-none" />

        {/* Close button */}
        <button 
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-xl text-[#A9C1B3] hover:text-white bg-[#071E14] border border-[#163B27] hover:border-[#20D77A] transition-colors"
          aria-label="Close download modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header */}
        <div className="flex items-center gap-4 mb-6">
          <div className="w-14 h-14 rounded-2xl bg-[#071E14] border border-[#20D77A]/40 flex items-center justify-center p-2 neon-glow">
            <img src="/logo.svg" alt="AG Rider Logo" className="w-full h-full" />
          </div>
          <div>
            <h3 className="text-xl font-bold font-heading text-white">
              Download AG Rider APK
            </h3>
            <p className="text-xs text-[#8AE7B6]">
              Official Android Release • v{APP_CONFIG.version} ({APP_CONFIG.apkSize})
            </p>
          </div>
        </div>

        {/* Big Action Download Button */}
        <div className="mb-6">
          <a
            href={APP_CONFIG.downloadPath}
            download={APP_CONFIG.downloadFileName}
            onClick={triggerDirectDownload}
            className="w-full py-4 px-6 rounded-2xl bg-[#20D77A] hover:bg-[#8AE7B6] text-[#03150D] font-extrabold text-base flex items-center justify-center gap-3 shadow-lg shadow-[#20D77A]/25 transition-all transform hover:scale-[1.01] active:scale-[0.99] cursor-pointer"
          >
            <Download className="w-5 h-5 stroke-[2.5]" />
            <span>Download APK ({APP_CONFIG.apkSize})</span>
          </a>
          <p className="text-center text-[11px] text-[#748D7D] mt-2 flex items-center justify-center gap-1.5">
            <ShieldCheck className="w-3.5 h-3.5 text-[#20D77A]" />
            Clean package • No adware • Requires {APP_CONFIG.minAndroid}
          </p>
        </div>

        {/* Quick 3-Step Install Guide */}
        <div className="p-4 rounded-2xl bg-[#071E14] border border-[#163B27] mb-6">
          <h4 className="text-xs font-bold uppercase tracking-wider text-[#A9C1B3] mb-3 flex items-center gap-2">
            <Smartphone className="w-4 h-4 text-[#20D77A]" />
            How to Install on Android
          </h4>
          <div className="space-y-2.5 text-xs text-[#A9C1B3]">
            <div className="flex items-start gap-2.5">
              <span className="w-5 h-5 rounded-full bg-[#103424] text-[#20D77A] font-bold flex items-center justify-center shrink-0 text-[11px]">
                1
              </span>
              <p>Once download completes, tap the notification or open <strong>Downloads</strong> in your file manager.</p>
            </div>
            <div className="flex items-start gap-2.5">
              <span className="w-5 h-5 rounded-full bg-[#103424] text-[#20D77A] font-bold flex items-center justify-center shrink-0 text-[11px]">
                2
              </span>
              <p>If prompted with <em>"Install unknown apps"</em>, click <strong>Settings</strong> and switch the toggle to <strong>Allow</strong>.</p>
            </div>
            <div className="flex items-start gap-2.5">
              <span className="w-5 h-5 rounded-full bg-[#103424] text-[#20D77A] font-bold flex items-center justify-center shrink-0 text-[11px]">
                3
              </span>
              <p>Tap <strong>Install</strong>, launch AG Rider, and log in with your 10-digit mobile number via OTP.</p>
            </div>
          </div>
        </div>

        {/* Checksum SHA256 */}
        <div className="p-3 rounded-xl bg-[#03150D] border border-[#163B27] flex items-center justify-between gap-2 text-xs">
          <div className="truncate text-[#748D7D] font-mono">
            <span className="text-[#A9C1B3] font-sans font-semibold mr-1">SHA-256:</span>
            {APP_CONFIG.sha256.substring(0, 24)}...
          </div>
          <button
            onClick={handleCopyChecksum}
            className="px-2.5 py-1 rounded bg-[#0A2418] hover:bg-[#103424] text-[#8AE7B6] border border-[#20D77A]/30 flex items-center gap-1 shrink-0 font-medium text-[11px] transition-colors"
          >
            {copied ? <Check className="w-3.5 h-3.5 text-[#20D77A]" /> : <Copy className="w-3.5 h-3.5" />}
            <span>{copied ? 'Copied' : 'Copy Hash'}</span>
          </button>
        </div>

      </div>
    </div>
  );
};
