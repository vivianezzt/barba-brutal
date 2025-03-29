import professionals from '@/data/constants/professionals'
import ItemProfessional from './ItemProfessional'
import TitleSection from '../shared/TitleSection'
import { Professional } from '@barbabrutal/core'

export default function OurProfessionals() {
  return (
    <div className="flex flex-col gap-y-16">
      <TitleSection
        tag="Time"
        main="Nossos Brutos"
        secondary="Só os mais brabos estão aqui! Temos o orgulho de ter os melhores profissionais do Brasil!"
      />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {professionals.map((professional: Professional) => (
          <ItemProfessional key={professional.id} professional={professional} />
        ))}
      </div>
    </div>
  )
}
