import React from 'react'
import styled from 'styled-components'
import { generateCards } from '../../logic/generateCards'

generateCards();

const Card = ({ number, area }) => {

    

    return (
        <SytlesCard className='card' style={{gridArea: area}}>
            <p className='card__number'>{number}</p>
        </SytlesCard>
    )
}

const SytlesCard = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 5.3rem;
    height: 5.3rem;
    background-color: rgba(27, 213, 238, 0.33);
    border-radius: 1.5rem;
    cursor: pointer;
    .card__number{
        color: var(--white-color);
        font-weight: 500;
        font-size: 2rem;
    }
`;


export default Card