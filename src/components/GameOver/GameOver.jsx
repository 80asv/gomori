import React, { useContext } from 'react'
import styled from 'styled-components';
import { GameContext } from '../../context/GameContext'

const GameOver = () => {

    const { handleStart } = useContext(GameContext);

  return (
    <SytlesGameOver>
        <h2>You lose...</h2>
        <button onClick={handleStart}>Restart Game</button>
    </SytlesGameOver>
  )
}

const SytlesGameOver = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  gap: 1rem;

  h2{
    color: var(--red-text);
    font-size: 3rem;
  }

  button{
    padding: .8rem;
    background-color: var(--primary-color);
    border-radius: 10px;
    font-weight: 500;
    color: var(--white-color);
    cursor: pointer;
  }
`;

export default GameOver