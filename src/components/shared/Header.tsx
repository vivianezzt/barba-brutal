/* eslint-disable react/react-in-jsx-scope */
import Link from "next/link";
import Logo from "./Logo";

export default function Header() {
  return (
    <header className="flex h-24 items-center self-stretch bg-black/60">
      <nav className="container flex items-center justify-between">
        <Logo />
        <div>
          <Link href={"/entrar"}>Entrar</Link>
        </div>
      </nav>
    </header>
  );
}