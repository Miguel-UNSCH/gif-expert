import { useState } from "react";
import { AddCategory } from "./components/AddCategory";
import { GifGrid } from "./components/GifGrid";

export function GifExpertApp() {

    // const categorias  = ['Anime', 'Juegos', 'Famosos'];
    const [categorias, setCategorias] = useState(['Goku']);

    return (
        <div>
            <h2>Gif Expert App</h2>
            <hr />

            <AddCategory 
                setCategorias={ setCategorias }    
            />

            {categorias.map((categoria) => {
                return <GifGrid 
                    key={ categoria }
                    categoria={ categoria }
                />
            })}

        </div>
    )
}
