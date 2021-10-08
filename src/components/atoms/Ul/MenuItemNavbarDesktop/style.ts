import styled from 'styled-components'
import { COLORS } from 'src/constants'

export const ItemMenuUl = styled.ul``

export const ItemMenuLink = styled.a`
  padding-bottom: 10px;
  margin: 0px 20px;

  color: ${COLORS.primaryGray};
  font-family: 'Roboto', sans-serif;
  font-size: 16px;
  font-weight: 300;

  &:hover {
    border-bottom: 1px solid ${COLORS.primaryGray};
    opacity: 0.7;
  }
`
