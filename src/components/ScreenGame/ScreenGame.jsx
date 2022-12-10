import React, { useContext, useEffect, useState } from 'react'
import { generateCards } from '../../logic/generateCards';
import { GameContext } from '../../context/GameContext';
import GameOver from '../GameOver/GameOver';
import WinLevel from '../WinLevel/WinLevel';
import styled from 'styled-components'
import Card from '../Card/Card';




const ScreenGame = () => {

	const { start, handleStart, handleFinish, gameOver, borderColor, score, winLevel } = useContext(GameContext);
	const [cards, setCards] = useState([]);

	useEffect(() => {
	  	setCards(generateCards());
	}, [start]);
	
	return (
		<ScreenStyles className='screen'>
			<div 
				className={`screen__container-cards ${ start ? "" : "pause" } ${ gameOver ? 'game-over' : '' } ${winLevel ? 'win' : '' }`} 
				style={{ border: `4px solid #${borderColor}`, animation: `${winLevel ? 'winColor' : 'none'}` }}>
				{ !start && !gameOver && !winLevel && <p>Press Start</p> }
				{ start && cards.map((card) => <Card key={card.number} number={card.number} area={card.area}/>) }
				{ gameOver && <GameOver/> }
				{ winLevel && <WinLevel/> }
			</div>
			<div className="screen__controls">
				<div className="screen__controls-btns">
					<button className='screen__controls-btn screen__controls-btn-start' onClick={handleStart}>Start</button>
					<button className='screen__controls-btn screen__controls-btn-finish' onClick={handleFinish}>Finish</button>
				</div>
				<div className="screen__controls-time">
					<p className='screen__controls-time-label'>Score</p>
					<p className='screen__controls-time-score'>{score}</p>
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
		transition: all .3s ease-in-out;

		grid-template-areas: 
			"div1 div2 div3 div4 div5"
			"div6 div7 div8 div9 div10"
			"div11 div12 div13 div14 div15"
		;

		gap: 13px;
		border-radius: 37px;
		padding: 10px;
		

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

		&.game-over{
			display: flex;
			justify-content: center;
			align-items: center;
			background-color: var(--lose-color);

			p{
				display: block;	
				font-size: 3rem;
				color: #b5b5b5;
			}
		}

		&.win{
			background-color: var(--win-color);
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

	.screen__controls-time-score {
		border-radius: 11px;
		font-weight: 500;
		font-size: 1.5rem;
		color: var(--black-light);
	}
`;

export default ScreenGame