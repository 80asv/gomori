import React from 'react'

const Controls = () => {
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