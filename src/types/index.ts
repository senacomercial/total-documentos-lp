export interface ContactFormData {
  name: string
  email: string
  phone: string
  message?: string
  source: 'hero' | 'diferencial' | 'faq' | 'final_cta'
}

export interface QuizAnswer {
  questionId: number
  selectedOption: string
}

export interface QuizResult {
  riskLevel: 'low' | 'medium' | 'high'
  title: string
  description: string
  recommendation: string
}

export interface AnalyticsEvent {
  event_name: string
  event_category?: string
  event_label?: string
  event_value?: number
  user_id?: string
}

export interface PersonaData {
  id: string
  name: string
  icon: string
  scenario: string
  painPoint: string
}

export interface BenefitData {
  id: string
  title: string
  description: string
  icon: string
}

export interface TestimonialData {
  name: string
  company: string
  quote: string
}

export interface ProcessStepData {
  number: number
  title: string
  description: string
  duration: string
  icon: string
}

export interface FAQItem {
  id: string
  question: string
  answer: string
  icon?: string
}
