import styled from 'styled-components'
import { COLORS } from 'src/constants'

export const ItemMenuLi = styled.li`
  padding: 1rem 0;
  margin: 0 1rem;
`

export const Link = styled.a`
  color: ${COLORS.primaryGray};
  font-family: 'Roboto', sans-serif;
  font-weight: 400;
  font-size: 16px;

  &:hover {
    color: opacity(0.7);
  }
`
