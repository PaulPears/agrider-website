import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { HelpCircle, ChevronDown, ChevronUp, Search, Download, ShieldCheck } from 'lucide-react';
import { RadarBackground } from '../components/RadarBackground';
import { FAQ_DATA, FAQItem } from '../data/content';

export const FAQ: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [openIndexes, setOpenIndexes] = useState<number[]>([0, 1]); // first two open by default

  const toggleIndex = (index: number) => {
    if (openIndexes.includes(index)) {
      setOpenIndexes(openIndexes.filter((i) => i !== index));
    } else {
      setOpenIndexes([...openIndexes, index]);
    }
  };

  const categories = [
    { id: 'all', label: 'All Questions' },
    { id: 'general', label: 'General & Apps' },
    { id: 'features', label: 'Features & Filters' },
    { id: 'permissions', label: 'Accessibility & Permissions' },
    { id: 'troubleshooting', label: 'Setup & Troubleshooting' },
    { id: 'safety', label: 'Safety & Privacy' },
  ];

  const filteredFAQs = FAQ_DATA.filter((faq) => {
    const matchesCategory = selectedCategory === 'all' || faq.category === selectedCategory;
    const matchesSearch = 
      faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="pt-28 pb-20 relative">
      <RadarBackground size="lg" className="top-10 left-10" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0A2418] border border-[#20D77A]/30 text-xs text-[#8AE7B6]">
            <HelpCircle className="w-4 h-4 text-[#20D77A]" />
            <span>Driver Knowledge Base</span>
          </div>
          
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white font-heading tracking-tight">
            Frequently Asked <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#20D77A] to-[#8AE7B6]">
              Questions
            </span>
          </h1>

          <p className="text-sm sm:text-base text-[#A9C1B3] leading-relaxed">
            Find immediate answers regarding AG Rider setup, Android accessibility permissions, fare filters, and troubleshooting.
          </p>
        </div>

        {/* Search & Category Tabs */}
        <div className="mb-10 space-y-4">
          
          {/* Search Box */}
          <div className="relative">
            <Search className="w-5 h-5 text-[#748D7D] absolute left-4 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search by topic, e.g. 'fare filter', 'Rapido', 'battery', 'OTP'..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-12 pr-4 py-3.5 rounded-2xl bg-[#0A2418] border border-[#163B27] focus:border-[#20D77A] focus:outline-none text-white text-sm placeholder-[#748D7D] transition-colors"
            />
          </div>

          {/* Categories */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-4 py-2 rounded-xl text-xs font-semibold whitespace-nowrap transition-all ${
                  selectedCategory === cat.id
                    ? 'bg-[#20D77A] text-[#03150D] shadow'
                    : 'bg-[#071E14] text-[#A9C1B3] border border-[#163B27] hover:text-white hover:bg-[#0A2418]'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

        </div>

        {/* FAQ Accordion List */}
        <div className="space-y-3 mb-16">
          {filteredFAQs.length === 0 ? (
            <div className="p-8 text-center rounded-2xl bg-[#0A2418] border border-[#163B27] text-sm text-[#748D7D]">
              No questions found matching your search. Try different keywords or reset categories.
            </div>
          ) : (
            filteredFAQs.map((faq, index) => {
              const isOpen = openIndexes.includes(index);
              return (
                <div 
                  key={index}
                  className={`rounded-2xl transition-all border ${
                    isOpen 
                      ? 'bg-[#0A2418] border-[#20D77A]/40' 
                      : 'bg-[#071E14] border-[#163B27] hover:border-[#20D77A]/25'
                  }`}
                >
                  <button
                    onClick={() => toggleIndex(index)}
                    className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 cursor-pointer"
                  >
                    <span className="text-base font-bold text-white font-heading">
                      {faq.question}
                    </span>
                    <span className="p-1 rounded-lg bg-[#03150D] text-[#20D77A] shrink-0">
                      {isOpen ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                    </span>
                  </button>

                  {isOpen && (
                    <div className="px-5 sm:px-6 pb-6 pt-1 text-sm text-[#A9C1B3] leading-relaxed border-t border-[#163B27]/50 mt-1">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })
          )}
        </div>

        {/* Support & Download CTA Box */}
        <div className="p-8 rounded-3xl bg-[#0A2418] border border-[#20D77A]/30 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="text-left space-y-1">
            <h3 className="text-lg font-bold text-white font-heading">Still have questions?</h3>
            <p className="text-xs text-[#A9C1B3]">Reach our driver support team or download the APK to test it yourself.</p>
          </div>
          <div className="flex items-center gap-3 shrink-0">
            <Link
              to="/contact"
              className="px-5 py-3 rounded-xl bg-[#071E14] hover:bg-[#103424] text-xs font-semibold text-white border border-[#163B27]"
            >
              Contact Support
            </Link>
            <Link
              to="/download"
              className="px-5 py-3 rounded-xl bg-[#20D77A] hover:bg-[#8AE7B6] text-xs font-bold text-[#03150D] flex items-center gap-2"
            >
              <Download className="w-4 h-4 stroke-[2.5]" />
              <span>Download APK</span>
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
};
