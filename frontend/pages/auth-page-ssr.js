function AuthPageSSR(props) {
    // Este é um componente React chamado AuthPageSSR. Ele recebe 'props' como parâmetro.

    return (
        <div>
            <h1>
                Auth Page Server Side Render
            </h1>
            <pre>
                {JSON.stringify(props, null, 2)}
            </pre>
        </div>
    )
    // O componente renderiza um título, "Auth Page Server Side Render", e exibe as 'props' em formato JSON.
}

export default AuthPageSSR;
// Exporta o componente para que ele possa ser importado e usado em outras partes do aplicativo.
