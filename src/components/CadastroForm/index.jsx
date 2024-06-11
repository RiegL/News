'use client'

import { useState } from "react"
import axios from "axios"
function CadastroForm() {

const aoSubmeter = (e)=>{
    e.preventDefault()
    //TODO enviar para o servidor
    
    console.log('submetido')
    console.log(nome,email,senha)
}

const [nome,setNome] = useState('')
const [email, setEmail] = useState('')
const [senha, setSenha] = useState('')


  return (
    <form onSubmit={aoSubmeter}>
      <div>
        <label htmlFor="nome">Nome:</label>
        <input 
         type="text"
         name="nome" 
         value={nome} 
         onChange={(e) => setNome(e.target.value)} />
      </div>
      <div>
        <label htmlFor="email">E-mail</label>
        <input
         type="text"
         name="email"
         value={email}
         onChange={(e) => setEmail(e.target.value)}
         />
      </div>
      <div>
        <label htmlFor="senha">Senha</label>
        <input
         type="password" 
         name="senha"
         value={senha}
         onChange={(e)=> setSenha(e.target.value)}
         />
      </div>
      <button type="submit">Enviar</button>
    </form>
  );
}

export default CadastroForm