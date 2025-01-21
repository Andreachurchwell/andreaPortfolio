import React, { useState } from 'react'
import Board from './Board'
import './game.css'





const Game = () => {

    // const [xIsNext, setXIsNext] = useState(true);
    const [history, setHistory] = useState([Array(9).fill(null)]);
    const [currentMove, setCurrentMove] = useState(0)
    // const currentSquares = history[history.length - 1]
    const xIsNext = currentMove % 2 === 0
    const currentSquares = history[currentMove]




    function handlePlay(nextSquares) {
        const nextHistory = [...history.slice(0, currentMove + 1), nextSquares];
        setHistory(nextHistory);
        setCurrentMove(nextHistory.length - 1);
        // setHistory([...history, nextSquares]);
        // setXIsNext(!xIsNext);

        // above is what is throwing a console.lg error sahing setxisnext is not defined at handle play
    }


    function jumpTo(nextMove) {
        setCurrentMove(nextMove);
        // setXIsNext(nextMove % 2 === 0)
    }


    const moves = history.map((squares, move) => {
        let description;
        if (move > 0) {
            description = 'Go to move #' + move
        } else {
            description = 'Go to game start'
        }
        return (
            <li>
                <button key={move} id='b2' onClick={() => jumpTo(move)}>{description}</button>
            </li>
        )
    })



    return (
        <div className='game'>
            <div className='game-board'>
                <Board xIsNext={xIsNext} squares={currentSquares} onPlay={handlePlay} />
            </div>
            <div className='game-info'>
                <ol className='movesInfo'>
                    {moves}
                    
                </ol>
            </div>

        </div>
    )
}

export default Game