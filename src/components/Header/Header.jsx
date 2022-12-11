import React from 'react'
import styled from 'styled-components'


const Header = () => {
  return (
    <HeaderStyles className='header'>
        <h1 className='header__h1'>GOMORI</h1>
    </HeaderStyles>
  )
}

const HeaderStyles = styled.header`
    width: 100%;
    height: 4rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 1.5rem;
    background-color: var(--white-color);
	  border-bottom: 1px solid var(--grey-line-color);
`;

export default Header