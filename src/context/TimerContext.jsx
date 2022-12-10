import React, { createContext, useEffect, useState } from "react";

export const TimerContext = createContext();

export default function TimerContextProvider({ children }){

	const [initialTimer, setInitialTimer] = useState(15);

    const [timer, setTimer] = useState(initialTimer);
	const [runTime, setRunTime] = useState(false);

    useEffect(() => {
		if(runTime){
			let sampleInterval = setInterval(() => {
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

	const startTimer = () => {
		setRunTime(true);
	}

	const reduceTimer = (timeToReduce) => {
		setInitialTimer(initialTimer - timeToReduce);
	}

    const data = { timer, setTimer, resetTimer, startTimer, setInitialTimer, reduceTimer }

    return(
        <TimerContext.Provider value={data}>
            {children}
        </TimerContext.Provider>
    )
}