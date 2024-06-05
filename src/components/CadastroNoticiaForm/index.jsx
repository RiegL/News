"use client";

import { useState } from "react";

export default function CadastroNoticiaForm() {
  const [title, setTitle] = useState("");
  const [img, setImg] = useState("");
  const [text, setText] = useState("");

  const aoSubmeter = (e) => {
    e.preventDefault();
    //TODO enviar para o servidor
    console.log("submeteu", title, img, text);
    // console.log(title, img, text);
  };

  const aoAlterarValores = (e) => {
    const { name, value } = e.target;
    if (name === "titulo") {
      setTitle(value);
    }
    if (name === "img") {
      setImg(value);
    }
    if (name === "texto") {
      setText(value);
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
      <button type="submit">Criar Noticia</button>
    </form>
  );
}
