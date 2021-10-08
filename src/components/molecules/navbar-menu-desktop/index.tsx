import { ItemMenu } from 'src/components/atoms/Ul/MenuItemNavbarDesktop'
import Button from 'components/atoms/Button/Contained/Button'
import { Container } from 'src/components/atoms/Container'
import { ItemMenuList, ContainerButton } from './style'

export const NavbarMenuDesktop = () => {
  const redirectLogin = () => {
    console.log('tirar error')
  }
  return (
    <Container direction="row" align="center">
      <ItemMenuList>
        <ItemMenu location="#home" label="Menu" />
        <ItemMenu location="#home" label="Menu" />
        <ItemMenu location="#home" label="Menu" />
        <ItemMenu location="#home" label="Menu" />
        <ItemMenu location="#home" label="Menu" />
      </ItemMenuList>

      <ContainerButton>
        <Button onClick={() => redirectLogin}>Entrar</Button>
      </ContainerButton>
    </Container>
  )
}
