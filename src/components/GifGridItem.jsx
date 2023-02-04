import style from './GifGridItem.module.css'

export function GifGridItem({ id, title, url }) {
    return (
        <div className={`${style.gif_card} animate__animated animate__bounce` }>
            <div className={ style.gif_img }>
                <img src={ url } alt={ title } />
            </div>
            <div className={ style.gif_title }>
                { title }
            </div>
        </div>
    )
}
