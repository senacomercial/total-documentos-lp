'use client'

import React, { useState, useEffect } from 'react'
import SectionTitle from '@/components/common/SectionTitle'
import AccordionItem from '@/components/sections/AccordionItem'
import { FAQ_ITEMS } from '@/lib/constants'
import { trackContainerImpression } from '@/lib/analytics'

const FAQ: React.FC = () => {
  const [expandedId, setExpandedId] = useState<string | null>(null)

  useEffect(() => {
    trackContainerImpression('faq')
  }, [])

  const handleToggle = (id: string) => {
    setExpandedId(expandedId === id ? null : id)
  }

  return (
    <section className="py-16 md:py-24 bg-gray-light">
      <div className="container mx-auto px-4 md:px-8 lg:px-12">
        <SectionTitle title="Dúvidas Frequentes" />

        <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-md overflow-hidden">
          {FAQ_ITEMS.map((item) => (
            <AccordionItem
              key={item.id}
              {...item}
              isOpen={expandedId === item.id}
              onToggle={handleToggle}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default FAQ
