import React, { useContext } from 'react'
import { GameContext } from '../../context/GameContext'

const WinLevel = () => {

    const { nextLevel } = useContext(GameContext);
  return (
    <div>
        <h2>You Win</h2>
        <button onClick={nextLevel}>Next level</button>
    </div>

  )
}

export default WinLevel