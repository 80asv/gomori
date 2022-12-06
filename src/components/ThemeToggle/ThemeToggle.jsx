import React, { useContext, useState } from 'react';
import { ThemeContext } from '../../context/ThemeContext';
import { motion } from 'framer-motion';
import styled from 'styled-components';
const ThemeToggle = () => {
    const { toggleTheme } = useContext(ThemeContext);
    const [isOn, setIsOn] = useState(false);

    const toggleSwitch = () => {
        setIsOn(!isOn);
        toggleTheme();
    };
    
    const spring = {
        type: "spring",
        stiffness: 700,
        damping: 30
    };
    
    return (
        <ToggleTheme className="switch" data-ison={isOn} onClick={toggleSwitch}>
            <motion.div className="handle" layout transition={spring} />
        </ToggleTheme>
    );
}

/* Styles */

const ToggleTheme = styled.div`
    width: 42px;
    height: 26px;
    background-color: var(--secundary-color);
    display: flex;
    justify-content: flex-start;
    border-radius: 50px;
    padding: 4px;
    cursor: pointer;
    -webkit-tap-highlight-color: transparent;
    
    &[data-ison="true"] {
        justify-content: flex-end;
    }
    .handle {
        width: 18px;
        height: 18px;
        background-color: white;
        border-radius: 40px;
    }
`;

export default ThemeToggle