import { useState } from "react"
import PropTypes from "prop-types"

export function AddCategory({ setCategorias } ) {

    const [inputValue, setInputValue] = useState('');

    const handleInputChange = (e) => {
        setInputValue(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
    }

    const handleAdd = () => {
        if (inputValue.trim().length > 0){
            setCategorias(categorias => [inputValue, ...categorias]);
            setInputValue('')
        }
    }

    return (
        <form onSubmit={ handleSubmit } className="add-category">
            <input 
                type="text"
                placeholder="Ingrese una categoria"
                value={inputValue}
                onChange={ handleInputChange } 
            />
            <button onClick={ handleAdd }>Buscar</button>
        </form>
    )
}

AddCategory.propTypes = {
    setCategorias: PropTypes.func.isRequired,
}