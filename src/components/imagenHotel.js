import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import styled from '@emotion/styled';
import BackgroundImage from 'gatsby-background-image';

const ImageBackground = styled(BackgroundImage)`
  height: 700px;
`;

const TextoImagen = styled.div`
  background-image: linear-gradient(to top, rgba(34, 49, 63, .7), rgba(34, 49, 63, .7));
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #FFF;
  height: 100%;
  flex: 1;
  h1{
    font-size: 4rem;
    margin: 0;
    @media (min-width: 992px){
      font-size: 5.8rem;
    }
  }
  p{
    font-size: 2rem;
    @media (min-width: 992px){
      font-size: 2.6rem;
    }
  }
`;

const ImagenHotel = () => {
  const {image} = useStaticQuery(graphql`
  query {
    image: file(relativePath: { eq:"8.jpg" }) {
      sharp: childImageSharp{
        fluid{
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
  `);
  return ( 
    <ImageBackground tag="section" fluid={image.sharp.fluid} fadeIn="soft">
      <TextoImagen>
        <h1>Bienvenido al Hotel Gatsby</h1>
        <p>El mejor hotel para tus vacaciones</p>
      </TextoImagen>
    </ImageBackground>
  );
}
 
export default ImagenHotel;