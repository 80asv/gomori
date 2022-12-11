import React, { useContext } from 'react'
import styled from 'styled-components'
import GameHeader from '../GameHeader/GameHeader'
import ScreenGame from '../ScreenGame/ScreenGame'
import { GameContext } from '../../context/GameContext';

const Game = () => {
    const { winLevel, gameOver
     } = useContext(GameContext);
    return (
        <GameStyles className={`game ${ winLevel ? 'flash' : 'none' } ${ gameOver ? 'game-over' : 'none'}`}>
            <section className='game__container'>
                <GameHeader/>
                <ScreenGame/>
            </section>
        </GameStyles>
    )
}

const GameStyles = styled.section`
    .none{ animation: none; }

    &.flash{
        -webkit-animation: flash 1s both;
	    animation: flash 1s both;
    }

    &.game-over{
        -webkit-animation: gameOver 1s both;
	    animation: gameOver 1s both;
    }

    .game__container{    
        box-sizing: border-box;
        margin-top: auto;
        width: 100%;
        height: calc(100vh - 4rem);
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        padding: 0 1.25rem 0 1.25rem;
        overflow: hidden;
        align-content: center;
    }

    @keyframes flash {    
        0%, 80% {background-color: #d4fbdb;}
        90% { background-color: #d4fbdbb3;}
        95% { background-color: #d4fbdb7a;}
        100% {background-color: #ffffff;}
    }

    @keyframes gameOver {    
        0%, 80% {background-color: #fbd4d4;}
        90% { background-color: #fbd4d4b3;}
        95% { background-color: #fbd4d479;}
        100% {background-color: #ffffff;}
    }
`;

export default Game