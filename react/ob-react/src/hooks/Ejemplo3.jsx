/**
 * Ejemplo Hooks:
 * - useState()
 * - useContext()
 */

import React, { useState, useContext } from 'react'

/**
 * 
 * @returns Componente 1
 * Dispone de un contexto que va a tener un valor
 * que recibe desde el padre
 */

 const miContexto = React.createContext(null)


const Componente1 = () => {
  const state = useContext(miContexto);
  // Inicializamos un estado vacío que va a rellenarse 
  // con los datos del contexto del padre
  
  return (
    <div>
      <h1>
        El Token es: {state.token}
      </h1>
      {/* Pintar el componente 2 */}
      <Componente2 />
    </div>
  );
}

const Componente2 = () => {
  const state = useContext(miContexto);
  return (
    <div>
      <h2>La sesión es: {state.session}</h2>
    </div>
  );
}


const MiComponenteConContexto = () => {

  const estadoInicial = {
    token: '1234567',
    session: 1
  }

  // Creamos el estado de este componente
  const [sessionData, setSessionData] = useState(estadoInicial);

  function actualizarSesion() {
    setSessionData(
      {
        token: 'JWTJDSWEI',
        session: sessionData.session + 1,
      }
    )
  }

  return (
    <miContexto.Provider value={sessionData}>
      {/* Todo lo que esté aquí dentro puede leer los datos de sessionData */}
      {/* Además, si se actualiza, los componentes de aquí, también lo actualizan */}
      <h1>*Ejemplo de useState() y useContext()*</h1>
      <Componente1></Componente1>
      <button onClick={actualizarSesion}>Actualizar Sesión</button>
    </miContexto.Provider>
  );
}

export default MiComponenteConContexto;






