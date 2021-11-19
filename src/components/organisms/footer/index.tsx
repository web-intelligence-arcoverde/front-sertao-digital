import Contact from 'src/components/molecules/contact-component'

import { Container } from 'src/components/atoms/Container'
import styled from 'styled-components'

import Map from 'components/atoms/Map'
import { Title } from './styled'
import ContactInformation from 'components/molecules/footer-contact-information'



export const MainContainer = styled(Container)`

width:100%;
padding-top: 30px;
  @media (max-width: 768px) {
    flex-direction:column;
    
  }
`

export const Footer = () => {
  return (
    <>
      <Container justify="center" align="center">
        <Title>
          <h1>Fale conosco </h1> <hr />

        </Title>
      </Container>
      <MainContainer
        direction="row"
        color="primaryBlue"
        align="center"
        justify="center"
        padding={5}

      >
        <ContactInformation />

        <Map />

      </MainContainer>
    </>
  )
}
