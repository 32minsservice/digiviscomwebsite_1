// components/AboutSection.tsx
import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { features, content } from '../constants/data';

const AboutSection: React.FC = () => {
  const { language } = useLanguage();
  const isVisible = useScrollAnimation();
  const t = content[language];

  return (
    <section id="about" className="py-20 bg-lightgray">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`text-center mb-16 transform transition-all duration-1000 ${isVisible.about ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <h2 className="text-4xl font-bold text-gray-800 mb-4 font-cabinet">{t.whyTitle}</h2>
          <p style={{ color: '#249A9E' }} className="text-lg font-semibold mb-6 font-cabinet">{t.whySubtitle}</p>
          <p className="text-gray-600 max-w-4xl mx-auto text-lg leading-relaxed font-cabinet">
            {t.whyDescription}
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16 max-w-6xl mx-auto ">
          {features.map((feature, index) => (
            <div 
              key={index}
              className={`bg-white p-6 rounded-xl border-2 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 relative ${isVisible.about ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
              style={{ transitionDelay: `${index * 100}ms`, borderColor: '#CACACA' }}
            >
              <div className="flex flex-col">
                <div className="flex items-center justify-center w-8 h-8 mb-2">
                  <img src={feature.icon} alt={language === 'en' ? feature.title : feature.titleTamil} className="h-8 w-8" style={{ color: '#249A9E' }} />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2 font-cabinet">
                    {language === 'en' ? feature.title : feature.titleTamil}
                  </h3>
                  
                </div>
              </div>
              
              {/* Coming Soon Badge - Only show for features that have coming soon status */}
              {feature.subtitle && (feature.subtitle.includes('Coming Soon') || feature.subtitleTamil?.includes('Coming Soon')) && (
                <div className="absolute top-8 right-8">
                  <span 
                    className="px-3 py-1 text-sm font-medium rounded-full border-2 border-dashed"
                    style={{ 
                      color: '#F78E1E', 
                      borderColor: '#F78E1E'
                    }}
                  >
                    Coming Soon
                  </span>
                </div>
              )}
            </div>
          ))}
        </div>
        
        <div className="text-center">
          <p className="text-gray-600 max-w-3xl mx-auto text-lg font-cabinet">
            {language === 'en' 
              ? "We don't just teach theory - we equip learners with hands-on experience using real-world tools, industry-relevant software, and project-based learning methods."
              : "நாங்கள் வெறும் கோட்பாட்டை மட்டும் கற்பிக்கவில்லை - உண்மையான உலக கருவிகள், தொழில்துறை தொடர்புடைய மென்பொருள் மற்றும் திட்ட அடிப்படையிலான கற்றல் முறைகளைப் பயன்படுத்தி கற்பவர்களுக்கு நடைமுறை அனுபவத்தை வழங்குகிறோம்."
            }
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;