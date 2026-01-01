import React from 'react';
import { Layout } from '../components/layout';
import {
  HeroSection,
  HackathonsSection,
  SpeakingSection,
  ProjectsSection,
  ContentSection,
} from '../components/sections';

export const HomePage: React.FC = () => {
  return (
    <Layout>
      <HeroSection />
      <HackathonsSection />
      <SpeakingSection />
      <ProjectsSection />
      <ContentSection />
    </Layout>
  );
};
