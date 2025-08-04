// components/TestimonialsSection.tsx
import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { testimonials, content } from '../constants/data';

const TestimonialsSection: React.FC = () => {
  const { language } = useLanguage();
  const isVisible = useScrollAnimation();
  const t = content[language];

  return (
    <section id="testimonials" className="py-20 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`text-center mb-16 transform transition-all duration-1000 ${isVisible.testimonials ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <h2 className="text-4xl font-bold text-gray-800 mb-4 font-cabinet">{t.testimonialsTitle}</h2>
          <p style={{ color: '#249A9E' }} className="text-teal-600 text-lg font-cabinet">{t.testimonialsSubtitle}</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className={`bg-gradient-to-br from-teal-600 to-teal-700 text-white p-8 rounded-xl transform transition-all duration-1000 hover:scale-105 ${
                isVisible.testimonials ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
              }`}
              style={{ transitionDelay: `${index * 200}ms`, backgroundColor: '#169397'}}
            >
              <p className="text-lg mb-6 leading-relaxed font-cabinet">
                "{language === 'en' ? testimonial.text : testimonial.textTamil}"
              </p>
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                  <img src={testimonial.profileImage} alt="profile" className="h-12 w-12 rounded-full" />
                </div>
                <div>
                  <h4 className="font-semibold font-cabinet">
                    {language === 'en' ? testimonial.name : testimonial.nameTamil}
                  </h4>
                  <p className="text-teal-200 text-sm font-cabinet">
                    {language === 'en' ? testimonial.location : testimonial.locationTamil}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;