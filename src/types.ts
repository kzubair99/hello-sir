export interface Service {
  id: string;
  title: string;
  category: 'taxation' | 'audit' | 'incorporation' | 'registration' | 'advisory';
  shortDescription: string;
  detailedDescription: string;
  features: string[];
  iconName: string;
}

export interface FAQ {
  id: string;
  question: string;
  answer: string;
  category: 'tax' | 'gst' | 'business' | 'general';
}

export interface Testimonial {
  id: string;
  name: string;
  designation: string;
  companyName: string;
  feedback: string;
  rating: number;
  initials: string;
}

export interface Advantage {
  id: string;
  title: string;
  description: string;
  iconName: string;
}
