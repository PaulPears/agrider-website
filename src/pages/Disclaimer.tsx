import React from 'react';
import { LegalLayout } from '../components/LegalLayout';
import { DISCLAIMER_CONTENT } from '../data/legalContent';

export const Disclaimer: React.FC = () => {
  return (
    <LegalLayout
      title="Disclaimer & Platform Independence"
      subtitle="Important notices regarding third-party platforms, road safety, and assistive tools."
      lastUpdated={DISCLAIMER_CONTENT.lastUpdated}
      sections={DISCLAIMER_CONTENT.sections}
    />
  );
};
