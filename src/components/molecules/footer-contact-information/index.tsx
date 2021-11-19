import { Container } from 'src/components/atoms/Container'
import Contact from 'src/components/molecules/contact-component'

import  './style.css'


const Index = () => {
  return (
    <Container direction="column" justify = "center" align ="start"  >
      
      <Contact 
        title="Endereço"
        descripton="Av. Dom Pedro II, 311-355, Santa Luzia, Arcoverde - Pernambuco "
      />
      <Container height={8} />

      <Contact 
      title="Telefone" 
      descripton="(87) 9 9105-4786" />

      <Container height={8} />
      <Contact className = "CardInfo"
      title="Email " 
      descripton="suporte@sertaodigital.org" />

<Container height={8} />

      <Contact className = "CardInfo"
        title="Horário"
        descripton="Seg - Sex: 08:00 ás 18:00"
        descripton2="Sab - Dom:Fechado"
      />
    </Container>
  )
}

export default Index
