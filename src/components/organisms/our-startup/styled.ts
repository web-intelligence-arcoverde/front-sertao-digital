import styled from 'styled-components';
import { COLORS } from 'src/constants';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
  text-align: center;
 background: #222222;
  color:${COLORS.primaryWhite} ;


h1 {
    font-size: 50px;
    margin: 30px;
}
p {
    font-size: 20px;
}
`;

export const ContainerCard =styled.div`
display: flex;
flex-wrap: wrap;
justify-content: space-around;
`