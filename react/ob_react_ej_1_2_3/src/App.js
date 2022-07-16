import './App.css';
import ComponentA from './componentes/ComponentA';


function App() {
  const contactoPrueba = {
    name: 'Fulanito',
    surname: 'de OpenBootcamp',
    email: 'fulanito@open-bootcamp.com',
    connected: false,
  };
  return (
    <div className="App">
      <header className="App-header">
        <ComponentA contacto={contactoPrueba} />
      </header>
    </div>
  );
}

export default App;
