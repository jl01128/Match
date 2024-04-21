import React from 'react';
import './ConnectFour.css';

class ConnectFour extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            initialMatrix: [
                [0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0]
            ],
            currentPlayer: 1
        };
    }
    
    fillbox(e) {
        const colValue = parseInt(e.target.getAttribute("data-value"));
        this.setPiece(5, colValue);
        this.setState({
            currentPlayer: this.state.currentPlayer === 1 ? 2 : 1
        });
    }   
    
    setPiece(startCount, colValue) {
        const initialMatrix = this.state.initialMatrix;
        const rows = document.querySelectorAll(".grid-row");

        try {
            while (initialMatrix[startCount][colValue] !== 0) {
                startCount--;
            }

            const currentRow = rows[startCount].querySelectorAll(".grid-box");
            currentRow[colValue].classList.add("filled", `player${this.state.currentPlayer}`);
            initialMatrix[startCount][colValue] = this.state.currentPlayer;

            if (this.winCheck()) {
                alert("Player " + this.state.currentPlayer + " wins!");
                return true;
            }
        } catch (e) {
            alert("Column full, select again");
        }

        this.gameOverCheck();
    }    
    
    winCheck() {
        return (
            this.checkHorizontal() ||
            this.checkVertical() ||
            this.checkPositiveDiagonal() ||
            this.checkNegativeDiagonal()
        );
    }
    
    checkHorizontal() {
        const matrix = this.state.initialMatrix;
        for (let row = 0; row < 6; row++) {
            for (let col = 0; col < 4; col++) {
                if (matrix[row][col] !== 0 && 
                    matrix[row][col] === matrix[row][col + 1] && 
                    matrix[row][col] === matrix[row][col + 2] && 
                    matrix[row][col] === matrix[row][col + 3]) {
                    return true;
                }
            }
        }
        return false;
    }

    checkVertical() {
        const matrix = this.state.initialMatrix;
        for (let col = 0; col < 7; col++) {
            for (let row = 0; row < 3; row++) {
                if (matrix[row][col] !== 0 && 
                    matrix[row][col] === matrix[row + 1][col] && 
                    matrix[row][col] === matrix[row + 2][col] && 
                    matrix[row][col] === matrix[row + 3][col]) {
                    return true;
                }
            }
        }
        return false;
    }

    checkPositiveDiagonal() {
        const matrix = this.state.initialMatrix;
        for (let row = 3; row < 6; row++) {
            for (let col = 0; col < 4; col++) {
                if (matrix[row][col] !== 0 && 
                    matrix[row][col] === matrix[row - 1][col + 1] && 
                    matrix[row][col] === matrix[row - 2][col + 2] && 
                    matrix[row][col] === matrix[row - 3][col + 3]) {
                    return true;
                }
            }
        }
        return false;
    }

    checkNegativeDiagonal() {
        const matrix = this.state.initialMatrix;
        for (let row = 3; row < 6; row++) {
            for (let col = 3; col < 7; col++) {
                if (matrix[row][col] !== 0 && 
                    matrix[row][col] === matrix[row - 1][col - 1] && 
                    matrix[row][col] === matrix[row - 2][col - 2] && 
                    matrix[row][col] === matrix[row - 3][col - 3]) {
                    return true;
                }
            }
        }
        return false;
    }

    gameOverCheck() {
        let count = 0;
        const initialMatrix = this.state.initialMatrix;

        for (let innerArray of initialMatrix) {
            if (innerArray.every(val => val !== 0)) {
                count++;
            } else {
                return false;
            }
        }

        if (count === 6) {
            alert("Game over!");
            return true;
        }
    }    

    render() {
        return (
            <div className="wrapper">
                <div className="container">
                    {[...Array(6)].map((_, rowIndex) => (
                        <div key={rowIndex} className="grid-row">
                            {[...Array(7)].map((_, colIndex) => (
                                <div key={colIndex} className="grid-box" data-value={colIndex} onClick={(e) => this.fillbox(e)}></div>
                            ))}
                        </div>
                    ))}
                </div>

                <div id="information">
                    <div className="player-wrappers">
                        Player 1
                        <div className="player1"></div>
                    </div>

                    <div className="player-wrappers">
                        Player 2
                        <div className="player2"></div>
                    </div>
                </div>
            </div>
        );
    }
}

export default ConnectFour;