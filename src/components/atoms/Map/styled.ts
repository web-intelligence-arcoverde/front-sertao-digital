import styled from 'styled-components'

export const Container = styled.div`
  iframe {
    border-radius: 20px;
    width: 600px;
    height: 300px;
  }
  @media (max-width: 764px) {
    iframe {
      width: 95%;
    }
  }
`
