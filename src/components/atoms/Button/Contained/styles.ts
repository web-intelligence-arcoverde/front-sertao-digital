import styled from 'styled-components'
import { COLORS } from 'src/constants'

export const Container = styled.button`
  width: 100%;
  height: 44px;

  background-color: ${COLORS.primaryBlue};
  color: ${COLORS.primaryWhite};

  font-family: Roboto, sans-serif;

  border: none;

  border-radius: 8px;

  &:hover {
    opacity: 0.7;
  }
`
