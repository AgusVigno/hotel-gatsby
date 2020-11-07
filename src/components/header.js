import React from 'react';
import {css} from '@emotion/core';
import styled from '@emotion/styled';
import {Link} from 'gatsby';
import Navegacion from './navegacion';

const EnlaceHome = styled(Link)`
  color: #FFF;
  text-align: center;
  text-decoration: none;
`;

const Header = () => {
  return ( 
    <header
      css={css`
        background-color: rgb(44,62,80);
        padding: 1rem;
      `}
    >
      <div css={css`
        max-width: 1200px;
        margin: 0 auto;
        @media (min-width: 768px){
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
      `}>
        <EnlaceHome to='/'>
          <h1>Hotal Gatsby</h1>
        </EnlaceHome>

        <Navegacion />
      </div>
    </header>
  );
}
 
export default Header;