'use client'

import { useEffect, useState } from "react";

function Login() {
  const aoSubmeter = (e) => {
    e.preventDefault();
    //TODO enviar para o servidor
    console.log("submetido");
    console.log({email,senha})
  };

  const [email, setEmail] = useState('')
  const [senha, setSenha] = useState('')

  return (
    <form onSubmit={aoSubmeter}>
      <div>
        <label htmlFor="email">E-mail</label>
        <input
          type="text"
          name="email"
          value={email}
          onChange={(e)=>setEmail(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="senha">Senha</label>
        <input
          type="password"
          name="senha"
          value={senha}
          onChange={(e)=>setSenha(e.target.value)}
        />
      </div>
      <button type="submit">Entrar</button>
    </form>
  );
}

export default Login;
