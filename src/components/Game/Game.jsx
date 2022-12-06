import React from 'react'
import styled from 'styled-components'
import ThemeProvider from '../../context/ThemeContext'
import Header from '../Header/Header'
import ScreenGame from '../ScreenGame/ScreenGame'

const Game = () => {
    return (
        <section className='game'>
            <ThemeProvider>
                <Header/>
                <StyleGame className='game__container'>
                    <ScreenGame/>
                </StyleGame>
            </ThemeProvider>
        </section>
    )
}

const StyleGame = styled.section`
    box-sizing: border-box;
    width: 100%;
    height: 740px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 0px 40px 0px 40px;
    overflow: hidden;
    align-content: center;
    flex-wrap: nowrap;
    gap: 10;

`;

export default Game