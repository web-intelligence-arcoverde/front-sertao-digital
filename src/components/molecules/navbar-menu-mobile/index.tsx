import { ReactComponent as IconMenu } from 'assets/icons/menu.svg'
import { IconMenuMobile } from './style'

export const NavbarMenuMobile = ({ handleMenu }: any) => {
  return (
    <IconMenuMobile>
      <IconMenu onClick={handleMenu} />
    </IconMenuMobile>
  )
}
