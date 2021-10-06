import { ItemMenuLi, Link } from './style'

interface ItemMenuProps {
  location: string
  label: string
}
export const ItemMenuMobile = ({ location, label }: ItemMenuProps) => {
  return (
    <ItemMenuLi>
      <Link href={location}>{label}</Link>
    </ItemMenuLi>
  )
}
