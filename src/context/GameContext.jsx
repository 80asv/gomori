import React, { createContext, useContext, useState } from "react";
import { TimerContext } from "./TimerContext";

export const GameContext = createContext();
const borderColors = ["c7d6d0", "bcd7cc", "b1d9c8", "9bdcc0", "88dfba", "69e3af", "53e6a8", "37ea9f", "1bee95"];

export default function GameContextProvider({ children }){
    
    const [start, isStart] = useState(false);
    const [gameOver, setGameOver] = useState(false);
    const [counter, setCounter] = useState(1);
    const [borderColor, setBorderColor] = useState("D4D4D4");

    const [level, setLevel] = useState(1);
    const [score, setScore] = useState(0);
    const [winLevel, setWinLevel] = useState(false);

    const { startTimer, resetTimer, reduceTimer, timer, stopTimer } = useContext(TimerContext);

    const handleStart = () => {
        setGameOver(false); 
        handleFinish();
        isStart(true);
        startTimer();
    }

    const handleFinish = () => {
        resetTimer();
        isStart(false);
        setGameOver(false);
        setBorderColor("D4D4D4");
        setScore(0);
        setLevel(1);
        setWinLevel(false);
        setCounter(1);
    }

    const handleClickCard = (number, e) => {
        //if(timer > 0) return;
        if(number === counter){
            setCounter(counter + 1);
            setBorderColor(borderColors[counter - 1]);
            e.target.style.display = 'none';
            if(counter === 9) return handleWinLevel();
        } else {
            handleGameOver();
            setBorderColor("ff6666");
            setCounter(1);
        }
    }

    const handleGameOver = () => {
        setGameOver(true);
        resetTimer();
        isStart(false);
        setScore(0);
        setLevel(1);
    }

    const handleWinLevel = () => {
        setWinLevel(true);
        stopTimer();
        reduceTimer(2);
        setBorderColor("58e35c");
        isStart(false);
    }

    const nextLevel = () => {
        setBorderColor("D4D4D4");
        setScore(score + 100);
        setLevel(level + 1);
        setCounter(1);
        isStart(true);
        startTimer();
        setWinLevel(false);
    }

    const data = { 
        start, 
        handleStart, 
        handleFinish, 
        handleClickCard, 
        gameOver, 
        handleGameOver, 
        borderColor,
        level,
        score,
        winLevel,
        nextLevel,
    };

    return(
        <GameContext.Provider value={data}>
            { children }
        </GameContext.Provider>
    )
}


