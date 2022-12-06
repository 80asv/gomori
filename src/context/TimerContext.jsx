import { createContext, useEffect, useState } from "react";

export const TimerContext = createContext();

const initialTimer = 15;

export default function TimerContextProvider({ children }){

    const [timer, setTimer] = useState(initialTimer);

    useEffect(() => {
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
    });

    const data = { timer, setTimer }

    return(
        <TimerContext.Provider value={data}>
            {children}
        </TimerContext.Provider>
    )
}