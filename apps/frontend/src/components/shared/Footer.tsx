import {
    IconBrandGithub,
    IconBrandInstagram,
    IconBrandLinkedin,
    IconBrandThreads,
    IconBrandWhatsapp,
  } from "@tabler/icons-react";
import Logo from "./Logo";


  export default function Footer() {
    const currentYear = new Date().getFullYear();
  
    return (
      <footer className="bg-black py-10">
        <div className="container mx-auto px-4">
          <div className="flex flex-col gap-7 md:flex-row">
            <div className="flex flex-col md:w-1/4">
              <Logo />
            </div>
            <div className="flex flex-col md:w-1/4">
              <span className="mb-2.5 text-2xl font-bold text-zinc-300">
                Sobre
              </span>
              <span className="cursor-pointer text-sm text-zinc-400 hover:text-zinc-500">
                Nossa História
              </span>
              <span className="cursor-pointer text-sm text-zinc-400 hover:text-zinc-500">
                Política de Privacidade
              </span>
              <span className="cursor-pointer text-sm text-zinc-400 hover:text-zinc-500">
                Termos de Uso
              </span>
            </div>
            <div className="flex flex-col md:w-1/4">
              <span className="mb-2.5 text-2xl font-bold text-zinc-300">
                Contato
              </span>
              <span className="text-sm text-zinc-400">
                <a href={`mailto:${process.env.REACT_APP_EMAIL}`}>
                  {process.env.REACT_APP_EMAIL}
                </a>
              </span>
              <div className="flex items-center gap-2">
                <a
                  href={`https://wa.me/${process.env.REACT_APP_PHONE_NUMBER}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-sm text-zinc-400 hover:text-zinc-500"
                >
                  <IconBrandWhatsapp size={20} className="mr-1 text-green-500" />
                  <span>Whatsapp</span>
                </a>
              </div>
            </div>
            <div className="md:w-1/4">
              <span className="mb-2.5 text-2xl font-bold text-zinc-300">
                Redes Sociais
              </span>
              <div className="flex gap-2">
                <a
                  href={process.env.REACT_APP_GITHUB_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-zinc-400 transition duration-300 hover:text-zinc-500"
                >
                  <IconBrandGithub size={20} />
                </a>
                <a
                  href={process.env.REACT_APP_INSTAGRAM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-zinc-400 transition duration-300 hover:text-zinc-500"
                >
                  <IconBrandInstagram size={20} />
                </a>
                <a
                  href={process.env.REACT_APP_THREADS_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-zinc-400 transition duration-300 hover:text-zinc-500"
                >
                  <IconBrandThreads size={20} />{" "}  
                </a>
                <a
                  href={process.env.REACT_APP_LINKEDIN_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-zinc-400 transition duration-300 hover:text-zinc-500"
                >
                  <IconBrandLinkedin size={20} />
                </a>
              </div>
            </div>
          </div>
          <div className="mt-7 flex flex-col items-center justify-between border-t border-zinc-700 pt-7 text-sm text-zinc-400 md:flex-row">
            <div className="flex gap-1.5">
              <span>Feito com</span>
              <span>🪓</span>
              <span>em {currentYear}</span>
            </div>
            <span>Viviane Aguiar - &copy; Todos os direitos reservados</span>
          </div>
        </div>
      </footer>
    );
  }
  