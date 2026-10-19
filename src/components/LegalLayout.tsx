import React from 'react';
import { Printer, Calendar, ShieldCheck, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

interface Section {
  id: string;
  title: string;
  content: string;
}

interface LegalLayoutProps {
  title: string;
  subtitle: string;
  lastUpdated: string;
  sections: Section[];
}

export const LegalLayout: React.FC<LegalLayoutProps> = ({
  title,
  subtitle,
  lastUpdated,
  sections,
}) => {
  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="pt-28 pb-20 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Back Link */}
        <div className="mb-6">
          <Link
            to="/"
            className="inline-flex items-center gap-1.5 text-xs text-[#748D7D] hover:text-[#20D77A] transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Back to Home</span>
          </Link>
        </div>

        {/* Page Header */}
        <div className="border-b border-[#163B27] pb-8 mb-10">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <span className="text-xs font-mono font-semibold uppercase tracking-wider text-[#20D77A]">
                Official Legal Policy
              </span>
              <h1 className="text-3xl sm:text-4xl font-extrabold text-white font-heading mt-1">
                {title}
              </h1>
              <p className="text-sm text-[#A9C1B3] mt-1">
                {subtitle}
              </p>
            </div>

            <div className="flex items-center gap-4 text-xs text-[#748D7D] shrink-0">
              <span className="flex items-center gap-1.5 bg-[#071E14] px-3 py-1.5 rounded-lg border border-[#163B27]">
                <Calendar className="w-3.5 h-3.5 text-[#20D77A]" />
                Updated: {lastUpdated}
              </span>
              <button
                onClick={handlePrint}
                className="flex items-center gap-1.5 bg-[#0A2418] hover:bg-[#103424] text-[#8AE7B6] px-3 py-1.5 rounded-lg border border-[#20D77A]/30 transition-colors"
                title="Print this document"
              >
                <Printer className="w-3.5 h-3.5" />
                <span>Print</span>
              </button>
            </div>
          </div>
        </div>

        {/* Grid Layout: Sidebar TOC + Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Table of Contents Sticky Sidebar */}
          <aside className="lg:col-span-4 hidden lg:block">
            <div className="sticky top-28 p-6 rounded-2xl bg-[#0A2418] border border-[#163B27] space-y-3">
              <h4 className="text-xs font-bold uppercase tracking-wider text-[#20D77A] font-mono">
                Table of Contents
              </h4>
              <nav className="space-y-1.5 text-xs">
                {sections.map((sec) => (
                  <a
                    key={sec.id}
                    href={`#${sec.id}`}
                    className="block py-1 text-[#A9C1B3] hover:text-[#20D77A] hover:translate-x-1 transition-all truncate"
                  >
                    {sec.title}
                  </a>
                ))}
              </nav>
            </div>
          </aside>

          {/* Main Content Sections */}
          <main className="lg:col-span-8 space-y-8">
            {sections.map((sec) => (
              <section
                key={sec.id}
                id={sec.id}
                className="p-6 sm:p-8 rounded-3xl bg-[#0A2418] border border-[#163B27] scroll-mt-28 space-y-4"
              >
                <h2 className="text-xl font-bold text-white font-heading border-b border-[#163B27] pb-3">
                  {sec.title}
                </h2>
                <div className="text-sm text-[#A9C1B3] leading-relaxed whitespace-pre-line space-y-3">
                  {sec.content}
                </div>
              </section>
            ))}

            <div className="p-6 rounded-2xl bg-[#071E14] border border-[#163B27] text-xs text-[#748D7D] flex items-center justify-between">
              <span>App: AG Rider (Android)</span>
              <span>Published for User Review</span>
            </div>
          </main>

        </div>

      </div>
    </div>
  );
};
