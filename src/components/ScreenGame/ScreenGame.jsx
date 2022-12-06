import React from 'react'
import styled from 'styled-components'

const ScreenGame = () => {
  return (
    <ScreenStyles className='screen'>
        <div className="screen__container-cards">

        </div>
		<div className="screen__controls">
			<div className="screen__controls-btns">
				<button className='screen__controls-btn screen__controls-btn-start'>Start</button>
				<button className='screen__controls-btn screen__controls-btn-restart'>Restart</button>
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
		box-sizing: border-box;
		width: 40.9rem;
		height: 25rem;
		display: flex;
		flex-direction: row;
		justify-content: center;
		align-items: center;
		box-shadow: 0px 0.6032302072222955px 0.6032302072222955px -1.25px rgba(0, 0, 0, 0.18), 0px 2.290210571630906px 2.290210571630906px -2.5px rgba(0, 0, 0, 0.15887), 0px 10px 10px -3.75px rgba(0, 0, 0, 0.0625);
		background-color: #ffffff;
		overflow: hidden;
		padding: 0px 0px 0px 0px;
		align-content: center;
		flex-wrap: wrap;
		gap: 13;
		border-radius: 37px;
		border: 4px solid #d4d4d4;
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

    .screen__controls-btn-restart {
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