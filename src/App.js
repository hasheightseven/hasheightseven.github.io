import './App.css';
// import HesHomeHeader from './HesHomeHeader.js';

function App() {
  return (
    <div className="App">
        <div className='AppHeader' onClick=()=>{ window.location.href='/'; }>
            <img src='./logo-dark.svg' alt='logo-nm' />
            <h1 className="HesHomeHeaderHeading">neon monkey</h1>
        </div>
        <div className='popeyethesailor'>
          <h2 className='greeting'>any quote would do but i'm not interested</h2>
        </div>
    </div>
  );
}
export default App;
