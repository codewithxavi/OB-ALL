import logo from './logo.svg';
import './App.css';
import Greeting from './components/pure/greeting';
import Greetingf from './components/pure/greetingF';
import TaskListComponent from './components/container/task_list';
import Ejemplo1 from './hooks/Ejemplo1';
import Ejemplo2 from './hooks/Ejemplo2';
import MiComponenteConContexto from './hooks/Ejemplo3'
import Ejemplo4 from './hooks/Ejemplo4';
import GreetingStyled from './components/pure/greetingStyled';
import Father from './components/container/father';
import OptionalRender from './components/pure/optionalRender';
import LoginFormik from './components/pure/forms/loginFormik';
import RegisterFormik from './components/pure/forms/registerFormik';
import TaskFormik from './components/pure/forms/taskFormik';

function App() {
  return (
    <div className="App">
      {/* Componente propio Greeting.jsx */}
      {/* <Greeting name={"Martín"}></Greeting> */}
      {/* Componente de ejemplo funcional */}
      {/* <Greetingf name="Martín"></Greetingf> */}
      {/* Componente de Listado de Tareas */}
      {/* <TaskListComponent></TaskListComponent> */}
      {/* Ejemplos de uso de HOOKS */}
      {/* <Ejemplo1></Ejemplo1> */}
      {/* <Ejemplo2></Ejemplo2> */}
      {/* <MiComponenteConContexto></MiComponenteConContexto> */}
      {/* Todo lo que hay aquí, es tratado como props.children */}
      {/* <Ejemplo4 nombre="Martín">
          <h3>
            Contenido del props.children
          </h3>
        </Ejemplo4> */}
      {/* <GreetingStyled name="Martin"></GreetingStyled> */}


      {/* Gestión de eventos */}
      {/* <Father></Father> */}

      {/* Ejemplos de renderizado condicional */}
      {/* <OptionalRender></OptionalRender> */}

      {/* Ejemplos de uso de Formik y Yup */}
      {/* <LoginFormik></LoginFormik> */}

      {/* <RegisterFormik></RegisterFormik> */}
     

      {/* PROYECTO FINAL */}
      <TaskListComponent></TaskListComponent>
    </div>
  );
}

export default App;
