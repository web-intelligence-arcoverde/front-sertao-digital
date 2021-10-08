import styled from 'styled-components'
import { COLORS } from 'src/constants'

export const Container = styled.div`
  display: flex;
  justify-content: space-evenly;
  background: ${COLORS.primaryBlue};
  text-align: center;
  align-items: center;
  margin: 0;
  padding-top: 2%;
  width: 100%;
  color: ${COLORS.primaryWhite};

  @media (max-width: 768px) {
    flex-direction: column-reverse;
  }
`
