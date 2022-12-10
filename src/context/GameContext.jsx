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

    const { startTimer, resetTimer, timer, reduceTimer } = useContext(TimerContext);

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
    }

    const handleClickCard = (e) => {
        //if(timer > 0) return;
        if(e.target.innerText === counter.toString()){
            setCounter(counter + 1);
            setBorderColor(borderColors[counter - 1]);
            e.target.style.display = 'none';
            if(counter === 9) return handleWinLevel();
        } else {
            handleGameOver();
            setCounter(1);
        }
    }

    const handleGameOver = () => {
        setGameOver(true);
        isStart(false);
        setScore(0);
        setLevel(1);
        setBorderColor("D4D4D4");
    }

    const handleWinLevel = () => {
        setWinLevel(true);
        setWinLevel(true);
        setScore(score + 100);
        setLevel(level + 1);
        setBorderColor("D4D4D4");
        isStart(false);
    }

    const nextLevel = () => {
        setCounter(1);
        isStart(true);
        reduceTimer(5);
        startTimer();
        setWinLevel(false);
    }


    // const nextLevel = () => {
    //     reduceTimer(5);
    //     setWinLevel(true);
    //     setScore(score + 100);
    //     setLevel(level + 1);
    //     setBorderColor("D4D4D4");
    //     winLevel(false);
    // }

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


