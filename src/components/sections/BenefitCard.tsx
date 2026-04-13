import React from 'react'
import Card from '@/components/common/Card'
import Icon from '@/components/common/Icon'
import type { BenefitData } from '@/types'

interface BenefitCardProps extends BenefitData {}

const BenefitCard: React.FC<BenefitCardProps> = ({
  title,
  description,
  icon,
}) => {
  return (
    <Card type="benefit">
      <Icon
        name={icon as any}
        size={32}
        className="mb-3 text-primary"
      />
      <h3 className="text-lg font-bold text-gray-900 mb-2 font-geom">
        {title}
      </h3>
      <p className="text-sm text-gray-600">{description}</p>
    </Card>
  )
}

export default BenefitCard
