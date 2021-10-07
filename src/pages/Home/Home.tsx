import { NavBarMenu } from 'src/components/organisms/navbar-menu'

import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`

export const ContainerSize = styled.div`
  display: flex;
  flex-direction: column;
  width: 90%;

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
