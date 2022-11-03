import React, { useState } from 'react'
import { guardarStorage } from '../helpers/GuardarEnStorage';

const Crear = ({setListadoState}) => {

    const TituloComponent = "Añadir Peliculas"
    const [peliState, setPeliState] = useState({
        id: '',
        titulo: '',
        descripcion: ''
    });

    const {titulo, descripcion} = peliState;

    const conseguirDatosForm = e=>{
        e.preventDefault();

        let target = e.target;
        let titulo = target.titulo.value;
        let descripcion = target.descripcion.value;

        let peli = {
            id: new Date().getTime(),
            titulo,
            descripcion
        };

        setPeliState(peli);

    // actualizar listado principal
        setListadoState(elementos =>{
            return[...elementos, peli];
        })

        // guardar en el localStorage 
        guardarStorage("pelis", peli)

    }

    
  return (
    <div className="add">

        <h3 className="title">{TituloComponent}</h3>
            {titulo}
            <form onSubmit={conseguirDatosForm}>
                <input  type="text" 
                        id='titulo'
                        name='titulo'
                        placeholder="Titulo"/>

                <textarea   id='descripcion'
                            name='descripcion'
                            placeholder="Descripcion"></textarea>

                <input  type="submit" 
                        id='guardar'
                        value="Guardar"/>

            </form>

    </div>
  )
}

export default Crear
