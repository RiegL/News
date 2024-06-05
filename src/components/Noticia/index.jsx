"use client"

export default function Noticia({noticia}){
    return(
        <div>
            <div>{noticia.title}</div>
            <img src={noticia.img} alt="noticia"/>
            <div>{noticia.texto}</div>
        </div>
    )
}