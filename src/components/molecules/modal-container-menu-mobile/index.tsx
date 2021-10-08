import { ItemMenuMobile } from 'src/components/atoms/Ul/MenuItemNavbarMobile'
import { Container, MenuContainer } from './style'

export const ModalContainerMenuMobile = () => {
  return (
    <Container>
      <MenuContainer>
        <ItemMenuMobile location="#" label="Teste" />
        <ItemMenuMobile location="#" label="Teste" />
        <ItemMenuMobile location="#" label="Teste" />
        <ItemMenuMobile location="#" label="Teste" />
        <ItemMenuMobile location="#" label="Entrar" />
      </MenuContainer>
    </Container>
  )
}
