import React, { useState } from 'react';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import { useLanguage } from '../context/LanguageContext';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { skills, content } from '../constants/data';

const SkillsSection = () => {
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

  const getVisibleSkills = () => {
    const result = [];
    for (let i = 0; i < 3; i++) {
      const index = (currentSkill + i) % skills.length;
      result.push({ ...skills[index], position: i });
    }
    return result;
  };

  return (
    <section id="courses" className=" py-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className={`text-center mb-12 transform transition-all duration-1000 ${isVisible.courses ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <h2 className="text-4xl font-bold text-gray-800 mb-4 font-cabinet">
            {t.skillsTitle}
          </h2>
        </div>

        {/* Mobile View - Single Card */}
        <div className="block md:hidden">
          <div className="relative px-12">
            {/* Navigation Arrows */}
            <button 
              onClick={prevSkill}
              className="absolute left-0 top-1/2 transform -translate-y-1/2 z-20 bg-white border border-gray-400 rounded-full p-2 hover:bg-gray-100 transition-all duration-200"
            >
              <FiChevronLeft size={12} className="text-gray-600" />
            </button>

            <button 
              onClick={nextSkill}
              className="absolute right-0 top-1/2 transform -translate-y-1/2 z-20 bg-white border border-gray-400 rounded-full p-2 hover:bg-gray-100 transition-all duration-200"
            >
              <FiChevronRight size={12} className="text-gray-600" />
            </button>

            {/* Single Featured Card */}
            <div className="mx-auto max-w-sm">
              <div 
                className="relative rounded-3xl overflow-hidden h-80 bg-cover bg-center group cursor-pointer transition-all duration-500 shadow-xl"
                style={{
                  backgroundImage: `url(${skills[currentSkill].backgroundImage})`
                }}
              >
                {/* Dark overlay */}
                <div className="absolute inset-0 bg-black/50 group-hover:bg-black/60 transition-colors duration-300"></div>
                
                {/* Content */}
                <div className="relative z-10 h-full flex flex-col justify-between p-8">
                  <div className="text-right">
                    <span className="text-6xl font-bold text-white">
                      {String(skills[currentSkill].id).padStart(2, '0')}
                    </span>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white">
                      {skills[currentSkill].title}
                    </h3>
                  </div>
                </div>
              </div>
            </div>

            {/* Pagination dots */}
            <div className="flex justify-center mt-8 space-x-2">
              {skills.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSkill(index)}
                  className={`w-1 h-1 rounded-full transition-colors duration-200 ${
                    index === currentSkill ? 'bg-blue-400' : 'bg-gray-300'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Desktop View - Three Cards */}
        <div className="hidden md:block">
          <div className="relative">
            {/* Navigation Arrows */}
            <button 
              onClick={prevSkill}
              className="absolute left-0 top-1/2 transform -translate-y-1/2 z-20 bg-white rounded-full p-2 border border-gray-400 hover:bg-gray-100 transition-all duration-200"
            >
              <FiChevronLeft size={24} className="text-gray-600" />
            </button>

            <button 
              onClick={nextSkill}
              className="absolute right-0 top-1/2 transform -translate-y-1/2 z-20 bg-white  rounded-full p-2 border border-gray-400 hover:bg-gray-100 transition-all duration-200"
            >
              <FiChevronRight size={24} className="text-gray-600" />
            </button>

            {/* Three Cards Container */}
            <div className="flex justify-center items-center px-20 space-x-6">
              {getVisibleSkills().map((skill, index) => (
                <div 
                  key={`${skill.id}-${currentSkill}`}
                  className="w-80 transition-all duration-700 ease-out"
                >
                  <div 
                    className="relative rounded-3xl overflow-hidden bg-cover bg-center group cursor-pointer transition-all duration-500 shadow-xl h-80"
                    style={{
                      backgroundImage: `url(${skill.backgroundImage})`
                    }}
                  >
                    {/* Dark overlay */}
                    <div className="absolute inset-0 bg-black/50 group-hover:bg-black/60 transition-colors duration-300"></div>
                    
                    {/* Content */}
                    <div className="relative z-10 h-full flex flex-col justify-between p-8">
                      <div className="text-right">
                        <span className="text-6xl font-bold text-white">
                          {String(skill.id).padStart(2, '0')}
                        </span>
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-white">
                          {language === 'en' ? skill.title : skill.titleTamil}
                        </h3>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Desktop Pagination dots */}
            <div className="flex justify-center mt-10 space-x-3">
              {skills.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSkill(index)}
                  className={`w-2 h-2 rounded-full transition-colors duration-200 ${
                    index === currentSkill ? 'bg-blue-400' : 'bg-gray-300'
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