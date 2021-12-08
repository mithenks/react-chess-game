import React from "react";
import Square from "../square/Square";

class ChessBoard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      squares: Array(64).fill({ color: 1, coord: "00", piece: null }),
      source: null,
      dest: null,
    };
  }

  squareClicked(val) {
    this.state.squares.map(() => {
      console.log();
    });
  }

  renderSquare(i, l, m) {
    return (
      <Square
        name={i}
        value={m}
        class={l}
        onClick={(val) => console.log("square " + val + " has been clicked")}
      />
    );
  }

  render() {
    const rows = [];
    const letters = ["A", "B", "C", "D", "E", "F", "G", "H"];

    let wp = "♙";
    let wn = "♘";
    let wb = "♗";
    let wr = "♖";
    let wq = "♕";
    let wk = "♔";

    let bp = "♟︎";
    let bn = "♞";
    let bb = "♝";
    let br = "♜";
    let bq = "♛";
    let bk = "♚";

    let initPositions = Array(64).fill(null);
    initPositions[0] = br;
    initPositions[1] = bn;
    initPositions[2] = bb;
    initPositions[3] = bq;
    initPositions[4] = bk;
    initPositions[5] = bb;
    initPositions[6] = bn;
    initPositions[7] = br;
    for (let i = 8; i < 16; i++) {
      initPositions[i] = bp;
    }
    for (let i = 48; i < 56; i++) {
      initPositions[i] = wp;
    }
    initPositions[56] = wr;
    initPositions[57] = wn;
    initPositions[58] = wb;
    initPositions[59] = wq;
    initPositions[60] = wk;
    initPositions[61] = wb;
    initPositions[62] = wn;
    initPositions[63] = wr;

    for (let i = 0; i < 8; i++) {
      let items = [];
      for (let l = 0; l < 8; l++) {
        let element = {
          color: (i + l) % 2,
          coord: letters[7 - i] + (l + 1),
          piece: initPositions[i * 8 + l],
        };

        this.state.squares[i * 8 + l] = element;
        //this.setState({})

        items.push(
          this.renderSquare(
            element.piece,
            element.color ? "square_b" : "square_w",
            element.coord
          )
        );
      }
      let rowId = "board-row-" + i;
      console.log("rowId", rowId);
      rows.push(
        <div key={rowId} className="board-row">
          {items}
        </div>
      );
    }

    console.log(this.state);

    return <div>{rows}</div>;
  }
}

export default ChessBoard;
