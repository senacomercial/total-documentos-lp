import React from 'react'
import Card from '@/components/common/Card'

interface NumberCardProps {
  value: string
  label: string
}

const NumberCard: React.FC<NumberCardProps> = ({ value, label }) => {
  return (
    <Card type="number" className="bg-gray-light">
      <div className="text-4xl md:text-5xl font-bold text-primary mb-2 font-geom">
        {value}
      </div>
      <p className="text-gray-600 font-medium">{label}</p>
    </Card>
  )
}

export default NumberCard
