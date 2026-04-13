'use client'

import React, { useEffect } from 'react'
import SectionTitle from '@/components/common/SectionTitle'
import NumberCard from '@/components/sections/NumberCard'
import TestimonialCard from '@/components/sections/TestimonialCard'
import { NUMBERS, TESTIMONIALS } from '@/lib/constants'
import { trackContainerImpression } from '@/lib/analytics'

const SocialProof: React.FC = () => {
  useEffect(() => {
    trackContainerImpression('social_proof')
  }, [])

  return (
    <section className="py-16 md:py-24 bg-gray-light">
      <div className="container mx-auto px-4 md:px-8 lg:px-12">
        <SectionTitle title="Protegendo Marcas em Todo Brasil" />

        {/* Numbers Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-16 md:mb-24">
          {NUMBERS.map((number) => (
            <NumberCard key={number.label} {...number} />
          ))}
        </div>

        {/* Logo Section Placeholder */}
        <div className="mb-16 md:mb-24">
          <h3 className="text-center font-bold text-gray-900 mb-8 font-geom">
            Clientes e Parceiros
          </h3>
          <div className="h-24 rounded-lg bg-white border-2 border-gray-300 flex items-center justify-center text-gray-500">
            [Logo section - 10-20 brand logos here]
          </div>
        </div>

        {/* Testimonials */}
        <div>
          <h3 className="text-center font-bold text-gray-900 mb-12 font-geom text-2xl">
            O Que Dizem Nossos Clientes
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {TESTIMONIALS.map((testimonial, idx) => (
              <TestimonialCard key={idx} {...testimonial} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default SocialProof
