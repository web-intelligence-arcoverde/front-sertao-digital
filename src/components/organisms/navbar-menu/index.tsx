import { useState } from 'react'

import { NavbarMenuDesktop } from 'src/components/molecules/navbar-menu-desktop'
import { NavbarMenuMobile } from 'src/components/molecules/navbar-menu-mobile'
import { ModalContainerMenuMobile } from 'src/components/molecules/modal-container-menu-mobile'
import { LogoContainer } from 'src/components/molecules/container-logo'

import {
  NavBarMenuContainer,
  ContainerListMenu,
  Button,
  ContainerBut,
} from './style'

const ContainerButton = ({ text, children }: any) => {
  return <Button>{children}</Button>
}
export const NavBarMenu = () => {
  const [visibleMenuModalMobile, setVisibleMenuModalMobile] =
    useState<boolean>(false)

  const handleMenu = () => {
    setVisibleMenuModalMobile(!visibleMenuModalMobile)
  }

  return (
    <>
      <NavBarMenuContainer>
        <LogoContainer />
        <div style={{ display: 'flex' }}>
          <ContainerListMenu>
            <NavbarMenuMobile handleMenu={handleMenu} />
            <NavbarMenuDesktop />
          </ContainerListMenu>
          <ContainerBut>
            <ContainerButton> Entrar </ContainerButton>
          </ContainerBut>
        </div>
      </NavBarMenuContainer>
      {visibleMenuModalMobile && <ModalContainerMenuMobile />}
    </>
  )
}
