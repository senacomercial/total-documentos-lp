'use client'

import React, { useEffect } from 'react'
import Button from '@/components/common/Button'
import { HERO, CONTACT_INFO } from '@/lib/constants'
import { trackContainerImpression, trackCTAClick } from '@/lib/analytics'
import { generateWhatsAppLink } from '@/lib/utils'

const Hero: React.FC = () => {
  useEffect(() => {
    trackContainerImpression('hero')
  }, [])

  const whatsappUrl = 'https://api.whatsapp.com/send/?phone=5519971206971&text&type=phone_number&app_absent=0'

  const handleCTAClick = () => {
    trackCTAClick('whatsapp')
  }

  return (
    <section className="min-h-screen bg-white flex items-center">
      <div className="container mx-auto px-4 md:px-8 lg:px-12 py-12 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Text Content */}
          <div>
            <h1 className="text-4xl md:text-5xl lg:text-5xl font-bold text-gray-900 mb-6 font-geom leading-tight">
              {HERO.title}
            </h1>

            <p className="text-lg md:text-xl text-gray-700 mb-8 leading-relaxed">
              {HERO.subtitle}
            </p>

            <div className="mb-12">
              <Button
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                variant="primary"
                size="lg"
                onClick={handleCTAClick}
              >
                {HERO.cta} →
              </Button>
            </div>

            {/* Trust Statements */}
            <div className="space-y-3">
              {HERO.trustStatements.map((statement, idx) => (
                <div key={idx} className="flex items-center gap-3">
                  <div className="w-1 h-1 bg-primary rounded-full"></div>
                  <p className="text-gray-600 font-medium">{statement}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Hero Image Placeholder */}
          <div className="flex items-center justify-center">
            <div className="w-full aspect-square rounded-xl bg-gradient-to-br from-primary-dark to-primary flex items-center justify-center text-white text-center p-8">
              <div>
                <p className="text-sm md:text-base opacity-80 mb-4">
                  [Hero Image - Vinicius Tronconi ou custom illustration]
                </p>
                <p className="text-2xl md:text-3xl font-bold font-geom">
                  600x500px
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
