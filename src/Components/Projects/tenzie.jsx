import React, { useState } from 'react'






const Tenzi = () => {

    const [dice, setDice] = useState(Array(10).fill({ value: '', isFrozen: false }));
    // const [gameOver, setGameOver] = useState(false)
    const handleRoll = () => {
        console.warn('handleRoll works')
        setDice(prevDice =>
            prevDice.map(die =>
                die.isFrozen ? die : { value: Math.ceil(Math.random() * 6), isFrozen: false }
            )
        )
    }
    const handleFreeze = (index) => {
        setDice(prevDice =>
            prevDice.map((die, i) =>
                i === index ? { ...die, isFrozen: !die.isFrozen } : die
            )
        )
        // setDiceValue(freeze)
        console.log('index', index)
    }


    return (





        <div>
            <h2>Tenzie's</h2>
            <br />
            <p>Roll until all dice are the same.. Click the die to freeze it at its current value, and roll again.</p>
            <div id='diceContainer'>

                {dice.map((die, index) => (
                    <button
                        key={index}
                        className={`diceB ${die.isFrozen ? 'frozen' : ''}`}
                        onClick={() => handleFreeze(index)}
                    >
                        {die.value}
                    </button>
                ))}
            </div>
            <br /><br /><br /><br />
            <button id='rollBtn' onClick={handleRoll}>Roll Dice</button>
        
        </div>



    )



}

export default Tenzi