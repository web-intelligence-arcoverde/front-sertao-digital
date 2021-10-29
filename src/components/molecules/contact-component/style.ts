import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  text-align: start;
  flex-direction: column;
  max-width: 24ch;
  font-family: 'Roboto', sans-serif;
  color: white;
  margin-left: 30%;
  @media (max-width:768px){
    margin-left:5%;

  }

  h2 {
    font-size: 20px;
    margin-bottom: 6px;
  }

  p {
    font-size: 16px;
  }
`
