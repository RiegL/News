import Noticia from "../../../components/Noticia";

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

function HomePage(){
    return(
        <div>
            <h1>Home do caralho</h1>
            {noticias.map(noticia => 
                <Noticia key={noticia.id} noticia={noticia}/>
            )}
        </div>
    )
}

export default HomePage