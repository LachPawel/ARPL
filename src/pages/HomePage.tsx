import React from 'react';
import { Layout } from '../components/layout';
import {
  HeroSection,
  ProjectsSection,
  CommunitySection,
} from '../components/sections';

export const HomePage: React.FC = () => {
  return (
    <Layout>
      <HeroSection />
      <ProjectsSection />
      <CommunitySection />
    </Layout>
  );
};
