import style from './GifGrid.module.css'
import { GifGridItem } from "./GifGridItem";

import { useFetchGifs } from '../hooks/useFetchGifs';

export function GifGrid( { categoria } ) {

    const { data:gifs, loading } = useFetchGifs( categoria );

    return (
        
        <div>
            <h3>{ categoria }</h3>
            { loading && <p>Cargando ...</p> }
            <div className={ style.gifs_container }>
                {gifs.map(gif => {
                    return (
                        <GifGridItem 
                            key={ gif.id } 
                            { ...gif }
                        />
                    )
                })}
            </div>
            
        </div>
    )
}
