import React from 'react';
import { LEVELS } from '../../models/levels.enum';
import { Task } from '../../models/task.class';
import TaskComponent from '../pure/Task';

const TaskListComponent = () => {

  const defaultTask = new Task('Example', 'Default description', false, LEVELS.NORMAL)

  const changeState = (id) => {
    console.log('TODO: Cambiar estado de una tarea');
  }

  return (
    <div>
      <h1>
        Your Tasks:
      </h1>
      {/* TODO: Aplicar un for/map para renderizar una lista de tareas */}
      <TaskComponent task={defaultTask} />
    </div>
  );
};




export default TaskListComponent;
