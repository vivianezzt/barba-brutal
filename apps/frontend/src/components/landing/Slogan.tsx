import Image from 'next/image'
import Header from '../shared/HeaderBar'
import Link from 'next/link'

export default function Slogan() {
  return (
    <div className="relative h-[450px] sm:h-[700px]">
      <Image
        src={'/banners/principal.webp'}
        alt="Barbearia"
        fill
        className="object-cover"
      />
      <div className="absolute left-0 top-0 flex h-full w-full flex-col items-center bg-black/65">
        <Header />
        <div className="flex flex-1 flex-col items-center justify-center gap-5">
          <h1 className="flex flex-col items-center">
            <span className="text-2xl font-thin tracking-wider sm:text-3xl md:text-4xl lg:text-5xl">
              Transformações
            </span>
            <span className="bebas-font text-gradient text-5xl font-black sm:text-6xl md:text-7xl lg:text-8xl">
              Lendárias
            </span>
          </h1>
          <p className="text-base text-zinc-400 sm:text-lg">
            🤘 Seu estilo é nosso Rock🎸! 🤘
          </p>
          <Link
            href={'/agendamento'}
            className="rounded-lg bg-gradient-to-r from-yellow-500 to-yellow-600 px-4 py-2 text-base font-semibold text-white hover:from-yellow-600 hover:to-yellow-500 md:text-lg"
          >
            Agendar agora
          </Link>
        </div>
      </div>
    </div>
  )
}
