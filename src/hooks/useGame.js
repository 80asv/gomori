import { useState } from "react";

export const useGame = () => {
    const [start, isStart] = useState(false);

    const handleStart = () => {
        isStart(true);
    }
    const handleFinish = () => {
        isStart(false);
    }

    return { start, handleStart, handleFinish }
}