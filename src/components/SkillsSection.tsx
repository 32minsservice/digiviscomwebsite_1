// components/SkillsSection.tsx
import React, { useState } from 'react';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import { useLanguage } from '../context/LanguageContext';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { skills, content } from '../constants/data';

const SkillsSection: React.FC = () => {
  const { language } = useLanguage();
  const isVisible = useScrollAnimation();
  const t = content[language];
  const [currentSkill, setCurrentSkill] = useState(0);

  const nextSkill = () => {
    setCurrentSkill((prev) => (prev + 1) % skills.length);
  };

  const prevSkill = () => {
    setCurrentSkill((prev) => (prev - 1 + skills.length) % skills.length);
  };

  return (
    <section id="courses" className="py-12 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`text-center mb-12 md:mb-16 transform transition-all duration-1000 ${isVisible.courses ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6 md:mb-8 font-cabinet">{t.skillsTitle}</h2>
        </div>

        {/* Mobile View - Single Card */}
        <div className="block md:hidden">
          <div className="relative px-8">
            {/* Navigation Arrows */}
            <button 
              onClick={prevSkill}
              className="absolute left-0 top-1/2 transform -translate-y-1/2 z-20 bg-white shadow-lg rounded-full p-2 hover:bg-gray-50 transition-colors"
            >
              <FiChevronLeft size={20} className="text-gray-600" />
            </button>

            <button 
              onClick={nextSkill}
              className="absolute right-0 top-1/2 transform -translate-y-1/2 z-20 bg-white shadow-lg rounded-full p-2 hover:bg-gray-50 transition-colors"
            >
              <FiChevronRight size={20} className="text-gray-600" />
            </button>

            {/* Single Featured Card */}
            <div className="text-center">
              <div className="relative mb-6">
                <div 
                  className="relative rounded-2xl p-6 overflow-hidden h-80 bg-cover bg-center group cursor-pointer transition-all duration-500 shadow-lg"
                  style={{
                    backgroundImage: `url(${skills[currentSkill].backgroundImage})`
                  }}
                >
                  {/* Dark overlay */}
                  <div className="absolute inset-0 bg-black/60 group-hover:bg-black/70 transition-colors duration-300"></div>
                  
                  {/* Content */}
                  <div className="relative z-10 h-full flex flex-col justify-end">
                    <h3 className="text-xl font-bold text-white text-left font-cabinet">
                      {language === 'en' ? skills[currentSkill].title : skills[currentSkill].titleTamil}
                    </h3>
                  </div>
                  
                  {/* Number overlay */}
                  <div className="absolute top-4 right-4 text-4xl font-bold text-white z-10 font-cabinet">
                    {String(skills[currentSkill].id).padStart(2, '0')}
                  </div>
                </div>
              </div>
            </div>

            {/* Pagination dots */}
            <div className="flex justify-center mt-6 space-x-2">
              {skills.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSkill(index)}
                  className={`w-2 h-2 rounded-full transition-colors ${
                    index === currentSkill ? 'bg-black' : 'bg-gray-300'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Desktop View - Three Cards */}
        <div className="hidden md:block">
          <div className="relative overflow-hidden">
            <div className="flex items-center justify-center">
              <button 
                onClick={prevSkill}
                className="absolute left-0 z-20 bg-white shadow-lg rounded-full p-3 hover:bg-gray-50 transition-colors"
              >
                <FiChevronLeft size={24} className="text-gray-600" />
              </button>

              <div className="w-full max-w-6xl overflow-hidden">
                <div 
                  className="flex transition-transform duration-700 ease-in-out"
                  style={{
                    transform: `translateX(-${currentSkill * (100 / 3)}%)`
                  }}
                >
                  {skills.map((skill, index) => {
                    const position = (index - currentSkill + skills.length) % skills.length;
                    const isVisible = position < 3;
                    
                    return (
                      <div 
                        key={skill.id}
                        className={`flex-shrink-0 w-1/3 px-4 transition-all duration-700 ${
                          !isVisible ? 'opacity-0' : 'opacity-100'
                        }`}
                      >
                        <div className={`text-center transform transition-all duration-700 ${
                          position === 0 ? 'scale-105' : 'scale-100'
                        }`}>
                          <div className="relative mb-6">
                            {position === 0 && (
                              <div 
                                className="relative rounded-2xl p-8 overflow-hidden h-80 bg-cover bg-center group cursor-pointer transition-all duration-700 shadow-lg"
                                style={{
                                  backgroundImage: `url(${skill.backgroundImage})`
                                }}
                              >
                                {/* Dark overlay */}
                                <div className="absolute inset-0 bg-black/60 group-hover:bg-black/70 transition-colors duration-300"></div>
                                
                                {/* Content */}
                                <div className="relative z-10 h-full flex flex-col justify-end">
                                  <h3 className="text-2xl font-bold text-white text-left font-cabinet">
                                    {language === 'en' ? skill.title : skill.titleTamil}
                                  </h3>
                                </div>
                                
                                {/* Number overlay */}
                                <div className="absolute top-6 right-6 text-6xl font-bold text-white z-10 font-cabinet">
                                  {String(skill.id).padStart(2, '0')}
                                </div>
                              </div>
                            )}
                            {position !== 0 && (
                              <div className="bg-white rounded-2xl p-8 h-80 flex flex-col justify-center transition-all duration-700 shadow-md hover:shadow-lg">
                                <h3 className={`text-2xl font-bold mb-4 font-cabinet ${
                                  position === 1 || position === 2 ? 'text-gray-600' : 'text-gray-400'
                                }`}>
                                  {language === 'en' ? skill.title : skill.titleTamil}
                                </h3>
                                <div className={`text-6xl font-bold font-cabinet ${
                                  position === 1 || position === 2 ? 'text-gray-300' : 'text-gray-200'
                                }`}>
                                  {String(skill.id).padStart(2, '0')}
                                </div>
                              </div>
                            )}
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              <button 
                onClick={nextSkill}
                className="absolute right-0 z-20 bg-white shadow-lg rounded-full p-3 hover:bg-gray-50 transition-colors"
              >
                <FiChevronRight size={24} className="text-gray-600" />
              </button>
            </div>

            {/* Desktop Pagination dots */}
            <div className="flex justify-center mt-8 space-x-2">
              {skills.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSkill(index)}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    index === currentSkill ? 'bg-black' : 'bg-gray-300'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;