import React, { useEffect, useState } from 'react'

const Timer = () => {

    const [timer, setTimer] = useState(15);

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

    return (
        <p>00:{timer < 10 ? "0": ""}{timer}</p>
    )
}

export default Timer