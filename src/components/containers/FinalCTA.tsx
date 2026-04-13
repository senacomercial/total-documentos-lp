'use client'

import React, { useEffect } from 'react'
import Button from '@/components/common/Button'
import { FINAL_CTA, CONTACT_INFO } from '@/lib/constants'
import { trackContainerImpression, trackCTAClick } from '@/lib/analytics'

const FinalCTA: React.FC = () => {
  useEffect(() => {
    trackContainerImpression('final_cta')
  }, [])

  return (
    <section className="bg-gradient-to-b from-primary to-primary-dark py-16 md:py-24 text-white">
      <div className="container mx-auto px-4 md:px-8 lg:px-12">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6 font-geom">
            {FINAL_CTA.title}
          </h2>

          <p className="text-lg md:text-xl mb-12 md:mb-16 opacity-90">
            {FINAL_CTA.subtitle}
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
            <Button
              href={`https://wa.me/${CONTACT_INFO.whatsapp.replace(/\D/g, '')}`}
              target="_blank"
              rel="noopener noreferrer"
              variant="primary"
              size="lg"
              className="bg-white text-primary hover:bg-gray-200"
              onClick={() => trackCTAClick('whatsapp')}
            >
              {FINAL_CTA.primaryCTA}
            </Button>

            <Button
              href={`tel:${CONTACT_INFO.phone}`}
              variant="secondary"
              size="lg"
              className="border-white text-white hover:bg-white hover:text-primary"
              onClick={() => trackCTAClick('phone')}
            >
              {FINAL_CTA.secondaryCTA}
            </Button>

            <Button
              href={`mailto:${CONTACT_INFO.email}`}
              variant="secondary"
              size="lg"
              className="border-white text-white hover:bg-white hover:text-primary"
              onClick={() => trackCTAClick('email')}
            >
              {FINAL_CTA.tertiaryCTA}
            </Button>
          </div>

          {/* Trust Statement */}
          <div className="mt-16 pt-12 border-t border-white border-opacity-30">
            <p className="text-sm opacity-80">
              ✓ 350+ Marcas Protegidas | ✓ 95% Taxa de Aprovação | ✓ Acompanhamento 6-12 meses
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default FinalCTA
