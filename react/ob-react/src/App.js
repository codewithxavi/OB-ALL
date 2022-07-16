import logo from './logo.svg';
import './App.css';
// import Greeting from './components/pure/greeting';
// import GreetingF from './components/pure/greetingF';
import TaskListComponent from './components/container/TaskList';
import Ejemplo1 from './hooks/Ejemplo1';
import Ejemplo2 from './hooks/Ejemplo2';
import MiComponenteConContexto from './hooks/Ejemplo3';
import Ejemplo4 from './hooks/Ejemplo4';
import ComponenteEstado from './components/ComponenteEstado';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <GreetingF name="Xavi" /> */}
        {/* Componente de Listado de Tareas */}
        {/* <TaskListComponent /> */}
        {/* Ejemplos de uso de HOOKS */}
        {/* <Ejemplo1 /> */}
        {/* <Ejemplo2 /> */}
        {/* <Ejemplo2 /> */}
        {/* <MiComponenteConContexto /> */}
        {/* <Ejemplo4 nombre="Martin"> */}
        {/* Todo lo que hay aquí es tratado como props.children */}
        {/* <h3>Contenido del props.children</h3> */}
        {/* </Ejemplo4> */}
        {/* Ejemplo hook */}
        <ComponenteEstado></ComponenteEstado>
      </header>
    </div>
  );
}

export default App;
