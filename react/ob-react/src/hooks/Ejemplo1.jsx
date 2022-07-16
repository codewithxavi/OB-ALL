/**
 * Ejemplo de uso del Hook useState
 * 
 * Crear un componente de tipo función y acceder a su estado 
 * privado a través de un hook y, además, poder modificarlo
 */

import React, { useState } from 'react';

const Ejemplo1 = () => {

  // Valor inicial para un contador
  const valorInicial = 0;

  // Valor inicial para una persona
  const personaInicial = {
    nombre: "PersonaDemo",
    email: "openbootcamp@bootcamp.com",
  }

  /**
   * Queremos que el valor inicial y persona inicial sean
   * parte del estado del componente para así poder gestionar su cambio
   * y que éste se vea reflejado en la vida del componente
   * 
   * const [nombreVariable, funcionParaCambiar] = useState(valorInicial)
   */

  const [contador, setContador] = useState(valorInicial);
  const [persona, setPersona] = useState(personaInicial);

  /**
   * Función para actualizar el estado privado que contiene el contador
   */
  function incrementarContador(){
    setContador(contador + 1)
  }

  /**
   * Función para actualizar el estado de persona en el componente
   */
  function actualizarPersona(){
    setPersona(
      {
        nombre: 'Pedro',
        email: 'Pedro@openbootcamp.com'
      }
    )
  }


  return (
    <div>
      <h1>*** Ejemplo de useState() ***</h1>
      <h2>CONTADOR: {contador}</h2>
      <h2>DATOS DE LA PERSONA:</h2>
      <h2>NOMBRE: {persona.nombre}</h2>
      <h2>EMAIL: {persona.email}</h2>

      {/* Bloque de botones para actualizar el estado */}
      <div>
        <button onClick={incrementarContador}>Incrementar contador</button>
        <button onClick={actualizarPersona}>Actualizar persona</button>
      </div>
    </div>
  );
}

export default Ejemplo1;

