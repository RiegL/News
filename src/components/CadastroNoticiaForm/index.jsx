"use client";

import { useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";

export default function CadastroNoticiaForm() {

  const router = useRouter();

  const [titulo, setTitulo] = useState("");
  const [img, setImg] = useState("");
  const [texto, setTexto] = useState("");
  const [categoria, setCategoria] = useState("");

  const aoSubmeter = async (e) => {
    e.preventDefault();
    //TODO enviar para o servidor
    try {
      const formulario = {
        titulo,
        img,
        texto,
        categoria,
      };
      const noticia = await axios.post("http://localhost:8080/noticias",formulario);
      window.alert("Noticia criada", noticia);
      return router.push('/home');
      
    } catch (error) {
      window.alert("Erro ao criar a noticia", error);
    }

    // console.log(title, img, text);
  };

  const aoAlterarValores = (e) => {
    const { name, value } = e.target;
    if (name === "titulo") {
      setTitulo(value);
    }
    if (name === "img") {
      setImg(value);
    }
    if (name === "texto") {
      setTexto(value);
    }
    if (name === "categoria") {
      setCategoria(value);
    }
  };

  return (
    <form onSubmit={aoSubmeter}>
      <div>
        <label htmlFor="titulo">Titulo</label>
        <input type="text" name="titulo" onChange={aoAlterarValores} />
      </div>
      <div>
        <label htmlFor="img"> Imagem</label>
        <input type="text" name="img" onChange={aoAlterarValores} />
      </div>
      <div>
        <label htmlFor="texto">Texto</label>
        <input type="text" name="texto" onChange={aoAlterarValores} />
      </div>
      <div>
        <label htmlFor="texto">Categoria</label>
        <select name="categoria" onChange={aoAlterarValores}>
          <option value="produto">Produto</option>
          <option value="tecnologia">Tecnologia</option>
          <option value="RH">RH</option>
          <option value="vendas">Vendas</option>
        </select>
      </div>
      <button type="submit">Criar Noticia</button>
    </form>
  );
}
