import Contact from 'src/components/molecules/contact-component'

import { Container } from 'src/components/atoms/Container'
import styled from 'styled-components'

import Map from 'components/atoms/Map'

import ContactInformation from 'components/molecules/footer-contact-information'



export const MainContainer = styled(Container)`

padding-top: 30px;
  @media (max-width: 768px) {
    flex-direction:column;

  }
`

export const Footer = () => {
  return (
    <MainContainer
    direction="row"
    color="primaryBlue"
    align="center"
    justify="center"
    padding={5}

    >
      
        <ContactInformation />
       
     

      <Map/>

     
    </MainContainer>
  )
}
