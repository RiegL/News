'use client'

import { useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";

function Login() {
  const router = useRouter();
  const [formulario, setFormulario] = useState({
    email: "",
    senha: "",
  });

  const aoSubmeter = async (e) => {
    e.preventDefault();
    // TODO enviar para o servidor
    try {
      const result = await axios.post('http://localhost:8080/login', formulario);
      window.alert(result.data.message);
      router.push('/admin/noticia/criar');
    } catch (error) {
      window.alert(error.response.data.message);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormulario({
      ...formulario,
      [name]: value,
    });
  };

  return (
    <form onSubmit={aoSubmeter}>
      <div>
        <label htmlFor="email">E-mail</label>
        <input
          type="text"
          name="email"
          value={formulario.email}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="senha">Senha</label>
        <input
          type="password"
          name="senha"
          value={formulario.senha}
          onChange={handleChange}
        />
      </div>
      <button type="submit">Entrar</button>
    </form>
  );
}

export default Login;
