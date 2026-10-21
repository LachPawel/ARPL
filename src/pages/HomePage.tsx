import React from 'react';
import { Layout } from '../components/layout';
import {
  HeroSection,
  WorkSection,
  WritingSection,
  CommunitySection,
} from '../components/sections';

export const HomePage: React.FC = () => {
  return (
    <Layout>
      <HeroSection />
      <WorkSection />
      <WritingSection />
      <CommunitySection />
    </Layout>
  );
};
