import React, { useState } from 'react'

const Buscador = ({listadoState, setListadoState}) => {

  const[busqueda, setBusqueda] = useState('');
  const[noEncontrado, setNoEncontrado] = useState(false);


  const buscarPeli = (e)=>{
    setBusqueda(e.target.value);

    let pelisEncontradas = listadoState.filter(peli =>{
      return peli.titulo.toLowerCase().includes(busqueda.toLocaleLowerCase());
    });

    if(busqueda.length <= 1 || pelisEncontradas <= 0){
      pelisEncontradas = JSON.parse(localStorage.getItem("pelis"));
      setNoEncontrado(true);
    }else{
      setNoEncontrado(false);
    }

    setListadoState(pelisEncontradas);
  }

  return (
    <div className="search">
        <h3  className="title">Busacador: {busqueda}</h3>
        {noEncontrado === true && (
        <span className='noEncontrado'>No se ha encontrado ninguna pelicula</span>
        )}
        <form >
            <input type="text"
                    id="searchField"
                    name="busqueda"
                    autoComplete="off"
                    // value={busqueda}
                    onChange={buscarPeli}
                    />
            <button>Buscar</button>
        </form>
    </div>
  )
}

export default Buscador
