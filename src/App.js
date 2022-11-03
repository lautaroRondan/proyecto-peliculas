import Listado from "./components/Listado";
import Buscador from "./components/Buscador";
import Crear from "./components/Crear";
import { useState } from "react";

function App() {

    const[listadoState, setListadoState] = useState([]);

  return (
    <div className="layout">
        {/* cabezera */}
        <header className="header">
            <div className="logo">
                <div className="play"></div>
            </div>
            
            <h1>MisPelis</h1>
        </header>

        {/* barra de navegacion */}
        <nav className="nav">
            <ul>
                <li><a href="/#">Inicio</a></li>
                <li><a href="/#">Peliculas</a></li>
                <li><a href="/#">Blog</a></li>
                <li><a href="/#">Contacto</a></li>
            </ul>
        </nav>

        {/* contenido principal */}
        <section className="content">
           <Listado listadoState={listadoState} setListadoState={setListadoState}/>
        </section>
        
        {/* barra lateral */}
        <aside className="lateral">
            <Buscador listadoState={listadoState} setListadoState={setListadoState}/>

            <Crear setListadoState={setListadoState}/>
        </aside>

        {/* pie de pagina */}
        <footer className="footer">
            &copy; Master en JavaScript ES12 - <a href="https://www.instagram.com/lautaro_rondan/">instagram</a>
        </footer>
    </div>
  );
}

export default App;
