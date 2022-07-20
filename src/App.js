import './App.css';
import { Link } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>Showcasing Rich Text Editors</p>
        <Link className="App-link" to="/draftjs">Draft.js</Link>
        <br />
        <Link className="App-link" to="/jodit">Jodit React</Link>
        
      </header>
    </div>
  );
}

export default App;
