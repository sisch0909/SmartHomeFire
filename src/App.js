import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Nora 2.0</h1>
        <table className="App-table">
          <tr>
	    <th className="Description">Rauch</th>
	    <th className="Value">Ja</th>
	  </tr>
	  <tr>
	    <th className="Description">Temperatur</th>
	    <th className="Value">165 Grad</th>
	  </tr>
	  <tr>
	    <th className="Description">Licht</th>
	    <th className="Value">Aus</th>
	  </tr>
	  <tr>
	    <th className="Description">Rolladen</th>
	    <th className="Value">Geöffnet</th>
	  </tr>
	    <th className="Description">Letzte Bewegung</th>
	    <th className="Value">2 Std.</th>
	  <tr>
	    <th className="Description">Letzte Stimme</th>
	    <th className="Value">2 Std.</th>   
          </tr>
	</table>
    </div>
  );
}

export default App;
