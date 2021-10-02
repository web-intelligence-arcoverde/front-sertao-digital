import styled from 'styled-components'
import { COLORS } from 'src/constants'

export const NavBarMenuContainer = styled.header`
  display: flex;
  flex-direction: row;
  width: 100%;
  padding: 0px 10px;
  background-color: ${COLORS.primaryWhite};

  @media (max-width: 800px) {
    justify-content: space-between;
  }
`

export const ContainerListMenu = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  li {
    @media (max-width: 800px) {
      display: none;
    }
  }
`
