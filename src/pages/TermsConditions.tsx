import React from 'react';
import { LegalLayout } from '../components/LegalLayout';
import { TERMS_CONDITIONS_CONTENT } from '../data/legalContent';

export const TermsConditions: React.FC = () => {
  return (
    <LegalLayout
      title="Terms & Conditions"
      subtitle="Responsible use of AG Rider services."
      lastUpdated={TERMS_CONDITIONS_CONTENT.lastUpdated}
      sections={TERMS_CONDITIONS_CONTENT.sections}
    />
  );
};
