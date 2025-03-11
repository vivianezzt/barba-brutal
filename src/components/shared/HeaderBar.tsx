import Link from "next/link";
import Logo from "./Logo";

export default function HeaderBar(){
    return(
        <div className="flex items-center h-24 bg-black/60 text-white">
            <nav className="flex items-center justify-between container"> 
                <Logo />
                <div>
                    <Link href="/enter">Entrar</Link>
                </div>
            </nav>
        </div>
    )
}