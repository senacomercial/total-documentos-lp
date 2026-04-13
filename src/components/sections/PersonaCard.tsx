import React from 'react'
import Card from '@/components/common/Card'
import Icon from '@/components/common/Icon'
import type { PersonaData } from '@/types'

interface PersonaCardProps extends PersonaData {}

const PersonaCard: React.FC<PersonaCardProps> = ({
  name,
  icon,
  scenario,
  painPoint,
}) => {
  return (
    <Card type="persona" className="text-center">
      <Icon
        name={icon as any}
        size={48}
        className="mx-auto mb-4 text-primary"
      />
      <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-2 font-geom">
        {name}
      </h3>
      <p className="text-sm text-gray-600 mb-3">{scenario}</p>
      <p className="text-sm italic text-gray-500">"{painPoint}"</p>
    </Card>
  )
}

export default PersonaCard
