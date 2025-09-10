// constants/data.ts
import { Skill, Feature, ProcessStep, Testimonial, NavigationItem, ContactInfo } from '../types';
import { FiCamera, FiVideo, FiAward, FiUsers, FiBookOpen, FiCheckCircle } from 'react-icons/fi';

// Import your local images
import Photography from '../assets/photography.png';
import Videography from '../assets/videography.png';
import Graphics from '../assets/Graphics.png';
import Digital from '../assets/Digital.png';
import Content from '../assets/content.png';
import AI from '../assets/AI.png';
import Frame1 from '../assets/Frame1.png';
import Frame2 from '../assets/Frame2.png';
import Frame3 from '../assets/Frame3.png';
import Frame4 from '../assets/Frame4.png';
import Frame5 from '../assets/Frame5.png';
import Frame6 from '../assets/Frame6.png';
import Profile1 from '../assets/profile1.png';
import Profile2 from '../assets/profile2.png';
import ProfessionalProfie from '../assets/Professional_Profie.png';


export const navigation: NavigationItem[] = [
  { href: '#home', label: 'Home', labelTamil: 'முகப்பு' },
  { href: '#about', label: 'About Us', labelTamil: 'எங்களைப் பற்றி' },
  { href: '#courses', label: 'Courses', labelTamil: 'படிப்புகள்' },
  { href: '#how-it-works', label: 'How It Works', labelTamil: 'எப்படி வேலை செய்கிறது' },
  { href: '#contact', label: 'Contact', labelTamil: 'தொடர்பு' }
];

export const skills: Skill[] = [
  {
    id: 1,
    title: 'Photography',
    titleTamil: 'புகைப்பட கலை',
    backgroundImage: Photography
  },
  {
    id: 2,
    title: 'Videography',
    titleTamil: 'வீடியோ பதிவு',
    backgroundImage: Videography
  },
  {
    id: 3,
    title: 'Graphic Design',
    titleTamil: 'வரைகலை வடிவமைப்பு',
    backgroundImage: Graphics
  },
  {
    id: 4,
    title: 'Digital Journalism',
    titleTamil: 'டிஜிட்டல் இதழியல்',
    backgroundImage: Digital
  },
  {
    id: 5,
    title: 'Content Creation',
    titleTamil: 'உள்ளடக்க உருவாக்கம்',
    backgroundImage: Content},
  {
    id: 6,
    title: 'AI in Media',
    titleTamil: 'ஊடகங்களில் AI',
    backgroundImage: AI}
];

export const features: Feature[] = [
  { 
    icon: Frame1, 
    title: 'Short-term Certificates', 
    titleTamil: 'குறுகிய கால சான்றிதழ்கள்' 
  },
  { 
    icon: Frame2, 
    title: 'Diploma & Degree Pathways', 
    titleTamil: 'டிப்ளமா மற்றும் பட்டப்படிப்பு பாதைகள்',
    subtitle: '(Coming Soon)',
    subtitleTamil: '(விரைவில் வரும்)'
  },
  { 
    icon: Frame3, 
    title: 'Courses in Tamil & English', 
    titleTamil: 'தமிழ் மற்றும் ஆங்கிலத்தில் படிப்புகள்' 
  },
  { 
    icon: Frame4, 
    title: 'Mobile-Friendly Platform', 
    titleTamil: 'மொபைல் நட்பு தளம்' 
  },
  { 
    icon: Frame5, 
    title: 'Affordable Pricing', 
    titleTamil: 'மலிவான விலை' 
  },
  { 
    icon: Frame6, 
    title: 'Recognized Certifications', 
    titleTamil: 'அங்கீகரிக்கப்பட்ட சான்றிதழ்கள்' 
  }
];

export const processSteps: ProcessStep[] = [
   { 
    step: 1, 
    title: 'Sign Up for Free', 
    titleTamil: 'இலவசமாக பதிவு செய்யுங்கள்',
    icon: 'FiUsers',
    content: ''
  },
  { 
    step: 2, 
    title: 'Choose a course in Tamil or English', 
    titleTamil: 'தமிழ் அல்லது ஆங்கிலத்தில் படிப்பை தேர்வு செய்யுங்கள்',
    icon: 'FiBookOpen',
    content: ''
  },
  { 
    step: 3, 
    title: 'Learn with Real Projects', 
    titleTamil: 'உண்மையான திட்டங்களுடன் கற்றுக்கொள்ளுங்கள்',
    icon: 'FiCamera',
    content: ''
  },
  { 
    step: 4, 
    title: 'Earn Your Certificate', 
    titleTamil: 'உங்கள் சான்றிதழை பெறுங்கள்',
    icon: 'FiAward',
    content: ''
  },
  { 
    step: 5, 
    title: 'Launch Your Media Career / Start Your Own Venture', 
    titleTamil: 'உங்கள் ஊடக தொழிலை தொடங்குங்கள் / சொந்த தொழில் தொடங்குங்கள்',
    icon: 'FiCheckCircle',
    content: ''
  }
];

export interface JoinHandsContent {
  title: string;
  subtitle: string;
  description: string;
  interestAreasTitle: string;
  interestAreas: string[];
  ctaPlaceholder: string;
  professionalImage: string;
}

export const joinHandsContent = {
  en: {
    title: 'Join Hands with Us',
    subtitle: 'A call for proposal',
    description: 'We seek contributions that are pedagogically sound, digitally adaptable, and learner-focused.',
    interestAreasTitle: 'INTEREST AREAS',
    interestAreas: [
      'Foundations of Media Studies',
      'Journalism & News Media',
      'Film and Visual Communication',
      'Advertising, PR & Corporate Communication',
      'Digital Media & Content Creation',
      'Emerging Media & Technology',
      'Media Research & Ethics',
      'Regional & Cultural Media Studies',
      'Practical & Skill-Based Modules',
      'Career & Industry-Oriented Studies'
    ],
    ctaPlaceholder: 'Get started now!',
    professionalImage: ProfessionalProfie
  },
  ta: {
    title: 'எங்களுடன் கை கோர்த்துக்கொள்ளுங்கள்',
    subtitle: 'முன்மொழிவுக்கான அழைப்பு',
    description: 'நாங்கள் கல்வியியல் ரீதியாக சரியான, டிஜிட்டல் ரீதியாக தகவமைக்கக்கூடிய மற்றும் கற்பவர்-மையமான பங்களிப்புகளை நாடுகிறோம்.',
    interestAreasTitle: 'ஆர்வ பகுதிகள்',
    interestAreas: [
      'ஊடக ஆய்வுகளின் அடிப்படைகள்',
      'இதழியல் மற்றும் செய்தி ஊடகம்',
      'திரைப்படம் மற்றும் காட்சி தொடர்பு',
      'விளம்பரம், PR மற்றும் பெருநிறுவன தொடர்பு',
      'டிஜிட்டல் ஊடகம் மற்றும் உள்ளடக்க உருவாக்கம்',
      'வளர்ந்து வரும் ஊடகம் மற்றும் தொழில்நுட்பம்',
      'ஊடக ஆராய்ச்சி மற்றும் நெறிமுறைகள்',
      'பிராந்திய மற்றும் கலாச்சார ஊடக ஆய்வுகள்',
      'நடைமுறை மற்றும் திறன் அடிப்படையிலான தொகுதிகள்',
      'தொழில் மற்றும் தொழில்துறை நோக்கிய ஆய்வுகள்'
    ],
    ctaPlaceholder: 'இப்போதே தொடங்குங்கள்!',
    professionalImage: ProfessionalProfie
  }
};

export const testimonials: Testimonial[] = [
  {
    name: 'Rajalakshmi',
    nameTamil: 'ராஜலட்சுமி',
    location: 'Kumbakonam, TN',
    locationTamil: 'கும்பகோணம், தமிழ்நாடு',
    text: "I never thought I'd edit videos professionally from my village. DigiViscom made it real!",
    textTamil: "என் கிராமத்திலிருந்து வீடியோக்களை தொழில்முறையாக திருத்துவேன் என்று நான் ஒருபோதும் நினைக்கவில்லை. DigiViscom அதை உண்மையாக்கியது!",
    profileImage: Profile1
  },
  {
    name: 'Arun',
    nameTamil: 'அருண்',
    location: 'Madurai, TN',
    locationTamil: 'மதுரை, தமிழ்நாடு',
    text: 'Practical learning and Tamil support helped me start my own design service.',
    textTamil: 'நடைமுறை கற்றல் மற்றும் தமிழ் ஆதரவு எனக்கு சொந்த வடிவமைப்பு சேவையை தொடங்க உதவியது.',
    profileImage: Profile2
  }
];

export const contactInfo: ContactInfo = {
  phone: '+91 80560 76511',
  whatsapp: '+91 94449 26755',
  address: 'Plot No: 123A, Door No: 5C, CLC Works Road, Chrompet, Chennai - 600 044',
  addressTamil: 'பிளாட் எண்: 123A, கதவு எண்: 5C, CLC வொர்க்ஸ் ரோடு, குரோம்பேட், சென்னை - 600 044'
};

export const content = {
  en: {
    heroTitle: 'Empowering Media',
    heroSubtitle: 'Talent Everywhere',
    heroDescription: 'Learn Visual Communication, Digital Media, and AI Tools - Wherever You Are.',
    exploreButton: 'Explore Courses',
    getStartedButton: 'Get Started',
    whyTitle: 'Why DigiViscom?',
    whySubtitle: 'Media Skills for the Future, Delivered Today',
    whyDescription: 'DigiViscom is a future-ready edtech platform offering certified courses in Visual Communication and Media Studies. We focus on media and communication skills essential for expression, employment, and entrepreneurship especially for learners from rural and underserved communities.',
    skillsTitle: 'Skill Areas You Can Learn',
    howItWorksTitle: 'How It Works',
    howItWorksSubtitle: 'Step-by-Step Timeline',
    howItWorksDescription: 'Whether you\'re learning in English or Tamil, our approach remains the same: Skill-first. Practice-driven. Tech-powered.',
    testimonialsTitle: 'Learner Success Stories',
    testimonialsSubtitle: 'Our learners come from diverse backgrounds, industries, and corners',
    contactTitle: 'Get in Touch',
    contactDescription: 'Have a inquiry, a partnership proposal, or a general question? We\'re always here to help.',
    footerTagline: 'Your Media Career Begins Here.',
    joinToday: 'Join Us Today',
    connectButton: 'Connect with Us',
    copyright: 'Copyright © DigiViscom 2025. All Rights Reserved. | Powered by 32Mins Digital Consultancy Services'
  },
  ta: {
    heroTitle: 'ஊடக திறனை',
    heroSubtitle: 'எல்லா இடங்களிலும் வலுப்படுத்துதல்',
    heroDescription: 'காட்சி தொடர்பு, டிஜிட்டல் ஊடகம் மற்றும் AI கருவிகளை கற்றுக்கொள்ளுங்கள் - நீங்கள் எங்கிருந்தாலும்.',
    exploreButton: 'படிப்புகளை ஆராயுங்கள்',
    getStartedButton: 'தொடங்குங்கள்',
    whyTitle: 'ஏன் DigiViscom?',
    whySubtitle: 'எதிர்காலத்திற்கான ஊடக திறன்கள், இன்றே வழங்கப்படுகின்றன',
    whyDescription: 'DigiViscom காட்சி தொடர்பு மற்றும் ஊடக ஆய்வுகளில் சான்றளிக்கப்பட்ட படிப்புகளை வழங்கும் எதிர்கால-தயார் கல்வி தொழில்நுட்ப தளமாகும். நாங்கள் குறிப்பாக கிராமப்புற மற்றும் சேவை குறைவான சமூகங்களைச் சேர்ந்த கற்பவர்களுக்கு வெளிப்பாடு, வேலைவாய்ப்பு மற்றும் தொழில்முனைவுக்கு அத்தியாவசியமான ஊடக மற்றும் தொடர்பு திறன்களில் கவனம் செலுத்துகிறோம்.',
    skillsTitle: 'நீங்கள் கற்றுக்கொள்ளக்கூடிய திறன் பகுதிகள்',
    howItWorksTitle: 'எப்படி வேலை செய்கிறது',
    howItWorksSubtitle: 'படிப்படியான காலவரிசை',
    howItWorksDescription: 'நீங்கள் ஆங்கிலத்தில் அல்லது தமிழில் கற்றுக்கொண்டாலும், எங்கள் அணுகுமுறை அதே: திறன்-முதல். பயிற்சி-உந்துதல். தொழில்நுட்ப-இயக்கம்.',
    testimonialsTitle: 'கற்பவர் வெற்றிக் கதைகள்',
    testimonialsSubtitle: 'எங்கள் கற்பவர்கள் பல்வேறு பின்னணிகள், தொழில்கள் மற்றும் மூலைகளிலிருந்து வருகிறார்கள்',
    contactTitle: 'தொடர்பில் இருங்கள்',
    contactDescription: 'ஒரு விசாரணை, கூட்டாண்மை முன்மொழிவு அல்லது பொதுவான கேள்வி உங்களிடம் உள்ளதா? நாங்கள் எப்போதும் உதவ இங்கே இருக்கிறோம்.',
    footerTagline: 'உங்கள் ஊடக தொழில் இங்கே தொடங்குகிறது.',
    joinToday: 'இன்றே எங்களுடன் சேருங்கள்',
    connectButton: 'எங்களுடன் இணையுங்கள்',
    copyright: 'பதிப்புரிமை © DigiViscom 2025. அனைத்து உரிமைகளும் பாதுகாக்கப்பட்டவை. | 32Mins டிஜிட்டல் கன்சல்டன்சி சர்வீசஸ் மூலம் இயக்கப்படுகிறது.'
  }
};