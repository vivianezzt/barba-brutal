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
        <div className="h-screen">
            <Image src="/banners/principal.webp" fill alt="Banner principal" />
            <div className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-full gap-8 bg-black/80">
            <Logo />
            <div>
                {mode == 'login' ? (
                    <h1 className="text-2xl font-bold">Seja bem vindo 🤘</h1>
                ): (
                    <h1 className="text-2xl font-bold">Cadastre-se 🤝</h1>
                )}
            </div>
            <div className="flex flex-col gap-4 w-90">
                {mode == 'cadastro' && (
                    <input 
                    type="text" 
                    value={name} 
                    onChange={e => setName(e.target.value)} 
                    placeholder="Nome" 
                    className="input" 
                    />
                )}
                <input 
                type="email" 
                value={email} 
                onChange={e => setEmail(e.target.value)} 
                placeholder="E-mail" 
                className="input" 
                />
                <input 
                type="password" 
                value={password} 
                onChange={e => setPassword(e.target.value)} 
                placeholder="Senha" 
                className="input" 
                />
                {mode == 'cadastro' && (
                    <input 
                    type="tel" 
                    value={phone} 
                    onChange={e => setPhone(e.target.value)} 
                    placeholder="Telefone" 
                    className="input" 
                />
                )}
                <div className="flex gap-2">
                    <button onClick={handleSubmit} className="button flex-1 font-bold bg-green-800">
                        {mode == 'login' ? 'Entrar' : 'Cadastrar'}
                    </button>
                    <Link href="/" className="button flex-1 font-bold  justify-center">Cancelar</Link>
                </div>
                <div className="flex mt-6">
                    <button onClick={alterMode} className="button-outline flex-1">
                        {mode == 'login' ? (
                        <div>Ainda não tem conta? <span className="text-yellow-400 font-bold">Cadastre-se</span></div>
                        ): (
                        <div>Já tem conta? <span className="text-yellow-400 font-bold">Entre na plataforma</span></div>
                        )}  
                    </button>                
                </div>
                </div>
            </div>
        </div>
    )  
}