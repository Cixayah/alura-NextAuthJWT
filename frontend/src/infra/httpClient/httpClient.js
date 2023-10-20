export async function httpClient(fetchUrl, fetchOptions) {
    return fetch(fetchUrl,{
        ...fetchOptions,
        body: fetchOptions.body ? JSON.stringify(body) : null,
    })
        .then(async(respostaDoServidor) => {
            return {
                ok: respostaDoServidor.ok,
                body: respostaDoServidor.json(),
            }
        });
}