import React from 'react'
import { cn } from '@/lib/utils'

interface CardProps {
  type: 'benefit' | 'persona' | 'testimonial' | 'number'
  children: React.ReactNode
  className?: string
}

const Card: React.FC<CardProps> = ({ type, children, className }) => {
  const baseStyles =
    'rounded-lg bg-white shadow-md hover:shadow-lg transition-shadow duration-300'

  const typeStyles: Record<string, string> = {
    benefit: 'p-6 border-l-4 border-primary',
    persona: 'p-6 text-center',
    testimonial: 'p-6 italic text-gray-700',
    number: 'p-8 text-center',
  }

  return (
    <div className={cn(baseStyles, typeStyles[type], className)}>
      {children}
    </div>
  )
}

export default Card
