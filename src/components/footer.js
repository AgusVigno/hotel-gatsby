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

const Footer = ({title}) => {
  const year = new Date().getFullYear();

  return ( 
    <>
      <footer
        css={css`
          background-color: rgb(44,62,80);
          margin-top: 5rem;
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
          <Navegacion />

          <EnlaceHome to='/'>
            <h1>Hotal Gatsby</h1>
          </EnlaceHome>
        </div>
      </footer>
      <p css={css`
        text-align: center;
        background-color: rgb(33,44,55);
        color: #FFF;
        margin: 0;
        padding: 1rem;
      `}>
        {title}. Todos los derechos reservados. {year} &copy;
      </p>
    </>
  );
}
 
export default Footer;