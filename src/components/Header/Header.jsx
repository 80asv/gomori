import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react'
import styled from 'styled-components'


const Header = () => {
  return (
    <HeaderStyles className='header'>
        <h1 className='header__h1'>GOMORI</h1>
        <div className='header__links'>
            <a className='header__link-github'  href="https://github.com/80asv/gomori" target="_blank">
              <FontAwesomeIcon icon={faGithub}/>
            </a>
        </div>
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



    .header__h1{
      font-weight: 500;
      font-size: 18px;
      letter-spacing: 1px;
      color: var(--primary-color)
    }

    .header__link-github{
      font-size: 1.4rem;
      color: var(--primary-color);
    }


`;

export default Header