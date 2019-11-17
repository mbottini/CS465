import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class Square extends React.Component {
  render() {
    return (
      <button className="square" onClick={() => this.props.onClick()}>
        {this.props.value}
      </button>
    );
  }
}

class Board extends React.Component {
  constructor() {
      super();
      this.state = {
          currentPlayer: "X",
          squareStates: new Array(9).fill(null),
          win: null
      }
  }


  renderSquare(i) {
    return <Square value={this.state.squareStates[i]} onClick={() => this.handleClick(i)} />;
  }

  handleClick(i) {
    if(this.state.win === null) {
      const squares = this.state.squareStates.slice();
      squares[i] = this.state.currentPlayer;
      this.setState({
        currentPlayer: this.state.currentPlayer === "X" ? "O" : "X",
        squareStates: squares,
        win: findWin(squares)
      })
    }
  }

  render() {
    const status = this.state.win ? `${this.state.win} wins!` : 
                                    `Next player: ${this.state.currentPlayer}`;


    return (
      <div>
        <div className="status">{status}</div>
        <div className="board-row">
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
        </div>
        <div className="board-row">
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
        </div>
        <div className="board-row">
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}
        </div>
      </div>
    );
  }
}

function allEqual(lst) {
    if(!lst || lst.length === 0 || lst[0] === null) {
        return null;
    }
    for(let i = 0; i < lst.length; i++) {
        if(lst[i] !== lst[0]) {
            return null;
        }
    }
    return lst[0];
}

function findWin(lst) {
    const allPossibilities = [
        lst.slice(0, 3),
        lst.slice(3, 6),
        lst.slice(6),
        [
            lst[0],
            lst[3],
            lst[6],
        ],
        [
            lst[1],
            lst[4],
            lst[7],
        ],
        [
            lst[2],
            lst[5],
            lst[8],
        ],
        [
            lst[0],
            lst[4],
            lst[8]
        ],
        [
            lst[2],
            lst[4],
            lst[6]
        ]
    ].map(allEqual);

    for(let i = 0; i < allPossibilities.length; i++) {
        if(allPossibilities[i] !== null) {
            return allPossibilities[i];
        }
    }
    return null;
  }

class Game extends React.Component {
  render() {
    return (
      <div className="game">
        <div className="game-board">
          <Board />
        </div>
        <div className="game-info">
          <div>{/* status */}</div>
          <ol>{/* TODO */}</ol>
        </div>
      </div>
    );
  }
}

// ========================================

ReactDOM.render(
  <Game />,
  document.getElementById('root')
);
