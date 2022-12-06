import React from 'react'
import styled from 'styled-components'
import { useGame } from '../../hooks/useGame';
import { generateCards } from '../../logic/generateCards';
import Card from '../Card/Card';



const ScreenGame = () => {

	const { start, handleStart, handleFinish } = useGame();

	return (
		<ScreenStyles className='screen'>
			<div className={`screen__container-cards ${ start ? "" : "pause" }`}>
				{
					start 
					? generateCards().map((card) => <Card key={card.number}number={card.number} area={card.area}/>)
					: <p>Press Start</p>
				}
			</div>
			<div className="screen__controls">
				<div className="screen__controls-btns">
					<button className='screen__controls-btn screen__controls-btn-start' onClick={handleStart}>Start</button>
					<button className='screen__controls-btn screen__controls-btn-finish' onClick={handleFinish}>Finish</button>
				</div>
				<div className="screen__controls-time">
					<p className='screen__controls-time-label'>Time</p>
					<p className='screen__controls-time-timer'>00</p>
				</div>
			</div>
		</ScreenStyles>
	)
}

const ScreenStyles = styled.div`
	.screen__container-cards{
		width: 40.9rem;
		height: 25rem;

		display: grid;
		align-items: center;
    	justify-items: center;
		grid-template-columns: repeat(5, 1fr);
		grid-template-rows: repeat(3, 1fr);

		grid-template-areas: 
			"div1 div2 div3 div4 div5"
			"div6 div7 div8 div9 div10"
			"div11 div12 div13 div14 div15"
		;

		gap: 13px;
		border-radius: 37px;
		padding: 10px;
		border: 4px solid #d4d4d4;

		&.pause{
			display: flex;
			justify-content: center;
			align-items: center;
			background-color: var(--pause-game);

			p{
				display: block;
				font-size: 3rem;
				color: #b5b5b5;
			}
		}
	}

    .screen__controls {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
		padding: 26px 26px 26px 26px;
		overflow: hidden;
		align-content: center;
		flex-wrap: nowrap;
		border-radius: 37px;
	}

	.screen__controls-btns{
		display: flex;
		flex-direction: row;
		justify-content: center;
		align-items: center;
		overflow: hidden;
		padding: 0px 0px 0px 0px;
		align-content: center;
		flex-wrap: nowrap;
		gap: 10px;
	}

    .screen__controls-btn {
		width: 99px;
		display: flex;
		flex-direction: row;
		justify-content: center;
		align-items: center;
		padding: 15px;
		align-content: center;
		border-radius: 13px;
		font-weight: 500;
		cursor: pointer;
		color: var(--white-color);
	}

    .screen__controls-btn-finish {
		background-color: var(--primary-color);
	}

    .screen__controls-btn-start {
		background-color: var(--secundary-color);
	}

    .screen__controls-time {
		display: flex;
		align-items: center;
		gap: 10px;
	}

    .screen__controls-time-label {
		color: var(--secundary-color);
		font-weight: 500;
	}

	.screen__controls-time-timer {
		display: flex;
		justify-content: center;
		align-items: center;
		width: 3.1875rem;
		height: 2.8125rem;	
		border-radius: 11px;
		border: 2px solid var(--secundary-color);
		font-weight: 500;
		font-size: 1.5rem;
		color: var(--black-light);
	}
`;

export default ScreenGame