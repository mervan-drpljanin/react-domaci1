import logo from "./logo.svg";
import "./App.css";
import MovieReact from "./components/MovieCard/MovieCard";

function App() {
  return (
    <div className="main-part">
      Domaći 1
      <div className="card">
        <MovieReact></MovieReact>
      </div>
    </div>
    /*{ <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div> }*/
  );
}

export default App;
