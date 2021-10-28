import styled from 'styled-components'

export const Container = styled.div`
  height: 400px;
 

  iframe {
    border-radius: 20px;
    width: 600px;
    height: 90%;
    border: none;
  }
  @media (max-width:764px) {
    display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  justify-items: center;
  height: 600px;
    iframe {
      width: 90vw;
      height: 90%;
      

    }
  }
`
