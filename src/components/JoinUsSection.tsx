import React, { useState } from 'react';
import { X } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { joinHandsContent } from '../constants/data';
import start from "../assets/start.png";

const JoinHandsSection = () => {
  const { language } = useLanguage();
  const [showPopup, setShowPopup] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: ''
  });

  const content = joinHandsContent[language];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };
const handleSubmit = async () => {
  const requiredMsg =
    language === "en"
      ? "Please fill in all required fields."
      : "தயவு செய்து அனைத்து தேவையான புலங்களையும் நிரப்பவும்.";
  const emailMsg =
    language === "en"
      ? "Please enter a valid email address."
      : "தயவு செய்து சரியான மின்னஞ்சல் முகவரியை உள்ளிடவும்.";
  const successMsg =
    language === "en"
      ? "Thank you for your interest, please check your email for more details!"
      : "உங்கள் ஆர்வத்திற்கு நன்றி, மேலும் விவரங்களுக்கு உங்கள் மின்னஞ்சலைப் பார்க்கவும்!";

  if (!formData.name.trim() || !formData.email.trim() || !formData.phone.trim()) {
    alert(requiredMsg);
    return;
  }

  if (!/\S+@\S+\.\S+/.test(formData.email)) {
    alert(emailMsg);
    return;
  }

  try {
    await fetch("https://script.google.com/macros/s/AKfycbwwcfbihtBoTDaqqGiINuaY3d1YS3biI9U-t3Pptf-yLG1R2BdCtTvR61v1fr26y7bE7g/exec", {
      method: "POST",
      mode: "no-cors", // 👈 bypass CORS
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    // ⚠️ Don't parse response here (not allowed in no-cors)
    console.log("Form submitted (no-cors mode)");
    alert(successMsg);

    setShowPopup(false);
    setFormData({ name: "", email: "", phone: "" });
  } catch (error) {
    console.error("Error:", error);
    alert("Something went wrong. Please try again later.");
  }
};

  const modalContent = {
    title: language === 'en' ? 'Get Started' : 'தொடங்குங்கள்',
    description: language === 'en' ? 'Please provide your details and we\'ll get back to you soon.' : 'தயவு செய்து உங்கள் விவரங்களை வழங்குங்கள், நாங்கள் விரைவில் உங்களைத் தொடர்பு கொள்வோம்.',
    nameLabel: language === 'en' ? 'Full Name *' : 'முழு பெயர் *',
    namePlaceholder: language === 'en' ? 'Enter your full name' : 'உங்கள் முழு பெயரை உள்ளிடவும்',
    emailLabel: language === 'en' ? 'Email Address *' : 'மின்னஞ்சல் முகவரி *',
    emailPlaceholder: language === 'en' ? 'Enter your email address' : 'உங்கள் மின்னஞ்சல் முகவரியை உள்ளிடவும்',
    phoneLabel: language === 'en' ? 'Phone Number *' : 'தொலைபேசி எண் *',
    phonePlaceholder: language === 'en' ? 'Enter your phone number' : 'உங்கள் தொலைபேசி எண்ணை உள்ளிடவும்',
    submitButton: language === 'en' ? 'Submit Application' : 'விண்ணப்பம் சமர்பிக்கவும்'
  };

  return (
    <>
      <section className="py-12 sm:py-16 lg:py-20">
        <div className="py-4 sm:py-6 lg:py-8">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            
            <div className="text-center mb-6 sm:mb-8">
              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">
                {content.title}
              </h1>
              <p className="text-lg sm:text-xl text-teal-600 font-medium" style={{ color: '#169397' }}>
                {content.subtitle}
              </p>
            </div>

            <div className="max-w-5xl mx-auto">
              
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-start mb-6 sm:mb-8">
                
                <div className="lg:col-span-7">
                  <div className="bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 h-full">
                    <p className="text-base sm:text-lg text-gray-700 mb-6 sm:mb-8 leading-relaxed">
                      {content.description}
                    </p>
                    
                    <div>
                      <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-4 sm:mb-6">
                        {content.interestAreasTitle}
                      </h3>
                      
                      <ul className="space-y-1">
                        {content.interestAreas.map((area, index) => (
                          <li key={index} className="flex items-start gap-3">
                            <span className="w-1 h-1 bg-black rounded-full mt-2 flex-shrink-0"></span>
                            <span className="text-gray-700 leading-relaxed text-sm sm:text-base">
                              {area}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="lg:col-span-5 order-first lg:order-last">
                  <div className="rounded-2xl sm:rounded-3xl overflow-hidden h-64 sm:h-80 lg:h-96 lg:h-full">
                    <img 
                      src={content.professionalImage} 
                      alt="Professional educator" 
                      className="w-full h-full object-contain"
                    />
                  </div>
                </div>
              </div>

              <div className="text-center px-2 sm:px-0">
                <button 
                  onClick={() => setShowPopup(true)}
                  className="group bg-gradient-to-r hover:from-orange-600 hover:to-orange-700 text-white font-semibold py-3 sm:py-4 px-4 sm:px-6 rounded-xl w-full transform transition-all duration-200 hover:scale-105 flex items-center justify-between mx-auto"
                  style={{ backgroundColor: '#F58321', width: '100%' }}
                >
                  <span className="text-base sm:text-lg">{content.ctaPlaceholder}</span>
                  <div className="w-7 h-7 sm:w-8 sm:h-8 bg-white rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-200">
                    <img src={start} alt="start" className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {showPopup && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl sm:rounded-3xl shadow-2xl max-w-md w-full transform transition-all duration-300 scale-100 max-h-[90vh] overflow-y-auto">
            
            <div className="flex justify-between items-center p-4 sm:p-6 border-b border-gray-200">
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900">
                {modalContent.title}
              </h2>
              <button
                onClick={() => setShowPopup(false)}
                className="p-2 hover:bg-gray-100 rounded-full transition-colors duration-200"
              >
                <X className="w-5 h-5 sm:w-6 sm:h-6 text-gray-500" />
              </button>
            </div>

            <div className="p-4 sm:p-6">
              <p className="text-sm sm:text-base text-gray-600 mb-4 sm:mb-6">
                {modalContent.description}
              </p>

              <div className="space-y-3 sm:space-y-4">
                <div>
                  <label htmlFor="name" className="block text-xs sm:text-sm font-medium text-gray-700 mb-1 sm:mb-2">
                    {modalContent.nameLabel}
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-3 sm:px-4 py-2 sm:py-3 text-sm sm:text-base border border-gray-300 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-200"
                    placeholder={modalContent.namePlaceholder}
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-xs sm:text-sm font-medium text-gray-700 mb-1 sm:mb-2">
                    {modalContent.emailLabel}
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-3 sm:px-4 py-2 sm:py-3 text-sm sm:text-base border border-gray-300 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-200"
                    placeholder={modalContent.emailPlaceholder}
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-xs sm:text-sm font-medium text-gray-700 mb-1 sm:mb-2">
                    {modalContent.phoneLabel}
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-3 sm:px-4 py-2 sm:py-3 text-sm sm:text-base border border-gray-300 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-200"
                    placeholder={modalContent.phonePlaceholder}
                  />
                </div>

                <div className="pt-3 sm:pt-4">
                  <button
                    onClick={handleSubmit}
                    className="w-full bg-gradient-to-r hover:from-orange-600 hover:to-orange-700 text-white font-semibold py-2.5 sm:py-3 px-4 sm:px-6 text-sm sm:text-base rounded-xl shadow-lg transform transition-all duration-200 hover:scale-105"
                    style={{ backgroundColor: '#F58321' }}>
                    {modalContent.submitButton}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default JoinHandsSection;