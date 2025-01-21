import React, { useState } from 'react'
import Square from './Square'







const Board = ({ xIsNext, squares, onPlay }) => {

    // const [xIsNext, setXIsNext] = useState(true)
    // const [squares, setSquares] = useState(Array(9).fill(null))

    function handleClick(i) {

        if (squares[i] || calculateWinner(squares)) {
            return
        }
        const nextSquares = squares.slice();

        if (xIsNext) {
            nextSquares[i] = 'X'
        } else {
            nextSquares[i] = 'O'
        }

        // nextSquares[i] = 'X';
        // setSquares(nextSquares)
        // setXIsNext(!xIsNext)
        onPlay(nextSquares)
    }

    const winner = calculateWinner(squares);
    let status;
    if (winner) {
        status = 'You Win: ' + winner;
    } else {
        status = 'Next player: ' + (xIsNext ? 'X' : 'O')
    }
    function calculateWinner(squares) {
        const lines = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6]
        ];
        for (let i = 0; i < lines.length; i++) {
            const [a, b, c] = lines[i];
            if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
                return squares[a]
            }
        }
        return null
    }



    return (
        // <div>
        //     <div id='mainC'>
        //         <h3>Tic-Tac-Toe</h3>
        //         <div className='status'>{status}</div>
        //         <br /><br />
        //         <div className='board-row'>

        //             <Square value={squares[0]} onSquareClick={() => handleClick(0)} />
        //             <Square value={squares[1]} onSquareClick={() => handleClick(1)} />
        //             <Square value={squares[2]} onSquareClick={() => handleClick(2)} />


        //         </div>
        //         <div className='board-row'>

        //             <Square value={squares[3]} onSquareClick={() => handleClick(3)} />
        //             <Square value={squares[4]} onSquareClick={() => handleClick(4)} />
        //             <Square value={squares[5]} onSquareClick={() => handleClick(5)} />


        //         </div>
        //         <div className='board-row'>

        //             <Square value={squares[6]} onSquareClick={() => handleClick(6)} />
        //             <Square value={squares[7]} onSquareClick={() => handleClick(7)} />
        //             <Square value={squares[8]} onSquareClick={() => handleClick(8)} />


        //         </div>
        //     </div>
        // </div>



        <div style={{ textAlign: 'center', fontFamily: 'Arial, sans-serif' }}>
        <div id="mainC" style={{ margin: '20px auto', width: '300px' }}>
            <h3 style={{ fontSize: '24px', color: '#3a86ff' }}>Tic-Tac-Toe</h3>
            <div
                className="status"
                style={{
                    fontSize: '18px',
                    marginBottom: '20px',
                    fontWeight: 'bold',
                    color: winner ? '#ff3e3e' : '#333',
                }}
            >
                {status}
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '10px' }}>
                {squares.map((square, index) => (
                    <Square
                        key={index}
                        value={square}
                        onSquareClick={() => handleClick(index)}
                        style={{
                            width: '80px',
                            height: '80px',
                            backgroundColor: '#f0f4f8',
                            border: '2px solid #3a86ff',
                            fontSize: '24px',
                            fontWeight: 'bold',
                            color: '#3a86ff',
                            textAlign: 'center',
                            lineHeight: '80px',
                            cursor: 'pointer',
                            transition: 'background-color 0.3s',
                        }}
                    />
                ))}
            </div>
        </div>
    </div>
    )
}

export default Board