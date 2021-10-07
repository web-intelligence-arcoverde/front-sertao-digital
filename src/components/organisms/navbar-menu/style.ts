import styled from 'styled-components'
import { COLORS } from 'src/constants'

export const NavBarMenuContainer = styled.header`
  display: flex;
  flex-direction: row;
  width: 100%;
  padding: 0px 10px;
  background-color: ${COLORS.primaryWhite};

  justify-content: space-between;

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

export const ContainerBut = styled.div`
  width: 120px;
  display: flex;
  align-items: center;

  margin-left: 20px;

  @media (max-width: 800px) {
    display: none;
  }
`

export const Button = styled.button`
  width: 100%;
  height: 44px;

  background-color: ${COLORS.primaryBlue};
  color: ${COLORS.primaryWhite};

  font-family: Roboto, sans-serif;

  border: none;

  border-radius: 8px;
`
