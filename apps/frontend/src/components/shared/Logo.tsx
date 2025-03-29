import Image from 'next/image'
import Link from 'next/link'

export default function Logo() {
  return (
    <Link href="/" className="flex h-14 items-center">
      <Image
        src="/logo.png"
        alt="Logo"
        width={65}
        height={65}
        className="hidden sm:block"
      />
      <Image
        src="/logo.png"
        alt="Logo"
        width={50}
        height={50}
        className="block sm:hidden"
      />
      <div className="flex h-full flex-col justify-center">
        <span className="text-gradient text-xl font-extralight leading-6 tracking-widest sm:text-2xl">
          Barba
        </span>
        <span className="text-gradient bebas-font pl-px text-[20px] font-bold leading-6 sm:text-[28px]">
          Brutal
        </span>
      </div>
    </Link>
  )
}
