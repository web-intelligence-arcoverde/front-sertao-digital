import styled from 'styled-components'
import { COLORS } from 'src/constants'

export const Container = styled.div`
  position: absolute;
  width: 100%;
  top: 80px;
  background-color: ${COLORS.primaryWhite};
  z-index: 1000;
  transition: 0.6s;
`

export const MenuContainer = styled.ul``

export const ItemMenu = styled.li`
  color: ${COLORS.primaryBrown};
  padding: 1rem 0;
  margin: 0 1rem;
`
