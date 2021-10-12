import styled from 'styled-components'

export const Container = styled.div`
  height: 100%;

  iframe {
    border-radius: 20px;
    width: 600px;
    height: 100%;
    border: none;
  }
  @media (max-width: 764px) {
    iframe {
      width: 95%;
    }
  }
`
