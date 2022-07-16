import React, { useState, useEffect } from 'react'
import { Persona } from './Persona';

const ClockF = () => {

  // datos persona
  const persona = new Persona('Xavi', 'Adrian', 80, new Date())

  // manejo del estado
  const [date, setDate] = useState(persona.isDate);
  const [age, setAge] = useState(persona.age);


  useEffect(() => {
    // component didMount
    const timerID = setInterval(() => {
      increaseAge(age)
      nuevaFecha()
    }, 1000);
    return () => {
      // componentWillUnmount
      clearInterval(timerID)
    };
  }, [age]);


  return (
    <div>
      <h2>
        Hora Actual:{date.toLocaleTimeString()}
      </h2>
      <h3>{persona.name} {persona.lastName}</h3>
      <h1>Edad: {age}</h1>
    </div>
  )

  // cambio del estado + hooks
  function nuevaFecha() {
    setDate(new Date())
  }

  function increaseAge(age) {
    setAge(age + 1)
  }

}
export default ClockF;


