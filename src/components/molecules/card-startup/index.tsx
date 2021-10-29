import { Container } from './styled'

const CardStartup = ({ title, descripton, img, icon }: any) => {
  return (
    <Container>
      <img src={img} width="80px" />
      <h2>{title}</h2>
      <p>{descripton}</p>
      <img src={icon} width="30px" />
    </Container>
  )
}

export default CardStartup
