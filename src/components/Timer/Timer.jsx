import React, { useContext } from 'react'
import { TimerContext } from '../../context/TimerContext'

const Timer = () => {
    let { timer } = useContext(TimerContext);
    return <p>00:{timer < 10 ? "0": ""}{timer}</p>
}
export default Timer