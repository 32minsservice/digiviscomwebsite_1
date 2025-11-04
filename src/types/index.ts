// types/index.ts
export interface Skill {
  id: number;
  title: string;
  titleTamil: string;
  backgroundImage: string;
}

export interface Feature {
  icon: string;
  title: string;
  titleTamil: string;
  subtitle?: string;
  subtitleTamil?: string;
}

export interface ProcessStep {
  step: number;
  title: string;
  titleTamil: string;
  icon: string;
  description?: string;
  descriptionTamil?: string;
  content: string;
}

export interface Testimonial {
  name: string;
  nameTamil: string;
  location: string;
  locationTamil: string;
  text: string;
  textTamil: string;
  profileImage: string;
}

export interface JoinHandsContent {
  title: string;
  subtitle: string;
  description: string;
  interestAreasTitle: string;
  interestAreas: string[];
  ctaPlaceholder: string;
  professionalImage: string;
}

export interface FormData {
  firstName: string;
  email: string;
  phone: string;
  subject: string;
  comments: string;
}

export interface NavigationItem {
  href: string;
  label: string;
  labelTamil: string;
}

export interface ContactInfo {
  phone: string;
  whatsapp: string;
  address: string;
  addressTamil: string;
}

export type Language = 'en' | 'ta';