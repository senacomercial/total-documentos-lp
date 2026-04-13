'use client'

import React, { useEffect } from 'react'
import SectionTitle from '@/components/common/SectionTitle'
import Icon from '@/components/common/Icon'
import { SOLUTION_STEPS } from '@/lib/constants'
import { trackContainerImpression } from '@/lib/analytics'

const Solucao: React.FC = () => {
  useEffect(() => {
    trackContainerImpression('solucao')
  }, [])

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 md:px-8 lg:px-12">
        <SectionTitle title="Seu Caminho para Marcas Protegidas" />

        <div className="space-y-6 md:space-y-8">
          {SOLUTION_STEPS.map((step, idx) => (
            <div key={step.number} className="flex gap-6 md:gap-8">
              {/* Step Number Circle */}
              <div className="flex-shrink-0 flex flex-col items-center">
                <div className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-primary text-white flex items-center justify-center font-bold text-lg md:text-2xl font-geom">
                  {step.number}
                </div>
                {idx < SOLUTION_STEPS.length - 1 && (
                  <div className="w-1 h-16 md:h-20 bg-primary-dark mt-4"></div>
                )}
              </div>

              {/* Step Content */}
              <div className="pb-6 md:pb-8">
                <div className="flex items-center gap-3 mb-2">
                  <Icon
                    name={step.icon as any}
                    size={24}
                    className="text-primary"
                  />
                  <h3 className="text-lg md:text-xl font-bold text-gray-900 font-geom">
                    {step.title}
                  </h3>
                </div>
                <p className="text-gray-600 mb-2">{step.description}</p>
                <p className="text-sm text-primary font-medium">
                  ⏱️ {step.duration}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Solucao
