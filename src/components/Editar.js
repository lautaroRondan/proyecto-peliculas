import React from 'react'

const Editar = ({peli, conseguirPeliculas, setEditar, setListadoState}) => {

    const tituloComponente = "Editar pelicula"
    const guardarEdicion = (e, id) =>{
        e.preventDefault();

        let target = e.target;

        const pelisAlmacenadas = conseguirPeliculas();
        const indice = pelisAlmacenadas.findIndex(peli=> peli.id === id);

        let peliActualizada = {
            id,
            titulo: target.titulo.value,
            descripcion: target.descripcion.value
        }
        
        pelisAlmacenadas[indice] = peliActualizada;
        localStorage.setItem('pelis', JSON.stringify(pelisAlmacenadas));
        setListadoState(pelisAlmacenadas);
        setEditar(0)
    }

    return (
    <div className='editForm'>
        <hr/>
        <h3 className='title'>{tituloComponente}</h3>
        <form onSubmit={e => guardarEdicion(e, peli.id)}>
            <input  type="text" 
                    name="titulo" 
                    className="tituloEditado" 
                    defaultValue={peli.titulo}
                    />
            <textarea name="descripcion" 
                      defaultValue={peli.descripcion} 
                      className='descripcionEditada'/>

            <input type="submit" className="editar" value="actualizar"/>
        </form>
    </div>
  )
}

export default Editar
