"use client";
import Card from "../CardNoticia";

export default function GridNoticias({ noticias }) {
  return (
    <div>
      {noticias.map((noticia) => (
        <Card key={noticia.id} noticia={noticia} />
      ))}
    </div>
  );
}
