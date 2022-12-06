import React from 'react'
import styled from 'styled-components'
import ThemeToggle from '../ThemeToggle/ThemeToggle'

const Header = () => {
  return (
    <HeaderStyles className='header'>
        <h1 className='header__h1'>GOMORI</h1>
        <ThemeToggle/>
    </HeaderStyles>
  )
}

const HeaderStyles = styled.header`
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-start;
    overflow: visible;
    padding: 1.4em;
    align-content: flex-start;
    flex-wrap: nowrap;
	border-bottom: 1px solid var(--grey-line-color);
`;

export default Header