import logo from './logo.svg';
import './App.css';
import Popeye from './Popeye.js';

function App() {
  return (
    <div className="App">
        <header className="App-header">
          <Popeye />
        </header>
        <img src={logo} className="App-logo" alt="logo" />
    </div>
  );
}

export default App;
