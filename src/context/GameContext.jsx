import React, { createContext, useContext, useState } from "react";
import { TimerContext } from "./TimerContext";

export const GameContext = createContext();
const borderColors = ["c7d6d0", "bcd7cc", "b1d9c8", "9bdcc0", "88dfba", "69e3af", "53e6a8", "37ea9f", "1bee95"];

export default function GameContextProvider({ children }){
    
    const [start, isStart] = useState(false);
    const [gameOver, setGameOver] = useState(false);
    const [counter, setCounter] = useState(1);
    const [borderColor, setBorderColor] = useState("D4D4D4");

    const { startTimer, resetTimer } = useContext(TimerContext);

    const handleStart = () => {
        isStart(true);
        setGameOver(false); 
        startTimer();
    }

    const handleFinish = () => {
        isStart(false);
        setGameOver(false);
        resetTimer();
        setBorderColor("D4D4D4");
    }

    const handleClickCard = (e) => {
        if(e.target.innerText === counter.toString()){
            setCounter(counter + 1);
            setBorderColor(borderColors[counter - 1]);
            e.target.style.display = 'none';
        } else {
            handleGameOver();
            setCounter(1);
        }
    }

    const handleGameOver = () => {
        setGameOver(true);
        isStart(false);
    }

    const data = { start, handleStart, handleFinish, handleClickCard, gameOver, handleGameOver, borderColor };

    return(
        <GameContext.Provider value={data}>
            { children }
        </GameContext.Provider>
    )
}


