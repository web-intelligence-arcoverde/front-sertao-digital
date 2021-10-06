import { ItemMenu } from 'src/components/atoms/Ul/MenuItemNavbarDesktop'
import { ItemMenuList } from './style'

export const NavbarMenuDesktop = () => {
  return (
    <ItemMenuList>
      <ItemMenu location="#home" label="Menu" />
      <ItemMenu location="#home" label="Menu" />
      <ItemMenu location="#home" label="Menu" />
      <ItemMenu location="#home" label="Menu" />
      <ItemMenu location="#home" label="Menu" />
    </ItemMenuList>
  )
}
