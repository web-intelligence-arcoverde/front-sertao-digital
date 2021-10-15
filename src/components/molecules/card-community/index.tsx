
import {Container,Button,Img} from './styled'

const CardCommunity = ({img,button,title,description}:any) => {
  return (

      <Container>
          <Img src={img} />
            <Button>{button}</Button>
            <h1>{title}</h1>
            <p>{description}</p>
            <hr/>
      </Container>
  );
}

export default CardCommunity;