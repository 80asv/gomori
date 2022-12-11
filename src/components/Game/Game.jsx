import React, { useContext } from 'react'
import styled from 'styled-components'
import GameHeader from '../GameHeader/GameHeader'
import ScreenGame from '../ScreenGame/ScreenGame'
import { GameContext } from '../../context/GameContext';

const Game = () => {
    const { winLevel } = useContext(GameContext);
    return (
        <GameStyles className={`game ${ winLevel ? 'flash' : 'none' }`}>
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

    .game__container{    
        box-sizing: border-box;
        margin-top: auto;
        width: 100%;
        height: calc(100vh - 4rem);
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        padding: 0px 40px 0px 40px;
        overflow: hidden;
        align-content: center;
    }

    @keyframes flash {    
        0%, 80% {background-color: #d4fbdb;}
        90% { background-color: #d4fbdbb3;}
        95% { background-color: #d4fbdb7a;}
        100% {background-color: #ffffff;}
    }
`;

export default Game