import Contact from 'src/components/molecules/contact-component'

import { Container } from 'src/components/atoms/Container'
import styled from 'styled-components'

import Map from 'components/atoms/Map'

import ContactInformation from 'components/molecules/footer-contact-information'
import SocialNetworks from 'components/molecules/footer-social-networks/'


export const MainContainer = styled(Container)`
  @media (max-width: 768px) {
    flex-direction:column    
  }
`

export const Footer = () => {
  return (
    <MainContainer
      direction="row"
      color="primaryBlue"
      height={45}
      align="center"
      justify="space-between"
      padding={50}
    >
      <Container direction="row">
        <ContactInformation />
        <SocialNetworks />
      </Container>

      <Map />
    </MainContainer>
  )
}
