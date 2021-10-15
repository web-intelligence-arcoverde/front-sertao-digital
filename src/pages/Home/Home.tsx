import { Footer } from 'src/components/organisms/footer'
import { NavBarMenu } from 'src/components/organisms/navbar-menu'
import { Header } from 'src/components/organisms/header'

import styled from 'styled-components'
import Startup from 'src/components/organisms/startup/'
import OurStartp from 'src/components/organisms/our-startup'
import Community from 'src/components/organisms/community'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  background-color: #f8fafa;
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
      <Header />
      <Startup/>
      <OurStartp/>
      <Community/>
      <Footer />
    </Container>
  )
}
