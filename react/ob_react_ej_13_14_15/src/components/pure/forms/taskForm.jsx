import React, { useRef } from 'react';
import PropTypes from 'prop-types'
import { LEVELS } from '../../../models/levels.enum';
import { Task } from '../../../models/task.class';

const TaskForm = ({ add, length }) => {

  const nameRef = useRef('');
  const descriptionRef = useRef('');
  const levelRef = useRef(LEVELS.NORMAL);

  const addTask = (e) => {
    e.preventDefault();
    const newTask = new Task(
      nameRef.current.value,
      descriptionRef.current.value,
      false,
      levelRef.current.value
    )
    add(newTask)
  }

  const normalStyle = {
    color: 'blue',
    fontWeight: 'bold'
  }

  const urgentStyle = {
    color: 'yellow',
    fontWeight: 'bold'
  }

  const blockingStyle = {
    color: 'tomato',
    fontWeight: 'bold'
  }

  return (
    <form onSubmit={addTask} className='d-flex justify-content-center align-items-center mb-4'>
      <div className='form-outline flex-fill'>
        <input type="text" ref={nameRef} id='InputName' className='form-control form-control-lg' required autoFocus placeholder='Task name' />
        <input type="text" ref={descriptionRef} id='InputDescription' className='form-control form-control-lg' required placeholder='Task description' />
        <label htmlFor="selectLevel" className='sr-only'>Priority</label>
        <select className='form-control form-control-lg' ref={levelRef} defaultValue={LEVELS.NORMAL} name="" id="selectLevel">
          <option value={LEVELS.NORMAL}>NORMAL</option>
          <option value={LEVELS.URGENT}>URGENT</option>
          <option value={LEVELS.BLOCKING}>BLOCKING</option>
        </select>
        <button type='submit' className='btn-success btn-lg ms-3'>
          {length > 0 ? 'Add new task' : 'Create your first task'}
        </button>
      </div>
    </form>
  );
}

TaskForm.protoTypes = {
  add: PropTypes.func.isRequired,
  length: PropTypes.number.isRequired
}

export default TaskForm;

