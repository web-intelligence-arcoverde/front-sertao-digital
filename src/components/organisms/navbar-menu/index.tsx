import { useState } from 'react'

import { NavbarMenuDesktop } from 'src/components/molecules/navbar-menu-desktop'
import { NavbarMenuMobile } from 'src/components/molecules/navbar-menu-mobile'
import { ModalContainerMenuMobile } from 'src/components/molecules/modal-container-menu-mobile'
import { LogoContainer } from 'src/components/molecules/container-logo'

import { NavBarMenuContainer, ContainerListMenu } from './style'

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
        <ContainerListMenu>
          <NavbarMenuMobile handleMenu={handleMenu} />
          <NavbarMenuDesktop />
        </ContainerListMenu>
      </NavBarMenuContainer>
      {visibleMenuModalMobile && <ModalContainerMenuMobile />}
    </>
  )
}
