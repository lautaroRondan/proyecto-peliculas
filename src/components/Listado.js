import React, { useEffect, useState } from 'react'
import Editar from './Editar';

const Listado = ({listadoState, setListadoState}) => {

    // const[listadoState, setListadoState] = useState([]);
    const [editar, setEditar] = useState(0)

    useEffect(()=>{
        conseguirPeliculas();
    }, [ ]);

    const conseguirPeliculas = () =>{
        let peliculas = JSON.parse(localStorage.getItem("pelis"));

        setListadoState(peliculas);

        return peliculas;
    };

    const borrarPeli = (id)=>{
        let pelisAlmacenadas = conseguirPeliculas();

        let nuevoListadoPeliculas = pelisAlmacenadas.filter(peli => peli.id !== parseInt(id));

        setListadoState(nuevoListadoPeliculas);
        localStorage.setItem('pelis', JSON.stringify(nuevoListadoPeliculas));
        
    }

  return (
    <>
        {listadoState != null ? listadoState.map(peli =>{
                return(
                    <article key={peli.id} className="peli-item">
                        <h3 className="title"> {peli.titulo}</h3>
                        <p className="description">{peli.descripcion}</p>
        
                        <button className="edit" onClick={()=> setEditar(peli.id)}> Editar</button>
                        <button className="delete" onClick={()=> borrarPeli(peli.id)}> Borrar</button>

                        {/* aparece formulario de editar */}
                        {editar === peli.id &&(
                            <Editar peli={peli}
                                    conseguirPeliculas={conseguirPeliculas}
                                    setEditar={setEditar}
                                    setListadoState={setListadoState}/>
                        )}
                    </article>
                    )}):<h1>No hay peliculas cargadas</h1>
    }
       

      
    </>
  )
}

export default Listado
