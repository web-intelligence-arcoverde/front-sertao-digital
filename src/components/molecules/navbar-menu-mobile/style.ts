import styled from 'styled-components'

export const IconMenuMobile = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;

  @media (min-width: 800px) {
    display: none;
  }
`
