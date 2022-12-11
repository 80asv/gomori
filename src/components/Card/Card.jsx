import React, { useContext } from 'react'
import styled from 'styled-components'
import { GameContext } from '../../context/GameContext';
import { TimerContext } from '../../context/TimerContext';

const Card = ({ number, area }) => {

    const { timer } = useContext(TimerContext);
    const { handleClickCard } = useContext(GameContext);

    return (
        <SytlesCard 
            style={{gridArea: area}} 
            onClick={(e) => handleClickCard(number, e)}>
            {(timer != 0) && number}
        </SytlesCard>
    )
}

const SytlesCard = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    background-color: var(--light-blue);
    border-radius: 1.5rem;
    cursor: pointer;
    color: var(--secundary-color);
    font-weight: 500;
    font-size: 2.2rem;
    
    @media screen and (max-width: 32.5rem){
        font-size: 1.875rem;
    }
`;


export default Card