/**
 * Ejemplo de uso de:
 * - useState()
 * - useRef() :Referenciar elementos dentro de la vista
 * - useEffect() 
 */

import React, { useState, useRef, useEffect } from 'react';

const Ejemplo2 = () => {

  // Vamos a crear dos contadores distintos 
  // cada uno en un estado diferente

  const [contador1, setContador1] = useState(0);
  const [contador2, setContador2] = useState(0);

  // Vamos a crear una referencia con useRef() para asociar una variable
  // con un elemento del DOM del componente (vista HTML)
  const miRef = useRef();

  function incrementar1() {
    setContador1(contador1 + 1)
  }

  function incrementar2() {
    setContador2(contador2 + 1)
  }

  /**
   * Trabajando con useEffect
   */

  /**
   * Caso1: Ejecutar SIEMPRE un snippet de c´ódigo
   * Cada vez que haya un cambio en el estado del componente
   * se ejecuta aquello que esté dentro del useEffect()
   */

  // useEffect(() => {
  //   console.log('Cambio en el estado del componente');
  //   console.log("Mostrando referencia a elemento del DOM");
  //   console.log(miRef);
  // });

  /**
   * ? Caso 2: Ejecutar solo cuando cambie contador1
   * cada vez que haya un cambio en contador1, se ejecuta loque diga el useEffectr()
   * En caso de que cambie contador2 no habrá ejecución
   */

  // useEffect(() => {
  //   console.log('Cambio en el estado del CONTADOR 1');
  //   console.log("Mostrando referencia a elemento del DOM");
  //   console.log(miRef);
  // }, [contador1]);

  /**
 * ? Caso 2: Ejecutar solo cuando cambie contador1 o contador2
 * cada vez que haya un cambio en contador1, se ejecuta loque diga el useEffect()
 * cada vez que haya un cambio en contador2, se ejecuta loque diga el useEffect()
 * En caso de que cambie contador2 no habrá ejecución
 */

  useEffect(() => {
    console.log('Cambio en el estado del CONTADOR 1');
    console.log("Mostrando referencia a elemento del DOM");
    console.log(miRef);
  }, [contador1, contador2]);

  

  return (
    <div>
      <h1>*** Ejemplo de useState(), useRef() y useEffect() ***</h1>
      <h2>Contador 1: {contador1}</h2>
      <h2>Contador 2: {contador2}</h2>
      {/* Elemento referenciado */}
      <h4 ref={miRef}>
        Ejemplo de elemento referenciado
      </h4>
      {/* Botones para cambiar los contadores */}
      <div>
        <button onClick={incrementar1}>Incrementar 1</button>
        <button onClick={incrementar2}>Incrementar 2</button>
      </div>
    </div>
  );
}

export default Ejemplo2;
