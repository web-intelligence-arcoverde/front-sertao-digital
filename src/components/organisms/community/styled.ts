import styled from 'styled-components';

export const Container = styled.div`
width: 75%;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  align-self: center;

  @media (min-width:701px) and (max-width:900px) {
    width: 100%;
    
  }
`;