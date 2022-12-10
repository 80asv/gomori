import React, { useContext } from 'react'
import styled from 'styled-components';
import { GameContext } from '../../context/GameContext'

const WinLevel = () => {

    const { nextLevel } = useContext(GameContext);
  return (
    <StylesWin>
        <h2>Great!</h2>
        <button onClick={nextLevel}>Next level</button>
    </StylesWin>
  )
}

const StylesWin = styled.div`

  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  gap: 1rem;

  h2{
    color: var(--green-text);
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

export default WinLevel