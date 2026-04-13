import React from 'react'
import { cn } from '@/lib/utils'

interface SectionTitleProps {
  title: string
  subtitle?: string
  align?: 'left' | 'center' | 'right'
  className?: string
}

const SectionTitle: React.FC<SectionTitleProps> = ({
  title,
  subtitle,
  align = 'center',
  className,
}) => {
  const alignStyles = {
    left: 'text-left',
    center: 'text-center',
    right: 'text-right',
  }

  return (
    <div className={cn('mb-12 md:mb-16', alignStyles[align], className)}>
      <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-2 md:mb-4 font-geom">
        {title}
      </h2>
      {subtitle && (
        <p className="text-base md:text-lg text-gray-600">{subtitle}</p>
      )}
    </div>
  )
}

export default SectionTitle
