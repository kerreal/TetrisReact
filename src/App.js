import logo from './logo.svg';
import './App.css';

import Game from "./components/Game.js";

function App() {
  return (
    <div className="App">
      <Game columns={10} rows={20} />
    </div>
  );
}

export default App;
