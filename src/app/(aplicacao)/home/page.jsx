"use client"
import { useEffect, useState } from "react";
import Noticia from "../../../components/Noticia";
import axios from "axios";
function HomePage(){
const [noticias, setNoticias] = useState([]);


const getNoticias = async () => {
    try {
        const result = await axios.get('http://localhost:3000/noticias');
        setNoticias(result.data)
        console.log(result.data);
    } catch (error) {
        window.alert(error.response.data.message);
    }
}

useEffect(async () => { 
    getNoticias();
},[])

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