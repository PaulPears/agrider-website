import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { DownloadModal } from './components/DownloadModal';

// Pages
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Features } from './pages/Features';
import { HowItWorks } from './pages/HowItWorks';
import { Accessibility } from './pages/Accessibility';
import { Download } from './pages/Download';
import { FAQ } from './pages/FAQ';
import { Contact } from './pages/Contact';
import { PrivacyPolicy } from './pages/PrivacyPolicy';
import { TermsConditions } from './pages/TermsConditions';
import { Disclaimer } from './pages/Disclaimer';

// Scroll to top helper
const ScrollToTop: React.FC = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

export const App: React.FC = () => {
  const [downloadModalOpen, setDownloadModalOpen] = useState(false);

  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="min-h-screen flex flex-col bg-[#03150D] text-[#F3F8F4]">
        
        {/* Navigation Bar */}
        <Navbar onOpenDownload={() => setDownloadModalOpen(true)} />

        {/* Main Content Area */}
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/features" element={<Features />} />
            <Route path="/how-it-works" element={<HowItWorks />} />
            <Route path="/accessibility" element={<Accessibility />} />
            <Route path="/download" element={<Download />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/terms-and-conditions" element={<TermsConditions />} />
            <Route path="/disclaimer" element={<Disclaimer />} />
            {/* Catch-all fallback */}
            <Route path="*" element={<Home />} />
          </Routes>
        </main>

        {/* Footer */}
        <Footer />

        {/* Quick Download Modal */}
        <DownloadModal 
          isOpen={downloadModalOpen} 
          onClose={() => setDownloadModalOpen(false)} 
        />

      </div>
    </BrowserRouter>
  );
};

export default App;
