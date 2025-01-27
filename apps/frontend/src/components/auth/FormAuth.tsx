'use client'
import Logo from "@/shared/Logo"
import Image from "next/image"
import Link from "next/link"
import { useState } from "react"
import useAPI from "../../data/hooks/useAPI"

/* eslint-disable react/react-in-jsx-scope */
export default function FormAuth() {
    // Criando um estado para controlar o modo de exibição do formulário
    const [mode, setMode] = useState<'login' | 'cadastro'>('login')

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [phone, setPhone] = useState('')
    // Importando a função de requisição HTTP
    const { httpPost } = useAPI()
    
    function alterMode(){
        setMode(mode == 'login' ? 'cadastro' : 'login') 
    }
    async function handleSubmit(){
        if(mode == 'login'){
            const token = await httpPost('auth/login', { email, password })
            console.log(token)
            cleanForm()
        }else{
            await httpPost('auth/register', { name, email, password, phone })
            cleanForm()
        }
    }
    function cleanForm(){
        // Função para limpar os campos do formulário
        setName('')
        setEmail('')
        setPassword('')
        setPhone('')
    }
    return (
        <div className="flex justify-center items-center h-screen">
            <Image src="/banners/principal.webp" alt="Banner" fill />
            <div className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-full bg-black/80 gap-10">
            <Logo />
            <div>
                {mode === 'login' ? (
                    // Condicional para exibir o título de login
                    <h1 className="text-2xl font-light">Seja bem vindo!</h1>
                ): 
                (
                    // Condicional para exibir o título de cadastro
                    <h1 className="text-2xl font-light">Cadastro</h1>
                )}
            </div>
            <div className="flex flex-col gap-3 w-96">
                {mode === 'cadastro' && (
                    // Condicional para exibir o campo de nome e telefone
                   <>
                     <input 
                     type="text" 
                     value={name} 
                     onChange={e => setName(e.target.value)} 
                     placeholder="Nome" 
                     className="input"/>
                   </>
                )}
               {mode === 'cadastro' && (
                // Condicional para exibir o campo de telefone
                 <input 
                 type="tel" 
                 value={phone} 
                 onChange={e => setPhone(e.target.value)}
                 placeholder="Telefone" 
                 className="input"/>
               )}
                <input 
                type="text" 
                value={email} 
                onChange={e => setEmail(e.target.value)}
                placeholder="E-mail" 
                className="input"/>
                <input 
                type="text" 
                value={password} 
                onChange={e => setPassword(e.target.value)}
                placeholder="Senha" 
                className="input"/>
               {/*Botão para submeter o formulário */}
                <div className="flex gap-3">
                    <button onClick={handleSubmit} className="button flex-1 flex justify-center bg-green-500 font-bold">
                        {mode == 'login' ? 'Entrar' : 'Cadastrar'}
                        </button>
                    <Link href="/" className="button flex-1 flex justify-center font-bold">Cancelar</Link>
                </div>
                <div className="flex mt-6">
                    <button onClick={alterMode} className="flex-1 button-outline">
                            {mode == 'login' ? (
                                // Condicional para exibir a mensagem de cadastro
                                <div>Ainda não tem conta? <span className="text-purple-400 font-bold">Cadastre-se!</span></div>
                            ) : (
                                // Condicional para exibir a mensagem de login
                                <div>Já tem conta? {' '}<span className="text-purple-400 font-bold">Entre na plataforma!</span></div>
                            )}
                        </button>
                </div>
            </div>
            </div>
        </div>
    )
}