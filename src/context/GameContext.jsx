import { createContext, useState } from "react";

export const GameContext = createContext();

export default function GameContextProvider({ children }){

    const [start, isStart] = useState(false);

    const handleStart = () => {
        isStart(true);
    }

    const handleFinish = () => {
        isStart(false);
    }

    const data = { start, handleStart, handleFinish }

    return(
        <GameContext.Provider value={data}>
            { children }
        </GameContext.Provider>
    )
}


