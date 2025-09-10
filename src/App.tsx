// App.tsx
import React from 'react';
import { LanguageProvider } from './context/LanguageContext';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import SkillsSection from './components/SkillsSection';
import ProcessSection from './components/ProcessSection';
import JoinUsSection from './components/JoinUsSection';
import TestimonialsSection from './components/TestimonialsSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import './styles/fonts.css';

const App: React.FC = () => {
  return (
    <LanguageProvider>
      <div className="min-h-screen bg-gradient-to-br from-teal-900 via-teal-800 to-teal-700 w-full overflow-x-hidden font-cabinet "style={{ backgroundColor: '#f4f4f4' }}>
        <Header />
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ProcessSection />
        <JoinUsSection />
        <TestimonialsSection />
        <ContactSection />
        <Footer />
      </div>
    </LanguageProvider>
  );
};

export default App;