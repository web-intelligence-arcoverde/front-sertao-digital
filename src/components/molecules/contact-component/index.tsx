import { Container } from './style'

const Contact = ({ title, descripton }: any) => {
  return (
    <Container>
      <h2>{title}</h2>
      <p>{descripton}</p>
    </Container>
  )
}

export default Contact
