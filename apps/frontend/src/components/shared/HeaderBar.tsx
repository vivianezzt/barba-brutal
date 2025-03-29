import Link from 'next/link'
import Logo from './Logo'
import { Button } from '../ui/button'

export default function HeaderBar() {
  return (
    <header className="flex h-24 items-center self-stretch bg-black/60">
      <nav className="container flex items-center justify-between">
        <Logo />
        <div>
          <Button className="bg-gradient-to-r from-yellow-500 to-yellow-600">
            <Link href="/entrar">Entrar</Link>
          </Button>
        </div>
      </nav>
    </header>
  )
}
