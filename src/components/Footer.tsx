// components/Footer.tsx
import React from 'react';
import { FiPhone, FiInstagram, FiLinkedin, FiYoutube, FiChevronRight, FiMapPin,  FiDownload } from 'react-icons/fi';
import { useLanguage } from '../context/LanguageContext';
import { contactInfo, content, navigation } from '../constants/data';
import logo from '../assets/DVC.png';
import { FaWhatsapp, FaXTwitter,  FaHeadset } from "react-icons/fa6";

const Footer: React.FC = () => {
  const { language } = useLanguage();
  const t = content[language];

  const handleLocationClick = () => {
    const address = contactInfo.address;
    const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`;
    window.open(mapsUrl, '_blank');
  };

  const handleChatClick = () => {
    const phoneNumber = "919444926755";
    const whatsappUrl = `https://wa.me/${phoneNumber}`;
    window.open(whatsappUrl, '_blank');
  };

  const handleCallClick = () => {
    window.location.href = `tel:${contactInfo.phone}`;
  };

  const footerLabels = {
    en: {
      company: 'DigiViscom Tech Pvt. Ltd.',
      chatWith: 'Chat with Us',
      talkTo: 'Talk to Us',
      followUs: 'Follow us on',
      privacyPolicy: 'Privacy Policy',
      termsConditions: 'Terms & Conditions'
    },
    ta: {
      company: 'DigiViscom Tech Pvt. Ltd.',
      chatWith: 'எங்களுடன் அரட்டையடியுங்கள்',
      talkTo: 'எங்களுடன் பேசுங்கள்',
      followUs: 'எங்களை பின்தொடருங்கள்',
      privacyPolicy: 'தனியுரிமை கொள்கை',
      termsConditions: 'விதிமுறைகள் மற்றும் நிபந்தனைகள்'
    }
  };

  const labels = footerLabels[language];

  return (
    <footer style={{ backgroundColor: '#201E18' }} className="text-white py-16">
      {/* Contact Cards Section - Top of Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="grid md:grid-cols-3 gap-10">
          {/* Location Card */}
          <div 
            style={{ backgroundColor: '#3A3A3A' }} 
            className="rounded-lg p-8 text-left cursor-pointer hover:bg-opacity-90 transition-all duration-300"
            onClick={handleLocationClick}
          >
            <div className="w-6 h-6 mb-4">
              <FiMapPin className="w-full h-full text-teal-400" style={{ color: '#249A9E' }} />
            </div>
            <h3 className="text-white font-semibold text-lg mb-3 font-cabinet">{labels.company}</h3>
            <p className="text-gray-300 text-sm leading-relaxed font-cabinet">
              {language === 'en' ? contactInfo.address : contactInfo.addressTamil}
            </p>
          </div>

          {/* Chat Card */}
          <div 
            style={{ backgroundColor: '#3A3A3A' }} 
            className="rounded-lg p-8 text-left cursor-pointer hover:bg-opacity-90 transition-all duration-300"
            onClick={handleChatClick}
          >
            <div className="w-6 h-6 mb-4">
              <FaWhatsapp className="w-full h-full text-teal-400" style={{ color: '#249A9E' }} />
            </div>
            <h3 className="text-white font-semibold text-lg mb-3 font-cabinet">{labels.chatWith}</h3>
            <p className="text-gray-300 text-sm leading-relaxed font-cabinet">{contactInfo.whatsapp}</p>
          </div>

          {/* Talk Card */}
          <div 
            style={{ backgroundColor: '#3A3A3A' }} 
            className="rounded-lg p-8 text-left cursor-pointer hover:bg-opacity-90 transition-all duration-300"
            onClick={handleCallClick}
          >
            <div className="w-6 h-6 mb-4">
              <FiPhone className="w-full h-full text-teal-400" style={{ color: '#249A9E' }} />
            </div>
            <h3 className="text-white font-semibold text-lg mb-3 font-cabinet">{labels.talkTo}</h3>
            <p className="text-gray-300 text-sm leading-relaxed font-cabinet">{contactInfo.phone}</p>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-12">
          {/* Left Side - Logo and Tagline */}
          <div className="mb-8 lg:mb-0">
            <div className="flex items-center space-x-3 mb-4">
              <div className="bg-gradient-to-r from-orange-500 to-teal-500 p-2 rounded-lg">
                <img src={logo} alt="DigiViscom Logo" className="h-15 w-40" />
              </div>
            </div>
            <p className="text-gray-400 text-l font-cabinet">{t.footerTagline}</p>
          </div>

          {/* Right Side - Join Us Today */}
          <div className="text-center lg:text-left">
            <h3 className="text-4xl font-bold text-white mb-4 font-cabinet">{t.joinToday}</h3>
            <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-2">
              <button 
                style={{ backgroundColor: '#F58321' }}
                className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 px-5 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 flex items-center space-x-2 font-cabinet"
              >
                <span>{t.connectButton}</span>
                <FiChevronRight size={12} />
              </button>
              <div className="flex space-x-3">
                <div className="w-12 h-12 bg-gray-700 rounded-full flex items-center justify-center hover:bg-gray-600 transition-colors cursor-pointer">
                  < FaHeadset size={20} className="text-white" />
                </div>
                <div className="w-12 h-12 bg-gray-700 rounded-full flex items-center justify-center hover:bg-gray-600 transition-colors cursor-pointer">
                  <FiDownload size={20} className="text-white" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="flex flex-col lg:flex-row justify-between items-center border-t border-gray-700 pt-8 w-full">
        {/* Left - Follow us with icons inline */}
        <div className="mb-6 lg:mb-0 flex items-center space-x-4">
            <p className="text-gray-400 text-sm font-cabinet">{labels.followUs}</p>
            <a href="#" className="bg-gray-700 p-2 rounded-lg hover:bg-gray-600 transition-colors">
            <FiInstagram size={18} className="text-white" />
            </a>
            <a href="#" className="bg-gray-700 p-2 rounded-lg hover:bg-gray-600 transition-colors">
            <FiLinkedin size={18} className="text-white" />
            </a>
            <a href="#" className="bg-gray-700 p-2 rounded-lg hover:bg-gray-600 transition-colors">
            <FaXTwitter size={18} className="text-white" />
            </a>
            <a href="#" className="bg-gray-700 p-2 rounded-lg hover:bg-gray-600 transition-colors">
            <FiYoutube size={18} className="text-white" />
            </a>
        </div>

          {/* Center - Navigation */}
          <div className="flex flex-wrap justify-center space-x-8 mb-6 lg:mb-0">
            {navigation.map((item) => (
              <a 
                key={item.href}
                href={item.href} 
                className="text-gray-400 hover:text-white transition-colors text-sm font-cabinet"
              >
                {language === 'en' ? item.label : item.labelTamil}
              </a>
            ))}
          </div>

          {/* Right - Legal Links */}
          <div className="flex space-x-6 text-sm">
            <a href="#" className="text-gray-400 hover:text-white transition-colors font-cabinet">{labels.privacyPolicy}</a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors font-cabinet">{labels.termsConditions}</a>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center mt-8 pt-6 border-t border-gray-700">
          <p className="text-gray-400 text-sm font-cabinet">
            {t.copyright}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;