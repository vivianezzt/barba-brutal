import Image from 'next/image'

export interface SectionBackgroundProps {
  children: React.ReactNode
  image: string
}
export default function SectionBackground(props: SectionBackgroundProps) {
  return (
    <div className="relative">
      <Image
        src={props.image}
        alt="background"
        fill
        className="-z-30 object-cover"
      />
      <div className="sm:bg bg-black/80 from-black/60 via-black/70 to-black/70 sm:bg-transparent sm:bg-gradient-to-r">
        <div className="container py-10">{props.children}</div>
      </div>
    </div>
  )
}
