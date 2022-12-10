import React, { useContext } from 'react'
import styled from 'styled-components'
import { GameContext } from '../../context/GameContext';
import TimerContextProvider from '../../context/TimerContext';
import Timer from '../Timer/Timer';

const GameHeader = ({ numLevel }) => {

  const { start, level } = useContext(GameContext);

  return (
    <StyleHeaderGame className='game-header'>
        <h2>Level {level}</h2>
        { 
          start 
          ? <Timer/>
          : <p>00:00</p> 
        }
    </StyleHeaderGame>
  )
}


/**
 * 
 * 
 * 
 * 
 * 
 * STYLES */
const StyleHeaderGame = styled.header`
    width: 638px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    overflow: hidden;
    align-content: center;
    padding: 1em;

    h2{
      font-size: 1.25rem;
      color: var(--primary-color);
      font-weight: 700;
      font-style: normal;
    }

    p{
      flex-shrink: 0;
      font-weight: 500;
      color: var(--secundary-color);
      font-size: 2.25rem;
      text-align: center;
    }
`;


export default GameHeader