import React, { useContext } from 'react'
import { GameContext } from '../../context/GameContext'

const Controls = () => {

  const {start} = useContext(GameContext);

  return (
    <div className='controls'>
        <div className='controls__btns'>
            <button className='controls__btn-start'>Start</button>
            <button className='controls__btn-restart'>Restart</button>
        </div>
        <div className='controls__time'>
            <p className='controls__time-label'>Time</p>
            <p className='controls__time-time'>00</p>
        </div>
    </div>
  )
}

export default Controls