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
    <section id="how-it-works" className="py-12 bg-gray-50 min-h-screen flex flex-col justify-center">
      {/* Increased max-w for the main content container */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header - More Compact */}
        <div className={`text-center mb-8 transform transition-all duration-1000 ${isVisible['how-it-works'] ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <h2 className="text-4xl font-bold text-gray-800 mb-2 font-cabinet">{t.howItWorksTitle}</h2>
          <p style={{ color: tealColor }} className="text-lg font-semibold mb-3 font-cabinet">{t.howItWorksSubtitle}</p>
          <p className="text-gray-600 max-w-xl mx-auto text-l leading-relaxed font-cabinet">
            {t.howItWorksDescription}
          </p>
        </div>

        {/* Timeline Container - Adjusted for wider cards */}
        {/* Changed max-w-5xl to max-w-none to allow it to fill the parent, 
            or you can explicitly set a wider max-w like max-w-4xl if the parent is max-w-6xl */}
        <div className="relative max-w-4xl mx-auto"> {/* Adjusted this max-w */}
          {/* Vertical Center Line */}
          <div
            className="absolute left-1/2 transform -translate-x-1/2 top-0 bottom-0 w-0.5"
            style={{ backgroundColor: tealColor }}
          ></div>

          {/* Timeline Items - Adjusted Spacing and Card Width */}
          <div className="space-y-8"> {/* Increased space-y for better vertical separation */}
            {processSteps.map((step, index) => {
              const IconComponent = iconMap[step.icon as keyof typeof iconMap];

              return (
                <div
                  key={step.step}
                  className={`relative flex items-center ${
                    index % 2 === 0 ? 'justify-start' : 'justify-end'
                  } transform transition-all duration-1000 ${
                    isVisible['how-it-works'] ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                  }`}
                  style={{ transitionDelay: `${index * 150}ms` }}
                >
                  {/* Timeline Dot */}
                  <div
                    className="absolute left-1/2 transform -translate-x-1/2 w-3 h-3 rounded-full z-10"
                    style={{ backgroundColor: tealColor }}
                  ></div>

                  {/* Content Card - Reverted to w-6/12 but with adjusted horizontal padding */}
                  <div className={`w-6/12 px-2 sm:px-4 md:px-6 ${index % 2 === 0 ? 'pr-8' : 'pl-8'}`}>
                    <div
                      className="bg-white rounded-lg border hover:shadow-md transition-all duration-300 p-4 relative"
                      style={{ borderColor: borderColor }}
                    >
                      {/* Arrow - Remains the same */}
                      <div
                        style={{
                          content: '""',
                          height: 0,
                          position: 'absolute',
                          top: '18px',
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
                        style={{
                          content: '""',
                          height: 0,
                          position: 'absolute',
                          top: '19px',
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

                      {/* Icon and Title - Adjusted for better alignment and spacing */}
                      <div className="flex items-start mb-1"> {/* Changed items-center to items-start */}
                        <div
                          className="w-8 h-8 rounded-full flex items-center justify-center mr-3 flex-shrink-0"
                          style={{ backgroundColor: orangeColor }}
                        >
                          <IconComponent size={20} className="text-white" />
                        </div>
                        <h3 className="text-base font-bold text-gray-800 font-cabinet leading-tight flex-grow"> {/* Added flex-grow */}
                          {language === 'en' ? step.title : step.titleTamil}
                        </h3>
                      </div>

                      {/* Full Description - Removed truncation for now to see full text */}
                      <p className="text-gray-600 text-xs leading-relaxed font-cabinet">
                         {step.description || step.content} {/* Removed truncation */}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;