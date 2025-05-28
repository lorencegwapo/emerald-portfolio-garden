
import React from 'react';
import { PersonalInfo } from '@/components/PersonalInfo';
import { FamilyBackground } from '@/components/FamilyBackground';
import { WorkExperience } from '@/components/WorkExperience';
import { PersonalInterests } from '@/components/PersonalInterests';
import { CurrentProjects } from '@/components/CurrentProjects';
import { Navigation } from '@/components/Navigation';

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-100">
      <Navigation />
      
      <main className="container mx-auto px-4 py-8 space-y-16">
        <section id="personal" className="animate-fade-in">
          <PersonalInfo />
        </section>
        
        <section id="family" className="animate-fade-in">
          <FamilyBackground />
        </section>
        
        <section id="experience" className="animate-fade-in">
          <WorkExperience />
        </section>
        
        <section id="interests" className="animate-fade-in">
          <PersonalInterests />
        </section>
        
        <section id="projects" className="animate-fade-in">
          <CurrentProjects />
        </section>
      </main>
      
      <footer className="bg-green-900 text-white py-8 mt-16">
        <div className="container mx-auto px-4 text-center">
          <p className="text-green-200">© 2024 My Portfolio. Built with passion and dedication.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
