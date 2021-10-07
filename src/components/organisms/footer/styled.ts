import styled from 'styled-components';
import { COLORS } from 'src/constants';


export const Container = styled.div`
  display:flex;
  justify-content: space-evenly;
  background: ${COLORS.primaryBlue};
  text-align: center;
  align-items: center;
  margin: 0;
  padding: 5%;
  width: 100%;
  color: ${COLORS.primaryWhite};
  
@media (max-width:768px) {
flex-direction: column;

}
`;
export const Img = styled.img`
    height: auto; 
    width: auto; 
    max-width: 300px; 
    max-height: 600px;
    border-radius:20px;

    
`
export const Icons = styled.img`
width:30px;
margin: 3%;
margin-right: 10%;
text-align: center;

`
export const CardIcons =styled.div `
text-align: start;
display: flex;


`
export const Left =styled.div`
width: 20%;
display: flex;
flex-wrap: wrap;

@media (max-width:768px)

  {
    width: 100%;
    align-items: center;
    justify-content: center;
  }


p {
  margin-right: 10px;
  margin-bottom: 10px;
  text-align: center;

 
}
`

