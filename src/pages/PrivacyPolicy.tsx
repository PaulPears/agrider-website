import React from 'react';
import { LegalLayout } from '../components/LegalLayout';
import { PRIVACY_POLICY_CONTENT } from '../data/legalContent';

export const PrivacyPolicy: React.FC = () => {
  return (
    <LegalLayout
      title="Privacy Policy"
      subtitle="How AG Rider handles your information."
      lastUpdated={PRIVACY_POLICY_CONTENT.lastUpdated}
      sections={PRIVACY_POLICY_CONTENT.sections}
    />
  );
};
