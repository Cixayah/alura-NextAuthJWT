export async function httpClient(fetchUrl, fetchOptions) {
    return fetch(fetchUrl,{
        ...fetchOptions,
        headers: {
            'Content-Type': 'application/json'
        },
        body: fetchOptions.body ? JSON.stringify(body) : null,
    })
        .then(async(respostaDoServidor) => {
            return {
                ok: respostaDoServidor.ok,
                body: respostaDoServidor.json(),
            }
        });
}