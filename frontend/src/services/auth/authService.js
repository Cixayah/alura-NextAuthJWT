import { httpClient } from "../../infra/httpClient/httpClient";

export const authService = {
    async login({ username, password }) {
        // A função de login do authService recebe um objeto com as propriedades 'username' e 'password'.

        return httpClient(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/login`, {
            method: 'POST',
            body: { username, password, }
        })
            .then(async (respostaDoServidor) => {
                // Faz uma solicitação POST para o endpoint de login do backend com as credenciais fornecidas.

                if (!respostaDoServidor.ok) {
                    // Se a resposta não for bem-sucedida, lança um erro indicando que as credenciais são inválidas.
                    throw new Error('Usuário ou senha inválidos');
                }
                const body = respostaDoServidor.body;
                // Extraia o corpo da resposta do servidor.

                console.log(respostaDoServidor);
                // Exibe as informações da resposta do servidor no console. Isso pode ser usado para depuração.

                // Neste ponto, você pode retornar 'body' ou realizar outras ações com os dados de autenticação.
            });
    }
}
