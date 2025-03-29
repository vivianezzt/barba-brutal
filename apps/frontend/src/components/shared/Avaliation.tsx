import {
  IconStar,
  IconStarFilled,
  IconStarHalfFilled
} from '@tabler/icons-react'

export interface AvaliationProps {
  note: number
  qtyAvaliations: number
}

export default function Avaliation(props: AvaliationProps) {
  const { note, qtyAvaliations } = props
  const star = Array.from({ length: 5 }, (_, i) => {
    const value = i + 1
    if (note >= value) {
      return <IconStarFilled key={i} size={18} />
    } else if (note > value - 1) {
      return <IconStarHalfFilled key={i} size={18} />
    } else {
      return <IconStar key={i} size={18} />
    }
  })
  return (
    <div className="flex items-center gap-2">
      <div className="flex gap-1 text-yellow-400 ">{star}</div>
      <span className="text-zinc-400 text-xs">({qtyAvaliations})</span>
    </div>
  )
}
