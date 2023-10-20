import { httpClient } from "../../infra/httpClient/httpClient";

export const authService = {
    async login({ username, password }) {
        return httpClient(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/login`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: { username, password, }
        })
            .then(async (respostaDoServidor) => {
                if (!respostaDoServidor.ok) throw new Error('Usuário ou senha inválidos')
                const body = respostaDoServidor.body;
                console.log(respostaDoServidor);
            })
    }
}