'use client'

import React, { useState } from 'react'
import Icon from '@/components/common/Icon'
import { trackEvent } from '@/lib/analytics'

interface AccordionItemProps {
  id: string
  question: string
  answer: string
  isOpen?: boolean
  onToggle?: (id: string) => void
}

const AccordionItem: React.FC<AccordionItemProps> = ({
  id,
  question,
  answer,
  isOpen = false,
  onToggle,
}) => {
  const [localOpen, setLocalOpen] = useState(isOpen)

  const handleToggle = () => {
    setLocalOpen(!localOpen)
    onToggle?.(id)
    trackEvent('faq_expand', { label: question })
  }

  return (
    <div className="border-b border-gray-300">
      <button
        onClick={handleToggle}
        className="w-full py-4 px-4 flex items-center justify-between hover:bg-gray-50 transition-colors"
        aria-expanded={localOpen}
      >
        <h3 className="text-left font-bold text-gray-900 text-base md:text-lg">
          {question}
        </h3>
        <Icon
          name="chevron"
          size={20}
          className={`text-primary transition-transform duration-300 ${
            localOpen ? 'rotate-180' : ''
          }`}
        />
      </button>

      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out ${
          localOpen ? 'max-h-96' : 'max-h-0'
        }`}
      >
        <p className="px-4 pb-4 text-gray-600 text-sm md:text-base leading-relaxed">
          {answer}
        </p>
      </div>
    </div>
  )
}

export default AccordionItem
