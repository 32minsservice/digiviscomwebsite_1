// components/ContactSection.tsx
import React, { useState } from 'react';
import { FiChevronRight, FiAlertCircle } from 'react-icons/fi';
import { useLanguage } from '../context/LanguageContext';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { content } from '../constants/data';
import { FormData } from '../types';

// New: Import the Sanity client you created
import { client } from '../sanityClient';

interface FormErrors {
  firstName?: string;
  email?: string;
  phone?: string;
  subject?: string;
  comments?: string;
}

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

  const [errors, setErrors] = useState<FormErrors>({});
  const [touched, setTouched] = useState<Record<string, boolean>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Validation functions
  const validateEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validatePhone = (phone: string): boolean => {
    // Remove all non-digit characters for validation
    const digitsOnly = phone.replace(/\D/g, '');
    // Allow 10-15 digits (accommodates various international formats)
    return digitsOnly.length >= 10 && digitsOnly.length <= 15;
  };

  const validateName = (name: string): boolean => {
    // Allow letters, spaces, hyphens, and apostrophes
    const nameRegex = /^[a-zA-Z\s\-']+$/;
    return nameRegex.test(name) && name.trim().length >= 2;
  };

  // Validation error messages
  const validationMessages = {
    en: {
      firstName: {
        required: 'First name is required',
        invalid: 'First name must contain only letters'
      },
      email: {
        required: 'Email is required',
        invalid: 'Please enter a valid email address'
      },
      phone: {
        required: 'Phone number is required',
        invalid: 'Please enter a valid phone number with digits only (10-15 digits)'
      },
      subject: {
        required: 'Subject is required',
        minLength: 'Subject must be at least 3 characters long'
      },
      comments: {
        required: 'Comments are required',
        minLength: 'Comments must be at least 10 characters long'
      }
    },
    ta: {
      firstName: {
        required: 'முதல் பெயர் தேவை',
        invalid: 'முதல் பெயரில் எழுத்துகள் மட்டுமே இருக்க வேண்டும் (எண்கள் அனுமதிக்கப்படவில்லை) மற்றும் குறைந்தது 2 எழுத்துகள் இருக்க வேண்டும்'
      },
      email: {
        required: 'மின்னஞ்சல் தேவை',
        invalid: 'சரியான மின்னஞ்சல் முகவரியை உள்ளிடவும்'
      },
      phone: {
        required: 'தொலைபேசி எண் தேவை',
        invalid: 'இலக்கங்கள் மட்டுமே கொண்ட சரியான தொலைபேசி எண்ணை உள்ளிடவும் (10-15 இலக்கங்கள்)'
      },
      subject: {
        required: 'விஷயம் தேவை',
        minLength: 'விஷயம் குறைந்தது 3 எழுத்துகள் இருக்க வேண்டும்'
      },
      comments: {
        required: 'கருத்துகள் தேவை',
        minLength: 'கருத்துகள் குறைந்தது 10 எழுத்துகள் இருக்க வேண்டும்'
      }
    }
  };

  const messages = validationMessages[language];

  // Validate individual field
  const validateField = (name: string, value: string): string => {
    switch (name) {
      case 'firstName':
        if (!value.trim()) return messages.firstName.required;
        if (!validateName(value.trim())) return messages.firstName.invalid;
        break;
      case 'email':
        if (!value.trim()) return messages.email.required;
        if (!validateEmail(value.trim())) return messages.email.invalid;
        break;
      case 'phone':
        if (!value.trim()) return messages.phone.required;
        if (!validatePhone(value.trim())) return messages.phone.invalid;
        break;
      case 'subject':
        if (!value.trim()) return messages.subject.required;
        if (value.trim().length < 3) return messages.subject.minLength;
        break;
      case 'comments':
        if (!value.trim()) return messages.comments.required;
        if (value.trim().length < 10) return messages.comments.minLength;
        break;
    }
    return '';
  };

  // Validate entire form
  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};
    
    Object.keys(formData).forEach(key => {
      const error = validateField(key, formData[key as keyof FormData]);
      if (error) {
        newErrors[key as keyof FormErrors] = error;
      }
    });

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));

    // Real-time validation for touched fields
    if (touched[name]) {
      const error = validateField(name, value);
      setErrors(prev => ({
        ...prev,
        [name]: error
      }));
    }
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    
    setTouched(prev => ({
      ...prev,
      [name]: true
    }));

    const error = validateField(name, value);
    setErrors(prev => ({
      ...prev,
      [name]: error
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Mark all fields as touched
    const allTouched = Object.keys(formData).reduce((acc, key) => {
      acc[key] = true;
      return acc;
    }, {} as Record<string, boolean>);
    setTouched(allTouched);

    // Validate form
    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    // Prepare the data to be sent to Sanity
    const newSubmission = {
      _type: 'contactForm',
      firstName: formData.firstName.trim(),
      email: formData.email.trim().toLowerCase(),
      phone: formData.phone.trim(),
      subject: formData.subject.trim(),
      comments: formData.comments.trim(),
    };

    try {
      await client.create(newSubmission);
      
      console.log('Form submission successful!');
      alert('Your message has been sent successfully!');

      // Clear the form fields and reset validation state
      setFormData({
        firstName: '',
        email: '',
        phone: '',
        subject: '',
        comments: ''
      });
      setErrors({});
      setTouched({});

    } catch (error) {
      console.error('Error submitting form:', error);
      alert('There was an error sending your message. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const formLabels = {
    en: {
      firstName: 'First Name*',
      email: 'Email*',
      phone: 'Phone Number*',
      subject: 'Subject*',
      comments: 'Comments*',
      submit: 'Submit',
      submitting: 'Submitting...'
    },
    ta: {
      firstName: 'முதல் பெயர்*',
      email: 'மின்னஞ்சல்*',
      phone: 'தொலைபேசி எண்*',
      subject: 'விஷயம்*',
      comments: 'கருத்துகள்*',
      submit: 'சமர்ப்பிக்கவும்',
      submitting: 'சமர்ப்பிக்கிறது...'
    }
  };

  const labels = formLabels[language];

  // Helper function to get input border color based on validation state
  const getInputBorderColor = (fieldName: string) => {
    if (errors[fieldName as keyof FormErrors] && touched[fieldName]) {
      return 'border-red-500';
    }
    if (!errors[fieldName as keyof FormErrors] && touched[fieldName] && formData[fieldName as keyof FormData]) {
      return 'border-green-500';
    }
    return 'border-gray-300 focus:border-orange-500';
  };

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
            <form onSubmit={handleSubmit} className="space-y-8" noValidate>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <label className="block text-gray-700 font-medium mb-3 font-cabinet">{labels.firstName}</label>
                  <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    onBlur={handleBlur}
                    className={`w-full px-0 py-3 bg-transparent border-0 border-b-2 ${getInputBorderColor('firstName')} focus:ring-0 focus:outline-none transition-all text-gray-700 font-cabinet`}
                    required
                    disabled={isSubmitting}
                  />
                  {errors.firstName && touched.firstName && (
                    <div className="flex items-center space-x-1 mt-2">
                      <FiAlertCircle className="text-red-500 text-sm" />
                      <span className="text-red-500 text-sm font-cabinet">{errors.firstName}</span>
                    </div>
                  )}
                </div>
                <div>
                  <label className="block text-gray-700 font-medium mb-3 font-cabinet">{labels.email}</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    onBlur={handleBlur}
                    className={`w-full px-0 py-3 bg-transparent border-0 border-b-2 ${getInputBorderColor('email')} focus:ring-0 focus:outline-none transition-all text-gray-700 font-cabinet`}
                    required
                    disabled={isSubmitting}
                  />
                  {errors.email && touched.email && (
                    <div className="flex items-center space-x-1 mt-2">
                      <FiAlertCircle className="text-red-500 text-sm" />
                      <span className="text-red-500 text-sm font-cabinet">{errors.email}</span>
                    </div>
                  )}
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
                    onBlur={handleBlur}
                    className={`w-full px-0 py-3 bg-transparent border-0 border-b-2 ${getInputBorderColor('phone')} focus:ring-0 focus:outline-none transition-all text-gray-700 font-cabinet`}
                    required
                    disabled={isSubmitting}
                  />
                  {errors.phone && touched.phone && (
                    <div className="flex items-center space-x-1 mt-2">
                      <FiAlertCircle className="text-red-500 text-sm" />
                      <span className="text-red-500 text-sm font-cabinet">{errors.phone}</span>
                    </div>
                  )}
                </div>
                <div>
                  <label className="block text-gray-700 font-medium mb-3 font-cabinet">{labels.subject}</label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    onBlur={handleBlur}
                    className={`w-full px-0 py-3 bg-transparent border-0 border-b-2 ${getInputBorderColor('subject')} focus:ring-0 focus:outline-none transition-all text-gray-700 font-cabinet`}
                    required
                    disabled={isSubmitting}
                  />
                  {errors.subject && touched.subject && (
                    <div className="flex items-center space-x-1 mt-2">
                      <FiAlertCircle className="text-red-500 text-sm" />
                      <span className="text-red-500 text-sm font-cabinet">{errors.subject}</span>
                    </div>
                  )}
                </div>
              </div>
              <div>
                <label className="block text-gray-700 font-medium mb-3 font-cabinet">{labels.comments}</label>
                <textarea
                  name="comments"
                  value={formData.comments}
                  onChange={handleInputChange}
                  onBlur={handleBlur}
                  rows={1}
                  className={`w-full px-0 py-3 bg-transparent border-0 border-b-2 ${getInputBorderColor('comments')} focus:ring-0 focus:outline-none transition-all resize-none text-gray-700 font-cabinet`}
                  required
                  disabled={isSubmitting}
                ></textarea>
                {errors.comments && touched.comments && (
                  <div className="flex items-center space-x-1 mt-2">
                    <FiAlertCircle className="text-red-500 text-sm" />
                    <span className="text-red-500 text-sm font-cabinet">{errors.comments}</span>
                  </div>
                )}
              </div>
              <div className="text-center pt-8">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  style={{ backgroundColor: isSubmitting ? '#9CA3AF' : '#F58321' }}
                  className={`${
                    isSubmitting 
                      ? 'bg-gray-400 cursor-not-allowed' 
                      : 'bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 hover:scale-105'
                  } text-white px-10 py-4 rounded-full font-semibold transition-all duration-300 transform flex items-center space-x-2 mx-auto text-lg font-cabinet`}
                >
                  <span>{isSubmitting ? labels.submitting : labels.submit}</span>
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