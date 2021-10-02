import { NavBarMenu } from 'src/components/organisms/navbar-menu'

import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  @media (max-width: 800px) {
  }
`

export const ContainerSize = styled.div`
  display: flex;
  flex-direction: column;
  width: 70%;

  @media (max-width: 800px) {
    width: 100%;
  }
`

export const Home = () => {
  return (
    <Container>
      <ContainerSize>
        <NavBarMenu />
      </ContainerSize>
    </Container>
  )
}
