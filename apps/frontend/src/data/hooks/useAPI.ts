/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
export default function useAPI() {
    // Funções que vão acessar a API
    const urlBase = process.env.NEXT_PUBLIC_API_URL

    // Hook personalizado que retorna as funções de acesso a API
    async function httpGet(path: string) {
        // Monta a URL completa
        const url = path.startsWith('/') ? path : `/${path}`
        const urlComplet = `${urlBase}${url}`
        
        // Faz a requisição HTTP
        const response = await fetch(urlComplet)
        return extractData(response)
    }
    async function httpPost(path: string, body: any) {
        const url = path.startsWith('/') ? path : `/${path}`
        const urlComplet = `${urlBase}${url}`
        const response = await fetch(urlComplet, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(body),
        })
        return extractData(response)
    }
    // Função para extrair os dados da resposta
    async function extractData(response: Response) {
        const content = ""
       try {
           const content = await response.text()
           return JSON.parse(content)
       } catch (e) {
           return content 
       }
    }
    return { httpGet, httpPost }
}