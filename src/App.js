import logo from './assets/images/logo.svg';
import './assets/css/App.css';
// importar mi componente
import MiComponente from './components/MiComponente';

function App() {
  return (
    <div className="App">
    <header className="App-header">
    <img src={logo} className="App-logo" alt="logo" />
    <p>
    Edit <code>src/App.js</code> and save to reload.
    </p>
    
    <section className='componetes'>
    <MiComponente />  
    </section>
    </header>


    </div>
    );
  }

  export default App;

