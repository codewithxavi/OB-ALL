import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import { Contact } from '../models/Contact';

const ContactForm = ({ add }) => {

  const nameRef = useRef('');
  const surnameRef = useRef('');
  const ageRef = useRef('');
  const emailRef = useRef('');
  const phoneRef = useRef('');
  const estado = true;

  const addContact = (e) => {
    e.preventDefault();
    const newContact = new Contact(
      nameRef.current.value,
      surnameRef.current.value,
      ageRef.current.value,
      emailRef.current.value,
      phoneRef.current.value,
      estado,
    )
    add(newContact)
  }


  return (
    <form onSubmit={addContact} className='d-flex justify-content-center align-items-center mb-4'>
      <div className='form-outline flex-fill'>
        <input type="text" ref={nameRef} id='InputName' className='form-control form-control-lg' required autoFocus placeholder='Contact Name' />
        <input type="text" ref={surnameRef} id='inputSurname' className='form-control form-control-lg' required placeholder='Contact Surname' />
        <input type="text" ref={ageRef} id='inputAge' className='form-control form-control-lg' required placeholder='Contact Age' />
        <input type="text" ref={emailRef} id='inputEmail' className='form-control form-control-lg' required placeholder='Contact Email' />
        <input type="text" ref={phoneRef} id='inputPhone' className='form-control form-control-lg' required placeholder='Contact Phone' />


      </div>
      <button type='submit' className='btn-success btn-lg ms-3'>Add</button>
    </form>
  );

}

ContactForm.protoTypes = {
  add: PropTypes.func.isRequired
}

export default ContactForm;
