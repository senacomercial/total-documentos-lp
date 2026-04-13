import React from 'react'
import Card from '@/components/common/Card'
import type { TestimonialData } from '@/types'

interface TestimonialCardProps extends TestimonialData {}

const TestimonialCard: React.FC<TestimonialCardProps> = ({
  name,
  company,
  quote,
}) => {
  return (
    <Card type="testimonial" className="border-t-4 border-primary">
      <p className="text-gray-700 mb-4">"{quote}"</p>
      <div>
        <p className="font-bold text-gray-900">{name}</p>
        <p className="text-sm text-gray-600">{company}</p>
      </div>
    </Card>
  )
}

export default TestimonialCard
