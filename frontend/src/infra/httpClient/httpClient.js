// A função httpClient aceita dois parâmetros: fetchUrl (a URL da solicitação) e fetchOptions (opções da solicitação).
export async function httpClient(fetchUrl, fetchOptions) {
    // Faz uma solicitação HTTP usando a função fetch e retorna a promessa resultante.
    return fetch(fetchUrl, {
        ...fetchOptions, // Espalha as opções passadas para a função fetch.
        headers: {
            ...fetchOptions.headers, // Espalha os cabeçalhos passados para as opções.
            'Content-Type': 'application/json', // Define o cabeçalho 'Content-Type' para 'application/json'.
        },
        body: fetchOptions.body ? JSON.stringify(fetchOptions.body) : null, // Converte o corpo da solicitação em JSON, se estiver presente.
    })
    .then(async (respostaDoServidor) => {
        // Após a resposta do servidor, processa os dados.
        return {
            ok: respostaDoServidor.ok, // Indica se a resposta é bem-sucedida (true/false).
            body: await respostaDoServidor.json(), // Converte o corpo da resposta em JSON e retorna como promessa.
        }
    });
}
