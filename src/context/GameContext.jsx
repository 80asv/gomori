import { createContext, useState } from "react";

export const GameContext = createContext();

let counter = 1;
//const borderColors = ["D4D4D4", "C5DAC2", "A4DF9B", "85E177", "74E662", "67E952", "5BEE43", "4AF12F", "23FF00"];

export default function GameContextProvider({ children }){
    
    const [start, isStart] = useState(false);
    const [gameOver, setGameOver] = useState(false);

    const handleStart = () => {
        isStart(true);
        setGameOver(false);
    }

    const handleFinish = () => {
        isStart(false);
        setGameOver(false);
    }

    const handleClickCard = (e) => {
        if(e.target.innerText === counter.toString()){
            counter++;
        } else {
            handleGameOver();
            counter = 1;
        }
    }

    const handleGameOver = () => {
        setGameOver(true);
        isStart(false);
    }

    const data = { start, handleStart, handleFinish, handleClickCard, gameOver }

    return(
        <GameContext.Provider value={data}>
            { children }
        </GameContext.Provider>
    )
}


