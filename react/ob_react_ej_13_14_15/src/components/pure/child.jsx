import React, { useRef } from 'react';

const Child = ({ name, send, update }) => {

  const messageRef = useRef('')
  const nameRef = useRef('')

  const button = () => {
    const text = messageRef.current.value;
    alert(`Text in input ${text}`)
  }

  const buttonParams = (text) => {
    alert(`Text: ${text}`)
  }

  const submitName = (e) => {
    e.preventDefault();
    update(nameRef.current.value)
  }

  return (
    <div style={{ background: 'cyan', padding: '30px' }}>
      <p onMouseOver={() => { console.log('On mouse over') }}>Hello, {name}</p>
      <button onClick={() => console.log('Pressed Button 1')}>
        Botón 1
      </button>
      <button onClick={button}>
        Botón 2
      </button>
      <button onClick={() => buttonParams('Hello')}>
        Botón 3
      </button>
      <input type="text"
        placeholder='Send a text to your father'
        onFocus={() => console.log('Input Focused')}
        onChange={(e) => console.log('Input changed: ', e.target.value)}
        onCopy={() => console.log('Copied text from Input')}
        ref={messageRef}
      />
      <button onClick={() => send(messageRef.current.value)}>
        Send message
      </button>

      <div style={{ marginTop: '20px' }}>
        <form onSubmit={submitName}>
          <input ref={nameRef} type="text" placeholder='New name' />
          <button type='submit'>
            Update name
          </button>
        </form>
      </div>

    </div>
  );
}

export default Child;
