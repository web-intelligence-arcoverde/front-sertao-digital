import { Container } from 'src/components/atoms/Container'

import styled from 'styled-components'

import Background from 'assets/images/background-tech.png'

export const H1 = styled.h1`
  font-family: 'Roboto', sans-serif;
  line-height: 32px;
  color: #72818d;
  font-weight: 500;
  text-align: center;
  line-height: 46px;
  font-size: 32px;

  @media (max-width: 890px) {
    font-size: 30px;
    line-height: 32px;
    line-height: 40px;
  }

  @media (max-width: 582px) {
    font-size: 26px;
    line-height: 26px;
    line-height: 36px;
  }

  @media (max-width: 414px) {
    font-size: 22px;
    line-height: 22px;
    line-height: 30px;
  }
`

export const StyledContainer = styled(Container)`
  @media (max-width: 1400px) {
    width: 60%;
  }

  @media (max-width: 1035px) {
    width: 70%;
  }

  @media (max-width: 414px) {
    width: 90%;
  }
`
export const MainContainer = styled(Container)`
  background-image: url(${Background});
  background-size: auto;
  background-position: center;

  @media (max-width: 414px) {
    width: 100%;
    height: 28%;
  }
`

export const Header = () => {
  return (
    <MainContainer height={40} justify="center" align="center">
      <StyledContainer width={50} justify="center" align="center">
        <H1>
          Espaço voltado para a geração de negócios inovadores e transformadores
          que reúne startups, médias e grandes empresas e potenciais
          investidores.
        </H1>
      </StyledContainer>
    </MainContainer>
  )
}
