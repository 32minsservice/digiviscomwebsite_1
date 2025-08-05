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

  // Get the current set of 3 skills to display
  const getVisibleSkills = () => {
    const visibleSkills = [];
    for (let i = 0; i < 3; i++) {
      const index = (currentSkill + i) % skills.length;
      visibleSkills.push({ ...skills[index], originalIndex: index, displayIndex: i });
    }
    return visibleSkills;
  };

  const visibleSkills = getVisibleSkills();

  return (
    <section id="courses" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`text-center mb-16 transform transition-all duration-1000 ${isVisible.courses ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <h2 className="text-4xl font-bold text-gray-800 mb-8 font-cabinet">{t.skillsTitle}</h2>
        </div>

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
                              className="relative rounded-3xl p-8 overflow-hidden h-80 bg-cover bg-center group cursor-pointer transition-all duration-700"
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
                            <div className="p-8 h-80 flex flex-col justify-center transition-all duration-700">
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

          {/* Pagination dots */}
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
    </section>
  );
};

export default SkillsSection;