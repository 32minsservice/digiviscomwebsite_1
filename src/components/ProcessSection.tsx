// components/ProcessSection.tsx
import React from 'react';
import { FiUsers, FiBookOpen, FiCamera, FiAward, FiCheckCircle } from 'react-icons/fi';
import { useLanguage } from '../context/LanguageContext';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { processSteps, content } from '../constants/data';

const iconMap = {
  FiUsers,
  FiBookOpen,
  FiCamera,
  FiAward,
  FiCheckCircle
};

const ProcessSection: React.FC = () => {
  const { language } = useLanguage();
  const isVisible = useScrollAnimation();
  const t = content[language];

  // Define inline styles as objects
  const tealColor = '#249A9E';
  const orangeColor = '#F58321';
  const borderColor = '#CACACA';

  return (
    <section id="how-it-works" className="py-12 bg-gray-50 min-h-screen flex flex-col justify-center w-full">
      {/* Full width container with proper background */}
      <div className="w-full bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className={`text-center mb-8 lg:mb-12 transform transition-all duration-1000 ${isVisible['how-it-works'] ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-800 mb-2 font-cabinet">{t.howItWorksTitle}</h2>
            <p style={{ color: tealColor }} className="text-base sm:text-lg font-semibold mb-3 font-cabinet">{t.howItWorksSubtitle}</p>
            <p className="text-gray-600 max-w-xl mx-auto text-sm sm:text-base lg:text-lg leading-relaxed font-cabinet px-4">
              {t.howItWorksDescription}
            </p>
          </div>

          {/* Timeline Container - Responsive */}
          <div className="relative max-w-4xl mx-auto">
            {/* Desktop Vertical Center Line - Hidden on mobile */}
            <div
              className="absolute left-1/2 transform -translate-x-1/2 top-0 bottom-0 w-0.5 hidden md:block"
              style={{ backgroundColor: tealColor }}
            ></div>

            {/* Mobile Vertical Left Line - Visible only on mobile */}
            <div
              className="absolute left-6 top-0 bottom-0 w-0.5 md:hidden"
              style={{ backgroundColor: tealColor }}
            ></div>

            {/* Timeline Items */}
            <div className="space-y-6 md:space-y-8">
              {processSteps.map((step, index) => {
                const IconComponent = iconMap[step.icon as keyof typeof iconMap];

                return (
                  <div
                    key={step.step}
                    className={`relative ${
                      // Mobile: all items aligned left
                      // Desktop: alternating left/right
                      'md:flex md:items-center ' + 
                      (index % 2 === 0 ? 'md:justify-start' : 'md:justify-end')
                    } transform transition-all duration-1000 ${
                      isVisible['how-it-works'] ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                    }`}
                    style={{ transitionDelay: `${index * 150}ms` }}
                  >
                    {/* Desktop Timeline Dot */}
                    <div
                      className="absolute left-1/2 transform -translate-x-1/2 w-3 h-3 rounded-full z-10 hidden md:block"
                      style={{ backgroundColor: tealColor }}
                    ></div>

                    {/* Mobile Timeline Dot */}
                    <div
                      className="absolute left-6 transform -translate-x-1/2 w-3 h-3 rounded-full z-10 md:hidden"
                      style={{ backgroundColor: tealColor, top: '20px' }}
                    ></div>

                    {/* Content Card */}
                    <div className={`
                      /* Mobile: full width with left margin for timeline */
                      ml-12 mr-4 
                      /* Desktop: 50% width with proper spacing */
                      md:ml-0 md:mr-0 md:w-6/12 
                      ${index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'}
                    `}>
                      <div
                        className="bg-white rounded-lg border hover:shadow-md transition-all duration-300 p-4 sm:p-5 lg:p-6 relative"
                        style={{ borderColor: borderColor }}
                      >
                        {/* Desktop Arrow - Hidden on mobile */}
                        <div
                          className="hidden md:block"
                          style={{
                            content: '""',
                            height: 0,
                            position: 'absolute',
                            top: '20px',
                            width: 0,
                            zIndex: 1,
                            ...(index % 2 === 0 ? {
                              right: '-8px',
                              borderTop: '8px solid transparent',
                              borderBottom: '8px solid transparent',
                              borderLeft: `8px solid ${borderColor}`
                            } : {
                              left: '-8px',
                              borderTop: '8px solid transparent',
                              borderBottom: '8px solid transparent',
                              borderRight: `8px solid ${borderColor}`
                            })
                          }}
                        ></div>
                        <div
                          className="hidden md:block"
                          style={{
                            content: '""',
                            height: 0,
                            position: 'absolute',
                            top: '21px',
                            width: 0,
                            zIndex: 2,
                            ...(index % 2 === 0 ? {
                              right: '-7px',
                              borderTop: '7px solid transparent',
                              borderBottom: '7px solid transparent',
                              borderLeft: '7px solid white'
                            } : {
                              left: '-7px',
                              borderTop: '7px solid transparent',
                              borderBottom: '7px solid transparent',
                              borderRight: '7px solid white'
                            })
                          }}
                        ></div>

                        {/* Icon and Title */}
                        <div className="flex items-start ">
                          <div
                            className="w-8 h-8 sm:w-10 sm:h-10 rounded-full flex items-center justify-center mr-3 sm:mr-4 flex-shrink-0"
                            style={{ backgroundColor: orangeColor }}
                          >
                            <IconComponent size={16} className="text-white sm:hidden" />
                            <IconComponent size={20} className="text-white hidden sm:block" />
                          </div>
                          <h3 className="text-sm sm:text-base lg:text-lg font-bold text-gray-800 font-cabinet leading-tight flex-grow">
                            {language === 'en' ? step.title : step.titleTamil}
                          </h3>
                        </div>

                        {/* Description */}
                        <p className="text-gray-600 text-xs sm:text-sm lg:text-base leading-relaxed font-cabinet pl-11 sm:pl-14">
                          {language === 'en' ? step.description : step.descriptionTamil || step.description}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;