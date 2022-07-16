import './App.css';
import Clock from './components/Clock';
import ClockF from './components/ClockF';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Clock></Clock>

        <ClockF></ClockF>
      </header>
    </div>
  );
}

export default App;
