import Logo from "@/shared/Logo"
import Image from "next/image"

/* eslint-disable react/react-in-jsx-scope */
export default function FormAuth() {
    return (
        <div className="flex justify-center items-center h-screen">
            <Image src="/banners/principal.webp" alt="Banner" fill />
            <div className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-full bg-black/80 gap-10">
            <Logo />
            <div className="flex flex-col gap-3 w-96">
                <input type="text" placeholder="Nome" className="input"/>
                <input type="text" placeholder="E-mail" className="input"/>
                <input type="text" placeholder="Senha" className="input"/>
                <input type="tel" placeholder="Telefone" className="input"/>
                <div className="flex gap-3">
                    <button className="button flex-1 bg-green-500 font-bold">Cadastrar</button>
                    <button className="button flex-1 font-bold">Cancelar</button>
                </div>
            </div>
                <span>Formulário de autenticação</span>
            </div>
            
        </div>
    )
}