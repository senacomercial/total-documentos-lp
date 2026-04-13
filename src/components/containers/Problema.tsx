'use client'

import React, { useEffect } from 'react'
import SectionTitle from '@/components/common/SectionTitle'
import PersonaCard from '@/components/sections/PersonaCard'
import { PERSONAS } from '@/lib/constants'
import { trackContainerImpression } from '@/lib/analytics'

const Problema: React.FC = () => {
  useEffect(() => {
    trackContainerImpression('problema')
  }, [])

  return (
    <section className="py-16 md:py-24 bg-gray-light">
      <div className="container mx-auto px-4 md:px-8 lg:px-12">
        <SectionTitle
          title="Começou em Garagem. Agora Cresce. E a Marca?"
          subtitle="A maioria dos e-commerce não protegem marca até precisar..."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {PERSONAS.map((persona) => (
            <PersonaCard key={persona.id} {...persona} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Problema
