import React, { createContext, useEffect, useState } from "react";

export const TimerContext = createContext();

export default function TimerContextProvider({ children }){

    const [timer, setTimer] = useState(15);
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
		setTimer(15);
	}

	const startTimer = () => {
		setRunTime(true);
	}

    const data = { timer, setTimer, resetTimer, startTimer }

    return(
        <TimerContext.Provider value={data}>
            {children}
        </TimerContext.Provider>
    )
}