// components/ContactSection.tsx
import React, { useState } from 'react';
import { FiChevronRight } from 'react-icons/fi';
import { useLanguage } from '../context/LanguageContext';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { content } from '../constants/data';
import { FormData } from '../types';

// New: Import the Sanity client you created
import { client } from '../sanityClient';

const ContactSection: React.FC = () => {
  const { language } = useLanguage();
  const isVisible = useScrollAnimation();
  const t = content[language];

  const [formData, setFormData] = useState<FormData>({
    firstName: '',
    email: '',
    phone: '',
    subject: '',
    comments: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  // Modified: This function is now async and sends data to Sanity
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Prepare the data to be sent to Sanity
    const newSubmission = {
      _type: 'contactForm', // This must match the schema name you defined in Sanity
      firstName: formData.firstName,
      email: formData.email,
      phone: formData.phone,
      subject: formData.subject,
      comments: formData.comments,
    };

    try {
      // Use the Sanity client to create a new document
      await client.create(newSubmission);
      
      console.log('Form submission successful!');
      alert('Your message has been sent successfully!');

      // Optional: Clear the form fields after successful submission
      setFormData({
        firstName: '',
        email: '',
        phone: '',
        subject: '',
        comments: ''
      });

    } catch (error) {
      console.error('Error submitting form:', error);
      alert('There was an error sending your message. Please try again.');
    }
  };

  const formLabels = {
    en: {
      firstName: 'First Name*',
      email: 'Email*',
      phone: 'Phone Number*',
      subject: 'Subject*',
      comments: 'Comments*',
      submit: 'Submit'
    },
    ta: {
      firstName: 'முதல் பெயர்*',
      email: 'மின்னஞ்சல்*',
      phone: 'தொலைபேசி எண்*',
      subject: 'விஷயம்*',
      comments: 'கருத்துகள்*',
      submit: 'சமர்ப்பிக்கவும்'
    }
  };

  const labels = formLabels[language];

  return (
    <section id="contact">
      <div className="py-20 max-w-7xl mx-auto h-full px-6 rounded-2xl" style={{ backgroundColor: '#FFFFFF' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`text-center mb-16 transform transition-all duration-1000 ${isVisible.contact ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <h2 className="text-4xl font-bold text-gray-800 mb-4 font-cabinet">{t.contactTitle}</h2>
            <p className="text-gray-600 font-cabinet">{t.contactDescription}</p>
          </div>

          {/* Contact Form */}
          <div className={`max-w-4xl mx-auto transform transition-all duration-1000 ${isVisible.contact ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <label className="block text-gray-700 font-medium mb-3 font-cabinet">{labels.firstName}</label>
                  <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    className="w-full px-0 py-3 bg-transparent border-0 border-b-2 border-gray-300 focus:border-orange-500 focus:ring-0 focus:outline-none transition-all text-gray-700 font-cabinet"
                    required
                  />
                </div>
                <div>
                  <label className="block text-gray-700 font-medium mb-3 font-cabinet">{labels.email}</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-0 py-3 bg-transparent border-0 border-b-2 border-gray-300 focus:border-orange-500 focus:ring-0 focus:outline-none transition-all text-gray-700 font-cabinet"
                    required
                  />
                </div>
              </div>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <label className="block text-gray-700 font-medium mb-3 font-cabinet">{labels.phone}</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-0 py-3 bg-transparent border-0 border-b-2 border-gray-300 focus:border-orange-500 focus:ring-0 focus:outline-none transition-all text-gray-700 font-cabinet"
                    required
                  />
                </div>
                <div>
                  <label className="block text-gray-700 font-medium mb-3 font-cabinet">{labels.subject}</label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    className="w-full px-0 py-3 bg-transparent border-0 border-b-2 border-gray-300 focus:border-orange-500 focus:ring-0 focus:outline-none transition-all text-gray-700 font-cabinet"
                    required
                  />
                </div>
              </div>
              <div>
                <label className="block text-gray-700 font-medium mb-3 font-cabinet">{labels.comments}</label>
                <textarea
                  name="comments"
                  value={formData.comments}
                  onChange={handleInputChange}
                  rows={1}
                  className="w-full px-0 py-3 bg-transparent border-0 border-b-2 border-gray-300 focus:border-orange-500 focus:ring-0 focus:outline-none transition-all resize-none text-gray-700 font-cabinet"
                  required
                ></textarea>
              </div>
              <div className="text-center pt-8">
                <button
                  type="submit"
                  style={{ backgroundColor: '#F58321' }}
                  className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white px-10 py-4 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 flex items-center space-x-2 mx-auto text-lg font-cabinet"
                >
                  <span>{labels.submit}</span>
                  <FiChevronRight size={20} />
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;