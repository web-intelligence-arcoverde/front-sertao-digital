import styled from 'styled-components'
import { COLORS } from 'src/constants'

export const ItemMenuUl = styled.ul`
  margin: 10px;
`

export const ItemMenuLink = styled.a`
  padding: 10px;
  color: ${COLORS.primaryDarkGray};
  &:hover {
    color: ${COLORS.primaryBlack};
    background-color: ${COLORS.primaryBlue};
    border-radius: 6px;
  }
`
