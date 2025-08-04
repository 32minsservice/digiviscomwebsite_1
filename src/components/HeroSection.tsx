// components/HeroSection.tsx
import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { content } from '../constants/data';
import bgImage from '../assets/bg.png';

const HeroSection: React.FC = () => {
  const { language } = useLanguage();
  const isVisible = useScrollAnimation();
  const t = content[language];

  return (
    <section id="home" className="relative min-h-screen w-full overflow-hidden pt-16">
      {/* Background with your custom image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{backgroundImage: `url(${bgImage})`, backgroundSize: 'cover', backgroundPosition: 'center'}}
      ></div>
      
      {/* Content Container - Full Width */}
      <div className="relative w-full px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center min-h-[80vh]">
            {/* Left Content */}
            <div className={`space-y-8 transform transition-all duration-1000 ${isVisible.home ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'} pt-28`}>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight text-white">
                {t.heroTitle}
                <br />
                <span className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight text-white">
                  {t.heroSubtitle}
                </span>
              </h1>
              <p className="text-lg md:text-xl text-gray-200 max-w-lg leading-relaxed">
                {t.heroDescription}
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button
                
                  style={{ backgroundColor: '#F58321' }}
                  className="px-8 py-4 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl text-black"
                >
                  {t.exploreButton}
                </button>
                <button className="border-2 border-white/30 text-white hover:bg-white/10 backdrop-blur-sm px-8 py-4 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
                  {t.getStartedButton}
                </button>
              </div>
            </div>
            
            {/* Right Content - Realistic Student Image */}
            <div className={`relative transform transition-all duration-1000 delay-300 ${isVisible.home ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'}`}>
              <div className="relative">
                {/* Student Photo with Headphones */}
                <div className="relative overflow-hidden rounded-3xl shadow-2xl">
                  {/* Overlay for better text contrast */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-teal-600/20 to-transparent"></div>
                  
                  {/* Floating laptop/workspace element */}
                  <div className="absolute bottom-6 left-6 right-6">
                    <div className="bg-white/90 backdrop-blur-md rounded-lg p-4 shadow-xl">
                      <div className="flex items-center space-x-3">
                        <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-orange-600 rounded-lg flex items-center justify-center">
                          <span className="text-white font-bold">📚</span>
                        </div>
                        <div className="flex-1">
                          <h3 className="font-semibold text-gray-800">
                            {language === 'en' ? 'Digital Media Course' : 'டிஜிட்டல் ஊடக படிப்பு'}
                          </h3>
                          <div className="w-full bg-gray-200 rounded-full h-2 mt-1">
                            <div className="bg-gradient-to-r from-orange-500 to-orange-600 h-2 rounded-full" style={{width: '75%'}}></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Floating Elements */}
                <div className="absolute -top-4 -left-4 w-16 h-16 bg-orange-500/20 rounded-full blur-xl animate-bounce"></div>
                <div className="absolute -bottom-4 -right-4 w-20 h-20 bg-teal-400/20 rounded-full blur-xl animate-bounce delay-1000"></div>
                <div className="absolute top-1/2 -right-8 w-12 h-12 bg-white/10 rounded-full blur-lg animate-pulse"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;