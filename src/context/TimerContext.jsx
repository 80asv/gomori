import React, { createContext, useEffect, useState } from "react";

export const TimerContext = createContext();

export default function TimerContextProvider({ children }){

	const [initialTimer, setInitialTimer] = useState(15);

    const [timer, setTimer] = useState(initialTimer);
	const [runTime, setRunTime] = useState(false);

	let sampleInterval;

    useEffect(() => {
		if(runTime){
			sampleInterval = setInterval(() => {
				if (timer > 0) {
					setTimer(timer - 1);
				}
				if (timer === 0) {
					clearInterval(sampleInterval);
				}
			}, 1000);
	
			return () => {
			  clearInterval(sampleInterval);
			};
		}
    });

	const resetTimer = () => {
		setRunTime(false);
		setInitialTimer(15);
		setTimer(initialTimer);
	}

	const startTimer = () => setRunTime(true);

	const stopTimer = () => clearInterval(sampleInterval);

	const reduceTimer = (timeToReduce) => {
		setRunTime(false);
		if(initialTimer < 4){
			setTimer(3);
		} else {
			setInitialTimer(initialTimer - timeToReduce);
			setTimer(initialTimer - timeToReduce);
		}
	}

    const data = { timer, setTimer, resetTimer, startTimer, setInitialTimer, reduceTimer, stopTimer }

    return(
        <TimerContext.Provider value={data}>
            {children}
        </TimerContext.Provider>
    )
}