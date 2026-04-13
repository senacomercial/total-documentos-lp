export type AnalyticsEvent =
  | 'page_view'
  | 'scroll'
  | 'container_impression'
  | 'cta_click'
  | 'form_start'
  | 'form_submission'
  | 'form_error'
  | 'quiz_start'
  | 'quiz_question_answered'
  | 'quiz_complete'
  | 'quiz_email_capture'
  | 'faq_expand'
  | 'conversion'

export interface GA4Event {
  event: AnalyticsEvent
  category?: string
  label?: string
  value?: number
  [key: string]: unknown
}

interface WindowWithGA extends Window {
  gtag?: (command: string, ...args: unknown[]) => void
  fbq?: any
  dataLayer?: any[]
}

export const trackEvent = (
  eventName: AnalyticsEvent,
  eventData?: Record<string, unknown>
) => {
  const w = typeof window !== 'undefined' ? (window as WindowWithGA) : null

  if (!w?.gtag) return

  w.gtag('event', eventName, {
    event_category: eventData?.category || 'engagement',
    event_label: eventData?.label,
    value: eventData?.value,
    ...eventData,
  })
}

export const trackPageView = () => {
  trackEvent('page_view', {
    page_title: typeof document !== 'undefined' ? document.title : '',
    page_path: typeof window !== 'undefined' ? window.location.pathname : '',
  })
}

export const trackContainerImpression = (containerName: string) => {
  trackEvent('container_impression', {
    category: 'content',
    label: containerName,
  })
}

export const trackCTAClick = (
  ctaType: 'whatsapp' | 'phone' | 'email' | 'quiz' | 'faq'
) => {
  trackEvent('cta_click', {
    category: 'engagement',
    label: `cta_${ctaType}`,
  })
  trackPixelEvent('InitiateCheckout')
}

export const trackFormSubmission = (formType: 'contact' | 'quiz') => {
  trackEvent('form_submission', {
    category: 'conversion',
    label: `form_${formType}`,
  })
  trackEvent('conversion', {
    category: 'conversion',
    label: 'lead_generated',
  })
  trackPixelEvent('Lead')
}

export const trackPixelEvent = (eventName: string, data?: Record<string, unknown>) => {
  const pixelId = process.env.NEXT_PUBLIC_META_PIXEL_ID

  if (!pixelId || typeof window === 'undefined') return

  const w = window as WindowWithGA
  if (!w.fbq) return

  w.fbq('track', eventName, data || {})
}

export const initializeGA4 = () => {
  const measurementId = process.env.NEXT_PUBLIC_ANALYTICS_ID

  if (!measurementId || typeof window === 'undefined') return

  const script = document.createElement('script')
  script.async = true
  script.src = `https://www.googletagmanager.com/gtag/js?id=${measurementId}`
  document.head.appendChild(script)

  const w = window as WindowWithGA
  w.dataLayer = w.dataLayer || []

  const gtag = function (...args: unknown[]) {
    const dl = (window as WindowWithGA).dataLayer || []
    dl.push(args)
  }

  w.gtag = gtag
  gtag('js', new Date())
  gtag('config', measurementId)
}

export const initializeMetaPixel = () => {
  const pixelId = process.env.NEXT_PUBLIC_META_PIXEL_ID

  if (!pixelId || typeof window === 'undefined') return

  const w = window as WindowWithGA & { fbq?: Function }
  if (!w.fbq) {
    const fbq = function (...args: unknown[]) {
      const w = window as WindowWithGA & { fbq?: { queue: unknown[] } }
      if (w.fbq) {
        const queue = (w.fbq.queue = w.fbq.queue || [])
        queue.push(args)
      }
    }
    w.fbq = fbq

    fbq('init', pixelId)
    fbq('track', 'PageView')
  }

  const script = document.createElement('script')
  script.async = true
  script.src = 'https://connect.facebook.net/en_US/fbevents.js'
  document.head.appendChild(script)
}
