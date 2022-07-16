import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

// Modelos
import { Task } from '../../models/task.class';
import { LEVELS } from '../../models/levels.enum';

// Styles
import '../../styles/task.scss'

const TaskComponent = ({ task, complete, remove }) => {

  useEffect(() => {
    console.log('Created task');
    return () => {
      console.log(`Task: ${task.name} is going to unmount `);
    };
  }, [task]);

  /**
   * Function that returns a Badge
   * depending on the level of the task
   */
  function taskLevelBadge() {
    switch (task.level) {
      case LEVELS.NORMAL:
        return (
          <h6 className='mb-0'>
            <span className='badge bg-primary'>
              {task.level}
            </span>
          </h6>
        )
      case LEVELS.URGENT:
        return (
          <h6 className='mb-0'>
            <span className='badge bg-warning'>
              {task.level}
            </span>
          </h6>
        )
      case LEVELS.BLOCKING:
        return (
          <h6 className='mb-0'>
            <span className='badge bg-danger'>
              {task.level}
            </span>
          </h6>
        )
      default:
        break;
    }
  }

  /**
   * Function that returns icon depending on complete task
   */
  function taskCompletedIcon() {
    if (task.completed) {
      return (<i onClick={() => complete(task)} className='bi-toggle-on Task-action' style={{ color: 'green', fontWeight: 'bold' }}></i>)
    } else {
      return (<i onClick={() => complete(task)} className='bi-toggle-off Task-action' style={{ color: 'grey', fontWeight: 'bold' }}></i>)
    }
  }

  const TaskCompleted = {
    color: 'gray',
    fontWeight: 'bold',
    textDecoration: 'line-through',
  }

  const TaskPending = {
    color: 'tomato',
    fontWeight: 'bold',
  }




  return (
    <tr className='fw-normal' style={task.completed ? TaskCompleted : TaskPending}>
      <th>
        <span className='ms-2'>{task.name}</span>
      </th>
      <td className='align-middle'>
        <span>{task.description}</span>
      </td>
      <td className='align-middle'>
        {/* Execution of function to return badge element  */}
        {taskLevelBadge()}
      </td>
      <td className='align-middle'>
        {taskCompletedIcon()}
        <i onClick={() => remove(task)} className='bi-trash Task-action' style={{ color: 'tomato' }}></i>
      </td>
    </tr>
  );
};


TaskComponent.propTypes = {
  task: PropTypes.instanceOf(Task).isRequired,
  complete: PropTypes.func.isRequired,
  remove: PropTypes.func.isRequired
};


export default TaskComponent;
