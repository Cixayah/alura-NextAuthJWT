function AuthPageStatic(props) {
    // Este é um componente React chamado AuthPageStatic. Ele recebe 'props' como parâmetro.

    return (
        <div>
            <h1>
                Auth Page Static
            </h1>
            <pre>
                {JSON.stringify(props, null, 2)}
            </pre>
        </div>
    )
    // O componente renderiza um título, "Auth Page Static", e exibe as 'props' em formato JSON.
}

export default AuthPageStatic;
// Exporta o componente para que ele possa ser importado e usado em outras partes do aplicativo.
