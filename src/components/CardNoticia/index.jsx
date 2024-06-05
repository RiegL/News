"use client"

export default function CardNoticia({noticia}){
    return(
        <div>
            <h2>{noticia.title}</h2>
            <img src={noticia.img} alt={noticia.titulo} />
            <p>{noticia.texto}</p>
        </div>
    )
}