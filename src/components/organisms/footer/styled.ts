import styled from 'styled-components'
import { COLORS } from 'src/constants'

export const Container = styled.div`
  display: flex;
  flex-direction: row;

  background: ${COLORS.primaryBlue};

 
`
export const Title =styled.div`
display: flex;
background:${COLORS.primaryBlue};
width:100%;
color:${COLORS.primaryWhite};
justify-content: center;
padding-top: 25px;
@media (max-width:768px){
  font-size: 13px;
}

hr {
  width :72%;
border-bottom:2px solid white;
place-self: center;
margin-left: 30px;

@media (max-width:768px){
  width: 40%;
}
}
`
