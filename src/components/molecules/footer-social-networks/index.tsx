import { ReactComponent as FacebookIcon } from 'assets/icons/facebook.svg'
import { ReactComponent as InstagramIcon } from 'assets/icons/instagram.svg'
import { ReactComponent as LinkedinIcon } from 'assets/icons/linkedin.svg'
import { ReactComponent as TwitterIcon } from 'assets/icons/twitter.svg'

import { Container } from 'src/components/atoms/Container'

const Index = () => {
  return (
    <Container style={{ color: 'white' }}>
      <h3 style={{ marginBottom: '10px' }}>Redes Sociais</h3>
      <Container direction="row">
        <FacebookIcon />
        <div style={{ marginRight: '12px' }} />
        <LinkedinIcon />
        <div style={{ marginRight: '12px' }} />
        <TwitterIcon />
        <div style={{ marginRight: '12px' }} />
        <InstagramIcon />
      </Container>
    </Container>
  )
}

export default Index
