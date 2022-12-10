import React, { useContext } from 'react'
import { GameContext } from '../../context/GameContext'

const GameOver = () => {

    const { handleStart } = useContext(GameContext);

  return (
    <div>
        <h2>You lose...</h2>
        <button onClick={handleStart}>Restart Game</button>
    </div>
  )
}

export default GameOver