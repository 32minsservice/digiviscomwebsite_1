// components/Header.tsx
import React, { useState } from 'react';
import { FiGlobe, FiChevronDown, FiChevronUp, FiMenu, FiX } from 'react-icons/fi';
import { useLanguage } from '../context/LanguageContext';
import { useScrollHeader } from '../hooks/useScrollAnimation';
import { navigation } from '../constants/data';
import logo from '../assets/DVC.png';

const Header: React.FC = () => {
  const { language, setLanguage } = useLanguage();
  const isScrolled = useScrollHeader();
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleLanguageChange = (lang: 'en' | 'ta') => {
    setLanguage(lang);
    setDropdownOpen(false);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  // Close dropdowns when clicking outside
  const handleOutsideClick = () => {
    setDropdownOpen(false);
  };

  return (
    <>
      <header 
        className={`fixed w-full top-0 z-50 transition-all duration-300 ease-in-out ${
          isScrolled 
            ? 'bg-white backdrop-blur-md shadow-sm' 
            : 'bg-gray-900 bg-opacity-0 backdrop-blur-md'
        }`}
      >
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16 sm:h-20">
            {/* Logo */}
            <div className="flex-shrink-0">
              <img 
                src={logo} 
                alt="DigiViscom Logo" 
                className="h-10 w-32 sm:h-12 sm:w-36 md:h-15 md:w-40" 
              />
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-6 lg:space-x-8 items-center">
              {navigation.map((item) => (
                <a 
                  key={item.href}
                  href={item.href} 
                  className={`transition-colors duration-300 text-sm lg:text-base font-medium ${
                    isScrolled 
                      ? 'text-gray-800 hover:text-orange-500' 
                      : 'text-white hover:text-orange-400'
                  }`}
                >
                  {language === 'en' ? item.label : item.labelTamil}
                </a>
              ))}
              
              {/* Desktop Language Dropdown */}
              <div className="relative inline-block text-left">
                <div
                  onClick={() => setDropdownOpen(!dropdownOpen)}
                  className={`flex items-center gap-2 cursor-pointer px-3 py-2 rounded-full backdrop-blur-sm transition-all duration-300 ${
                    dropdownOpen ? 'bg-white/30' : 'bg-white/20'
                  } hover:bg-white/40`}
                >
                  <FiGlobe className={`w-4 h-4 lg:w-5 lg:h-5 transition-colors duration-300 ${
                    isScrolled ? 'text-gray-800' : 'text-white'
                  }`} />
                  {dropdownOpen ? (
                    <FiChevronUp className={`w-3 h-3 lg:w-4 lg:h-4 transition-colors duration-300 ${
                      isScrolled ? 'text-gray-800' : 'text-white'
                    }`} />
                  ) : (
                    <FiChevronDown className={`w-3 h-3 lg:w-4 lg:h-4 transition-colors duration-300 ${
                      isScrolled ? 'text-gray-800' : 'text-white'
                    }`} />
                  )}
                </div>

                {dropdownOpen && (
                  <div className="absolute right-0 mt-2 w-36 bg-white rounded-lg shadow-lg border z-50">
                    <button 
                      onClick={() => handleLanguageChange('en')}
                      className={`flex items-center w-full px-4 py-2 text-sm hover:bg-gray-100 text-left transition-colors ${
                        language === 'en' ? 'bg-orange-50 text-orange-600' : 'text-gray-700'
                      }`}
                    >
                      <span className="mr-2 text-base font-medium">A</span> English
                    </button>
                    <button 
                      onClick={() => handleLanguageChange('ta')}
                      className={`flex items-center w-full px-4 py-2 text-sm hover:bg-gray-100 text-left transition-colors ${
                        language === 'ta' ? 'bg-orange-50 text-orange-600' : 'text-gray-700'
                      }`}
                    >
                      <span className="mr-2 text-base font-medium">அ</span> Tamil
                    </button>
                  </div>
                )}
              </div>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center space-x-2 sm:space-x-3">
              {/* Mobile Language Toggle */}
              <div className="relative">
                <button
                  onClick={() => setDropdownOpen(!dropdownOpen)}
                  className={`p-2 rounded-full backdrop-blur-sm transition-all duration-300 ${
                    dropdownOpen ? 'bg-white/30' : 'bg-white/20'
                  } hover:bg-white/40`}
                >
                  <FiGlobe className={`w-4 h-4 transition-colors duration-300 ${
                    isScrolled ? 'text-gray-800' : 'text-white'
                  }`} />
                </button>

                {dropdownOpen && (
                  <div className="absolute right-0 mt-2 w-32 bg-white rounded-lg shadow-lg border z-50">
                    <button 
                      onClick={() => handleLanguageChange('en')}
                      className={`flex items-center w-full px-3 py-2 text-sm hover:bg-gray-100 text-left transition-colors ${
                        language === 'en' ? 'bg-orange-50 text-orange-600' : 'text-gray-700'
                      }`}
                    >
                      <span className="mr-2">A</span> EN
                    </button>
                    <button 
                      onClick={() => handleLanguageChange('ta')}
                      className={`flex items-center w-full px-3 py-2 text-sm hover:bg-gray-100 text-left transition-colors ${
                        language === 'ta' ? 'bg-orange-50 text-orange-600' : 'text-gray-700'
                      }`}
                    >
                      <span className="mr-2">அ</span> TA
                    </button>
                  </div>
                )}
              </div>

              {/* Hamburger Menu Button */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className={`p-2 rounded-lg transition-colors duration-300 ${
                  isScrolled ? 'text-gray-800 hover:bg-gray-100' : 'text-white hover:bg-white/20'
                }`}
                aria-label="Toggle mobile menu"
              >
                {mobileMenuOpen ? (
                  <FiX className="w-5 h-5 sm:w-6 sm:h-6" />
                ) : (
                  <FiMenu className="w-5 h-5 sm:w-6 sm:h-6" />
                )}
              </button>
            </div>
          </div>
        </nav>
      </header>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 md:hidden">
          {/* Overlay */}
          <div 
            className="fixed inset-0 bg-black/50 transition-opacity"
            onClick={closeMobileMenu}
          />
          
          {/* Menu Panel */}
          <div className="fixed top-16 sm:top-20 left-0 right-0 bg-white shadow-xl border-t max-h-96 overflow-y-auto">
            <div className="px-4 py-3 space-y-1">
              {navigation.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={closeMobileMenu}
                  className="block px-3 py-3 rounded-md text-base font-medium text-gray-800 hover:bg-gray-100 hover:text-orange-500 transition-colors duration-300 border-b border-gray-100 last:border-b-0"
                >
                  {language === 'en' ? item.label : item.labelTamil}
                </a>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Dropdown Overlay */}
      {dropdownOpen && (
        <div 
          className="fixed inset-0 z-30"
          onClick={handleOutsideClick}
        />
      )}
    </>
  );
};

export default Header;