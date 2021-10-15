import { Container } from './styled'
import React from 'react';

const StartInformation = ({ title, descripton }:any) => {
  return (
    <Container>
      <h2>{title}</h2>
      <p>{descripton}</p>
    </Container>
  )
}

export default StartInformation;