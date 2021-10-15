import { Img } from './../../atoms/redes-footer/styled';
import styled from 'styled-components';
import { COLORS } from 'src/constants';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 25px;
  background:${COLORS.primaryBlue};
  padding: 60px 20px;
  width: 25%;
  font-family:auto;
  color:${COLORS.primaryWhite};
  position: relative;
  

  

  :before {
    content: '';
    position: absolute;
    bottom: 0;
    top:0;
    left: 0;
    right: 0;
    border-top:solid 2px ${COLORS.primaryWhite};
    border-bottom:solid 2px ${COLORS.primaryWhite};
    transform: scaleY(0);
    transition: transform .5s ease-in-out;
  }

  :after {
    content: '';
    position: absolute;
    bottom: 0;
    top:0;
    left: 0;
    right: 0;
    border-right:solid 2px ${COLORS.primaryWhite};
    border-left:solid 2px ${COLORS.primaryWhite};
    transform: scaleX(0);
    transition: transform .5s ease-in-out;
  }
  :hover{
      cursor: pointer;
  }

  :hover:before {
      transform: scaleY(1);
  }
  :hover:after {
      transform: scaleX(1);
  }

  h2 {
      margin-top: 20px;
  }
  p {
      margin:25px;
      font-size: 10px;

      @media (max-width:710px) {
        font-size: 8px;
      }
  }

  Img {
      border-radius: 100%;
  }

  @media (max-width:910px) and (min-width:720px) {
      width: 40%;
  }


  @media (max-width:710px) {
      width: 100%;
      margin:5px;
      
      
     
  }
`;
