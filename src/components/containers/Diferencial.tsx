'use client'

import React, { useEffect } from 'react'
import SectionTitle from '@/components/common/SectionTitle'
import BenefitCard from '@/components/sections/BenefitCard'
import Button from '@/components/common/Button'
import { BENEFITS, CONTACT_INFO } from '@/lib/constants'
import { trackContainerImpression, trackCTAClick } from '@/lib/analytics'
import { generateWhatsAppLink } from '@/lib/utils'

const Diferencial: React.FC = () => {
  useEffect(() => {
    trackContainerImpression('diferencial')
  }, [])

  const whatsappUrl = generateWhatsAppLink(
    CONTACT_INFO.whatsapp.replace(/\D/g, ''),
    'Olá! Quero conhecer mais sobre o diferencial de vocês em proteção de marca.'
  )

  const handleCTAClick = () => {
    trackCTAClick('whatsapp')
  }

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 md:px-8 lg:px-12">
        <SectionTitle title="Por Que Vinicius Diferencia" />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-16">
          {BENEFITS.map((benefit) => (
            <BenefitCard key={benefit.id} {...benefit} />
          ))}
        </div>

        <div className="text-center">
          <Button
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            variant="secondary"
            size="lg"
            onClick={handleCTAClick}
          >
            Conhecer Mais →
          </Button>
        </div>
      </div>
    </section>
  )
}

export default Diferencial
