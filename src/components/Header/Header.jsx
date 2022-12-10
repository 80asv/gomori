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
    justify-content: space-between;
    padding: 1.4em;
    background-color: var(--white-color);
	  border-bottom: 1px solid var(--grey-line-color);
`;

export default Header