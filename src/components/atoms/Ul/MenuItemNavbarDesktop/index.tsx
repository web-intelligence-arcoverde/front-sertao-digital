import { ItemMenuUl, ItemMenuLink } from './style'

interface ItemMenuProps {
  location: string
  label: string
}
export const ItemMenu = ({ location, label }: ItemMenuProps) => {
  return (
    <ItemMenuUl>
      <ItemMenuLink href={location}>{label}</ItemMenuLink>
    </ItemMenuUl>
  )
}
