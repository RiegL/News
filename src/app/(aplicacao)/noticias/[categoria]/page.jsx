import GridNoticias from "../../../../components/GridNoticias"

export default function NoticiasPage({params}){

    const noticias =[
        {
            id:1,
            title:'Noticia 1',
            img: 'https://via.placeholder.com/150',
            texto:'texto do cu'
        },
        {
            id:2,
            titulo:'Noticia 2',
            img: 'https://via.placeholder.com/150',
            texto:'texto do cu 2'
        },
        {
            id:3,
            titulo:'Noticia 3',
            img: 'https://via.placeholder.com/150',
            texto:'texto do cu 3'
        }
    ]
    return(
        <div>
            <h1>{params.categoria}</h1>
            <GridNoticias noticias={noticias}/>
        </div>
    )
}