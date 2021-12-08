import logo from "../../assets/2029530.svg";
import Palette from "../palette/Palette.js";
import ChessGame from "../chess/game/ChessGame";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Palette />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Chess game</h1>
        <p>Play this chess game to have fun!</p>
        <ChessGame />
      </header>
    </div>
  );
}

export default App;
