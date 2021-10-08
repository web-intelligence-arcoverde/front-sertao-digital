import React from 'react'
import { Container } from './styled'

export const Map = () => {
  return (
    <Container>
      <iframe
        title="map"
        id="maps"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1973.41440810288!2d-37.05373289204934!3d-8.41846699848643!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7a81bdd32ab4ba5%3A0x13f7c8df0a8ab25c!2sCentro%20de%20Cultura!5e0!3m2!1spt-BR!2sbr!4v1633532224857!5m2!1spt-BR!2sbr"
      />
    </Container>
  )
}
export default Map
