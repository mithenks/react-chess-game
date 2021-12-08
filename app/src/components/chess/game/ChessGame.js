import "./ChessGame.css";
import ChessBoard from "../board/ChessBoard";

function ChessGame() {
  return (
    <div className="chessgame">
      <div className="game">
        <div className="game-board">
          <span>Chess Game</span>
          <ChessBoard></ChessBoard>
        </div>
      </div>
    </div>
  );
}

export default ChessGame;
