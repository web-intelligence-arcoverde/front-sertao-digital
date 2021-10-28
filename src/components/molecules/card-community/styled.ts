import styled from 'styled-components';
import { COLORS } from 'src/constants';

export const Container = styled.div`
  width: 30%;
  display: flex;
  flex-direction:column;
  margin: 40px 20px;
  text-align: center;
  align-items: center;
  color: #222;
 
  

  h1 {
    margin: 30px;
  }

  hr {
    width: 100%;
    border-top: 0.5px solid #222;
    margin-top: 10px;
  }
  

  @media (max-width:700px) {
    width: 100%;
    margin:10px
  }
  @media (min-width:701px) and (max-width:900px) {
    width: 40%;
    margin:10px
  }
`;

export const Button =styled.button `

width: 150px;
height:40px;
margin-top: -20px;
border-radius:0;
border: none;
background: ${COLORS.primaryBlue};
color: ${COLORS.primaryWhite};
font-size: 15px;

:hover{
  cursor: pointer;
  color: ${COLORS.primaryBlue};
  background:#222
}

@media (max-width:768px) {
width: 100%;

}
`
export const Img =styled.img `

width: 100%;
height: 300px;
`