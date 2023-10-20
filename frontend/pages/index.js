import React from 'react';
import { useRouter } from 'next/router';
export default function HomeScreen() {
  const router = useRouter();
  // Define o estado inicial para as variáveis 'usuario' e 'senha'
  const [values, setValues] = React.useState({
    usuario: 'omariosouto',
    senha: 'safepassword',
  });

  // Função que é chamada quando o valor de um campo é alterado
  function handleChange(event) {
    // Obtém o valor do campo e o nome do campo do evento
    const fieldValue = event.target.value;
    const fieldName = event.target.name;

    // Atualiza o estado com os novos valores do campo
    setValues((currentValues) => {
      return {
        ...currentValues,
        [fieldName]: fieldValue,
      };
    });
  }

  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={(event) => {
        // Impede o envio do formulário quando o botão é pressionado
        event.preventDefault();
        authService.login({
          username: values.usuario,
          password: values.senha,
        })
          .then(() => {
            //  router.push('/auth-page-static');
            router.push('/auth-page-ssr');
          })
          .catch(() => {
            alert('Usuário ou a senha estão inválidos')
          })
      }}>

        <input
          placeholder="Usuário" name="usuario"
          defaultValue={values.usuario} onChange={handleChange}
        />
        <input
          placeholder="Senha" name="senha" type="password"
          defaultValue={values.senha} onChange={handleChange}
        />
        {/*<pre>
          {JSON.stringify(values, null, 2)}
        </pre>*/}
        <div>
          <button>
            Entrar
          </button>
        </div>
      </form>
    </div >
  );
}
